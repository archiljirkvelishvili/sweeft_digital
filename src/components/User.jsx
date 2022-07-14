import React from "react"
import { useNavigate  } from "react-router-dom"

export default function User(props) {
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/friends',{
            state:{
                id: props.data.id
            }
        })
    }
    return(
        <div className="card" onClick={handleClick}>
            <div className="img_wrapper">
                <img src={`${props.data.imageUrl}?v=${props.data.id}`} alt="img" className="img"/>
            </div>
            <div className="user_info">
                <h2>  {props.data.prefix} {props.data.name} {props.data.lastName}</h2>
                <p>{props.data.title}</p>
            </div>
        </div> 
    )
}
