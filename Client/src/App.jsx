
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { Login } from './store/slice/user.slice';
import { useEffect } from 'react';




function App() {
  const {isAuthenticated} = useSelector((state)=>state.userReducer);
  const dispatch = useDispatch();
  console.log(isAuthenticated);
  useEffect(()=>{
    dispatch(Login());
  })



  return (
    <>
      
    </>
  )
}

export default App
