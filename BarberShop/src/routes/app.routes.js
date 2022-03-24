import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'

import Home from '../pages/Home'
import BuscarPeloMapa from '../pages/BuscarPeloMapa';
import Perfil from '../pages/Perfil';
import HomeBarbearia from '../pages/HomeBarbearia';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <AppDrawer.Navigator
        drawerStyle={{
            backgroundColor:'#111'
        }}
        drawerContentOptions={{
            labelStyle:{
                fontWeight: 'normal'
            },
            activeTintColor: '#fff',
            activeBackgroundColor: 'transparent',
            inactiveBackgroundColor: 'transparent',
            inactiveTintColor: '#ADB6B8',
            itemStyle:{
                marginVertical:2,
            }
        }}
        >
            <AppDrawer.Screen name="Home" component={Home} />
            <AppDrawer.Screen name="Buscar Pelo Mapa" component={BuscarPeloMapa} />
            <AppDrawer.Screen name="Perfil" component={Perfil} />
            <AppDrawer.Screen name="Home Barbearia" component={HomeBarbearia} />
        </AppDrawer.Navigator>
    );
}

export default AppRoutes;


