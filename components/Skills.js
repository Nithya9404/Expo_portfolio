import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground, ScrollView } from 'react-native';

const skillsData = [
  {
    id: '1',
    name: 'Python',
    icon: require('../icons/python.png'),
  },
  {
    id: '2',
    name: 'R',
    icon: require('../icons/r.jpg'),
  },
  {
    id: '3',
    name: 'Data Structures and Algorithms',
    icon: require('../icons/dsa.png'),
  },
  {
    id: '4',
    name: 'SQL',
    icon: require('../icons/Sql.png'),
  },
  {
    id: '5',
    name: 'PostgreSQL',
    icon: require('../icons/psql.png'),
  },
  {
    id: '6',
    name: 'Deep Learning',
    icon: require('../icons/dl.jpg'),
  },
  {
    id: '7',
    name: 'Machine Learning',
    icon: require('../icons/ml.png'),
  },
  {
    id: '8',
    name: 'Microsoft Excel',
    icon: require('../icons/spreadsheet.png'),
  },
  {
    id: '9',
    name: 'Data Modelling',
    icon: require('../icons/data_modelling.jpg'),
  },
  {
    id: '10',
    name: 'Data Visualization',
    icon: require('../icons/data_visualization.png'),
  },
  {
    id: '11',
    name: 'Data Analysis',
    icon: require('../icons/da.jpg'),
  },
  {
    id: '12',
    name: 'Microsoft PowerBI',
    icon: require('../icons/powerbi.jpg'),
  },
  {
    id: '13',
    name: 'Angular',
    icon: require('../icons/angular.png'),
  },
  {
    id: '14',
    name: 'Expo React Native',
    icon: require('../icons/expo.jpg'),
  },
  {
    id: '15',
    name: 'NodeJS',
    icon: require('../icons/nodejs.jpg'),
  },
];

export default function Skills() {
  const [text, setText] = useState('');
  const message = "Know my skills....";

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
      <ScrollView>
        <View style={styles.content}>
          <Text style={styles.typewriterText}>{text}</Text>
        </View>
        <View style={styles.skillsContainer}>
          {skillsData.map((skill) => (
            <TouchableOpacity
              key={skill.id}
              style={styles.skillContainer}
              onPress={() => {
                console.log(`Clicked on ${skill.name}`);
              }}
            >
              <Image source={skill.icon} style={styles.skillIcon} />
              <Text style={styles.skillName}>{skill.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: '#fff',
  },
  skillsContainer: {
    flex: 2,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  skillContainer: {
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 10,
    borderRadius: 10,
  },
  skillIcon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  skillName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
});
