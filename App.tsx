import React from "react";
import { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";

import GrandMother from "./src/GrandMother";
import GrandSon from "./src/GrandSon";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <GrandMother />
        <ScrollView style={styles.list}>
          {Array.from(Array(100).keys()).map(() => (
            <GrandSon />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  list: {
    flex: 1,
    alignSelf: "stretch"
  }
});
