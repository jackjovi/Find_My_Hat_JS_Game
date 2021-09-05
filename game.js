const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');
 
const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
const rowNum = 10, colNum = 10;

class Field 
{
    constructor () {
        this._field = Array(rowNum).fill().map(() => Array(colNum));
        this._locationX = 0;
        this._locationY = 0;
    }
    
    generateField(percentage) {     // generate 10 by 10 field
        for (let y = 0; y < rowNum; y++) {
            for (let x = 0; x < colNum; x++) {
                const prob = Math.random();
                this._field[y][x] = prob > percentage ? fieldCharacter : hole;  // add hole in the field
            }
        }

        const hatLocation = {   // set the "location" : object
            x: Math.floor(Math.random() * colNum),
            y: Math.floor(Math.random() * rowNum)
        };

        while (hatLocation.x == 0 && hatLocation.y == 0) {  // make sure the "hat" is not at the starting point
            hatLocation.x = Math.floor(Math.random() * colNum);
            hatLocation.y = Math.floor(Math.random() * rowNum);
        }
        
        this._field[hatLocation.y][hatLocation.x] = hat;

        this._field[0][0] = pathCharacter;  // set the "home" position before the game starts

    }   // end of generateField()

    runGame() {
        console.log("Start Game");
        this.print();   // print the field
        this.askQuestion();
    }   // end of runGame

    print() {
        const displayString = this._field.map(row => {
            return row.join('');
        }).join('\n');
        console.log(displayString);
    }   // end of print
    
    askQuestion() {
        const direction = prompt('Which way? Please enter w(up), a(left), s(down), d(right). ').toUpperCase();
        
        switch (direction) {    // check if direction is W, A, S, D
            case "W":   //move up
                this._locationY--;
                break;
            case "A":   //move left
                this._locationX--;
                break;    
            case "S":   //move down
                this._locationY++; 
                console.log("move down");   
                break;                   
            case "D":   //move right
                this._locationX++; 
                break;        
            default:    //invalid key
                console.log("Invalid, please key again.");
                break;
        }
        this.gameCheck();
    }   // end of askQuestion

    gameCheck() {
        let playing = true;
        if ((this._field[this._locationY] == undefined) || (this._field[this._locationX] == undefined))
        {    // check for boundaries
            console.log("You stepped out of fence, please restart your game.");
            return playing = false;
        }  
        
        switch (this._field[this._locationY][this._locationX]) {
            case fieldCharacter:    // check if a fieldCharacter and replace it with pathCharacter 
                this._field[this._locationY].splice([this._locationX], 1, pathCharacter);
                break;
            case hole:   // check if character falls into a hole - game over
                console.log("Game Over! You stepped into a sink-hole! Please restart your game.");
                return playing = false;
            case hat:   // check if character gets the hat - game win
                console.log("You found the magic hat! Please play again.");
                return playing = false;               
        }
        this.print();
        this.askQuestion();
    }    // end of gameCheck
}   // end of class Field

const myfield = new Field();    // create an instance of Field Class Object
myfield.generateField(0.3); 
myfield.runGame();
