import React from 'react';
import { connect } from 'react-redux';
import { Profile, Drawer as DrawerContent } from '_subview';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function ProfileNavigator({ _member }) {
    return (
        <Drawer.Navigator
            drawerPosition={'right'}
            drawerContent={() => <DrawerContent />}
        >
            <Drawer.Screen
                name="Profile"
            >
                {props => <Profile {...props} {..._member} />}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
};

const mapStateToProps = ({ general }) => {
    const { member: _member } = general || {};
    return {
        _member
    };
};

export default connect(mapStateToProps)(ProfileNavigator)