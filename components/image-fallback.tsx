"use client"

import { useState, useEffect } from "react"
import Image, { type ImageProps } from "next/image"

interface ImageFallbackProps extends ImageProps {
  fallbackSrc?: string
}

export default function ImageFallback({ src, alt, fallbackSrc = "/placeholder.svg", ...rest }: ImageFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [error, setError] = useState(false)

  useEffect(() => {
    setImgSrc(src)
    setError(false)
  }, [src])

  return (
    <div className="relative" style={{ height: rest.height, width: rest.width }}>
      {error ? (
        <div
          className="absolute inset-0 flex items-center justify-center bg-slate-800 text-slate-400 text-sm rounded-md"
          style={{ height: rest.height, width: rest.width }}
        >
          {alt}
        </div>
      ) : (
        <Image
          {...rest}
          src={imgSrc || "/placeholder.svg"}
          alt={alt}
          onError={() => {
            setError(true)
            if (imgSrc !== fallbackSrc) {
              setImgSrc(fallbackSrc)
            }
          }}
        />
      )}
    </div>
  )
}

