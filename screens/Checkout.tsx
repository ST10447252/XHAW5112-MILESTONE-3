import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Colors } from '../assets/colors';


const Checkout = ({ route, navigation }) => {
  const [courses, setCourses] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    if (route.params && route.params.course) {
      const newCourse = route.params.course;
      setCourses(prevCourses => [...prevCourses, newCourse]);
    }
  }, [route.params]);

  useEffect(() => {
    calculateTotal();
  }, [courses]);

  const calculateTotal = () => {
    const subtotal = courses.reduce((acc, course) => acc + course.price, 0);
    setTotalPrice(subtotal);
    applyDiscount(subtotal);
  };

  const applyDiscount = (subtotal) => {
    let discountPercent = 0;
    if (courses.length === 2) discountPercent = 5;
    else if (courses.length === 3) discountPercent = 10;
    else if (courses.length > 3) discountPercent = 15;

    const discountAmount = (subtotal * discountPercent) / 100;
    setDiscount(discountAmount);
  };

  const finalTotal = totalPrice - discount;

  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.pagecontainer} />
    
    <View style={styles.navbar}>
        <TouchableOpacity>
            <Image source={require('../assets/figma/left-arrow.png')} style={styles.backButton}/>
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={require('../assets/figma/planet-earth.png')} style={styles.logo}/>
        </TouchableOpacity> 

        <TouchableOpacity>
          <Image source={require('../assets/figma/kyc.png')} style={styles.profile}/>
        </TouchableOpacity>
          </View>
      <Text style={styles.header}>Checkout</Text>
      <View style={styles.summary}>
        {courses.map((course, index) => (
          <Text key={index}>
            {course.name} - R {course.price.toFixed(2)}
          </Text>
        ))}
      </View>
      <Text>Subtotal: R {totalPrice.toFixed(2)}</Text>
      <Text>Discount: R {discount.toFixed(2)}</Text>
      <Text style={styles.total}>Total: R {finalTotal.toFixed(2)}</Text>

      <TouchableOpacity style={styles.confirmButton}>
        <Text style={{ color: 'white' }}>Confirm Purchase</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Checkout;

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
  
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.Matte,
    marginBottom: 20,
  },
  summary: {
    marginBottom: 20,
  },
  total: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 10,
  },
  confirmButton: {
    backgroundColor: Colors.Matte,
    padding: 15,
    alignItems: 'center',
  },
});
