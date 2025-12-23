import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import {useState} from "react";
import {handleLogin} from "../actions/authedUser";

const Login= ({dispatch, loggedIn})=>{
  const [username, setUsername]=useState("sarahedo");
  const [password, setPassword]=useState("password123");

  if(loggedIn){
    const urlParams=new URLSearchParams(window.location.search);
    const redirectUrl=urlParams.get('redirectTo');
    return <Navigate to={redirectUrl ? redirectUrl : "/"}/>;
  }

  const handleUsername=(e)=>{
    const value=e.target.value;
    setUsername(value);
  };

  const handlePassword=(e)=>{
    const value=e.target.value;
    setPassword(value);
  };

  const handleSubmit= (e)=>{
      e.preventDefault();
      dispatch(handleLogin(username, password));
      setUsername("");
      setPassword("");
  };

  return(
    <div>
      <h1 className="text-3xl font-bold mt-9">Login</h1>
      
      <div className="flex justify-center items-center min-h-screen bg-gray-900 py-16 px-4">
        <div className="bg-gray-800 shadow-lx rounded-2xl p-10 w-full max-w-5xl border border-gray-700">
          <form onSubmit={handleSubmit}>
            <input
            value={username}
            onChange={handleUsername}
            type="text"
            name="username"
            id="username"
            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"/>
            <input
            value={password}
            onChange={handlePassword}
            type="password"
            name="password"
            id="password"
            className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"/>

            <button
            type="submit"
            className="bg-white px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-black">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
  
};
const mapStateToProps=({authedUser})=>({
    loggedIn:!!authedUser,
});

export default connect(mapStateToProps)(Login);