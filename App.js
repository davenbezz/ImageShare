import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import logo from "./assets/logo.png";

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}/>

      <Text style={styles.instructions}>Click the button below to share a picture from your friend!</Text>

      <TouchableOpacity
      onPress={() => alert('Clicked!')} style={styles.buttonStyle}>

        <Text style={styles.buttonText}>Pick A Photo!</Text>
      </TouchableOpacity>
      

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 305,
    hehight: 159,
    marginBottom: 10,
  },
  instructions: {
    color: '#777',
    fontSize: 18,
    marginHorizontal: 15,
  },
  buttonStyle: {
    backgroundColor: 'blue',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20, color: '#fff',
  }
});
