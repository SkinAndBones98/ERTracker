import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export function PopupMenu(props) {
    console.log(props)
    return (
        <Popup open={props.open}>
            <div>
                <label style={{marginRight:'2%'}}>
                    Enter character name:
                </label>
                <input type='text' onChange={(e)=>props.onChange(e.target.value)}></input>
            </div>
            <div>
                <button style={{marginRight:'1%'}} onClick={props.onSubmit}>Submit</button>
                <button onClick={props.onCancel}>Cancel</button>
            </div>

        </Popup>
    )
}