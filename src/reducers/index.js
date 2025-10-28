import users from './users' ;
import authedUser from './authedUser';
import loading from './loading';
import questions from './questions';
import {configureStore} from 'redux';

export default configureStore({
  users,
  authedUser,
  loading,
  questions,
});