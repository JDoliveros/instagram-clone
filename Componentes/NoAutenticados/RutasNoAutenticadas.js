import React from 'react';
import { StyleSheet, Text, View ,Button} from 'react-native';
import {StackNavigator,createStackNavigator} from 'react-navigation';

const SignIn = (props) => {
    const {navigation}=props;
   return  (
    <View>
        <Text>Este es el componente para logearse</Text>
        <Button
            title="Ir a SignUp"
            onPress={()=>{navigation.navigate('SignUp')}}
        />
    </View>
   );
};
const SignUp = (props) => {
    const {navigation}=props;
    return (
        <View>
            <Text>Componente SignUp</Text>
            <Button
                title="Regresar a SignIn"
                onPress={()=>{navigation.goBack()}}
            />
        </View>
    )
};

const RutasNoAutenticadas=createStackNavigator({
    SignIn:{
        screen:SignIn
    },
    SignUp:{
        screen:SignUp
    }
});
export {RutasNoAutenticadas};