import LoadingBar from "./LoadingBar.jsx";
import LeaderBoard from "./LeaderBoard.jsx";
import NewPoll from "./NewPoll.jsx";
import PollPage from "./PollPage.jsx";
import NavBar from "./NavBar.jsx";
import HomePage from "./HomePage.jsx";
import Login from "./Login.jsx";
import Error from "./Error.jsx";
import {useEffect, Fragment} from "react";
import {Routes, Route} from "react-router-dom";
import {handleInitialData} from "../actions/shared.js";
import { connect } from "react-redux";

function App({dispatch, loggedIn}){
  useEffect(()=>{
    dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar/>
      <div className="container">
        {loggedIn && <NavBar/>}
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path="/"  element={<HomePage />} />
          <Route path="questions/:id" element={<PollPage/>} />
          <Route path="/leaderboard" element={<LeaderBoard/>} />
          <Route path="/add" element={<NewPoll/>} />
          <Route path="/404" element={<Error/>}/>
        </Routes>
      </div>
     
    </Fragment>
  );
}
const mapStateToProps=({authedUser})=> ({
    loggedIn: !!authedUser,
});
export default connect(mapStateToProps)(App);

