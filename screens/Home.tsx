import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Colors } from '../assets/colors'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
          <SafeAreaView style={styles.pagecontainer} />
          
          <View style={styles.navbar}>
              <TouchableOpacity>
                  <Image source={require('../assets/figma/planet-earth.png')} style={styles.logo}/>
              </TouchableOpacity> 

              <TouchableOpacity>
                  <Image source={require('../assets/figma/kyc.png')} style={styles.profile} />
                  
              </TouchableOpacity>
          </View>

          <View style={styles.WelcomeSection}>
              <Text style={styles.logotext}>
                  Empowering The Nation
              </Text>

              <Text style={styles.Description}>
              Founded in 2018, Empowering the Nation is dedicated to providing essential skills training for domestic workers and gardeners. Through our six-month and six-week courses, we equip individuals with the expertise to enhance their employability, earn higher wages, and even start their own businesses. Our mission is to uplift communities by offering quality education that creates opportunities for growth and empowerment.
              </Text>

              <TouchableOpacity style={styles.courseCard} onPress={() => navigation.navigate('OfferPage')}>
                  <Text>
                      What we offer
                  </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.createProfile} onPress={() => navigation.navigate('Account')}>
                  <Text style={styles.createprofiletext}>
                      Let's get to know you!, Create your Profile now!
                  </Text>
                  <Image source={require('../assets/figma/kyc.png')} style={styles.createprofileicon}/>
              </TouchableOpacity>
          </View>
    </View>
  )
}

export default Home

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

    logo: {
        width: 50,
        height: 50,
        
    },

    profile: {
        width: 50,
        height: 50,
    },

    WelcomeSection: {
        padding: 20,
        gap: 10,
    },

    courseCard: {
        padding: 20,
        backgroundColor: Colors.Honcho,
        borderRadius: 10,
        alignItems: 'center',
    },

    createProfile: {
        padding: 20,
        backgroundColor: Colors.Honcho,
        flexDirection: 'row',
        gap: 10, 
        borderRadius: 10,
    },

    createprofiletext: {
        width: '60%',
        fontSize: 20,

    },

    createprofileicon: {
        width: 60,
        height: 60,
    },

    logotext: {
        fontSize: 20,
        fontWeight: '700',
        alignSelf: 'center',
        color: 'white',
    },

    Description: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
        fontWeight: '400',
        margin: 10,
    }
})