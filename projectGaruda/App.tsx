// * import merupakan sebuah kewajiban  ❗ ❗
import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextComponent,
  TextInput,
  View,
} from 'react-native';

import macbook from './src/macbook.jpg';

// ! Membuat window app baru untuk percobaan styling, jangan lupa dikomen sesudah memakai
const App = () => {
  return <Produk />;
};

// * Di bawah komen ini adalah area komponen

// TODO membuat Styling React native Component (Dimensi, Background, Color, Margin, padding, Fontsize)
// * 🥰🥰🥰🥰

const StylingReactNativeComponent = () => {
  return (
    <View>
      <Text style={styles.text}>Styling Component </Text>
      <View
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
          borderWidth: 2,
          borderColor: 'purple',
          marginTop: 20,
          marginLeft: 20,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#abdbe3',
    marginTop: 20,
    marginLeft: 40,
  },
});
// * Penjelasan kodingan di atas:
// ! const styles = StyleSheet.create({: mendefinisikan sebuah objek bernama styles dengan menggunakan
// StyleSheet.create({}) untuk mengelompokkan gaya-gaya yang akan digunakan dalam komponen Anda.

// ! text: {} adalahmemberikan nama text sebagai identifikasi untuk gaya ini
//* akhir penjelasan

// TODO membuat komponen produk

const Produk = () => {
  return (
    <View
      style={{
        padding: 12,
        backgroundColor: 'grey',
        width: 212,
        borderRadius: 8,
      }}>
      <Image
        source={macbook}
        style={{width: 188, height: 107, borderRadius: 8}}
      />
      <Text style={{fontSize: 14, fontWeight: 'bold', marginTop: 16}}>
        New Macbook Pro 2019
      </Text>
      <Text
        style={{
          fontSize: 14,
          fontWeight: 'bold',
          marginTop: 12,
          color: '#F2994A',
        }}>
        Rp.25.000.000
      </Text>
      <Text style={{fontSize: 12, fontWeight: '300', marginTop: 10}}>
        Jakarta
      </Text>
      <View
        style={{
          backgroundColor: '#6FC',
          paddingVertical: 6,
          borderRadius: 25,
          marginTop: 20,
        }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 600,
            color: 'white',
            textAlign: 'center',
          }}>
          Beli
        </Text>
      </View>
    </View>
  );
};
// TODO membuat komponen-kompnen kecil sempel dan memanggilnya di APP

// const App = () => {
//   return <SampleComponents />;
// };

// TODO kode di atas harus diunkomen untuk menjalankan aplikasi

const SampleComponents = () => {
  return (
    <View>
      <Text>yuki</Text>
      <Yuki />
      <Gambar />
      <TextInput style={{borderWidth: 1}} />
      <BoxGreen />
      <Profile />
    </View>
  );
};

// membuat komponen baru
const Yuki = () => {
  return <Text>Yukimura</Text>;
};

// * membuat komponen photo
const Gambar = () => {
  return (
    <Image
      source={{
        uri: 'https://images.unsplash.com/photo-1583200786218-ccee132a8567?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80',
      }}
      style={{width: 120, height: 120, borderRadius: 60}}
    />
  );
};

// * bikin kelas
class BoxGreen extends Component {
  render(): React.ReactNode {
    return <Text>Ini Component dari klas</Text>;
  }
}

// ! INGAT! di dalam return dilarang menggabungkan 2 komponen kecuali
// ! di dalam komponen View
// * kelas komponen wajib menggunakan
// ! fungsi render() 💢 💢 💢
class Profile extends Component {
  render(): React.ReactNode {
    return (
      <View>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1587653263995-422546a7a569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
          }}
          style={{width: 250, height: 500, alignItems: 'center'}}
        />

        <Text>ini tempat di jepang</Text>
      </View>
    );
  }
}

export default App;
