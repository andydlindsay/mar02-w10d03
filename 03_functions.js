"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sayHello = (name) => {
    // console.log(`hello ${name}`);
    return `hello ${name}`;
};
sayHello(42);
const returningPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error('haaalp')), 2000);
    });
};
const promise = returningPromise();
