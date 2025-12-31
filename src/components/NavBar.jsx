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
      <nav className="w-full bg-gray-800 text-gray-200 px-8 py-7 shadow-md rounded-2xl border border-gray-700">
        <div className="max-w-6xl mx-auto flex items-center justify-between ">
          <span
            className="text-white font-medium">{authedUser?.name}</span>
          <div className="flex items-center space-x-8 text-lg">
            <Link className="hover:text-white transition" to="/">Home</Link>
            <Link className="hover:text-white transition" to="/add">NewPoll</Link>
            <Link className="hover:text-white transition"to="/LeaderBoard">Leader Board</Link>
            <button 
            onClick={logout}
            className="hover:text-white transition">Logout</button>
          </div>
    
        </div>
      </nav>
    </div>
  )
}
const mapStateToProps=({authedUser, users})=>({
  authedUser: users[authedUser],
});

export default connect(mapStateToProps)(NavBar);
