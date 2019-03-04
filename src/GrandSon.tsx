import React, { ReactNode } from "react";
import { Component } from "react";
import { StyleSheet, Text, View, ViewStyle, TextStyle } from "react-native";

import withName from "./withName";

interface Props {
  name: string;
  age: number;
}

class GrandSon extends Component<Props> {
  render(): ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.name}</Text>
        <Text>{this.props.age}</Text>
      </View>
    );
  }
}

interface IStyle {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<IStyle>({
  container: {
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1
  },
  text: {
    marginVertical: 10
  }
});

export default withName(GrandSon);
