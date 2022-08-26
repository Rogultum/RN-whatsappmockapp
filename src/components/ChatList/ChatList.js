/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./ChatList.styles";

function ChatList(props) {
  const navigation = useNavigation();
  return (
    <Pressable
      delayLongPress={200}
      onLongPress={() => {
        navigation.navigate("Chat", {
          message: props.user.message,
          message2: props.user.message2,
          name: props.user.name,
        });
      }}
    >
      <View style={styles.container}>
        <Image style={styles.img_style} source={{ uri: props.user.image }} />
        <View style={styles.inner_container}>
          <Text style={styles.name_style}>{props.user.name}</Text>
          <View style={styles.message_container}>
            <Text>{props.user.message}</Text>
          </View>
        </View>
        <View>
          <Text>{props.user.date}</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ChatList;
