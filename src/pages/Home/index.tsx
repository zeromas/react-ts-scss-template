import { Button, InputField } from "../../components/base"
import classes from "./Home.module.scss"

const Home = () => {
  return (
    <div className={classes.home}>
      <h1>Components</h1>
      <div className={classes.components}>
        <Button innerText="Click Me" />
        <InputField name="text" type="text" />
      </div>
    </div>
  )
}

export default Home