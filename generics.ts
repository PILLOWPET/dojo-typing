type RequiredPropertiesForCreation<T, K extends keyof T> = T & {
  [P in K]: NonNullable<T[P]>;
};

type CarCreation = RequiredPropertiesForCreation<Car, "color">;

interface Blabla {
  lol: string;
}

interface Blibli {
  mdr: string;
}

const myFunction = (blabla: Blabla, blibli: Blibli) => {
  return "haha";
};

type MyBliBli<T> = T extends (a: infer U, b: infer V) => string ? U : never;

type getBlibli = MyBliBli<typeof myFunction>;
