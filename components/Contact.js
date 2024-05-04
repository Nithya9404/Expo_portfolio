import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import { Linking } from 'react-native';

export default function Contact() {
  const [text, setText] = useState('');
  const message = "Contact me....";

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

  const openSocialMediaLink = (url) => {
    Linking.openURL(url)
      .catch((err) => console.error('Failed to open URL: ', err));
  };

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={styles.container}
    >
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.typewriterText}>{text}</Text>
          <View style={styles.socialIconsTop}>
            <TouchableOpacity onPress={() => openSocialMediaLink('mailto:your.nithyalakshmigurupackiam9404@gmail.com')}>
              <Image source={require('../icons/gmail.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openSocialMediaLink('https://www.linkedin.com/in/nithyalakshmigurupackiam/')}>
              <Image source={require('../icons/linkedin.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openSocialMediaLink('https://www.hackerrank.com/Nithya_9404')}>
              <Image source={require('../icons/hacker_rank.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
          <View style={styles.socialIconsBottom}>
            <TouchableOpacity onPress={() => openSocialMediaLink('https://leetcode.com/nithya_04/')}>
              <Image source={require('../icons/leetcode.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openSocialMediaLink('https://github.com/Nithya9404')}>
              <Image source={require('../icons/github.png')} style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => openSocialMediaLink('https://www.kaggle.com/nithya9404')}>
              <Image source={require('../icons/kaggle.png')} style={styles.icon} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  typewriterText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ccc',
  },
  socialIconsTop: {
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'center',
  },
  socialIconsBottom: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    margin: 10,
  },
});
