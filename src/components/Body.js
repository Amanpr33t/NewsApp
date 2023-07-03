import React from "react"
import Card from "./Card"
import './Body.css'

function Body({ modalSetter, showModal }) {

    return (
        <React.Fragment>
            <div className={`card-container ${showModal ? 'blur' : ''}`} >
                <Card modalSetter={modalSetter} />
            </div>
        </React.Fragment>
    )
}
export default Body