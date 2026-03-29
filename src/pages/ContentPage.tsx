import { useState } from "react";
import { Save, Image as ImageIcon, Plus, Trash2, MoveUp, MoveDown, ExternalLink } from "lucide-react";

export default function ContentPage() {
  const [heroText, setHeroText] = useState("Ethereal Care for Your Perfect Smile.");
  const [subText, setSubText] = useState("Experience dental precision combined with a sanctuary of comfort and modern aesthetics.");

  const services = [
    { id: 1, title: "Cosmetic Dentistry", desc: "Veneers, Whitening, and Smile Design." },
    { id: 2, title: "Orthodontics", desc: "Invisalign and Modern Braces." },
    { id: 3, title: "Dental Implants", desc: "Permanent solutions for missing teeth." },
  ];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Site Content</h2>
          <p className="text-on-surface-variant mt-1">Manage the public face of Dental Sanctuary.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-surface-container-low text-on-surface px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-surface-container transition-all">
            <ExternalLink className="w-5 h-5" />
            Preview Site
          </button>
          <button className="primary-gradient text-on-primary px-8 py-3 rounded-lg font-bold flex items-center gap-2 shadow-sm hover:opacity-90 transition-all">
            <Save className="w-5 h-5" />
            Save Changes
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Hero & Sections */}
        <div className="lg:col-span-8 space-y-10">
          {/* Hero Section Management */}
          <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-custom border border-outline-variant/5">
            <h3 className="font-headline text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center text-sm">01</span>
              Hero Section
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Main Headline</label>
                <input
                  value={heroText}
                  onChange={(e) => setHeroText(e.target.value)}
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 text-lg font-bold text-on-surface focus:ring-2 focus:ring-primary transition-all outline-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Sub-headline / Description</label>
                <textarea
                  value={subText}
                  onChange={(e) => setSubText(e.target.value)}
                  rows={3}
                  className="w-full bg-surface-container-low border-none rounded-xl py-4 px-5 text-sm font-medium text-on-surface-variant focus:ring-2 focus:ring-primary transition-all outline-none resize-none"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Primary CTA Label</label>
                  <input className="w-full bg-surface-container-low border-none rounded-xl py-3 px-5 text-sm font-bold outline-none" defaultValue="Book Appointment" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Secondary CTA Label</label>
                  <input className="w-full bg-surface-container-low border-none rounded-xl py-3 px-5 text-sm font-bold outline-none" defaultValue="Our Services" />
                </div>
              </div>
            </div>
          </section>

          {/* Featured Services */}
          <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-custom border border-outline-variant/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-headline text-xl font-bold flex items-center gap-2">
                <span className="w-8 h-8 rounded-lg bg-tertiary/10 text-tertiary flex items-center justify-center text-sm">02</span>
                Featured Services
              </h3>
              <button className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
                <Plus className="w-4 h-4" /> Add Service
              </button>
            </div>
            <div className="space-y-4">
              {services.map((service) => (
                <div key={service.id} className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl group">
                  <div className="flex flex-col gap-1">
                    <button className="p-1 text-on-surface-variant/30 hover:text-primary transition-colors"><MoveUp className="w-4 h-4" /></button>
                    <button className="p-1 text-on-surface-variant/30 hover:text-primary transition-colors"><MoveDown className="w-4 h-4" /></button>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-on-surface">{service.title}</h4>
                    <p className="text-xs text-on-surface-variant">{service.desc}</p>
                  </div>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all">
                    <button className="p-2 text-on-surface-variant hover:text-primary transition-colors"><Plus className="w-5 h-5" /></button>
                    <button className="p-2 text-on-surface-variant hover:text-error transition-colors"><Trash2 className="w-5 h-5" /></button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Column: Media & Assets */}
        <div className="lg:col-span-4 space-y-8">
          <section className="bg-surface-container-lowest p-6 rounded-2xl shadow-custom border border-outline-variant/5">
            <h3 className="font-headline text-lg font-bold mb-4">Hero Media</h3>
            <div className="aspect-video bg-surface-container-low rounded-xl border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center gap-3 group cursor-pointer hover:border-primary transition-all">
              <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <ImageIcon className="w-6 h-6" />
              </div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Upload Hero Image</p>
              <p className="text-[10px] text-on-surface-variant/50">Recommended: 1920x1080px</p>
            </div>
            <div className="mt-4 p-3 bg-surface-container-low rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src="https://picsum.photos/seed/hero/100/100" className="w-10 h-10 rounded object-cover" />
                <div>
                  <p className="text-xs font-bold text-on-surface">hero_v2.jpg</p>
                  <p className="text-[10px] text-on-surface-variant">1.2 MB</p>
                </div>
              </div>
              <button className="text-error hover:text-error/80 transition-colors"><Trash2 className="w-4 h-4" /></button>
            </div>
          </section>

          <section className="bg-surface-container-lowest p-6 rounded-2xl shadow-custom border border-outline-variant/5">
            <h3 className="font-headline text-lg font-bold mb-4">Quick Contact Info</h3>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Phone</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg py-2 px-3 text-sm font-medium outline-none" defaultValue="+1 (555) 000-1234" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Email</label>
                <input className="w-full bg-surface-container-low border-none rounded-lg py-2 px-3 text-sm font-medium outline-none" defaultValue="hello@dentalsanctuary.com" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Address</label>
                <textarea className="w-full bg-surface-container-low border-none rounded-lg py-2 px-3 text-sm font-medium outline-none resize-none" rows={2} defaultValue="123 Serenity Lane, Wellness District, NY 10001" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
