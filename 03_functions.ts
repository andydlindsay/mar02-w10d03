const sayHello = (name: string | number): string => {
  // console.log(`hello ${name}`);
  return `hello ${name}`;
};

sayHello(42);

const returningPromise = (): Promise<number> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('haaalp')), 2000);
  });
};

const promise = returningPromise();

export {};
