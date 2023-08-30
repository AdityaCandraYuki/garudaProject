/* eslint-disable react-native/no-inline-styles */
// * import merupakan sebuah kewajiban  ❗ ❗
import React, {Component} from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

// ! import komponen
import Produk from './produk';
// * import sample komponen
import SampleComponents from './komponen';
import StylingReactNativeComponent from './StylingReactNativeComponent';
import MasterFlexBox from './materiFlexBox';

const App = () => {
  return (
    <View>
      <ScrollView>
        <MasterFlexBox />
        <View style={{marginVertical: 100, backgroundColor: '#6495ED'}}>
          <StylingReactNativeComponent />
        </View>
        <Produk />
        <SampleComponents />
      </ScrollView>
    </View>
  );
};

export default App;
