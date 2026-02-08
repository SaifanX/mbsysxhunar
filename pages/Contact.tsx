import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

const Contact: React.FC = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: 'Residential Interior',
    details: ''
  });

  const [result, setResult] = useState("");

  useEffect(() => {
    // If a service was passed in the URL, try to pre-select it
    if (serviceParam) {
      // Map potential URL titles to dropdown values
      const availableTypes = [
        'Interior Design', 
        'Civil & Carpentry', 
        'Turnkey Projects',
        'Residential Interior', 
        'Turnkey Construction', 
        'Project Management', 
        'Design Consultation'
      ];
      
      const matched = availableTypes.find(t => t.toLowerCase() === serviceParam.toLowerCase());
      if (matched) {
        setFormData(prev => ({ ...prev, inquiryType: matched }));
      }
    }
  }, [serviceParam]);

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setResult("Sending....");
    
    // Create form data for API submission
    const submissionData = new FormData();
    submissionData.append("access_key", "e3068bf8-3c15-4094-9444-225621b099e6");
    submissionData.append("name", formData.name);
    submissionData.append("email", formData.email);
    submissionData.append("subject", `New Inquiry: ${formData.inquiryType}`);
    submissionData.append("message", `Type: ${formData.inquiryType}\nDetails: ${formData.details}`);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submissionData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({
          name: '',
          email: '',
          inquiryType: 'Residential Interior',
          details: ''
        });
      } else {
        console.error("Error", data);
        setResult(data.message || "Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("Submission Error. Please try again.");
    }
  };

  const fullAddress = "231, Zamann Manzil, 3rd Main Road, Ilyas Nagar, J.P. Nagar, Bengaluru, Karnataka 560111";
  const plusCode = "XHGJ+6W Bengaluru, Karnataka";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.016403055426!2d77.5685161750753!3d12.906666687402774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15f17ca16937%3A0x1394a04740953861!2sMBSYS!5e0!3m2!1sen!2sin!4v1770295702156!5m2!1sen!2sin";

  return (
    <div className="bg-bg-light animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center bg-charcoal overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact Hero" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl px-6">
          <span className="text-primary font-headline text-xs font-bold uppercase tracking-[0.4em] mb-6 block animate-in fade-in slide-in-from-bottom-4 duration-700">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold text-white uppercase leading-none tracking-tighter mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">Let's Build <br/>Your Legacy</h1>
          <p className="text-white/70 text-lg font-light leading-relaxed max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
             Whether you're planning a bespoke residence or a large-scale commercial project, our team is ready to bring precision and luxury to your vision.
          </p>
        </div>
      </section>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-24">
        <div className="grid lg:grid-cols-2 gap-24">
          <div>
            <h3 className="text-3xl font-headline font-bold uppercase mb-12">Contact Information</h3>
            <div className="space-y-10">
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Our Studio</h4>
                  <p className="text-charcoal/60 font-light text-sm leading-relaxed">
                    {fullAddress}<br/>
                    <span className="text-primary font-bold text-[10px] tracking-widest mt-2 block">{plusCode}</span>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">mail</span>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Email Concierge</h4>
                  <p className="text-charcoal/60 font-light text-sm">concierge@hunar.archi</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">call</span>
                <div>
                  <h4 className="font-bold text-xs uppercase tracking-widest mb-2">Direct Line</h4>
                  <p className="text-charcoal/60 font-light text-sm">+91 98863 74122</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-16 shadow-2xl border-t-4 border-primary relative lg:-mt-32 z-20">
            <form className="space-y-8" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Full Name</label>
                  <input 
                    name="name"
                    required
                    type="text" 
                    className="border-b border-charcoal/10 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Email Address</label>
                  <input 
                    name="email"
                    required
                    type="email" 
                    className="border-b border-charcoal/10 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent" 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Inquiry Type</label>
                <div className="relative">
                  <select 
                    className="w-full border-b border-charcoal/10 py-3 focus:outline-none focus:border-primary transition-colors bg-transparent appearance-none rounded-none"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                  >
                    <option value="Interior Design">Interior Design</option>
                    <option value="Civil & Carpentry">Civil & Carpentry</option>
                    <option value="Turnkey Projects">Turnkey Projects</option>
                    <option value="Residential Interior">Residential Interior</option>
                    <option value="Turnkey Construction">Turnkey Construction</option>
                    <option value="Project Management">Project Management</option>
                    <option value="Design Consultation">Design Consultation</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-0 bottom-3 pointer-events-none text-charcoal/40">expand_more</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-charcoal/40">Project Details</label>
                <textarea 
                  name="message"
                  required
                  className="border-b border-charcoal/10 py-3 h-32 resize-none focus:outline-none focus:border-primary transition-colors bg-transparent" 
                  placeholder="Tell us about your vision..."
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-charcoal text-white py-6 text-xs font-bold uppercase tracking-[0.3em] hover:bg-primary transition-all">
                Submit Inquiry
              </button>
              {result && (
                <div className="mt-4 text-center">
                  <span className={`text-[10px] uppercase tracking-widest font-bold ${result.includes('Successfully') ? 'text-green-600' : 'text-primary'}`}>
                    {result}
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      <section className="w-full h-[500px] relative bg-charcoal grayscale hover:grayscale-0 transition-all duration-1000">
        <iframe 
          title="HUNAR Studio Location"
          src={mapEmbedUrl}
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen={true} 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="opacity-70 hover:opacity-100 transition-opacity"
        />
        <div className="absolute bottom-8 right-8 bg-charcoal p-6 border border-primary hidden md:block">
          <p className="text-white text-[10px] font-bold uppercase tracking-[0.3em] mb-2">Navigation Guide</p>
          <p className="text-white/60 text-[9px] font-light leading-relaxed max-w-[200px]">
            Located in the heart of J.P. Nagar, our studio is engineered for creative excellence. 
          </p>
          <a 
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-primary text-[10px] font-bold uppercase tracking-widest hover:underline"
          >
            Open in Google Maps
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;