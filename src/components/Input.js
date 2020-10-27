import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';


const Field=styled.fieldset`
    width:50%;
    margin-bottom:20px;

`;

const Legend=styled.legend`
    text-align:center;
    color: #fff;
`;

const Check=styled.input`
    display:none;
    :checked + span::after {
     content:'';
     position:absolute;
     top:50%;
     left:50%;
     border-left:1px solid #fff;
     border-bottom:1px solid #fff;
     width:15px;
     height:7px;
     transform: translate(-50%,-70%) rotate(-50deg);
    }

`
const Span =styled.span`
 width:20px;
 height:20px;
 background:transparent;
 border:1px solid #fff;
 display:inline-block;
 position: absolute;
 top:0;
 left:0;

`

const Label=styled.label`
    position: relative;
`;

const TextInput=styled.input`
    width:100%;
    border:none;
    outline:none;
    padding-left:10px;
    font-size:16px;
    font-family:inherit;
    margin-top:-12px;
    color:#fff;
    background:none;
`




const InputForm=(props)=> {
    if(props.signup==='true') {
        return (
            <>
            <Field>
                <Legend>Username</Legend>
                <TextInput type='text' 
                required 
                autocomplete="off" 
                onChange={e=>props.onUserChange(e.target.value)} 
                value={props.username}/>
            </Field>
            <Field>
                <Legend>Email Address</Legend>
                <TextInput type='email' 
                required 
                autocomplete="off" 
                onChange={e=>props.onEmailChange(e.target.value)} 
                value={props.email}/>
            </Field>
            <Field>
                <Legend>Password</Legend>
                <TextInput type='password' 
                required 
                autocomplete="off" 
                onChange={e=>props.onPasswordChange(e.target.value)} 
                value={props.password}/>
            </Field>
            <div style={{display:'flex',justifyContent:'space-between',width:'54%',marginTop:'20px'}}>
            <Label>
                <Check type='checkbox' id='check'/>
                <Span/>
                <span style={{marginLeft:'28px', color:'#fff',marginTop:'-10px',display:'inline-block',fontSize:'14px'}}>I accept the terms and conditions</span>
            </Label>
            <Link style={{color:'#fff',fontSize:'14px'}} to='/'>Have an Account? Log in</Link>
            </div>
            
            </>
        )
    }else {
        return (
            <>
                <Field>
                    <Legend>Email Address</Legend>
                    <TextInput type='email' 
                    required 
                    autocomplete="off" 
                    onChange={e=> props.onEmailChange(e.target.value)} 
                    value={props.email}
                    />
                </Field>
                <Field>
                    <Legend>Password</Legend>
                    <TextInput type='password' req
                    ired autocomplete="off" 
                    onChange={e=>props.onPasswordChange(e.target.value)} 
                    value={props.password}
                    />
                </Field>
                <div style={{display:'flex',justifyContent:'space-between',width:'54%',marginTop:'20px'}}>
                <Label>
                    <Check type='checkbox' id='check'/>
                    <Span/>
                    <span style={{marginLeft:'28px', color:'#fff',marginTop:'-10px',display:'inline-block',fontSize:'14px'}}>Remember me</span>
                </Label>
                <Link style={{color:'#fff',fontSize:'14px'}} to='/signup'>Create an Account</Link>
                </div>
                
                
                
    
            </>
        )
    }
    
    
}


export default InputForm;