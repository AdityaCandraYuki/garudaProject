import {Text, View, StyleSheet} from 'react-native';

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

// TODO membuat komponen-kompnen kecil sempel dan memanggilnya di APP
// * const App = () => {
//   return <SampleComponents />;
// };

// TODO kode di atas harus diunkomen untuk menjalankan aplikasi

export default StylingReactNativeComponent;
