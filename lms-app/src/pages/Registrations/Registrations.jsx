import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import FormField from '../../components/FormField/FormField'
import PageHeader from '../../components/PageHeader/PageHeader'
import { ROUTES } from '../../constants/navigation'
import { COURSES, findCourseById } from '../../data/courses'
import useForm from '../../hooks/useForm'
import { email, minLength, mustBeChecked, phone, required } from '../../utils/validators'
import styles from './Registrations.module.css'

const SCHEMA = {
  fullName: [required('Full name'), minLength('Full name', 2)],
  email: [required('Email'), email],
  phone: [phone],
  courseId: [required('Course')],
  agreeToTerms: [mustBeChecked('You must accept the terms to register')],
}

function Registrations() {
  const [searchParams] = useSearchParams()
  const preselectedCourse = findCourseById(searchParams.get('course'))
  const [registration, setRegistration] = useState(null)

  const { values, getError, handleChange, handleBlur, handleSubmit, reset } = useForm(
    {
      fullName: '',
      email: '',
      phone: '',
      courseId: preselectedCourse?.id ?? '',
      agreeToTerms: false,
    },
    SCHEMA,
  )

  // No backend yet: keep the submitted registration in state to confirm it.
  const onSubmit = (formValues) => setRegistration(formValues)

  const startOver = () => {
    reset()
    setRegistration(null)
  }

  const fieldProps = (name) => ({
    name,
    value: values[name],
    error: getError(name),
    onChange: handleChange,
    onBlur: handleBlur,
  })

  return (
    <>
      <PageHeader
        title="Registrations"
        subtitle="Sign up for a course in a few quick steps."
      />

      <section className={`container ${styles.content}`}>
        {registration ? (
          <div className={styles.success} role="status">
            <h2>You&rsquo;re registered!</h2>
            <p>
              Thanks, {registration.fullName}. We&rsquo;ve reserved your place in{' '}
              <strong>{findCourseById(registration.courseId)?.title}</strong> and will send
              details to {registration.email}.
            </p>
            <div className={styles.actions}>
              <Link to={ROUTES.COURSES} className="btn btn-primary">
                Browse more courses
              </Link>
              <button type="button" className="btn btn-secondary" onClick={startOver}>
                Register for another
              </button>
            </div>
          </div>
        ) : (
          <form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <FormField label="Full name" autoComplete="name" required {...fieldProps('fullName')} />
            <FormField label="Email" type="email" autoComplete="email" required {...fieldProps('email')} />
            <FormField label="Phone" type="tel" autoComplete="tel" {...fieldProps('phone')} />
            <FormField label="Course" as="select" required {...fieldProps('courseId')}>
              <option value="">Select a course</option>
              {COURSES.map(({ id, title, level }) => (
                <option key={id} value={id}>
                  {title} ({level})
                </option>
              ))}
            </FormField>

            <div>
              <label className={styles.checkbox}>
                <input
                  type="checkbox"
                  name="agreeToTerms"
                  checked={values.agreeToTerms}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  aria-invalid={Boolean(getError('agreeToTerms'))}
                />
                I agree to the terms and conditions
              </label>
              {getError('agreeToTerms') && (
                <p className={styles.error} role="alert">
                  {getError('agreeToTerms')}
                </p>
              )}
            </div>

            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </form>
        )}
      </section>
    </>
  )
}

export default Registrations
