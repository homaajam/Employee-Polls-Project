import { handleAddAnswer } from "../actions/questions";
import { connect } from "react-redux";
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
    let allVotes=question.optionOne.votes.length + question.optionTwo.votes.length;
     let votes=0;
    switch(answer){
      case "optionOne":
        votes=question.optionOne.votes.length;
        break;
      case "optionTwo":
        votes=question.optionTwo.votes.length;
        break;
      default:
        votes=0;
    }
    if(votes==0)
      return "";
    return (votes/allVotes)*100 + "%";
  };


  return(
    
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <div className="bg-gray-800 shadow-lx rounded-xl p-8 w-full max-w-lg border border-gray-700">
        <div >
          <h3 className="text-3xl font-bold text-center mb-6 text-gray-200">WOULD YOU RATHER?</h3>
          <h1 className="text-3xl font-semibold text-gray-400">Poll by {author.id} </h1>
        </div>
        <div className="flex justify-center">
         <img src={author.avatarURL} alt="Profile" class="h-24 w-24 rounded-full border border-gray-600" />
        </div>
        <div class="space-y-4">
          <button onClick={handleOptionOne} disabled={hasVoted}
              className={"p-3 w-full rounded-xl text-left bg-gray-700 text-gray-200 hover:bg-gray-600 transition" + (hasVotedForOptionOne ? "bg-gray-600" : "")}>
            <div className={hasVotedForOptionOne ? "chosen" : ""}>
              <p className="font-bold mb-1">{question.optionOne.text}</p>
              {!hasVoted &&
              <p className="underline underline-offset-4 mb-1">Click</p>
              }
              {hasVoted &&
              <p className="text-xs text-gray-300">Votes:{question.optionOne.votes.length} ({percentage("optionOne", question)})</p>
              }
            </div>
          </button>
          <button onClick={handleOptionTwo} disabled={hasVoted}
              className={"p-3 rounded-xl text-left bg-gray-700 text-gray-200 hover:bg-gray-600 transition " + (hasVotedForOptionTwo ? "bg-gray-600" : "")}>
            <p className="font-bold mb-2">{question.optionTwo.text}</p>
            {!hasVoted &&
            <p className="underline underline-offset-4 mb-1">Click</p>
            }
            {hasVoted &&
            <p className="text-xs text-gray-300">Votes: {question.optionTwo.votes.length} ({percentage("optionTwo", question)})</p>
            }
          </button>

        </div>
      </div>
    </div>
  );

}


export default connect()(PollPage);