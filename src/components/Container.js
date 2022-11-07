import React from "react"

const Container = props => {
  return <section className={`container mx-auto py-10 md:px-10 ${props.classes}`}>{props.children}</section>
}

export default Container
