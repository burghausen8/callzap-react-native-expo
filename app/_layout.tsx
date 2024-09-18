import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Linking } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function RootLayout() {
  const [number, setNumber] = useState('');

  const handlePress = (num: String) => {
    setNumber(prev => prev + num);
  };

  const handleDelete = () => {
    setNumber(number.slice(0, -1));
  };

  const handleCall = () => {
    Linking.openURL(`https://api.whatsapp.com/send/?phone=55${number}&text&type=phone_number&app_absent=0`)
    .catch(err => console.error("Failed to open URL: ", err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{number}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {[1, 2, 3].map((item) => (
          <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item.toString())}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {[4, 5, 6].map((item) => (
          <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item.toString())}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {[7, 8, 9].map((item) => (
          <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item.toString())}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonContainer}>
        {['*', 0, '#'].map((item) => (
          <TouchableOpacity key={item} style={styles.button} onPress={() => handlePress(item.toString())}>
            <Text style={styles.buttonText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.callButton} onPress={handleCall}>
          <FontAwesome name="phone" size={28} color="white" />
        </TouchableOpacity>
        { number.length > 0 && (
          <TouchableOpacity style={styles.clearButton} onPress={handleDelete}>
         <MaterialIcons name="backspace" size={30} color="white" />
        </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  display: {
    width: '90%',
    height: 80,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  displayText: {
    fontSize: 32,
    color: '#fff'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '90%',
    marginBottom: 10
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: '#555555',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 28,
  },
  actionButtons: {
    flexDirection: 'row',
    marginTop: 40,
    height: 50,
    width: '90%',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  callButton: {
    width: 80,
    height: 80,
    backgroundColor: '#34C759',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -40 }]
  },
  clearButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 70
  },
  callButtonText: {
    color: '#fff',
    fontSize: 18,
  },
  clearButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});