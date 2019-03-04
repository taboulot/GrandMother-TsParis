import React from "react";
import { Component } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
  TextStyle
} from "react-native";

interface Props {
  name: string;
}

class GrandMother extends Component<Props> {
  static defaultProps: Partial<Props> = {
    name: "Gertrude"
  };

  render() {
    return (
      <TouchableOpacity style={styles.container}>
        <Text style={styles.text}>{this.props.name}</Text>
      </TouchableOpacity>
    );
  }
}
interface IStyle {
  container: ViewStyle;
  text: TextStyle;
}

const styles = StyleSheet.create<IStyle>({
  container: {
    borderBottomWidth: 3,
    borderBottomColor: "black",
    alignSelf: "stretch",
    alignItems: "center"
  },
  text: {
    marginVertical: 10
  }
});

export default GrandMother;
