const checkRows = (boardtoCheck) => {
    for (let i = 0; i < 9; i += 3) {
        if (boardtoCheck[i] === boardtoCheck[i + 1] && 
            boardtoCheck[i] === boardtoCheck[i + 2]) {
          return boardtoCheck[i];
        }
      } 
}
const checkColumns = (boardtoCheck) => {
    for(let i = 0; i<3; i++){
       if(
           boardtoCheck[i] === boardtoCheck[i + 3] && 
           boardtoCheck[i] === boardtoCheck[i + 6]  
           ) {
            return boardtoCheck[i]
        }
    }
}
const checkDiagonals = (boardtoCheck) =>{
    if(
        boardtoCheck[0] === boardtoCheck[4] &&
        boardtoCheck[0] === boardtoCheck[8]        
    ){
        return boardtoCheck[0]
    }
    if(
        boardtoCheck[2] === boardtoCheck[4] &&
        boardtoCheck[2] === boardtoCheck[6]        
    ){
        return boardtoCheck[2]
    }
}

export const check = (boardtoCheck) => {
if(checkRows(boardtoCheck)){
    return checkRows(boardtoCheck) 
}
else if(checkColumns(boardtoCheck)){
    return checkColumns(boardtoCheck) 
}
else if(checkDiagonals(boardtoCheck)){
    return checkDiagonals(boardtoCheck) 
}
}

