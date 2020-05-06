// a generic is a way to still use typing even though you don't know what the type is

interface Container<T> {
  title: string;
  contents: T;
  age?: T;
}

const myContainer: Container<string | number> = {
  title: 'string container',
  contents: 'hello I am a string',
  age: 42
};

const numberContainer: Container<number | string> = {
  title: 'number container',
  contents: '42'
};

export {};
