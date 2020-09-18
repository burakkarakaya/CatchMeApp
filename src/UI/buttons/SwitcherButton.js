import React, { useState } from 'react';
import { Button } from './Button';
import PropTypes from 'prop-types';

/*
    <SwitcherButton value={true} buttons={[{ type: 'solid', title: 'DUELING' }, { type: 'solidGray', title: 'ASK FOR DUEL' }]} />
    <SwitcherButton value={false} buttons={[{ type: 'solid', title: 'DUELING' }, { type: 'solidGray', title: 'ASK FOR DUEL' }]} />
*/

const SwitcherButton = React.memo(({ onPress, buttons, data, value }) => {

    const [checked, setChecked] = useState(value);

    const _onPress = () => {

        setChecked(!checked);

        if (onPress)
            onPress({ ...data, checked });
    }
 
 
    return checked ? <Button type={buttons[0].type} onPress={_onPress}>{buttons[0].title}</Button> : <Button type={buttons[1].type} onPress={_onPress}>{buttons[1].title}</Button>;
});

SwitcherButton.defaultProps = {
    onPress: null,
    data: {},
    buttons: [],
    value: true,
};

SwitcherButton.propTypes = {
    onPress: PropTypes.func,
    data: PropTypes.object,
    buttons: PropTypes.array,
    value: PropTypes.bool,
};

export { SwitcherButton };