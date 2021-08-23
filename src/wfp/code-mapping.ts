export const SUCCESS_WFP_CODE = 1100;

// TODO create i18n for messageForClient

export interface DetailedError {
    code: number;
    name: string;
    reason: string;
    messageForClient: string;
    whoCanHelp: string;
}

type errorCode = number;
export const ErrorCodeMap = new Map<errorCode, DetailedError>([
    [
        1101,
        {
            code: 1101,
            name: 'Declined To Card Issuer',
            reason: 'Відмова Банку емітента в проведенні операції',
            messageForClient:
                "Не вдалося здійснити оплату.\n\nЗв'яжіться з вашим банком або скористайтеся іншою картою",
            whoCanHelp: 'Банк емітент карти',
        },
    ],
    [
        1102,
        {
            code: 1102,
            name: 'Bad CVV2',
            reason: 'Невірний CVV код',
            messageForClient:
                'Не вдалося здійснити оплату.\n\nБудь ласка, переконайтеся в правильності введення параметрів і спробуйте ще',
            whoCanHelp: 'Банк емітент карти',
        },
    ],
    [
        1103,
        {
            code: 1103,
            name: 'Expired card',
            reason: 'Карта прострочена або невірно вказано термін дії',
            messageForClient:
                "Не вдалося здійснити оплату.\n\n\nЗв'яжіться з вашим банком або скористайтеся іншою картою.\n\nБудь ласка, переконайтеся в правильності введення установок і спробуйте ще",
            whoCanHelp: 'Банк емітент карти',
        },
    ],
    [
        1104,
        {
            code: 1104,
            name: 'Insufficient Funds',
            reason: 'Недостатньо коштів',
            messageForClient: 'Не вдалося здійснити оплату.\n\nНедостатньо коштів на карті',
            whoCanHelp: 'Банк емітент карти',
        },
    ],
    [
        1105,
        {
            code: 1105,
            name: 'Invalid Card',
            reason: 'Введено невірний номер карти, або карта в неприпустимому стані.',
            messageForClient:
                "Не вдалося здійснити оплату.\n\nЗв'яжіться з вашим банком або скористайтесь іншою карткою.\n\nБудь ласка, переконайтеся в правильності введення параметрів і спробуйте ще",
            whoCanHelp: 'Банк емітент карти',
        },
    ],
    [
        1106,
        {
            code: 1106,
            name: 'Exceed Withdrawal Frequency',
            reason: 'Перевищено ліміт операцій по карті - можливо картка не відкрита для оплати в інтернеті',
            messageForClient:
                "Не вдалося здійснити оплату.\n\nЗв'яжіться з вашим банком або скористайтесь іншою карткою.",
            whoCanHelp: 'Банк емітент карти',
        },
    ],
    [
        1108,
        {
            code: 1108,
            name: 'Three Ds Fail',
            reason: 'Неможливо виконати 3DS транзакцію, або невірний код підтвердження 3DS',
            messageForClient: "Зв'яжіться з вашим банком або скористайтесь іншою карткою.",
            whoCanHelp: 'Банк емітент карти',
        },
    ],
    [
        1109,
        {
            code: 1109,
            name: 'Format Error',
            reason: 'Помилка на стороні мерчанта - невірно сформована транзакція',
            messageForClient:
                "Не вдалося здійснити оплату.\n\nПовторіть спробу оплати пізніше або зв'яжіться з торговцем в адресу котрого здійснюєте платіж",
            whoCanHelp: 'торгівець',
        },
    ],
    [
        1110,
        {
            code: 1110,
            name: 'invalid Currency',
            reason: 'Помилка на стороні мерчанта- невірна валюта',
            messageForClient:
                "Не вдалося здійснити оплату.\n\nПовторіть спробу оплати пізніше або зв'яжіться з торговцем в адресу котрого здійснюєте платіж",
            whoCanHelp: 'торгівець',
        },
    ],
    [
        1112,
        {
            code: 1112,
            name: 'Duplicate Order ID',
            reason: 'Дублюючий orderid',
            messageForClient:
                "Не вдалося здійснити оплату.\n\nПовторіть спробу оплати пізніше або зв'яжіться з торговцем в адресу котрого здійснюєте платіж",
            whoCanHelp: 'торгівець',
        },
    ],
    [
        1113,
        {
            code: 1113,
            name: 'Invalid signature.',
            reason: 'Неправильний підпис мерчанта.',
            messageForClient:
                "Не вдалося здійснити оплату.\n\nПовторіть спробу оплати пізніше або зв'яжіться з торговцем в адресу котрого здійснюєте платіж",
            whoCanHelp: 'торгівець',
        },
    ],
    [
        1114,
        {
            code: 1114,
            name: 'Fraud',
            reason: 'Фродова транзакція згідно антіфрод фільтрів',
            messageForClient:
                "Не вдалося здійснити оплату.\n\nПовторіть спробу оплати пізніше або зв'яжіться з торговцем в адресу котрого здійснюєте платіж",
            whoCanHelp: 'торгівець',
        },
    ],
    [
        1115,
        {
            code: 1115,
            name: 'Parameter `{param_name}` is missing',
            reason: "Один або кілька обов'язкових параметрів не було передано",
            messageForClient:
                "Не вдалося здійснити оплату.\n\nПовторіть спробу оплати пізніше або зв'яжіться з торговцем в адресу котрого здійснюєте платіж",
            whoCanHelp: 'торгівець',
        },
    ],
    [
        1116,
        {
            code: 1116,
            name: 'Token not found',
            reason: 'Спроба списання з картки клієнта по токену неуспішна - використовується неправильне значення',
            messageForClient:
                "Не вдалося здійснити оплату.\n\nПовторіть спробу оплати пізніше або зв'яжіться з торговцем в адресу котрого здійснюєте платіж",
            whoCanHelp: 'торгівець',
        },
    ],
    [
        1117,
        {
            code: 1117,
            name: 'API Not Allowed',
            reason: 'Даний API не дозволено до використання для мерчанта',
            messageForClient:
                "Не вдалося здійснити оплату.\n\nПовторіть спробу оплати пізніше або зв'яжіться з торговцем в адресу котрого здійснюєте платіж",
            whoCanHelp: 'psp',
        },
    ],
    [
        1118,
        {
            code: 1118,
            name: 'Merchant Restriction',
            reason: 'Перевищено ліміт Магазину або транзакції заборонені Магазину',
            messageForClient:
                "Не вдалося здійснити оплату.\n\nПовторіть спробу оплати пізніше або зв'яжіться з торговцем в адресу котрого здійснюєте платіж",
            whoCanHelp: 'psp',
        },
    ],
    [
        1120,
        {
            code: 1120,
            name: 'Authentication unavailable',
            reason: '3-D Secure авторизація недоступна',
            messageForClient:
                "Не вдалося здійснити оплату.\n\nЗв'яжіться з вашим банком або скористайтесь іншою карткою.",
            whoCanHelp: 'psp',
        },
    ],
    [
        1121,
        {
            code: 1121,
            name: 'Account Not Found',
            reason: 'Аккаунт не знайдено',
            messageForClient:
                "Не вдалося здійснити оплату.\n\nЗв'яжіться з торговцем в адресу котрого здійснюєте платіж.",
            whoCanHelp: 'psp',
        },
    ],
    [
        1122,
        {
            code: 1122,
            name: 'Gate Declined',
            reason: 'Відмова шлюзу в виконанні операції',
            messageForClient:
                "Не вдалося здійснити оплату.\n\nПовторіть спробу оплати пізніше\n\nЯкщо повідомлення відображається знов, зв'яжіться з нами, ми будемо намагатися вам допомоги.",
            whoCanHelp: 'psp',
        },
    ],
    [
        1123,
        {
            code: 1123,
            name: 'Refund Not Allowed',
            reason: 'Повернення не може бути виконано',
            messageForClient: '',
            whoCanHelp: 'psp',
        },
    ],
    [
        1124,
        {
            code: 1124,
            name: 'Cardholder session expired',
            reason: 'Сесія користувача минула',
            messageForClient: 'Час на проведення платежу сплинув, повторіть оплату знов',
            whoCanHelp: 'psp',
        },
    ],
    [
        1125,
        {
            code: 1125,
            name: 'Cardholder canceled the request',
            reason: 'Транзакція скасована користувачем',
            messageForClient: '',
            whoCanHelp: 'psp',
        },
    ],
    [
        1126,
        {
            code: 1126,
            name: 'Illegal Order State',
            reason: 'Спроба виконання неприпустимої операції для поточного стану платежу',
            messageForClient: '',
            whoCanHelp: 'psp',
        },
    ],
    [
        1127,
        {
            code: 1127,
            name: 'Order Not Found',
            reason: 'Транзакцію не знайдено',
            messageForClient: '',
            whoCanHelp: 'psp',
        },
    ],
    [
        1128,
        {
            code: 1128,
            name: 'Refund Limit Excended',
            reason: 'Перевищено допустиму кількість спроб зробити повернення (Refund)',
            messageForClient: '',
            whoCanHelp: 'psp',
        },
    ],
    [
        1129,
        {
            code: 1129,
            name: 'ScriptError',
            reason: 'Помилка сценарію',
            messageForClient: '',
            whoCanHelp: 'psp',
        },
    ],
    [
        1130,
        {
            code: 1130,
            name: 'Invalid Amount',
            reason: 'Неправильна сума',
            messageForClient:
                'Не вдалося здійснити оплату.\n\nПеревірте правильність переданої суми в запиті.',
            whoCanHelp: 'psp',
        },
    ],
    [
        1131,
        {
            code: 1131,
            name: 'Transaction in processing',
            reason: 'Замовлення обробляється. Замовлення все ще знаходиться в процесі обробки платіжним шлюзом',
            messageForClient:
                'Ваш платіж обробляється. Як тільки транзакція буде оброблена, Ви отримаєте повідомлення про стан платежу',
            whoCanHelp: 'psp\n\nБанк емітент карти',
        },
    ],
    [
        1132,
        {
            code: 1132,
            name: 'Transaction Is Delayed',
            reason: 'Клієнт вирішив відкласти оплату, йому на пошту надіслане посилання для завершення платежу',
            messageForClient:
                'Вами створено замовлення .. на сайті ... Зробити оплату Ви можете протягом ХХ годин ХХ хвилин.',
            whoCanHelp: '',
        },
    ],
    [
        1133,
        {
            code: 1133,
            name: 'Invalid commission',
            reason: 'Невірна комісія.',
            messageForClient: '',
            whoCanHelp: 'торгівець',
        },
    ],
    [
        1134,
        {
            code: 1134,
            name: 'Transaction is pending',
            reason: 'Транзакція на перевірці Antifraud',
            messageForClient:
                'Транзакція знаходиться на ручній перевірці співробітника моніторингу.',
            whoCanHelp: 'psp',
        },
    ],
    [
        1135,
        {
            code: 1135,
            name: 'Card limits failed',
            reason: 'Перевищено ліміт по карті',
            messageForClient:
                "Не вдалося здійснити оплату.Будь ласка, спробуйте пізніше або зв'яжіться з торговцем на адресу котрого здійснюєте оплату",
            whoCanHelp: 'psp',
        },
    ],
    [
        1136,
        {
            code: 1136,
            name: 'Merchant Balance Is Very Small',
            reason: 'Недостатньо коштів на балансі мерчанта',
            messageForClient: ' ',
            whoCanHelp: 'psp',
        },
    ],
    [
        1137,
        {
            code: 1137,
            name: 'Invalid Confirmation Amount',
            reason: 'Неправильна сума підтвердження веріфікації карти',
            messageForClient: 'Верифікація карти неуспішна',
            whoCanHelp: '',
        },
    ],
    [
        1138,
        {
            code: 1138,
            name: 'RefundInProcessing',
            reason: 'Запит на повернення прийнятий і буде проведено як тільки на балансі магазину буде достатньо грошей для його проведення.',
            messageForClient: ' ',
            whoCanHelp: 'psp',
        },
    ],
    [
        1139,
        {
            code: 1139,
            name: 'External decline while credit',
            reason: 'Відмова у зарахуванні коштів на карту одержувача',
            messageForClient: 'Відмова у зарахуванні коштів на карту одержувача',
            whoCanHelp: 'psp\n\nБанк емітент карти',
        },
    ],
    [
        1140,
        {
            code: 1140,
            name: 'Exceed Withdrawal Frequency While Credit',
            reason: 'Перевіщено ліміт при зарахуванні коштів на карту одержувача.',
            messageForClient: 'Перевищено ліміт при зарахуванні коштів на карту одержувача.',
            whoCanHelp: 'psp\n\nБанк емітент карти',
        },
    ],
    [
        1141,
        {
            code: 1141,
            name: 'Partial void is not supported',
            reason: 'Часткова відміна холда недоступна',
            messageForClient: 'Часткова відміна холда недоступна',
            whoCanHelp: 'psp',
        },
    ],
    [
        1142,
        {
            code: 1142,
            name: 'Refused a credit',
            reason: 'Відмовлено в кредіті',
            messageForClient: 'Не вдалося здійснити оплату.',
            whoCanHelp: 'psp',
        },
    ],
    [
        1143,
        {
            code: 1143,
            name: 'Invalid phone number',
            reason: 'Невірний номер телефону',
            messageForClient: 'Невірний номер телефону',
            whoCanHelp: '',
        },
    ],
    [
        1144,
        {
            code: 1144,
            name: 'Transaction is awaiting delivery',
            reason: ' ',
            messageForClient: ' ',
            whoCanHelp: 'psp',
        },
    ],
    [
        1145,
        {
            code: 1145,
            name: 'Transaction is awaiting credit decision',
            reason: 'Очікування решення про надання кредиту',
            messageForClient:
                "Не вдалося здійснити оплату.\n\nЗв'яжіться з вашим банком або скористайтеся іншою картою",
            whoCanHelp: 'psp',
        },
    ],
    [
        1146,
        {
            code: 1146,
            name: 'Restricted card',
            reason: 'Карта заблокована в Банку',
            messageForClient: ' ',
            whoCanHelp: '',
        },
    ],
    [
        1147,
        {
            code: 1147,
            name: 'Client is not found',
            reason: 'Клієнта не знайдено',
            messageForClient: ' ',
            whoCanHelp: '',
        },
    ],
    [
        1148,
        {
            code: 1148,
            name: 'Client is not linked',
            reason: 'Клієнта знайдено, але не додано до поточного мерчанту',
            messageForClient: ' ',
            whoCanHelp: '',
        },
    ],
    [
        1149,
        {
            code: 1149,
            name: 'Client is locked',
            reason: 'Клієнта тимчасово заблоковано',
            messageForClient: ' ',
            whoCanHelp: '',
        },
    ],
    [
        5100,
        {
            code: 5100,
            name: 'Wait 3ds data',
            reason: 'Очікування 3d secure веріфікації',
            messageForClient: ' ',
            whoCanHelp: '',
        },
    ],
]);
