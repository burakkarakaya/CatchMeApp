import React, { useImperativeHandle } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { TextField } from './components';
import Validation from './helper/Validation';
import * as styles from './styles/';
import { Button } from '_UI';
import { MemberService } from '_services';
import PropTypes from 'prop-types';

function Form({ config, onPress, callback }, ref) {

    useImperativeHandle(ref, () => {
        return {
            reset: () => {

            }
        };
    });

    const _onPress = (data) => {
        if (onPress)
            onPress(data);
    }

    const _callback = (formData) => {
        if (callback)
            callback(formData);
    }

    const refFields = {},
        _fields = config['fields'] || [],
        _configStyle = config['styles'] || {},
        _validation = Validation();

    // validation
    function _checkCustomCase(k) {

        const _key = k['key'] || '';

        let obj = {};

        switch (_key) {
            case 'isEqual': {
                const rule = k['rule'] || '',
                    o = (refFields[rule] || {}),
                    order = o['order'] || '',
                    ref = o['ref'] || '';

                if (ref != '')
                    obj = { targetValue: ref.current.get(), targetTitle: (_fields[order] || {})['title'] || '' };

                break;
            }

            default:
                break;
        }

        return obj;
    }


    const _checkValidation = () => {
        let isValid = true,
            success = {};

        Object
            .entries(refFields)
            .forEach(([ind, item]) => {
                const current = item.ref.current,
                    _value = current.get(),
                    _obj = _fields[item.order] || {},
                    _id = _obj['id'] || '',
                    _title = _obj['title'] || '',
                    validation = _obj['validation'] || [];

                let b = true;
                if (validation.length > 0)
                    for (n in validation) {
                        const k = validation[n],
                            _key = k['key'] || '',
                            custom = _checkCustomCase(k),
                            _control = _validation[_key]({ title: _title, value: _value, ...k, ...custom });

                        if (!_control.isValid) {
                            isValid = false;
                            b = false;
                            current.showError(_control.msg || '');
                            break;
                        } else
                            current.hideError();
                    }

                if (b)
                    success[_id] = _value;
            });


        if (isValid)
            _callback(success);
    }

    // fields create
    function getField(data, ind) {
        let disAllow = ['button', 'validationButton'],
            _id = data['id'] || '',
            type = data['type'] || 'text',
            refField = null;

        if (!disAllow.includes(type))
            refField = refFields[_id] = { ref: React.useRef(), order: ind };

        switch (type) {
            case 'text':
                return <TextField style={_configStyle} {...data} key={ind} ref={refField.ref} />
            case 'button':
                return <Button onPress={_onPress} {...data.props} key={ind}>{data.title}</Button>
            case 'validationButton':
                return <Button onPress={_checkValidation} {...data.props} key={ind}>{data.title}</Button>

            default:
                return null;
        }
    }

    function addFields() {
        return _fields
            .map((data, ind) => {
                return getField(data, ind);
            });
    }

    const fields = addFields(),
        _style = _configStyle.general || {};

    return (
        <View style={[styles.general.wrapper, _style.wrapper]}>
            {fields}
        </View>
    );
};

Form = React.forwardRef(Form);

Form.defaultProps = {
    config: {},
    onPress: null,
};

Form.propTypes = {
    config: PropTypes.object,
    onPress: PropTypes.func,
};

export default Form;