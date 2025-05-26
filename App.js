import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PokemonCard from './Components/PokemonCard'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard></PokemonCard>
    </SafeAreaView>
  );
}


