import { BaseNavigationContainer } from '@react-navigation/core';
import * as React from "react";
import { stackNavigatorFactory } from "react-nativescript-navigation";
import { HomeScreen } from '../screens/HomeScreen';
import { EditNoteScreen } from '../screens/EditNoteScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { TestFeatures } from '../components/TestFeatures';

const StackNavigator = stackNavigatorFactory();

export const MainStack = () => (
    <BaseNavigationContainer>
        <StackNavigator.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: true,
            }}
        >
            <StackNavigator.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Notes'
                }}
            />
            <StackNavigator.Screen
                name="EditNote"
                component={EditNoteScreen}
                options={{
                    title: 'Edit Note'
                }}
            />
            <StackNavigator.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    title: 'Settings'
                }}
            />
            <StackNavigator.Screen
                name="Test"
                component={TestFeatures}
                options={{
                    title: 'Test Features'
                }}
            />
        </StackNavigator.Navigator>
    </BaseNavigationContainer>
);