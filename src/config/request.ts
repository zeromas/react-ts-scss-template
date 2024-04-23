import axios from "axios"
// import { logoutUserAction } from "../redux/actions/userActions"
import { toastify } from '../utils/toastify'
// import { store } from "../redux/store"
import EnvironmentVariables from './EnvironmentVariables'


axios.defaults.baseURL = `${EnvironmentVariables.baseURL}/api/${EnvironmentVariables.apiVersion}`
axios.defaults.withCredentials = true
axios.defaults.responseType = 'json'
axios.defaults.headers.common["content-type"] = 'application/json'

axios.interceptors.response.use( undefined, async (error) => {
  // Todo: Dispatch Loading here

  if (error.response === undefined) {
    toastify("error", "Network error")
  }
  if (error.config && error.response) {
    if (error.response.status === 401 || error.response.status === 403) {
      toastify("error", error.response.data.message)
      // TODO: Integrate Redux
      // store.dispatch(logoutUserAction())
    } else {
      toastify("error", error.response.data.message)
    }
  }

  return Promise.reject(error)
})

const request = axios

export default request
