import UUIDGenerator from 'react-native-uuid-generator';

const generateKey = async () => {
  return UUIDGenerator.getRandomUUID();
}

export default {
  generateKey
}
