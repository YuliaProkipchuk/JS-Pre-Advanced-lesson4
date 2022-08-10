// task 1
class Worker {
    constructor(name, surname, rate, days) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return this.rate * this.days;
    }
}

const firstworker = new Worker('Oksana', 'Pans', 760, 20);

console.log(firstworker.name);
console.log(firstworker.surname);
console.log(firstworker.rate);
console.log(firstworker.days);
console.log(`Oksana's Salary `, firstworker.getSalary());

const secondworker = new Worker('Oleh', 'Teri', 704, 21);
console.log(`Oleh's salary `, secondworker.getSalary());
console.log('Suma: ', firstworker.getSalary() + secondworker.getSalary());

//task 2
class MyString{
    reverse(str){
        let reverse='';
        for(let i=str.length-1;i>=0;i--){
            reverse+=str.charAt(i)
        }
        return reverse;
    }
    ucFirst(str){
        let firstLetter = str.slice(0,1);
        return firstLetter.toUpperCase()+str.slice(1);
    }
    ucWords(str){
        let st = str.split(' ');
        let letter, concatt='';
        for(let i=0; i<st.length;i++){
            letter = st[i].slice(0,1);
            concatt += letter.toUpperCase()+st[i].slice(1)+' ';
        }
        return concatt
    }
}
let mac = new MyString();
console.log(mac.ucWords('arsenal arsenal arsenal'));
console.log(mac.reverse('ivan'));
console.log(mac.ucFirst('ivan'));

//task 3
class CoffeMake{
    on(){
        console.log('Making coffee');
    }
    off(){
        console.log('Stop making coffee');
    }
}

class DripCoffeeMaker extends CoffeMake{
    temperature = Math.round(Math.random()*41);
    constructor(seconds=1000){
        super();
        this.seconds = seconds;
    }
    showTemperature(){
        console.log(`Temperature is: ${this.temperature}`);
        if(this.temperature==100){
            this.off();
        }
    }
    timer(){
        console.log(`Coffee preparation will start in ${this.seconds/1000} seconds`);
        setTimeout(this.on, this.seconds);
    }
}

class HornCoffeeMaker extends CoffeMake{
    constructor(whip=false){
        super();
        this.whip=whip;
    }
    whipMilk(){
        if(this.whip){
            console.log('You chose coffee with whipped milk');
        }
    }
}

class CoffeMachine extends CoffeMake{
    coffeeDrinks = ["espresso", "americano", "latte", "cappuccino", "dopio"];
    constructor(drinkChoice = 'Espresso'){
        super();
        this.drinkChoice = drinkChoice;
    }
    coffeeChoice(){
        if(this.coffeeDrinks.includes(this.drinkChoice.toLocaleLowerCase())){
            console.log(`You chose: ${this.drinkChoice}`);
        }
        else{
            console.log(`You chose: Espresso`);
        }
    }
}

let drip_coffee = new DripCoffeeMaker(3000);
drip_coffee.showTemperature();
drip_coffee.timer();
drip_coffee.off();

console.log('\n\n');
let horn_coffee = new HornCoffeeMaker(true);
horn_coffee.whipMilk();
horn_coffee.on();
horn_coffee.off();

console.log('\n\n');
let machine =  new CoffeMachine("Cappuccino");
machine.coffeeChoice();
machine.on();
machine.off();