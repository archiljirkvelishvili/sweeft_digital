import React from "react";
import { useState, useEffect } from "react";
import {useLocation } from "react-router-dom";

export default function Friends() {

    const [friendsData, setFreindsData] = useState([])

    useEffect(()=>{
    (async ()=>{
        const response = await fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/1/friends/1/16`)
        const data = await response.json()
        setFreindsData(prev => [...prev, ...data.list])
    })()
    }, [])

    console.log(friendsData && friendsData)
    const { state } = useLocation()
    
    return(
       <div >
           <p>friends list</p>
        </div> 
    )
}