import Axios from 'axios';
import { WAYFORPAY_API } from './constants';

export const restApi = Axios.create({
    baseURL: WAYFORPAY_API,
});
