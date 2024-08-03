let allMoves = [0,0,0,0,0,0,0,0,0]
var turn = 0
var moveCount = 0
let winmove = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[3,4,5],[6,7,8],[2,5,8],[2,4,6]]


function mark(element){
    turn = changeTurn(turn)
    let parentDiv = document.getElementById('FatherDiv')
    let scoreBoard = document.getElementById('turnBoard')
    if (turn=="0"){
            parentDiv.style.backgroundColor="red"
            let gridIndex = document.getElementById(element.id)
            gridIndex.innerHTML="X"
            gridIndex.disabled=true
            allMoves[element.id] = gridIndex.innerHTML
            scoreBoard.innerText = "Turn=>O"
    }
    else{
        parentDiv.style.backgroundColor="green"
        let gridIndex = document.getElementById(element.id)
        gridIndex.innerHTML="O"
        gridIndex.disabled=true
        allMoves[element.id] = gridIndex.innerHTML
        scoreBoard.innerText = "Turn=>X"

    }
    moveCount+=1
    checkWinner()
    remainingBlocks(moveCount)

} 

function remainingBlocks(remainingMoves){
    let parentDiv = document.getElementById('FatherDiv')
    if (remainingMoves==9){
        console.log(parentDiv.style.backgroundColor="orange")
        alert("Match Draw")
        location.reload()
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
    let scoreBoard = document.getElementById("turnBoard")
    let result = null
    let msg = null
    for(let i=0;i<winmove.length;i++){
        if(allMoves[winmove[i][0]]==allMoves[winmove[i][1]]&& allMoves[winmove[i][1]]==allMoves[winmove[i][2]] && allMoves[winmove[i][2]]=="X"){
            msg = "X is winner"
            scoreBoard.innerHTML=msg
            result=1
        }
        else if(allMoves[winmove[i][0]]==allMoves[winmove[i][1]]&& allMoves[winmove[i][1]]==allMoves[winmove[i][2]] && allMoves[winmove[i][2]]=="O"){
            msg = "O is winner"
            scoreBoard.innerHTML=msg
            result=1
        }
    }
    if (result==1){ 
        alert(msg)
        location.reload()

    }
}