//Level 1_3 length()
const erstesArray = ["Aha", "Aua", "Ahh"];
console.log(erstesArray);
console.log(erstesArray.length);

const zweitesArray = ["Ja", "Nein", "Vielleicht"];
console.log(zweitesArray);
console.log(zweitesArray.length);

const drittesArray = ["Hund", "Katze", "Chaos"];
console.log(drittesArray);
console.log(drittesArray.length);

//Level 1_4 push()
console.log(erstesArray.push("Ana", "Ali"));
console.log(zweitesArray.push("Oder?!"));
console.log(drittesArray.push("Kuh", "Huhn", "Frosch", "Keks"));

//Level 1_5 pop()
const deletedErstesArray = erstesArray.pop();
console.log(deletedErstesArray);

const deletedZweitesArray = zweitesArray.pop();
console.log(deletedZweitesArray);

const deletedDrittesArray = drittesArray.pop();
console.log(deletedDrittesArray);

//Level 1_6 shift()
const shiftErstesArray = erstesArray.shift();
console.log(shiftErstesArray);

const shiftZweitesArray = zweitesArray.shift();
console.log(shiftZweitesArray);

const shiftDrittesArray = drittesArray.shift();
console.log(shiftDrittesArray);

//Level 1_7 unshift()
const unshiftErstesArray = erstesArray.unshift("Käsekuchen");
console.log(erstesArray);

const unshiftZweitesArray = zweitesArray.unshift("Donauwelle", "Schokotorte");
console.log(zweitesArray);

const unshiftDrittesArray = drittesArray.unshift("Klotzkopf", "Test", "hallo-ich-bin-Jule-und-mag-lange-Wörter-und-unsinnige-Wortneuschöpfungen");
console.log(drittesArray);

//Level 1_8 slice()
const vacationArray = ["Schottland", "Österreich", "Italien", "Kanada", "Griechenland"];
const sliceVacationArray = vacationArray.slice(0, 3);
console.log(sliceVacationArray);

const sliceTwoVacationArray = vacationArray.slice(3, 5);
console.log(sliceTwoVacationArray);

const sliceThreeVacationArray = vacationArray.slice(4);
console.log(sliceThreeVacationArray);

//Level1_9 splice()
const foodArray = ["Brot", "Suppe", "Quiche", "Reisbowl", "Ofengemüse", "Obstsalat"];
console.log(foodArray.length);
//console.log(foodArray.splice(0, 1));
//console.log(foodArray.splice(4, 6));
console.log(foodArray.splice(3, 2, "Sellerie"));
console.log(foodArray);

//Level 1_10 string_split 
const textArray = "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";
splitTextArray = textArray.split(' ');
console.log(splitTextArray);
//splitTextArray = textArray.split('Bender'); = Array(2) bis , ist ein Zeichen und ab Bender das zweite
