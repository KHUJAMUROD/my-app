import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'react-bootstrap';
import './App.css';

class Form extends Component {
    // myRef = React.createRef();
    // // mySecondRef = React.createRef();

    // componentDidMount() {
    //     this.myRef.current.focus();
    // }
    setInputRef = elem => {
        this.myRef = elem;
    }
    focusFirstTI = () => {
        if (this.myRef) {
            this.myRef.current.focus();
        }
    }

    render() {
        return (
            <Container>
                <form className="w-50 border mt-5 p-3 m-auto"
                    style={{
                        'overflow': 'hidden',
                        'position': 'relative'
                    }}>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input
                            ref={this.setInputRef}
                            type="email"
                            className="form-control"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea onClick={this.focusFirstTI} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                </form>
            </Container>
        )
    }
}

// class TextInput extends Component {

//     doSmth = () => {
//         console.log('smth');

//     }
//     render() {
//         return (

//         )
//     }
// }

const Msg = () => {
    return (
        <div
            style={{
                'width': '500px',
                'height': '150px',
                'backgroundColor': 'red',
                'position': 'absolute',
                'right': '-50%',
                'bottom': '-50%'
            }}>
            Hello
        </div>
    )
}

function App() {
    return (
        <Form />
    );
}

export default App;
