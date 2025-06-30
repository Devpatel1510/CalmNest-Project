/* eslint-disable no-unused-vars */
import React,{useState} from 'react';
import toast from 'react-hot-toast';
import { motion } from "framer-motion";
import { Phone,MapPin,Mail } from 'lucide-react';
import { useNavigate,Link } from 'react-router-dom';
const Card2 = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log('Form submitted:', Object.fromEntries(formData));
    toast.success("Sent successfully")
    e.target.reset();
  };

  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    setOpen(open === index ? null : index);
  }
  return (
    <div className="bg-white pt-[70px] text-black font-roboto">
      
      <section className="relative">
        <img
          src="/R6.png"
          alt="Person meditating"
          className="w-full h-auto object-cover"
          style={{ height: '489px' }}
        />
        <div className="absolute top-1/2 left-1/2 w-[370px] sm:w-auto transform -translate-x-1/2 -translate-y-1/2 px-4 text-center">
           <h2
            className="text-white font-bold text-xl sm:text-2xl md:text-3xl max-w-xl leading-snug"
            style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.6)' }}
          >
            Strengthening Bonds Through Relationship Counseling
          </h2>
          <p
            className="text-white font-medium text-sm sm:text-base mt-2 max-w-md mx-auto"
            style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.6)' }}
          >
            Guiding Couples Toward Deeper Understanding, Communication, and Connection
          </p>
          <button onClick={() => navigate("/contact")} className="mt-4 bg-[#d0f0f3] text-sm text-black rounded-full px-6 py-2 transition duration-300 hover:bg-[#b6e6e9] hover:scale-105">
            Start Your Healing Journey
          </button>
        </div>
      </section>

      
     <section className="bg-gray-50 py-12 px-4 md:px-10">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
    
    
    <div className="lg:w-1/2 space-y-4">
      <p className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full w-fit">
        Dr Serena Counseling for Individuals | Los Angeles, CA
      </p>
      <h2 className="text-3xl font-bold leading-tight">A Faith-Based Journey to Stronger Relationships</h2>
      <p className="text-base text-gray-700">
       With biblical guidance and time-tested counseling methods, Ellie empowers couples to heal emotional wounds, build deeper trust, and grow together in Christ.
      </p>
      <img
        src="/R4.png"
        alt="Open hand and leaf"
        className="rounded-lg w-[381px] h-[489px] object-cover"
      />
    </div>

    
    <div className="lg:w-1/2 lg:pt-[141px]
 space-y-4">
      
      <div className="collapse collapse-arrow  rounded-box">
        <input type="checkbox" />
        <div className="collapse-title font-semibold text-sm">
          📖 Serena Cognitive Behavioral Therapy (CBT)
        </div>
        <div className="collapse-content text-xs text-gray-700">
          Identify and replace unhealthy thinking patterns using CBT techniques infused with biblical truths to restore clarity, hope, and peace.
        </div>
      </div>

      
      <div className="collapse collapse-arrow  rounded-box">
        <input type="checkbox" />
        <div className="collapse-title font-semibold text-sm">
          🙏 Healing Prayer & Identity Work
        </div>
        <div className="collapse-content text-xs text-gray-700">
          Invite God into your story. Through prayer and Scripture, we'll uncover and replace the lies that cloud your view of yourself with His truth.
        </div>
      </div>

      
      <div className="collapse collapse-arrow  rounded-box">
        <input type="checkbox" />
        <div className="collapse-title font-semibold text-sm">
          🎨 Creative Spiritual Exploration
        </div>
        <div className="collapse-content text-xs text-gray-700">
          Using art, journaling, poetry, and biblical storytelling, Ellie helps you uncover the spiritual meaning woven into your life's challenges.
        </div>
      </div>

      
      <button onClick={() => navigate("/contact")} className="bg-emerald-800 text-white text-sm px-5 py-2 rounded-md flex items-center gap-2 hover:bg-emerald-700 transition">
        <i className="fas fa-calendar-alt"></i>
        Experience Creative Counseling
      </button>
    </div>
  </div>
</section>


      
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 scroll-mt-24" >
  <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
    <img
      alt="Portrait of Dr. Serena Blake, a compassionate female clinical psychologist"
      className="w-64 h-80 rounded-lg object-cover shadow-lg flex-shrink-0 mx-auto md:mx-0"
      height="400"
      loading="lazy"
      src="/Image2.jpg"
      width="320"
    />
    <div className="max-w-xl text-center md:text-left">
      <h2 className="text-3xl font-extrabold text-teal-900 mb-4">
        About Dr. Serena Blake
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4">
        Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions. She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
        Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
      </p>
      <address className="not-italic text-gray-600 font-semibold text-sm space-y-1">
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
        <p>
          🕒 <span className="font-semibold">Office Hours:</span>
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>In-person: Tue &amp; Thu, 10 AM–6 PM</li>
          <li>Virtual via Zoom: Mon, Wed &amp; Fri, 1 PM–5 PM</li>
        </ul>
      </address>
    </div>
  </div>
</section>

