import { Authentication } from "../utils/enums/routes/auth"
import request from "../config/request"

type SessionData = {
  email: string
  password: string
}

export const createSession = (sessionData: SessionData) => {
  return request.post(Authentication.SIGN_IN, sessionData)
}

export const destroySession = () => {
  return request.delete(Authentication.SIGN_OUT)
}