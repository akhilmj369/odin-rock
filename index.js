const options = ["rock","paper","scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
    return choice;
}

function checkwinner(playerselection, computerselection){
    if(playerselection==computerselection){
        return "Tie";
    }
    else if(
        (playerselection == "rock" && computerselection == "scissors") ||
        (playerselection == "paper" && computerselection == "rock") ||
        (playerselection == "scissors" && computerselection == "paper")
    ){
        return "Player";
    }
    else{
        return "Computer";
    }
}

function playround(playerselection, computerselection){
    const result = checkwinner(playerselection, computerselection);
    if (result == "Tie"){
        return "It's a Tie!"
    }
    else if(result == "Player"){
        return `You Win! ${playerselection} beats ${computerselection}`
    }
    else{
        return `You Lose! ${computerselection} beats ${playerselection}`
    }
}

function getplayerchoice(){
    let validatedinput = false;
    while(validatedinput == false){
        const choice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceInlower = choice.toLowerCase();
        if(options.includes(choiceInlower)){
            validatedinput = true;
            return choiceInlower;
        }
    }
}

function game(){
    let scoreplayer = 0;
    let scorecomputer = 0;
    console.log("Welcome!");
    for (let i = 0;i<5;i++){
        const playerselection = getplayerchoice();
        const computerselection = getComputerChoice();
        console.log(playround(playerselection, computerselection));
        console.log("------------");
        if(checkwinner(playerselection, computerselection) == "Player"){
            scoreplayer++;
        }
        else if(checkwinner(playerselection, computerselection) == "Computer"){
            scorecomputer++;
        }
    }
    console.log("Game Over");
    console.log("--------");
    if(scoreplayer > scorecomputer){
        console.log("Player was the winner.");
    }
    else if(scoreplayer < scorecomputer){
        console.log("Computer was the winner.");
    }
    else{
        console.log("We have a Tie.");
    }
}

game()