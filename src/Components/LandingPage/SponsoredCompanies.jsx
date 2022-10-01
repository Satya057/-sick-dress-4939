import React, { useState } from 'react'
import style from "./SponsoredCompanies.module.css"
import { ChevronRightIcon,ChevronLeftIcon } from '@chakra-ui/icons'

  import {  BsStarFill } from 'react-icons/bs';

const SponsoredCompanies = () => {
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
            {id:1,img:"https://img.naukimg.com/logo_images/groups/v1/3500806.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/1413844.gif",text1:"Diebold",text11:"NTT",text22:"Biz2Credit",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."},
            {id:2,img:"https://img.naukimg.com/logo_images/groups/v1/4630219.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/3563572.gif",text1:"Sophos",text11:"A.S.I.P.L.",text22:"Biz2Credit",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."},
            {id:3,img:"https://img.naukimg.com/logo_images/groups/v1/675406.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/86854.gif",text1:"Infinite",text11:"Sun Life",text22:"Biz2Credit",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."},
            {id:4,img:"https://img.naukimg.com/logo_images/groups/v1/233334.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/3767692.gif",text1:"Coforge",text11:"Sykes",text22:"Biz2Credit",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."},
            {id:5,img:"https://img.naukimg.com/logo_images/groups/v1/4586691.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/4587425.gif",text1:"ICE M.Tech",text11:"Chetu",text22:"Biz2Credit",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."}
        ]
        
    }else{
        arr=[
            {id:1,img:"https://img.naukimg.com/logo_images/groups/v1/4656921.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/2062830.gif",text1:"NICE",text11:"Zen3 Info",text22:"Biz2Credit",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."},
            {id:2,img:"https://img.naukimg.com/logo_images/groups/v1/315118.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/3584790.gif",text1:"Datam G. S.",text11:"Mercedes",text22:"Biz2Credit",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."},
            {id:3,img:"https://img.naukimg.com/logo_images/groups/v1/4663071.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/134834.gif",text1:"GLOBALeco",text11:"Synchrony",text22:"Biz2Credit",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."},
            {id:4,img:"https://img.naukimg.com/logo_images/groups/v1/4593377.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/1371070.gif",text1:"Elico H.S.",text11:"TresVi F.S.",text22:"Biz2Credit",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."},
            {id:5,img:"https://img.naukimg.com/logo_images/groups/v1/17926.gif",img1:"https://img.naukimg.com/logo_images/groups/v1/4632501.gif",text1:"DLF",text11:"TA Digital",text22:"Biz2Credit",text2:" 4.3 | 4.3 reviews",text3:"Leading the #FinTech Revolution."}
        ]
    }
    
    
    
   
  return (

   
    <div className={style.mainslider1}>
        <p className={style.sl1head}>Sponsored companies</p>
    <div className={style.sl1flex}>
        <button onClick={decreasecount} disabled={count===0}  className={count===0?style.hidebtn:style.showbtn}>{<ChevronLeftIcon w={8} h={8} color="#8292b4"/>}</button>
        <div className={style.subsl1flex}>
            {arr.map((elem)=>(
                <div key={elem.id} className={style.sldiv}>
                    <div className={style.one}>
                    <img className={style.image} src={elem.img} alt=""/>
                    <div className={style.box}>
                    <p className={style.sl1t1}>{elem.text1}{<ChevronRightIcon w={7} h={7} color="#8292b4"/>}</p>
                    <p className={style.sl1t2}>{<BsStarFill w={0.1} h={0.1} color="#ffc000"/>}{elem.text2}</p>
                    </div>
                    <p className={style.para}>Leading the #FinTech Revolution.</p>
                    {/* <button className={style.viewbutton}>View jobs</button> */}
                    </div>
                    <div className={style.two}>
                    <img className={style.image1} src={elem.img1} alt=""/>
                    <div className={style.box1}>
                    <p className={style.sl11t11}>{elem.text11}{<ChevronRightIcon w={7} h={7} color="#8292b4"/>}</p>
                    <p className={style.sl11t22}>{<BsStarFill w={0.1} h={0.1} color="#ffc000"/>}{elem.text22}</p>
                    </div>
                    <p className={style.para}>Leading the #FinTech Revolution.</p>
                    {/* <button className={style.viewbutton}>View jobs</button> */}
                    </div>
                </div>
                
            ))}
        </div>
        <button onClick={increasecount} disabled={count===1}  className={count===1?style.hidebtn:style.showbtn}>{<ChevronRightIcon w={8} h={8} color="#8292b4"/>}</button>
    </div>
    <div><button className={style.viewall}>View all companies</button></div>
    </div> 
     
  )
}

export default SponsoredCompanies