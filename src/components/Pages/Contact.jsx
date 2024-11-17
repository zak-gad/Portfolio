const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gray-800  flex justify-center items-center p-4'>
      
      
        <form method='POST' action="https://getform.io/f/adrrglva" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-customGold text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - vutukuri.kumar192st.niituniversity.in</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-customGold hover:border-customGold px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact



// import  { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you can add the logic to send the form data to your email or API
//     console.log('Form Data Submitted:', formData);
//   };

//   return (
//     <div className="p-5 max-w-3xl mx-auto font-sans">
//       <h1 className="text-gray-800 text-center mb-5 text-3xl">Contact Me</h1>
//       <div className="text-center mb-5 text-gray-600">
//         <p>You can reach me at:</p>
//         <p>Email: gadelkarimzakaria@gmail.com.com</p>
//         <p>Phone: (123) 456-7890</p>
//         <p>Or send me a message using the form below:</p>
//       </div>
//       <form method='POST' action='https://getform.io/f/adrrglva' className="flex flex-col gap-4" onSubmit={handleSubmit}>
//         <label className="flex flex-col font-bold text-gray-800">
//           Name:
//           <input 
//             type="text" 
//             name="name" 
//             value={formData.name} 
//             onChange={handleChange} 
//             required 
//             className="p-2 border border-gray-300 rounded-md text-base mt-1"
//           />
//         </label>
//         <label className="flex flex-col font-bold text-gray-800">
//           Email:
//           <input 
//             type="email" 
//             name="email" 
//             value={formData.email} 
//             onChange={handleChange} 
//             required 
//             className="p-2 border border-gray-300 rounded-md text-base mt-1"
//           />
//         </label>
//         <label className="flex flex-col font-bold text-gray-800">
//           Message:
//           <textarea 
//             name="message" 
//             value={formData.message} 
//             onChange={handleChange} 
//             required 
//             className="p-2 border border-gray-300 rounded-md text-base mt-1 h-32"
//           />
//         </label>
//         <button 
//           type="submit" 
//           className="p-2 px-5 border-none rounded-md bg-gray-800 text-white text-base cursor-pointer hover:bg-[#B99B6C]"
//         >
//           Send
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Contact;