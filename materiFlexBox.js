import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import profilePicture from './src/profilePicture.jpg';

class MasterFlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#00FFFF',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: '#ADFF2F', width: 50, height: 50}} />
          <View style={{backgroundColor: '#A0522D', width: 50, height: 50}} />
          <View style={{backgroundColor: '#FFFF00', width: 50, height: 50}} />
          <View style={{backgroundColor: '#ee0005', width: 50, height: 50}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>
        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={profilePicture}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 20}}
          />
          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              Aditya Candra Yuki
            </Text>
            <Text>Subscribe</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default MasterFlexBox;
