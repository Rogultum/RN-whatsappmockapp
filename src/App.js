import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IoniconIcon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import FAIcon from "react-native-vector-icons/FontAwesome";
import { Alert, View } from "react-native";
import ChatScreen from "./screens/ChatScreen/ChatScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";

const Stack = createNativeStackNavigator();
const searchAndMoreIcon = () => (
  // rightmost icons in homeScreen
  <View style={{ flexDirection: "row" }}>
    <IoniconIcon.Button
      name="search-outline"
      color="white"
      backgroundColor="transparent"
      size={20}
      onPress={() => {
        Alert.alert("Icon");
      }}
    />
    <MaterialIcon.Button
      name="dots-vertical"
      color="white"
      backgroundColor="transparent"
      size={20}
      onPress={() => {
        Alert.alert("Icon");
      }}
    />
  </View>
);
const chatScreenIcon = () => (
  <View style={{ flexDirection: "row" }}>
    <FAIcon.Button
      name="video-camera"
      color="white"
      backgroundColor="transparent"
      size={20}
      onPress={() => {
        Alert.alert("Icon");
      }}
    />
    <FAIcon.Button
      name="phone"
      color="white"
      backgroundColor="transparent"
      size={20}
      onPress={() => {
        Alert.alert("Icon");
      }}
    />
    <MaterialIcon.Button
      name="dots-vertical"
      color="white"
      backgroundColor="transparent"
      size={20}
      onPress={() => {
        Alert.alert("Icon");
      }}
    />
  </View>
);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTintColor: "#fff", // everyscreen has the same background and font color
          headerStyle: {
            backgroundColor: "#075E54",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "WhatsApp",
            headerRight: searchAndMoreIcon,
          }}
        />
        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={({ route }) => ({
            title: route.params.name,
            headerRight: chatScreenIcon,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
