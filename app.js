import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';  // Added View import for centering
import ProfileCard from './ProfileCard';
import Header from './Heading';
import Footer from './Footer';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#FFB7CE' }}>
      <StatusBar barStyle="dark-content" backgroundColor="gray" />
      <Header />
      <View style={{ flex: 1, justifyContent: 'center' }}>  {/* New wrapper to center the ProfileCard */}
        <ProfileCard />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default App;
