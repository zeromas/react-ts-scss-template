import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
// import { useSelector } from "react-redux"
import { SignIn } from '../../pages/Authentication'
import useAuthentication from '../../hooks/useAuthentication'
import { toast } from 'react-toastify'
import { checkSession } from '../../utils/helpers/session'


type PrivateRouteProps = {
  path: string,
  Component: React.FunctionComponent
}

const PrivateRoute = ({ path, Component }: PrivateRouteProps) => {

  const location = useLocation()
  const { signOut } = useAuthentication()

  useEffect(() => {
    if (checkSession()) {
      signOut()
      toast.info("Session has been expired, Sign in again.")
    }
  }, [location])


  // const user: IUser = useSelector((state: UserState) => state.user)
  const user = {
    authorized: true
  }

  return user.authorized ? <Component /> : <SignIn />
}

export default PrivateRoute
