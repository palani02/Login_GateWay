import React, { Component } from 'react'
class LoginComponent extends Component {
  constructor(props){
    super(props)
    this.state ={
        email:"",
        password:""
    }
}
emailHandler = (event) =>{
  this.setState({
    email:event.target.value
  })
}
passwordHandler = (event) =>{ 
  this.setState({
    password:event.target.value
    })
    }
loginSubmitHandler = (event)=>{
  event.preventDefault()
  console.log(this.state.email,
    this.state.password)
}
  render() {
    const {email,password} =this.state
    return (
      <form onSubmit={this.loginSubmitHandler}>
      <h3>Sign Up</h3>
      <div className='mb-3'>
          <label>Email</label>
          <input
          type='email'
          className='form-control'
          placeholder='Enter Your Email'
                      value={email}
          onChange={this.emailHandler}
          required/> 
      </div>
      <div className='mb-3'>
          <label>Password</label>
          <input
          type='password'
          className='form-control'
          placeholder='Enter The Password'
          value={password}
          onChange={this.passwordHandler}
          required/> 
      </div>
    <div className='mb-3'>
      <div className='custom-checkbox custom-control'>
        <input 
        type='checkbox' 
        className='custom-control-input'
         id='customCheck1' />
         <div className='custome-control-label' htmlFor='customCheck1'>
          <label>Remember me?</label>
         </div>
         <div className='d-grid'>
            <button type = "submit" className='btn btn-primary'>Sign Up</button>
        </div>
        <p className='forgot-password text-right'>Forgot<a href="#"> Password</a></p>
      </div>
    </div>
   </form>
    )
  }
}

export default LoginComponent