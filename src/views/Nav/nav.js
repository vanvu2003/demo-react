import React from "react";
import './nav.css'
class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <a className="active" href="/">Home</a>
                <a href="/todos">Todos</a>
            </div>
        )
    }
}

export default Nav;