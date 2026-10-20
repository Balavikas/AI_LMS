export const API_BASE_URL = 'https://jsonplaceholder.typicode.com'

// Thin fetch wrapper: resolves parsed JSON, rejects on HTTP errors.
export async function getJson(path, { signal } = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, { signal })
  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }
  return response.json()
}
