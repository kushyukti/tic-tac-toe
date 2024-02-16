let sign = "X";

let display = document.getElementById("Player");

function printx(number ){
    let x = document.getElementById("r"+ number);
    console.log(x);
    if(x.innerText == ""){
    x.innerHTML = sign;
    winner();
    checkSign();
    display.innerHTML ="<center>" + sign + " ka turn hai!" + "</center";
    
    }
}

function checkSign(){
    if(sign == "X") sign = "O";
    else sign = "X";
}

function getBox(no){
    return document.getElementById("r"+no).innerHTML;
}

function checkMove(a,b,c,m){
    if(getBox(a)== m && getBox(b)==m && getBox(c)==m)
        return true;
    else
        return false;
}

function winner(){
    if(checkMove(1,2,3,sign) || checkMove(4,5,6,sign) || checkMove(7,8,9,sign)
    || checkMove(1,4,7,sign) || checkMove(2,5,8,sign) || checkMove(3,6,9,sign)
    || checkMove(1,5,9,sign) || checkMove(3,5,7,sign) ){
            display.innerHTML ="<center>"+ "WOOHOO !!"+ sign +  " WINS!!!"+"</center>"
    for ( let i = 1; i <=9 ; i++){
        document.getElementById("r"+ i).innerHTML = "";
    }

    throw " Game Over"
    }

    else{
        if (getBox(1) != "" && getBox(2) != "" && getBox(3) != "" && 
        getBox(6) != "" && getBox(5) != "" && getBox(4) != "" && 
        getBox(7) != "" && getBox(8) != "" && getBox(9) != "" )
        {
            display.innerHTML ="<center>"+  " Game Tie!!!"+"</center>";
            for ( let i = 1; i <=9 ; i++){
                document.getElementById("r"+ i).innerHTML = "";
            }
            throw "its a tie";
            
        } 
    }
}