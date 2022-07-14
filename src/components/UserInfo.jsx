import React from "react";

export default function UserInfo(props) {
    console.log(props.data.address && props.data.address)
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
            <div className="user_desc">
                {/* {props.data.address.country && <p>Country: {props.data.address.country}</p>} */}
                {/* {props.data.address.city && <p>City: {props.data.address.city}</p>} */}
                {/* <p>StreetAddress: {props.data.address.streetAddress}</p> */}
                {/* <p>zipCode: {props.data.address.zipCode}</p> */}
            </div>
        </header>
    )

}

// id": 1,
// "name": "Nat",
// "lastName": "Hickle",
// "prefix": "Ms.",
// "title": "Forward Configuration Developer",
// "jobDescriptor": "Central",
// "jobArea": "Assurance",
// "jobType": "Supervisor",
// "email": "Lavon65@yahoo.com",
// "ip": "10.83.35.97",
// "imageUrl": "http://placeimg.com/640/480/animals",
// "company": {
// "name": "Greenfelder - Effertz",
// "suffix": "LLC"
// },
// "address": {
// "zipCode": "62452",
// "city": "North Norbertport",
// "streetAddress": "421 Gutkowski Villages",
// "country": "Estonia",
// "state": "Nevada"
// }