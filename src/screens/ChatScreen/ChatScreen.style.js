import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  message_container: {
    backgroundColor: "white",
    alignSelf: "flex-start", // auto-width by text inside
    padding: 10,
    marginLeft: 20,
    marginTop: 20,
    borderRadius: 10,
  },
});
