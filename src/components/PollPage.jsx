import { handleAddAnswer } from "../actions/questions";
import { Connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const PollPage =({dispatch, authedUser, author, question})=>{
  const navigate = useNavigate();

  if(!authedUser || !question || !author){
    return <Navigate to="/404"/>;
  }

  const hasVotedForOptionOne= question.optionOne.votes.includes(authedUser.id);
  const hasVotedForOptionTwo= question.optionTwo.votes.includes(authedUser.id);
  const hasVoted= hasVotedForOptionOne || hasVotedForOptionTwo;

  const handleOptionOne=(e)=>{
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionOne"));
    navigate("/");
  };
  const handleOptionTwo=(e)=>{
    e.preventDefault();
    dispatch(handleAddAnswer(question.id, "optionTwo"));
    navigate("/");
  };
  const percentage=(answer, question)=>{
    allVotes=question.optionOne.votes.length + question.optionTwo.votes.length;
    switch(answer){
      case "optoinOne":
        votes=question.optionOne.votes.length;
      case "optionTwo":
        votes=question.optionTwo.votes.length;
      default:
        votes=0;
    }
    if(votes==0)
      return "";
    return (votes/allVotes)*100 + "%";
  };


  return(
    <div>
      <div className="flex justify-center">
        <h3>WOULD YOU RATHER?</h3>
        <h1 className="text-3xl font-bold mt-9">Poll by {author.id}</h1>
      </div>
      <div className="flex justify-center">
        <img src={author.avatarURL} alt="Profile" className="h-24 w-24"/>
      </div>
      <div>
        <button onClick={handleOptionOne} disabled={hasVoted}
             className={"p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition " + (hasVotedForOptionOne ? "bg-lime-400" : "")}>
          <div className={hasVotedForOptionOne ? "chosen" : ""}>
            <p className="font-bold mb-2">{question.optionOne.text}</p>
            {!hasVoted &&
            <p className="underline underline-offset-4 mb-3">Click</p>
            }
            {hasVoted &&
            <p className="text-xs">Votes:{question.optionOne.votes.length} ({percentage("optionOne", question)})</p>
            }
          </div>
        </button>
        <button onClick={handleOptionTwo} disabled={hasVoted}
             className={"p-2 rounded-xl bg-zinc-100 hover:shadow-xl transition " + (hasVotedForOptionTwo ? "bg-lime-400" : "")}>
          <p className="font-bold mb-2">{question.optionTwo.text}</p>
          {!hasVoted &&
          <p className="underline underline-offset-4 mb-3">Click</p>
          }
          {hasVoted &&
          <p className="text-xs">Votes: {question.optionTwo.votes.length} ({percentage("optionTwo", question)})</p>
          }
       </button>

      </div>
    </div>
  );

}
export default connect()(PollPage);