import React, { useEffect, useState } from 'react'
import AddModal from '../comp/AddModal'
import axios from 'axios'
import Logo from '../images/Logo.png'
import { useNavigate } from 'react-router-dom'

const GetData = () => {
    const nav = useNavigate()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        axios.get('https://pcupserver.onrender.com/getInfo')
            .then((res) => {
                setData(res.data)
                setLoading(true)
            }).catch((err) => {
                console.log(err)
            })
    }, [data])
    
    const [searchedItem, setSearched] = useState('')
    const [filteredData, setFilter] = useState([])
    useEffect(() => {
        const filteredData = data.filter(item => item.userName.toLowerCase().includes(searchedItem.toLowerCase()));
        setFilter(filteredData)
    }, [searchedItem, data]);

    const [eqID, setEqId] = useState('')

    const isEqual = (item) => {
        setEqId(item)
    }
    const deleteItem = (item) => {
        axios.delete(`https://pcupserver.onrender.com/item/${item}`)
        .then(() => {
            console.log("deleted")
        }).catch((err) => {
            console.log(err)
        })
    }
    document.title = "DATABASE"
    return (
        <div className='getData'>
            <div className="getDataText">
                Computer Maintenance Report
            </div>
            <div className="searchBox">
                <input type="text" placeholder="Find your data" value={searchedItem} onChange={(e) => { setSearched(e.target.value) }} />
            </div>
            <div className="dataCon">
               {loading ? (
                
                    filteredData.map((item) => (
                       <div className="dataItem" key={item._id}>
                           <div className="firstData">
                               <div className="reqName">
                                   {item.userName}
                               </div>
                               <div className="controlNum">
                                   Control number: <span>{item.controlNum}</span>
                               </div>
                               <div className="reqDate">
                                   Requested Date: <span>{item.reqDate}</span>
                               </div>
                           </div>
                           <div className="lastData">
                               {eqID === item._id ? (
                                   <>
                                       <button className='confirmBtn' onClick={() => { isEqual(null); deleteItem(item._id) }}>
                                           Confirm
                                       </button>
                                       <button onClick={() => { isEqual(null) }}>
                                           cancel
                                       </button>
                                   </>
                               ) : (
                                   <>
                                       <button onClick={() => {
                                           nav(`/data/${item._id}`)
                                       }}>
                                           View
                                       </button>
                                       <button className='deleteBtn' onClick={() => { isEqual(item._id) }}>
                                           Delete
                                       </button>
                                   </>
                               )}
                           </div>
                       </div>
                   ))
               ): (<>loading...</>)}

            </div>
        </div>
    )
}

export default GetData
