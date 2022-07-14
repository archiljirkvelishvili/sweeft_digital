import React, {useState, useEffect} from "react"

import User from "./User"
import Spinner from "./Spinner"


export default function Usefetch() {
  
  const [dataList, setDataList] = useState([])
  const [pageCount, setPageCount] = useState(1)
  const [spinner, setSpinner] = useState(false)

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageCount}/16`)
        const data = await response.json()
        console.log(data.list)
        setDataList(prev => [...prev, ...data.list])
        setSpinner(false)
      } catch (error) {
        throw error
      }
    })()
  }, [pageCount])

  window.onscroll = () =>{
    if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
      setPageCount(prev => prev + 1)
      console.log(document.documentElement.offsetHeight)
      console.log(window.innerHeight + document.documentElement.scrollTop)
    
      console.log(pageCount)
      setSpinner(true)
    }
  }


  const users = dataList && dataList.map(item => <User key={item.id} data={item}/>)

  return (
    <div>
      <div className="card_wrapper">
      {users}
      </div>
      {spinner && <Spinner  />}
    </div>
  );
}