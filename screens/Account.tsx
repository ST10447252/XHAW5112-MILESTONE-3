import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, TextInput } from 'react-native'
import React from 'react'
import { Colors } from '../assets/colors'

const Account = ({navigation}) => {
  return (
    <View style={styles.container}>
          <SafeAreaView style={styles.pagecontainer} />
          
          <View style={styles.navbar} >
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                  <Image source={require('../assets/figma/left-arrow.png')} style={styles.backButton}/>
              </TouchableOpacity>
              <TouchableOpacity>
                  <Image source={require('../assets/figma/planet-earth.png')} style={styles.logo}/>
              </TouchableOpacity> 
          </View>

          <Text style={styles.welcomeText}>
          Access your personalized dashboard by logging in. Keep track of your course selections, view your fee quotes, and manage your account details. New users can easily sign up to explore and register for our empowering courses.
          </Text>

          <View style={styles.LoginSection}>
              <TextInput placeholder='Name&Surname' placeholderTextColor={'black'} style={styles.name} />
              <TextInput placeholder='Mobile/Email' placeholderTextColor={'black'} style={styles.contact} />
              <TextInput placeholder='Desribe yourself' placeholderTextColor={'black'} style={styles.describe} />
              
              <TouchableOpacity style={styles.button}>
              <Text style={{color: 'white'}}>
                  Enter
              </Text>
          </TouchableOpacity>
          </View>

         
    </View>
  )
}

export default Account

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.Blue,
        flex: 1,
    },

    pagecontainer: {
        backgroundColor: Colors.HighlightDark,
    },

    navbar: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    backButton: {
        width: 30,
        height: 30,
    },

    logo: {
        width: 30,
        height: 30,
        
    },

    welcomeText: {
        padding: 20,
        fontSize: 20,
        fontWeight: '700'
    },

    LoginSection: {
        alignItems: 'center',
        padding: 10,
        gap: 10
    },

    name: {
        padding: 10,
        backgroundColor: Colors.Honcho,
        width: '60%',
        height: '15%',
        textAlign: 'center',
        borderRadius: 10,
    },

    contact: {
        padding: 10,
        backgroundColor: Colors.Honcho,
        width: '60%',
        height: '15%',
        textAlign: 'center',
        borderRadius: 10,
    },

    describe: {
        padding: 10,
        backgroundColor: Colors.Honcho,
        width: '60%',
        height: '25%',
        textAlign: 'center',
        borderRadius: 10,
    },

    button: {
        alignItems: 'center',
        width: '50%',
        padding: 20,
        backgroundColor: Colors.Matte,
        borderRadius: 10,

    }

})