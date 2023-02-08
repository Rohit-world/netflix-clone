import { USER_Logged_In } from "./action";

const intialState={
    token:""
}
const reducer=(state=intialState,action)=>{
switch(action.type){
    case USER_Logged_In:return{
        ...state,
        token:action.payload
    }
    default :return state
}

}

export default reducer