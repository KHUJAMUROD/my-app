import { useState, Component, createContext } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

// class Form extends Component {

//     shouldComponentUpdate(nextProps) {
//         if (this.props.mail.name === nextProps.mail.name) {
//             return true;
//         }

//     }

//     render() {
//         console.log('render');


//         // const [text, setText] = useState('');

//         // const [textArea, setTextArea] = useState('');

//         // const input = useInputWithValidate('')
//         // const textArea = useInputWithValidate('')


//         // const color = input.validateInput() ? 'text-danger' : null;

//         // const myRef = useRef(1);

//         // useEffect(() => {
//         //   myRef.current
//         //   console.log(myRef.current);

//         // })

//         // const focusFirstTI = () => {
//         //     myRef.current.focus();
//         // }

//         return (
//             <Container>
//                 <form className="w-50 border mt-5 p-3 m-auto">
//                     <div className="mb-3">
//                         {/* <input type="text" value={`${input.value} / ${textArea.value}`} className='form-control' readOnly /> */}
//                         <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
//                         <input
//                             // onChange={input.onChange}
//                             type="email"
//                             value={this.props.mail.name}
//                             className='form-control'
//                             // className={`form-control ${color}`}
//                             id="exampleFormControlInput1"
//                             placeholder="name@example.com" />
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
//                         <textarea
//                             // onChange={textArea.onChange}
//                             value={this.props.text}
//                             // onClick={() => myRef.current + 1}
//                             className="form-control"
//                             id="exampleFormControlTextarea1"
//                             rows="3"></textarea>
//                     </div>
//                 </form>
//             </Container>
//         )
//     }
// }

// function useInputWithValidate(initialValue) {
//     const [value, setValue] = useState(initialValue);

//     const onChange = event => {
//         setValue(event.target.value);
//     }

//     const validateInput = () => {
//         return value.search(/\d/) >= 0 ? true : false;

//     }

//     return { value, onChange, validateInput }
// }

// function propsCompare (prevProps, nextProps) {
//     return prevProps.mail.name === nextProps.mail.name && prevProps.text === nextProps.text;
// }

const [data, setData] = useState({
    mail: "name@example.com",
    text: "some text"
});

const {Provider, Consumer} = dataContext;

const Form = (props) => {
    console.log('render');


    // const [text, setText] = useState('');

    // const [textArea, setTextArea] = useState('');

    // const input = useInputWithValidate('')
    // const textArea = useInputWithValidate('')


    // const color = input.validateInput() ? 'text-danger' : null;

    // const myRef = useRef(1);

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
                    {/* <input type="text" value={`${input.value} / ${textArea.value}`} className='form-control' readOnly /> */}
                    <label htmlFor="exampleFormControlInput1" className="form-label mt-3">Email address</label>
                    <InputComponent mail={props.mail} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea
                        value={props.text}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"></textarea>
                </div>
            </form>
        </Container>
    )
};

class InputComponent extends Component {
    render() {
        return (
            <input value={this.props.mail} className="form-control" placeholder="name@example.com" />
        )
    }
}

const dataContext = createContext({
    mail: "name@example.com",
    text: "some text"
});

function App() {

    // const [data, setData] = useState({
    //     mail: {
    //         name: "name@example.com"
    //     },
    //     text: "some text"
    // })

    return (
        <Provider value={data}>
            {/* <Form mail={data.mail} text={data.text} />
            <button onClick={() => setData({
                mail: {
                    name: "name@example.com"
                },
                text: "some text"
            })}> */}

            <Form mail={data.mail} text={data.text} />
            <button
                onClick={() => setData({
                    mail: "name@example.com",
                    text: "some text"
                })}>
                Click me
            </button>
        </Provider>
    );
};

export default App;
