import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/colors'

const SixWeek = ({navigation}) => {
  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.pagecontainer} />
    
    <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('OfferPage')}>
            <Image source={require('../../assets/figma/left-arrow.png')} style={styles.backButton}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../assets/figma/planet-earth.png')} style={styles.logo}/>
        </TouchableOpacity> 

        <TouchableOpacity>
          <Image source={require('../../assets/figma/kyc.png')} style={styles.profile}/>
        </TouchableOpacity>
      </View>
      
      <View style={styles.courseOverview}>
        <Image source={require('../../assets/images/Short.jpg')} style={styles.Splash} />
        <Text style={styles.Description}>
        Our six-week short courses offer focused, hands-on training in Child Minding, Cooking, and Garden Maintenance. Perfect for individuals looking to quickly acquire new skills that enhance their daily work and entrepreneurial prospects.        </Text>

      
      </View>
      
      <ScrollView horizontal style={styles.courses}>
        <TouchableOpacity style={styles.ChildMinding} onPress={() => navigation.navigate('Childminding')}>
          <Image source={require('../../assets/figma/babysitter.png')} style={{width: 60, height: 60}}/>
          <Text style={styles.tag}>
            Child Minding
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Garden} onPress={() => navigation.navigate('Gardenmaintenance')}>
          <Image source={require('../../assets/figma/gardening.png')} style={{width: 60, height: 60}}/>
          <Text style={styles.tags}>
            Garden Maintenance
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Cooking} onPress={() => navigation.navigate('Cooking')} >
          <Image source={require('../../assets/figma/cooking.png')} style={{width: 60, height: 60}}/>
          <Text style={styles.tag}>
            Cooking
          </Text>
          </TouchableOpacity>



        </ScrollView>
      </View>
  )
}

export default SixWeek

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

  courseOverview: {
    padding: 20,
    alignItems: 'center',
  },

  Description: {
    padding: 5,
    fontSize: 20,
    fontWeight: '700',

  },

  Splash: {
    padding: 20,
    width: 360,
    height: 192,
    borderRadius: 20,
  },
  
  courses: {
    padding: 10,
    
  },

  tag: {
    fontSize: 15,
    color:"white"
  },

  tags: {
    fontSize: 15,
    color: 'white',
    width: '50%'
  },

   ChildMinding: {
    paddingLeft: 10,
    backgroundColor: Colors.Grove,
    width: 200,
    height: 90,
    marginEnd: 10,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    gap: 20,
    borderRadius: 10,
  },

  Garden: {
    paddingLeft: 10,
    backgroundColor: Colors.Grove,
    width: 200,
    height: 90,
    marginEnd: 10,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    gap: 20,
    borderRadius: 10,
  },

  Cooking: {
    paddingLeft: 10,
    backgroundColor: Colors.Grove,
    width: 200,
    height: 90,
    marginEnd: 10,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    gap: 20,
    borderRadius: 10,
  },

  Lifeskills: {
    paddingLeft: 10,
    backgroundColor: Colors.Grove,
    width: 200,
    height: 90,
    marginEnd: 10,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    gap: 20,
    borderRadius: 10,
  },
})