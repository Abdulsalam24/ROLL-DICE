function myFunction(){
    let dice1 = document.getElementById("dice1");
    let dice2 = document.getElementById("dice2");
    let status = document.getElementById("status");
    let d1 = Math.floor(Math.random() * 6) + 1;
    let d2 = Math.floor(Math.random() * 6) + 1;
    let dTotal = d1 + d2;
    dice1.innerHTML = d1;
    dice2.innerHTML = d2;

    status.innerHTML = "You Got " + dTotal;
    status.style.color = "white"

    if(d1 == d2){
        status.innerHTML = "YOU ROLLED " + dTotal + " DOUBLES!!<br> You get a free turn";
        status.style.color = "red";
        status.style.fontSize = "25px";
    }

}