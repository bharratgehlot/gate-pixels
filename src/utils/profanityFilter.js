import Filter from 'bad-words';

const filter = new Filter();

// Comprehensive list of offensive words
const customBadWords = [
  // Basic offensive terms
  "kutta", "kutti", "kuta", "kutiya", "saala", "saali", "sala", "sali",
  "harami", "haramkhor", "kamina", "kamini", "kameena", "kameeni",
  "randi", "randwa", "chutiya", "chutiye", "gandu", "gaandu", "gantu",
  
  // Abbreviations and variations
  "bsdk", "bhsdk", "mc", "bc", "mkc", "bkl", "bhkl", "mkl",
  "madarchod", "behenchod", "bhenchod", "bhencho",
  "madarjaat", "maderjaat", "behenjaat", "bhenjaat",
  
  // Body part related
  "lund", "lauda", "loda", "lodu", "chut", "choot", "bur", "bhosda",
  "bhosdi", "bhosdike", "bhosadike", "gaand", "gand", "tatti",
  
  // Animal/derogatory comparisons
  "suar", "suwar", "gadha", "gadhe", "ullu", "bandar",
  "bhains", "bakri", "janwar", "haiwaan",
  
  // Character attacks
  "badmaash", "badmash", "goonda", "gunda", "lafanga", "awara",
  "nikamma", "nalayak", "bewakoof", "pagal", "paagal",
  
  // Family related insults
  "maa", "baap", "behen", "beti", "beta", "papa", "mama",
  "nana", "nani", "dada", "dadi", "chacha", "chachi",
  
  // Regional variations
  "sisterfucker", "motherfucker", "chodu", "randu", 
  "chinaal", "chinnal", "raand", "veshya",
  
  // Caste/community slurs
  "chamar", "bhangi", "neech", "kala", "kaala", "gora", "firangi",
  
  // Religious slurs
  "kafir", "mlecha", "yavan", "katua", "katwa", "jihadi",
  
  // Modern slang/internet terms
  "chutiyapa", "bakchodi", "haggu", "tharki", "despo", "creep",
  "pervert", "rapist", "molester", "harasser",
  
  // Variations and misspellings
  "kuttta", "ganduu", "chutiyaa", "randii", "saalaa", "haramii",
  "kaminaa", "bsdkk", "mcc", "bcc", "fck", "fuk", "fk",
  
  // English offensive terms
  "bastard", "bitch", "whore", "slut", "prostitute", "pimp",
  "asshole", "dickhead", "cunt", "pussy", "cock", "dick",
  
  // Mixed language terms
  "maderfucker", "sisterfker", "benchod", "madchod", "bhnchod",
  "gndmrne", "lndmrne", "chutmrne", "randimrne",

    // other words
    "chutad","gaand","gaaand","gaaaand","gannnnd","jhonny sins", "sunnyleone","fucck","lundd","seex","boob","boobss", "tits", "titfuck", "boobsuck","boobe"


];

filter.addWords(...customBadWords);

export const filterProfanity = (name) => {
  if (!name) return "Bad User";

  // First check with bad-words library (handles spaced words)
  if (filter.isProfane(name)) {
    return "Bad User";
  }

  // Get built-in bad words from the library
  const builtInWords = filter.list;
  
  // Combine custom words with built-in words for manual checking
  const allBadWords = [...customBadWords, ...builtInWords];
  
  // Manual check for concatenated words (handles "mayasex", "rahulkutta", etc.)
  const lowerName = name.toLowerCase();
  const hasOffensiveWord = allBadWords.some(word => 
    lowerName.includes(word.toLowerCase())
  );

  return hasOffensiveWord ? "Bad User" : name;
};
