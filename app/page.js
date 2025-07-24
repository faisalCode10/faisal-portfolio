'use client'

import { useEffect, useState } from 'react'
import { personalData } from "@/utils/data/personal-data";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import Testimonials from "./components/homepage/testimonials";

export default function Home() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`https://dev.to/api/articles?username=${personalData.devUsername}`)
        const data = await res.json()
        const filtered = data.filter(item => item?.cover_image).sort(() => Math.random() - 0.5)
        setBlogs(filtered)
      } catch (err) {
        console.error(err)
      }
    }
    fetchBlogs()
  }, [])

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Testimonials />
      <ContactSection />
      <Blog blogs={blogs} />
    </div>
  )
}
