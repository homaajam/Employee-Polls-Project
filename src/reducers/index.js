import users from './users' ;
import authedUser from './authedUser';
import loading from './loading';
import questions from './questions';
import { combineReducers } from 'redux';

export default combineReducers({
    users,
    authedUser,
    loading,
    questions,
  });
