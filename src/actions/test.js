export const WITHDRAW_MONEY ="WITHDRAW_MONEY"

export const withdrawMoney = (amount)=>{
    return{
        type: WITHDRAW_MONEY,
        payLoad:amount
    }

}