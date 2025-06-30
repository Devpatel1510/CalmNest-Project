/* eslint-disable no-unused-vars */
import React, { useState, useEffect,useRef } from "react";
import { motion } from 'framer-motion'
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const HomePage1 = () => {


  const location = useLocation();

   const [yearsExp, setYearsExp] = useState(0);
  const [clientSessions, setClientSessions] = useState(0);
  const sectionRef = useRef(null);
  const animationStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !animationStarted.current) {
          animationStarted.current = true;
          
          
          let start = 0;
          const endYears = 8;
          const durationYears = 2000; 
          const incrementYears = endYears / (durationYears / 16);
          
          const yearsTimer = setInterval(() => {
            start += incrementYears;
            if (start >= endYears) {
              clearInterval(yearsTimer);
              setYearsExp(endYears);
            } else {
              setYearsExp(Math.floor(start));
            }
          }, 16);
          
          
          let startSessions = 0;
          const endSessions = 500;
          const durationSessions = 2500; 
          const incrementSessions = endSessions / (durationSessions / 16);
          
          const sessionsTimer = setInterval(() => {
            startSessions += incrementSessions;
            if (startSessions >= endSessions) {
              clearInterval(sessionsTimer);
              setClientSessions(endSessions);
            } else {
              setClientSessions(Math.floor(startSessions));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const [errors, setErrors] = useState({});

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




  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

 

  const navigate = useNavigate();
  const [, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    reason: "",
    preferredTime: "",
    agree: false,
  });

  const validate = () => {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone is required";
  } else if (!/^\d{10}$/.test(formData.phone)) {
    newErrors.phone = "Phone must be 10 digits";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Email is invalid";
  }

  if (!formData.reason.trim()) {
    newErrors.reason = "Please select a reason";
  }

  if (!formData.preferredTime.trim()) {
    newErrors.preferredTime = "Please select a time";
  }

  if (!formData.agree) {
    newErrors.agree = "You must agree to proceed";
  }

  return newErrors;
};


  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = validate();
  toast.success("Sent successfully");

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
  } else {
    setErrors({});
    
    console.log("Submitting:", formData);
  }
};

  return (
    <div className="scroll-smooth bg-white text-gray-900 font-['Inter']">



      
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center text-center bg-gradient-to-b from-teal-900/90 to-teal-900/70"
      >
        <img
          alt="Calm serene nature background with soft light"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          loading="lazy"
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1920&q=80"
        />
        <div className="relative max-w-3xl motion-preset-blur-right px-6">
          <p className="text-lg sm:text-xl text-gray-100 mb-2">
           Serena Blake Counseling Services in Los Angeles, CA 
        </p>
          <h1 className="text-white font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight drop-shadow-lg">
            Find Peace. Heal at Your Own Pace
          </h1>
          <h2 className="mt-4 text-teal-200 font-semibold text-lg sm:text-xl md:text-2xl drop-shadow-md">
            Personalized, compassionate therapy to help you navigate life’s
            challenges with confidence and clarity.
          </h2>
          <Link to="/contact"
            className="inline-block mt-10 bg-teal-600 hover:bg-teal-700 text-white font-semibold text-lg rounded-full px-8 py-4 shadow-lg transition"
            
          >
            Book a Free Consult
          </Link>
        </div>
      </section>

      <section 
      ref={sectionRef}
      className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Providing compassionate and effective Individual and Couples Therapy
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
          >
            <div className="text-5xl md:text-6xl font-bold text-indigo-600 mb-4">
              {yearsExp}+
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Years Experience
            </h3>
            <p className="text-gray-600">
              Practice helping clients achieve their mental health goals
            </p>
          </div>
          
          
          <div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-5xl md:text-6xl font-bold text-indigo-600 mb-4">
              {clientSessions.toLocaleString()}+
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">
              Individual Client Sessions
            </h3>
            <p className="text-gray-600">
              Helping individuals and couples heal, grow, and find purpose
            </p>
          </div>
        </div>
      </div>
    </section>

      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28 scroll-mt-24" id="about">
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

      <section className="bg-teal-50 py-20 px-6 scroll-mt-24" id="services">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-extrabold text-teal-900 mb-4">
            Services &amp; Specialties
          </h2>
          <p className="max-w-3xl mx-auto text-teal-800 text-lg font-semibold">
            Tailored therapy services to support your mental health and well-being.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
          
          <article className="bg-white hover:shadow-xl hover:scale-[1.02] rounded-lg shadow-lg overflow-hidden flex flex-col" onClick={() => navigate('/card1')}>
            <img
              alt="Calm person meditating in nature representing anxiety and stress management"
              className="w-full h-48 object-cover"
              height="400"
              loading="lazy"
              src="https://storage.googleapis.com/a1aa/image/4dc43d68-145c-42f5-db11-0ebd58449967.jpg"
              width="600"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-teal-900 mb-3">
                Anxiety &amp; Stress Management
              </h3>
              <p className="text-gray-700 flex-grow">
                Learn effective coping strategies and mindfulness techniques to reduce anxiety and manage stress in your daily life. Dr. Blake provides personalized tools to help you regain calm and balance.
              </p>
            </div>
          </article>

          
          <article className="bg-white hover:shadow-xl hover:scale-[1.02] rounded-lg shadow-lg overflow-hidden flex flex-col" onClick={() => navigate('/card2')}>
            <img
              alt="Couple holding hands and smiling representing relationship counseling"
              className="w-full h-48 object-cover"
              height="400"
              loading="lazy"
              src="https://storage.googleapis.com/a1aa/image/e04c62c3-e30d-4860-6aba-4e5fb88aab08.jpg"
              width="600"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-teal-900 mb-3">
                Relationship Counseling
              </h3>
              <p className="text-gray-700 flex-grow">
                Strengthen communication and deepen connection with your partner through guided counseling sessions. Dr. Blake helps couples navigate challenges and build healthier relationships.
              </p>
            </div>
          </article>

          
          <article className="bg-white rounded-lg hover:shadow-xl hover:scale-[1.02] shadow-lg overflow-hidden flex flex-col" onClick={() => navigate('/card3')}>
            <img
              alt="Peaceful sunrise over mountains representing trauma recovery and healing"
              className="w-full h-48 object-cover"
              height="400"
              loading="lazy"
              src="https://storage.googleapis.com/a1aa/image/c9476b73-36ca-4531-bb6c-aa501b42041f.jpg"
              width="600"
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold text-teal-900 mb-3">
                Trauma Recovery
              </h3>
              <p className="text-gray-700 flex-grow">
                Heal from past trauma with compassionate, evidence-based therapy. Dr. Blake supports you in processing difficult experiences and reclaiming your sense of safety and empowerment.
              </p>
            </div>
          </article>
        </div>

        <div className="max-w-7xl mx-auto mt-12 text-center text-gray-800 font-semibold text-lg">
          <p>Session Fees:</p>
          <p>
            Individual session: <span className="text-teal-700">$200</span>
          </p>
          <p>
            Couples session: <span className="text-teal-700">$240</span>
          </p>
        </div>
      </section>

      <section className="bg-[#1F4B4E] text-[#C2E6E8] py-16 px-8 flex flex-col lg:flex-row justify-between items-center gap-8">
      <h2 className="text-4xl font-semibold text-center lg:text-left">
        Schedule A <br /> Consultation
      </h2>

      <p className="text-center lg:text-left text-lg font-semibold max-w-xl">
        CalmNest is currently accepting new clients. Available for online and in-person sessions.
      </p>

      <button onClick={()=>navigate("/contact")}className="relative overflow-hidden border border-[#C2E6E8] text-[#C2E6E8] px-6 py-3 rounded-md flex items-center gap-2 font-semibold group hover:shadow-glow transition-all duration-300">
  
  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-transparent via-[#C2E6E8]/20 to-transparent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out pointer-events-none skew-x-12" />

  
  <span className="relative z-10 flex items-center gap-2">
    <Sparkles className="w-5 h-5 text-[#C2E6E8] group-hover:animate-spin-slow" />
    Start Healing
  </span>
</button>


    </section>

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

      <section id="Rates" className="max-w-4xl mx-auto px-6 py-20 scroll-mt-24" >
        <h2 className="text-4xl font-extrabold text-teal-900 mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          
          <details className="border border-teal-300 rounded-lg p-5 group" open>
            <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
              Do you accept insurance?
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-teal-700 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">
              No, but a superbill is provided for self-submission to your insurance company.
            </p>
          </details>

          
          <details className="border border-teal-300 rounded-lg p-5 group">
            <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
              Are online sessions available?
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-teal-700 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Yes—all virtual sessions are conducted securely via Zoom.
            </p>
          </details>

          <details className="border border-teal-300 rounded-lg p-5 group">
            <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
              What is your cancellation policy?
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-teal-700 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">
              A 24-hour notice is required for cancellations or rescheduling to avoid fees.
            </p>
          </details>

         
          <details className="border border-teal-300 rounded-lg p-5 group" open>
            <summary className="font-semibold text-lg cursor-pointer list-none flex justify-between items-center">
              What are your fees?
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-teal-700 group-open:rotate-180 transition-transform"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">
              1. $200 / individual session<br></br>
              2. $240 / couples session
            </p>
          </details>
        </div>
      </section>

      <section className="bg-teal-50 py-20 px-6 scroll-mt-24" id="contact">
         <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-10">
    <h2 className="text-4xl font-extrabold text-teal-900 mb-8 text-center">
      Contact Dr. Serena Blake
    </h2>
    <form className="space-y-6" onSubmit={handleSubmit} id="contactForm">
     
      <div>
        <label className="block font-semibold mb-1" htmlFor="name">
          Name<span className="text-red-600">*</span>
        </label>
        <input
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
        />
        {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name}</p>}
      </div>

     
      <div>
        <label className="block font-semibold mb-1" htmlFor="phone">
          Phone<span className="text-red-600">*</span>
        </label>
        <input
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (555) 555-5555"
          value={formData.phone}
          onChange={handleInputChange}
        />
        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
      </div>

      
      <div>
        <label className="block font-semibold mb-1" htmlFor="email">
          Email<span className="text-red-600">*</span>
        </label>
        <input
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
      </div>

      
      <div>
        <label className="block font-semibold mb-1" htmlFor="reason">
          What brings you here?<span className="text-red-600">*</span>
        </label>
        <textarea
          className="w-full border border-gray-300 rounded-md px-4 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-teal-600"
          id="reason"
          name="reason"
          rows="4"
          value={formData.reason}
          onChange={handleInputChange}
        />
        {errors.reason && <p className="text-red-600 text-sm mt-1">{errors.reason}</p>}
      </div>

      
      <div>
        <label className="block font-semibold mb-1" htmlFor="preferredTime">
          Preferred time to reach you<span className="text-red-600">*</span>
        </label>
        <input
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
          id="preferredTime"
          name="preferredTime"
          type="text"
          placeholder="e.g. Weekdays after 3 PM"
          value={formData.preferredTime}
          onChange={handleInputChange}
        />
        {errors.preferredTime && <p className="text-red-600 text-sm mt-1">{errors.preferredTime}</p>}
      </div>

      
      <div className="flex items-center space-x-3">
        <input
          id="agree"
          name="agree"
          type="checkbox"
          checked={formData.agree}
          onChange={handleInputChange}
          className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
        />
        <label className="font-semibold text-gray-700 select-none" htmlFor="agree">
          I agree to be contacted<span className="text-red-600">*</span>
        </label>
      </div>
      {errors.agree && <p className="text-red-600 text-sm mt-1">{errors.agree}</p>}

      

      
      <button
        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full py-3 text-lg transition"
        type="submit"
      >
        Submit
      </button>

     
    </form>
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

export default HomePage1;
