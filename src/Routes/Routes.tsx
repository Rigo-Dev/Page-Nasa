import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParams } from "../Types";
import Home from "../Views/Home/Home";
import Detail from "../Views/Detail/Detail";

const Stack = createNativeStackNavigator<RootStackParams>();

const routeScreenDefaultOptions ={
    headerStyle:{
        backgroundColor: "#rgba(7,26,93,255)",
    },
    headerTitleStyle:{
        color: "#fff"
    }

}

const Routes = () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={routeScreenDefaultOptions}/>
            <Stack.Screen name="Detail"component={Detail} options={routeScreenDefaultOptions}/>
        </Stack.Navigator>
    </NavigationContainer>
);

export default Routes;
