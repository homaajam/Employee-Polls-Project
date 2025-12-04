import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card.jsx";
import { useState } from "react";

const HomePage=({authedUser, questions, users})=>{
  const [activeTab, setActiveTab]=useState("unanswered");

  const answered=(q)=>(q.optionOne.votes.includes(authedUser.id) || q.optionTwo.votes.includes(authedUser.id));
  const unanswered=(q)=>(!q.optionOne.votes.includes(authedUser.id) && !q.optionTwo.votes.includes(authedUser.id))
  return(
  <div>
    <nav className="bg-gray-800 text-gray-200 px-8 py-6 flex justify-between items-center shadow-md">
      <div className="flex space-x-6 text-lg">
        <Link className="hover:text-white transition" to="/">Home</Link>
        <Link className="hover:text-white transition" to="/add">NewPoll</Link>
        <Link className="hover:text-white transition"to="/LeaderBoard">Leader Board</Link>
        

      </div>
    </nav>
    <div className="flex justify-center items-center min-h-screen bg-gray-900 px-4">
      <div className="bg-gray-800 shadow-lx rounded-xl p-8 w-full max-w-lg border border-gray-700">

        <div className="flex justify-center space-x-10 mb-6 text-lg font-semibold">
          <span onClick={()=>setActiveTab("unanswered")} className={
                "cursor-pointer pb-1 " +
                (activeTab==="unanswered"
                  ?"border-b-2 border-blue-500 text-white"
                  :"border-b-2 border-transparent text-gray-400 hover:border-gray-400")
              }>Unanswered</span>
          <span onClick={()=>setActiveTab("answered")} className={
                "cursor-pointer pb-1 "+
                (activeTab ==="answered"
                  ?"border-b-2 border-blue-500 text-white"
                  :"border-b-2 border-transparent text-gray-400 hover:border-gray-400")
              }>Answered</span>
        </div>

        {activeTab=== "unanswered" && (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions.filter(unanswered).map((question)=>(<li key={question.id}>
              <Card question={question} author={users[question.author]}/>
            </li>))}
          </ul>)
        }
        

        {activeTab=== "answered" && (
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions.filter(answered).map((question)=>(<li key={question.id}>
              <Card question={question} author={users[question.author]}/>
            </li>))}
          </ul>
        )}

      </div>
    </div>
    </div>
  )
    
}

const mapStateToProps = ({authedUser, questions, users}) => ({
    authedUser,
    questions: Object.values(questions).sort(
        (a, b) => b.timestamp - a.timestamp
    ),
    users,
});

export default connect(mapStateToProps)(HomePage);