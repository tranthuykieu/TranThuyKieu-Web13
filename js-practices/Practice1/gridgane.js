//global variables

//execute functions here


function randomAnswer(){
    var answers = [1,1,2,2,3,3,4,4,5];
    answers.sort(function(item){
        return .5 - Math.random();
    })
    return answers;
}

function setUp(){
    var grid = document.getElementsByTagName('td');
    var answers = randomAnswer();

    for(var i = 0; i < grid.length; i++){
        var cell = grid[i];
        cell.completed = false;
        cell.clicked = false;
        cell.value = answers[i];
    }
}


function setUp(){
    cell.addEventListener("mouseenter", function(){
        if(this.completed == false && this.clicked == false)
            this.style.background = "orange";
    });
    cell.addEventListener("mouseleave", function(){
        if (this.completed == false && this.clicked == false)
            this.style.background = "blue";
    });
    
    cell.addEventListener('click', function(){

    });
}