import React from "react";

export default function UserInfo(props) {
    return(
        <header>
            <img src={`${props.data.imageUrl}?v=${props.data.id}`} alt="img" className="img_user"/>
            <div className="user_desc">
                <h3>{props.data.prefix} {props.data.name} {props.data.lastName}</h3>
                <p>JobTitle: {props.data.title}</p>
                <p>JobArea: {props.data.jobArea}</p>
                <p>JobType: {props.data.jobType}</p>
                <p>Email: {props.data.email}</p> 
            </div>
            {props.data.address && 
                <div className="user_desc">
                    
                    <p>Country: {props.data.address.country}</p>
                    <p>City: {props.data.address.city}</p>
                    <p>StreetAddress: {props.data.address.streetAddress}</p>
                    <p>ZipCode: {props.data.address.zipCode}</p>
                </div>
            }
        </header>
    )

}
