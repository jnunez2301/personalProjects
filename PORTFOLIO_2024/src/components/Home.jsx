/* eslint-disable react/no-unescaped-entities */
import { Contact, Skills } from "../pages"
import { Certificates } from "../pages/Certificates"
import { Info } from "./Info"
import Projects from "./Projects"

export const Home = () => {
  return (
    <>
    <Info />
    <Skills />
    <Projects />
    <Certificates />
    <Contact/>
    </>
  )
}
