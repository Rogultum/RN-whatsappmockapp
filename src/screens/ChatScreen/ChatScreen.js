import React from "react";
import { View, Text, ScrollView, ImageBackground } from "react-native";
import styles from "./ChatScreen.style";

// eslint-disable-next-line react/prop-types
function ChatScreen({ route }) {
  // eslint-disable-next-line react/prop-types
  const { message, message2 } = route.params;
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://res.cloudinary.com/practicaldev/image/fetch/s--WAKqnINn--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/tw0nawnvo0zpgm5nx4fp.png",
        }}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        {/* could improve with more data and FlatList */}
        <ScrollView>
          <View style={styles.message_container}>
            <Text style={styles.message_style}>{message}</Text>
          </View>
          <View style={styles.message_container}>
            <Text style={styles.message_style}>{message2}</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

export default ChatScreen;
