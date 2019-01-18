// Function to determine the language
function getLanguage() {
  let LangSel = document.getElementById("language").value;
  let LangNav, lang;
  switch (LangSel) {
    case "from":
      LangNav = navigator.language;
      if (LangNav.startsWith("de")) {
        lang = "de";
      } else if (LangNav.startsWith("en")) {
        lang = "en"
      } else if (LangNav.startsWith("fr")) {
        lang = "fr";
      } else if (LangNav.startsWith("it")) {
        lang = "it";
      } else if (LangNav.startsWith("la")) {
        lang = "la";
      } else {
        lang = "en";
      }
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
  return lang;
}
// Function to create the English fortune sentence
function fortune_engl(numch, partn, loc, house, job, area) {
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
function fortune_germ(numch, partn, loc, house, job, area) {
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
  } else if (job.endsWith('von') && loc === "Vatikan") {
    job_ft = job.replace("von", "des");
    loc_ft = loc.padEnd(8, "s");
  } else if (job.endsWith('von') && loc === "dem Vereinigten Königreich") {
    job_ft = job.replace("von", "des");
    loc_ft = "Vereinigten Königreichs";
  } else if (job.endsWith('in') && loc === "Vatikan") {
    job_ft = job.replace(" in", " im");
    loc_ft = loc;
  } else if (job.endsWith('in') && loc === "dem Vereinigten Königreich") {
    job_ft = job.replace(" in", " im");
    loc_ft = loc.slice(4);
  } else if (job.endsWith("in") && loc === "den Malediven") {
    job_ft = job.replace(" in", " auf");
    loc_ft = loc;
  } else {
    job_ft = job;
    loc_ft = loc;
  }
  return `Du wirst ${job_ft} ${loc_ft} sein, mit ${partn} verheiratet sein, ${child} haben und ${house}${sqm} leben.`;
};
// Function to create the French fortune sentence
function fortune_fr(
  numch = 0,
  partn = "Mme Toulemonde",
  loc = "en Aérospace",
  house = "une maison",
  job = "un ouvrier",
  area = 1
) {
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
  if (job.endsWith('en') && loc.startsWith('la')) {
    job_ft = job;
    loc_ft = loc.substring(3);
  } else if (job.endsWith('en') && loc.startsWith('les')) {
    job_ft = job.replace(" en", " aux");
    loc_ft = loc.substring(4);
  } else if (job.endsWith('en') && loc.startsWith('le')) {
    job_ft = job.replace(" en", " au");
    loc_ft = loc.substring(3);
  } else if (job.endsWith('en') && loc.startsWith("l'")) {
    job_ft = job;
    loc_ft = loc.substring(2);
  } else if (job.endsWith('de') && loc.startsWith('la')) {
    job_ft = job;
    loc_ft = loc.substring(3);
  } else if (job.endsWith('de') && loc.startsWith('les')) {
    job_ft = job.replace(" de", " des");
    loc_ft = loc.substring(4);
  } else if (job.endsWith('de') && loc.startsWith('le')) {
    job_ft = job.replace(" de", " du");
    loc_ft = loc.substring(3);
  } else if (job.endsWith('de') && loc.startsWith("l'")) {
    job_ft = job.replace(" de", " d'");
    loc_ft = loc.substring(2);
  }
  return `Tu seras ${job_ft} ${loc_ft}, tu seras ${marie} avec ${partn}, tu ${child} et tu ${house}${sqm}.`;
};
function fortune_la(
  numch = 0,
  partn = "Caio Iulio Caesare",
  loc = "in terra",
  house = "mansione",
  job = "faber",
  area = 1
) {
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
function fortune_it(
  numch = 0,
  partn = "Dante Alighieri",
  loc = "in Italia",
  house = "casa",
  job = "dottore",
  area = 1
) {
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
  let job_ft;
  let loc_ft;
  if (job.endsWith("in") && loc.startsWith('nelle')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc;
  } else if (job.endsWith("in") && loc.startsWith('nello')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc;
  } else if (job.endsWith("in") && loc.startsWith('nel')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc;
  } else if (job.endsWith("in") && loc.startsWith('nei')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc;
  } else if (job.endsWith("in") && loc.startsWith('negli')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc;
  } else if (job.endsWith("di") && loc.startsWith('nelle')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc.replace("nelle ", "delle ");
  } else if (job.endsWith("di") && loc.startsWith('nello')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc.replace("nello ", "dello ");
  } else if (job.endsWith("di") && loc.startsWith('nel')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc.replace("nel ", "del ");
  } else if (job.endsWith("di") && loc.startsWith('negli')) {
    job_ft = job.slice(0, -3);
    loc_ft = loc.replace("negli ", "degli ");
  } else if (job.endsWith("di") && /^[AEIOU]/.test(loc)) {
    job_ft = job.slice(0, -3);
    loc_ft = `dell'${loc}`;
  } else if (job.endsWith("di")) {
    job_ft = job.slice(0, -3);
    loc_ft = `della ${loc}`;
  } else {
    job_ft = job;
    loc_ft = loc;
  }
  return `Tu sarai ${job_ft} ${loc_ft}, ${marie} con ${partn}, tu avrai ${child} e ${house} ${sqm}.`;
};
// Functions to create random values
function randomize(MyArray) {
  return Math.floor(Math.random() * MyArray.length);
}
function randomvalue(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
// Arrays for possible solutions
var jobs = [
  { en: "a doctor in", de: "ein Arzt in", fr: "un médecin en", la: "medicus", it: "un dottore in" },
  { en: "a drug dealer in", de: "ein Drogendealer in", fr: "un narcotrafiquant en", la: "mercator medicamentorum", it: "un narcotrafficante in" },
  { en: "a murderer in", de: "ein Mörder in", fr: "un assassin en", la: "homicida", it: "un assassino in" },
  { en: "a pimp in", de: "ein Zuhälter in", fr: "un souteneur en", la: "leno", it: "un ruffiano in" },
  { en: "a prostitute in", de: "eine Prostituierte in", fr: "une prostituée en", la: "prostituta", it: "una prostituta in" },
  { en: "the president of", de: "der Präsident von", fr: "le président de", la: "praeses", it: "il presidente di" },
  { en: "the dictator of", de: "der Diktator von", fr: "le dictateur de", la: "dictator", it: "il dittatore di" },
  { en: "the king of", de: "der König von", fr: "le roi de", la: "rex", it: "il re di" },
  { en: "the queen of", de: "die Königin von", fr: "la reine de", la: "regina", it: "la regina di" },
  { en: "the emperor of", de: "der Kaiser von", fr: "l'empereur de", la: "imperator", it: "l'imperatore di" },
  { en: "the empress of", de: "die Kaiserin von", fr: "l'impératrice", la: "uxor imperatoria", it: "l'imperatrice di" },
  { en: "the Dalai Lama in", de: "der Dalai Lama in", fr: "le Dalaï-lama en", la: "Dalai Lama", it: "il Dalai Lama in" },
  { en: "a farmer in", de: "ein Bauer in", fr: "un paysan en", la: "agricola", it: "un contadino in" },
  { en: "the pope in", de: "der Papst in", fr: "le pape en", la: "pontifex maximus", it: "il papa in" },
  { en: "a CEO in", de: "ein Vorstandsvorsitzender in", fr: "un président du directoire en", la: "praeses directorati", it: "un amministratore delegato in" },
  { en: "a clown in", de: "ein Clown in", fr: "un clown en", la: "morus", it: "un buffone in" },
  { en: "a bank robber in", de: "ein Bankräuber in", fr: "un voleur de banque en", la: "raptor argentariae", it: "un rapinatore in banca in" },
  { en: "a diving instructor in", de: "ein Tauchlehrer in", fr: "un instructeur de plongée en", la: "instructor demergendi", it: "un istruttore di immersioni in" },
  { en: "a skiing instructor in", de: "ein Skilehrer in", fr: "un moniteur de ski en", la: "instructor nartis currendi", it: "un maestro di sci in" }
]
var geolocs = [
  { en: "North Korea", de: "Nordkorea", fr: "la Corée du Nord", la: "in Corea Septentrionale", it: "Corea del Nord" },
  { en: "Japan", de: "Japan", fr: "le Japon", la: "in Iaponia", it: "nel Giappone" },
  { en: "the United States", de: "den Vereinigten Staaten", fr: "les États-Unis", la: "in Civitatibus Foederatis Americae", it: "negli Stati Uniti" },
  { en: "Germany", de: "Deutschland", fr: "l'Allemagne", la: "in Germania", it: "Germania" },
  { en: "Italy", de: "Italien", fr: "l'Italie", la: "in Italia", it: "Italia" },
  { en: "Finland", de: "Finnland", fr: "la Finlande", la: "in Finnia", it: "Finlandia" },
  { en: "South Africa", de: "Südafrika", fr: "l'Afrique du Sud", la: "in Africa Australe", it: "nel Sudafrica" },
  { en: "Argentina", de: "Argentinien", fr: "l'Argentine", la: "in Argentina", it: "Argentina" },
  { en: "Mexico", de: "Mexiko", fr: "le Mexique", la: "in Mexico", it: "nel Messico" },
  { en: "Vatican City", de: "Vatikan", fr: "le Vatican", la: "in Civitate Vaticana", it: "nel Vaticano" },
  { en: "Australia", de: "Australien", fr: "l'Australie", la: "in Australia", it: "Australia" },
  { en: "Thailand", de: "Thailand", fr: "la Thaïlande", la: "in Thailandia", it: "Thailandia" },
  { en: "China", de: "China", fr: "la Chine", la: "in Sinis", it: "Cina" },
  { en: "Saudi Arabia", de: "Saudi-Arabien", fr: "l'Arabie Saoudite", la: "in Arabia Saudita", it: "Arabia Saudita" },
  { en: "France", de: "Frankreich", fr: "la France", la: "in Gallia", it: "Francia" },
  { en: "Turkey", de: "der Türkei", fr: "la Turquie", la: "in Turcia", it: "Turchia" },
  { en: "Russia", de: "Russland", fr: "la Russie", la: "in Russia", it: "Russia" },
  { en: "Switzerland", de: "der Schweiz", fr: "la Suisse", la: "in Helvetia", it: "Svizzera" },
  { en: "Nepal", de: "Nepal", fr: "le Népal", la: "in Nepalia", it: "nel Nepal" },
  { en: "Maldives", de: "den Malediven", fr: "les Maldives", la: "in Insulis Maldivis", it: "nelle Maldive" },
  { en: "the United Kingdom", de: "dem Vereinigten Königreich", fr: "le Royaume-Uni", la: "in Britanniarum Regnum", it: "nel Regno Unito" },
  { en: "Hungary", de: "Ungarn", fr: "l'Hongrie", la: "in Hungaria", it: "Ungheria" },
  { en: "Poland", de: "Polen", fr: "la Pologne", la: "in Polonia", it: "Polonia" },
  { en: "Austria", de: "Österreich", fr: "l'Autriche", la: "in Austria", it: "Austria" }
]
var partners = [
  { en: "a man", de: "einem Mann", fr: "un homme", la: "viro", it: "un uomo" },
  { en: "a woman", de: "einer Frau", fr: "une femme", la: "muliere", it: "una donna" },
  { en: "several men at the same time", de: "mehreren Männern gleichzeitig", fr: "plusieurs hommes en même temps", la: "simul compluribus viris", it: "diversi uomini allo stesso tempo" },
  { en: "several women at the same time", de: "mehreren Frauen gleichzeitig", fr: "plusieurs femmes en même temps", la: "simul compluribus mulieribus", it: "diverse donne allo stesso tempo" },
  { en: "several women and men at the same time", de: "mehreren Frauen und Männern gleichzeitig", fr: "plusieurs femmes et hommes en même temps", la: "simul compluribus mulieribus virisque", it: "diversi donne e uomini allo stesso tempo" },
  { en: "no one", de: "niemandem", fr: "personne", la: "nullo", it: "nessuno" },
  { en: "your dog", de: "deinem Hund", fr: "ton chien", la: "cane tuo", it: "il tuo cane" },
  { en: "your cat", de: "deiner Katze", fr: "ton chat", la: "fele tua", it: "il tuo gatto" },
  { en: "your hamster", de: "deinem Hamster", fr: "ton hamster", la: "criceto tuo", it: "il tuo criceto" },
  { en: "your guinea-pig", de: "deinem Meerschweinchen", fr: "ton cochon d'Inde", la: "cavia porcellus tua", it: "il tuo porcellino d'India" },
  { en: "your pig", de: "deinem Schwein", fr: "ton cochon", la: "porco tuo", it: "il tuo maiale" },
  { en: "your cow", de: "deiner Kuh", fr: "ta vache", la: "vacca tua", it: "la tua mucca" },
  { en: "your bull", de: "deinem Stier", fr: "ton taureau", la: "tauro tuo", it: "il tuo toro" },
  { en: "your bear", de: "deinem Bären", fr: "ton ours", la: "urso tuo", it: "il tuo orso" },
  { en: "your turtle", de: "deiner Schildkröte", fr: "ta tortue", la: "testudine tuo", it: "la tua tartaruga" },
  { en: "your bunny", de: "deinem Hasen", fr: "ton lièvre", la: "lepo tuo", it: "la tua lepre" },
  { en: "your horse", de: "deinem Pferd", fr: "ton cheval", la: "equo tuo", it: "il tuo cavallo" },
  { en: "your sheep", de: "deinem Schaf", fr: "ton mouton", la: "ove tua", it: "la tua pecora" },
  { en: "your goat", de: "deiner Ziege", fr: "ta chèvre", la: "capra tua", it: "la tua capra" },
  { en: "your job", de: "deinem Beruf", fr: "ta profession", la: "professione tua", it: "la tua professione" }
]
var houses = [
  { en: "in a house", de: "in einem Haus", fr: "habiteras dans une maison", la: "habitabisque in mansione", it: "abiterai in una casa", min: 50, max: 1001 },
  { en: "in a flat", de: "in einer Wohnung", fr: "habiteras dans un appartement", la: "habitabisque in domicilio", it: "abiterai in un appartamento", min: 30, max: 101 },
  { en: "in a public restroom", de: "in einer öffentlichen Toilette", fr: "habiteras dans des toilettes publiques", la: "habitabisque in latrina publica", it: "abiterai in un gabinetto pubblico", min: 10, max: 41 },
  { en: "in a palace", de: "in einem Palast", fr: "habiteras dans un palais", la: "habitabisque in palatio", it: "abiterai in un palazzo", min: 500, max: 6001 },
  { en: "in a castle", de: "in einem Schloss", fr: "habiteras dans un château", la: "habitabisque in castello", it: "abiterai in un castello", min: 500, max: 6001 },
  { en: "in a whorehouse", de: "in einem Bordell", fr: "habiteras dans une maison close", la: "habitabisque in lupanare", it: "abiterai in un bordello", min: 50, max: 3001 },
  { en: "in a prison cell", de: "in einer Gefängniszelle", fr: "habiteras dans une cellule de prison", la: "habitabisque in carcere", it: "abiterai in una cella", min: 8, max: 11 },
  { en: "in a tent", de: "in einem Zelt", fr: "habiteras dans une tente", la: "habitabisque in tabernaculo", it: "abiterai in una tenda", min: 4, max: 21 },
  { en: "in a trailer", de: "in einem Wohnwagen", fr: "habiteras dans une caravane", la: "habitabisque in tracto periegetico", it: "abiterai in un roulotte", min: 8, max: 21 },
  { en: "in a phone box", de: "in einer Telefonzelle", fr: "habiteras dans une cabine téléphonique", la: "habitabisque in cabina telephoni", it: "abiterai in una cabina del telefono", min: 1, max: 5 },
  { en: "in a stable", de: "in einem Stall", fr: "habiteras dans une étable", la: "habitabisque in stabulo", it: "abiterai in una stalla", min: 30, max: 5001 },
  { en: "in a swimming pool", de: "in einem Schwimmbecken", fr: "habiteras dans une piscine", la: "habitabisque in thermis", it: "abiterai in una piscina", min: 10, max: 1052 },
  { en: "in a cave", de: "in einer Höhle", fr: "habiteras dans une grotte", la: "habitabisque in caverna", it: "abiterai in una grotta", min: 100, max: 275000 },
  { en: "on the street", de: "auf der Straße", fr: "seras sans domicile fixe", la: "erisque domo carens", it: "serai senza tetto", min: 0, max: 1 }
]
function newFortune() {
  let lang = getLanguage();
  let jobnr = randomize(jobs);
  let geonr = randomize(geolocs);
  let partnr = randomize(partners);
  let housenr = randomize(houses);
  let childnr = randomvalue(0, 20);
  let areanr = randomvalue(houses[housenr].min, houses[housenr].max);
  //Function call and output to the HTML
  switch (lang) {
    case "de":
      document.getElementById("fortune").innerHTML = fortune_germ(
        childnr,
        partners[partnr].de,
        geolocs[geonr].de,
        houses[housenr].de,
        jobs[jobnr].de,
        areanr
      );
      break;
    case "fr":
      document.getElementById("fortune").innerHTML = fortune_fr(
        childnr,
        partners[partnr].fr,
        geolocs[geonr].fr,
        houses[housenr].fr,
        jobs[jobnr].fr,
        areanr
      );
      break;
    case "la":
      document.getElementById("fortune").innerHTML = fortune_la(
        childnr,
        partners[partnr].la,
        geolocs[geonr].la,
        houses[housenr].la,
        jobs[jobnr].la,
        areanr
      );
      break;
    case "it":
      document.getElementById("fortune").innerHTML = fortune_it(
        childnr,
        partners[partnr].it,
        geolocs[geonr].it,
        houses[housenr].it,
        jobs[jobnr].it,
        areanr
      );
      break;
    default:
      document.getElementById("fortune").innerHTML = fortune_engl(
        childnr,
        partners[partnr].en,
        geolocs[geonr].en,
        houses[housenr].en,
        jobs[jobnr].en,
        areanr
      );
  }
}
function writeText() {
  let lang = getLanguage();
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
