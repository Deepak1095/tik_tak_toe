import React from 'react'

const CalculateWinner = (arr) => {
const winner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [2,5,7],
    [3,6,8],
    [0,4,8],
    [2,4,6]
]

for(let i=0;i<winner.length;i++){
    const [a,b,c]=winner[i]
    if(arr[a]&&arr[a]===arr[b]&&arr[a]===arr[c]){
        return arr[a]
    }
}
return 

}

export default CalculateWinner