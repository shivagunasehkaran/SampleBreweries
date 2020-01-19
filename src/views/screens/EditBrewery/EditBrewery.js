import React, {Component} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import theme from '../../../themes';

class EditBrewery extends Component {
    static navigationOptions = ({navigation}) => ({
        title: ('Edit breweries'),
        headerStyle: {
            backgroundColor: theme.colors.buttonColor,
        },
    });

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
        };
    }

    handleTitle = (text) => {
        this.setState({title: text});
    };

    handleContent = (text) => {
        this.setState({content: text});
    };

    save = (title, content) => {
        alert('title: ' + title + ' content: ' + content);
    };

    renderBlogEditForm = () => {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    {('Enter new brewery')}
                </Text>
                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Title"
                           placeholderTextColor="#686868"
                           autoCapitalize="none"
                           onChangeText={this.handleTitle}/>
                <Text style={styles.title}>
                    {('Enter new brewery details')}
                </Text>
                <TextInput style={styles.input}
                           underlineColorAndroid="transparent"
                           placeholder="Content"
                           placeholderTextColor="#686868"
                           autoCapitalize="none"
                           onChangeText={this.handleContent}/>

                <TouchableOpacity
                    style={styles.saveButton}
                    onPress={
                        () => this.save(this.state.title, this.state.content)
                    }>
                    <Text style={styles.saveButtonText}> {('Save')} </Text>
                </TouchableOpacity>
            </View>
        );
    };

    render() {
        return (
            <View style={{flex: 1}}>
                {this.renderBlogEditForm()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
    title: {
        fontSize: 15,
        paddingLeft: 15,
        color: theme.colors.black,
    },
    input: {
        margin: 15,
        height: 40,
        paddingLeft: 5,
        borderColor: theme.colors.black,
        borderWidth: 1,
    },
    saveButton: {
        backgroundColor: theme.colors.buttonColor,
        padding: 10,
        margin: 15,
        height: 40,
    },
    saveButtonText: {
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        color: theme.colors.black,
    },
});

export default EditBrewery;
