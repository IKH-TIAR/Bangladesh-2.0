import React from 'react';
import logo from '../assets/logo.png';
import visualization from '../assets/visualization.jpg';
import { FaChartLine, FaComments, FaUsers, FaInfoCircle, FaRegNewspaper } from 'react-icons/fa';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-green-700 text-white shadow-md">
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Bangladesh Reform Tracker Logo" className="h-10 w-10 mr-3" />
            <span className="font-bold text-xl">Bangladesh Reform Tracker</span>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#features" className="hover:text-green-200 transition">Features</a>
            <a href="#reforms" className="hover:text-green-200 transition">Active Reforms</a>
            <a href="#about" className="hover:text-green-200 transition">About</a>
            <a href="#contact" className="hover:text-green-200 transition">Contact</a>
          </div>
          <div className="flex space-x-4">
            <button className="bg-white text-green-700 px-4 py-2 rounded-md font-medium hover:bg-green-100 transition">Login</button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-500 transition">Sign Up</button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-green-700 text-white">
        <div className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-16 md:mb-0 md:pr-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Track Bangladesh's Progress Together</h1>
            <p className="text-xl mb-8">
              Stay informed, engage in discussions, and contribute to Bangladesh's reform journey. Participate in a community dedicated to transparency and progress.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-green-700 hover:bg-green-100 px-6 py-3 rounded-lg font-medium text-lg transition shadow-lg">
                Get Started
              </button>
              <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-medium text-lg transition shadow-lg">
                Explore Reforms
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src={visualization}
              alt="Bangladesh Reform Visualization" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">What You Can Do Here</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaChartLine className="text-green-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Track Reform Progress</h3>
              <p className="text-gray-600">
                Monitor the implementation of government reforms with real-time updates and detailed timelines. Set notifications for key milestones.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaComments className="text-green-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Join Discussions</h3>
              <p className="text-gray-600">
                Participate in Reddit-style discussions for each reform initiative. Share your perspective and engage with diverse viewpoints.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition">
              <div className="bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <FaUsers className="text-green-700 text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Community Engagement</h3>
              <p className="text-gray-600">
                Connect with other citizens concerned about Bangladesh's future. Upvote valuable insights and contribute to constructive dialogue.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
{/* Active Reforms Section */}
      <section id="reforms" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 text-gray-800">Featured Reforms</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Digital Governance Initiative",
                category: "Technology",
                progress: 65,
                participants: 1253
              },
              {
                title: "Education Curriculum Reform",
                category: "Education",
                progress: 42,
                participants: 876
              },
              {
                title: "Healthcare Access Expansion",
                category: "Health",
                progress: 28,
                participants: 624
              },
              {
                title: "Agricultural Modernization",
                category: "Agriculture",
                progress: 51,
                participants: 745
              },
              {
                title: "Transportation Infrastructure",
                category: "Infrastructure",
                progress: 37,
                participants: 528
              },
              {
                title: "Environmental Protection Acts",
                category: "Environment",
                progress: 19,
                participants: 392
              }
            ].map((reform, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="h-3 bg-green-600" style={{ width: ${reform.progress}% }}></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-green-700 bg-green-100 px-3 py-1 rounded-full">
                      {reform.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {reform.progress}% Complete
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{reform.title}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of this reform initiative and its goals for the development of Bangladesh.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                      {reform.participants} participants
                    </span>
                    <button className="text-green-700 hover:text-green-600 font-medium transition">
                      View Details →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-600 transition shadow-md">
              View All Reforms
            </button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-green-700 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">120+</h3>
              <p className="text-green-100">Active Reforms</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">15,000+</h3>
              <p className="text-green-100">Registered Users</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">45,000+</h3>
              <p className="text-green-100">Comments</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">8</h3>
              <p className="text-green-100">Government Ministries</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img 
                src="/api/placeholder/600/400" 
                alt="About Bangladesh Reform Tracker" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mb-6">
                Bangladesh Reform Tracker was created to foster transparency and civic engagement in the governance of Bangladesh. We believe that informed citizens are empowered citizens.
              </p>
              <p className="text-gray-600 mb-6">
                Our platform brings together diverse perspectives from across the country to track, discuss, and evaluate reform initiatives that impact our collective future.
              </p>
              <div className="flex space-x-4">
                <button className="flex items-center text-green-700 hover:text-green-600 font-medium transition">
                  <FaInfoCircle className="mr-2" />
                  Learn More About Us
                </button>
                <button className="flex items-center text-green-700 hover:text-green-600 font-medium transition">
                  <FaRegNewspaper className="mr-2" />
                  Read Our Blog
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
export default LandingPage;
