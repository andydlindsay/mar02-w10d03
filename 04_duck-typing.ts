const message: string = 'hello there';

const sayHello = (name: string): void => {
  console.log(`hello ${name}`);
}

const inputName = 'Alice';
sayHello(inputName);

interface IUser {
  username: string;
  password: string;
  age?: number
}

const loginUser = (user: IUser): boolean => {
  console.log(user.username);
  return true;
};

const user = { username: 'Alice', password: '1234' };

loginUser(user);

export {};
