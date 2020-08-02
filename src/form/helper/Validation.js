import { Translation } from '../../context';

export const Validation = () => {
    const t = Translation('formErrorMessage'),
        utils = {
            detect: k => {
                return k.length == 0 ? false : true;
            },
            trimText: k => {
                k = k || '';
                return k.replace(/(^\s+|\s+$)/g, '');
            },
            cleanText: k => {
                k = k || '';
                return k.replace(/\s+/g, '');
            },
            getErrorMsg: function ({ message = '', title = '', value = '' }) {
                return message
                    .replace(/{title}/g, title)
                    .replace(/{value}/g, value);
            }
        };

    return {
        isEmpty: ({ title = '', value = '' }) => {
            return utils.detect(utils.cleanText(value)) ? { isValid: true } : { isValid: false, msg: utils.getErrorMsg({ message: t('isEmpty'), title: title, value: value }) };
        },
        isMin: ({ title = '', value = '', rule = 2 }) => {
            const n = utils.cleanText(value);
            return n.length < rule ? { isValid: false, msg: utils.getErrorMsg({ message: t('isMin'), title: title, value: rule }) } : { isValid: true };
        },
        isMax: ({ value = '', title = '', rule = 100 }) => {
            const n = Utils.cleanText(value);
            return n.length > rule ? { isValid: false, msg: utils.getErrorMsg({ message: t('isMax'), title: title, value: rule }) } : { isValid: true };
        },
        isSelection: ({ value = -1, title = '' }) => {
            return value == -1 ? { isValid: false, msg: utils.getErrorMsg({ message: t('isSelection'), title: title }) } : { isValid: true };
        },
        isChecked: ({ value = false, title = '' }) => {
            return value == false ? { isValid: false, msg: utils.getErrorMsg({ message: t('isChecked'), title: title }) } : { isValid: true };
        },
        isMail: ({ value = '', title = '' }) => {
            const rgx = /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i;

            return rgx.test(value) ? { isValid: true } : { isValid: false, msg: utils.getErrorMsg({ message: t('isMail'), title: title }) };
        },
        isPassword: ({ value = '', title = '' }) => {
            return { isValid: true };
        },
        isTwo: ({ value = '', title = '', rule = {} }) => {

            let k = utils.trimText(value);
            k = k.split(' ');

            const { first = 3, last = 2 } = rule,
                firstName = k[0] || '',
                lastName = k[1] || '';

            if (k.length <= 1 || firstName.length < first || lastName.length < last)
                return { isValid: false, msg: utils.getErrorMsg({ message: t('isTwo'), title: title }) };

            return { isValid: true };
        },
        isEqual: ({ value = '', title = '', targetValue = '', targetTitle = '' }) => {
            return (value != '' && value != targetValue) ? { isValid: false, msg: utils.getErrorMsg({ message: t('isEqual'), title: title, value: targetTitle }) } : { isValid: true };
        },
        isPhone: ({ value = '', title = '', targetValue = false, targetTitle = '' }) => {
            return targetValue ? { isValid: true } : { isValid: false, msg: utils.getErrorMsg({ message: t('isPhone'), title: title, value: targetTitle }) };
        },
    };
};

export default Validation;