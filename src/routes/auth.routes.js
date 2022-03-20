import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthStak = createStackNavigator();

function AuthRoutes(){
    return(
        <AuthStak.Navigator>
            <AuthStak.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
            <AuthStak.Screen name="SignUp" component={SignUp} options={{title: 'Criar conta'}} />
        </AuthStak.Navigator>
    );
}

export default AuthRoutes;