import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

const Home = ({isLogin , authuser}) => {
   
    if(isLogin){
   return ( <div style={{textAlign:'center'}}>
      <h1>Home Page</h1>
       <p>Welcome <b>{authuser.username}</b></p>
      <Link to='/dashboard'>
        Click here to go to Dashboard
      </Link>
    </div>
    )
    }
  return (
    <div style={{textAlign:'center'}}>
      <h1>Home Page</h1>
      <p>Welcome</p>
      <Link to='/login'>
        Click here to login
      </Link>
    </div>
  );
};

const mapStatetoprops = (state) =>{
 
 return {isLogin: state.islogin , authuser: state.authuser}
} 

export default connect(mapStatetoprops)(Home);
