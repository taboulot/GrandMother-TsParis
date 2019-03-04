import React, { PureComponent, ComponentType } from "react";
import getName from "./names";

export interface InjectedProps {
  name: string;
}

type HocProps<P> = Omit<P, keyof InjectedProps>;

const withName = <P extends InjectedProps>(
  Component: ComponentType<P>
): ComponentType<HocProps<P>> => {
  class ComponentWithName extends PureComponent<HocProps<P>> {
    render() {
      return <Component {...this.props as P} name={getName()} />;
    }
  }
  return ComponentWithName;
};

export default withName;
