// import React from "react"
import { Outlet } from "react-router-dom"
import classes from './AppLayout.module.scss'
import Header from "../Header"
import Footer from "../Footer"


const AppLayout = () => {
  return (
    <div className={classes.layout}>
      <Header />
      <div className={classes.layout_container}>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default AppLayout
