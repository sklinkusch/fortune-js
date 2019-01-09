const fortune = (
  numch = 0,
  partn = "Jane Doe",
  loc = "space",
  job = "worker",
  area = 1
) => {
  let child =
    numch === 0 ? "no kids" : numch === 1 ? `${numch} kid` : `${numch} kids`;
  return `You will be a ${job} in ${loc}, married to ${partn} with ${child} living in a house of ${area} square meters.`;
};

const randomize = MyArray => Math.floor(Math.random() * MyArray.length);
let jobs = [
  "Doctor",
  "Drug dealer",
  "Murderer",
  "Pimp",
  "President",
  "Farmer",
  "Pope",
  "CEO",
  "Clown",
  "Bank robber"
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
  "China"
];
let partners = [
  "a man",
  "a woman",
  "several men",
  "several women",
  "several women and men",
  "no one",
  "your pet",
  "your job"
];

let jobnr = randomize(jobs);
let geonr = randomize(geolocs);
let partnr = randomize(partners);
let childnr = Math.floor(20 * Math.random());
let areanr = Math.floor(1000 * Math.random());

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
  jobs[jobnr],
  areanr
);
