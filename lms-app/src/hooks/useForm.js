import { useState } from 'react'
import { validate } from '../utils/validators'

// Generic controlled-form state: values, validation on blur/submit, and reset.
function useForm(initialValues, schema) {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target
    const nextValues = { ...values, [name]: type === 'checkbox' ? checked : value }
    setValues(nextValues)
    if (touched[name]) setErrors(validate(nextValues, schema))
  }

  const handleBlur = (event) => {
    setTouched((prev) => ({ ...prev, [event.target.name]: true }))
    setErrors(validate(values, schema))
  }

  const handleSubmit = (onValid) => (event) => {
    event.preventDefault()
    const nextErrors = validate(values, schema)
    setErrors(nextErrors)
    setTouched(Object.fromEntries(Object.keys(schema).map((field) => [field, true])))
    if (Object.keys(nextErrors).length === 0) onValid(values)
  }

  const reset = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }

  const getError = (name) => (touched[name] ? errors[name] : undefined)

  return { values, getError, handleChange, handleBlur, handleSubmit, reset }
}

export default useForm
