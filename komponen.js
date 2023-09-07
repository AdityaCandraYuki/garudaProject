import {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
{
  Component;
}
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
  render() {
    return <Text>Ini Component dari klas</Text>;
  }
}

// ! INGAT! di dalam return dilarang menggabungkan 2 komponen kecuali
// ! di dalam komponen View
// * kelas komponen wajib menggunakan ⤵️
// ! fungsi render() 💢 💢 💢
class Profile extends Component {
  render() {
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

export default SampleComponents;
