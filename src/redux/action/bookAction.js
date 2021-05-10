import axios from 'axios';

import {ADD_PASSCAT , FETCH_PASSCAT ,EDIT_PASSCAT , UPDATE_PASSCAT ,DELETE_PASSCAT} from './passType.js';


export const addPassCat=(category,user_id,password)=>{

  return function(dispatch){
    var OPTIONS= {
        method: 'POST',
        url: 'https://aspmsserver.herokuapp.com/api/addcategory',
        data:{password_category:category,user_id:user_id,password:password},
        headers: {
          'Content-Type': 'application/json'
        }
      };
var message;
      axios(OPTIONS).then(res=>
        {
          message=res.data.message;
          console.log(message);


          console.log(res);
          dispatch({
            type:ADD_PASSCAT,
            payload:category,
            password:password,
            msg:res.data.message
        })
        }).catch(err=>console.log(err));

      }

   
}



export const fetchPassCat=(user_id)=>{
console.log(user_id);
    return function(Dispatch){
    var OPTIONS= {
        method: 'GET',
        url: 'https://aspmsserver.herokuapp.com/api/getpasscat/'+ user_id,
    
        headers: {
          'Content-Type': 'application/json'
        }
      };

      axios(OPTIONS).then(res=>
        {
          
   

          Dispatch(getPassCat(res.data));

        }
      )
      .catch(err=>console.log(err));
      




}


}

export const getPassCat =(categories)=>{
    return {
        type:FETCH_PASSCAT,
        payload:categories
    }
}



export const editPassCat =(id,categories)=>{
  return {
      type:EDIT_PASSCAT,
      payload:categories
  ,id:id
    }
}



export const deletePassCat=(id)=>{

  var OPTIONS= {
    method: 'DELETE',
    url: 'https://aspmsserver.herokuapp.com/api/deletecategory',
    data:{id:id},
    headers: {
      'Content-Type': 'application/json'
    }
  };

  axios(OPTIONS).then(res=>
    console.log(res)).catch(err=>console.log(err));

  return {

      type:DELETE_PASSCAT,
      payload:id
 
    }
}