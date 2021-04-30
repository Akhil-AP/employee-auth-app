import React from 'react'
import {connect} from 'react-redux';

function Dashboard({isLogin , empData}) {
   

   if(isLogin){
       return (
        <div style={{textAlign:'center'}}>
            <h1>Employee Details</h1>
            <table class="center">
                <thead>
                    <tr >
                             <th> ID </th>
                             <th> NAME </th>
                             <th> AGE </th>
                             <th> GENDER </th>
                             <th> EMAIL </th>
                   </tr>
                </thead>
                <tbody>
                {
                    empData.map((empitem)=>{
                      return (
                          <tr key = {empitem.id}>
                             <td> {empitem.id} </td>
                             <td> {empitem.name} </td>
                             <td> {empitem.age} </td>
                             <td> {empitem.gender} </td>
                             <td> {empitem.email} </td>
                          </tr>
                      )
                    })
                }
                </tbody>
            </table>
        
        </div>
        
    )
   }
    else {
        return (
        <div style={{textAlign:'center'}}>
            <h1>You have to Login to view this page.</h1>
        
        </div>
        
    )
    }
}

const mapStatetoprops = (state) =>{
 console.log(state);
 return {isLogin: state.islogin , empData: state.employeejson}
}

export default connect(mapStatetoprops)(Dashboard);
