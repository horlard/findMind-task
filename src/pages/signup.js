import React, { Component } from 'react';
import InputForm from '../components/Input'
import styled from 'styled-components'
import History from '../components/history';




const Container =styled.div`
 background: #1C437E;
 height:100vh;
`
const Form =styled.form`
    position:absolute;
    width:60%;
    top:40%;
    left:62%;
    transform: translate(-50%,-50%)

`;

const H2=styled.h2`
    color: #fff;
    text-align:center;
    margin-left:-46%;
    font-size:40px

`;

const Button =styled.button`
    text-align:center;
    margin-left:17%;
    margin-top:7%;
    font-size: 23px;
    font-weight: 700;
    font-family: inherit;
    color:#1C437E;
    padding: 7px 60px;
`;


export default class signup extends Component {

    state={
        username:'',
        email:'',
        password:'',
        SignupValues:{
            username:'',
            email:'',
            password:''
        }
    }

    onEmailChange=(term)=> {
        this.setState({email: term})
    }
    onPasswordChange=(term)=> {
         this.setState({password:term})
    }
    onUserChange=(term)=> {
        this.setState({username:term})
    }

    onSubmit=(e)=> {
        e.preventDefault()
        
        this.setState(state=>({
            SignupValues : {
                username:state.username,
                email: state.email,
                password:state.password
            }
        }),(()=>{
            localStorage.setItem('SignupValues',JSON.stringify(this.state.SignupValues))
            return History.push('/taskpage')
        }))
        
    }


    render() {
        return (
            <div>
                <Container>
                
                <Form onSubmit={this.onSubmit}>
                <H2>Sign up</H2>
                <InputForm signup='true' 
                onUserChange={this.onUserChange} 
                onPasswordChange={this.onPasswordChange} 
                onEmailChange={this.onEmailChange}
                username={this.state.username}
                password={this.state.password}
                email={this.state.email}
                />
                <Button>Sign up</Button>
                </Form>
            </Container>
            </div>
        )
    }
}
