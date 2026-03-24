import {Keyboard, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native'
import { ThemedView, ThemedText, Spacer, ThemedButton, ThemedTextInput } from '@/components'
import { Link } from 'expo-router'
import { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = () => {
    console.log('Register', email, password)
  }
  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ThemedView style={styles.container}>

          <Spacer />
          <ThemedText title style={styles.title}>
            Register For an Account
          </ThemedText>

          <ThemedTextInput
              className="w-[80%] mb-5"
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
          />
          <ThemedTextInput
              className="w-[80%] mb-5"
              placeholder="Password"
              onChangeText={setPassword}
              value={password}
              secureTextEntry
          />

          <ThemedButton onPress={handleSubmit}>
            <Text style={{ color: '#f2f2f2' }}>Register</Text>
          </ThemedButton>

          <Spacer height={100} />
          <Link href='/login'>
            <ThemedText className="text-center">
              Login instead
            </ThemedText>
          </Link>
        </ThemedView>
      </TouchableWithoutFeedback>
  )
}
export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30,
  }
})
