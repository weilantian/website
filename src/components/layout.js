import React from "react";
import Header from "./header";
import {Helmet} from "react-helmet";

const Layout = ({title, children}) => {
    return <div>
        <Header/>
        <Helmet>
            <meta charSet="utf-8"/>
            <title>{title || "Eric Lantian Wei"}</title>
        </Helmet>
        <div>{children}</div>

    </div>
}

export default Layout
