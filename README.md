
Game - Find the magic hat

Objective:
Plan your path and find the magic hat using the keyboard keys.

How to win:
1) Press the 'key' and 'enter' to move the pathCharacter ('*').
    a) 'W' to move up  
    b) 'A' to move left
    c) 'S' to move down
    d) 'D' to move right
    Others 'key' will show invalid message.
2) Navigate the pathCharacter to the magic hat ('^').

How to lose:
1) Step out the fence boundary (outside the fieldCharacter '░'). 
2) Step into the sink-hole ('O').

-----------------------------------------------------------------------------------

How it works/sequence:
1) runGame() will generate a 10 by 10 field and include a randomize 1 hat and 0.3 probability of holes.
2) print() the field.
3) askQuestion() player for their direction.
4) past data to gameCheck() for the to-do-action.
5) check the movement boundary before the action. 
6) loop back to 2) -> 3)
7) end the game when boolean is playing = false.

Other infomation:
1) Type 'npm run startgame' to start.
2) Type 'clear' to clear screen.
3) It is possible that your pathCharacter at start is sorrounded by sink-hole ('O').
4) It is possible that the hat ('^') is reachable by all ways.
5) Restart the game when 3) or 4)

Thanks for reading the README file.
