import { useCallback, useEffect, useState } from 'react'

// Runs an async fetcher(signal) on mount; exposes loading/error state and a retry.
// The fetcher must be stable (module-level function or wrapped in useCallback).
function useFetch(fetcher) {
  const [state, setState] = useState({ data: null, isLoading: true, error: null })
  const [attempt, setAttempt] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    fetcher(controller.signal)
      .then((data) => setState({ data, isLoading: false, error: null }))
      .catch((error) => {
        if (error.name === 'AbortError') return
        setState({ data: null, isLoading: false, error })
      })

    // Abort on unmount (and on StrictMode's dev double-invoke) to avoid stale updates.
    return () => controller.abort()
  }, [fetcher, attempt])

  const retry = useCallback(() => {
    setState({ data: null, isLoading: true, error: null })
    setAttempt((count) => count + 1)
  }, [])

  return { ...state, retry }
}

export default useFetch
