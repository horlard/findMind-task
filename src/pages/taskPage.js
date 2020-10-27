import React from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux'

import Header from '../components/Header'
import {appContext} from '../App';
import NewList from '../components/newList';
import CardList from '../components/cardList'




const AddBtn= styled.div`
    position: absolute;
    right:60px;
    bottom:60px;
    font-size: 55px;
    border: 1px solid #1C437E;
    background: #1C437E;
    padding: 2px 19px 2px 19px;
    border-radius:50%;
    color: #fff;
    cursor: pointer;
    font-weight: 600;
`

function taskPage(props) {
    return (
        <appContext.Consumer>
            
            {
                context=> (
                    <div>
                        <Header/>
                        <div style={{display:'flex',justifyContent: 'flex-start',alignItems: 'flex-start'}}>
                            {
                                props.names.map((name,i)=> {
                                    return <CardList key={i} name={name}/>
                                })
                            }
                            
                        </div>
                        
                        <AddBtn onClick={()=> context.openModal(<NewList/>)}>
                            +
                        </AddBtn>
                    </div>
                )
            }
            
        </appContext.Consumer>
        
    )
}

const mapStateToProps=state=> {
    return {names: state.NewListReducer}
}

export default connect(mapStateToProps)(taskPage)


