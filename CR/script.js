var points=100;
var attackpoints=10;
var attackpoints2=10;
const p=document.getElementById('info');

function attack(){
    var newPoints = points-attackpoints;
    var newPoints = points-attackpoints2;

    if(newPoints<=0){
        p.innerHTML="Game Over";
        document.getElementById('at-c1').style.display="none";
        document.getElementById('reset-btn').style.display="block";
       

    }else{
        points=newPoints;
        display();
    }
}

function display(){
    p.innerHTML=`points: ${points} Attack: ${attackpoints}`;
}
display();

function reset(){
    points=100;
    document.getElementById('at-c1').style.display="block";
    display();

}