import React, { useState, useEffect } from 'react';
import Headerbar from "../Headerbar";
import { Outlet } from 'react-router-dom';
import { useMaxMediaQuery } from "../../hooks/useMediaQuery";

const Layout = () => {
    const [ windowReadyFlag, setWindowReadyFlag ] = useState(false);

    const isMobile = useMaxMediaQuery('sm');
    useEffect(
        () => {
            if (typeof window !== 'undefined') {
                setWindowReadyFlag(true);
            }
        },
        // eslint-disable-next-line
        [ ]
    );

    if (windowReadyFlag) {
        return <>
            {!isMobile ? <Headerbar/> : null}

            <Outlet />
        </>;
    } else {
        return null;
    }
};

export default Layout;