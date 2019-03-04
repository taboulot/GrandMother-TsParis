import React from "react";
import { Component } from "react";
import { Text, View } from "react-native";

interface Props {
  name: string;
}

class GrandMother extends Component<Props> {
  static defaultProps: Partial<Props> = {
    name: "Gertrude"
  };

  public render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
      </View>
    );
  }
}

export default GrandMother;
