import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";
import { useNavigate } from 'react-router-dom';

const Auth = (SpecificComponent, option, adminRoute = null) => {

  function AuthenticationCheck(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log(response);

        // 로그인 하지 않은 상태
        if (!response.payload.isAuth) {
            if(option) {
                navigate('/login')
            }
        } else {
            // 로그인 한 상태
            if(adminRoute && !response.payload.isAdmin) {
                navigate('/')
            } else {
                if(option === false) {
                    navigate('/')
                }
            }
        }

      });
    }, []);

    return <SpecificComponent />;
  }

  return AuthenticationCheck;
};
export default Auth;