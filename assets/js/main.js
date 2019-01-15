// Function to create the English fortune sentence
const fortune_engl = (
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
    area === 1
      ? ` of ${area} square meter`
      : area > 1
      ? ` of ${area} square meters`
      : "";
  return `You will be ${job} ${loc}, married to ${partn} with ${child} living ${house}${sqm}.`;
};
// Function to create the German fortune sentence
const fortune_germ = (
  numch = 0,
  partn = "Monika Mustermann",
  loc = "Kosmos",
  house = "ein Haus",
  job = "ein Arbeiter in",
  area = 1
) => {
  let child =
    numch === 0 ? "keine Kinder" : numch === 1 ? "ein Kind" : `${numch} Kinder`;
  let sqm =
    area === 1
      ? " mit einem Quadratmeter Wohnfläche"
      : area > 1
      ? ` mit ${area} Quadratmetern Wohnfläche`
      : "";
  let job_ft;
  let loc_ft;
  if (
    /von/.test(job) &&
    (loc === "den Vereinigten Staaten von Amerika" ||
      loc === "der Türkei" ||
      loc === "den Malediven" ||
      loc === "der Schweiz")
  ) {
    job_ft = job.substr(0, job.length - 4);
    loc_ft = loc.replace("den", "der");
  } else if (/von/.test(job) && loc === "Vatikan") {
    job_ft = job.replace("von", "des");
    loc_ft = loc.padEnd(8, "s");
  } else if (/ in/.test(job) && loc === "Vatikan") {
    job_ft = job.replace(" in", " im");
    loc_ft = loc;
  } else {
    job_ft = job;
    loc_ft = loc;
  }
  return `Du wirst ${job_ft} ${loc_ft} sein, mit ${partn} verheiratet sein, ${child} haben und ${house}${sqm} leben.`;
};
// Function to create the French fortune sentence
const fortune_fr = (
  numch = 0,
  partn = "Mme Toulemonde",
  loc = "en Aérospace",
  house = "une maison",
  job = "un ouvrier",
  area = 1
) => {
  let marie =
    /reine/.test(job) || /impératrice/.test(job) || /prostituée/.test(job)
      ? "mariée"
      : "marié";
  let child =
    numch === 0
      ? `n'auras pas d'enfants`
      : numch === 1
      ? `auras un enfant`
      : `auras ${numch} enfants`;
  let sqm =
    area === 1
      ? ` d'un mètre carré`
      : area > 1
      ? ` de ${area} mètres carré`
      : "";
  let job_ft;
  let loc_ft;
  if (/ en$/.test(job) && /^la /.test(loc)) {
    job_ft = job;
    loc_ft = loc.substring(3);
  } else if (/ en$/.test(job) && /^l'/.test(loc)) {
    job_ft = job;
    loc_ft = loc.substring(2);
  } else if (/ en$/.test(job) && /^les /.test(loc)) {
    job_ft = job.replace(" en", " aux");
    loc_ft = loc.substring(4);
  } else if (/ en$/.test(job) && /^le /.test(loc)) {
    job_ft = job.replace(" en", " au");
    loc_ft = loc.substring(3);
  } else if (/ de$/.test(job) && /^la /.test(loc)) {
    job_ft = job;
    loc_ft = loc.substring(3);
  } else if (/ de$/.test(job) && /l'/.test(loc)) {
    job_ft = job.replace(" de", " d'");
    loc_ft = loc.substring(2);
  } else if (/ de$/.test(job) && /^le /.test(loc)) {
    job_ft = job.replace(" de", " du");
    loc_ft = loc.substring(3);
  } else if (/ de$/.test(job) && /^les /.test(loc)) {
    job_ft = job.replace(" de", " des");
    loc_ft = loc.substring(4);
  }
  return `Tu seras ${job_ft} ${loc_ft}, tu seras ${marie} avec ${partn}, tu ${child} et tu ${house}${sqm}.`;
};
const fortune_la = (
  numch = 0,
  partn = "Caio Iulio Caesare",
  loc = "in terra",
  house = "mansione",
  job = "faber",
  area = 1
) => {
  let marie;
  if (/regina/.test(job) || /imperatoria/.test(job) || /prostituta/.test(job)) {
    marie = "nupta";
  } else {
    marie = "nuptus";
  }
  let child =
    numch === 0
      ? "non erunt filii"
      : numch === 1
      ? "erit filius"
      : `erunt ${numch} filii`;
  let sqm =
    area == 1
      ? "unius metri quadrati"
      : area > 1
      ? `${area} metrorum quadratorum`
      : "";
  return `Eris ${job} ${loc}, ${marie} cum ${partn}, tibi ${child} ${house} ${sqm}.`;
};
// Italian function
const fortune_it = (
  numch = 0,
  partn = "Dante Alighieri",
  loc = "in Italia",
  house = "casa",
  job = "dottore",
  area = 1
) => {
  let marie =
    /regina/.test(job) || /imperatrice/.test(job) || /prostituta/.test(job)
      ? "sposata"
      : "sposato";
  let child =
    numch === 0
      ? "alcuno bambino"
      : numch === 1
      ? "un bambino"
      : `${numch} bambini`;
  let sqm =
    area === 1
      ? "di un metro quadrato"
      : area > 1
      ? `di ${area} metri quadrati`
      : "";
  return `Tu sarai ${job} ${loc}, ${marie} con ${partn}, tu avrai ${child} e abiterai ${house} ${sqm}.`;
};
// Functions to create random values
const randomize = MyArray => Math.floor(Math.random() * MyArray.length);
const randomvalue = (min, max) => Math.floor(Math.random() * (max - min) + min);
// Arrays for possible solutions (english)
let jobs_engl = [
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
  "a bank robber in",
  "a diving instructor in",
  "a skiing instructor in"
];
let geolocs_engl = [
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
  "Turkey",
  "Russia",
  "Switzerland",
  "Nepal",
  "Maldives"
];
let partners_engl = [
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
let houses_engl = [
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
  "in a swimming pool",
  "in a cave",
  "on the street"
];
let jobs_germ = [
  "ein Arzt in",
  "ein Drogendealer in",
  "ein Mörder in",
  "ein Zuhälter in",
  "eine Prostituierte in",
  "der Präsident von",
  "der Diktator von",
  "der König von",
  "die Königin von",
  "der Kaiser von",
  "die Kaiserin von",
  "der Dalai Lama in",
  "ein Bauer in",
  "der Papst in",
  "ein Vorstandsvorsitzender in",
  "ein Clown in",
  "ein Bankräuber in",
  "ein Tauchlehrer in",
  "ein Skilehrer in"
];
let geolocs_germ = [
  "Nordkorea",
  "Japan",
  "den Vereinigten Staaten von Amerika",
  "Deutschland",
  "Italien",
  "Finnland",
  "Südafrika",
  "Argentinien",
  "Mexiko",
  "Vatikan",
  "Australien",
  "Thailand",
  "China",
  "Saudi-Arabien",
  "Frankreich",
  "der Türkei",
  "Russland",
  "der Schweiz",
  "Nepal",
  "den Malediven"
];
let partners_germ = [
  "einem Mann",
  "einer Frau",
  "mehreren Männern gleichzeitig",
  "mehreren Frauen gleichzeitig",
  "mehreren Frauen und Männern gleichzeitig",
  "niemandem",
  "deinem Hund",
  "deiner Katze",
  "deinem Hamster",
  "deinem Meerschweinchen",
  "deinem Schwein",
  "deiner Kuh",
  "deinem Stier",
  "deinem Bären",
  "deiner Schildkröte",
  "deinem Hasen",
  "deinem Pferd",
  "deinem Schaf",
  "deiner Ziege",
  "deinem Beruf"
];
let houses_germ = [
  "in einem Haus",
  "in einer Wohnung",
  "in einem Penthouse",
  "in einer öffentlichen Toilette",
  "in einem Schloss",
  "in einem Bordell",
  "in einer Gefängniszelle",
  "in einem Zelt",
  "in einem Wohnwagen",
  "in einer Telefonzelle",
  "in einem Stall",
  "in einem Schwimmbecken",
  "in einer Höhle",
  "auf der Straße"
];
let jobs_fr = [
  "un médecin en",
  "un narcotrafiquant en",
  "un assassin en",
  "un souteneur en",
  "une prostituée en",
  "le président de",
  "le dictateur de",
  "le roi de",
  "la reine de",
  "l'empereur de",
  "l'impératrice de",
  "le Dalaï-lama en",
  "un paysan en",
  "le pape en",
  "un président du directoire en",
  "un clown en",
  "un voleur de banque en",
  "un instructeur de plongée en",
  "un moniteur de ski en"
];
let geolocs_fr = [
  "la Corée du Nord",
  "le Japon",
  "les États-Unis",
  "l'Allemagne",
  "l'Italie",
  "la Finlande",
  "l'Afrique du Sud",
  "l'Argentine",
  "le Mexique",
  "le Vatican",
  "l'Australie",
  "la Thaïlande",
  "la Chine",
  "l'Arabie saoudite",
  "la France",
  "la Turquie",
  "la Russie",
  "la Suisse",
  "le Népal",
  "les Maldives"
];
let partners_fr = [
  "un homme",
  "une femme",
  "plusieurs hommes en même temps",
  "plusieurs femmes en même temps",
  "plusieurs femmes et plusieurs hommes en même temps",
  "personne",
  "ton chien",
  "ton chat",
  "ton hamster",
  "ton cochon d'Inde",
  "ton cochon",
  "ta vache",
  "ton taureau",
  "ton ours",
  "ta tortue",
  "ton lièvre",
  "ton cheval",
  "ton mouton",
  "ta chèvre",
  "ta profession"
];
let houses_fr = [
  "habiteras dans une maison",
  "habiteras dans un appartement",
  "habiteras dans un penthouse",
  "habiteras dans des toilettes publiques",
  "habiteras dans un château",
  "habiteras dans une maison close",
  "habiteras dans une cellule de prison",
  "habiteras dans une tente",
  "habiteras dans une caravane",
  "habiteras dans une cabine téléphonique",
  "habiteras dans une étable",
  "habiteras dans une piscine",
  "habiteras dans une grotte",
  "seras sans domicile fixe"
];
let jobs_la = [
  "medicus",
  "mercator medicamentorum",
  "homicida",
  "leno",
  "prostituta",
  "praeses",
  "dictator",
  "rex",
  "regina",
  "imperator",
  "uxor imperatoria",
  "Dalai Lama",
  "agricola",
  "pontifex maximus",
  "praeses directorati",
  "morus",
  "raptor argentariae",
  "instructor demergendus",
  "instructor nartis currendus"
];
let geolocs_la = [
  "in Corea Septentrionale",
  "in Iaponia",
  "in Civitatibus Foederatis Americae",
  "in Germania",
  "in Italia",
  "in Finnia",
  "in Africa Australe",
  "in Argentina",
  "in Mexico",
  "in Civitate Vaticana",
  "in Australia",
  "in Thailandia",
  "in Sinis",
  "in Arabia Saudita",
  "in Gallia",
  "in Turcia",
  "in Russia",
  "in Helvetica",
  "in Nepalia",
  "in Insulae Maldivae"
];
let partners_la = [
  "viro",
  "muliere",
  "simul compluribus viris",
  "simul compluribus mulieribus",
  "simul compluribus mulieribus virisque",
  "nullo",
  "cane tuo",
  "fele tua",
  "criceto tuo",
  "cavia porcellus tua",
  "porco tuo",
  "bovo tuo",
  "urso tuo",
  "testudine tua",
  "lepo tuo",
  "equo tuo",
  "ove tua",
  "capra tua",
  "professione tua"
];
let houses_la = [
  "habitabisque in mansione",
  "habitabisque in domicilio",
  "habitabisque in latrina publica",
  "habitabisque in castello",
  "habitabisque in lupanare",
  "habitabisque in carcere",
  "habitabisque in tabernaculo",
  "habitabisque in tracto periegetico",
  "habitabisque in cabina telephoni",
  "habitabisque in stabulo",
  "habitabisque in thermae",
  "habitabisque in caverna",
  "erisque domo carens"
];
let jobs_it = [
  "un dottore in",
  "un narcotrafficante in",
  "un assassino in",
  "un ruffiano en",
  "una prostituta en",
  "il presidente di",
  "il dittatore di",
  "il re di",
  "la regina di",
  "l'imperatore di",
  "l'imperatrice di",
  "il Dalai Lama in",
  "un contadino in",
  "il papa in",
  "un amministratore delegato in",
  "un buffone in",
  "un rapinatore in banca in"
];
let geolocs_it = [
  "la Corea del Nord",
  "il Giappone",
  "gli Stati Uniti",
  "la Germania",
  "l'Italia",
  "la Finlandia",
  "il Sudafrica",
  "l'Argentina",
  "il Messico",
  "il Vaticano",
  "l'Australia",
  "la Thaïlandia",
  "la Cina",
  "l'Arabia Saudita",
  "la Francia",
  "la Turchia",
  "la Russia"
];
let partners_it = [
  "un uomo",
  "una donna",
  "più uomi simultaneamente",
  "più donne simultaneamente",
  "più uomi e donne simultaneamente",
  "nessuno",
  "cane",
  "gatto",
  "criceto",
  "pocellino d'India",
  "maiale",
  "vacca",
  "toro",
  "orso",
  "tartaruga",
  "lepre",
  "cavallo",
  "pecora",
  "capra",
  "professione"
];
let houses_it = [
  "in casa",
  "in appartamento",
  "in attico",
  "in i gabinetti pubblici",
  "in castello",
  "in bordello",
  "in cella",
  "in tenda",
  "in roulotte",
  "in cabina del telefono",
  "in stalla",
  "senza tetto"
];
function newFortune() {
  let LangSel = document.getElementById("language").value;
  let lang;
  switch (LangSel) {
    case "from":
      lang = navigator.language;
      break;
    case "de":
      lang = "de";
      break;
    case "en":
      lang = "en";
      break;
    case "fr":
      lang = "fr";
      break;
    case "la":
      lang = "la";
      break;
    case "it":
      lang = "it";
      break;
  }
  let jobnr;
  let geonr;
  let partnr;
  let housenr;
  let house;
  switch (lang) {
    case "de":
    case "de-DE":
    case "de-AT":
      jobnr = randomize(jobs_germ);
      geonr = randomize(geolocs_germ);
      partnr = randomize(partners_germ);
      housenr = randomize(houses_germ);
      house = houses_germ[housenr];
      break;
    case "fr":
    case "fr-FR":
      jobnr = randomize(jobs_fr);
      geonr = randomize(geolocs_fr);
      partnr = randomize(partners_fr);
      housenr = randomize(houses_fr);
      house = houses_fr[housenr];
      break;
    case "la":
      jobnr = randomize(jobs_la);
      geonr = randomize(geolocs_la);
      partnr = randomize(partners_la);
      housenr = randomize(houses_la);
      house = houses_la[housenr];
      break;
    case "it":
    case "it-IT":
      jobnr = randomize(jobs_it);
      geonr = randomize(geolocs_it);
      partnr = randomize(partners_it);
      housenr = randomize(houses_it);
      house = houses_it[housenr];
      break;
    default:
      jobnr = randomize(jobs_engl);
      geonr = randomize(geolocs_engl);
      partnr = randomize(partners_engl);
      housenr = randomize(houses_engl);
      house = houses_engl[housenr];
  }
  let childnr = randomvalue(0, 20);
  // Adjust house size to the "house"
  let minimum;
  let maximum;
  switch (house) {
    case "in einem Haus":
    case "in a house":
    case "habiteras dans une maison":
    case "habitabisque in mansione":
      minimum = 50;
      maximum = 201;
      break;
    case "in einer Wohnung":
    case "in a flat":
    case "habiteras dans un appartement":
    case "habitabisque in domicilio":
      minimum = 30;
      maximum = 101;
      break;
    case "in einem Penthouse":
    case "in a penthouse":
    case "habiteras dans un penthouse":
      minimum = 500;
      maximum = 1001;
      break;
    case "in einer öffentlichen Toilette":
    case "in a public restroom":
    case "habiteras dans des toilettes publiques":
    case "habitabisque in latrina publica":
      minimum = 10;
      maximum = 41;
      break;
    case "in einem Schloss":
    case "in a palace":
    case "habiteras dans un château":
    case "habitabisque in castello":
      minimum = 500;
      maximum = 6001;
      break;
    case "in einem Bordell":
    case "in a whorehouse":
    case "habiteras dans une maison close":
    case "habitabisque in lupanare":
      minimum = 50;
      maximum = 3001;
      break;
    case "in einer Gefängniszelle":
    case "in a prison cell":
    case "habiteras dans une cellule de prison":
    case "habitabisque in carcere":
      minimum = 8;
      maximum = 11;
      break;
    case "in einem Zelt":
    case "in a tent":
    case "habiteras dans une tente":
    case "habitabisque in tabernaculo":
      minimum = 4;
      maximum = 21;
      break;
    case "in einem Wohnwagen":
    case "in a trailer":
    case "habiteras dans une caravane":
    case "habitabisque in tracto peregetico":
      minimum = 8;
      maximum = 21;
      break;
    case "in einer Telefonzelle":
    case "in a phone box":
    case "habiteras dans une cabine téléphonique":
    case "habitabisque in cabina telephoni":
      minimum = 1;
      maximum = 5;
      break;
    case "in einem Stall":
    case "in a stable":
    case "habiteras dans une étable":
    case "habitabisque in stabulo":
      minimum = 30;
      maximum = 5001;
      break;
    case "auf der Straße":
    case "on the street":
    case "seras sans domicile fixe":
    case "erisque domo carens":
      minimum = 0;
      maximum = 1;
      break;
    default:
      minimum = 1;
      maximum = 1000;
  }
  let areanr = randomvalue(minimum, maximum);
  //Function call and output to the HTML
  switch (lang) {
    case "de":
    case "de-AT":
    case "de-DE":
      document.getElementById("fortune").innerHTML = fortune_germ(
        childnr,
        partners_germ[partnr],
        geolocs_germ[geonr],
        houses_germ[housenr],
        jobs_germ[jobnr],
        areanr
      );
      break;
    case "fr":
    case "fr-FR":
      document.getElementById("fortune").innerHTML = fortune_fr(
        childnr,
        partners_fr[partnr],
        geolocs_fr[geonr],
        houses_fr[housenr],
        jobs_fr[jobnr],
        areanr
      );
      break;
    case "la":
      document.getElementById("fortune").innerHTML = fortune_la(
        childnr,
        partners_la[partnr],
        geolocs_la[geonr],
        houses_la[housenr],
        jobs_la[jobnr],
        areanr
      );
      break;
    case "it":
    case "it-IT":
      document.getElementById("fortune").innerHTML = fortune_it(
        childnr,
        partners_it[partnr],
        geolocs_it[geonr],
        houses_it[housenr],
        jobs_it[jobnr],
        areanr
      );
      break;
    default:
      document.getElementById("fortune").innerHTML = fortune_engl(
        childnr,
        partners_engl[partnr],
        geolocs_engl[geonr],
        houses_engl[housenr],
        jobs_engl[jobnr],
        areanr
      );
  }
}
function writeText() {
  let LangSel = document.getElementById("language").value;
  let lang;
  switch (LangSel) {
    case "from":
      lang = navigator.language;
      break;
    case "de":
      lang = "de";
      break;
    case "en":
      lang = "en";
      break;
    case "fr":
      lang = "fr";
      break;
    case "la":
      lang = "la";
      break;
    case "it":
      lang = "it";
      break;
  }
  switch (lang) {
    case "de":
      document.getElementById("title").innerHTML = "🔮Erfahre deine Zukunft🔮";
      document.getElementById("subtitle").innerHTML =
        "Ein lustiges Wahrsagespiel";
      document.getElementById("reload").value = "Neue Weissagung";
      break;
    case "fr":
      document.getElementById("title").innerHTML = "🔮Apprends ton avenir🔮";
      document.getElementById("subtitle").innerHTML =
        "Un jeu prophétique drôle";
      document.getElementById("reload").value = "Nouvelle prophétie";
      break;
    case "la":
      document.getElementById("title").innerHTML = "🔮Res futurae tuae🔮";
      document.getElementById("subtitle").innerHTML = "Ludus divinans hilarus";
      document.getElementById("reload").value = "Oraculum novum";
      break;
    case "it":
      document.getElementById("title").innerHTML = "🔮L'Avvenire tuo🔮";
      document.getElementById("subtitle").innerHTML =
        "Un gioco divinatorio allegro";
      document.getElementById("reload").value = "Prossima divinazione";
      break;
    default:
      document.getElementById("title").innerHTML = "🔮Know your future🔮";
      document.getElementById("subtitle").innerHTML =
        "A funny fortune teller game";
      document.getElementById("reload").value = "New prophecy";
  }
}
