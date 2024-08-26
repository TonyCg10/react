import { useState } from 'react'
import {
  Alert,
  Image,
  SafeAreaView,
  View,
  Text,
  Pressable,
  TextInput,
  StyleSheet,
} from 'react-native'
import { styles } from '../App'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      )
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={subscribeStyle.view}>
        <Image
          source={require('../assets/115168_45900_b7fe96b1-15b4-4d63-a08e-b0f50524f3a9.jpg')}
          style={styles.image}
        />
        <Text>
          Subscribe to our newsletter for our latest delicious recipes!
        </Text>
        <View style={subscribeStyle.viewpress}>
          <TextInput
            placeholder="Type your email"
            keyboardType="email-address"
            value={email}
            autoCapitalize="none"
            onChangeText={(value) => setEmail(value)}
            style={subscribeStyle.input}
          />
          <Pressable
            style={styles.press}
            onPress={() => {
              console.log(';')
              validateEmail(email) &&
                Alert.alert('Thanks for subscribing, stay tuned!', '', [
                  {
                    text: 'OK',
                  },
                ])
            }}
          >
            <Text style={styles.text}>Subscribe</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Subscribe

const subscribeStyle = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '5%',
    flex: 1,
    marginTop: '5%',
  },
  viewpress: {
    flex: 2,
    marginTop: '5%',
    width: '100%',
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginBottom: '5%',
  },
})
