import LoadingBar from "./LoadingBar.jsx";
import LeaderBoard from "./LeaderBoard.jsx";
import {useEffect, Fragment} from "react";
import {Routes, Route} from "react-router-dom";
import {handleInitialData} from "../actions/shared.js";
import { connect } from "react-redux";

function App(props){
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      
      <div className="container">
        <Routes>
          <Route path="/" exact element={<LeaderBoard />} />
        </Routes>
      </div>
     
    </Fragment>
  );
}
export default connect()(App);

