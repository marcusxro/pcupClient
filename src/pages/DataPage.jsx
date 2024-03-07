import React, { useState } from "react";
import GetData from "./GetData";
import AddModal from "../comp/AddModal";


const DataPage = () => {
    const [showModal, setShow] = useState(false)
    const [click, setClick] = useState(0)
    
    const appear = () => {
        setShow(true)
        setClick(click + 1)

        if(click === 2) {
            setShow(false)
            setClick(0)
        }
    }
    return (
        <div className="dataPage">
           
                <GetData />
                <div className="absoBtn" onClick={() => {appear()}}>
                    {showModal ? <>close</> : <>+</>}
                </div>
                {showModal ? (
                    <AddModal />
                ) : <></>}
        </div>
    )
}

export default DataPage;