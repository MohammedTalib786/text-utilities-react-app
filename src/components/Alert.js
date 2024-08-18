import React from 'react'

const Alert = ({ type, message }) => {
    return <div style={{ borderTopRightRadius: '0', borderTopLeftRadius: '0', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px' }} className={`${type} `} role="alert"> {message} </div>
}

export default Alert;