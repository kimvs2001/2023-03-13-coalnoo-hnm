import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
// 제품 검색 후,  새로고침하면, 검색창에 단어는 삭제 되었는데
// 제품은 계속 검색 된것만 나오는데?
//  -> url  수정 하도록 코드 수정 필요.
const Navbar = () => {
  const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M Home','Sale','지속가능성'];

  const navigate = useNavigate();
  const goToLogin=()=>{
    navigate("/login");
  }
  const search=(event)=>{
    if(event.key === "Enter"){
      // 입력한 검색어를 읽어와서
      let keyword = event.target.value;
      console.log(keyword);
      // url 을 변경
      navigate(`/?q=${keyword}`);
    }
  }
  const goToHome=()=>{
    navigate('/');
  }
  return (
    <div>
      <div/>
      <div  className="login-button" onClick={goToLogin}>
        <div>
         <FontAwesomeIcon icon={faUser}/>
        </div>
        <div>로그인</div>      
      </div>
      <div className="nav-section">
      <img className='logo' onClick={goToHome} width={100} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeeLHwvqjBT_tqo6-ZACuZMnxxDWeex4YZuUgfEMLBYw&s"></img>
      </div>
      <div className='menu-area'>
       
          <ul className='menu-list'>
            {menuList.map(menu=>(  <li key={menu}>{menu}</li>) )}
          </ul>
        
        <div className='wrapper'>
        <span>
            <FontAwesomeIcon className='icon' icon={faSearch} /> 
            </span>
            <input 
            onKeyPress={(event)=>search(event)}
            placeholder='제품검색'
            className='search-box'
            type="text">
              
            </input>
           

            
        </div>
      </div>
    </div>
  )
}

export default Navbar
