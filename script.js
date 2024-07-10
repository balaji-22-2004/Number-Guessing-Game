var random=Math.floor(Math.random()*100)+1;
var attempt=0;
document.getElementById('btn').addEventListener('click',function(){
    attempt++;
    var guess=parseInt(document.getElementById('guessinput').value);
    if(guess===random){
        display('CONGRATULATIONS, your attempt is'+attempt);
        document.getElementById('btn').disabled=true;
    }
    else if(guess<random){
        display("TOO LOW, guess a high number.");
    }
    else if(guess>random){
        display("TOO HIGH, guess a low number.");
    }
});
function display(message){
    document.getElementById("msg").textContent=message;
}