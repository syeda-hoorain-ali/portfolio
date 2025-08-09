'use client'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function useUrlHash() {
  const [hash, setHash] = useState('')
  const params = useParams()

  useEffect(() => {
    const update = () => setHash(window.location.hash)
    window.addEventListener('hashchange', update)
    update() // initialize on mount
    return () => window.removeEventListener('hashchange', update)
  }, [params])

  return hash
}
