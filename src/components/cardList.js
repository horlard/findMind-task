import React from 'react'
import styled from 'styled-components';
import {connect} from 'react-redux'
import {AddTask} from '../actions'
import {appContext} from '../App'
import Detail from './details'
import uuid from 'react-uuid'

const Container = styled.div`
    width: 25%;
    border: 2px solid #1C437E;
    margin-top:10%;
    margin-left: 20px;

`;

const AddBtn= styled.div`
    border: 1px solid #1C437E;
    background: #1C437E;
    padding: 4px 23px;
    border-radius:50%;
    color: #fff;
    cursor: pointer;
    margin-right: 20px;
    font-size: 41px;
    font-weight: 600
`
const Header=styled.div`
    display:flex;
    margin-left: 20px;
    margin-top: 20px;
    
`
const H2=styled.h2`
    font-weight: 300;
    color: #1C437E;
    font-size:22px;

`;
const Input= styled.input`
    font-size: 30px;
    width: 82%;
    border:none;
    outline: none;
`;
const Ul =styled.ul`
    margin-left: -8px;

`
const Li=styled.li`
    font-size: 20px;
    list-style: none;
    font-weight: 300;
    color: #1C437E;
    &:not(:last-child) {
        margin-bottom: 35px;
    }
    cursor:pointer;
    margin-left: -1px;
    margin-top:30px;
`

const P =styled.p`
    color:#95A8B8;
    width: 100%;
    max-width: 100%;
    word-break: break-all;
    margin-top: -7px;
    font-size:18px;
    margin-bottom: 48px;
    
`

const Span =styled.span`
    border: 1px solid #1C437E;
    padding: 23px 23px;
    border-radius: 50%;
    margin-right: 20px;

`
const H3= styled.h3`
    font-size: 16px;
    margin-top: -37px;

`

const DetailsContainer=styled.div`
    display:flex;
    flex-direction:column;
    margin-top: -7px;
`


class CardList extends React.Component {
    state = {
        addTask: false,
        taskValue:'',
        tasks: [],
        details: '',
    }

    onTaskSubmit = taskValue => {
        if(taskValue==='') {
            console.log('nay')
        }else{
            this.setState(state=> ({
                addTask: false,
                taskValue:'',
                tasks: [...state.tasks, {name: state.taskValue, description: "", time: new Date().getTime(), id: uuid(),addDate:false}]
            }))
        }
        
        
    }

    onChooseDate=(value,id) => {
        this.setState(state => {
            const tasks = state.tasks.slice()
            const taskIndex = tasks.findIndex(t => t.id === id);
            if(taskIndex !== -1){
                const newTask = {...tasks[taskIndex]}
                let cdate= new Date(value)
                newTask.time = cdate.getTime()
                tasks[taskIndex] =  {...newTask}
            }
            return {
                ...state,
                tasks
            }
        })
    }
  

    onDescriptionSubmit(e){
        this.setState({details:e})
    }

    onDelete(index){
    const tasks= [...this.state.tasks]
    tasks.splice(index,1)
    this.setState({tasks})
    }

    onAddDate=(id)=> {
        this.setState(state => {
            const tasks = state.tasks.slice()
            const taskIndex = tasks.findIndex(t => t.id === id);
            if(taskIndex !== -1){
                const newTask = {...tasks[taskIndex]}
                newTask.addDate = true;
                tasks[taskIndex] =  {...newTask}
            }
            return {
                ...state,
                tasks
            }
        })
    }


    onCurrentDate=(id) => {
        this.setState(state => {
            const tasks = state.tasks.slice()
            const taskIndex = tasks.findIndex(t => t.id === id);
            if(taskIndex !== -1){
                const newTask = {...tasks[taskIndex]}
                newTask.time = new Date().getTime();
                tasks[taskIndex] =  {...newTask}
            }
            return {
                ...state,
                tasks
            }
        })
    }



    onSave = (value, id) => {
        this.setState(state => {
            console.log({value, id})
            const tasks = state.tasks.slice()
            const taskIndex = tasks.findIndex(t => t.id === id);
            if(taskIndex !== -1){
                const newTask = {...tasks[taskIndex]}
                newTask.description = value;
                tasks[taskIndex] =  {...newTask}
            }
            return {
                ...state,
                tasks
            }
        })
    }

    render () {
        const {addTask,taskValue}= this.state;
        return (
            <appContext.Consumer>
                {
                    context=> (
                        <Container>
                            <H2 style={{marginLeft: '28px'}}>{this.props.name}</H2>
                            <Header>
                            {
                                !addTask ? <AddBtn onClick={()=> this.setState({addTask:true})}> + </AddBtn> : <span></span>
                            }
                
                            {
                                addTask ? <Input placeholder='Add Task' onChange={e=> this.setState({taskValue:e.target.value})} value={taskValue} autoFocus/> : <H2>Add a task</H2>
                            }
                            {
                                addTask ? <AddBtn onClick={()=>this.onTaskSubmit(taskValue)}> + </AddBtn> : <span></span>
                            }
    
                
                            </Header>
                <Ul>
                {
                    this.state.tasks.map((task,i)=> {
                        console.log(new Date(task.time))
                        const time= JSON.stringify(new Date(task.time).toDateString())
                        return (
                            <Li key={i} style={{display:'flex',alignItems:'flex-start',marginTop:'0px',marginBottom:'-13px',width:'75%'}}>
                            <Span/>
                            <DetailsContainer>
                            <H2 onClick={()=> context.openModal(<Detail close={context.closeModal} delete={this.onDelete.bind(this,i)} task={task} addDate={this.onAddDate} onDescriptionSubmit={this.onDescriptionSubmit.bind(this)} onSave={this.onSave} onChooseDate={this.onChooseDate} onCurrentDate={this.onCurrentDate}/>)}>{task.name}</H2>
                            <P>{task.description}</P>
                            {
                                task.addDate ? <H3>{time}</H3> :  <></>
                            }
                            </DetailsContainer>

                            </Li>
                    )
                    })
                }
                </Ul>
                
                
            </Container>
                    )
                }
            
            </appContext.Consumer>
            
        )
    }
    
}

const mapStateToProps=state=> {
    return {newTasks: state.NewTaskReducer}
}

export default connect(mapStateToProps,{AddTask})(CardList)
