import firebase from 'firebase';
import { Actions }  from 'react-native-router-flux';
import {
    EMAIL_CHANGED, 
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER_LOADING
} from './types';

export const emailChanged = (text) =>{
    return {
        type: EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) =>{
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
}

export const loginUser = ({email, password}) =>{
    console.log('firebase started');
    
    return (dispatch)=>{
    dispatch({type: LOGIN_USER_LOADING}); 
    firebase.auth().signInWithEmailAndPassword(email,password)
    .then(user=>{
        console.log(user);
        console.log(user.uid);
        dispatch({ type: LOGIN_USER_SUCCESS, payload: user})
        Actions.main();
    })
    .catch(()=>{
        firebase.auth().createUserWithEmailAndPassword(email,password).then(user =>{
            dispatch({ type:LOGIN_USER_SUCCESS, payload:user })
            Actions.main();
        })
        .catch(()=>{
            console.log('fail to log in');
            loginUserFail(dispatch,'Authentication error')});
    });
        
   
}

}

const loginUserSuccess = ( dispatch, user) =>{
    dispatch({ type: LOGIN_USER_SUCCESS, payload: user})
}
const loginUserFail = (dispatch, error)=>{
    dispatch({type : LOGIN_USER_FAIL, payload: error})
}