let mySelf = {
    name: "Promise Uzor Okwudiri",
    age: '24',
    email: "uzorpromiseokwudiri@gmail.com"
};

const myFav = {
    car: "Tesla",
    app: "X",
    hobby: "coding",
    food: "sushi",
    movie: "Inception"
};

console.log(Object.keys(mySelf), Object.values(mySelf));
console.log(Object.keys(myFav), Object.values(myFav));


class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        console.log(this.name + " speaks");
    }
}

class Man extends Human {
}

const john = new Man("John", 30);

john.talk();
