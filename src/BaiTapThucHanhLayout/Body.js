import React, { Component } from 'react'

export default class Body extends Component {

    renderBanner = () => {
        return (
            <div style={{ display: "block" }}>
                <h1>Welcome!</h1>
                <p>Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
                <button>Call To Action</button>
            </div>
        )
    }
    renderItem = () => {
        return (
            <div className="card text-left">
                <img className="card-img-top" src="./500x325.png" alt />
                <div className="card-body">
                    <h4 className="card-title">
                        Fresh new layout</h4>
                    <p className="card-text">With Bootstrap 5, we've created a fresh new layout for this template!</p>
                </div>
            </div>
        )
    }
    render() {
        return (
            <div className='container'>
                <div style={{ background: "#ced4da", margin: "55px 0", alignItems: "center", display: "block", padding: "100px" }} >{this.renderBanner()}</div>
                <div className='row' >
                    <div className='col-3'>{this.renderItem()}</div>
                    <div className='col-3'>{this.renderItem()}</div>
                    <div className='col-3'>{this.renderItem()}</div>
                    <div className='col-3'>{this.renderItem()}</div>
                </div>
            </div>
        )
    }
}
