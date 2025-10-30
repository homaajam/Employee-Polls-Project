import { useState } from "react";
import {connect} from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import {useNavigate} from "react-router-dom";
const NewPoll= ({dispatch})=>{
  const navigate = useNavigate();
  const [firstOpt, setFirstOpt]=useState("");
  const [secondOpt, setSecondOpt]=useState("");

  const handleFirstOpt=(e)=>{
    const value=e.target.value;
    setFirstOpt(value);
  }
  const handleSecondOpt=(e)=>{
    const value=e.target.value;
    setSecondOpt(value);
  }
  const handleAddbutton=(e)=>{
    e.preventDefault();
    dispatch(handleAddQuestion(firstOpt,secondOpt));
    navigate("/");
  }
  



  return(
    <div>
      <h3 className="new-poll">NEW POLL</h3>

      <p id="1-opt">First option:</p>
      <textarea className="textarea-opt-one"
      placeholder="text"
      value={firstOpt}
      onChange={handleFirstOpt}></textarea>

      <p id="2-opt">Second option:</p>
      <textarea className="textarea-opt-two"
      placeholder="text"
      value={secondOpt}
      onChange={handleSecondOpt}></textarea>

      <button className="add-button" onClick={handleAddbutton}>ADD</button>
    </div>

  );
}

export default connect()(NewPoll);