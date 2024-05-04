import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function AboutPage() {
  const [text, setText] = useState('');
  const message = "Know about me....";

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
  
  const educationDetails = [
    {
      degree: 'Bachelor of Technology in Artificial Intelligence and Data Science',
      institution: 'Ramco Institute of Technology, Rajapalayam',
      date: '2021-2025',
    },
    {
      degree: '12th',
      institution: 'St. Aloysius PU College, Harihar, Karnataka',
      date: '2021',
    },
    {
      degree: '10th',
      institution: 'M.K.E.T L.K.E.M School, Harihar, Karnataka',
      date: '2019',
    },
  ];

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.typewriterText}>{text}</Text>
        <View style={styles.space} />
        <Text style={styles.paragraph}>
        I am a third-year student of Bachelor of Technology in Artificial Intelligence and Data Science at Ramco Institute of Technology. I have completed two project internships at Geons Logix, where I gained hands-on experience in developing chatbots using the RASA framework and creating a website using Expo and AT Protocol. In my internships, I worked with a team of developers and mentors who guided me through the process of designing, building, and testing chatbot and Expo applications. I learned how to use natural language processing techniques, AT commands, and Expo React Native tools to create user-friendly and interactive solutions. 
        I have earned multiple certifications and badges in Python, SQL, and Data Structures from HackerRank and GUVI Geek Networks. I am good at creating dashboards in Cognos, and Excel to analyze and visualize data from various sources. I am passionate about learning new technologies and exploring the possibilities of data science. I am eager to join an organization that values innovation, collaboration, and diversity, and where I can contribute to impactful projects and grow as a professional.
        </Text>
        <View style={{ height: 20 }} />
        <View style={styles.educationContainer}>
          <Text style={styles.educationHeader}>Education:</Text>
          {educationDetails.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <Text style={styles.degree}>{edu.degree}</Text>
              <Text style={styles.institution}>{edu.institution}</Text>
              <Text style={styles.date}>{edu.date}</Text>
            </View>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  typewriterText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
  paragraph: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  space: {
    height: 20,
  },
  educationContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  educationHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  educationItem: {
    marginBottom: 10,
    alignItems: 'center',
  },
  degree: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  institution: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  date: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
});
