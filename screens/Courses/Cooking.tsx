import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/colors'

const Cooking = ({ navigation }) => {
    const courseDetails = {
        name: "Cooking",
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

        <TouchableOpacity>
          <Image source={require('../../assets/figma/kyc.png')} style={styles.profile}/>
        </TouchableOpacity>
          </View>

          <View style={styles.CourseOverview}>
              <Image source={require('../../assets/images/cooking.jpg')} style={{ height: "60%", width: '100%', borderRadius: 20, }} />
          </View>
          
          <View style={styles.description}>
          <Text style={{color: Colors.Matte, fontWeight: '700'}}>
                  Cooking - R 700.00
              </Text>

              <Text>
              The Cooking course is designed to teach participants the fundamentals of preparing nutritious and delicious family meals. This hands-on program covers essential cooking techniques and nutritional knowledge, including: 
              </Text>

              <Text>
              Nutritional Requirements: Understand the key components of a healthy diet, including the roles of proteins, carbohydrates, and vegetables.
Meal Planning: Learn how to plan balanced meals that cater to dietary needs and preferences.
Preparation Techniques: Master various cooking methods and techniques for preparing a range of dishes, from simple to more complex meals.
Cooking Skills: Develop practical skills in chopping, sautéing, baking, and presentation to enhance your culinary repertoire.
              </Text>
          </View>

          <TouchableOpacity style={styles.Button} onPress={handleAddCourse}>
              <Text style={{color: 'white'}}>
                  Add Course
              </Text>
          </TouchableOpacity>
    </View>
  )
}

export default Cooking

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