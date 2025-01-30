import { Phone, Upload } from 'lucide-react';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import Select from 'react-select'; // Import react-select
import India from '../assets/India.svg'; // Import the India flag image
import b from '../assets2/b.svg';
import dribble from '../assets2/dribble.svg';
import fecbook from '../assets2/fecbook.svg';
import linkdin from '../assets2/linkdin.svg';
import medium from '../assets2/medium.svg';
import p from '../assets2/p.svg';
import twiter from '../assets2/twiter.svg';

// Country data for the select dropdown
const countryOptions = [
  { value: 'IN', label: '🇮🇳 +91', flag: India },
  { value: 'US', label: '🇺🇸 +1', flag: '' },
  // You can add more countries here
];

// Custom styling for react-select
const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#fff',
    borderColor: '#d1d5db',
    borderRadius: '8px',
    padding: '5px',
    fontSize: '16px',
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '8px',
    marginTop: '5px',
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#333',
  }),
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '', // Added email to state
    contactNumber: '',
    idea: '',
    file: null,
    captcha: '',
  });

  const [captchaValid, setCaptchaValid] = useState(false);
  const [selectedPhoneCode, setSelectedPhoneCode] = useState('IN');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValid(value ? true : false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaValid) {
      alert('Please complete the CAPTCHA.');
      return;
    }
    // Handle form submission logic here
  };

  const handlePhoneCodeSelect = (selectedOption) => {
    setSelectedPhoneCode(selectedOption.value);
  };

  return (
    <section className="bg-[#01132E] min-h-screen py-16 text-white">
      <div className="container mx-auto flex flex-col lg:flex-row p-4 items-start gap-12">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col items-start space-y-6">
          <h3 className="text-4xl font-bold mb-12">We Are Here To Help You</h3>
          <p className="text-3xl font-bold leading-relaxed mb-14">
            Let’s Transform Your <br /> Vision Into Value.
          </p>

          <p className="text-lg font-medium mb-4">Contact us:</p>
          <ul className="mb-12">
            <li className="text-md mb-6 flex items-center space-x-4">
              <img src={b} alt="Skype Icon" className="w-5 h-5" />
              <span>biz.tecoreng</span>
            </li>
            <li className="text-md mb-6 flex items-center space-x-4">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+91 85117 46476</span>
            </li>
          </ul>

          <p className="text-3xl font-extrabold mb-4">Our Socials:</p>
          <p className="text-md font-semibold mt-4 mb-8">
            Don’t Miss To Follow Us On Our Social Networks Accounts.
          </p>
          <div className="flex space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twiter} alt="Twitter" className="w-8 h-8" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={fecbook} alt="Facebook" className="w-8 h-8" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkdin} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <img src={p} alt="Pinterest" className="w-8 h-8" />
            </a>
            <a href="https://medium.com" target="_blank" rel="noopener noreferrer">
              <img src={medium} alt="Medium" className="w-8 h-8" />
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer">
              <img src={dribble} alt="Dribble" className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="lg:w-1/2 bg-gray-100 p-6 rounded-3xl shadow-lg relative -mt-2 -ml-2">
          <h3 className="text-5xl font-semibold mb-4">
            <span className="text-black">Get in </span>
            <span className="bg-gradient-to-r from-orange-500 to-orange-300 text-transparent bg-clip-text">
              Touch
            </span>
          </h3>
          <p className="text-lg mb-6 text-black">
            We are always ready to help. There are many ways to contact us. You may drop us a line, give us a call, or send an email.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-2 border-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
                placeholder="Full Name"
                required
              />
            </div>

            {/* Added email input field */}
            <div className="mb-6">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-2 border-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="mb-6 flex space-x-2">
              <Select
                options={countryOptions}
                onChange={handlePhoneCodeSelect}
                getOptionLabel={(e) => (
                  <div className="flex items-center space-x-2">
                    <img src={e.flag} alt={`${e.label} Flag`} className="w-6 h-4" />
                  </div>
                )}
                styles={customStyles}
                value={countryOptions.find((option) => option.value === selectedPhoneCode)}
              />
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="w-2/3 py-2 border-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
                placeholder="Contact number"
                required
              />
            </div>

            <div className="mb-6">
              <textarea
                name="idea"
                value={formData.idea}
                onChange={handleChange}
                className="w-full py-2 border-2 border-gray-300 focus:outline-none focus:ring-0 focus:border-blue-500"
                placeholder="Let's Talk About Your Idea"
                required
              />
            </div>

            <div className="mb-6 relative">
              <label
                htmlFor="file-upload"
                className="w-full py-5 border-2 border-dotted border-gray-300 text-gray-600 text-center cursor-pointer flex items-center justify-center"
              >
                <Upload className="w-6 h-6 text-gray-600" />
                <span className="ml-2">Upload Additional File</span>
                <input
                  id="file-upload"
                  type="file"
                  name="file"
                  onChange={handleChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
              </label>
            </div>
            <div className="mb-6">
              <ReCAPTCHA
                sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY" // Replace with your Site Key
                onChange={handleCaptchaChange}
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-4 bg-gradient-to-r from-orange-500 to-orange-700 text-white font-semibold rounded-lg hover:bg-orange-700 transition-all duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
