import {Component} from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import macbook from './src/macbook.jpg';

const Produk = () => {
  return (
    <View>
      <ScrollView>
        <View // * Pertama
          style={{
            padding: 12,
            backgroundColor: 'grey',
            width: 212,
            borderRadius: 8,
            marginVertical: 20,
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
        <View // * Kedua
          style={{
            padding: 12,
            backgroundColor: 'grey',
            width: 212,
            borderRadius: 8,
            marginVertical: 20,
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
        <View // * Ketiga
          style={{
            padding: 12,
            backgroundColor: 'grey',
            width: 212,
            borderRadius: 8,
            marginVertical: 20,
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
        <View // * Keempat
          style={{
            padding: 12,
            backgroundColor: 'grey',
            width: 212,
            borderRadius: 8,
            marginVertical: 20,
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
              color: '#F2r994A',
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
      </ScrollView>
    </View>
  );
};
export default Produk;
