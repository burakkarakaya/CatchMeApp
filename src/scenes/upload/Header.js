import React from 'react';
import {
    View,
    Text,
    Image,
} from 'react-native';
import PropTypes from 'prop-types';
import {
    images
} from '_assets';

const Header = React.memo(({ data }) => {

    const _colors = {
        active: '#5E8DE6',
        passive: '#C4C4C4'
    };

    const _getDotted = ({ ind = 0, active = false, style }) => {
        const arr = [],
            color = active ? _colors['active'] : _colors['passive'],
            key = 'item-' + ind;

        for (var i = 0; i < 5; ++i)
            arr.push(<View key={`dotted-` + i} style={{ width: 3, height: 3, backgroundColor: color }} />);

        return <View key={key} style={[{ flexDirection: 'row', width: 32, height: 3, justifyContent: 'space-between', marginBottom: 20 }, style]}>{arr}</View>;
    };

    const _getButton = ({ ind = 0, title, ico, active = false, style }) => {
        const color = active ? _colors['active'] : _colors['passive'],
            key = 'item-' + ind,
            icon = images[ico] || '';

        return (
            <View key={key} style={[{ justifyContent: 'center', alignItems: 'center' }, style]}>
                <Image style={[{ width: 20, height: 20, marginBottom: 4 }]} source={icon} />
                <Text style={{ color: color }}>{title}</Text>
            </View>
        );
    }

    const _getButtons = () => {
        const arr = [];
        Object
            .entries(data)
            .forEach(([ind, item]) => {
                const { title, ico, type, active } = item,
                    style = ind > 0 ? { marginLeft: 15 } : {};

                switch (type) {
                    case 'dotted':
                        arr.push(_getDotted({ ind, active, style }));
                        break;

                    default:
                        arr.push(_getButton({ ind, title, ico, active, style }));
                        break;
                }
            });


        return (
            <View style={{ backgroundColor: '#F7F7F7', height: 70, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                {arr}
            </View>
        );
    };

    return _getButtons();
});

Header.propTypes = {
    data: PropTypes.array
};

Header.defaultProps = {
    data: []
};

export { Header };