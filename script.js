const Car = {
  manufacturer:'porche',
  year: 2023,
  brand: 'caynne',
  color: 'black'
};

const{manufacturer,year,brand,color}=Car;
console.log(manufacturer,year,brand,color);

//Arrays

const brands =['apple', 'samsung','hp','asus'];
const {apple,hp}=brand
console.log(apple,hp);

//DESTRUCTURING

const car ={
  manufacturer:'porche',
  brand:'caynne',
  color:{
    fullName:'james bond',
    adssres:{'georgia',
    city:'tbilisi',
   }
  },
  prevOwner:['giorgi','vano','mate']
};
const {brand,manufacturer,owner:{fullName,adssres:{country,city}},prevOwner:[owner1,owner2]}=car;
console.log(manufacturer,brand,fullName,country,city,owner1,owner2);



const cars = {
  {manufacturer:'porsche',owner:'james bond'},
  {manufacturer:"lamborgini",owner:"jason smith"},
}
const{
  {manufacturer:porscheManufacturer,owner:porscheOwner},
  {manufacturer:lamborginiManufacturer,owner:lamborginiOwner}
}= cars;

console.log(porscheManufacturer,porscheOwner,lamborginiManufacturer,lamborginiOwner);

//Destructuring function parameters



const car ={
  manufacturer:'porsche',
  brand:'cayenne',
  owner:{
    fullName:'james bond',

  }
}

function printCar({manufacturer,brand,owner:(fullName)}){
  return manufacturer +' ' + brand + ' '+ fullName;

}
console.log(printCar(car));

//Arrow function

const calculateSum = (a ,b)=>{
  return a + b;
}
console.log(calculateSum (4,5));

const sayHello = fullName =>'Hello', + fullName;
console.log(sayHello('james bond'));

//this keyword

const user ={
  name: 'james bond',
  sayHello:()=>{
    console.log(this);
    return 'Hello'+this.name;

  }
}
console.log(user.sayHello());


//Destructuring with default values

const users = {
  fullName: 'james bond'
  userName:'007'
};
const{fullName,userName,addres: {city} ={}}= user;
console.log(fullName,userName,city);