/* eslint-disable react-native/no-inline-styles */
// * import merupakan sebuah kewajiban  ❗ ❗
import React, {Component} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

// ! import komponen
import Produk from './produk';
// * import sample komponen
import SampleComponents from './komponen';
import StylingReactNativeComponent from './StylingReactNativeComponent';

// ! Membuat window app baru untuk percobaan styling, jangan lupa dikomen sesudah memakai
const App = () => {
  return (
    <View>
      <ScrollView>
        <View>
          <SampleComponents />
        </View>
        <View style={{marginBottom: 20}}>
          <StylingReactNativeComponent />
        </View>
        <View>
          <Produk />
        </View>
      </ScrollView>
    </View>
  );
};

export default App;
