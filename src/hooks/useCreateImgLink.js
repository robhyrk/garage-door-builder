import { useEffect, useState, useRef } from "react"

const useCreateImgLink = (lites, liteStyles, panes, width, height, style) => {
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
    } else if (panes && lites && !liteStyles) {
      //panes and lites without lite styles
      setImgSrc(`${imagePath}${width}X${height}-${style}-${panes}-${lites}-Model.png`)
    } else if (panes && lites && liteStyles) {
      //lite styles with panes and lites
      setImgSrc(`${imagePath}${width}X${height}-${style}-${liteStyles}-${panes}-${lites}-Model.png`)
    } else {
      setImgSrc(defaultImage)
      setMessage("*This configuration is not available")
    }
  }

  useEffect(() => {
    //prevents running on initial render and overwritting default image
    if (isMounted.current) {
      //only run if minimum required options are selected
      if (width && height && style && lites) {
        createImgSrc()
      }
    } else {
      isMounted.current = true
    }
  }, [width, height, style, lites, liteStyles, panes])

  return [imgSrc, message, setImgSrc, setMessage]
}

export default useCreateImgLink
