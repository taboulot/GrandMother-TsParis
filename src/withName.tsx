import React, { PureComponent } from "react";
import getName from "./names";

const withName = Component => {
  class ComponentWithName extends PureComponent<{}> {
    render() {
      return <Component {...this.props} name={getName()} />;
    }
  }
  return ComponentWithName;
};

export default withName;
