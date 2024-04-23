import classes from './Authentication/Authentication.module.scss'

const Page404 = () => {
  return (
    <div className={classes.authentication_container}>
      <div className={classes.heading} >
        <div className={classes.title}>Error 404</div>
        <div className={classes.content}>Page not found</div>
      </div>
      <div className={classes.form}>
        <div className="alert alert-danger text-center" role="alert">
          <span className='opacity-75'>
            Page you are trying to access doesn't belong to this site. <br />
            Please try a valid url, or click the button bellow to return to home page.
          </span>
        </div>
      </div>
  </div>
  )
}

export default Page404