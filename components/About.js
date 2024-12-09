import React from 'react';
import Image from 'next/image';
// import portraitImage from '../public/images/asingh_portrait_pic_pixelart.png'; // Adjust the path as needed

const portraitImage = "/images/asingh_portrait_pic_pixelart.png";

export default function About() {
  return (
    <section id="about" className="bg-teal-700 py-28 px-4 md:px-8 text-gray-900"> {/* Fixed background color here */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 mb-16 pt-8">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
      </div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0">
        {/* Left Section - Image */}
        <div className="flex justify-center items-center md:justify-start flex-shrink-0 w-64 h-64 md:w-64 md:h-64 mb-4 md:mb-0 md:mr-28 border-8 border-white rounded-xl">
          <Image
            src={portraitImage}
            alt="Aryan Singh"
            className="w-full h-full object-cover"
            width={300} // Adjust the width to make it larger for smaller screens
            height={300} // Adjust the height to match the larger size
          />
        </div>


        {/* Right Section - Text */}
        <div className="nes-balloon from-left max-w-xl text-center md:text-left bg-amber-300">
          <p className="text-lg text-gray-700 mb-4">
            Hello! I&apos;m Aryan Singh, a professional software developer, nice to meet you!
          </p>
          <div className="space-y-6">
            <p>
              I specialize in full stack development, systems design and automation pipelines. Please have a look at my experience and projects to learn more about me!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
