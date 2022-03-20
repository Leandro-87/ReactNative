import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import CadastrarMinhaBarbearia from '../pages/CadastrarMinhaBarbearia';

const AuthStack = createStackNavigator();

function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
            <AuthStack.Screen name="SignUp" component={SignUp} options={{headerTitle: 'Criar minha conta'}} />
            <AuthStack.Screen name="CadastrarMinhaBarbearia" component={CadastrarMinhaBarbearia} options={{headerTitle: 'Sou barbeiro'}} />
        </AuthStack.Navigator>
    );
}

export default AuthRoutes;