"use client"

import { useEffect, useState } from "react"

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Default to false on server
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query)

      // Initial check
      if (media.matches !== matches) {
        setMatches(media.matches)
      }

      // Add listener for changes
      const listener = () => setMatches(media.matches)
      media.addEventListener("change", listener)

      return () => media.removeEventListener("change", listener)
    }

    return undefined
  }, [matches, query])

  return matches
}

