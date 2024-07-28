import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "stretch",
    paddingLeft:10
  },
  optionContainers: {
    padding: 10,
    width: "100%",
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  optionContainer: {
    borderEndWidth: 2,
    borderBottomWidth: 4,
    borderColor: "lightgrey",
    alignItems: "center",
    borderRadius: 10,
    width: "46%",
    height: "46%",
  },
  optionImage: {
    width: "100%",
    flex: 1,
  },
  optionText: {
    fontSize: 20,
    fontWeight: "600",
  },
  selectedContainer: {
    backgroundColor: "#DDF4FE",
    borderColor: "#81D5FE",
  },
  selectedText: {
    color: "#40BEF7",
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonContainer: {
    width:"100%",
    backgroundColor: "#58CC02",
    height: 50,
    marginVertical: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    borderRadius:5,
    borderBottomWidth:5,
    borderColor:"#57A600"
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  disabledContainer:{
    backgroundColor:"lightgray",
    borderColor:"grey"
  }
});
