//....Q # 1
//Install Node.js, TypeScript and VS Code on your computer.

//..... Q # 2

let personName : string = "osama"
console.log(`Hello ${personName}, would you like to learn some typescipt today?`)

//......Q # 3

console.log("lowercase:"+ personName.toLowerCase())
console.log("uppercase:"+ personName.toUpperCase())
let titleCase = personName[0].toUpperCase() + personName.slice(1).toLowerCase();
console.log("titlecase:"+ titleCase)

//......Q # 4

let famousPerson: string = `Dr Abdul Qadeer khan once said,"Pakistan's nuclear program is a symbol of our national 
resolve and a guarantor of our national security."`
console.log(famousPerson)

//.....Q # 5 

let famousPersonName : string = "Dr Abdul Qadeer khan"
let message : string = `${famousPersonName} once said ,"Pakistan's nuclear program is a symbol of our national
 resolve and a guarantor of our national security."`
 console.log(message)

 //........... Q # 6
 
 let myName:string ="my  name is \t osama.\n and i am enrolled in governer initiative"
 console.log(myName)

 //.......Q # 7

 let add : number = 5+5
 console.log(add)

 let subt : number = 20-10
 console.log(subt)

 let mult : number = 5*2
 console.log(mult)

 let divide : number = 20/2
 console.log(divide)

//.......Q #8
console.log(5+5) 
console.log(20-10) 
console.log(5*2) 
console.log(20/2) 

 //......Q # 9

 let favouriteNumber :number = 2
 let newMessage :string = `Hi! my name is osama and my favourite number is ${favouriteNumber}`
 console.log(newMessage)

 //......Q # 10

 //0ne
 //My name is osama
 //Date: 10 jun 2024
 // (as#9) this program stores a favourite number in a variable.

 //two
 //this program calculate methametical operators and eash answer is 10

 //......Q # 11

let friendsName :string [] = ["osama","fawaz","ashad","ahmed"]
console.log(friendsName[0])
console.log(friendsName[1])
console.log(friendsName[2])
console.log(friendsName[3])

//....Q # 12

friendsName.forEach(name =>{
    console.log(`Dear${name}, have a nice day!`)
})

//.....Q # 13

let transportation :string[] = ["bike","aeroplane","bus","car","rikshaw"]
transportation.forEach(name => {
    console.log(`“I would like to own a ${name}.”`)
}
)

//......Q # 14

let guestList :string[] = ["ali","ahsan","taha","ashad"]
guestList.forEach(person =>{
    console.log(`Dear ${person},you are invited to dinner!`)
})
//.......Q # 15

//(PERSON WHO CANNOT ATTEND DINNER)
let canNotCome :string ="ali"
console.log(canNotCome + " "+ "can not come to dinner")
//( person who attend dinner)

let canCome :string ="khushal"
guestList[guestList.indexOf(canNotCome)]=canCome
//new guestlist
guestList.forEach(guest=>{
    console.log(`Hello ${guest},you are invited to dinner!`)
})

//...........Q # 16

guestList.forEach(guest =>{
    console.log(`Hi ${guest}, i found a bigger dinner table so i invited more guest.`)
}
)
//beggining
let guest1:string = "abdullah"
guestList.unshift(guest1)
console.log(guestList)
//middle
let guest2 :string ="hassan"
let index = guestList.length/2;
guestList.splice(index,0,guest2)
console.log(guestList)
//end
let guest3:string="tayyab"
guestList.push(guest3)
console.log(guestList)

//now print msg
guestList.forEach(guest=>{
    console.log(`Dear ${guest},you are invited for new dinner guest list.`)
})

//........Q # 17

console.log(guestList) 
//console.log("i have space only two guests")
//while(guestList.length>2)
{
    let removePerson=guestList.pop()
    console.log(`sorry ${removePerson},i can not invited you to dinner`)}
// now final msg those who invite
//guestList.forEach(guest=>{
    //console.log(`Dear ${guest}, you are still invited to dinner!`)})
//create empty list
//guestList.pop()
//guestList.pop()
console.log(guestList)

//........Q # 18
let places : string[] =["rafah","gazah","lahore","karachi"]
console.log(places)
//console.log(places.sort())
//console.log(places.reverse())
places.sort()
console.log(places)
places.reverse()
console.log(places)

