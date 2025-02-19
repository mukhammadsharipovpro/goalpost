import React from 'react';
import {StyleSheet, ImageBackground, FlatList, Text} from 'react-native';
import GoalPostHeader from '../components/GoalPostHeader';
import GoalPostMenuComponent from '../components/GoalPostMenuComponent';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import {texasBBQ} from '../assets/products';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderProduct = ({item}) => <GoalPostMenuComponent item={item} />;
  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <GoalPostHeader />

      <Text style={styles.title}>Главная</Text>

      <FlatList
        data={texasBBQ}
        renderItem={renderProduct}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.main}
        numColumns={1}
        horizontal={false}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    flex: 1,
    backgroundColor: COLORS.white,
  },
  main: {
    paddingBottom: 100,
    alignItems: 'center',
    width,
  },
  image: {
    width: '100%',
    height: 80,
    objectFit: 'contain',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    paddingVertical: 5,
  },
});
