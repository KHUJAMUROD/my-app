import React, { Component } from "react";
import styled from 'styled-components';
import BootstrapTest from './Bootstraptest';
import {Container} from 'react-bootstrap';
import './App.css';

// import logo from './logo.svg';

// import { Component, StrictMode } from 'react';

// const Header = () => {
//   return <h2>Hello World</h2>
// }

// // const Field = () => {
// //   const holder = 'Enter here'
// //   const styleField = {
// //     width: '300px',
// //   }

// //   return <input
// //     placeholder={holder}
// //     type='text'
// //     style={styleField}></input>
// // }


// class Field extends Component {
//   render() {
//     const holder = 'Enter here'
//     const styleField = {
//       width: '300px',
//     }

//     return <input
//       placeholder={holder}
//       type='text'
//       style={styleField}></input>
//   }
// }


// // keep123456789

// const Btn = () => {
//   const text = 'Log in'
//   const logged = false
//   // const res  = () => {
//   //   return 'Log in'
//   // }

//   // const p = <p>Log in</p>
//   const loggedSucces = 'Enter'

//   if (logged) {
//     return <button>{loggedSucces}</button>
//   } else {
//     return <button>{text}</button>
//   }

//   return <button>{logged ? 'Enter' : text}</button>
// }

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }

// function App() {
//   return (
//     <div className='App'>
//       <StrictMode>
//         <Header />
//       </StrictMode>
//       <Field />
//       <Btn />
//     </div>
//   );
// }


// export { Header }
// export default App;


// function WhoAmI({ name, surname, link }) {
//   return (
//     <div>
//       <h1>My name is, {name()} surname  - {surname} </h1>
//       <a href={link}>My profile</a>
//     </div>
//   )
// }

const EmpItem = styled.div`
    padding : 20px; 
    margin-bottom : 15px;
    border-radius : 5px;
    box-shadow: 5px 5px 10px rgba(0,0,0, 0.2);  
     `


const Header = styled.h2`
    font-size : 22px; 
  `

export const Button = styled.button`
  display: block;
  padding: 5px 15px;
  background-color : gold;
  border: 1px solid rgba(0,0,0,0.2);
  box-shadow : 5px 5px 10px rgba(0,0,0,0.2);
  `

class WhoAmI extends Component {
  constructor(props) {
    super(props)
    this.state = {
      years: 27,
      text: "+++",
      position: "",
    }

    // this.nextYear = this.nextYear.bind(this)
  }



  // nextYear() {
  //   this.setState(state => ({
  //     years: state.years + 1
  //   }))
  // }

  nextYear = () => {
    // console.log('+++');
    // this.state.years++ //error
    // this.setState({
    //   years: this.state.years + 1
    //   // years: ++this.state.years
    // })
    this.setState(state => ({
      years: state.years + 1
      // years: ++this.state.years
    }))
  }

  commitInputChanges = (e, color) => {
    // console.log(e.target.value),
    console.log(color)

    this.setState({
      position: e.target.value
    })

  }




  render() {
    const { name, surname, link } = this.props
    const { position, years } = this.state

    // console.log(this);


    return (
      <EmpItem>
        {/* <button onClick={this.nextYear}>+++</button> */}
        {/* <button onClick={this.nextYear}>{this.state.text}</button> */}
        <Button onClick={() => this.nextYear()}>{this.state.text}</Button>
        {/* <h1>My name is, {name()} surname  - {surname} </h1> */}
        <Header>My name is, {name} surname  - {surname}  age - {years}, position - {position} </Header>
        <a href={link}>My profile</a>
        <form>
          <span>Your Status</span>
          {/* <input type="text" onChange={this.commitInputChanges} /> */}
          <input type="text" onChange={(e) => this.commitInputChanges(e, 'red')} />
        </form>
      </EmpItem>
    )
  }
}

const Wrapper = styled.div`
    width: 600px;
    margin: 80px auto 0 auto; 
`;

const DynamicGreating = (props) => {
  return (
    <div className={'mb-3 p-3 border border-' + props.color}>
      {
        React.Children.map(props.children, (child) => {
          return React.cloneElement(child, { className: 'shadow p-3 m-3 border rounded' })
        })
      }
    </div>
  )
}

const HelloGreating = () => {
  return (
    <div style={{ 'width': '600px', 'margin': '0 auto' }}>
      <DynamicGreating color={'primary'}>
        <h2>Hello world!</h2>
      </DynamicGreating>
    </div>
  )
}

const Message = (props) => {
  return (
    <h2>The counter is {props.counter}</h2>
  )
}

class Counter extends Component {
  state = {
    counter: 0
  }

  changeCounter = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }))
  };

  render() {
    return (
      <>
        <button
          className={'btn btn-primary'}
          onClick={this.changeCounter}>
          CLick me
        </button>
        {this.props.some(this.state.counter)}
        {this.props.some(this.state.counter)}
      </>
    )
  }
}

function App() {
  return (
    <Wrapper>

      <Counter some={counter => (
        <Message counter={counter} />
      )} />

      {/* <WhoAmI name={{firstname: "Murod"}} surname="Xujanov" link="instagramm.com" /> */}
      {/* <WhoAmI name={{firstname: "UZGAMER"}} surname="Baratov" link="vk.com" /> */}
      {/* <WhoAmI name={() => { return 'DalerCheff' }} surname="Aslidinov" link="vk.com" /> */}
      <HelloGreating />
      <BootstrapTest
        left={
          <DynamicGreating color={'primary'}>
            <h2>This weel was hard</h2>
            <h2>Hello world!</h2>
          </DynamicGreating>
        }

        right={
          <DynamicGreating color={'primary'}>
            <h2>RIGHT!</h2>
          </DynamicGreating>
        }

      />

      <WhoAmI name='DalerCheff' surname="Aslidinov" link="vk.com" />
      <WhoAmI name="Ulug'bek" surname="AirJordan" link="vk.com" />
    </Wrapper>
  )
}





export default App;


// Page
//     div

// Page
//     form

// Page
//     span
