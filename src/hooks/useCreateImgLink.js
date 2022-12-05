import { useEffect, useState, useRef } from "react"

const useCreateImgLink = (lites, width, height, style) => {
  const imagePath = process.env.REACT_APP_IMAGE_PATH
  const defaultImage = `${imagePath}${process.env.REACT_APP_DEFAULT_IMAGE}`
  const [imgSrc, setImgSrc] = useState(defaultImage)
  const [message, setMessage] = useState("")
  const isMounted = useRef(false)

  const createImgSrc = async () => {
    setMessage("")

    if (lites === "SD") {
      //solid door only
      setImgSrc(`${imagePath}${width}X${height}-${style}-Model.png`)
    } else {
      console.log(`${imagePath}${width}X${height}-${style}-${lites}-Model.png`)
      setImgSrc(`${imagePath}${width}X${height}-${style}-${lites}-Model.png`)
    }
  }

  useEffect(() => {
    //prevents running on initial render and overwritting default image
    if (isMounted.current) {
      console.log(width, height, style, lites)
      //only run if minimum required options are selected
      if (width && height && style && lites) {
        createImgSrc()
      }
    } else {
      isMounted.current = true
    }
  }, [width, height, style, lites])

  return [imgSrc, message, setImgSrc, setMessage]
}

export default useCreateImgLink
