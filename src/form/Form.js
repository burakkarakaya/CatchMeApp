import React, { useImperativeHandle } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { TextField } from './components';
import Validation from './helper/Validation';
import PropTypes from 'prop-types';

function Form({ config }, ref) {

    useImperativeHandle(ref, () => {
        return {
            reset: () => {

            }
        };
    });

    const refFields = {},
        _fields = config['fields'] || [],
        _validation = Validation();

    // validation   
    const _checkValidation = () => {
        let isValid = true;
        Object
            .entries(refFields)
            .forEach(([ind, field]) => {
                const current = field.current,
                    _value = current.get(),
                    _obj = _fields[ind] || {},
                    _title = _obj['title'] || '',
                    validation = _obj['validation'] || [];

                if (validation.length > 0)
                    validation
                        .every((k) => {
                            var _key = k['key'] || '',
                                _control = _validation[_key]({ title: _title, value: _value, ...k });
                                
                            if (!_control.isValid) {
                                isValid = false;
                                console.warn(_control.msg || '')
                                current.set(_control.msg || '');
                                console.warn('dasdasd');
                                return;
                            }

                            console.warn(_control)
                            
                        });
            });

        console.warn('form status', isValid);
    }

    // fields create
    function getField(data, ind) {
        const type = data['type'] || 'text',
            refField = refFields[ind] = React.useRef();

        switch (type) {
            case 'text':
                return <TextField {...data} key={ind} ref={refField} />
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

    const fields = addFields();

    return (
        <View style={{ flex: 1, backgroundColor: 'red', paddingTop: 50 }}>
            {fields}

            <TouchableOpacity onPress={_checkValidation}>
                <Text>KAYDET</Text>
            </TouchableOpacity>
        </View>
    );
};

Form = React.forwardRef(Form);

Form.defaultProps = {
    config: {}
};

Form.propTypes = {
    config: PropTypes.object
};

export default Form;