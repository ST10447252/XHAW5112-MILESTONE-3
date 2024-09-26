import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native'
import React from 'react'
import { Colors } from '../../assets/colors'

const GardenMaintenance = ({navigation}) => {
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
              <Image source={require('../../assets/images/gardening.jpg')} style={{ height: "60%", width: '100%', borderRadius: 20, }} />
          </View>
          
          <View style={styles.description}>
          <Text style={{color: Colors.Matte, fontWeight: '700'}}>
                  Garden Maintenance - R 750.00
              </Text>

              <Text>
              The Garden Maintenance course provides participants with the essential skills and knowledge needed to care for and maintain both domestic and professional gardens. This course covers a variety of topics, including:              
              </Text>
              
              <Text>
              Watering Techniques: Learn the appropriate methods for watering plants, including understanding the needs of indigenous and exotic species.
Pruning and Propagation: Master the techniques of pruning to promote healthy growth and learn how to propagate plants effectively.
Planting Techniques: Understand the best practices for planting different types of plants to ensure their success in the garden.
Seasonal Care: Gain insights into seasonal gardening tasks, including preparing gardens for various weather conditions and managing pests and diseases.
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

export default GardenMaintenance

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