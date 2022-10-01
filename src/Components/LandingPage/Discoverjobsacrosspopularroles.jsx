import React, { useState } from 'react'
import style from "./Discoverjobsacrosspopularroles.module.css"
import { ChevronRightIcon,ChevronLeftIcon } from '@chakra-ui/icons'

const Discoverjobsacrosspopularroles = () => {
    let arr;
    const [count, setcount] = useState(0)
    let increasecount=()=>{
        setcount(count+1)
    }
    let decreasecount=()=>{
        setcount(count-1)
    }
    if(count===0){
        arr=[
            {id:1,text1:"Full Stack Developer",text2:"22.1k+ Jobs"},
            {id:2 ,text1:"Mobile / App Developer",text2:"1.6k+ Jobs"},
            {id:3 ,text1:"Front End Developer",text2:"2.2k+ Jobs"},
            {id:4,text1:"DevOps Engineer",text2:"1.3k+ Jobs"},
            {id:5,text1:"Engineering Manager",text2:"704 Jobs"},
            {id:6,text1:"Technical Lead",text2:"12.1k+ Jobs"}
        ]
    }else if(count===1){
        
        arr=[
            {id:1,text1:"Automation Test Engi..",text2:"22.1k+ Jobs"},
            {id:2 ,text1:"Cyber Security",text2:"11.6k+ Jobs"},
            {id:3 ,text1:"Technical Architect",text2:"12.2k+ Jobs"},
            {id:4,text1:"Business Analyst",text2:"1.3k+ Jobs"},
            {id:5,text1:"Data Scientist",text2:"7k+ Jobs"},
            {id:6,text1:"Program Manager",text2:"1.1k+ Jobs"}
        ]
    }else{
        arr=[
            {id:1,text1:"Product Manager",text2:"2.1k+ Jobs"},
            {id:2 ,text1:"UI / UX Designer",text2:"11.6k+ Jobs"},
            {id:3 ,text1:"Research Analyst",text2:"12.2k+ Jobs"},
            {id:4,text1:"Branch Manager",text2:"1.3k+ Jobs"},
            {id:5,text1:"Functional Consultant",text2:"504 Jobs"},
            {id:6,text1:"C.Accountant",text2:"2.1k+ Jobs"}
        ]
    }
  return (
<div className={style.sl2flex}>
    <button onClick={decreasecount}  className={count===0?style.hidebtn:style.showbtn}>{<ChevronLeftIcon w={8} h={8} color="#8292b4"/>}</button>
    <div className={style.grid}>
        {arr.map((elem)=>(
            <div key={elem.id} className={style.sl2div}>
                <p className={style.sl2t1}>{elem.text1}</p>
                <p className={style.sl2t2}>{elem.text2}</p>
            </div>
        ))}
    </div>
    <button onClick={increasecount} disabled={count===2}  className={count===2?style.hidebtn:style.showbtn} > {<ChevronRightIcon w={8} h={8} color="#8292b4"/>}</button>
</div>
)
}

export default Discoverjobsacrosspopularroles