import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, FlatList, Linking } from 'react-native';

const projects = [
  {
    id: '1',
    title: 'NLP-based Chatbot',
    description: 'This is a simple chatbot created using RASA framework and NLP',
    image: require('../icons/chatbot.png'), 
    link: 'https://github.com/Nithya9404/NLP_Chatbot',
  },
  {
    id: '2',
    title: 'Portfolio website using Angular',
    description: 'This is a simple portfolio website created using Angular',
    image: require('../icons/portfolio.png'), 
    link: 'https://github.com/Nithya9404/Nithya9404.github.io',
  },
  {
    id: '3',
    title: 'Portfolio website using Expo React Native',
    description: 'This is a simple portfolio website created using Expo React Native',
    image: require('../icons/portfolio.png'), 
    link: 'https://github.com/Nithya9404/Expo_portfolio',
  },
  {
    id: '4',
    title: 'Spotify recommendation model',
    description: 'This is a simple Spotify recommendation model built using K-Nearest Neighbours algorithm',
    image: require('../icons/spotify.png'), 
    link: 'https://www.kaggle.com/code/nithya9404/spotify-recommendations/notebook',
  },
  {
    id: '5',
    title: 'Fraud call detection model',
    description: 'This is a Logistic regression model to detect fraud calls',
    image: require('../icons/fraud-call.jpg'), 
    link: 'https://www.kaggle.com/code/nithya9404/fraud-call-detection-model/notebook',
  },
  {
    id: '6',
    title: 'Brain Tumour Detection model',
    description: 'This is a CNN model built to detect brain tumours',
    image: require('../icons/brain_tumour.jpg'), 
    link: 'https://www.kaggle.com/code/nithya9404/brain-tumour-detection/notebook',
  },
  {
    id: '7',
    title: 'Pneumonia Detection model',
    description: 'This is a CNN model built to detect pneumonia',
    image: require('../icons/pneumonia.jpg'),
    link: 'https://www.kaggle.com/code/nithya9404/pneumonia-detection',
  },
  {
    id: '8',
    title: 'Patient Risk Segmentation',
    description: 'This is a KMeans model which segments patients based on the severity of the disease',
    image: require('../icons/patient_risk.jpg'),
    link: 'https://github.com/Nithya9404/RIT_HACKATHON',
  },
  {
    id: '9',
    title: 'Text correction and spell checking',
    description: 'This is an NLP-based text correction application built using Streamlit',
    image: require('../icons/spell_check.jpg'),
    link: 'https://github.com/Nithya9404/Spell_checker',
  },
  {
    id: '10',
    title: 'Customer Satisfaction score prediction',
    description: 'This is an LSTM model which predicts the customer satisfaction score of Banking applications',
    image: require('../icons/customer_satisfaction.jpg'),
    link: 'https://github.com/Nithya9404/Customer_satisfaction_score',
  },
];

export default function Projects() {
  const [text, setText] = useState('');
  const message = "Know about projects done by me....";

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

  const openProjectLink = (link) => {
    Linking.openURL(link)
      .catch((err) => console.error('Failed to open URL: ', err));
  };

  const renderProjectItem = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => openProjectLink(item.link)}
    >
      <Image source={item.image} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.typewriterText}>{text}</Text>
        <FlatList
          data={projects}
          renderItem={renderProjectItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover', 
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  content: {
    padding: 16,
    flex: 1,
    justifyContent: 'flex-start', 
    alignItems: 'center',
    paddingTop: 40, 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#666',
  },
  typewriterText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ccc',
    marginBottom: 20,
  },
});

