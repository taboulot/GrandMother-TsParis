type Diff<T extends keyof any, U extends keyof any> = ({ [P in T]: P } &
  { [P in U]: never } & { [x: string]: never })[T];

type Omit<U, K extends keyof any> = Pick<U, Diff<keyof U, K>>;
