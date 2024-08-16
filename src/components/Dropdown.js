import React from "react";
import Select from 'react-select';

export function Dropdown(props) {
    return (
        <div className="Dropdown">
            <Select
                value={props.parentOption}
                onChange={e => {props.setParentOption(e)}}
                options={props.options}
            />
        </div>
    )
}
