const board = [
  ["TESLA", "MERCEDES", "LEXUS", "ACURA", "MCLAREN","INFINITY"],
  ["100", "100", "100", "100", "100","100"],
  ["200", "200", "200", "200", "200","200"],
  ["300", "300", "300", "300", "300","300"],
  ["400", "400", "400", "400", "400","400"],
  ["500", "500", "500", "500", "500","500"],
];
const categories = ["TESLA", "MERCADES", "ford", "gm","MCLAREN","lexus"];
const questions = [
  ["A cheaper car made by Tesla?", 
   "How fast can the Tesla Roadster do 0-60 mph?", 
   "How fast can the Tesla semi-truck do 0-60 mph?", 
   "What is the name of the Tesla crossover?",
   "What does 'P' stand for in P100D?"
  ],
  ["What is the name of the new Mercedes hatchback?","Is Maybach a sub-brand of Mercedes?","Is AMG a sub-brand of Mercedes?","When was Mercedes founded?","What is the name of Mercedes semi-truck?"], //mercedes
  ["Which Swedish brand did Ford own?","what is the ford f-series?","2.50*2=?","Was Thomas Edison a friend of ford?","Who owns the first ford?"], //ford
  ["Did GM make the first electric vehicle?","What is the new electric car made by gm?","What kind of brand is their sports car brand?","How many employees does gm have  ?","How many languages do they speak ?"], //gm
  ["Newest car made by McLaren?","What is the name of the new McLaren?","how fast can a mclaren f1 go?","Do they make carbon fiber bikes?","Do they make bobsleds?"], //mcLaren 
  ["When was lexus founded?","When did lexus start selling cars in japan?","did they have a Invaluable Partnership With Yamaha","do they have strict statics ?","do they have Top Quality Leather?"] //lexus
];
const answers = [
  ["Model 3", "1.9 seconds", "5 seconds.", "Tesla Model X", "Performance."], //Category0
  ["the A-class", "yes", "yes", "1926", "The Unimog."], //Category1
  ["Volvo.", "a pickup truck", "$5-a-day.", "ya!", "Bill Ford"], //Category2
  ["No!", "The chevy bolt", "corvette", "181,000", "70"], //Category3
  ["720s", "The Senna", "240 mph", "yes?", "yes?"], //Category4 
  ["In 1989.", "2005", "yes", "yes", "yes"]
]; //Category5


const categoryIndex = Math.round(Math.random()* ( 6-1 ) + 1 ) // random number between 0 - 5
const amountIndex = Math.round(Math.random()* (5-1) + 1) //rrandom number between 0 - 4

const question = questions[categoryIndex][amountIndex]

const answer = answers[categoryIndex][amountIndex]

const response = prompt(categories[categoryIndex] + " Question for "+amountIndex+"00: "+ question)

if(answer == response) {
  alert("Correct!")
}
else {
  alert("Incorrect!")
}
