export const LoginPage=(data)=>{
  
  return dispatch=>{
    return dispatch({
      type:'LoginPage',
      payload:data
    })
  }
}

export const get_page = task => ({
  type: 'getPage',
  task
});
export const get_data = task => ({
  type: 'getData',
  task
});
export const RegisterPage=(data)=>{
  return dispatch=>{
    return dispatch({
      type:'RegisterPage',
      payload:data
    })
  }
}
export const Welcome=(data)=>{
  
  return dispatch=>{
    return dispatch({
      type:'Welcome',
      payload:data
    })
  }
}