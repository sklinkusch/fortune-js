
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
    area === 1 ? `${area} square meter` : `${area} square meters`;
  return `You will be ${job} ${loc}, married to ${partn} with ${child} living in ${house} of ${sqm}.`;
};

const randomize = MyArray => Math.floor(Math.random() * MyArray.length);
const randomvalue = (min,max) => Math.floor(Math.random() * (max - min) + min);
let jobs = [
  "a doctor in",
  "a drug dealer in",
  "a murderer in",
  "a pimp in",
  "a prostitute in",
  "the president of",
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
  "the US",
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
  "France"
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
  "your job"
];
let houses = [
  "a house",
  "a flat",
  "a penthouse",
  "a public restroom",
  "a palace",
  "a whorehouse",
  "a prison cell",
  "a tent",
  "a trailer",
  "a phone box",
  "a stable"
];
let jobnr = randomize(jobs);
let geonr = randomize(geolocs);
let partnr = randomize(partners);
let housenr = randomize(houses);
let childnr = Math.floor(20 * Math.random());
let minimum; 
let maximum;
switch(houses[housenr]){
  case "a house":
    minimum = 50;
    maximum = 201;
    break;
  case "a flat":
    minimum = 30;
    maximum = 101;
    break;
  case "a penthouse":
    minimum = 500;
    maximum = 1001;
    break;
  case "a public restroom":
    minimum = 10;
    maximum = 41;
    break;
  case "a palace":
    minimum = 500;
    maximum = 6001;
    break;
  case "a whorehouse":
    minimum = 50;
    maximum = 3001;
    break;
  case "a prison cell":
    minimum = 8;
    maximum = 11;
    break;
  case "a tent":
    minimum = 4;
    maximum = 21;
    break;
  case "a trailer":
    minimum = 8;
    maximum = 21;
    break;
  case "a phone box":
    minimum = 1;
    maximum = 5;
    break;
  case "a stable":
    minimum = 30;
    maximum = 5000;
    break;
  default:
    minimum = 1;
    maximum = 1000;
}
let areanr = randomvalue(minimum, maximum);
// let areanr = Math.floor(1000 * Math.random());

// Prompt
/*let userJob = prompt("Desired Job?", "Doctor");
let userLoc = prompt("Where?", "Aerospace");
let userPart = prompt("Partner?", "anyone");
let userChild = prompt("Number of Children", 0);
let userArea = prompt("Size of House", 40);
// Console log user input
console.log(fortune(userChild, userPart, userLoc, userJob, userArea));*/
// alert(
//   fortune(childnr, partners[partnr], geolocs[geonr], jobs[jobnr], areanr)
// );
document.getElementById("fortune").innerHTML = fortune(
  childnr,
  partners[partnr],
  geolocs[geonr],
  houses[housenr],
  jobs[jobnr],
  areanr
);
