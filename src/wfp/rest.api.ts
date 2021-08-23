import Axios, { AxiosRequestConfig } from 'axios';
import { DetailedError } from './code-mapping';
import { WAYFORPAY_API } from './constants';
import { validateSuccessResponse } from './util';

const axios = Axios.create({
    baseURL: WAYFORPAY_API,
});

export type BaseResponseDetails = { reason: string; reasonCode: number };

type ClarifiedResponse<R> = R extends BaseResponseDetails ? R : R & BaseResponseDetails;

type SuccessResponse<T> = {
    value: T;
    error: undefined;
};

type FailResponse = {
    value: undefined;
    error: DetailedError;
};

type ValidatedResponse<T> = SuccessResponse<T> | FailResponse;

const sampleError: DetailedError = {
    code: 1,
    name: 'Unknown Error',
    reason: 'Unknown reason',
    messageForClient: 'Try again later. Please report problem if continue.',
    whoCanHelp: 'Product support',
};

// TODO validate DTO better - including type-match and other restrictions
const assertDetailedError = (err: any): err is DetailedError => {
    if (typeof err !== 'object') {
        return false;
    }
    const hasAllKeys = Object.keys(sampleError).every(k => {
        return k in err;
    });
    return hasAllKeys;
};

class RestApi {
    // TODO use specific API methods for every kind of transaction
    async baseCall<R = BaseResponseDetails, B = any>(
        body: B,
        config?: AxiosRequestConfig,
    ): Promise<ValidatedResponse<R>> {
        const { data } = await axios.post<ClarifiedResponse<R>>('', body, config);
        try {
            validateSuccessResponse(data);
            return {
                value: data,
                error: undefined,
            };
        } catch (error) {
            if (!assertDetailedError(error)) {
                throw new Error(JSON.stringify(error));
            }
            return {
                value: undefined,
                error,
            };
        }
    }
}

export const restApi = new RestApi();
