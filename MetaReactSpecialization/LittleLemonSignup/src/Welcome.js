import {
  SafeAreaView,
  View,
  Image,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from '../App'

const Welcome = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <View style={welcomeStyle.view}>
        <Image
          source={require('../assets/115168_45900_b7fe96b1-15b4-4d63-a08e-b0f50524f3a9.jpg')}
          style={styles.image}
        />
        <Text>Little Lemon, your local Mediterranean Bistro</Text>
        <View style={welcomeStyle.viewpress}>
          <Pressable
            style={styles.press}
            onPress={() => navigation.navigate('Subscribe')}
          >
            <Text style={styles.text}>Newsletter</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Welcome

const welcomeStyle = StyleSheet.create({
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: '5%',
  },
  viewpress: {
    flex: 2,
    justifyContent: 'flex-end',
    width: '90%',
    marginBottom: '10%',
  },
})
