// Each validator returns an error message, or an empty string when valid.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^\+?[\d\s()-]{7,20}$/

export const required = (label) => (value) =>
  String(value ?? '').trim() ? '' : `${label} is required`

export const email = (value) =>
  !value || EMAIL_PATTERN.test(value) ? '' : 'Enter a valid email address'

export const phone = (value) =>
  !value || PHONE_PATTERN.test(value) ? '' : 'Enter a valid phone number'

export const minLength = (label, length) => (value) =>
  !value || value.trim().length >= length ? '' : `${label} must be at least ${length} characters`

export const mustBeChecked = (message) => (value) => (value ? '' : message)

// Runs a { field: [validators] } schema and returns { field: firstError }.
export const validate = (values, schema) =>
  Object.entries(schema).reduce((errors, [field, rules]) => {
    const message = rules.map((rule) => rule(values[field])).find(Boolean)
    return message ? { ...errors, [field]: message } : errors
  }, {})
