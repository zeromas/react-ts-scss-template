interface ISignInData {
  attributes: {
    email: string,
    password: string,
  }
  setError: React.Dispatch<React.SetStateAction<string>> | null
}

interface IResetPasswordData {
  password: string,
  passwordConfirmation: string,
  confirmationToken: string | undefined
}

interface IUserData {
  attributes: {
    firstName: string,
    lastName: string,
    email: string,
    password?: string,
    passwordConfirmation?: string,
  }
  setError: React.Dispatch<React.SetStateAction<string>> | null
}

interface IUserProfileData {
  attributes: {
    firstName?: string
    lastName?: string
    email?: string
  }
}

interface IFormInputs {
  firstName: string
  lastName: string
  email: string
  password: string
  passwordConfirmation: string
}