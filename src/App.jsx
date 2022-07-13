
import React, {useState, useEffect} from "react"

import User from "./components/User"


export default function App() {
  
  const [dataList, setDataList] = useState([])
  const [pageCount, setPageCount] = useState(1)

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${pageCount}/30`)
        const data = await response.json()
        console.log(data.list)
        setDataList(prev => [...prev, ...data.list])
      } catch (error) {
        throw error
      }
    })()
  }, [pageCount])


  window.onscroll = () =>{
    if(window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight){
      setPageCount(prev => prev + 1)
    }
  }


  const comp = dataList && dataList.map(item => <User key={item.id} data={item}/>)

  return (
    <div className="card_wrapper">
     {comp}
    </div>
  );
}


