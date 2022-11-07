import { useState } from "react"

const ImagePreview = ({ src, setImgSrc, message, setMessage }) => {
  const handleError = () => {
    setImgSrc("http://zendoors.stage-cc.com/wp-content/uploads/woocommerce-placeholder-1150x1150.png")
    setMessage("*This configuration is not available")
  }

  return (
    <section>
      <figure className="flex items-center justify-center md:w-[500px] md:h-[500px] mx-auto">
        <img onError={() => handleError()} className="figure-contain" width="100%" alt="garage door preview" src={src} />
      </figure>
      <span className="text-sm italic">{message}</span>
    </section>
  )
}

export default ImagePreview
