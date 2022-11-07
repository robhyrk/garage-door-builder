import { useEffect, useState, useRef } from "react"
import axios from "axios"

const UseCreateImgLink = (lites, liteStyles, panes, width, height, style) => {
  const defaultImage = "http://zendoors.stage-cc.com/wp-content/uploads/woocommerce-placeholder-1150x1150.png"
  const [imgSrc, setImgSrc] = useState(defaultImage)
  const [message, setMessage] = useState("")
  const isMounted = useRef(false)

  const createImgSrc = async () => {
    const path = "http://zendoors.stage-cc.com/wp-content/uploads/2022/11/"
    setMessage("")
    if (lites === "SD") {
      console.log("solid door")
      setImgSrc(`${path}${width}X${height}-${style}-Model.png`)
    } else if (panes && lites && !liteStyles) {
      console.log("no lite styles")
      setImgSrc(`${path}${width}X${height}-${style}-${panes}-${lites}-Model.png`)
    } else if (panes && lites && liteStyles) {
      console.log("all options")
      setImgSrc(`${path}${width}X${height}-${style}-${liteStyles}-${panes}-${lites}-Model.png`)
    } else {
      setImgSrc("http://zendoors.stage-cc.com/wp-content/uploads/woocommerce-placeholder-1150x1150.png")
      setMessage("*This configuration is not available")
    }
  }
  console.log(imgSrc)
  useEffect(() => {
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

export default UseCreateImgLink
