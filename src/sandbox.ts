const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
    console.log(input);
})

// Type
let character = 'mario';
let age = 30;
let isBlackBelt = false;

character = 'luigi';
age = 40;
isBlackBelt = true;

const circ = (diameter: number) => {
    return diameter * Math.PI;
}

console.log(circ(10))

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
let charac: string;
let aged: number;
let isLoggedIn: boolean;

aged = 30;
isLoggedIn = true;

//arrays explicit types
let ninjas: string[];
ninjas = ['yoshi', 'mario'];
// you need to initialize it before using push
let ninjas2: string[] = [];
ninjas2.push('shaun');

// union types: mixed types array
let mixed2: (string|number|boolean)[] = [];
mixed2.push('hello');
mixed2.push(23);
mixed2.push(false);
console.log(mixed2);

let uid: string|number;
uid = '123';
uid = 123;

// objects explicit types
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30 }

let ninjaTwo: {
    name: string,
    age: number,
    belt: string
}

ninjaTwo = {name: 'mario', age: 30, belt: 'black'}

// any type
// rips out the benefits of using typescript
let aging: any = 25;

aging = true;
console.log(aging);
aging = 'hello';
console.log(aging);
aging = { name: 'luigi' };
console.log(aging);

let mixing: any[] = [];
mixing.push(5);
mixing.push(false);
mixing.push('mario');
console.log(mixing);

let ninjing: { name: any, age: any };
ninjing = {
    name: 'yoshi',
    age: 25
};
console.log(ninjing);
ninjing = { name: 23, age: 'hello' };
console.log(ninjing);

// functions
let greet: Function;
greet = () => {
    console.log('hello, world');
}


//put optional or default parameter at the end and required parameters at the beginning
// adding a question mark makes the c optional, you can decidde to add it or not
const add = (a: number, b:number, c?: number | string) => {
    console.log(a + b);
    console.log(c);
}
add(4, 3, '20');

//making the c a default number when nothing is passed to it.
const minus = (a: number, b:number, c: number | string = 10) => {
    console.log(a - b);
    console.log(c);
}

minus(4, 3, '10');

const minuss = (a:number, b:number): number => {
    return a - b;
}

let result = minuss(10, 7);

// type aliases
type StringOrNum = string | number
type objWIthName = { name: string, uid: StringOrNum}

const logDetails = (uid: StringOrNum, item: string) => {
    console.log(`${item} has a uid of ${uid}`);
}

const greeting = (user: objWIthName) => {
    console.log(`${user.name} says hello`);
}

// function signatures
let gree: (a: string, b: string) => void;
gree = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

let calc: (a:number, b: number, c: string) => number;

calc = (num1: number, num2: number, action: string) => {
    if(action === 'add'){
        return num1 + num2;
    } else {
        return num1 - num2;
    }
}

let log: (obj: { name: string, age: number}) => void;

type person = {name: string, age: number};

log = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
}


