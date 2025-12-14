'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', comment: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { name: 'X (Twitter)', icon: '𝕏', url: 'https://twitter.com/suzaa' },
    { name: 'Instagram', icon: '📷', url: 'https://instagram.com/suzaa' },
    { name: 'GitHub', icon: '💻', url: 'https://github.com/suzaa' },
    { name: 'Telegram', icon: '✈️', url: 'https://t.me/suzaa' },
    { name: 'WhatsApp', icon: '💬', url: 'https://wa.me/suzaa' },
    { name: 'Signal', icon: '🔒', url: 'https://signal.org/suzaa' },
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a84ff] via-[#0a84ff] to-[#00b8a9]" />
      
      {/* Depth overlay */}
      <div className="absolute inset-0 bg-black/10" />
      
      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
              Ready to talk to us?
            </h2>
            <p className="text-white/80 mb-8 leading-relaxed">
              Email us at{' '}
              <a
                href="mailto:support@suzaa.com"
                className="text-white hover:underline font-medium"
              >
                support@suzaa.com
              </a>{' '}
              or use the form below.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full rounded-lg border border-white/25 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur-md focus:border-white/40 focus:ring-2 focus:ring-white/20"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full rounded-lg border border-white/25 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur-md focus:border-white/40 focus:ring-2 focus:ring-white/20"
                />
              </div>
              <div>
                <textarea
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Comment"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-white/25 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none backdrop-blur-md focus:border-white/40 focus:ring-2 focus:ring-white/20 resize-none min-h-[140px]"
                />
              </div>
              <button
                type="submit"
                className="mt-6 w-full rounded-lg bg-white py-4 font-semibold text-[#0a84ff] shadow-sm hover:bg-white/95 transition-colors"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Right Side */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">
              Reach out on social
            </h3>
            <ul className="space-y-3">
              {socialLinks.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-white/80 hover:text-white transition-colors"
                  >
                    <span className="text-xl mr-3 w-6">{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

