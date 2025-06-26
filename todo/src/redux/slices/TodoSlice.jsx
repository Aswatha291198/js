import {createSlice} from '@reduxjs/toolkit'

const TodoSlice=createSlice({
name:'todo',
initialState:{
    value:'',
    todosList:[],
    taskHeading:''
},
reducers:{
    addValue:(state,action)=>{
        console.log(action.payload,'from addValue')
        state.value=action.payload
    },
    addTask:(state,action)=>{
        console.log(state,'state from addtask');
        console.log(action.payload,'action payload from addtask');
        const tasks=action.payload
        state.todosList=[...state.todosList,tasks]
        console.log(state.todosList);
        state.value=''    
    },
    
}
})
 export const {addValue,addTask}=TodoSlice.actions
 export default TodoSlice.reducer