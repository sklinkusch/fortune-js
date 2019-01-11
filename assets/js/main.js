// Function to create the fortune sentence
const fortune = (
  numch = 0,
  partn = "Jane Doe",
  loc = "space",
  house = "a house",
  job = "a worker in",
  area = 1
) => {
  let child =
    numch === 0 ? "no kids" : numch === 1 ? `${numch} kid` : `${numch} kids`;
  let sqm = 
    area === 1 ? ` of ${area} square meter` : area > 1 ? ` of ${area} square meters` : "";
  return `You will be ${job} ${loc}, married to ${partn} with ${child} living ${house}${sqm}.`;
};
// Functions to create random values
const randomize = MyArray => Math.floor(Math.random() * MyArray.length);
const randomvalue = (min,max) => Math.floor(Math.random() * (max - min) + min);
// Arrays for possible solutions
let jobs = [
  "a doctor in",
  "a drug dealer in",
  "a murderer in",
  "a pimp in",
  "a prostitute in",
  "the president of",
  "the dictator of",
  "the king of",
  "the queen of",
  "the emperor of",
  "the empress of",
  "the Dalai Lama in",
  "a farmer in",
  "the pope in",
  "a CEO in",
  "a clown in",
  "a bank robber in"
];
let geolocs = [
  "North Korea",
  "Japan",
  "the USA",
  "Germany",
  "Italy",
  "Finland",
  "South Africa",
  "Argentina",
  "Mexico",
  "Vatican City",
  "Australia",
  "Thailand",
  "China",
  "Saudi-Arabia",
  "France",
  "Turkey"
];
let partners = [
  "a man",
  "a woman",
  "several men at the same time",
  "several women at the same time",
  "several women and men at the same time",
  "no one",
  "your dog",
  "your cat",
  "your hamster",
  "your guinea-pig",
  "your pig",
  "your cow",
  "your bull",
  "your bear",
  "your turtle",
  "your bunny",
  "your horse",
  "your sheep",
  "your goat",
  "your job"
];
let houses = [
  "in a house",
  "in a flat",
  "in a penthouse",
  "in a public restroom",
  "in a palace",
  "in a whorehouse",
  "in a prison cell",
  "in a tent",
  "in a trailer",
  "in a phone box",
  "in a stable",
  "on the street"
];
let jobnr = randomize(jobs);
let geonr = randomize(geolocs);
let partnr = randomize(partners);
let housenr = randomize(houses);
let childnr = randomvalue(0,20);
let minimum; 
let maximum;
// Adjust house size to the "house"
switch(houses[housenr]){
  case "in a house":
    minimum = 50;
    maximum = 201;
    break;
  case "in a flat":
    minimum = 30;
    maximum = 101;
    break;
  case "in a penthouse":
    minimum = 500;
    maximum = 1001;
    break;
  case "in a public restroom":
    minimum = 10;
    maximum = 41;
    break;
  case "in a palace":
    minimum = 500;
    maximum = 6001;
    break;
  case "in a whorehouse":
    minimum = 50;
    maximum = 3001;
    break;
  case "in a prison cell":
    minimum = 8;
    maximum = 11;
    break;
  case "in a tent":
    minimum = 4;
    maximum = 21;
    break;
  case "in a trailer":
    minimum = 8;
    maximum = 21;
    break;
  case "in a phone box":
    minimum = 1;
    maximum = 5;
    break;
  case "in a stable":
    minimum = 30;
    maximum = 5001;
    break;
  case "on the street":
    minimum = 0;
    maximum = 1;
    break;
  default:
    minimum = 1;
    maximum = 1000;
}
let areanr = randomvalue(minimum, maximum);

// old prompt -> deprecated
/*let userJob = prompt("Desired Job?", "Doctor");
let userLoc = prompt("Where?", "Aerospace");
let userPart = prompt("Partner?", "anyone");
let userChild = prompt("Number of Children", 0);
let userArea = prompt("Size of House", 40);
// Console log user input -> deprecated
console.log(fortune(userChild, userPart, userLoc, userJob, userArea));
// Alert output -> deprecated
 alert(
   fortune(childnr, partners[partnr], geolocs[geonr], jobs[jobnr], areanr)
);*/
//Function call and output to the HTML
document.getElementById("fortune").innerHTML = fortune(
  childnr,
  partners[partnr],
  geolocs[geonr],
  houses[housenr],
  jobs[jobnr],
  areanr
);
