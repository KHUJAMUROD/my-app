import { useState} from 'react';
import dataContext from './context';
import Form from './Form';
import './App.css';



const { Provider } = dataContext;

// Form Component




function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: "some text"
    });

    function forceChangeMail() {
        setData({...data ,mail: 'test@gmail.com'});
    }

    return (
        <Provider value={data}>
            <Form text={data.text} />
            <button onClick={() => setData({
                mail: "updated@example.com",
                text: "new text"
            })}>
                Click me
            </button> 
        </Provider>
    );
}

export default App;
