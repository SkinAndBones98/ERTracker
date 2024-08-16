import React from "react";
import CheckBox from 'react-custom-checkbox'

export function List(props) {
    const data = props.data
    console.log(data)
    return (
        <div className="List">
            {data[props.parentOption].map((key, index) => {
                return (
                    <div className='List Child' id={index} key={props.key1 + index}>
                        <CheckBox
                            label={<div key={props.key1 + index} style={{ color: 'white' }}>{key['location']}</div>}
                            checked={key['value'][props.secParentOption]}
                            onChange={e => {
                                const newParentData = data
                                newParentData[props.parentOption][index]['value'][props.secParentOption] = e
                                props.setParentOption(newParentData)
                                props.setKey1(props.key1 + data[props.parentOption].length)
                                localStorage.setItem('erdata', JSON.stringify(newParentData))
                            }}
                        />
                        <br />
                    </div>
                )
            })
            }
        </div>
    )
}