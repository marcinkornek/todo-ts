import UUIDGenerator from 'react-native-uuid-generator';
import { Alert } from 'react-native'

type AlertButtonType = {
  text: string;
  onPress: Function;
}

type BaseAlertTypes = {
  title: string;
  message: string;
}

type AlertTypes = BaseAlertTypes & {
  buttons?: Array<AlertButtonType>
}

type WarningAlertTypes = BaseAlertTypes & {
  onPressOk?: Function;
}

type ConfirmationAlertTypes = BaseAlertTypes & {
  onPressOk?: Function;
  onPressCancel?: Function;
}

const generateKey = async () => {
  return UUIDGenerator.getRandomUUID();
}

const alert = ({
  title = '',
  message = '',
  buttons = []
} : AlertTypes) => {
  Alert.alert(
    title,
    message,
    buttons
  )
}

const warningAlert = ({
  title = '',
  message = ''
} : WarningAlertTypes) => {
  const buttons = [{
    text: "OK",
    onPress: () => {},
  }]

  return alert({title, message, buttons})
}

const confirmationAlert = ({
  title = '',
  message = '',
  onPressOk  = () => {},
  onPressCancel  = () => {}
} : ConfirmationAlertTypes) => {
  const buttons = [
    {
      text: "OK",
      onPress: onPressOk,
    },
    {
      text: "Cancel",
      onPress: onPressCancel,
    }
  ]

  return alert({title, message, buttons})
}

export default {
  generateKey,
  warningAlert,
  confirmationAlert
}