//.......Q # 19
//print a msg indicating no of people are inviting in dinner
console.log(guestList.length+ " " + "guest are invited for dinner.") 

//...........Q # 20
let mountain:string[]=["k2","mount everest","mount elbrus","mount denali"]
mountain.forEach(mount=>{
    console.log(mount)
})
//.....AS # 21
type mytype={
    name :string
    class:string
    age:number
}
let studentName :mytype ={
    name:"Osama hassan",
    class:"sunday 2 to 5 pm",
    age:20
}
console.log(studentName)

// ......AS # 22
let daysName:string[]=["monday","tuesday","wednesday","thursday"]
console.log(daysName[5])
console.log(daysName[2])

//............AS # 23
let car = "toyota"
console.log(car == "toyota")

let temp1:number = 40
let temp2:number =45
//test 1
console.log("temp1 is equal to 40?")
console.log(temp1 == 40)
//test 2
console.log("temp2 is equal to 45?")
console.log(temp2 == 45)
//test 3
console.log("temp1 is not equal to 45? ")
console.log(temp1 != 45)
//test 4 
console.log("temp2 is not equal to 40?")
console.log(temp2 != 40)
//test 5 
console.log("temp2 is greater than temp1?")
console.log(temp2 > temp1)
//test 6
console.log("temp2 is smaller than temp1?")
console.log(temp2 < temp1)
//test 7 
console.log("temp1 is equal to temp2 ?")
console.log(temp1 == temp2)
//test 8
console.log("temp1 is greater than temp2?")
console.log(temp1 > temp2)
//test 9 
console.log("40 is equal to temp2?")
console.log(40 == temp2)
//test 10 
console.log("45 is equal to temp1?")
console.log(45 == temp1)

//.......AS # 24
//string test
let firstName : string= "osama"
let lastName : string ="hassan"

//test 1
console.log("firstname is equal to 'osama'")
console.log(firstName === "osama")

console.log("firstname is eq to second name ")
console.log(firstName === lastName)
//test 2
console.log("is firstname eq to osama? ")
console.log(`${firstName}`.toLocaleLowerCase() === "osama")

console.log("is firstname eq to Osama? ")
console.log(`${firstName}`.toLocaleLowerCase() === "Osama")

//numerical test
let num1 :number = 10
let num2 :number = 15
//test 1
console.log("num1 eq to 10?")
console.log(num1 === 10)

console.log("num1 eq to num2?")
console.log(num1 === num2)
//test 2
console.log("num1 is greater than num2?")
console.log(num1 < num2)

console.log("num2 is less than num1")
console.log(num2 < num1 )
//test 3
console.log("num2 is less than or eq to 15?")
console.log(num2 <= 15)

console.log("num1 is greater than or equal to 15")
console.log(num2 >= 15)

//boolean test
let bool1 :boolean = true
let bool2:boolean = false
console.log("bool1 is true and bool2 is false?")
console.log(bool1 && bool2)

console.log("bool1 is true or bool2 to is false ?")
console.log(bool1 || bool2)
//array test
let array:number[] =[10,20,30,40]

console.log("is 20 in an array?")
console.log(array.includes(20))

console.log("is 50 in an array?")
console.log(array.includes(50))

//.....AS # 25
// Version that passes:
let alien_color = "green";
if (alien_color == "green") {
  console.log("You just earned 5 points!");
}

// Version that fails (no output):
alien_color = "red";
if (alien_color == "green") {
    console.log("no input")// No output because the condition is false
}
//......AS # 26

// Version that runs the if block:
alien_color = "green";
if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the  green alien");
} else {
  console.log("You just earned 10 points");
}

// Version that runs the else block:
alien_color = "yellow";
if (alien_color == "green") {
  console.log("You just earned 5 points for shooting the alien!");
} else {
  console.log("You just earned 10 points!");
}

//....AS # 27

// Green alien version:
alien_color = "green";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

// Yellow alien version:
alien_color = "yellow";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

// Red alien version:
alien_color = "red";
if (alien_color == "green") {
  console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
  console.log("You earned 10 points.");
} else if (alien_color == "red") {
  console.log("You earned 15 points.");
}

