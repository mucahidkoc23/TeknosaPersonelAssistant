import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';

const weathers = () => {
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const API_KEY = '<bd4366290352c367e157bd9d602db103>';
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=London&appid=${API_KEY}`
      );
      setWeather(response.data.main);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {Object.keys(weather).length !== 0 ? (
        <View>
          <Text>Temperature: {weather.temp}°C</Text>
          <Text>Humidity: {weather.humidity}%</Text>
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default weathers;
