import { StyleSheet } from 'react-native'
import { ThemedView, ThemedText, Spacer } from '../../components'
import { Link } from 'expo-router'

const Register = () => {
  return (
    <ThemedView style={styles.container}>
      <Spacer />
      <ThemedText title style={styles.title}>
        Register For an Account
      </ThemedText>

      <Spacer height={100} />
      <Link href='/login'>
        <ThemedText className="text-center">
          Login instead
        </ThemedText>
      </Link>
    </ThemedView>
  )
}
export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 30,
  }
})