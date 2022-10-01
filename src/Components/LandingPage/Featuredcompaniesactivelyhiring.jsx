import React, { useState } from 'react'
import style from "./Featuredcompaniesactivelyhiring.module.css"
import { ChevronRightIcon,ChevronLeftIcon } from '@chakra-ui/icons'

  import {  BsStarFill } from 'react-icons/bs';

const Featuredcompaniesactivelyhiring = () => {
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
            {id:1,img:"https://img.naukimg.com/logo_images/groups/v2/4582763.gif",text1:"Biz2Credit",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."},
            {id:2,img:"https://img.naukimg.com/logo_images/groups/v2/4614431.gif",text1:"Netcracker",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."},
            {id:3,img:"https://img.naukimg.com/logo_images/groups/v2/18850.gif",text1:"Oracle",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."},
            {id:4,img:"https://img.naukimg.com/logo_images/groups/v2/3835862.gif",text1:"Persistent",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."},
            {id:5,img:"https://img.naukimg.com/logo_images/groups/v2/4654342.gif",text1:"cbts",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."}
        ]
        
    }else{
        arr=[
            {id:1,img:"https://img.naukimg.com/logo_images/groups/v2/1527726.gif",text1:"Incedo",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."},
            {id:2,img:"https://img.naukimg.com/logo_images/groups/v2/419316.gif",text1:"Synechron",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."},
            {id:3,img:"https://img.naukimg.com/logo_images/groups/v2/1574056.gif",text1:"Applied M.",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."},
            {id:4,img:"https://img.naukimg.com/logo_images/groups/v2/9558.gif",text1:"Nagarro",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."},
            {id:5,img:"https://img.naukimg.com/logo_images/groups/v2/13832.gif",text1:"Infosys",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."}
        ]
    }
    
    
    
   
  return (

   
    <div className={style.mainslider1}>
        <p className={style.sl1head}>Featured companies actively hiring</p>
    <div className={style.sl1flex}>
        <button onClick={decreasecount} disabled={count===0}  className={count===0?style.hidebtn:style.showbtn}>{<ChevronLeftIcon w={8} h={8} color="#8292b4"/>}</button>
        <div className={style.subsl1flex}>
            {arr.map((elem)=>(
                <div key={elem.id} className={style.sldiv}>
                    <img src={elem.img} alt=""/>
                    <div className={style.box}>
                    <p className={style.sl1t1}>{elem.text1}</p>
                    <p className={style.sl1t2}>{<BsStarFill w={0.1} h={0.1} color="#ffc000"/>}{elem.text2}</p>
                    </div>
                    <p className={style.para}>Leading the #FinTech Revolution.</p>
                    <button className={style.viewbutton}>View jobs</button>
                   
                </div>
            ))}
        </div>
        <button onClick={increasecount} disabled={count===1}  className={count===1?style.hidebtn:style.showbtn}>{<ChevronRightIcon w={8} h={8} color="#8292b4"/>}</button>
    </div>
    <div><button className={style.viewall}>View all companies</button></div>
    </div> 
     
  )
}

export default Featuredcompaniesactivelyhiring