import classes from './InputField.module.scss'

enum FieldSize {
  "small" = "210px",
  "large" = "450px",
}

type InputFieldProps = {
  type?: string
  label?: string
  defaultValue?: string | number | readonly string[] | undefined
  required?: boolean
  register?: object
  error?: {
    type: string
    message: string
  }
  errorMessage?: string
  name: string
  instruction?: string
  size?: 'small' | 'large'
  hidden?: boolean
  textArea?: boolean
  placeholder?: string
  maxLength?: number
}

const InputField = ({type, label, defaultValue, name, errorMessage, register, error, textArea=false, hidden=false, required=false, size="large", placeholder, maxLength, instruction}: InputFieldProps) => {

  return (
    <>
      {
        label &&
        <label className={classes.label}>
          {label}{required && "*"}
          {instruction && <small> ({instruction})</small>}
        </label>}
      {
        textArea ?
        <textarea
          style={{width: FieldSize[size]}}
          defaultValue={defaultValue}
          {...register}
          className={`form-control ${ error && 'is-invalid' } ${classes.field}`}
          rows={4}
          maxLength={maxLength}
          placeholder={placeholder}
        /> :
        <input
          style={{width: FieldSize[size]}}
          defaultValue={defaultValue}
          type={type}
          hidden={hidden}
          {...register}
          className={`form-control ${ error && 'is-invalid' } ${classes.field}`}
          maxLength={maxLength}
          placeholder={placeholder}
        />
      }
      {
        error && (
          (error.type === "required") ?
          (
            <div className="invalid-feedback">
              { errorMessage ? errorMessage : `${name} can't be blank.`}
            </div>
          ) :
          (
            <div className="invalid-feedback">
            { errorMessage ? errorMessage : `Please provide a valid ${name}.`}
            </div>
          )
        )
      }
    </>
  )
}

export default InputField