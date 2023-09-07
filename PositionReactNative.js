import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import cart from './src/cart.png';
export default function PositionReactNative() {
 return (
  <View style={styles.wrapper}>
   <Text style={{ fontWeight: 'bold' }}>Materi Position </Text>
   {/* // * bungkus gambarnya */}
   <View style={styles.cartWrapper}>
    {/* // ! icon cart */}
    <Image source={cart} style={styles.iconCart} />
    {/* // ! notif angka 10  */}
    <Text style={styles.notif}>10</Text>
   </View>
   {/* // ! text keranjang */}
   <Text style={styles.text}>Keranjang Belanja Anda</Text>
  </View>
 );
}
const styles = StyleSheet.create({
 wrapper: { padding: 20, alignItems: 'center' },
 cartWrapper: {
  borderWidth: 1,
  borderColor: '#4398D1',
  width: 93,
  height: 93,
  borderRadius: 93 / 2,
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  marginTop: 40,
 },
 iconCart: { width: 50, height: 50 },

 text: { fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8 },

 notif: {
  fontSize: 10,
  color: 'white',
  backgroundColor: '#6FCF97',
  padding: 4,
  borderRadius: 24 / 2,
  width: 24,
  height: 24,
  position: 'absolute',
  top: 0,
  right: 0,
 },
});
