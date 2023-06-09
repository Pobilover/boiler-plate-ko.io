import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  useEffect(() => {
    axios.get('/api/hello')
    .then(response => console.log(response.data))
  }, [])

  const navigate = useNavigate();

  const onClickHandler = () => {
    axios.get('/api/users/logout')
      .then(response => {
        if (response.data.success) {
          alert('로그아웃 되었습니다.')
          navigate('/login')
        } else {
          alert('로그아웃을 실패하였습니다.')
        }
      })
  }

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100vh'
    }}>
      <h2>시작 페이지</h2>

      <button onClick={onClickHandler}>
        LogOut
      </button>
    </div>
  )
}

export default LandingPage