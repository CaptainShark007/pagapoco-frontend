import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Redirect, Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const RootNavigation = () => {
    const [isLogin, setIsLogin] = useState(false);
    useEffect(() => {
        SplashScreen.hideAsync();
    }, []);
    return(
        <>
            <Stack screenOptions = {{headerShown: false}} />
            {isLogin ? Redirect href={/(main)}} /> : <Redirect href={"/(auth)"} />}

        </>
    );
};