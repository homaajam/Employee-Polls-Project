import { saveQuestion, saveAnswer } from "../utils/api";
import { hideLoading,showLoading } from "./loading";
export const RECEIVE_QUESTIONS="RECEIVE_QUESTIONS";
export const ADD_QUESSTION="ADD_QUESTION";
export const ADD_ANSWER="ADD_ANSWER";

export function receiveQuestion(questions){
  return {
    type:RECEIVE_QUESTIONS,
    questions,
  };
}

export function addQuestion(question){
  return {
    type:ADD_QUESSTION,
    question,
  };
}

export function handleAddQuestion(optionOneText, optionTwoText){
  return (dispatch, getState)=>{
     const {authedUser}=getState();

    dispatch(showLoading());

    return saveQuestion({optionOneText, optionTwoText,author:authedUser}).then((question)=>{
      dispatch(addQuestion(question));
    }).then(()=> dispatch(hideLoading()));
  };
}

export function addAnswer({authedUser, qid, answer}){
  return {
    type:ADD_ANSWER,
    authedUser,
    qid,
    answer,
  };
}

export function handleAddAnswer(questionId,answer){
  return (dispatch,getState)=>{
    const {authedUser}= getState();
    dispatch(showLoading());

    return saveAnswer({authedUser,questionId,answer}).then(()=>{
      dispatch(addAnswer(answer))
    });

  }
}