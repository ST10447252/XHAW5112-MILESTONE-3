import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/colors'

const SixMonth = ({navigation}) => {
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
        <Image source={require('../../assets/images/Learn.jpg')} style={styles.Splash} />
        <Text style={styles.Description}>
        Our six-month programs provide in-depth training in key areas such as First Aid, Sewing, Landscaping, and Life Skills. These courses equip participants with advanced, practical skills to boost employability and open new career opportunities.
        </Text>

      
      </View>
      
      <ScrollView horizontal style={styles.courses}>
        <TouchableOpacity style={styles.FirstAid} onPress={() => navigation.navigate('FirstAid')}>
          <Image source={require('../../assets/figma/first-aid-kit.png')} style={{width: 60, height: 60}}/>
          <Text style={styles.tag}>
            First Aid
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Sewing}onPress={() => navigation.navigate('Sewing')}>
          <Image source={require('../../assets/figma/sewing.png')} style={{width: 60, height: 60}}/>
          <Text style={styles.tag}>
            Sewing
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Landscaping} onPress={() => navigation.navigate('Landscaping')}>
          <Image source={require('../../assets/figma/forest.png')} style={{width: 60, height: 60}}/>
          <Text style={styles.tag}>
            Landscaping
          </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.Lifeskills} onPress={() => navigation.navigate('Lifeskills')}>
          <Image source={require('../../assets/figma/life-skills.png')} style={{width: 60, height: 60}}/>
          <Text style={styles.tag}>
            Life Skills
          </Text>
          </TouchableOpacity>


        </ScrollView>
      </View>
  )
}

export default SixMonth

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

  FirstAid: {
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

  Sewing: {
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

  Landscaping: {
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