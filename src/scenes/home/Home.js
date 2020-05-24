import React from 'react';
import {
    Text,
} from 'react-native';
import { Button } from '_UI';
import { connect } from 'react-redux';
import { logout } from '_store/actions';

const Main = ({ navigation, logout: _logout }) => {

    return (
        <Button onPress={() => { 
            _logout(); 
            navigation.popToTop();
        }}>{'Logout'}</Button>
    );
}

Main.propTypes = {

};

Main.defaultProps = {

};

const mapStateToProps = () => {
    return {};
};

const Home = connect(mapStateToProps, {
    logout
})(Main);

export { Home };