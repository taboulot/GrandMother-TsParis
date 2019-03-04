import React, { PureComponent, ComponentType } from "react";
import getName from "./names";

interface InjectedProps {
  namee: string;
}

type HocProps<P> = Omit<P, keyof InjectedProps>;

const withName = <P extends object>(
  Component: ComponentType<P>
): ComponentType<HocProps<P>> => {
  class ComponentWithName extends PureComponent<HocProps<P>> {
    render() {
      return <Component {...this.props as P} namee={getName()} />;
    }
  }
  return ComponentWithName;
};

export default withName;
