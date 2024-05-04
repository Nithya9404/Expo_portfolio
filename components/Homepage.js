import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const HomePage = ({ navigation }) => {
  const navigateToAbout = () => {
    navigation.navigate('About');
  };

  const navigateToSkills = () => {
    navigation.navigate('Skills');
  };
  
  const navigateToProjects = () => {
    navigation.navigate('Projects');
  };
  
  const navigateToContact = () => {
    navigation.navigate('Contact');
  };

  const [text, setText] = useState('');
  const message = "Welcome to my portfolio";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= message.length) {
        setText(message.substring(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={styles.container}
    >
      {/* Top navigation */}
      <View style={styles.topNavContainer}>
        <TouchableOpacity onPress={navigateToAbout} style={styles.navButton}>
          <Text style={styles.navButtonText}>About Me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToSkills} style={styles.navButton}>
          <Text style={styles.navButtonText}>Skills</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToProjects} style={styles.navButton}>
          <Text style={styles.navButtonText}>Projects</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateToContact} style={styles.navButton}>
          <Text style={styles.navButtonText}>Social Media</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.typewriterText}>{text}</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  typewriterText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  topNavContainer: {
    position: 'absolute',
    top: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
  },
  navButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default HomePage;
