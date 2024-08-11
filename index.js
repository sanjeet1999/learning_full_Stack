let scoreBoard = ["","","","","","","","",""]
var turn = 0
var moveCount = 0
let winmove = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[3,4,5],[6,7,8],[2,5,8],[2,4,6]]


function mark(element){
    turn = changeTurn(turn)
    let parentDiv = document.getElementById('FatherDiv')
    let turnBoard = document.getElementById('turnBoard')
    if (turn=="0"){
            parentDiv.style.backgroundColor="red"
            let gridIndex = document.getElementById(element.id)
            gridIndex.innerHTML="X"
            // gridIndex.disabled=true
            scoreBoard[element.id] = gridIndex.innerHTML
            turnBoard.innerText ="O's move"
            gridIndex.style.pointerEvents='none'

    }
    else{
        parentDiv.style.backgroundColor="green"
        let gridIndex = document.getElementById(element.id)
        gridIndex.innerHTML="O"
        // gridIndex.disabled=true
        scoreBoard[element.id] = gridIndex.innerHTML
        turnBoard.innerText ="X's move"
        gridIndex.style.pointerEvents='none'


    }
    moveCount+=1
    var result=checkWinner()
    if (result=='none'){
        checkDraw(moveCount)
    }
} 

function checkDraw(remainingMoves){
    let parentDiv = document.getElementById('FatherDiv')
    console.log(remainingMoves,"remaninig")
    if (remainingMoves==9){
        console.log(parentDiv.style.backgroundColor="orange")
        data = document.getElementById("turnBoard")
        data.innerText="Match Draw"
        const newdata = document.querySelectorAll(".grid-item")
        newdata.forEach(element=>{
                element.style.pointerEvents="none"
                scoreBoard[element.id] = 0
    
        })
        
    }
}


function changeTurn(turn){
    if (turn=="0"){
        turn = "1"
    }
    else{
        turn = "0"
    }
    return turn
}

function checkWinner(){
    let turnBoard = document.getElementById("turnBoard")
    let result = null
    let msg = 'none'
    for(let i=0;i<winmove.length;i++){
        if(scoreBoard[winmove[i][0]]==scoreBoard[winmove[i][1]]&& scoreBoard[winmove[i][1]]==scoreBoard[winmove[i][2]] && scoreBoard[winmove[i][2]]=="X"){
            msg = "X is winner......!!!!!"
            turnBoard.innerHTML=msg
            result=1
            const newdata = document.querySelectorAll(".grid-item")
            newdata.forEach(element=>{
            scoreBoard[element.id] = 0
            element.style.pointerEvents="none"
            })

        }
        else if(scoreBoard[winmove[i][0]]==scoreBoard[winmove[i][1]]&& scoreBoard[winmove[i][1]]==scoreBoard[winmove[i][2]] && scoreBoard[winmove[i][2]]=="O"){
            msg = "O is winner!!!!!!"
            turnBoard.innerHTML=msg
            result=1
            const newdata = document.querySelectorAll(".grid-item")
            newdata.forEach(element=>{
            scoreBoard[element.id] = 0
            element.style.pointerEvents="none"
            })
        }
    
        
    }
    return msg

}

function resetButton(){
    const newdata = document.querySelectorAll(".grid-item")
    newdata.forEach(element=>{
    element.innerText=""
    element.style.pointerEvents='auto';
    })
    console.log(scoreBoard,"element")
    scoreBoard = ["","","","","","","","",""]
    moveCount = 0
    var data =  document.getElementById('FatherDiv')
    data.style.backgroundColor='white';
    data = document.getElementById("turnBoard")
    data.innerHTML = "Score Board"
    
}