import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IoniconIcon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { Alert, View } from "react-native";
import ChatScreen from "./screens/ChatScreen/ChatScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import ChatList from "./components/ChatList/ChatList";

const Stack = createNativeStackNavigator();
const searchIcon = () => (
  <View style={{ flexDirection: "row" }}>
    <IoniconIcon.Button
      name="search-outline"
      color="white"
      backgroundColor="transparent"
      size={25}
      onPress={() => {
        Alert.alert("Icon");
      }}
    />
    <MaterialIcon.Button
      name="dots-vertical"
      color="white"
      backgroundColor="transparent"
      size={25}
      onPress={() => {
        Alert.alert("Icon");
      }}
    />
  </View>
);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "WhatsApp",
            headerStyle: {
              backgroundColor: "#075E54",
            },
            headerTintColor: "#fff",
            headerRight: searchIcon,
          }}
        />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="ChatList" component={ChatList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
