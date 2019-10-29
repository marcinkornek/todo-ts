import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {NavigationRouteProps} from '../../types'

const Profile = ({ navigation, route }: NavigationRouteProps) => (
  <View style={styles.container}>
    <Text>Profile</Text>
    <Button
      title="Go Home"
      onPress={() => navigation.navigate('Home')}
    />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue'
  }
})

export default Profile


