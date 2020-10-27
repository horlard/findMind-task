export const addNewList=(newListName)=> {
    return {
        type:'NEW_LIST',
        payload: newListName
    }
}

export const AddTask=(newTaskValue) => {
    return {
        type:'ADD_TASK',
        payload:newTaskValue
    }
}