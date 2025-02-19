import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {COLORS, FONTS, height, width} from '../helpers/colors';
import GoalPostHeader from '../components/GoalPostHeader';
import BackgroundImage from '../assets/background.png';

export default function () {
  const renderBroadcast = (league, time, teams) => (
    <View style={styles.broadcast}>
      <View style={styles.teamsContainer}>
        <Text style={styles.teams}>{teams}</Text>
      </View>
      <View style={styles.leagueContainer}>
        <Text style={styles.league}>{league}</Text>
        <Text style={styles.matchTime}>{time}</Text>
      </View>
    </View>
  );

  return (
    <ImageBackground source={BackgroundImage} style={styles.container}>
      <GoalPostHeader />

      <Text style={styles.title}>Трансляции</Text>

      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingBottom: 100, marginTop: 15}}>
        {renderBroadcast('FIS World', '02.03 12:00', 'Sprint \n' + 'Men’s Final')}
        {renderBroadcast('Tour de Ski', '04.03 13:30', 'Stage 3 \n' + 'Uphill Time Trial')}
        {renderBroadcast('Biathlon', '06.03 15:00', 'Pursuit \n' + 'Women’s Race')}
        {renderBroadcast('Olympics', '08.03 17:15', 'Cross-Country 50km \n' + 'Men’s Final')}
        {renderBroadcast('Junior World', '10.03 12:45', 'Mass Start')}
        {renderBroadcast('Nordic Combined', '12.03 14:30', 'Ski Jump + 10km')}
        {renderBroadcast('FIS', '14.03 16:00', 'Relay \n' + 'Men’s Final')}
        {renderBroadcast('Ski Jumping', '16.03 18:15', 'Large Hill \n' + 'Final Round')}
        {renderBroadcast('Biathlon', '18.03 19:45', 'Mixed Relay')}
        {renderBroadcast('X-Games', '20.03 20:30', 'Freestyle Skiing \n' + 'Big Air')}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height,
    width,
    backgroundColor: COLORS.white,
  },
  broadcast: {
    width: width * 0.9,
    alignSelf: 'center',
    marginTop: 20,
    backgroundColor: COLORS.white,
    elevation: 5,
    paddingLeft: 20,
  },
  league: {
    fontSize: 30,
    fontFamily: FONTS.black,
    color: COLORS.black,
    paddingVertical: 8,
  },
  leagueContainer: {
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  teamsContainer: {
    width: '100%',
    paddingBottom: 10,
  },
  matchTime: {
    fontSize: 18,
    fontFamily: FONTS.bold,
    color: COLORS.main,
    width: '40%',
    marginLeft: 15,
    marginTop: -50,
  },
  teams: {
    textAlign: 'left',
    fontFamily: FONTS.bold,
    fontSize: 16,
    color: COLORS.main,
    marginTop: 5,
    marginLeft: 5,
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
