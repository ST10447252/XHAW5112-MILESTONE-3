import { StyleSheet, Text, View, Image, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/colors'

const ChildMinding = ({ navigation }) => {
    const courseDetails = {
        name: "Child Minding",
        price: 750,
      };
    
      const handleAddCourse = () => {
        navigation.navigate('Checkout', { course: courseDetails });
      };
  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.pagecontainer} />
    
    <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('SixWeek')}>
            <Image source={require('../../assets/figma/left-arrow.png')} style={styles.backButton}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../../assets/figma/planet-earth.png')} style={styles.logo}/>
        </TouchableOpacity> 

        <TouchableOpacity onPress={() => navigation.navigate('Checkout')}>
          <Image source={require('../../assets/figma/cart.png')} style={styles.profile}/>
        </TouchableOpacity>
          </View>

          <View style={styles.CourseOverview}>
              <Image source={require('../../assets/images/ChildMinding.jpg')} style={{ height: "60%", width: '100%', borderRadius: 20, }} />
          </View>
          
          <View style={styles.description}>
          <Text style={{color: Colors.Matte, fontWeight: '700'}}>
                  Child Minding - R 750.00
              </Text>

              <Text>
              The Child Minding course provides essential knowledge and skills for caring for children of various age groups. It is designed to equip participants with the ability to provide safe, nurturing, and educational care for infants and toddlers. The course covers the following topics:              </Text>
              <Text>
              Birth to Six-Month-Old Care: Learn to handle the unique needs of newborns, including feeding, sleeping, and basic hygiene.              </Text>
          </View>

          <TouchableOpacity style={styles.Button} onPress={handleAddCourse}>
              <Text style={{color: 'white'}}>
                  Add Course
              </Text>
          </TouchableOpacity>
    </View>
  )
}

export default ChildMinding

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