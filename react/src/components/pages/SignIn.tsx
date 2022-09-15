import { useEffect, useReducer } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import { AuthUser, useAuthUserContext } from "../../providers";
import { SimpleButton, TextField } from '../'
import useAxios from '../../hooks/useAxios'

interface LocationState {
  from: {
    pathname: string;
  };
}

const initialState = { email: '', password: '' }

const reducer = (state: typeof initialState, action: { event: React.ChangeEvent<HTMLInputElement> }) => {
  return { ...state, [action.event.target.name]: action.event.target.value };
}

export const SignIn: React.FC = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [state, dispatch] = useReducer(reducer, initialState);
  const [{ response, loading }, fetch] = useAxios({
    url: `api/v1/auth/sign_in`,
    method: 'post'
  }, { manual: true })

  const authUser = useAuthUserContext()

  useEffect(() => {
    if(authUser.user) {
      navigate('/host/rooms')
    }
  }, [])

  useEffect(() => {
    if (response && response.status == 200) {
      const {uid, client } = response.headers
      const access_token = response.headers['access-token']
      const user: AuthUser = {
        uid: uid,
        client: client,
        'access-token': access_token
      }
      const { from } = location.state as LocationState || { from: { pathname: '/host/rooms' } }

      authUser.signIn(user, () => {
        navigate(from.pathname)
      })
    }
  }, [response])

  const handleOnClick = async () => {
    await fetch({
      params: state
    })
  }

  return (
    <>
      <p>ログイン</p>
      <TextField name="email" onChange={e => dispatch({ event: e })}></TextField>
      <TextField name="password" onChange={e => dispatch({ event: e })}></TextField>
      <SimpleButton onClick={handleOnClick} disabled={loading}>ログイン</SimpleButton>
    </>
  )
}
