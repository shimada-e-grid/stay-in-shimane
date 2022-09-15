import { useAuthUserContext } from '../../providers'
import { Navigate, useLocation } from 'react-router-dom';

interface Props {
  component: React.ReactNode;
  redirect: string
}

export const RouteAuthGuard: React.FC<Props> = (props) => {
  const location = useLocation()
  const authUser = useAuthUserContext().user;

  if (!authUser) {
    return <Navigate to={props.redirect} state={{ from: location }} replace={false} />
  }

  return <>{props.component}</>;

}