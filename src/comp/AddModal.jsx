import React, { useEffect, useState } from 'react'
import Logo from '../images/Logo.png'
import axios from 'axios'

const AddModal = () => {
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
    // const handleChange = () => { 
    
    //     setCheck(!check); 
    //   }; 

    const resetStateVariables = () => {
        setUsername("");
        setControl("");
        setReqDate("");
        setUnit("");
        setTShoot(false);
        setLan(false);
        setPrev(false);
        setTrain(false);
        setEquip(false);
        setOther('');
        setExplain("");
        setBrand("");
        setInven("");
        setPerson("");
        setModel("");
        setSNumber("");
        setAccess("");
        setOthers("");
        setRecDate("");
        setAction("");
        setRemarks("");
        setStatus("");
        setStatDate("");
        setInCom("");
        setCandRep("");
        setNoted("");
        setEndU("");
        setConformed("");
        setReturn("");
    };

    const sendInfo = (e) => {
        e.preventDefault()
        console.log(TShooting, LAN)
        axios.post('https://pcupserver.onrender.com/reportCreate', {
            userName: userName,
            controlNum: controlNum,
            reqDate: reqDate,
            unit: unit,
            TShooting: TShooting ? true : false,
            LAN: LAN ? true : false,
            preventive: preventive ? true : false,
            Train: Train ? true : false,
            equip: equip ? true : false,
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
            console.log("data sent")
            resetStateVariables()
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className='addModal'>
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
                    <input type="text" name='conNum' value={controlNum} onChange={(e) => { setControl(e.target.value) }} />
                </div>
            </div>

            <div className="secColumn">
                <div className="secColumnText">
                    Computer Maintenance Request and IT Related Work Order
                </div>
                <div className="reqCon">
                    <div className="reqFirst">
                        <label htmlFor="req">Requester/User Name:</label>
                        <input type="text" value={userName} name='req' onChange={(e) => { setUsername(e.target.value) }} />
                    </div>
                    <div className="reqSec">
                        <label htmlFor="reqDate">Request Date:</label>
                        <input type="Date" name='reqDate' value={reqDate} onChange={(e) => { setReqDate(e.target.value) }} />
                    </div>
                </div>
                <div className="Unit">
                    <label htmlFor="unit">Unit/Division:</label>
                    <input type="text" name='unit' value={unit} onChange={(e) => { setUnit(e.target.value) }} />
                </div>
            </div>
            <div className="thirdColumn">
                <div className="DescOfMain">
                    Description / Work Order Requested
                </div>
                <div className="checkBoxCol">
                    <div className="firstCheck">
                        <label htmlFor="TroubleSh">TroubleShooting and Repair</label>
                        <input type="checkbox" name='TroubleSh' value={TShooting} onChange={(e) => { setTShoot(!TShooting) }} />
                    </div>
                    <div className="firstCheck">
                        <label htmlFor="TroubleSh">Internet/LAN Connection Check-up</label>
                        <input type="checkbox" name='TroubleSh' value={LAN} onChange={(e) => { setLan(!LAN) }} />
                    </div>
                    <div className="firstCheck">
                        <label htmlFor="TroubleSh">Preventive Maintenance</label>
                        <input type="checkbox" name='TroubleSh' value={preventive} onChange={(e) => { setPrev(!preventive) }} />
                    </div>
                    <div className="firstCheck">
                        <label htmlFor="TroubleSh">Training and Orientation</label>
                        <input type="checkbox" name='TroubleSh' value={Train} onChange={(e) => { setTrain(!Train) }} />
                    </div>
                    <div className="firstCheck">
                        <label htmlFor="TroubleSh">IT Equipment inspection</label>
                        <input type="checkbox" name='TroubleSh' value={equip} onChange={(e) => { setEquip(!equip) }} />
                    </div>
                    <div className="firstCheck">
                        <label htmlFor="TroubleSh">Others, please specify</label>
                        <input type="input" name='TroubleSh' value={other} onChange={(e) => { setOther(e.target.value) }} />
                    </div>
                </div>
            </div>

            <div className="fourthCol">
                <div className="fourthColText">
                    Briefly Explain the Problem Encountered:
                </div>
                <textarea name="" id="" cols="30" rows="10" value={explainBrief} onChange={(e) => { setExplain(e.target.value) }} />
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
                            <td><input type="text" className='equipInput' value={brand} onChange={(e) => { setBrand(e.target.value) }} /></td>
                            <td><input type="text" className='equipInput' value={inven} onChange={(e) => { setInven(e.target.value) }} /></td>
                            <td><input type="text" className='equipInput' value={accPerson} onChange={(e) => { setPerson(e.target.value) }} /></td>
                            <td><input type="text" className='equipInput' value={model} onChange={(e) => { setModel(e.target.value) }} /></td>
                            <td><input type="text" className='equipInput' value={sNumber} onChange={(e) => { setSNumber(e.target.value) }} /></td>
                            <td><input type="text" className='equipInput' value={access} onChange={(e) => { setAccess(e.target.value) }} /></td>
                            <td><input type="text" className='equipInput' value={others} onChange={(e) => { setOthers(e.target.value) }} /></td>
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
                <input type="Date" value={recDate} onChange={(e) => { setRecDate(e.target.value) }} />
            </div>
            <div className="sixthCol">
                <div className="sixthColText">
                    Action taken and material used:
                </div>
                <textarea name="" id="" cols="30" rows="10" value={actionTaken} onChange={(e) => { setAction(e.target.value) }} />
            </div>

            <div className="seventhCol">
                <div className="seventhColText">
                    Remarks / Recommendation:
                </div>
                <textarea name="" id="" cols="30" rows="10" value={remarks} onChange={(e) => { setRemarks(e.target.value) }} />
            </div>
            <div className="eigthCol">
                <div className="eigthColText">
                    Status:
                </div>
                <div className="statusBotCon">
                    <div className="statusCon">
                        <div className="completed">
                            <input type="checkbox" name='check'  checked={status ? true : false} onChange={(e) => { setStatus(!status) } } />
                            <label htmlFor="check" >Completed</label>
                        </div>
                        <div className="inCom">
                            <input type="checkbox" name='check' checked={status ? false : true} onChange={() => { setStatus(false);}}/>
                            <label htmlFor="check"  >Incomplete</label>
                        </div>
                    </div>
                    <div className="statusDate">
                        <label htmlFor="date">Date:</label>
                        <input type="Date" name='date' value={statDate} onChange={(e) => { setStatDate(e.target.value) }} />
                    </div>
                </div>
            </div>

            <div className="inComStats">
                <textarea name="" id="" cols="30" rows="10" placeholder='Fill out if you checked incomplete' value={inCom} onChange={(e) => { setInCom(e.target.value) }} />
            </div>

            <div className="ninthCol">
                <div className="ninthFirst">
                    <label htmlFor="first">Checked/Repaired by:</label>
                    <input type="text" value={checkedAndRep} onChange={(e) => { setCandRep(e.target.value) }} />
                </div>
                <div className="ninthSec">
                    <label htmlFor="note">Noted by:</label>
                    <input type="text" name='note' value={noted} onChange={(e) => { setNoted(e.target.value) }} />
                </div>
            </div>
            <div className="tenthCol">
                <div className="tenthText">
                    End-User feedback/remarks:
                </div>
                <textarea name="" id="" cols="30" rows="10" value={endU} onChange={(e) => { setEndU(e.target.value) }} />
            </div>
            <div className="lastCol">
                <div className="lastColFirst">
                    <label htmlFor="name">Conformed by:</label>
                    <input type="text" name='name' value={conformed} onChange={(e) => { setConformed(e.target.value) }} />
                </div>
                <div className="lastColSec">
                    <label htmlFor="name">Returned Date:</label>
                    <input type="Date" name='name' value={returnedDate} onChange={(e) => { setReturn(e.target.value) }} />
                </div>
            </div>
            <form onSubmit={sendInfo}>
                <button type='submit'>
                    Submit
                </button>
            </form>

        </div>
    )
}

export default AddModal
