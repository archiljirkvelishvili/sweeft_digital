import React from "react"

export default function User(props) {

    return(
        <div className="card">
            <div className="img_wrapper">
                <img src={props.data.imageUrl} alt="img" className="img"/>
            </div>
            <div className="user_info">
                <h2>  {props.data.prefix} {props.data.name} {props.data.lastName}</h2>
                <p>{props.data.title}</p>
            </div>
        </div>
    )
}