import React from "react"
import style from '../Style/modal.css'

function Modal(props) {

    return (
        <div className="OVERLAY">
            <div className="MODAL">
                <button className="BUTTON" onClick={() => { props.setClicked(false) }}>X</button>
                <iframe title="trailer" id="trailer" src={props.videoUrl} allowFullScreen width='100%' height='450'/>
            </div>
        </div>
    )
}

export default Modal;