<div className=" mx-auto py-10 px-6 bg-gray-50 rounded-2xl shadow-xl">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-primary">Frequently Asked Questions</h2>


        <div className="collapse collapse-arrow  mb-3 rounded-xl border border-base-300">
          <input type="checkbox" checked={open === 1} onChange={() => toggle(1)} hidden />
          <div className="collapse-title text-lg font-semibold flex justify-between items-center" onClick={() => toggle(1)}>
            What are your fees?
            <motion.div animate={{ rotate: open === 1 ? 180 : 0 }} transition={{ duration: 0.3 }}>

            </motion.div>
          </div>
          <div className="collapse-content text-sm text-gray-600">
            1. $200 / individual session <br></br>
            2. $240 / couples session
          </div>
        </div>


        <div className="collapse collapse-arrow  mb-3 rounded-xl border border-base-300">
          <input type="checkbox" checked={open === 2} onChange={() => toggle(2)} hidden />
          <div className="collapse-title text-lg font-semibold flex justify-between items-center" onClick={() => toggle(2)}>
            Do you take insurance?
            <motion.div animate={{ rotate: open === 2 ? 180 : 0 }} transition={{ duration: 0.3 }}>

            </motion.div>
          </div>
          <div className="collapse-content text-sm text-gray-600">
            No, but a superbill is provided for self-submission.
          </div>
        </div>


        <div className="collapse collapse-arrow  mb-3 rounded-xl border border-base-300">
          <input type="checkbox" checked={open === 3} onChange={() => toggle(3)} hidden />
          <div className="collapse-title text-lg font-semibold flex justify-between items-center" onClick={() => toggle(3)}>
            Do you provide online counseling?
            <motion.div animate={{ rotate: open === 3 ? 180 : 0 }} transition={{ duration: 0.3 }}>

            </motion.div>
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Yes—all virtual sessions via Zoom.
          </div>
        </div>


        <div className="collapse collapse-arrow  mb-3 rounded-xl border border-base-300">
          <input type="checkbox" checked={open === 4} onChange={() => toggle(4)} hidden />
          <div className="collapse-title text-lg font-semibold flex justify-between items-center" onClick={() => toggle(4)}>
            What are your office hours?
            <motion.div animate={{ rotate: open === 4 ? 180 : 0 }} transition={{ duration: 0.3 }}>

            </motion.div>
          </div>
          <div className="collapse-content text-sm text-gray-600">
            1. In-person: Tue & Thu, 10 AM–6 PM<br></br>
            2. Virtual via Zoom: Mon, Wed & Fri, 1 PM–5 PM
          </div>
        </div>


        <div className="collapse collapse-arrow  mb-3 rounded-xl border border-base-300">
          <input type="checkbox" checked={open === 5} onChange={() => toggle(5)} hidden />
          <div className="collapse-title text-lg font-semibold flex justify-between items-center" onClick={() => toggle(5)}>
            What geographic areas do you serve?
            <motion.div animate={{ rotate: open === 5 ? 180 : 0 }} transition={{ duration: 0.3 }}>

            </motion.div>
          </div>
          <div className="collapse-content text-sm text-gray-600">
            My practice is located in  1287 Maplewood Drive, Los Angeles, CA 90026
          </div>
        </div>


        <div className="collapse collapse-arrow  mb-3 rounded-xl border border-base-300">
          <input type="checkbox" checked={open === 6} onChange={() => toggle(6)} hidden />
          <div className="collapse-title text-lg font-semibold flex justify-between items-center" onClick={() => toggle(6)}>
            What services do you offer?
            <motion.div animate={{ rotate: open === 6 ? 180 : 0 }} transition={{ duration: 0.3 }}>

            </motion.div>
          </div>
          <div className="collapse-content text-sm text-gray-600">
            1. Anxiety & Stress Management<br></br>
            2. Relationship Counseling<br></br>
            3. **Trauma Recovery
          </div>
        </div>


        <div className="collapse collapse-arrow  mb-3 rounded-xl border border-base-300">
          <input type="checkbox" checked={open === 7} onChange={() => toggle(7)} hidden />
          <div className="collapse-title text-lg font-semibold flex justify-between items-center" onClick={() => toggle(7)}>
            What is your couples session fee?
            <motion.div animate={{ rotate: open === 7 ? 180 : 0 }} transition={{ duration: 0.3 }}>

            </motion.div>
          </div>
          <div className="collapse-content text-sm text-gray-600">
            $240 per couples session .
          </div>
        </div>


        <div className="collapse collapse-arrow  mb-3 rounded-xl border border-base-300">
          <input type="checkbox" checked={open === 8} onChange={() => toggle(8)} hidden />
          <div className="collapse-title text-lg font-semibold flex justify-between items-center" onClick={() => toggle(8)}>
            Do you provide premarital counseling?
            <motion.div animate={{ rotate: open === 8 ? 180 : 0 }} transition={{ duration: 0.3 }}>

            </motion.div>
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Soon
          </div>
        </div>


        <div className="collapse collapse-arrow  mb-3 rounded-xl border border-base-300">
          <input type="checkbox" checked={open === 9} onChange={() => toggle(9)} hidden />
          <div className="collapse-title text-lg font-semibold flex justify-between items-center" onClick={() => toggle(9)}>
            Do you see married partners separately?
            <motion.div animate={{ rotate: open === 9 ? 180 : 0 }} transition={{ duration: 0.3 }}>

            </motion.div>
          </div>
          <div className="collapse-content text-sm text-gray-600">
            Sometimes. If one spouse needs individual support for untreated mental health concerns or trauma, I'll help them get help before we focus on couples work.
          </div>
        </div>
      </div>


    <div className="container mx-auto px-6 py-16 flex flex-wrap -mx-4">
        
        <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form  className="space-y-6" onSubmit={handleSubmit}>
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

        
        <div className="w-full lg:w-1/2 px-4">
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
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
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

export default Card2;
