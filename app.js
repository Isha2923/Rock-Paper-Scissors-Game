let userScore=0;
let compScore=0;

const choices =document.querySelectorAll(".choice");
const msg= document.querySelector("#msg");

//access scores
const userScorePara =document.querySelector("#user-score");
const compScorePara =document.querySelector("#comp-score");

const genCompChoice = () =>{
    let options=["rock","paper","scissors"];
    let randomIdx = Math.floor(Math.random() *3);
    return options[randomIdx];    

}

const drawGame =() =>{
    msg.innerText ="Game Was Draw";
    msg.style.backgroundColor ="#081b31";
}

const showWinner = (userWin,userChoice,CompChoice) => {

       if (userWin){

         userScore++;
         userScorePara.innerText = userScore;
         msg.innerText =`You Win! Your ${userChoice} beats ${CompChoice}`;
         msg.style.backgroundColor ="green";  //box changed to green

       }else{
          
          compScore++;
          compScorePara.innerText = compScore;
          msg.innerText =`You Lost! ${CompChoice} beats your ${userChoice}`;
          msg.style.backgroundColor ="red";//box changed to red

       }

}

const playGame =(userChoice) =>{
    
    const CompChoice =genCompChoice();
    if (userChoice=== CompChoice){
        drawGame();
    }else{

        let userWin =true;  
        if (userChoice=== "rock"){

            //compchoice= paper,scissors
            userWin = (CompChoice==="paper") ? false: true;

        }else if (userChoice=== "paper"){

            //compchoice = rock,scissors
            userWin = (CompChoice==="scissors") ? false: true;

        }else{   //userchoice =scissors

            //compchoice =paper,scissors
            userWin = (CompChoice==="rock") ? false: true;

        }

        showWinner(userWin, userChoice, CompChoice);
    }
}

choices.forEach ((choice) => {
    
    choice.addEventListener("click", ()=>{
    
        const userChoice =choice.getAttribute("id");   
        playGame(userChoice);

    })
})