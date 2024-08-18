import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Main from "./components/Main";

const App = () => {

    let [inputValue, setInputValue] = useState('');
    let [alert, setAlert] = useState({});
    let [placeholderClass, setPlaceholderClass] = useState('form-control px-4 py-2');
    let [darkMode, setDarkMode] = useState('white');
    let [darkText, setDarkText] = useState('black');
    let [textAreaMode, settextAreaMode] = useState('white');


    const showAlert = (type, message) => setAlert({ type: type, message: message })

    const handlerChange = (e) => setInputValue(e.target.value)

    const handlerUpper = () => {
        if (!inputValue) {
            showAlert('alert alert-danger', 'Text Field is Empty!')
            setTimeout(() => showAlert(''), 1800)
        }
        else {
            setInputValue(inputValue.toUpperCase())
            showAlert('alert alert-success', 'Text Converted to Uppercase')
            setTimeout(() => showAlert(''), 1800)
        }
    }

    const handlerLower = () => {
        if (!inputValue) {
            showAlert('alert alert-danger', 'Text Field is Empty!')
            setTimeout(() => showAlert(''), 1800)
        }
        else {
            setInputValue(inputValue.toLowerCase())
            showAlert('alert alert-success', 'Text Converted to Lowercase')
            setTimeout(() => showAlert(''), 1800)
        }
    }

    const handlerCapitalize = () => {
        if (!inputValue) {
            showAlert('alert alert-danger', 'Text Field is Empty!')
            setTimeout(() => showAlert(''), 1800)
        }
        else {
            let arrStr = inputValue.split(' ');
            let emptyArr = [];
            for (let k of arrStr) emptyArr.push(k.toUpperCase().slice(0, 1) + k.slice(1));
            let mainStr = emptyArr.join(' ');
            setInputValue(mainStr)
            showAlert('alert alert-success', 'Capitalized Each Word')
            setTimeout(() => showAlert(''), 1800)
        }
    }

    const handlerRemoveExtraSpaces = () => {
        if (!inputValue) {
            showAlert('alert alert-danger', 'Text Field is Empty!')
            setTimeout(() => showAlert(''), 1800)
        }
        else {
            setInputValue(inputValue.replace(/\s+/g, ' '))
            showAlert('alert alert-success', 'Extra Spaces has been Removed')
            setTimeout(() => showAlert(''), 1800)
        }
    }

    const handlerCopy = () => {
        if (!inputValue) {
            showAlert('alert alert-danger', 'Text Field is Empty!')
            setTimeout(() => showAlert(''), 1800)
        }
        else {
            navigator.clipboard.writeText(inputValue);
            showAlert('alert alert-info', 'Text Coppied to Clipboard');
            setTimeout(() => showAlert(''), 1800)
        }
    }

    const handlerClear = () => {
        if (!inputValue) {
            showAlert('alert alert-danger', 'Text Field is Empty!')
            setTimeout(() => showAlert(''), 1800)
        }
        else {
            setInputValue('')
            showAlert('alert alert-warning', 'Text Cleared!')
            setTimeout(() => showAlert(''), 1800)
        }
    }

    const handlerDark = () => {
        // useRef method is not working for changing placeholder styling

        if (darkMode === 'white') {
            document.body.style.backgroundColor = '#413e3e';
            setDarkMode('black');
            setDarkText('white');
            settextAreaMode('#6f6f6f');
            setPlaceholderClass('place form-control px-4 py-2')
            showAlert('alert alert-light ', 'Dark Mode has been Enabled')
            setTimeout(() => showAlert(''), 1800)
        }
        else {
            document.body.style.backgroundColor = 'white';
            setDarkMode('white');
            setDarkText('black')
            settextAreaMode('white');
            setPlaceholderClass('form-control px-4 py-2')
            showAlert('alert alert-dark', 'Dark Mode has been Disabled')
            setTimeout(() => showAlert(''), 1800)
        }
    }

    return (
        <>
            <Navbar darkText={darkText} darkMode={darkMode} handlerDark={handlerDark} />
            <Main alert={alert} handlerChange={handlerChange} inputValue={inputValue} handlerUpper={handlerUpper} handlerLower={handlerLower} handlerCapitalize={handlerCapitalize} handlerRemoveExtraSpaces={handlerRemoveExtraSpaces} handlerCopy={handlerCopy} handlerClear={handlerClear} placeholderClass={placeholderClass} textAreaMode={textAreaMode} darkText={darkText} />
        </>

    );
}

export default App;