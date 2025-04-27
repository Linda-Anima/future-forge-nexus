import { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Hexagon, Globe } from 'lucide-react';

const AboutPage = () => {
  const [activeValue, setActiveValue] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation on page load
    setIsVisible(true);
  }, []);

  const coreValues = [
    {
      title: "Innovation",
      description: "We continuously seek new ways to transform existing resources into groundbreaking solutions."
    },
    {
      title: "Integrity",
      description: "We build trust through transparent relationships and ethical business practices."
    },
    {
      title: "Community",
      description: "We believe in creating technology that empowers and uplifts the communities we serve."
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in every solution we develop and implement."
    },
    {
      title: "Curiosity",
      description: "We foster a culture of exploration and continuous learning that fuels our innovation."
    }
  ];

  const toggleValue = (index) => {
    setActiveValue(activeValue === index ? null : index);
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 text-blue-900 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section - REDESIGNED */}
      <div className="relative bg-gradient-to-r from-blue-700 to-blue-600 text-white overflow-hidden">
        <div className="container mx-auto px-6 py-16 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <h3 className="text-blue-200 text-xl font-medium mb-4">ABOUT US</h3>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Welcome to <span className="text-blue-200">Elevate IO</span>
              </h1>
              <div className="h-1 w-20 bg-blue-300 mb-6"></div>
              <p className="text-xl max-w-xl leading-relaxed text-blue-100 mb-8">
                We transform possibilities into reality through innovative technology and visionary solutions.
              </p>
              <div className="flex gap-4">
                <button className="inline-flex items-center px-6 py-3 bg-white text-blue-700 rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300 group">
                  Our Mission
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-medium hover:bg-white hover:text-blue-700 transition-all duration-300">
                  Our Team
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              {/* Simplified Feature Card */}
              <div className="bg-white p-6 rounded-xl shadow-xl text-blue-800 w-full max-w-md">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center shadow-md">
                    <Hexagon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Elevate IO</h3>
                    <p className="text-blue-600">Transforming Industries</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <p className="font-medium">Innovation at scale</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <p className="font-medium">Vision-driven solutions</p>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                      <p className="font-medium">Community impact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Simple wave transition */}
        <div className="w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
            <path fill="#f0f9ff" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Our Story Section - UNCHANGED */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800 text-center">Our Story</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-10"></div>
          
          <div className="relative">
            {/* Background decoration */}
            <div className="absolute -top-6 -left-6 w-12 h-12 rounded-lg bg-blue-100 z-0"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 rounded-lg bg-blue-100 z-0"></div>
            
            <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-blue-100 hover:shadow-xl transition-shadow duration-300 relative z-10">
              <p className="text-lg leading-relaxed text-blue-900">
                <span className="text-4xl font-serif text-blue-600 absolute -top-4 -left-2">"</span>
                Elevate IO began with a shared frustration: seeing so much potential around us, yet so many missed opportunities to create real change. We asked ourselves — what if innovation didn't have to wait for perfect conditions? What if we could use what we already have to build what the world has never seen? From that belief, Elevate IO was born — a movement to empower industries, uplift communities, and unlock the unseen future through technology and vision.
                <span className="text-4xl font-serif text-blue-600 absolute -bottom-4 -right-2">"</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section - UNCHANGED */}
      <div className="py-20 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-40 transform translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full opacity-40 transform -translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800 text-center">Our Core Values</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-center text-blue-600 max-w-2xl mx-auto mb-12">The principles that guide everything we do at Elevate IO, from our innovative solutions to our client relationships.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border-b-4 border-blue-500 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-4 shadow-md">
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-blue-800">{value.title}</h3>
                  <p className="text-blue-700">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile-friendly accordion for values - UNCHANGED */}
      <div className="md:hidden py-10 bg-blue-50 rounded-t-3xl -mt-6">
        <div className="container mx-auto px-4">
          <h3 className="text-xl font-bold mb-6 text-blue-800 text-center">Explore Our Values</h3>
          <div className="space-y-3">
            {coreValues.map((value, index) => (
              <div key={index} className="border border-blue-100 rounded-lg overflow-hidden bg-white shadow-sm">
                <button 
                  className="w-full flex justify-between items-center p-4 text-left bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 hover:to-blue-50"
                  onClick={() => toggleValue(index)}
                >
                  <span className="font-medium text-blue-800">{value.title}</span>
                  <ChevronDown className={`h-5 w-5 text-blue-500 transition-transform ${activeValue === index ? 'rotate-180' : ''}`} />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${activeValue === index ? 'max-h-40' : 'max-h-0'}`}>
                  <div className="p-4 bg-white">
                    {value.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial section - UNCHANGED */}
      <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white py-20 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwYzkuOTQgMCAxOCA4LjA2IDE4IDE4aDIwYzAgOS45NC04LjA2IDE4LTE4IDE4djIwYy05Ljk0IDAtMTgtOC4wNi0xOC0xOGgtMjBjMC05Ljk0IDguMDYtMTggMTgtMTh2LTIwYzkuOTQgMCAxOCA4LjA2IDE4IDE4aDIweiIgZmlsbD0iI0ZGRiIgZmlsbC1vcGFjaXR5PSIuMiIvPjwvZz48L3N2Zz4=')]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What Our Clients Say</h2>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-xl">
              <p className="text-xl italic mb-6">"Elevate IO transformed our business with innovative solutions we never thought possible. Their team didn't just understand our needs — they anticipated them."</p>
              <div className="flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <span className="text-blue-800 font-bold">JD</span>
                </div>
                <div className="text-left">
                  <p className="font-bold">Jane Doe</p>
                  <p className="text-blue-200">CEO, Tech Innovators</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with call to action - UNCHANGED */}
      <div className="bg-gradient-to-t from-blue-900 via-blue-800 to-blue-700 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Elevate Your Vision?</h2>
          <p className="mb-10 max-w-2xl mx-auto text-blue-100">Join us in our mission to transform possibilities into realities.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-full transition-colors duration-300 shadow-lg hover:shadow-xl">
              Contact Us
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;