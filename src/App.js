import { useEffect, useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

function useInputWithValidate(initialValue) {
    const [value, setValue] = useState(initialValue);

    const onChange = event => {
        setValue(event.target.value);
    }

    const validateInput = () => {
        return value.search(/\d/) >= 0 ? true : false;

    }

    return { value, onChange, validateInput }
}

const Form = () => {

    // const [text, setText] = useState('');

    // const [textArea, setTextArea] = useState('');

    const input = useInputWithValidate('')
    const textArea = useInputWithValidate('')


    const color = input.validateInput() ? 'text-danger' : null;

    const myRef = useRef(1);

    // useEffect(() => {
    //   myRef.current
    //   console.log(myRef.current);

    // })

    // const focusFirstTI = () => {
    //     myRef.current.focus();
    // }

    return (
        <Container>
            <form className="w-50 border mt-5 p-3 m-auto">
                <div className="mb-3">
                    <input type="text" value={`${input.value} / ${textArea.value}`} className='form-control' readOnly />
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <input
                        onChange={input.onChange}
                        type="email"
                        value={input.value}
                        className={`form-control ${color}`}
                        id="exampleFormControlInput1"
                        placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea
                        onChange={textArea.onChange}
                        value={textArea.value}
                        onClick={() => myRef.current + 1}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
};

function App() {
    return (
        <Form />
    );
};

export default App;
