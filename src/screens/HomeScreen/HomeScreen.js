import React, { useState } from "react";
import { FlatList, Pressable, View, Text } from "react-native";
import Ionicon from "react-native-vector-icons/Ionicons";
import styles from "./HomeScreen.style";
import UserData from "../../components/data/UserData.json";
import ChatList from "../../components/ChatList/ChatList";

function HomeScreen({ navigation }) {
  const [list] = useState(UserData);

  const renderChat = ({ item }) => <ChatList user={item} />;
  const renderSeperator = () => <View style={styles.seperator} />;

  return (
    <View style={styles.container}>
      <View style={styles.inner_container}>
        <Ionicon.Button
          name="camera"
          color="#CEE5D0"
          backgroundColor="transparent"
          size={25}
        />
        <Text style={styles.text_style}>CHATS</Text>
        <Text style={styles.text_style}>STATUS</Text>
        <Text style={styles.text_style}>CALLS</Text>
      </View>

      <FlatList
        style={styles.header}
        data={list}
        keyExtractor={(item) => item.id}
        renderItem={renderChat}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  );
}

export default HomeScreen;
