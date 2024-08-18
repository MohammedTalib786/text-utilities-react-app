import React from 'react';
import '../style.css'
import Alert from './Alert'

const Main = (props) => {

    return (
        <>
            <div style={{ height: '60px' }} > {props.alert && <Alert type={props.alert.type} message={props.alert.message} />} </div>

            <div className="container p-4 " >
                <textarea className={`${props.placeholderClass}`} placeholder="Enter Your Text" rows="6" onChange={props.handlerChange} value={props.inputValue} style={{ backgroundColor: props.textAreaMode, color: props.darkText }}  ></textarea>

                <div className="Btns my-4 " style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
                    <button className='btn btn-primary ' onClick={props.handlerUpper} >Convert to UpperCase</button>
                    <button className='btn btn-primary ' onClick={props.handlerLower} >Convert to LowerCase</button>
                    <button className='btn btn-primary ' onClick={props.handlerCapitalize} >Capitalize Each Word</button>
                    <button className='btn btn-primary ' onClick={props.handlerRemoveExtraSpaces} >Remove Extra Spaces</button>
                    <button className='btn btn-primary ' onClick={props.handlerCopy} >Copy Text</button>
                    <button className='btn btn-primary ' onClick={props.handlerClear} >Clear Text</button>
                </div>

                <div className="pre">
                    <h2 style={{ color: props.darkText }} ><b>Preview: </b></h2>
                    <p style={{ color: props.darkText, fontSize: '1.15rem', fontWeight: 400 }}>{props.inputValue ? props.inputValue : 'Text Field is Empty'} </p>
                    <p style={{ color: props.darkText, fontWeight: 500 }}>Word Count: {!props.inputValue.length ? 0 : props.inputValue.split(' ').length} </p>
                    <p style={{ color: props.darkText, fontWeight: 500 }}>Character Count: {props.inputValue.length} </p>
                </div>
            </div>
        </>
    )
}

export default Main;