import { useEffect, useRef } from 'react'

function useDebounce(callback: Function, delay: number, dependencies: any[]) {
  const debounceTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current)
    }

    debounceTimeoutRef.current = setTimeout(() => {
      callback()
    }, delay)
  }, dependencies)
}

export default useDebounce
