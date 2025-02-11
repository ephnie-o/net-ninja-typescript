"use strict";
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
// Type
let character = 'mario';
let age = 30;
let isBlackBelt = false;
character = 'luigi';
age = 40;
isBlackBelt = true;
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(10));
// arrays
let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
//cannot be done
// names[0] = 3;
// names.push(3);
let numbers = [10, 20, 30, 45];
//cannot be done
// numbers.push('shaun');
// numbers[1] = 'shaun';
let mixed = ['ken', 4, 'chun', 8, 9, true];
mixed.push('ryu');
mixed.push(10);
mixed[0] = 3;
// objects
let ninja = {
    name: 'mario',
    belt: 'black',
    age: 30
};
ninja.age = 40;
ninja.name = 'ryu';
// cannot be done
// ninja.age = '30';
// ninja.skills = ['fighting', 'sneaking'];
// explicit types
let charac;
let aged;
let isLoggedIn;
aged = 30;
isLoggedIn = true;
//arrays explicit types
let ninjas;
ninjas = ['yoshi', 'mario'];
// you need to initialize it before using push
let ninjas2 = [];
ninjas2.push('shaun');
// union types: mixed types array
let mixed2 = [];
mixed2.push('hello');
mixed2.push(23);
mixed2.push(false);
console.log(mixed2);
let uid;
uid = '123';
uid = 123;
function swapIdType(id) {
    if (typeof id === 'string') {
        return parseInt(id);
    }
    else {
        return uid.toString();
    }
}
const idOne = swapIdType(1);
const idTwo = swapIdType('2');
console.log(idOne, idTwo);
function logDetail(value) {
    if (value.type === 'user') {
        console.log(value.email, value.username);
    }
    if (value.type === 'person') {
        console.log(value.firstname, value.age);
    }
}
// objects explicit types
let ninjaOne;
ninjaOne = { name: 'yoshi', age: 30 };
let ninjaTwo;
ninjaTwo = { name: 'mario', age: 30, belt: 'black' };
// any type
// rips out the benefits of using typescript
let aging = 25;
aging = true;
console.log(aging);
aging = 'hello';
console.log(aging);
aging = { name: 'luigi' };
console.log(aging);
let mixing = [];
mixing.push(5);
mixing.push(false);
mixing.push('mario');
console.log(mixing);
let ninjing;
ninjing = {
    name: 'yoshi',
    age: 25
};
console.log(ninjing);
ninjing = { name: 23, age: 'hello' };
console.log(ninjing);
// functions
let greet;
greet = () => {
    console.log('hello, world');
};
//put optional or default parameter at the end and required parameters at the beginning
// adding a question mark makes the c optional, you can decidde to add it or not
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(4, 3, '20');
//making the c a default number when nothing is passed to it.
const minus = (a, b, c = 10) => {
    console.log(a - b);
    console.log(c);
};
minus(4, 3, '10');
const minuss = (a, b) => {
    return a - b;
};
let result = minuss(10, 7);
const logDetails = (uid, item) => {
    console.log(`${item} has a uid of ${uid}`);
};
const greeting = (user) => {
    console.log(`${user.name} says hello`);
};
function getRandomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return [r, g, b];
}
const colorOne = getRandomColor();
const colorTwo = getRandomColor();
console.log(colorOne, colorTwo);
// function signatures
let gree;
gree = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
let calc;
calc = (num1, num2, action) => {
    if (action === 'add') {
        return num1 + num2;
    }
    else {
        return num1 - num2;
    }
};
let log;
log = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
const authorOne = { name: 'mario', avatar: '/img/mario.png' };
const newPost = {
    title: 'My first post',
    body: 'somethong interesting',
    tags: ['gaming', 'tech'],
    create_at: new Date(),
    author: authorOne
};
function createPost(post) {
    console.log(`Created post ${post.title} by ${post.author.name}`);
}
createPost(newPost);
let posts = [];
posts.push(newPost);
