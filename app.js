/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var activePlayer,scores,roundScore;
start();
function start(){
  
     
    activePlayer=0;

 scores = [0,0];
 roundScore = 0;


document.getElementById('score-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';


document.querySelector('.dice').style.display='none';  
}



document.querySelector('.btn-roll').addEventListener('click', function() {
var dice;
dice = 1 + Math.floor(Math.random()*6);
// Display the result
   

var diceDOM=document.querySelector('.dice');
diceDOM.style.display='block';
diceDOM.src='dice-'+dice+'.png';
    
// To put scores in current box
    
    if(dice!==1){
            //Add score
         console.log(dice)
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
        }
    else{
        document.querySelector('#current-'+activePlayer).textContent=0;
        activePlayer === 0 ? activePlayer=1 : activePlayer =0;
        roundScore=0;
        
        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')
    }
    
    

});



document.querySelector('.btn-hold').addEventListener('click', function() {
  // Adding current score to the global value.
        var s=parseInt(scores[activePlayer]);
        s=s+parseInt(document.querySelector('#current-'+activePlayer).textContent);
        document.querySelector('#score-'+activePlayer).textContent=s;
        scores[activePlayer]=s;
        
    //Winner
    
    if(scores[activePlayer]>=50){
            console.log(activePlayer);
             document.querySelector('#name-'+activePlayer).textContent='Winner';
            document.querySelector('.dice').style.display='none';  
         document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
         document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        
        }
    else{
        document.querySelector('#current-'+activePlayer).textContent=0;
        activePlayer === 0 ? activePlayer=1 : activePlayer =0;
        roundScore=0;
        
        document.querySelector('.player-0-panel').classList.toggle('active')
        document.querySelector('.player-1-panel').classList.toggle('active')
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');    
        
    }
    
    
    
        

  
});


document.querySelector('.btn-new').addEventListener('click',function(){
                        start(); 
    document.querySelector('#name-'+0).textContent='Player 0'
    document.querySelector('#name-'+1).textContent='Player 1'
    document.querySelector('.player-'+0+'-panel').classList.remove('winner');
    document.querySelector('.player-'+0+'-panel').classList.remove('active');    
     document.querySelector('.player-'+1+'-panel').classList.remove('winner');
    document.querySelector('.player-'+1+'-panel').classList.remove('active');   
    document.querySelector('.player-'+0+'-panel').classList.add('active');   
    
    
    
                                                    });