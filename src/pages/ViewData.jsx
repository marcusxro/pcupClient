import React, { useEffect, useState } from 'react'
import Logo from '../images/Logo.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Success from '../comp/Success'
import gsap from 'gsap'
const ViewData = () => {
    const [data, setData] = useState([])
    const nav = useNavigate()
    const dataLink = useParams()
    const [finalizedData, setFinalized] = useState([])

    useEffect(() => {
        axios.get('https://pcupserver.onrender.com/getInfo')
            .then((res) => {
                setData(res.data)
                const filtered = data.filter((itm) => itm._id === dataLink.item)
                setFinalized(filtered)
                document.title = `${finalizedData[0].userName} / ${finalizedData[0].controlNum}`
            }).catch((err) => {
                console.log(err)
            })
    }, [data, finalizedData])


    const [isEdit, setEdit] = useState(false)

    const [userName, setUsername] = useState('')
    const [controlNum, setControl] = useState('')
    const [reqDate, setReqDate] = useState('')
    const [unit, setUnit] = useState('')

    const [TShooting, setTShoot] = useState(false)
    const [LAN, setLan] = useState(false)
    const [preventive, setPrev] = useState(false)
    const [Train, setTrain] = useState(false)
    const [equip, setEquip] = useState(false)
    const [other, setOther] = useState('')

    const [explainBrief, setExplain] = useState('')

    const [brand, setBrand] = useState('')
    const [inven, setInven] = useState('')
    const [accPerson, setPerson] = useState('')
    const [model, setModel] = useState('')
    const [sNumber, setSNumber] = useState('')
    const [access, setAccess] = useState('')
    const [others, setOthers] = useState('')

    const [recDate, setRecDate] = useState('')
    const [actionTaken, setAction] = useState('')
    const [remarks, setRemarks] = useState('')

    const [status, setStatus] = useState(false)
    const [statDate, setStatDate] = useState('')
    const [inCom, setInCom] = useState('')

    const [checkedAndRep, setCandRep] = useState('')
    const [noted, setNoted] = useState('')

    const [endU, setEndU] = useState('')

    const [conformed, setConformed] = useState('')
    const [returnedDate, setReturn] = useState('')

    const setDetails = (item) => {
        setUsername(item.userName)
        setControl(item.controlNum)
        setReqDate(item.reqDate)
        setUnit(item.unit)
        setTShoot(item.Tshoot)
        setLan(item.LAN)
        setPrev(item.preventive)
        setTrain(item.Train)
        setEquip(item.equip)
        setOther(item.otherCon)
        setExplain(item.explainBrief)
        setBrand(item.brand)
        setInven(item.inven)
        setPerson(item.accPerson)
        setModel(item.model)
        setSNumber(item.sNumber)
        setAccess(item.access)
        setOthers(item.others)
        setRecDate(item.recDate)
        setAction(item.actionTaken)
        setRemarks(item.remarks)
        setStatus(item.status)
        setStatDate(item.statDate)
        setInCom(item.inCom)
        setCandRep(item.checkedAndRep)
        setNoted(item.noted)
        setEndU(item.endU)
        setConformed(item.conformed)
        setReturn(item.returnedDate)
    }
    const showNotif = () => {
        gsap.to('.successCon', {
            top: "2%",
            duration: 0.5,
            onComplete: () => {
                gsap.to('.lines', {
                    duration: 0,
                    width: "100%",
                    onComplete: () => {
                        gsap.to('.lines', {
                            top: '0%',
                            width: '0%',
                            duration: 7,
                            onComplete: () => {
                                gsap.to('.successCon', {
                                    top: "-20%"
                                })
                            }
                        })
                    }
                })
            }
        })
    }
    const handleEditInfo = (itemId) => {
        axios.put(`https://pcupserver.onrender.com/update/${itemId}`, {
            userName: userName,
            controlNum: controlNum,
            reqDate: reqDate,
            unit: unit,
            TShooting: TShooting,
            LAN: LAN,
            preventive: preventive,
            Train: Train,
            equip: equip,
            otherCon: other,
            explainBrief: explainBrief,
            brand: brand,
            inven: inven,
            accPerson: accPerson,
            model: model,
            sNumber: sNumber,
            access: access,
            others: others,
            recDate: recDate,
            actionTaken: actionTaken,
            remarks: remarks,
            status: status,
            statDate: statDate,
            inCom: inCom,
            checkedAndRep: checkedAndRep,
            noted: noted,
            endU: endU,
            conformed: conformed,
            returnedDate: returnedDate
        }).then(() => {
            showNotif()
        }).catch((err) => {
            console.log(err)
        })
    }
    return (

        <div>
            {finalizedData.map((item) => (
                <div className="addModals" key={item._id}>
                    <Success />
                    <div className="firstColumn">
                        <div className="logoCon">
                            <div className="logo">
                                <img src={Logo} alt="" />
                            </div>
                            <div className="textCon">
                                <div className="firstText">
                                    PRESIDENTIAL COMMISION FOR THE URBAN POOR
                                </div>
                                <div className="secText">
                                    Information Technology Unit
                                </div>
                            </div>
                        </div>
                        <div className="conNum">
                            <label htmlFor="conNum"> Control Number</label>
                            {isEdit ? (
                                <>
                                    <input type='text' value={controlNum} onChange={(e) => { setControl(e.target.value) }} />
                                </>
                            ) : (<input type="text" name='conNum' value={item.controlNum} />)}
                        </div>
                    </div>

                    <div className="secColumn">
                        <div className="secColumnText">
                            Computer Maintenance Request and IT Related Work Order
                        </div>
                        <div className="reqCon">
                            <div className="reqFirst">
                                <label htmlFor="req">Requester/User Name: </label>

                                {isEdit ? (
                                    <>
                                        <input type='text' value={userName} onChange={(e) => { setUsername(e.target.value) }} />
                                    </>
                                ) : (
                                    <input type="text" value={item.userName} />
                                )}
                            </div>
                            <div className="reqSec">
                                <label htmlFor="reqDate">Request Date:</label>
                                {isEdit ? (
                                    <>
                                        <input type='date' value={reqDate} onChange={(e) => { setReqDate(e.target.value) }} />
                                    </>
                                ) : (
                                    <input type="Date" name='reqDate' value={item.reqDate} />
                                )}
                            </div>
                        </div>
                        <div className="Unit">
                            <label htmlFor="unit">Unit/Division:</label>
                            {isEdit ? (
                                <>
                                    <input type='input' value={unit} onChange={(e) => { setUnit(e.target.value) }} />
                                </>
                            ) : (
                                <input type="text" name='unit' value={item.unit} />
                            )}
                        </div>
                    </div>
                    <div className="thirdColumn">
                        <div className="DescOfMain">
                            Description / Work Order Requested
                        </div>
                        <div className="checkBoxCol">
                            <div className="firstCheck">
                                <label htmlFor="TroubleSh">TroubleShooting and Repair</label>
                                {isEdit ? (
                                    <>
                                        <input type="checkbox" name='TroubleSh' checked={TShooting} onChange={() => { setTShoot(!TShooting) }} />
                                    </>
                                ) : (
                                    <input type="checkbox" name='TroubleSh' checked={item.TShooting} />
                                )}

                            </div>
                            <div className="firstCheck">
                                <label htmlFor="TroubleSh">Internet/LAN Connection Check-up</label>
                                {isEdit ? (
                                    <>
                                        <input type="checkbox" name='TroubleSh' checked={LAN} onChange={() => { setLan(!LAN) }} />
                                    </>
                                ) : (
                                    <input type="checkbox" name='TroubleSh' checked={item.LAN} />
                                )}
                            </div>
                            <div className="firstCheck">
                                <label htmlFor="TroubleSh">Preventive Maintenance</label>
                                {isEdit ? (
                                    <>
                                        <input type="checkbox" name='TroubleSh' checked={preventive} onChange={() => { setPrev(!preventive) }} />
                                    </>
                                ) : (
                                    <input type="checkbox" name='TroubleSh' checked={item.preventive} />
                                )}
                            </div>
                            <div className="firstCheck">
                                <label htmlFor="TroubleSh">Training and Orientation</label>
                                {isEdit ? (
                                    <>
                                        <input type="checkbox" name='TroubleSh' checked={Train} onChange={() => { setTrain(!Train) }} />
                                    </>
                                ) : (
                                    <input type="checkbox" name='TroubleSh' checked={item.Train} />
                                )}
                            </div>
                            <div className="firstCheck">
                                <label htmlFor="TroubleSh">IT Equipment inspection</label>
                                {isEdit ? (
                                    <>
                                        <input type="checkbox" name='TroubleSh' checked={equip} onChange={() => { setEquip(!equip) }} />
                                    </>
                                ) : (
                                    <input type="checkbox" name='TroubleSh' checked={item.equip} />
                                )}
                            </div>
                            <div className="firstCheck">
                                <label htmlFor="TroubleSh">Others, please specify</label>

                                {isEdit ? (
                                    <>
                                        <input type="input" name='TroubleSh' value={other} onChange={(e) => { setOther(e.target.value) }} />
                                    </>
                                ) : (
                                    <input type="input" name='TroubleSh' value={item.otherCon} />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="fourthCol">
                        <div className="fourthColText">
                            Briefly Explain the Problem Encountered:
                        </div>
                        {isEdit ? (
                            <>
                                <textarea name="" id="" cols="30" rows="10" value={explainBrief} onChange={(e) => { setExplain(e.target.value) }} />
                            </>
                        ) : (
                            <textarea name="" id="" cols="30" rows="10" value={item.explainBrief} />
                        )}
                    </div>

                    <div className="fifthCol">
                        <div className="fifthColText">
                            Equipment / Items submitted:P
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>Brand:</th>
                                    <th>Inventory Tag No.:</th>
                                    <th>Accountable Person:</th>
                                    <th>Model:</th>
                                    <th>Serial Number:</th>
                                    <th>Accessoories:</th>
                                    <th>Others: </th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        {isEdit ? (
                                            <>
                                                <input type="text" className='equipInput' value={brand} onChange={(e) => { setBrand(e.target.value) }} />
                                            </>
                                        ) : (
                                            <input type="text" className='equipInput' value={item.brand} />
                                        )}
                                    </td>
                                    <td>
                                        {isEdit ? (
                                            <>
                                                <input type="text" className='equipInput' value={inven} onChange={(e) => { setInven(e.target.value) }} />
                                            </>
                                        ) : (
                                            <input type="text" className='equipInput' value={item.inven} />
                                        )}

                                    </td>
                                    <td>
                                        {isEdit ? (
                                            <>
                                                <input type="text" className='equipInput' value={accPerson} onChange={(e) => { setPerson(e.target.value) }} />
                                            </>
                                        ) : (
                                            <input type="text" className='equipInput' value={item.accPerson} />
                                        )}

                                    </td>
                                    <td>
                                        {isEdit ? (
                                            <>
                                                <input type="text" className='equipInput' value={model} onChange={(e) => { setModel(e.target.value) }} />
                                            </>
                                        ) : (
                                            <input type="text" className='equipInput' value={item.model} />
                                        )}

                                    </td>
                                    <td>
                                        {isEdit ? (
                                            <>
                                                <input type="text" className='equipInput' value={sNumber} onChange={(e) => { setSNumber(e.target.value) }} />
                                            </>
                                        ) : (
                                            <input type="text" className='equipInput' value={item.sNumber} />
                                        )}

                                    </td>
                                    <td>
                                        {isEdit ? (
                                            <>
                                                <input type="text" className='equipInput' value={access} onChange={(e) => { setAccess(e.target.value) }} />
                                            </>
                                        ) : (
                                            <input type="text" className='equipInput' value={item.access} />
                                        )}
                                    </td>
                                    <td>
                                        {isEdit ? (
                                            <>
                                                <input type="text" className='equipInput' value={others} onChange={(e) => { setOthers(e.target.value) }} />
                                            </>
                                        ) : (
                                            <input type="text" className='equipInput' value={item.others} />
                                        )}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="line"></div>
                    <div className="bottomConText">
                        To be fill-out by IT Personel only
                    </div>
                    <div className="receivedDate">
                        <label htmlFor="">Recieved Date:</label>
                        {isEdit ? (
                            <>
                                <input type="Date" value={recDate} onChange={(e) => { setRecDate(e.target.value) }} />
                            </>
                        ) : (
                            <input type="Date" value={item.recDate} />
                        )}
                    </div>
                    <div className="sixthCol">
                        <div className="sixthColText">
                            Action taken and material used:
                        </div>
                        {isEdit ? (
                            <>
                                <textarea name="" id="" cols="30" rows="10" value={actionTaken} onChange={(e) => { setAction(e.target.value) }} />
                            </>
                        ) : (
                            <textarea name="" id="" cols="30" rows="10" value={item.actionTaken} />
                        )}
                    </div>

                    <div className="seventhCol">
                        <div className="seventhColText">
                            Remarks / Recommendation:
                        </div>
                        {isEdit ? (
                            <>
                                <textarea name="" id="" cols="30" rows="10" value={remarks} onChange={(e) => { setRemarks(e.target.value) }} />
                            </>
                        ) : (
                            <textarea readOnly name="" id="" cols="30" rows="10" value={item.remarks} />
                        )}
                    </div>
                    <div className="eigthCol">
                        <div className="eigthColText">
                            Status:
                        </div>
                        <div className="statusBotCon">
                            <div className="statusCon">
                                <div className="completed">
                                    {isEdit ? (
                                        <>
                                            <input type="checkbox" name='check' checked={status ? true : false} onChange={(e) => { setStatus(!status) }} />
                                        </>
                                    ) : (
                                        <input type="checkbox" name='check' checked={item.status ? true : false} />
                                    )}
                                    <label htmlFor="check"   >Completed</label>
                                </div>
                                <div className="inCom">
                                    {isEdit ? (
                                        <>
                                            <input type="checkbox" name='check' checked={status === true ? false : true} onChange={(e) => { setStatus(!status) }} />
                                        </>
                                    ) : (
                                        <input type="checkbox" name='check' checked={item.status === true ? false : true} />
                                    )}
                                    <label htmlFor="check"  >Incomplete</label>
                                </div>
                            </div>
                            <div className="statusDate">
                                <label htmlFor="date">Date:</label>
                                {isEdit ? (
                                    <>
                                        <input type="Date" name='date' value={statDate} onChange={(e) => { setStatDate(e.target.value) }} />
                                    </>
                                ) : (
                                    <input type="Date" name='date' value={item.statDate} />
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="inComStats">

                        {isEdit ? (
                            <>
                                <textarea name="" id="" cols="30" rows="10" placeholder='Fill out if you checked incomplete' value={inCom} onChange={(e) => { setInCom(e.target.value) }} />
                            </>
                        ) : (
                            <textarea name="" id="" cols="30" rows="10" placeholder='Fill out if you checked incomplete' value={item.inCom} />
                        )}
                    </div>

                    <div className="ninthCol">
                        <div className="ninthFirst">
                            <label htmlFor="first">Checked/Repaired by:</label>


                            {isEdit ? (
                                <>
                                    <input type="text" value={checkedAndRep} onChange={(e) => { setCandRep(e.target.value) }} />
                                </>
                            ) : (
                                <input type="text" value={item.checkedAndRep} />
                            )}
                        </div>
                        <div className="ninthSec">
                            <label htmlFor="note">Noted by:</label>

                            {isEdit ? (
                                <>
                                    <input type="text" name='note' value={noted} onChange={(e) => { setNoted(e.target.value) }} />
                                </>
                            ) : (
                                <input type="text" name='note' value={item.noted} />
                            )}
                        </div>
                    </div>
                    <div className="tenthCol">
                        <div className="tenthText">
                            End-User feedback/remarks:
                        </div>
                        {isEdit ? (
                            <>
                                <textarea name="" id="" cols="30" rows="10" value={endU} onChange={(e) => { setEndU(e.target.value) }} />
                            </>
                        ) : (
                            <textarea name="" id="" cols="30" rows="10" value={item.endU} />
                        )}
                    </div>
                    <div className="lastCol">
                        <div className="lastColFirst">
                            <label htmlFor="name">Conformed by:</label>

                            {isEdit ? (
                                <>
                                    <input type="text" name='name' value={conformed} onChange={(e) => { setConformed(e.target.value) }} />
                                </>
                            ) : (
                                <input type="text" name='name' value={item.conformed} />
                            )}
                        </div>
                        <div className="lastColSec">
                            <label htmlFor="name">Returned Date:</label>
                            {isEdit ? (
                                <>
                                    <input type="Date" name='name' value={returnedDate} onChange={(e) => { setReturn(e.target.value) }} />
                                </>
                            ) : (
                                <input type="Date" name='name' value={item.returnedDate} />
                            )}
                        </div>
                    </div>
                    <div className="btnEdit"
                        onClick={() => { setEdit(!isEdit); setDetails(item) }}>
                        <div className='editCons'>
                            {isEdit ? (<><button onClick={() => { handleEditInfo(item._id) }}>save</button></>) : (<><button>edit</button></>)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ViewData
