import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./ChatList.styles";

function ChatList(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.img_style} source={{ uri: props.user.image }} />
      <View style={styles.inner_container}>
        <Text style={styles.name_style}>{props.user.name}</Text>
        <View style={styles.message_container}>
          <Text>{props.user.message}</Text>
        </View>
      </View>
    </View>
  );
}

export default ChatList;
