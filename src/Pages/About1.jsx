import React,{useEffect} from 'react'
import { Link } from 'react-router-dom';

function About1() {
     useEffect(() => {
    localStorage.setItem('aboutTheme', 'about1');
  }, []);
  return (
    <div className="bg-gradient-to-br from-[#e0f7f5] to-[#f7fcfc] min-h-screen pb-0">
  <section className="max-w-7xl mx-auto motion-preset-blur-right  px-6 py-20 md:py-28 scroll-mt-24" id="about">
    <div className="flex flex-col md:flex-row pt-[70px] items-center gap-12 md:gap-20">
      <img
        alt="Portrait of Dr. Serena Blake, a compassionate female clinical psychologist"
        className="w-64 h-80 rounded-xl object-cover md:h-[439px] shadow-xl mx-auto md:mx-0"
        height="400"
        loading="lazy"
        src="/Image2.jpg"
        width="320"
      />
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-4xl font-bold text-teal-900 mb-6">
          About Dr. Serena Blake
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
        </p>
        <address className="not-italic text-gray-600 font-medium text-sm space-y-1 mb-6">
          <p>📍 1287 Maplewood Drive, Los Angeles, CA 90026</p>
          <p>
            📞{" "}
            <a className="text-teal-700 hover:underline" href="tel:+13235550192">
              (323) 555-0192
            </a>
          </p>
          <p>
            ✉️{" "}
            <a className="text-teal-700 hover:underline" href="mailto:serena@blakepsychology.com">
              serena@blakepsychology.com
            </a>
          </p>
          <p>🕒 <span className="font-semibold">Office Hours:</span></p>
          <ul className="list-disc list-inside text-gray-600">
            <li>In-person: Tue & Thu, 10 AM–6 PM</li>
            <li>Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM</li>
          </ul>
        </address>

        
        <Link 
          to="/contact"
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300 shadow-md"
        >
          Book an Appointment
        </Link>
      </div>
    </div>
  </section>
  <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full md:w-1/3 px-4 mb-8">
              <h3 className="text-xl font-bold mb-4">CalmNest</h3>
              <p className="text-gray-400">Providing compassionate, evidence-based mental health care since 2008.</p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-8">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about1" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Our Therapists</Link></li>
                
              </ul>
            </div>
           <div className="w-full md:w-1/3 px-4">
  <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
  <div className="text-gray-400 italic text-sm mb-4">
    Coming soon...
  </div>
  <p className="text-sm text-gray-400">
    © 2025 CalmNest. All rights reserved to Dev Patel.
  </p>
</div>

          </div>
        </div>
      </footer>
</div>

  )
}

export default About1
