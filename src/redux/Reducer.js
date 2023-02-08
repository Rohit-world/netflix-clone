import { USER_Logged_In } from "./action";
import { User_logged_out } from "./action";

const intialState={
    token:""
}
const reducer=(state=intialState,action)=>{
switch(action.type){
    case USER_Logged_In:return{
        ...state,
        token:action.payload
    }
    case User_logged_out:{
        return{
            ...state,
            token:""
        }
    }
    default :return state
}

}

export default reducer