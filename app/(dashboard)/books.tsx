import { StyleSheet } from 'react-native';

import { Spacer,ThemedText, ThemedView } from '@/components'

const Books = () => {
  return (
      <ThemedView safe style={styles.container}>
        <ThemedText title style={styles.heading}>
          Your Reading List
        </ThemedText>

      </ThemedView>
  )
}
export default Books;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  }
})