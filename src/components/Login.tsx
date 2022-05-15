import React, { useEffect, useReducer } from 'react'

interface AuthState {
  validating:boolean;
  token:null|string;
  username:string;
  name:string;
}

type LoginPayload = {username:string,name:string}

type AuthAction = 
  | {type: 'LOGOUT'}
  | {type:'LOGIN', payload: LoginPayload}

const initialState:AuthState = {
  validating:true,
  token:null,
  username:'',
  name:''
}

const authReducer = (state:AuthState=initialState,action:AuthAction):AuthState=>{
  switch (action.type) {
    case 'LOGOUT':
      return {
        validating: false, 
        token:null,
        name:'', 
        username:''
      }
    case 'LOGIN':
      const {name,username} =action.payload
      return {
        validating: false, 
        token:'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
        name, 
        username, 
      }
  
    default:
      return state;
  }
}

export const Login = () => {
  const [{validating,token,name}, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    setTimeout(()=>{
      dispatch({type:'LOGOUT'})
    },1500)
  
  }, [])

  const login = ():void=>{
    dispatch({
      type:'LOGIN',
      payload:{
        name:'Jesus',
        username:'jesuscama@uni.pe'
      }
    })
  }

  const logout = ():void=>{
    dispatch({
      type:'LOGOUT',
    })
  }
  

  if(validating){
    return(
      <>
        <h3>Login</h3>
        <div className='alert alert-info'>
          Validating ...
        </div>
      </>
    )
  }

  return (
    <>
      <h3>Login</h3>

      {
        (token) 
          ?<div className='alert alert-success'>Authenticated as {name}</div>
          : <div className='alert alert-danger'>No authenticated</div>
      }

      {
        (token)
          ? (<button className='btn btn-danger' 
          onClick={logout}
          >
            Logout
          </button>)
          :(
            <button className='btn btn-primary' 
              onClick={login}
              >
                Login
            </button>
          )

      }
    </>
  )
}
