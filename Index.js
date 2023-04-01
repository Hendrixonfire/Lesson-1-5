function  red(){
    document.getElementsByClassName('button')[0].style.background = 'red';
}
function  green(){
    document.getElementsByClassName('button')[0].style.background = 'green';
}


document.getElementById("mybutton").onclick = function(){
    var myName = document.getElementById("my_name").value;
    const str = 'Hendrix'
    if  (myName.toLowerCase() === str.toLowerCase()) {
        green()
        console.log("Nice")
    }
    else
    red();
}

function undo(){
    document.getElementsByClassName('button')[0].style.background = '';
}