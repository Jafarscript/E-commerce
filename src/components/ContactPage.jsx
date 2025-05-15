import { Mail, Phone } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  useEffect(() => { window.scrollTo(0, 0); }, []);
  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); console.log("Contact form submitted:", formData); alert("Message sent! (This is a demo)"); setFormData({ name: '', email: '', phone: '', message: '' }); };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-7xl">
        {/* Breadcrumbs handled globally */}
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-1 p-6 shadow rounded-md space-y-6">
          <div className="flex items-start gap-3">
            <div className="bg-red-500 text-white p-2.5 rounded-full mt-1"><Phone size={20}/></div>
            <div><h4 className="font-medium text-gray-800">Call To Us</h4><p className="text-xs text-gray-500 mt-1 mb-2">We are available 24/7, 7 days a week.</p><p className="text-xs text-gray-600">Phone: +8801611112222</p></div>
          </div>
          <hr/>
          <div className="flex items-start gap-3">
            <div className="bg-red-500 text-white p-2.5 rounded-full mt-1"><Mail size={20}/></div>
            <div><h4 className="font-medium text-gray-800">Write To US</h4><p className="text-xs text-gray-500 mt-1 mb-2">Fill out our form and we will contact you within 24 hours.</p><p className="text-xs text-gray-600">Emails: customer@exclusive.com</p><p className="text-xs text-gray-600">Emails: support@exclusive.com</p></div>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="md:col-span-2 p-6 shadow rounded-md space-y-6">
          <div className="grid sm:grid-cols-3 gap-6">
            <input type="text" name="name" placeholder="Your Name*" value={formData.name} onChange={handleChange} required className="w-full bg-gray-100 rounded p-3 text-sm focus:bg-white focus:ring-1 focus:ring-gray-400"/>
            <input type="email" name="email" placeholder="Your Email*" value={formData.email} onChange={handleChange} required className="w-full bg-gray-100 rounded p-3 text-sm focus:bg-white focus:ring-1 focus:ring-gray-400"/>
            <input type="tel" name="phone" placeholder="Your Phone" value={formData.phone} onChange={handleChange} className="w-full bg-gray-100 rounded p-3 text-sm focus:bg-white focus:ring-1 focus:ring-gray-400"/>
          </div>
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} rows="6" className="w-full bg-gray-100 rounded p-3 text-sm focus:bg-white focus:ring-1 focus:ring-gray-400"></textarea>
          <div className="text-right">
            <button type="submit" className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition text-sm">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage