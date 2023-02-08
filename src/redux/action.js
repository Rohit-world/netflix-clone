export const USER_Logged_In="USER_Logged_In"

export const LoggedIn=(payload)=>{
return{
payload,
type:USER_Logged_In
}
}