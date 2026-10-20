import { useState } from 'react'
import FormField from '../../components/FormField/FormField'
import PageHeader from '../../components/PageHeader/PageHeader'
import { CONTACT_DETAILS } from '../../constants/contact'
import useForm from '../../hooks/useForm'
import { email, minLength, required } from '../../utils/validators'
import styles from './Contact.module.css'

const INITIAL_VALUES = { name: '', email: '', subject: '', message: '' }

const SCHEMA = {
  name: [required('Name')],
  email: [required('Email'), email],
  subject: [required('Subject')],
  message: [required('Message'), minLength('Message', 10)],
}

function Contact() {
  const [sentTo, setSentTo] = useState('')
  const { values, getError, handleChange, handleBlur, handleSubmit, reset } = useForm(
    INITIAL_VALUES,
    SCHEMA,
  )

  // No backend yet: confirm locally and clear the form.
  const onSubmit = (formValues) => {
    setSentTo(formValues.email)
    reset()
  }

  const fieldProps = (name) => ({
    name,
    value: values[name],
    error: getError(name),
    onChange: handleChange,
    onBlur: handleBlur,
    required: true,
  })

  return (
    <>
      <PageHeader
        title="Contact us"
        subtitle="Questions about a course or your account? We're here to help."
      />

      <section className={`container ${styles.content}`}>
        <aside className={styles.details} aria-label="Contact details">
          <h2>Get in touch</h2>
          <dl>
            {CONTACT_DETAILS.map(({ id, label, value, href }) => (
              <div key={id} className={styles.detail}>
                <dt>{label}</dt>
                <dd>{href ? <a href={href}>{value}</a> : value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <div>
          {sentTo && (
            <p className={styles.success} role="status">
              Thanks! Your message has been sent. We&rsquo;ll reply to {sentTo} soon.
            </p>
          )}
          <form className={styles.form} noValidate onSubmit={handleSubmit(onSubmit)}>
            <FormField label="Name" autoComplete="name" {...fieldProps('name')} />
            <FormField label="Email" type="email" autoComplete="email" {...fieldProps('email')} />
            <FormField label="Subject" {...fieldProps('subject')} />
            <FormField label="Message" as="textarea" {...fieldProps('message')} />
            <button type="submit" className="btn btn-primary">
              Send message
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
