import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { Colors } from '../../assets/colors'

const Lifeskills = ({navigation}) => {
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
              <Image source={require('../../assets/images/lifeskills.jpg')} style={{ height: "60%", width: '100%', borderRadius: 20, }} />
          </View>
          
          <View style={styles.description}>
          <Text style={{color: Colors.Matte, fontWeight: '700'}}>
                  Life Skills - R1 500.00
              </Text>

              <Text>
              The Life Skills course is designed to equip participants with essential skills to navigate everyday challenges and improve their overall quality of life. This practical program covers a variety of critical topics, including:              </Text>
              
              <Text>
              Opening a Bank Account: Learn the steps to set up a bank account, understand various banking services, and manage finances effectively.
Basic Labour Law: Gain knowledge about your rights as an employee, including understanding contracts, working conditions, and protections under the law.
Reading and Writing Literacy: Enhance your reading and writing skills to better communicate and comprehend essential information in daily life.
Basic Numeric Literacy: Develop foundational math skills necessary for budgeting, shopping, and other everyday tasks.
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

export default Lifeskills

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