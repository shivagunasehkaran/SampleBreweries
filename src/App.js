import React, {Component} from 'react';
import {Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Icon from 'react-native-vector-icons/FontAwesome5';

import theme from './themes';
import Home from './views/screens/Home';
import ShowBrewery from './views/screens/ShowBrewery';
import AddBrewery from './views/screens/AddBrewery';
import EditBrewery from './views/screens/EditBrewery';

const HomeScreen = createStackNavigator({
    Home: {
        screen: Home,
    },
});

const ShowBreweryScreen = createStackNavigator({
    ShowBrewery: {
        screen: ShowBrewery,
    },
});

const AddBreweryScreen = createStackNavigator({
    AddBrewery: {
        screen: AddBrewery,
    },
});

const EditBreweryScreen = createStackNavigator({
    EditBrewery: {
        screen: EditBrewery,
    },
});

const TabNavigator = createBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: ({tintColor}) => (
                    <Text style={{textAlign: 'center', fontSize: 10, color: tintColor}}>
                        {('Home')}
                    </Text>
                ),
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="home" size={horizontal ? 20 : 25} color={tintColor}/>,
            },
        },
        ShowBrewery: {
            screen: ShowBreweryScreen,
            navigationOptions: {
                tabBarLabel: ({tintColor}) => (
                    <Text style={{textAlign: 'center', fontSize: 10, color: tintColor}}>
                        {('Show Breweries')}
                    </Text>
                ),
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="clipboard" size={horizontal ? 20 : 25} color={tintColor}/>,
            },
        },
        AddBrewery: {
            screen: AddBreweryScreen,
            navigationOptions: {
                tabBarLabel: ({tintColor}) => (
                    <Text style={{textAlign: 'center', fontSize: 10, color: tintColor}}>
                        {('Add Breweries')}
                    </Text>
                ),
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="plus" size={horizontal ? 20 : 25} color={tintColor}/>,
            },
        },
        EditBrewery: {
            screen: EditBreweryScreen,
            navigationOptions: {
                tabBarLabel: ({tintColor}) => (
                    <Text style={{textAlign: 'center', fontSize: 10, color: tintColor}}>
                        {('Edit Breweries')}
                    </Text>
                ),
                tabBarIcon: ({horizontal, tintColor}) =>
                    <Icon name="edit" size={horizontal ? 20 : 25} color={tintColor}/>,
            },
        },
    },
    {
        tabBarOptions: {
            activeTintColor: theme.colors.buttonColor,
            inactiveTintColor: theme.colors.secondaryText,
            style: {
                backgroundColor: theme.colors.divider,
            },
        },
    },
);

const AppContainer = createAppContainer(TabNavigator);

class App extends Component {
    render() {
        return (
            <AppContainer/>
        );
    }
}

export default App;
