import {receiveUsers} from "./users";
import {receiveQuestions} from "./questions";
import {getInitialData} from "../utils/api";
import { setAuthedUser } from "./authedUser";

export function handleInitialData(){
  return (dispatch)=>{
    return getInitialData().then(({users, questions})=>{
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      const defaultUserId = Object.keys(users)[0];
      dispatch(setAuthedUser(defaultUserId));
    });
  };
}