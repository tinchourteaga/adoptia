import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Adoptia</h2>
          <div className="h-1 w-20 bg-3B7FD9 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Founded in 2024, Adoptia is revolutionizing pet adoption by using AI technology
            to create perfect matches between shelter animals and loving homes.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-3B7FD9/20 to-1AC0C6/20 rounded-xl transform -rotate-2"></div>
              <img 
                src="https://images.pexels.com/photos/1904105/pexels-photo-1904105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Happy dog with adopter" 
                className="rounded-xl shadow-lg relative z-10 w-full object-cover"
              />
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Adoptia was created by a dedicated team of animal lovers who saw a better way to connect pets with people. Through their experiences volunteering at shelters, they witnessed the struggles shelters faced in placing animals and the frustration adopters felt trying to find the right companion.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Today, our AI-powered platform brings together shelters and potential adopters in a way that considers
              not just basic preferences, but lifestyle factors, comfort with animals, and pet personalities to ensure
              successful, lasting adoptions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe that technology, when designed with compassion and understanding, can help more pets find
              their forever homes while supporting everyone involved in this life-changing journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;