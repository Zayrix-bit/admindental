import { useState } from "react";
import { Search, Filter, Phone, MessageSquare, MoreVertical, Mail, Globe, Smartphone, UserPlus } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function LeadsPage() {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All", "New", "Contacted", "Booked"];

  const leads = [
    { id: 1, name: "Janet Dell", time: "2 hours ago", source: "Web", service: "Dental Implants Inquiry", status: "New", phone: "+1 234 567 890" },
    { id: 2, name: "Chidi Anagonye", time: "5 hours ago", source: "App", service: "Invisalign Treatment", status: "New", phone: "+1 987 654 321" },
    { id: 3, name: "Doug Forcett", time: "1 day ago", source: "Web", service: "Teeth Whitening", status: "Contacted", phone: "+1 555 012 345" },
    { id: 4, name: "Simone Garnet", time: "2 days ago", source: "Phone", service: "Root Canal Consultation", status: "Booked", phone: "+1 444 999 888" },
  ];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Leads Management</h2>
          <p className="text-on-surface-variant mt-1">Track and convert potential patients into clinical appointments.</p>
        </div>
        <button className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-sm hover:bg-secondary-container/80 transition-all">
          <UserPlus className="w-5 h-5" />
          Manual Lead Entry
        </button>
      </div>

      {/* Tabs & Search */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex bg-surface-container-low p-1 rounded-xl w-full md:w-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "flex-1 md:flex-none px-6 py-2 rounded-lg text-sm font-bold transition-all",
                activeTab === tab ? "bg-white text-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 w-4 h-4" />
            <input
              className="w-full bg-surface-container-low border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
              placeholder="Search leads..."
              type="text"
            />
          </div>
          <button className="p-2 bg-surface-container-low rounded-lg text-on-surface-variant hover:text-primary transition-all">
            <Filter className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Leads List */}
      <div className="grid grid-cols-1 gap-4">
        {leads.map((lead) => (
          <div key={lead.id} className="bg-surface-container-lowest p-6 rounded-xl shadow-custom border border-outline-variant/5 flex flex-col md:flex-row md:items-center justify-between gap-6 group">
            <div className="flex items-center gap-4">
              <div className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center",
                lead.status === "New" ? "bg-error-container/20 text-error" :
                lead.status === "Contacted" ? "bg-primary-container/20 text-primary" :
                "bg-tertiary-container/20 text-tertiary"
              )}>
                {lead.source === "Web" ? <Globe className="w-6 h-6" /> : 
                 lead.source === "App" ? <Smartphone className="w-6 h-6" /> : 
                 <Phone className="w-6 h-6" />}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-lg text-on-surface">{lead.name}</h4>
                  <span className={cn(
                    "px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-tighter",
                    lead.status === "New" ? "bg-error-container text-on-error-container" :
                    lead.status === "Contacted" ? "bg-primary-container text-on-primary-container" :
                    "bg-tertiary-container text-on-tertiary-container"
                  )}>
                    {lead.status}
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant flex items-center gap-2">
                  <span className="font-semibold">{lead.service}</span>
                  <span className="w-1 h-1 bg-outline-variant rounded-full" />
                  <span>{lead.time} via {lead.source}</span>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-surface-container-low hover:bg-primary hover:text-on-primary px-4 py-2.5 rounded-lg text-sm font-bold transition-all group/btn">
                <Phone className="w-4 h-4 group-hover/btn:fill-current" />
                Call
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-surface-container-low hover:bg-tertiary hover:text-on-tertiary px-4 py-2.5 rounded-lg text-sm font-bold transition-all group/btn">
                <MessageSquare className="w-4 h-4 group-hover/btn:fill-current" />
                WhatsApp
              </button>
              <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-surface-container-low hover:bg-secondary hover:text-on-secondary px-4 py-2.5 rounded-lg text-sm font-bold transition-all group/btn">
                <Mail className="w-4 h-4 group-hover/btn:fill-current" />
                Email
              </button>
              <button className="p-2.5 text-on-surface-variant hover:text-primary transition-all">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="mt-12 flex flex-col md:flex-row gap-8 items-center justify-center opacity-50 grayscale">
        <div className="text-center">
          <p className="text-3xl font-black text-on-surface">84%</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Conversion Rate</p>
        </div>
        <div className="w-px h-10 bg-outline-variant hidden md:block" />
        <div className="text-center">
          <p className="text-3xl font-black text-on-surface">12</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">New Leads Today</p>
        </div>
        <div className="w-px h-10 bg-outline-variant hidden md:block" />
        <div className="text-center">
          <p className="text-3xl font-black text-on-surface">4.2m</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">Avg. Response Time</p>
        </div>
      </div>
    </div>
  );
}
