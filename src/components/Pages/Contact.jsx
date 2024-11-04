import  { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add the logic to send the form data to your email or API
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="p-5 max-w-3xl mx-auto font-sans">
      <h1 className="text-gray-800 text-center mb-5 text-3xl">Contact Me</h1>
      <div className="text-center mb-5 text-gray-600">
        <p>You can reach me at:</p>
        <p>Email: your.email@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <p>Or send me a message using the form below:</p>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label className="flex flex-col font-bold text-gray-800">
          Name:
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
            className="p-2 border border-gray-300 rounded-md text-base mt-1"
          />
        </label>
        <label className="flex flex-col font-bold text-gray-800">
          Email:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
            className="p-2 border border-gray-300 rounded-md text-base mt-1"
          />
        </label>
        <label className="flex flex-col font-bold text-gray-800">
          Message:
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            className="p-2 border border-gray-300 rounded-md text-base mt-1 h-32"
          />
        </label>
        <button 
          type="submit" 
          className="p-2 px-5 border-none rounded-md bg-gray-800 text-white text-base cursor-pointer hover:bg-[#B99B6C]"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;