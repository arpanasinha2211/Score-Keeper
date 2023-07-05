const p1={
    score:0,
    button:document.querySelector("#p1button"),
    display:document.querySelector("#p1display")
}
const p2={
    score:0,
    button:document.querySelector("#p2button"),
    display:document.querySelector("#p2display")
}
// const p1button = document.querySelector("#p1button");
// const p2button = document.querySelector("#p2button");
const reset1 = document.querySelector("#reset");

// const p1display = document.querySelector("#p1display");
// const p2display = document.querySelector("#p2display");


const winningScoreSelector = document.querySelector("#playto")

// let p1score = 0;
let winningScore=2;
let isGameOver = false;

function update(player, opponent){
    if(!isGameOver){
        player.score += 1;
        if(player.score === winningScore){
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }  
}
p1.button.addEventListener('click', function(){
    // if(!isGameOver){
    //     p1score += 1;
    //     if(p1score === winningScore){
    //         isGameOver = true;
    //         p1display.classList.add('has-text-success');
    //         p2display.classList.add('has-text-danger');
    //         p1button.disabled = true;
    //         p2button.disabled = true;
    //     }
    //     p1display.textContent = p1score;
    // }  
    update(p1,p2);
})

// let p2score = 0;
p2.button.addEventListener('click', function(){
    // if(!isGameOver){
    //     p2score +=1;
    //     if(p2score === winningScore){
    //         isGameOver = true;
    //         p2display.classList.add('has-text-success');
    //         p1display.classList.add('has-text-danger');
    //         p1button.disabled = true;
    //         p2button.disabled = true;
    //     }
    //     p2display.textContent = p2score;
    // }
    update(p2, p1);  
})

winningScoreSelector.addEventListener('change',function(){
    winningScore = parseInt(this.value);
    reset();
})
reset1.addEventListener('click', reset)

function reset(){
    isGameOver = false; 
    for(let p of [p1, p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
    // p1.score = 0;
    // p2.score = 0;
    // p1.display.textContent = p1.score;
    // p2.display.textContent = p2.score;
    // p1.display.classList.remove('has-text-success','has-text-danger')
    // p2.display.classList.remove('has-text-success','has-text-danger')
    // p1.button.disabled = false;
    // p2.button.disabled = false;
}