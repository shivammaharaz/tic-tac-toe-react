import React, { useEffect, useState } from 'react'
import Block from './Block'
import './style.css'

const Board = () => {
    const [marks,setMarks] =useState([0,0,0,0,0,0,0,0,0])
    const [player,setPlayer]=useState(1)
    const [message,setMessage]=useState('')

    const changeMark=(i)=>{
        const m=[...marks]
        if(m[i]===0){
            m[i]=player
            console.log(m)
            setMarks(m)
            setPlayer(player===1?2:1)
        }
        else{
            alert('click on empty boxes')
        }
       
    }
    // let data

    useEffect(()=>{
        const combinations=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        for (const c of combinations) {
            if (marks[c[0]]===1 &&marks[c[1]]===1 &&marks[c[2]]===1  ) {
                 setMessage('Woo Hoo Player1 is The Winner')
                 if(message==='Woo Hoo Player1 is The Winner'){
                    setTimeout(()=>{
                        setMarks([0,0,0,0,0,0,0,0,0])
                        setMessage('')
                    },3000)
                 }
            }
            else if (marks[c[0]]===2 &&marks[c[1]]===2 &&marks[c[2]]===2  ) {
                setMessage('Woo Hoo Player2 is The Winner')
                if(message==='Woo Hoo Player2 is The Winner'){
                    setTimeout(()=>{
                        setMarks([0,0,0,0,0,0,0,0,0])
                        setMessage('')
                    },5000)
                 }  
           }
        }
    },[message,marks])
    
  return (
    <div className="board">
        <div className="r1">
        <Block mark={marks[0]} position={0}  changeMark={changeMark}/>
        <Block mark={marks[1]}   position={1}  changeMark={changeMark}/>
        <Block mark={marks[2]}  position={2} changeMark={changeMark}/>
        </div>
        <div className="r2">
        <Block mark={marks[3]}  position={3} changeMark={changeMark}/>
        <Block mark={marks[4]}  position={4} changeMark={changeMark}/>
        <Block mark={marks[5]}  position={5} changeMark={changeMark}/>
        </div>
        <div className="r3">
        <Block mark={marks[6]}  position={6} changeMark={changeMark}/>
        <Block mark={marks[7]}  position={7} changeMark={changeMark}/>
        <Block mark={marks[8]}  position={8} changeMark={changeMark}/>
        </div>

        <h4>{message}</h4>

    </div>
  )
}

export default Board