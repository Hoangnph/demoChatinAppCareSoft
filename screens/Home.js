import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Base64 from '../Base64';

class Home extends Component {

    openChatWebview() {
        let token = "", domain = "vi2", domainId = "1", queryString = "?domain=" + encodeURIComponent(domain) + "&domainId=" + encodeURIComponent(domainId) + "&token=" + encodeURIComponent(token);
        let qStr = Base64.btoa(queryString);

        this.props.navigation.navigate('Browser', { title: "CSKH", link: 'https://test.caresoft.vn:18444/getChatViewMobile?key=' + qStr })
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnChat} onPress={this.openChatWebview.bind(this)}>
                    <Image source={require('../images/chat.png')}
                        style={{ width: 40, height: 40, tintColor: "#fff" }} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonList: {
        flex: 1,
        justifyContent: 'center'
    },
    button: {
        margin: 10,
        backgroundColor: '#356bca',
        borderRadius: 5,
        padding: 10
    },
    text: {
        color: '#fff',
        textAlign: 'center'
    },
    btnChat: {
        position: 'absolute',
        right: 40,
        bottom: 40,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#91ca1a",
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Home