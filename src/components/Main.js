import React, { useState } from 'react';

const Main = ({ darkMode, darkText, textAreaMode, setAlert, showAlert }) => {
    const [textAreaText, setTextAreaText] = useState('')
    const handlerChange = (e) => {
        // console.log(e.target.value)
        setTextAreaText(e.target.value)
    }

    const handlerUpper = () => {
        setTextAreaText(textAreaText.toUpperCase())
        showAlert('primary', 'Text Converted to Uppercase')
        setTimeout(() => {
            setAlert(null)
        }, 1500)
    }

    const handlerLower = () => {
        setTextAreaText(textAreaText.toLowerCase());
        showAlert('primary', 'Text Converted to Lowercase')
        setTimeout(() => {
            setAlert(null)
        }, 1500)
    }

    const handlerCapitalize = () => {
        let a = textAreaText.split(' ')
        let emp = [];
        for (let k of a) {
            let i = k.toUpperCase().slice(0, 1) + k.slice(1).toLowerCase()
            emp.push(i)
        }
        let res = emp.join(' ');
        setTextAreaText(res);

        showAlert('primary', 'Capitalized Each Text')
        setTimeout(() => {
            setAlert(null)
        }, 1500)
    }

    const handlerExtSpc = () => {
        let regex = /\s+/gi
        setTextAreaText(textAreaText.replace(regex, ' '))
        showAlert('success', 'Extra Spaces has been Removed')
        setTimeout(() => {
            setAlert(null)
        }, 1500)
    }

    const handlerCopy = () => {
        navigator.clipboard.writeText(textAreaText)
        showAlert('success', 'Text Copied to Clipboard!')
        setTimeout(() => {
            setAlert(null)
        }, 1500)
    }

    const handlerClear = () => {
        setTextAreaText('')
        showAlert('warning', 'Text Cleared!')
        setTimeout(() => {
            setAlert(null)
        }, 1500)
    }

    return (
        <>
            <div className="container p-4 " >
                <textarea className="form-control px-4 py-2  " placeholder="Enter Your Text" rows="8" onChange={handlerChange} value={textAreaText} style={{ backgroundColor: textAreaMode, color: darkText }} ></textarea>
                <div className="Btns my-4 " style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
                    <button className='btn btn-primary ' disabled={textAreaText.length === 0} onClick={handlerUpper} >Convert to UpperCase</button>
                    <button className='btn btn-primary ' disabled={textAreaText.length === 0} onClick={handlerLower} >Convert to LowerCase</button>
                    <button className='btn btn-primary ' disabled={textAreaText.length === 0} onClick={handlerCapitalize} >Capitalize Each Word</button>
                    <button className='btn btn-primary ' disabled={textAreaText.length === 0} onClick={handlerExtSpc} >Remove Extra Spaces</button>
                    <button className='btn btn-primary ' disabled={textAreaText.length === 0} onClick={handlerCopy} >Copy Text</button>
                    <button className='btn btn-primary ' disabled={textAreaText.length === 0} onClick={handlerClear} >Clear Text</button>
                </div>
                <div className="pre">
                    <h2 style={{ color: darkText }} ><b>Preview: </b></h2>
                    <p className='' style={{ color: darkText, fontSize: '1.15rem', fontWeight: 400 }}>{textAreaText ? textAreaText : 'Nothing to Show'} </p>
                    <p style={{ color: darkText, fontWeight: 500 }}>Word Count: {!textAreaText ? 0 : textAreaText.split(' ').length}</p>
                    <p style={{ color: darkText, fontWeight: 500 }}>Character Count: {textAreaText.length} </p>
                </div>
            </div>
        </>
    )
}

export default Main;