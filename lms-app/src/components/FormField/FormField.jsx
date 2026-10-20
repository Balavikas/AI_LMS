import { useId } from 'react'
import styles from './FormField.module.css'

// Labelled input/select/textarea with accessible error messaging.
function FormField({ label, as: Control = 'input', error, children, ...controlProps }) {
  const id = useId()
  const errorId = `${id}-error`

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
        {controlProps.required && <span aria-hidden="true"> *</span>}
      </label>
      <Control
        id={id}
        className={`${styles.control} ${error ? styles.invalid : ''}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        {...controlProps}
      >
        {children}
      </Control>
      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

export default FormField
