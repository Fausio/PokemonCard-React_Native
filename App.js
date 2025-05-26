import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import PokemonCard from './Components/PokemonCard'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === "android" ? 25 : 0
  },
});

export default function App() {

  const carmanderData = {
    name: "Charmander",
    image: require("./assets/charmander.png"),
    type: "Fire",
    hp: 80,
    moves: ["Scratch", "Growl", "leer", "Ember"],
    weakness: ["Water", "Rock"],
  }



  return (
    <SafeAreaView style={styles.container}>
      <PokemonCard {...carmanderData}></PokemonCard>
    </SafeAreaView>
  );
}


