import React from "react";
import Classes from './styles.module.scss'

function Loader() {
    return (
        <div className={Classes.ldsRing}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default Loader;