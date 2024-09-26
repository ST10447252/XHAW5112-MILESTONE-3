import { StyleSheet, Text, TouchableOpacity, View,Image, SafeAreaView } from 'react-native'
import React from 'react'
import { Colors } from '../assets/colors'

const OfferPage = ({navigation}) => {
  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.pagecontainer} />
    
    <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/figma/left-arrow.png')} style={styles.backButton}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../assets/figma/planet-earth.png')} style={styles.logo}/>
        </TouchableOpacity> 

        <TouchableOpacity>
          <Image source={require('../assets/figma/kyc.png')} style={styles.profile}/>
        </TouchableOpacity>
      </View>

      <View style={styles.whatweoffer}>
        <Text style={styles.offertext}>
          What We Offer
        </Text>

        <Text style={styles.description}>
          At Empowering the Nation, we provide specialized training designed to upskill domestic workers and gardeners. Our courses range from six-month learnerships to six-week short skills programs, covering vital areas such as First Aid, Sewing, Landscaping, Child Minding, Cooking, Garden Maintenance, and Life Skills. These programs empower individuals with marketable skills, enhancing their employment opportunities and fostering entrepreneurship. Select from a variety of courses to build a brighter, more empowered future.
        </Text>
      </View>

      <View style={styles.coursecards}>
        <TouchableOpacity style={styles.sixmonthcard} onPress={() => navigation.navigate('SixMonth')}>
          <Image source={require('../assets/figma/books.png')} style={{width: 30, height: 30}}/>
          <Text style={{fontSize: 20, color: 'white', fontWeight: '500', padding: 20,}}>
            Six Month Courses
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.sixweekcard} onPress={() => navigation.navigate('SixWeek')}>
        <Image source={require('../assets/figma/books.png')} style={{width: 30, height: 30}}/>
        <Text style={{fontSize: 20, color: 'white', fontWeight: '500', padding: 20,}}>
            Six Week Courses
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OfferPage

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
  profile: {
    width: 30,
    height: 30,
  },
  
  whatweoffer: {
    padding: 10,
    alignItems: 'center',
  },

  offertext: {
    padding: 20,
    fontSize: 20,
    fontWeight: '500',
  },

  description: {
    fontSize: 15,
    fontWeight: '500',

  },

  coursecards: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 15,
  },

  sixmonthcard: {
    padding: 10,
    backgroundColor: Colors.Green,
    borderRadius: 20,
    width: '50%',
    height: 200,
  },

  sixweekcard: {
    padding: 10,
    backgroundColor: Colors.Green,
    borderRadius: 20,
    width: '50%',
    height: 200,
  }
})