//............AS # 28
let age: number = 19;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age < 4) {
  console.log("The person is a toddler.");
} else if (age < 13) {
  console.log("The person is a kid.");
} else if (age < 20) {
  console.log("The person is a teenager.");
} else if (age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

//.......AS # 29
let favorite_fruits: string[] = ["apples", "bananas", "mangoes"];

if (favorite_fruits.includes("bananas")) {
  console.log("i really like bananas!");
}
if (favorite_fruits.includes("apples")) {
  console.log("i really like apples!");
}
if (favorite_fruits.includes("cherries")){
  console.log("i really like cherries")
}

//.....AS # 30 
let usernames: string[] = ["osama", "ahsan", "hassan", "taha"];

usernames.forEach((username) => {
  if (username == "osama") {
    console.log(`"Hello ${username}, would you like to see a status report?"`);
  } else {
    console.log(`Hello ${username}, thank you for loggin in again.`);
 }});
 //.........AS # 31
let userNames: string[] = ["osama","hassan"];

if(userNames.length === 0){
    console.log( "We need to find some users!");
    
} else {
    console.log("greet user")
}
// Removing all usernames ensures the message "We need to find some users!" is printed.
 let user_names: string[] = [];

if(user_names.length === 0){
    console.log( "We need to find some users!");
    
} else {
    console.log("greet user")
}

//.........AS # 32

let current_users: string[] = ["ali", "ahmed", "hassan", "osama","ashad"];
let new_users: string[] = ["raziq", "hammad", "umer", "asad", "Ashad"];

new_users.forEach((newUser) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(`${newUser} will need to enter a new username.`);
  } else {
    console.log(`${newUser} is available.`);}
});

//........AS # 33

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((number) => {
  let suffix = "th";
  if (number === 1) {
    suffix = "st";
  } else if (number === 2) {
    suffix = "nd";
  } else if (number === 3) {
    suffix = "rd";
  }
  console.log(`${number}${suffix}`);
});

//....AS # 34

let pizzas: string[] = ["Chicken tikka", "fajita", "hawaiian"];

pizzas.forEach(pizza => {
console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");

//.......AS # 35

let animals: string[] = ["dog", "cat", "rabbit"];

animals.forEach((animal) => {
  console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");

//..........AS # 36

function make_shirt(size: string , message: string ) {
    //console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`);
}
make_shirt("medium","free palestine");

//.....AS # 37
  
function makeShirt(size: string = "large", message: string = "free palestine") {
      console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
      }
      
      makeShirt(); // Default large and message
      makeShirt("medium"); // Default message, medium size
      makeShirt("small", "all eyes on rafah"); // Custom message, small size

//........AS # 38

function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo","Japan");

//.......AS # 39

function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
  }
  
  console.log(city_country("Lahore", "Pakistan"));
  console.log(city_country("Tokyo", "Japan"));
  console.log(city_country("Paris","France"));

  //.....AS # 40

function make_album(artist: string, title: string, tracks?: number) {
    let album = { artist, title , tracks };
    if (tracks) {
      album.tracks = tracks;
    }
    return album;
  }
  
  console.log(make_album("Asim azhar", "The First Album"));
  console.log(make_album("Arigit singh", "The Second Album"));
  console.log(make_album("Atif aslam", "The Third Album",12));

//......AS # 41
let magicians: string[] = [" Bat man", " Iron man", " Spider man"];

function show_magicians(magicians: string[]):void {
  magicians.forEach((magician) => {
    console.log(magician);
  });
}
show_magicians(magicians);

//.......AS # 42

function make_great(magicians: string[]):string[] {
  return magicians.map(magicians => "the Great" + magicians) }

make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names

//......AS # 43
let great_magicians:string[]=make_great([...magicians])

console.log("Original magicians:");
show_magicians(magicians); // Shows original names

console.log("Great magicians:");
show_magicians(great_magicians); // Shows modified names

//.........AS # 44
function make_sandwich(...items: string[]) {
  console.log('Making a sandwich with:')
  items.forEach( item => console.log ("-"+item))
};

make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard","mayo");

//...........AS # 45
function car_info(
  manufacturer: string,
  model: string,
  ...options: [string, any][]
) {
  let car = { manufacturer, model};
  options.forEach(([key, value]) => (car[key] = value));
  return car;
}

console.log(car_info("Toyota", "Carolla", ["color", "red"], ["year", 2020]));
console.log(car_info("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));
