import React from "react";
import { useState, useEffect } from "react";
import {useLocation } from "react-router-dom";

import FriendList from "./FriendList";
import Spinner from "./Spinner";
import UserInfo from "./UserInfo";

export default function Friends() {
    
    const [friendsData, setFreindsData] = useState([])
    const [pageCountFriend, setPageCountFriend] = useState(1)
    const [spinner, setSpinner] = useState(false)
    const { state } = useLocation()
    const [user, setUser] = useState(state.id)
    
    useEffect(()=>{
    (async ()=>{
        try{
            const response = await fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${state.id}/friends/${pageCountFriend}/16`)
            const data = await response.json()
            setFreindsData(prev => [...prev, ...data.list])
            setSpinner(false)
        }catch(error){
            throw error
        }  
    })()
    }, [pageCountFriend, state.id])

    useEffect(() =>{
        try{
        (async ()=>{
            const response = await fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${state.id}`)
            const data = await response.json()
            setUser(data)
        })()

        }catch(error){
            throw error
        }
    },[state.id])

    window.onscroll = () =>{
    if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
      setPageCountFriend(prev => prev + 1)
   
      setSpinner(true)
    }
  }

    const list = friendsData.map(item => <FriendList key={item.id} data={item} />)
    const userinfo =  <UserInfo  key={user.id} data={user} />
  
    return(
    <div>
        <div className="userinfo">
            {userinfo}
        </div>
        <div className="card_wrapper">
            {list}
        </div>
        {spinner && <Spinner  />}
    </div>
    )
}