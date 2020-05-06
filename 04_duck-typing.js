"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message = 'hello there';
const sayHello = (name) => {
    console.log(`hello ${name}`);
};
const inputName = 'Alice';
sayHello(inputName);
const loginUser = (user) => {
    console.log(user.username);
    return true;
};
const user = { username: 'Alice', password: '1234' };
loginUser(user);
