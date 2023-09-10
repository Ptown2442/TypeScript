console.log('Hello World');

let sales = 123_456_789;
let course = 'TypeScript';
let is_published = true;
let level;

function render(document: any) {
    console.log(document);
}

let numbers: number[] = [];
let user: [number, string] = [1, 'Mosh'];


const enum Size { Small = 1, Medium, Large };
let mySize: Size = Size.Medium;
console.log(mySize);

function calculateTax(income: number, taxYear = 2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}

console.log(calculateTax(10_000, 2022));

class Person {
    constructor(public firstName: string, public lastName: string) {}

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    walk() {
        console.log('walking')
    }
}

class Student extends Person {
    constructor(public studentId: number, firstName: string, lastName: string){
        super(firstName, lastName);
    }

    takeTest() {
        console.log('taking a test');
    }

}

let student = new Student(1, 'Porter', 'Bartniv');
console.log(student.fullName);
