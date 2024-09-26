import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/colors'

const Landscaping = ({navigation}) => {
  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.pagecontainer} />
    
    <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('SixMonth')}>
            <Image source={require('../../assets/figma/left-arrow.png')} style={styles.backButton}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../assets/figma/planet-earth.png')} style={styles.logo}/>
        </TouchableOpacity> 

        <TouchableOpacity>
          <Image source={require('../../assets/figma/kyc.png')} style={styles.profile}/>
        </TouchableOpacity>
          </View>

          <View style={styles.CourseOverview}>
              <Image source={require('../../assets/images/landscaping.jpg')} style={{ height: "60%", width: '100%', borderRadius: 20, }} />
          </View>
          
          <View style={styles.description}>
          <Text style={{color: Colors.Matte, fontWeight: '700'}}>
                  Landscaping - R1 500.00
              </Text>

              <Text>
              The Landscaping course equips participants with the skills necessary to design and maintain beautiful and functional outdoor spaces. This comprehensive program covers a range of topics, including:              </Text>
              
              <Text>
              Understanding Plants: Learn about indigenous and exotic plants and trees, including their growth requirements and best uses in landscaping.
Design Principles: Discover the fundamental principles of landscape design, including balance, color, texture, and scale.
Fixed Structures: Gain knowledge on incorporating fixed structures such as fountains, statues, benches, and built-in braais into garden designs.
Aesthetics of Plant Layout:
              </Text>
          </View>

          <TouchableOpacity style={styles.Button}>
              <Text style={{color: 'white'}}>
                  Add Course
              </Text>
          </TouchableOpacity>
    </View>
  )
}

export default Landscaping

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
    
      
    CourseOverview: {
        padding: 10,
        alignItems: 'center',
    },
    
    description: {
        bottom: 180,
        marginStart: 25,
    },

    Button: {
        bottom: 150,
        padding: 20,
        backgroundColor: Colors.Matte,
        alignItems: 'center',

    }
})