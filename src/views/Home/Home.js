import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import theme from '../../themes';

class Home extends Component {
    static navigationOptions = ({navigation}) => ({
        title: ('Breweries list'),
        headerStyle: {
            backgroundColor: theme.colors.buttonColor,
        },
        headerRight: (
            <Icon style={{paddingRight: 15, color: theme.colors.black}}
                  name="plus"
                  size={20}/>
        ),
    });

    render() {
        return (
            <View>
                <Text>{test}</Text>
            </View>
        );
    }
}

export default Home;
