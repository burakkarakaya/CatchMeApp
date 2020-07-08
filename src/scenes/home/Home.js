import React from 'react';
import {
    View,
} from 'react-native';
import { Button } from '_UI';
import { connect } from 'react-redux';
import { logout } from '_store/actions';

const Main = ({ navigation, logout: _logout }) => {

    return null;
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