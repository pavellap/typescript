const str: string = "Hello, world!";
console.log(str);

let isFetching: Boolean = false;


const array: number[] = [1, 3, 5, 6, 8];
const secondArray: Array<number> = [1, 2, 3, 4];
console.log(array, secondArray);

// Tuple

const contact: [string, number] = ["Pavellap", 199];


///------
const sayMyname = (name: string) : void => {
    console.log("My name is ", name);
}

sayMyname('Pasha')


type Login = string;

const myLogin: Login = 'trigo';

