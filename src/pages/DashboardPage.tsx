import { CalendarDays, Inbox, CheckCircle, UserPlus, TrendingUp, Plus, Users, MoreVertical, Stethoscope } from "lucide-react";

export default function DashboardPage() {
  const appointments = [
    { time: "09:00 AM", name: "Eleanor Shellstrop", service: "Annual Prophylaxis & Cleaning", status: "Confirmed" },
    { time: "10:30 AM", name: "Michael Realman", service: "Composite Restoration (Cavity)", status: "Confirmed" },
    { time: "01:15 PM", name: "Tahani Al-Jamil", service: "Veneer Consultation", status: "In Transit" },
    { time: "02:45 PM", name: "Jason Mendoza", service: "Emergency: Tooth Pain Assessment", status: "Confirmed" },
  ];

  const leads = [
    { name: "Janet Dell", time: "2 hours ago", source: "Web", service: "Dental Implants Inquiry", type: "Contact Now" },
    { name: "Chidi Anagonye", time: "5 hours ago", source: "App", service: "Invisalign Treatment", type: "Contact Now" },
  ];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Dashboard Header & Quick Actions */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Today at Sanctuary</h2>
          <p className="text-on-surface-variant mt-1 text-lg">You have 12 appointments and 4 new leads pending.</p>
        </div>
        <div className="flex gap-3">
          <button className="primary-gradient text-on-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all shadow-sm">
            <Plus className="w-5 h-5" />
            Add Appointment
          </button>
          <button className="bg-secondary-container text-on-secondary-container px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-secondary-container/80 active:scale-95 transition-all">
            <Users className="w-5 h-5" />
            View All Leads
          </button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Today's Appointments Section */}
        <section className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-headline text-xl font-bold flex items-center gap-2">
              <CalendarDays className="text-primary w-6 h-6" />
              Today's Appointments
            </h3>
            <span className="text-sm font-medium text-primary bg-primary-container px-3 py-1 rounded-full">Next: 10:30 AM</span>
          </div>
          <div className="bg-surface-container-lowest shadow-custom rounded-xl overflow-hidden">
            <div className="divide-y divide-surface-container-low">
              {appointments.map((apt, i) => (
                <div key={i} className="p-5 flex items-center justify-between hover:bg-surface-container-low transition-colors group">
                  <div className="flex items-center gap-6">
                    <div className="text-center min-w-[70px]">
                      <p className={apt.time === "09:00 AM" ? "text-xs font-bold text-primary uppercase tracking-wider" : "text-xs font-bold text-on-surface-variant uppercase tracking-wider"}>{apt.time}</p>
                      {apt.time === "09:00 AM" && <div className="h-8 w-px bg-primary/20 mx-auto mt-1" />}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg text-on-surface">{apt.name}</h4>
                      <p className="text-sm text-on-surface-variant">{apt.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={apt.status === "In Transit" ? "px-3 py-1 bg-surface-container text-on-surface-variant font-semibold text-xs rounded-lg uppercase tracking-tight" : "px-3 py-1 bg-tertiary-container text-tertiary font-semibold text-xs rounded-lg uppercase tracking-tight"}>
                      {apt.status}
                    </span>
                    <button className="opacity-0 group-hover:opacity-100 p-2 text-on-surface-variant hover:text-primary transition-all">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 bg-surface-container-low text-center">
              <button className="text-primary font-bold text-sm hover:underline">View 8 more appointments today</button>
            </div>
          </div>
        </section>

        {/* Recent Leads Section */}
        <section className="lg:col-span-4 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-headline text-xl font-bold flex items-center gap-2">
              <Inbox className="text-secondary w-6 h-6" />
              Recent Leads
            </h3>
          </div>
          <div className="space-y-4">
            {leads.map((lead, i) => (
              <div key={i} className="bg-surface-container-lowest shadow-custom p-5 rounded-xl border-l-4 border-error relative overflow-hidden group">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h5 className="font-bold text-lg text-on-surface">{lead.name}</h5>
                    <p className="text-sm text-on-surface-variant">Inquired {lead.time} via {lead.source}</p>
                  </div>
                  <span className="bg-error-container text-on-error-container px-2 py-1 rounded text-[10px] font-black uppercase tracking-tighter">Contact Now</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-on-surface-variant mb-4">
                  <Stethoscope className="w-4 h-4" />
                  {lead.service}
                </div>
                <button className="w-full bg-surface-container border border-outline-variant/20 py-2 rounded-lg font-bold text-sm text-on-surface hover:bg-primary hover:text-on-primary transition-all flex items-center justify-center gap-2">
                  Call Patient
                </button>
              </div>
            ))}
            <div className="bg-surface-container-low p-5 rounded-xl border-l-4 border-primary/20 opacity-70">
              <div className="flex justify-between items-start mb-1">
                <h5 className="font-bold text-lg text-on-surface">Doug Forcett</h5>
                <span className="text-xs font-semibold text-primary">FOLLOW-UP SET</span>
              </div>
              <p className="text-sm text-on-surface-variant">Teeth Whitening inquiry • Last contact: 9:00 AM</p>
            </div>
          </div>
        </section>
      </div>

      {/* Dashboard Summary Footnote */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-on-surface">4/12</p>
            <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">Appointments Done</p>
          </div>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
            <UserPlus className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-on-surface">+8</p>
            <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">New Patients This Week</p>
          </div>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary">
            <TrendingUp className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-bold text-on-surface">94%</p>
            <p className="text-xs text-on-surface-variant font-medium uppercase tracking-wider">Clinic Occupancy Today</p>
          </div>
        </div>
      </div>
    </div>
  );
}
