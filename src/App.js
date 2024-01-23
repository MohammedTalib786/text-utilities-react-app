import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Alert from './components/Alert';
const App = () => {
    // #c3c3c3
    const [darkMode, setDarkMode] = useState('white');
    const [darkText, setDarkText] = useState('black');
    const [textAreaMode, settextAreaMode] = useState('white');
    const [alert, setAlert] = useState('');

    const showAlert = (type, msg) => {
        setAlert({
            type: type,
            msg: msg
        })
    }


    const handlerDark = () => {
        if (darkMode === 'white') {
            document.body.style.backgroundColor = '#413e3e';
            setDarkMode('black');
            setDarkText('white');
            settextAreaMode('#6f6f6f');

            showAlert('success', 'Darkmode has been Enabled')

            setTimeout(() => {
                setAlert(null)
            }, 1500)


        }
        else {
            document.body.style.backgroundColor = 'white';
            setDarkMode('white');
            setDarkText('black')
            settextAreaMode('white');

            
            showAlert('success', 'Darkmode has been Disabled')

            setTimeout(() => {
                setAlert(null)
            }, 1500)

        }
    }

    return (
        <>
            <Navbar darkMode={darkMode} darkText={darkText} handlerDark={handlerDark} />
            <Alert alert={alert} />
            <Main setAlert={setAlert} showAlert={showAlert}  darkMode={darkMode} darkText={darkText} textAreaMode={textAreaMode} />
        </>

    );
}

export default App;