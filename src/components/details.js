import React,{useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '../assets/close.png'
import DeleteIcon from '../assets/delete.png'



const Container=styled.div`
    padding: 30px 37px 20px 37px;

`
const Header=styled.div`
    display:flex;
    justify-content: space-between;
`
const Img=styled.img`
    width: 6%;
    cursor:pointer;
    
`
const Main =styled.div`


`
const TextArea=styled.textarea`
    width:100%;
    min-height: 145px;
    max-height: 160px;
    max-width:540px;
    padding: 20px 0 0 20px;
    font-size: 20px;
    background: #F0F5FB;
    border: none;
    outline: none;
    color: #96A8C0;
`;

const H2=styled.h2`
    font-weight: 300;
    color: #1C437E;
    cursor: pointer;

`;
const Span =styled.span`
    font-size: 16px;
    cursor: pointer;

`


export default function Details(props) {
    const [chooseDate,setChooseDate]= useState(false)
    const onDelete=()=> {
        props.delete()
        props.close()
    }
    const cDate=() => {
        setChooseDate(true)
    }
    const onChangeHandler=(e,i)=> {
        props.onChooseDate(e,i)
        props.addDate(i)
    }
    const currentDate=(i)=> {
        props.addDate(i)
        props.onCurrentDate(i)
    }
    return (
       <Container>
           <Header>
                <Img src={DeleteIcon} onClick={()=>onDelete()}/>
                <Img src={CloseIcon} onClick={()=> props.close()}/>
           </Header>
           <Main>
                <H2>{props.task.name}</H2>
                <TextArea placeholder='Add details' defaultValue={props.task.description} onChange={(e)=> props.onSave(e.target.value, props.task.id)}/>
                <H2 onClick={()=>currentDate(props.task.id) }>
                    Add  current date
                </H2>
                <H2 onClick={()=>cDate() }>
                    Choose date
                </H2>
                {
                    chooseDate ? <><input type='date' onChange={e=>onChangeHandler(e.target.value,props.task.id) }/> {''} <Span onClick={()=> setChooseDate(false)}>x</Span></> : <></>
                }
                {/* <H2 onClick={()=>props.onSave()}>Save</H2> */}
                <H2 onClick={()=> props.close()}>Move to another list</H2>
           </Main>
       </Container>
    )
}
