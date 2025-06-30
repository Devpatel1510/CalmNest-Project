/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Phone,MapPin,Mail } from 'lucide-react';
import { motion } from 'framer-motion'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
const ContactPage = () => {
  const [faqOpen, setFaqOpen] = useState([false, false, false]);

  const cardVariants = {
 animate: {
    x: [-200, 0],
    opacity: [0, 1],
    transition: {
      repeat: Infinity,
      repeatType: 'loop',
      duration: 6,     
      ease: 'easeInOut',
    },
  },
}


  const toggleFaq = (index) => {
    setFaqOpen((prev) => {
      const updated = [...prev];
      updated[index] = !updated[index];
      return updated;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Form submitted:', Object.fromEntries(formData));
    toast.success("Sent successfully")
    e.target.reset();
  };

  return (
    <div className="custom-bg min-h-screen pt-[70px] font-sans  text-gray-700" >
      
      <section id="contact1" className="py-20 pt-[70px] motion-preset-blur-right  bg-gradient-to-r from-green-50 pt-[121px] to-blue-50 text-center" >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">We're Here to Help</h1>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          Reach out to schedule an appointment or ask any questions about our therapy services.
        </p>
      </section>

      
      <div className="container mx-auto px-6 py-16 flex flex-wrap -mx-4">
        
        <div className="w-full lg:w-1/2 px-4 mb-12 motion-preset-blur-right  lg:mb-0">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <input name="name" placeholder="Full Name" required className="w-full p-3 border rounded-lg" />
              <input name="email" type="email" placeholder="Email Address" required className="w-full p-3 border rounded-lg" />
              <input name="phone" placeholder="Phone Number (Optional)" className="w-full p-3 border rounded-lg" />
              <select name="service" className="w-full p-3 border rounded-lg">
                <option value="">Select a service</option>
                <option value="individual">Individual Therapy</option>
                <option value="couples">Couples Therapy</option>
                <option value="family">Family Therapy</option>
                <option value="trauma">Trauma Counseling</option>
                <option value="anxiety">Anxiety Treatment</option>
              </select>
              <textarea name="message" placeholder="Your Message" rows="5" required className="w-full p-3 border rounded-lg" />
              <div className="flex items-center">
                <input id="consent" type="checkbox" required className="mr-2" />
                <label htmlFor="consent" className="text-sm text-gray-700">
                  I consent to Mindful Therapy collecting my data for contact purposes
                </label>
              </div>
              <button type="submit" className="bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-lg w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>

        
        <div className="w-full motion-preset-blur-right lg:w-1/2 px-4">
          <div className="space-y-8">
            
            <div className="bg-white p-8 rounded-lg shadow-md w-full">
              <div className="flex items-center mb-6">
                <img
                  src="/Image2.jpg"
                  alt="Dr. Serena Blake, PsyD"
                  className="rounded-full w-20 h-20 object-cover mr-5"
                />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Dr. Serena Blake, PsyD</h3>
                  <p className="text-green-700">Licensed Clinical Psychologist</p>
                  <p className="text-sm text-gray-500 mt-1">8 years of practice, 500+ sessions</p>
                </div>
              </div>
              <p className="text-gray-700">
                Dr. Serena Blake is a licensed clinical psychologist based in Los Angeles, CA. She specializes in anxiety,
                trauma recovery, and relationship strengthening, offering both in-person and virtual therapy.
              </p>
            </div>

            
            <div className="bg-white p-8 rounded-2xl shadow-xl space-y-6 w-full max-w-md">
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-green-700">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Our Office</h4>
                      <p className="text-gray-600">
                        1287 Maplewood Drive, Los Angeles,<br></br> CA 90026
                      </p>
                    </div>
                  </div>
            
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-green-700">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
                      <p className="text-gray-600">(323) 555-0192</p>
                      <p className="text-sm text-gray-500 mt-1"> Tue & Thu, 10 AM–6 PM</p>
                    </div>
                  </div>
            
                  
                  <div className="flex items-start">
                    <div className="mr-4 text-green-700">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Email</h4>
                      <p className="text-gray-600"> serena@blakepsychology.com</p>
                      <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                    </div>
                  </div>
                </div>
          </div>
        </div>
      </div>

       <section className="bg-[#f7f9fc] py-16 px-4 sm:px-6 lg:px-20">
      
      <div className="max-w-4xl mx-auto text-center mb-12">
        <span className="inline-block bg-yellow-200 text-gray-800 text-sm font-medium px-4 py-1 rounded mb-4">
          Client Success Stories & Testimonials
        </span>
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          What Former Clients Say
        </h2>
        <p className="text-lg text-gray-700">
          Real experiences from individuals who have found healing and growth
          through our work together.
        </p>
      </div>

      
      <div className=" mx-auto  gap-8">
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
  {[1, 2].map((_, i) => (
    <motion.div
      key={i}
      className="bg-[#b7dcdc] rounded-xl p-6 shadow-md"
      variants={cardVariants}
      animate="animate"
    >
      <p className="text-sm text-[#1f4e5f] mb-2">Happy Client</p>
      <p className="text-[#1f4e5f] text-base">
        Client testimonials are <strong>coming soon</strong>.<br />
        
      </p>
    </motion.div>
  ))}
</div>
        
        
      </div>
    </section>

      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "Are online sessions available?",
              "Do you accept insurance?",
              "What is your cancellation policy?"
            ].map((question, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-green-700">
                <button
                  onClick={() => toggleFaq(i)}
                  className="w-full text-left flex justify-between items-center focus:outline-none"
                >
                  <span className="font-medium">{question}</span>
                  <i
                    className={`fas fa-chevron-down text-green-700 transition-transform ${
                      faqOpen[i] ? 'rotate-180' : ''
                    }`}
                  ></i>
                </button>
                {faqOpen[i] && (
                  <div className="mt-3 text-gray-700">
                    {i === 0 && "Yes—all virtual sessions via Zoom."}
                    {i === 1 && "No, but a superbill is provided for self-submission."}
                    {i === 2 && "24-hour notice required for cancellations."}
                  </div>
                )}
              </div>
            ))}
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
  );
};

export default ContactPage;
