import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/colors'

const FirstAid = ({navigation}) => {
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
              <Image source={require('../../assets/images/FirstAid.jpg')} style={{ height: "60%", width: '100%', borderRadius: 20, }} />
          </View>
          
          <View style={styles.description}>
          <Text style={{color: Colors.Matte, fontWeight: '700'}}>
                  First Aid - R1 500.00
              </Text>

              <Text>
              The First Aid course provides comprehensive training in emergency medical response, equipping participants with the skills needed to handle life-threatening situations. The course covers key topics such as:
              </Text>
              <Text>
              Wounds and Bleeding: Learn to manage different types of wounds and control bleeding effectively.
              </Text>
              <Text>
              Burns and Fractures: Understand how to assess and treat burns and fractures in an emergency.
              </Text>
              <Text>
              Emergency Scene Management: Gain the ability to evaluate and manage emergency situations with calm and clear judgment.
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

export default FirstAid

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