import { StyleSheet } from 'react-native'
import { ThemedView, ThemedText, Spacer } from '../../components'
import { Link } from 'expo-router'

const Login = () => {
  return (
      <ThemedView style={styles.container}>
        <Spacer />
        <ThemedText title style={styles.title}>
          Login to Your Account
        </ThemedText>

        <Spacer height={100} />
        <Link href='/register'>
          <ThemedText className="text-center">
            Register instead
          </ThemedText>
        </Link>
      </ThemedView>
  )
}
export default Login

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