import { handleLogout } from "../actions/authedUser";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const NavBar=({authedUser,dispatch})=>{
  const logout=(e)=>{
    e.preventDefault();
    dispatch(handleLogout());
  }
  return(
    <div>
      <nav className="w-full bg-gray-800 text-gray-200 px-8 py-7 flex justify-center shadow-md">
        <div className="flex space-x-10 text-lg">
          <span
            className="font-medium px-3 py-2 text-slate-700">{authedUser.name}</span>
          <Link className="hover:text-white transition" to="/">Home</Link>
          <Link className="hover:text-white transition" to="/add">NewPoll</Link>
          <Link className="hover:text-white transition"to="/LeaderBoard">Leader Board</Link>
          <button 
          onClick={logout}
          className="hover:text-white transition">Logout</button>
  
        </div>
      </nav>
    </div>
  )
}
const mapStateToProps=({authedUser, users})=>({
  authedUser: users[authedUser],
});

export default connect()(NavBar);
