import React, { useEffect } from 'react';
import {
    View,
    Image,
} from 'react-native';
import { connect } from 'react-redux';
import { signIn, resetAuthState, isLoaded } from '_store/actions';
import { Status } from '_constants';
import { images } from '_assets';
import { Customers } from '_services/base';
import PropTypes from 'prop-types';

import { assetsLoader, typography, audio } from '_module';

const Main = ({ status, isLoaded: _isLoaded, signIn: _signIn, resetAuthState: _resetAuthState }) => {

    useEffect(() => {

        const getUser = async () => {

            try {
                const user = await Customers.getUser();
                _signIn(user);

            } catch (error) {

            }
        };

        assetsLoader()
            .then(() => {
                typography();

                audio();

                getUser();
            });

    }, []);

    useEffect(() => {

        if (status === Status.SUCCESS || status === Status.ERROR)
            _isLoaded(true);

        return () => {
            _resetAuthState();
        }

    }, [status]);


    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                style={{ width: 174, height: 51, alignSelf: 'center', marginBottom: 12, }}
                source={images.logo}
            />
        </View>
    );
}

Main.propTypes = {
    status: PropTypes.oneOf(Object.values(Status)).isRequired,
    signIn: PropTypes.func.isRequired,
    resetAuthState: PropTypes.func.isRequired,
};

Main.defaultProps = {

};

const mapStateToProps = ({ auth }) => {
    const { signInStatus: status } = auth;
    return {
        status,
    };
};

const Loading = connect(mapStateToProps, {
    signIn,
    resetAuthState,
    isLoaded
})(Main);

export { Loading };