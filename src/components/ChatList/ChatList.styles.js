import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },
  img_style: {
    height: 50,
    width: 50,
    borderRadius: 50 / 2,
  },
  inner_container: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 10,
  },
  message_container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  name_style: {
    fontWeight: "bold",
    color: "black",
    fontSize: 16,
  },
});
