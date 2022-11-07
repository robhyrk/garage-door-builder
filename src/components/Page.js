import React, { useEffect } from "react"
import Container from "./Container"

const Page = props => {
  useEffect(() => {
    document.title = `${props.title} | Zendoors`
    window.scrollTo(0, 0)
  }, [])
  return <Container classes={props.classes}>{props.children}</Container>
}

export default Page
