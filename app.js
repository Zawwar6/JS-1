// let myAge = 19;
// let humanDogRatio = 5;

// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge);

// let bonusPoints = 50;
// console.log(bonusPoints);


// bonusPoints = bonusPoints * 2;
// console.log(bonusPoints);

// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);
 
// function increment(){
//     console.log("Button is working");
// }


// function number(){
//     console.log(42);
// }
// number();


// let lap1 = 30;
// let lap2 = 30;
// let lap3 = 30;

// function logLapTime(){
//     console.log(lap1 + lap2 + lap3);
// }

// logLapTime();


// let lapsComplete = 0;
// function incrementLap(){
//     lapsComplete = lapsComplete +1;
// }
// incrementLap();
// incrementLap();
// incrementLap();


// console.log(lapsComplete);
let count = 0;

let countEl = document.getElementById("count")

console.log(countEl);

function increment(){
    count += 1;
    countEl.innerText = count;
}
console.log(count);
 let saveEl = document.getElementById("save-el");

 console.log(saveEl);
function save(){
     let countStr = count + " - ";
     saveEl.textContent += countStr
     countEl.textContent = 0;
     count  = 0

    console.log(count);
}
// let message = "You have three new notification"
// let username = " from Zawwar khatri"

// console.log(message +  "," +username);

// let greeting = "Hi, my name is "; 
// let name = "Zawwar khatri";


// let myGreeting = greeting + name;
// console.log(myGreeting);

