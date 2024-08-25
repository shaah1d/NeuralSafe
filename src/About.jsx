import React from 'react'
import NavbarforHero from './NavbarforHero'

function About() {
  return (
    <>
    <NavbarforHero />

    <div className="bg-gray-100 min-h-screen flex items-start justify-center p-8">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At NeuralNexus, our mission is to harness the power of technology to create safer environments for women, empowering them to live without fear. 
            We believe that everyone deserves to feel secure and have access to quick assistance when needed. Through our flagship application, Neural Safe, 
            we are dedicated to providing a reliable and intuitive solution to help women reach out for help in critical moments.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">What We Do</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Neural Safe is a pioneering safety platform designed to protect women by enabling quick and discreet access to emergency assistance. 
            Whether through a simple voice command or the shake of a phone, our app instantly contacts the police and your pre-selected emergency contacts. 
            We've worked closely with local law enforcement, including the Cyber Cell, to ensure that our app is not only effective but also integrated with 
            the systems that can provide the fastest response in emergencies.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Why Neural Safe?</h2>
          <ul className="text-lg text-gray-700 leading-relaxed list-disc list-inside space-y-2">
            <li><strong>Quick Access to Help:</strong> In an emergency, every second counts. Neural Safe is built for speed and ease of use, allowing you to alert authorities and loved ones in seconds.</li>
            <li><strong>Discreet Protection:</strong> With just a shake of your phone, you can trigger an alert without drawing attention to yourself, ensuring that help is on the way without escalating the situation.</li>
            <li><strong>Advanced Technology:</strong> Leveraging cutting-edge AI and machine learning, Neural Safe is designed to be a dependable tool in critical situations. We continuously update and refine our technology based on feedback from users and safety experts.</li>
            <li><strong>Community Collaboration:</strong> We’ve partnered with local authorities and cyber safety experts to create a solution that is both practical and effective in real-world scenarios.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Our Commitment</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            At NeuralNexus, we are committed to ongoing innovation and improvement. We actively seek feedback from our users and collaborate with law enforcement 
            and cybersecurity experts to ensure Neural Safe remains a leading tool in personal safety.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Meet the Team Behind Neural Safe</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The NeuralNexus team is a dedicated group of developers and innovators committed to creating cutting-edge technology for personal safety. Using the MERN stack 
            for a robust web platform and Flutter, Java, and Firebase for a seamless, cross-platform mobile app, our team ensures Neural Safe is reliable, secure, and easy 
            to use in critical moments. Through close collaboration and a shared mission, we continuously innovate to empower women and contribute to a safer world.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">Join Us in Making a Difference</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We invite you to be a part of our mission. By using Neural Safe, you are not just protecting yourself—you’re contributing to a safer community for all. 
            Together, we can make a significant impact in reducing crime against women.
          </p>
        </section>
      </div>
    </div>

</>
  )
}

export default About
