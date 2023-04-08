import React from 'react'

const Square = ({value,onClick}) => {
  return <button style={{width:"40px",height:"40px"}} onClick={onClick}>{value}</button>
}

export default Square