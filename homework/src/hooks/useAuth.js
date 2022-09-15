import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const {email, token, id} = useSelector(state => state.user);
  const navigate = useNavigate();
  const isAuth = email ? true : false;
  return (
    {
      isAuth,
      email,
      token,
      id,
      redirect: () => {
          if (!isAuth) navigate('/login');
      }
    }
  )
}
   