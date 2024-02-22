import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function UserList({ users }) {
  const navigation = useNavigation();

  const chatHandler = () => {
    navigation.navigate("Chat", { users });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View style={styles.imgContainer}>
            <Image
              source={require("../assets/account.jpg")}
              style={styles.img}
              resizeMode="contain"
            />
          </View>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            {users?.name}
          </Text>
        </View>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity onPress={chatHandler}>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#691292",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              flexDirection: "row",
            }}
          >
            <Ionicons name="chatbubble" size={24} color="white" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: "#cac3dc",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
            }}
          >
            <AntDesign name="adduser" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: "#e8e8f1",
    marginVertical: 5,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 5,
    flexDirection: "row",
    borderRadius: 5,
  },
  imgContainer: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 100,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
});
