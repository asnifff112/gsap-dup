"use client"

import React from 'react'
import { useEffect,useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);



export default function page() {
  const boxRef = useRef<HTMLDivElement | null>(null);
  useEffect(() =>{
    gsap.from(boxRef.current,{
      x:50,
      opacity:0,
      duration:1,
      scrollTrigger:{
        trigger:boxRef.current,
        start:"top 80%",
        end : "top 20%",
        scrub:true,
      },
    });
  },[]);


  return(
    <div style={{height:"200vh",paddingTop:"100vh"}}>
      <div
      ref={boxRef}
      style={{
        width:200,
        height:100,
        background:"black",
        color:"white",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
      }}>
        hellloo
      </div>
    </div>
  )
 

}
