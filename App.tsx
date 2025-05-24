import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { TabNavigator} from './src/components/tab/TabNavigator';
import {SafeAreaView, useColorScheme, View, ActivityIndicator} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [loading, setLoading] = useState(true);
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: isDarkMode ? '#22223b' : '#fff' }}>
        <ActivityIndicator size="large" color="#349beb" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: isDarkMode ? Colors.darker : Colors.lighter }}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
