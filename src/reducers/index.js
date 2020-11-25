import {WITHDRAW_MONEY} from '../actions/test'

const initialState={
  userName:"AWOYOMI MAYOWA",
  accountBalance:2500701

}
export const reducers= (state = initialState,action)=>{
  console.log(action)
  console.log(state.accountBalance)
  console.log(state.accountBalance-action.payLoad)

  
  switch(action.type){
    case WITHDRAW_MONEY:
      return{
        ...state,
        accountBalance: state.accountBalance-action.payLoad
        
      };
     
      default:
        return state
  }

 
}

export default reducers