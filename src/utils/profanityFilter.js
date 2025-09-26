import Filter from 'bad-words';

const filter = new Filter();

// List of bad words in Hindi
filter.addWords(
    // Basic offensive terms
  "kutta", "kutti", "kuta", "kutiya", "saala", "saali", "sala", "sali",
  "harami", "haramkhor", "kamina", "kamini", "kameena", "kameeni",
  "randi", "randwa", "chutiya", "chutiye", "gandu", "gaandu", "gantu",
  
  // Abbreviations and variations
  "bsdk", "bhsdk", "mc", "bc", "mkc", "bkl", "bhkl", "mkl",
  "madarchod", "madarchod", "behenchod", "bhenchod", "bhencho",
  "madarjaat", "maderjaat", "behenjaat", "bhenjaat",
  
  // Body part related
  "lund", "lauda", "loda", "lodu", "chut", "choot", "bur", "bhosda",
  "bhosdi", "bhosdike", "bhosadike", "gaand", "gand", "tatti",
  
  // Animal/derogatory comparisons
  "suar", "suwar", "gadha", "gadhe", "ullu", "bandar", "kutta",
  "bhains", "bakri", "janwar", "haiwaan",
  
  // Character attacks
  "badmaash", "badmash", "goonda", "gunda", "lafanga", "awara",
  "nikamma", "nalayak", "bewakoof", "gadha", "pagal", "paagal",
  
  // Family related insults
  "maa", "baap", "behen", "beti", "beta", "papa", "mama",
  "nana", "nani", "dada", "dadi", "chacha", "chachi",
  
  // Regional variations
  "bhenchod", "madarchod", "sisterfucker", "motherfucker",
  "chodu", "randu", "chinaal", "chinnal", "raand", "veshya",
  
  // Caste/community slurs (common ones)
  "chamar", "bhangi", "neech", "kala", "kaala", "gora", "firangi",
  
  // Religious slurs
  "kafir", "mlecha", "yavan", "katua", "katwa", "jihadi",
  
  // Modern slang/internet terms
  "chutiyapa", "bakchodi", "haggu", "tharki", "despo", "creep",
  "pervert", "rapist", "molester", "harasser",
  
  // Variations and misspellings
  "kuttta", "ganduu", "chutiyaa", "randii", "saalaa", "haramii",
  "kaminaa", "bsdkk", "mcc", "bcc", "fck", "fuk", "fk",
  
  // English offensive terms commonly used
  "bastard", "bitch", "whore", "slut", "prostitute", "pimp",
  "asshole", "dickhead", "cunt", "pussy", "cock", "dick",
  
  // Mixed language terms
  "maderfucker", "sisterfker", "benchod", "madchod", "bhnchod",
  "gndmrne", "lndmrne", "chutmrne", "randimrne"
);

export const filterProfanity = (name) => {
  if (!name) return "Bad User";
  return filter.isProfane(name) ? "Bad User" : name;
};
