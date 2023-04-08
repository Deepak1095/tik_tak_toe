import React from 'react'
import Square from './Square'
import CalculateWinner from './CalculateWinner'

const Board = () => {
    const [arr,setArr]=React.useState(new Array(9).fill(null))
    const [x,setX]=React.useState(true)
   
    const handleChange=(i)=>{
        if(CalculateWinner(arr)||arr[i]){
            return
        }
        arr[i]=x?"X":"O"
        setArr(arr)
        setX(!x)
    }
    
  return (
    <div>
    <div>
      <Square value={arr[0]} onClick={() => handleChange(0)} />
      <Square value={arr[1]} onClick={() => handleChange(1)} />
      <Square value={arr[2]} onClick={() => handleChange(2)} />
    </div>
    <div>
      <Square value={arr[3]} onClick={() => handleChange(3)} />
      <Square value={arr[4]} onClick={() => handleChange(4)} />
      <Square value={arr[5]} onClick={() => handleChange(5)} />
    </div>
    <div>
      <Square value={arr[6]} onClick={() => handleChange(6)} />
      <Square value={arr[7]} onClick={() => handleChange(7)} />
      <Square value={arr[8]} onClick={() => handleChange(8)} />
    </div>
    <br /> 
    {x?"Next is X":"Next is O"}
  </div>
  )
}

export default Board