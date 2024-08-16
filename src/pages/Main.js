import React, { useState } from "react";
import './Main.css'
import { Dropdown } from "../components/Dropdown";
import { List } from "../components/List";
import { AddNew } from "../components/AddNew";
import { PopupMenu } from "../components/PopupMenu";
import { goldenseed, sacredtear, ancientdragon, somberdragon, scadutree, reveredash } from '../static/files'


const jsonDict = {
    'goldenseed': goldenseed, 'scadutree': scadutree, 'sacredtear': sacredtear, 'ancientdragon': ancientdragon, 
    'somberdragon': somberdragon, 'reveredash': reveredash
}

export function Main() {
    const savedData = JSON.parse(localStorage.getItem('erdata'))
    const [collectible, setCollectible] = useState({ value: 'goldenseed', label: 'Golden Seeds' })
    const [character, setCharacter] = useState(savedData ? { value: Object.keys(savedData['goldenseed'][0]['value'])[0], label: Object.keys(savedData['goldenseed'][0]['value'])[0] } : { value: 'default', label: 'default' })
    const [dataDict, setDataDict] = useState(savedData ? savedData : jsonDict)
    const [openMenu, setOpenMenu] = useState(false)
    const [charName, setCharName] = useState('')
    const [key1, setKey1] = useState(0)
    const charOptions = []
    Object.keys(dataDict['goldenseed'][0]['value']).forEach((char) => { charOptions.push({value: char, label: char})})
    console.log(charOptions)

    const options = [
        { value: 'goldenseed', label: 'Golden Seeds' },
        { value: 'sacredtear', label: 'Sacred Tears' },
        { value: 'ancientdragon', label: 'Ancient Dragon Smithing Stones' },
        { value: 'somberdragon', label: 'Somber Ancient Dragon Smithing Stones' },
        { value: 'scadutree', label: 'Scadutree Fragments' },
        { value: 'reveredash', label: 'Revered Spirit Ashes' },
    ];

    function onAddNewChar() {
        const dataDictNew = dataDict
        console.log(dataDictNew)
        const values = Object.values(dataDictNew)
        console.log(values)
        
        values.forEach((value) => {
            value.forEach((index) => {
                if(Object.keys(index['value'])[0] === 'default'){
                    delete index['value']['default']
                }
                console.log(value,index)
                index['value'][charName] = false
            })
        })
        console.log(dataDictNew)
        setDataDict(dataDictNew)
        setCharacter({value: charName, label: charName})
        localStorage.setItem('erdata', JSON.stringify(dataDictNew))
        setOpenMenu(false)
    }

    function onCancel() {
        setOpenMenu(false)
    }

    return (
        <div className="main">
            <div>Please select the type of collectible</div>
            <br />
            <div style={{ width: '25%', height: '10%', display: 'inline-flex', alignItems: 'start' }}>
                <div style={{ flex: 2 }}>
                    <Dropdown options={charOptions} parentOption={character} setParentOption={setCharacter} />
                </div>
                <AddNew setOpen={setOpenMenu} />
                <PopupMenu open={openMenu} onChange={setCharName} onSubmit={onAddNewChar} onCancel={onCancel}/>
            </div>
            <div style={{ width: '20%', height: '10%' }}>
                <Dropdown options={options} parentOption={collectible} setParentOption={setCollectible} />
            </div>
            <div>
                <List data={dataDict} parentOption={collectible['value']} secParentOption={character['value']}
                    setParentOption={setDataDict} key1={key1} setKey1={setKey1} />
            </div>
        </div>
    )

}
