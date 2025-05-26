import { Text, View, StyleSheet, Platform, Image } from "react-native";


const style = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        ...Platform.select({
            ios: {
                shadowOffset: { width: 2, height: 2 },
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4,
            },
            android: {
                elevation: 5,
            },
        }),
    },
    nameContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 32
    },
    name: {
        fontSize: 30,
        fontWeight: "bold"
    },
    hp: {
        fontSize: 22
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 16
    }
})


export default function PokemonCard(
    { name,
        image,
        type,
        hp,
        moves,
        weakness
    }) {

    return (
        <View style={style.card}>
            <View style={style.nameContainer}>
                <Text style={style.name}> {name}</Text>
                <Text style={style.hp}> ❤️ {hp}</Text>
            </View>

            <Image style={style.image} source={image} accessibilityLabel={`Pokemon ${name}`}
                resizeMode="contain"
            />

            <View>
                <Text> {type}</Text>
            </View>

            <View>
                <Text>Moves:  {moves.join(", ")}</Text>
            </View>

            <View>
                <Text>Weaknes:  {weakness.join(", ")}</Text>
            </View>
        </View>
    )
}