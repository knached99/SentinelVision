import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

// Define the type for the component props
type AuthButtonProps = {
  onAuthenticate: () => void;
};

const Auth = ({ onAuthenticate }: AuthButtonProps) => {
  return (
    <View>
      <Button 
        title="Authenticate" 
        onPress={onAuthenticate} 
      />
    </View>
  )
}

export default Auth

const styles = StyleSheet.create({})
