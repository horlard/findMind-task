import React,{useState} from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux';
import {addNewList} from '../actions'
import {appContext} from '../App'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    width:100%;
    margin: 0 63px;
`;

const AddBtn= styled.div`
    font-size: 39px;
    border: 1px solid #1C437E;
    background: #1C437E;
    padding: 1px 15px 1px 15px;
    border-radius:50%;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
`
const Input= styled.input`
    font-size: 30px;
    width: 82%;
    border:none;
    outline: none;
`

const NewList=(props)=> {
    const [listName,setListName] = useState('')
    const AddList=(listName,context)=> {
        if(listName==='') {
            console.log('nay')
        }else {
            props.addNewList(listName)
            context.closeModal()
        }
        
    }
    return (
        <appContext.Consumer>
            {
                context=> (
                    <Container>
                        <Input placeholder='New List' onChange={e=> setListName(e.target.value)} value={listName} autoFocus/>
                        <AddBtn onClick={()=> AddList(listName,context)}> + </AddBtn>
                    </Container>
                )
            }
            
        </appContext.Consumer>
        
    )
}

const mapStateToProps=state=> {
    return {newList: state.NewListReducer}
}


export default connect(mapStateToProps,{addNewList})(NewList)