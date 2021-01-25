const role1 = document.querySelector("#role1");
const buttonDiv1 = document.querySelector("#buttonDiv1");
const role1Continue = document.querySelector("#role1Continue")
const stack1 = document.querySelector("#stack1");
const role2 = document.querySelector("#role2")
const buttonDiv2 = document.querySelector("#buttonDiv2");
const stack2 = document.querySelector("#stack2");
const role2Continue = document.querySelector("#role2Continue")
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const howToPlay = document.querySelector("#howToPlay");
const rules = document.querySelector("#rules");
const back = document.querySelector("#back");
const p1total = document.querySelector("#p1total");
const p2total = document.querySelector("#p2total");
const p1current = document.querySelector("#p1current");
const p2current = document.querySelector("#p2current");
const winMessage1 = document.querySelector("#winMessage1");
const winMessage2 = document.querySelector("#winMessage2");
const p1currentHead = document.querySelector("#p1currentHead");
const p2currentHead = document.querySelector("#p2currentHead");
const newGame = document.querySelector("#newGame");
let winScore = 50;

let gameOver = false;
let rollValue;
let currentScore=0,totalScore;

function roll(){
    return Math.floor(Math.random()*6)+1;
}

howToPlay.addEventListener('click',function(e){
    rules.classList.remove("hide");
    howToPlay.classList.add("hide");
})

back.addEventListener('click',function(e){
    howToPlay.classList.remove("hide");
    rules.classList.add("hide");
})



role1.addEventListener('click',function(e){
    totalScore = parseInt(p1total.textContent);
    buttonDiv1.classList.remove("hide");
    role1.classList.add("hide");
    rollValue = roll();
    console.log(rollValue);
    animation(img1,rollValue);
    if(rollValue===1){
        setTimeout(()=>{
            role2.classList.remove("hide");
            buttonDiv1.classList.add("hide");
            img1.classList.add("hide");
            img2.classList.remove("hide");
            p1currentHead.classList.add("hide");
            p2currentHead.classList.remove("hide");
            currentScore = 0;
        },2300);
    }else{
        setTimeout(()=>{
            currentScore+=rollValue;
            p1current.textContent = currentScore;
            if(totalScore+currentScore>=winScore){
                gameOver = true;
                winMessage1.classList.remove("hide");
                newGame.classList.remove("hide");
            }
        },2300)
        
    }
    

})
role1Continue.addEventListener('click',function(e){
    
    rollValue = roll();
    console.log(rollValue);
    animation(img1,rollValue);
    currentScore = parseInt(p1current.textContent);
    if(rollValue===1){
        setTimeout(()=>{
            buttonDiv1.classList.add("hide");
            img1.classList.add("hide");
            role2.classList.remove("hide");
            img2.classList.remove("hide");
            p1currentHead.classList.add("hide");
            p2currentHead.classList.remove("hide");
            currentScore = 0;
            p1current.textContent = 0;
        },2300);
    }else{
        setTimeout(()=>{
            currentScore+=rollValue;
            p1current.textContent = currentScore;
            if(totalScore+currentScore>=winScore){
                gameOver = true;
                winMessage1.classList.remove("hide");
                newGame.classList.remove("hide");

        
            }
        },2300)
        
    }
    
})
stack1.addEventListener('click',function(e){
    
    p1total.textContent = parseInt(p1total.textContent) + currentScore;
    currentScore = 0;
    p1current.textContent =0;
    role2.classList.remove("hide");
    buttonDiv1.classList.add("hide");
    img1.classList.add("hide");
    img2.classList.remove("hide");
    p1currentHead.classList.add("hide");
    p2currentHead.classList.remove("hide");
    
})

role2.addEventListener('click',function(e){
    totalScore = parseInt(p2total.textContent);
    rollValue = roll();
    console.log(rollValue);
    animation(img2,rollValue);
    if(rollValue===1){
        setTimeout(()=>{
            role1.classList.remove("hide");
            buttonDiv2.classList.add("hide");
            img2.classList.add("hide");
            img1.classList.remove("hide");
            p2currentHead.classList.add("hide");
            p1currentHead.classList.remove("hide");
            currentScore = 0;
        },2300);
    }else{
        setTimeout(()=>{
            currentScore+=rollValue;
            p2current.textContent = currentScore;
            if(totalScore+currentScore>=winScore){
                gameOver = true;
                winMessage2.classList.remove("hide");
                newGame.classList.remove("hide");
        
            }
        },2300)
        
    }
    role2.classList.add("hide");
    buttonDiv2.classList.remove("hide");
    
    
})

role2Continue.addEventListener('click',function(e){
    rollValue = roll();
    console.log(rollValue);
    animation(img2,rollValue);
    currentScore = parseInt(p2current.textContent);
    if(rollValue===1){
        setTimeout(()=>{
            buttonDiv2.classList.add("hide");
            img2.classList.add("hide");
            img1.classList.remove("hide");
            role1.classList.remove("hide");
            p2currentHead.classList.add("hide");
            p1currentHead.classList.remove("hide");
            currentScore = 0;
            p2current.textContent = 0;
        },2300);
    }else{
        setTimeout(()=>{
            currentScore+=rollValue;
            p2current.textContent = currentScore;
            if(totalScore+currentScore>=winScore){
                gameOver = true;
                winMessage2.classList.remove("hide");
                newGame.classList.remove("hide");
        
            }
        },2300)
        
    }
    
})

stack2.addEventListener('click',function(e){
    role1.classList.remove("hide");
    buttonDiv2.classList.add("hide");
    img2.classList.add("hide");
    img1.classList.remove("hide");
    p2total.textContent = parseInt(p2total.textContent) + currentScore;
    currentScore = 0;
    p2current.textContent =0;
    p2currentHead.classList.add("hide");
    p1currentHead.classList.remove("hide");
})


function animation(img,rollValue){
    setTimeout(()=>{
        img.src="Alea_1.png";
    },200)
    setTimeout(()=>{
        img.src="Alea_2.png";
    },400)
    setTimeout(()=>{
        img.src="Alea_3.png";
    },600)
    setTimeout(()=>{
        img.src="Alea_4.png";
    },800)
    setTimeout(()=>{
        img.src="Alea_5.png";
    },1000)
    setTimeout(()=>{
        img.src="Alea_6.png";
    },1200)
    setTimeout(()=>{
        img.src="Alea_"+rollValue+".png";
    },1400)
}

newGame.addEventListener('click',function(e){
    reset();
    newGame.classList.add("hide");
})

function reset(){
    p1current.textContent = 0;
    p2current.textContent = 0;
    p1total.textContent =0;
    p2total.textContent=0;
    currentScore =0;
    totalScore=0;

    winMessage1.classList.add("hide");
    p1currentHead.classList.remove("hide");
    img1.classList.remove("hide");
    role1.classList.remove("hide");
    buttonDiv1.classList.add("hide");

    winMessage2.classList.add("hide");
    p2currentHead.classList.add("hide");
    img2.classList.add("hide");
    role2.classList.add("hide");
    buttonDiv2.classList.add("hide");

}