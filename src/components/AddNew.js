import React from "react";
import { CiSquarePlus } from "react-icons/ci";

export function AddNew(props){

    return(
        <CiSquarePlus onClick={()=>props.setOpen(true)} color="white" style={{flex: .5, height: '50%'}}/>
    )
}