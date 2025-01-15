import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingLeft: 15,
    paddingRight: 10,
    paddingBottom: 25,
    alignItems: "center",
    backgroundColor: "#001A2B",
  },
  subject: {
    gap: 20,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  actions: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#001A2B",
  },
  title: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#001A2B",
  },
  text: {
    fontSize: 15,
    color: "#fff",
    fontWeight: "bold",
  },
});
