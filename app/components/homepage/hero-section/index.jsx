// @flow strict
'use client';

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      {/* Background Hero Image */}
      <Image
        src="/hero.svg"
        alt="Hero background"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      {/* Grid layout for Hero Content */}
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">

        {/* Left Side - Text and Buttons */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-4xl font-bold leading-10 text-black md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hey there, <br />
            I am <span className="text-[#054bad]">{personalData.name}.</span> <br />
            I <span className="text-[#008080]">{personalData.designation}.</span>
          </h1>

          {/* Social Links */}
          <div className="my-12 flex items-center gap-5">
            <Link href={personalData.linkedIn} target="_blank" className="transition-all text-[#0a66c2] hover:scale-125 duration-300">
              <BsLinkedin size={30} />
            </Link>
            <Link href={personalData.github} target="_blank" className="transition-all text-[#171515] hover:scale-125 duration-300">
              <BsGithub size={30} />
            </Link>
            <Link href={personalData.leetcode} target="_blank" className="transition-all text-[#FFA116] hover:scale-125 duration-300">
              <SiLeetcode size={30} />
            </Link>
            <Link href={personalData.twitter} target="_blank" className="transition-all text-[#060c10] hover:scale-125 duration-300">
              <FaXTwitter size={30} />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#054bad] rounded-full text-white font-medium uppercase tracking-wider flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>
            <Link href={personalData.resume} target="_blank" className="flex items-center gap-1 hover:gap-3 bg-[#008080] px-3 md:px-8 py-3 md:py-4 rounded-full text-white text-xs md:text-sm font-medium uppercase transition-all duration-200">
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* Right Side - Code Card */}
        <div className="order-1 lg:order-2 bg-[#2F2F2F] border-[#1b2c68a0] relative rounded-lg">
          {/* Top border with dots */}
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-[#23950A]"></div>
            </div>
          </div>

          {/* Fake Code UI */}
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <pre className="font-mono text-xs md:text-sm lg:text-base whitespace-pre text-white">
              <code>
                <span className="text-pink-500">const</span> <span className="text-white">coder</span> <span className="text-pink-500">=</span> <span className="text-gray-400">{'{'}</span>{"\n"}
                &nbsp;&nbsp;<span className="text-white">name:</span> <span className="text-amber-300">'Faisal Imran'</span>,{"\n"}
                &nbsp;&nbsp;<span className="text-white">skills:</span> <span className="text-gray-400">[</span><span className="text-amber-300">'React', 'React Native', 'Firebase', 'Express.js', 'MongoDB', 'Node.js'</span><span className="text-gray-400">]</span>,{"\n"}
                &nbsp;&nbsp;<span className="text-white">hardWorker:</span> <span className="text-orange-400">true</span>,{"\n"}
                &nbsp;&nbsp;<span className="text-white">quickLearner:</span> <span className="text-orange-400">true</span>,{"\n"}
                &nbsp;&nbsp;<span className="text-white">problemSolver:</span> <span className="text-orange-400">true</span>,{"\n"}
                &nbsp;&nbsp;<span className="text-white">hireable:</span> <span className="text-orange-400">function</span>() <span className="text-gray-400">{'{'}</span>{"\n"}
                &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-400">return</span> (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">this.</span><span className="text-white">hardWorker</span> &&<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">this.</span><span className="text-white">problemSolver</span> &&<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-cyan-400">this.</span><span className="text-white">skills.length</span> <span className="text-amber-300">&gt;=</span> <span className="text-orange-400">5</span><br />
                &nbsp;&nbsp;&nbsp;&nbsp;);<br />
                &nbsp;&nbsp;<span className="text-gray-400">{'}'}</span>,{"\n"}
                <span className="text-gray-400">{'}'}</span>;
              </code>
            </pre>


          </div>
        </div>
      </div>
    </section>
  );
}
