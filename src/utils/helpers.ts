import UUIDGenerator from 'react-native-uuid-generator';
import { Alert } from 'react-native'

const generateKey = async () => {
  return UUIDGenerator.getRandomUUID();
}

const alert = (
  title: string = '',
  msg: string = ''
) => {
  Alert.alert(
    title,
    msg,
    [{
      text: "OK",
      onPress: () => {},
    }],
  )
}

export default {
  generateKey,
  alert
}
