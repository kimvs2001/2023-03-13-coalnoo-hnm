import './App.css';
import {Routes,Route} from "react-router-dom";
import ProductAll from './pages/ProductAll';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import Navbar from './components/Navbar';
import React,{ useEffect, useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRouter from './routes/PrivateRouter';
// 0. 네비게이션 바.
// 1. 전체 상품 페이지, 로그인, 상품상세페이지
// 2. 전체 상품페이지 : 전체 상품 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인페이지로 간다.
// 4. 상품디테일을 눌렀으나, 로그인 안되있으면 로그인페이지
// 5. 로그아웃을 -> 로그아웃
// 6.로그아웃 되면 상세 페이지 볼수없음, 로그인페이지로 리다이렉팅
// 7. 버튼 로그인<->로그아웃 토글
// 8. 상품검색 가능


function App() {
  const [authenticate,setAuthenticate] = useState(false);

  useEffect(()=>{
    console.log("auth:",authenticate);
  },[authenticate])
  //<Route path="/product/:id" render={(props)=><PrivateRouter {...props}/>} element={<PrivateRouter authenticate={authenticate}/>}/>

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll authenticate={authenticate}/>}/>
        <Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
        <Route path="/product/:id" element={<PrivateRouter authenticate={authenticate }/>}/>

      </Routes>
      
     
    </div>
  );
}

export default App;
