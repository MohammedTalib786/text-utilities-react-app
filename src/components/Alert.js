import React from 'react'

const Alert = ({ alert }) => {
    return (
        <div className="" style={{ height: '3.2rem' }}>
            {alert && <div className={`alert alert-${alert.type}`} role="alert">
                {alert.msg}
            </div>}
        </div>
    )
}

export default Alert;