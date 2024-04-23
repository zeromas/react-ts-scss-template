import { Route, Routes, BrowserRouter } from "react-router-dom"
import { SignIn, SignUp, ResetPassword, ChangePassword } from "../../../pages/Authentication"
import AppLayout from "../../layout/AppLayout"
import PrivateRoute from '../PrivateRoute'
import { Home, Page404 } from "../../../pages"

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<PrivateRoute path='/' Component={Home} />} />
        </Route>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="reset_password" element={<ResetPassword />} />
        <Route path="confirmation/:token" element={<ChangePassword />} />
        <Route path="change_password/:token" element={<ChangePassword />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
