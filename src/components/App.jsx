import LoadingBar from "./LoadingBar.jsx";
import LeaderBoard from "./LeaderBoard.jsx";
import NewPoll from "./NewPoll.jsx";
import PollPage from "./PollPage.jsx";
import HomePage from "./HomePage.jsx";
import {useEffect, Fragment} from "react";
import {Routes, Route} from "react-router-dom";
import {handleInitialData} from "../actions/shared.js";
import { connect } from "react-redux";

function App(props){
  useEffect(()=>{
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar/>
      <div className="container">
        <Routes>
          <Route path="/"  element={<HomePage />} />
        </Routes>
      </div>
     
    </Fragment>
  );
}
export default connect()(App);

