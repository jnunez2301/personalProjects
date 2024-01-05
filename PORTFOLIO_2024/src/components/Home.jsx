/* eslint-disable react/no-unescaped-entities */
import { Certificates } from "../pages/Certificates"
import { Info } from "./Info"
import Projects from "./Projects"

export const Home = () => {
  return (
    <>
    <Info />
    <Projects />
    <Certificates />
    </>
  )
}
