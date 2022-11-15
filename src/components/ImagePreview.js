const ImagePreview = ({ src, setImgSrc, message, setMessage }) => {
  const handleError = () => {
    setImgSrc(`${process.env.REACT_APP_IMAGE_PATH}${process.env.REACT_APP_DEFAULT_IMAGE}`)
    setMessage("*This configuration is not available")
  }

  return (
    <section>
      <figure className="flex items-center justify-center md:w-[500px] md:h-[500px] lg:ml-auto">
        <img onError={() => handleError()} className="figure-contain" width="100%" alt="garage door preview" src={src} />
      </figure>
      <span className="text-sm italic">{message}</span>
    </section>
  )
}

export default ImagePreview
