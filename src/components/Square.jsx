
export const Square = ({children, isSelected, updateBoard, index, newboard,newturn,newWinner}) =>{
    const handleClick  =  () => {
      //console.log(boardt)
      updateBoard(index, newboard,newturn,newWinner)
    }
    const className = `square ${isSelected ? 'is-selected' : ''}`;

    return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
  };
