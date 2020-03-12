import { EMPLOYEE_FORM_UPDATE, CREATE_EMPLOYEE, EMPLOYEE_SAVE_SUCCESS } from '../actions/types'

const INITTIAL_STATE = {
    name : '',
    phone: '',
    shift: 'Monday'
};

export default (state = INITTIAL_STATE, action) =>{
    switch(action.type){
        case EMPLOYEE_FORM_UPDATE:
            return {...state, [action.payload.prop]: action.payload.value};
        case CREATE_EMPLOYEE:
            return INITTIAL_STATE;
        case EMPLOYEE_SAVE_SUCCESS:
            return INITTIAL_STATE;
        default:
            return state;
    }
}
