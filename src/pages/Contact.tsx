import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Loader,
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [activeTab, setActiveTab] = useState('form');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Reset scroll position
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setSubmitted(false);
      }, 3000);
    }, 1500);
  };

  const contactInfo = [
    { 
      icon: <Mail className="w-5 h-5" />, 
      title: "Email Us", 
      content: "contact@elevateio.com",
      details: "We'll respond within 24 hours"
    },
    { 
      icon: <Phone className="w-5 h-5" />, 
      title: "Call Us", 
      content: "+1 (555) 123-4567",
      details: "Mon-Fri, 9am-5pm EST"
    },
    { 
      icon: <MapPin className="w-5 h-5" />, 
      title: "Visit Us", 
      content: "123 Innovation Drive",
      details: "Suite 400, San Francisco, CA 94107"
    },
    { 
      icon: <Clock className="w-5 h-5" />, 
      title: "Business Hours", 
      content: "Monday-Friday: 9am-5pm",
      details: "Weekends: Closed"
    }
  ];

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Redesigned Hero Section - More Professional and Standard */}
      <div className="bg-blue-50">
        {/* Hero Banner */}
        <div className="relative bg-blue-700 py-16 overflow-hidden">
          {/* Background patterns */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{ 
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)', 
              backgroundSize: '20px 20px' 
            }}></div>
          </div>
          
          <div className="absolute right-0 top-0 h-full w-1/3 bg-blue-600 transform -skew-x-12 opacity-50"></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl">
              <div className="inline-block px-4 py-1 bg-blue-800 bg-opacity-50 rounded-full text-blue-100 text-sm font-medium mb-5">
                GET IN TOUCH WITH OUR TEAM
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                We're Here to <span className="text-blue-200">Help You Succeed</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-xl">
                Have questions or ready to start your next project? Our team of experts is just a message away.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contact-form" className="px-6 py-3 bg-white text-blue-700 rounded-md font-medium hover:bg-blue-50 transition-colors shadow-md hover:shadow-lg">
                  Contact Us Now
                </a>
                <a href="#faq" className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-800 transition-colors border border-blue-500">
                  View FAQs
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Cards Overlapping section */}
        <div className="container mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-10 mb-12">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-6 border-b-2 border-blue-500"
              >
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <div className="text-blue-600">
                        {info.icon}
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">{info.title}</h3>
                    <p className="text-blue-800 font-medium">{info.content}</p>
                    <p className="text-sm text-blue-500 mt-1">{info.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Subtle wave divider */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" className="fill-white">
          <path d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,53.3C672,43,768,21,864,21.3C960,21,1056,43,1152,53.3C1248,64,1344,64,1392,64L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"></path>
        </svg>
      </div>

      {/* Main Content Section */}
      <div className="container mx-auto px-6 py-12">
        {/* Contact Form Section */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16" id="contact-form">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">Send Us a Message</h2>
            
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-700 mb-2">Thank You!</h3>
                <p className="text-green-600">Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-blue-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formState.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-blue-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    value={formState.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center"
                >
                  {submitting ? (
                    <>
                      <Loader className="w-5 h-5 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16" id="faq">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-800 mb-4">Frequently Asked Questions</h2>
            <div className="h-1 w-16 bg-blue-500 mx-auto mb-6"></div>
            <p className="text-blue-600 max-w-2xl mx-auto">
              Find quick answers to common questions about our services and process.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                q: "What industries do you serve?",
                a: "We work with a diverse range of industries including healthcare, finance, education, retail, and manufacturing. Our solutions are customized to meet the specific needs of each sector."
              },
              {
                q: "How long does a typical project take?",
                a: "Project timelines vary based on scope and complexity. Small projects may be completed in 2-4 weeks, while larger initiatives typically take 2-6 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                q: "Do you offer ongoing support?",
                a: "Yes, we provide comprehensive support and maintenance packages for all our solutions. Our team is available to ensure your systems run smoothly and can be quickly updated as your needs evolve."
              },
              {
                q: "What is your pricing structure?",
                a: "We offer flexible pricing models including project-based, retainer, and subscription options. During our consultation, we'll help determine the most cost-effective approach for your specific needs."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-500">
                <h3 className="text-lg font-bold text-blue-800 mb-3">{faq.q}</h3>
                <p className="text-blue-700">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
          <div className="relative px-6 py-12 md:py-16 md:px-12">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden opacity-10">
              <div className="absolute -right-24 -top-24 w-96 h-96 bg-white rounded-full"></div>
              <div className="absolute -left-24 -bottom-24 w-64 h-64 bg-white rounded-full"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Schedule a free consultation with our experts and discover how Elevate IO can help you achieve your business goals.
              </p>
              <button className="inline-flex items-center px-8 py-3 bg-white text-blue-700 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 group">
                Schedule Consultation
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gradient-to-b from-blue-800 to-blue-900 text-white py-12 mt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">Elevate IO</h3>
            <p className="text-blue-200">Transforming possibilities into reality</p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social, index) => (
              <a key={index} href="#" className="text-blue-200 hover:text-white transition-colors">
                {social}
              </a>
            ))}
          </div>
          
          <div className="text-blue-300 text-sm">
            &copy; {new Date().getFullYear()} Elevate IO. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;