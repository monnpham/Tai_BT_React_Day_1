import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: "#495057", color: "white", justifyContent: "center", position: "fixed", bottom: "0", width: "100%", display: "block"
            }}>
                <p style={{ padding: "30px", margin: "0" }}>Copyright © Your Website 2023</p>
            </div>
        )
    }
}
