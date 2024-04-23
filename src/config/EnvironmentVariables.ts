const EnvironmentVariables = {
  baseURL: import.meta.env.NODE_ENV === "production" ? import.meta.env.PRODUCTION_URL : import.meta.env.DEVELOPMENT_URL,
  apiVersion: import.meta.env.API_VERSION
}

export default EnvironmentVariables
