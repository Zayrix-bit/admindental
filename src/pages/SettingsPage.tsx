import { useState } from "react";
import { Save, Shield, Bell, Clock, MapPin, Phone, Mail, Globe, Camera, Lock } from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("General");

  const tabs = ["General", "Security", "Notifications", "Working Hours"];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Settings</h2>
          <p className="text-on-surface-variant mt-1">Configure your clinic's digital identity and preferences.</p>
        </div>
        <button className="primary-gradient text-on-primary px-8 py-3 rounded-lg font-bold flex items-center gap-2 shadow-sm hover:opacity-90 transition-all">
          <Save className="w-5 h-5" />
          Save All Changes
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Settings Navigation */}
        <aside className="lg:w-64 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-3 ${
                activeTab === tab 
                  ? "bg-primary text-on-primary shadow-sm" 
                  : "text-on-surface-variant hover:bg-surface-container-low"
              }`}
            >
              {tab === "General" && <Globe className="w-4 h-4" />}
              {tab === "Security" && <Shield className="w-4 h-4" />}
              {tab === "Notifications" && <Bell className="w-4 h-4" />}
              {tab === "Working Hours" && <Clock className="w-4 h-4" />}
              {tab}
            </button>
          ))}
        </aside>

        {/* Settings Content */}
        <div className="flex-1 space-y-8">
          {activeTab === "General" && (
            <>
              {/* Clinic Identity */}
              <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-custom border border-outline-variant/5">
                <h3 className="font-headline text-xl font-bold mb-8">Clinic Identity</h3>
                <div className="flex flex-col md:flex-row gap-10">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-32 h-32 rounded-2xl bg-surface-container-low border-2 border-dashed border-outline-variant/30 flex flex-col items-center justify-center gap-2 group cursor-pointer hover:border-primary transition-all relative overflow-hidden">
                      <img src="https://picsum.photos/seed/logo/200/200" className="absolute inset-0 w-full h-full object-cover opacity-50" />
                      <Camera className="w-6 h-6 text-on-surface-variant/50 relative z-10" />
                      <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest relative z-10">Change Logo</span>
                    </div>
                    <p className="text-[10px] text-on-surface-variant/50 text-center">PNG, SVG up to 2MB</p>
                  </div>
                  <div className="flex-1 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Clinic Name</label>
                        <input className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-bold outline-none" defaultValue="Dental Sanctuary" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Tagline</label>
                        <input className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-bold outline-none" defaultValue="Ethereal Care for Your Smile" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Clinic Description</label>
                      <textarea className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-medium outline-none resize-none" rows={3} defaultValue="A premium dental clinic focused on providing high-end cosmetic and clinical dentistry in a serene environment." />
                    </div>
                  </div>
                </div>
              </section>

              {/* Contact Details */}
              <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-custom border border-outline-variant/5">
                <h3 className="font-headline text-xl font-bold mb-8">Contact Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                      <Phone className="w-3 h-3" /> Phone Number
                    </label>
                    <input className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-bold outline-none" defaultValue="+1 (555) 000-1234" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                      <Mail className="w-3 h-3" /> Email Address
                    </label>
                    <input className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-bold outline-none" defaultValue="hello@dentalsanctuary.com" />
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                      <MapPin className="w-3 h-3" /> Clinic Address
                    </label>
                    <input className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-bold outline-none" defaultValue="123 Serenity Lane, Wellness District, NY 10001" />
                  </div>
                </div>
              </section>
            </>
          )}

          {activeTab === "Working Hours" && (
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-custom border border-outline-variant/5">
              <h3 className="font-headline text-xl font-bold mb-8">Clinical Working Hours</h3>
              <div className="space-y-4">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((day) => (
                  <div key={day} className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl">
                    <span className="font-bold text-on-surface w-32">{day}</span>
                    <div className="flex items-center gap-4">
                      <input type="time" className="bg-white border-none rounded-lg px-3 py-1.5 text-sm font-bold outline-none" defaultValue="09:00" />
                      <span className="text-on-surface-variant font-bold">to</span>
                      <input type="time" className="bg-white border-none rounded-lg px-3 py-1.5 text-sm font-bold outline-none" defaultValue="18:00" />
                    </div>
                    <div className="flex items-center gap-3">
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" defaultChecked={day !== "Sunday"} />
                        <div className="w-11 h-6 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                      </label>
                      <span className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Open</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === "Security" && (
            <section className="bg-surface-container-lowest p-8 rounded-2xl shadow-custom border border-outline-variant/5">
              <h3 className="font-headline text-xl font-bold mb-8">Security Settings</h3>
              <div className="space-y-8">
                <div className="flex items-center justify-between p-6 bg-surface-container-low rounded-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Lock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-on-surface">Two-Factor Authentication</h4>
                      <p className="text-xs text-on-surface-variant">Add an extra layer of security to your account.</p>
                    </div>
                  </div>
                  <button className="bg-primary text-on-primary px-6 py-2 rounded-lg font-bold text-sm shadow-sm hover:opacity-90 transition-all">Enable 2FA</button>
                </div>

                <div className="space-y-6">
                  <h4 className="font-bold text-on-surface border-b border-outline-variant/10 pb-2">Change Password</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Current Password</label>
                      <input type="password" placeholder="••••••••" className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-bold outline-none" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">New Password</label>
                      <input type="password" placeholder="••••••••" className="w-full bg-surface-container-low border-none rounded-xl py-3 px-4 text-sm font-bold outline-none" />
                    </div>
                  </div>
                  <button className="bg-surface-container text-on-surface px-6 py-2.5 rounded-lg font-bold text-sm hover:bg-surface-container-low transition-all">Update Password</button>
                </div>
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
