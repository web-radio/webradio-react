import React from 'react';
import Search from "./Search";

const Topbar = props => {
    return (
        <div className="topbar">
            <span className="logo">Webradio</span>
            <Search getInputValue={props.getInputValue}/>
        </div>
    )
};

export default Topbar;
