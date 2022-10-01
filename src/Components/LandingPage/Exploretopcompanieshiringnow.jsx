import React, { useState } from 'react'
import style from "./Exploretopcompanieshiringnow.module.css"
import { ChevronRightIcon,ChevronLeftIcon } from '@chakra-ui/icons'

const Exploretopcompanieshiringnow = () => {
    let arr;
    const [count, setcount] = useState(0);

    let increasecount=()=>{
        setcount(count+1)
    }
    let decreasecount=()=>{
        setcount(count-1)
    }
    
    if(count===0){
        arr=[
            {id:1,img:"https://img.naukimg.com/logo_images/groups/v1/29798.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/289444.gif",img2:"https://img.naukimg.com/logo_images/groups/v1/27458.gif",img3:"https://img.naukimg.com/logo_images/groups/v1/508530.gif",text1:"MNCs",text2:"248 are actively hiring"},
            {id:2,img:"https://img.naukimg.com/logo_images/groups/v1/434716.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/86854.gif",img2:"https://img.naukimg.com/logo_images/groups/v1/27742.gif",img3:"https://img.naukimg.com/logo_images/groups/v1/142780.gif",text1:"Fortune 500",text2:"18 are actively hiring"},
            {id:3,img:"https://img.naukimg.com/logo_images/groups/v1/1646974.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/4737797.gif",img2:"https://img.naukimg.com/logo_images/groups/v1/4306386.gif",img3:"https://img.naukimg.com/logo_images/groups/v1/4622119.gif",text1:"Startups",text2:"17 are actively hiring"},
            {id:4,img:"https://img.naukimg.com/logo_images/groups/v1/4622119.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/550568.gif",img2:"https://img.naukimg.com/logo_images/groups/v1/1646974.gif",img3:"https://img.naukimg.com/logo_images/groups/v1/2757896.gif",text1:"B2C",text2:"118 are actively hiring"},
            
        ]
        
    }else{
        arr=[
            {id:1,img:"https://img.naukimg.com/logo_images/groups/v1/4602139.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/120166.gif",img2:"https://img.naukimg.com/logo_images/groups/v1/4677011.gif",img3:"https://img.naukimg.com/logo_images/groups/v1/24254.gif",text1:"Product",text2:"61 are actively hiring"},
            {id:2,img:"https://img.naukimg.com/logo_images/groups/v1/44512.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/172058.gif",img2:"https://img.naukimg.com/logo_images/groups/v1/3584.gif",img3:"https://img.naukimg.com/logo_images/groups/v1/86414.gif",text1:"Banking & Finance",text2:"31 are actively hiring"},
            {id:3,img:"https://img.naukimg.com/logo_images/groups/v1/4655735.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/431460.gif",img2:"https://img.naukimg.com/logo_images/groups/v1/275530.gif",img3:"https://img.naukimg.com/logo_images/groups/v1/434716.gif",text1:"Healthcare",text2:"28 are actively hiring"},
            {id:4,img:"https://img.naukimg.com/logo_images/groups/v1/4635205.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/4635681.gif",img2:"https://img.naukimg.com/logo_images/groups/v1/9958.gif",img3:"https://img.naukimg.com/logo_images/groups/v1/4608659.gif",text1:"Manufacturing",text2:"30 are actively hiring"},
            
        ]
    }
    
    
    
    //  onClick={count!=0?decreasecount:setcount(0)}
  return (
    <div className={style.mainslider1}>
        <p className={style.sl1head}>Explore top companies hiring now</p>
    <div className={style.sl1flex}>
    <button onClick={decreasecount} disabled={count===0}  className={count===0?style.hidebtn:style.showbtn}>{<ChevronLeftIcon w={8} h={8} color="#8292b4"/>}</button>
        <div className={style.subsl1flex}>
            {arr.map((elem)=>(
                <div key={elem.id} className={style.sldiv}>
                   
                    <p className={style.sl1t1}>{elem.text1}{<ChevronRightIcon w={7} h={7} color="#8292b4"/>}</p>
                    <p className={style.sl1t2}>{elem.text2}</p>
                    <div className={style.group}>
                    <img className={style.img} src={elem.img} alt=""/>
                    <img className={style.img} src={elem.img1} alt=""/>
                    <img className={style.img} src={elem.img2} alt=""/>
                    <img className={style.img} src={elem.img3} alt=""/>
                    </div>
                </div>
            ))}
        </div>
        <button onClick={increasecount} disabled={count===1}  className={count===1?style.hidebtn:style.showbtn}>{<ChevronRightIcon w={8} h={8} color="#8292b4"/>}</button>
    </div>
    </div>
  )
}

export default Exploretopcompanieshiringnow