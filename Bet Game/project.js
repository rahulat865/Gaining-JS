// deposit some money - done 
//determine the number of line to bet on  - done
//collect a bet amount - done
//spin the spin amount - done
//check if the user won 
//give the user their winnings
//play again

const prompt = require("prompt-sync")();

const ROWS = 3;
const COLS = 3;

const SYMBOLS_COUNT = {
    "A": 2,
    "B": 4,
    "C": 6,
    "D": 8  

}

const SYMBOLS_VALUES = {
    "A" : 5,
    "B" : 4,    
    "C" : 3,
    "D" : 2
}



const deposit = () => {
    while(true){
    const depositAmount  = prompt("Enter a deposit amount : ");
    const numberDeopsitAmount = parseFloat(depositAmount);

    if(isNaN(numberDeopsitAmount) || numberDeopsitAmount <=0){
        console.log("Invalid deposit amount, try again.");

    }
    else{
        return numberDeopsitAmount;
    }
}
};

const getnumberoflines = () => {
    while(true){
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberoflines = parseFloat(lines);

        if(isNaN(numberoflines) || numberoflines <=0 || numberoflines >3){
            console.log("Invalid number of lines, try again.");
        }
        else{
            return numberoflines;
        }

    }
};

const getbet = (balance , lines) => {
    while(true){
        const bet = prompt("Enter the total bet per line : ");
        const numberbet = parseFloat(bet);

        if(isNaN(numberbet) || numberbet <= 0 || numberbet > balance / lines){
            console.log("Invalid bet, try again");

        }
        else{
            return numberbet;
        }


    }
}

const spin = () =>{
    const symbols = [];
    for(const [symbol , count] of Object.entries(SYMBOLS_COUNT)){
        for(let i = 0 ; i < count ; i++ ){
            symbols.push(symbol);
        }
    }
    // console.log(symbols)

    const reels = [];
for(let i = 0 ; i < COLS ; i++){
    reels.push([]);
    const reelsSymbols = [...symbols];
    for(let j = 0 ; j < ROWS ; j++){
        const randomIndex = Math.floor(Math.random() * reelsSymbols.length);
        const selectedSymbol = reelsSymbols[randomIndex];
        reels[i].push(selectedSymbol);  
        reelsSymbols.splice(randomIndex , 1);

    }


}
return reels; 
};


const transpose = (reels) => {
    const ROWS = [];
    for(let i = 0 ; i < reels[0].length ; i++){
        ROWS.push([]);   
        for(let j = 0 ; j < reels.length ; j++){
            ROWS[i].push(reels[j][i]);
}
}
        return ROWS;
}

const printRows = (rows) => {
  for (const row of rows) {
    let rowString = "";
    for (const [i, symbol] of row.entries()) {
      rowString += symbol;
      if (i != row.length - 1) {
        rowString += " | ";
      }
    }
    console.log(rowString);
  }
};

const getwinnings = (rows, bet, lines) => {
    let winnings = 0;
    
    for(let i = 0 ; i < lines ; i++){
        const symbols = rows[i];
        let allSame = true;

        for(const symbol of symbols){
            if(symbol != symbols[0]){
                allSame = false;
                break;
            }
    }
        if(allSame){
            winnings += bet * SYMBOLS_VALUES[symbols[0]];
        }
}
    return winnings;
}



const game = () => {
    console.log("Welcome to the slot machine!");
let balance = deposit();

while(true){
console.log("Current balance is $" + balance.toString());
const numberoflines = getnumberoflines();
 const bet = getbet(balance , numberoflines);
balance -= bet * numberoflines;
 const reels = spin();
const rows = transpose(reels);
// console.log(reels);
// console.log(rows);
printRows(rows);
const winnings = getwinnings(rows , bet , numberoflines);
balance += winnings;
console.log("You won , $" + winnings.toString());

if(balance <=0){
    console.log("You ran out of money!");
    break;  
}
const playagain = prompt("Do you want to play again (y/n)? ");
if(playagain != "y"){
    break;


}
}
};

game();