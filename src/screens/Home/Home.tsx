import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {NavigationRouteProps} from '../../types'

const Home = ({ navigation, route }: NavigationRouteProps) => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
})

export default Home
