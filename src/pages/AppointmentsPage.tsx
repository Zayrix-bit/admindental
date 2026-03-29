import { useState } from "react";
import { Calendar, ChevronLeft, ChevronRight, Search, Plus, MoreHorizontal, Phone, MessageSquare, Clock } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function AppointmentsPage() {
  const [selectedDate, setSelectedDate] = useState("March 29, 2026");

  const appointments = [
    { id: 1, patient: "Eleanor Shellstrop", service: "Annual Prophylaxis & Cleaning", time: "09:00 AM", status: "Confirmed", doctor: "Dr. Smith" },
    { id: 2, patient: "Michael Realman", service: "Composite Restoration (Cavity)", time: "10:30 AM", status: "Confirmed", doctor: "Dr. Smith" },
    { id: 3, patient: "Tahani Al-Jamil", service: "Veneer Consultation", time: "01:15 PM", status: "In Transit", doctor: "Dr. Jones" },
    { id: 4, patient: "Jason Mendoza", service: "Emergency: Tooth Pain Assessment", time: "02:45 PM", status: "Confirmed", doctor: "Dr. Smith" },
    { id: 5, patient: "Chidi Anagonye", service: "Invisalign Adjustment", time: "04:00 PM", status: "Pending", doctor: "Dr. Jones" },
  ];

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h2 className="font-headline text-3xl font-extrabold text-on-surface tracking-tight">Appointments</h2>
          <p className="text-on-surface-variant mt-1">Manage your clinical schedule and patient bookings.</p>
        </div>
        <button className="primary-gradient text-on-primary px-6 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-sm hover:opacity-90 transition-all">
          <Plus className="w-5 h-5" />
          New Booking
        </button>
      </div>

      {/* Filters & Calendar Strip */}
      <div className="bg-surface-container-lowest rounded-xl shadow-custom p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-surface-container-low px-4 py-2 rounded-lg border border-outline-variant/10">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-on-surface">{selectedDate}</span>
          </div>
          <div className="flex gap-1">
            <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-surface-container-low rounded-lg transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 w-4 h-4" />
          <input
            className="w-full bg-surface-container-low border-none rounded-lg py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
            placeholder="Search patient..."
            type="text"
          />
        </div>
      </div>

      {/* Appointments List */}
      <div className="bg-surface-container-lowest rounded-xl shadow-custom overflow-hidden border border-outline-variant/5">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-surface-container-low/50 border-b border-outline-variant/10">
              <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Time</th>
              <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Patient</th>
              <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Service</th>
              <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Doctor</th>
              <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-wider"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/5">
            {appointments.map((apt) => (
              <tr key={apt.id} className="hover:bg-surface-container-low/30 transition-colors group">
                <td className="px-6 py-4">
                  <span className="text-sm font-bold text-on-surface">{apt.time}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/5 flex items-center justify-center text-primary font-bold text-xs">
                      {apt.patient.split(" ").map(n => n[0]).join("")}
                    </div>
                    <span className="text-sm font-semibold text-on-surface">{apt.patient}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-on-surface-variant">{apt.service}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm font-medium text-on-surface-variant">{apt.doctor}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={cn(
                    "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider",
                    apt.status === "Confirmed" ? "bg-tertiary-container text-tertiary" :
                    apt.status === "In Transit" ? "bg-surface-container text-on-surface-variant" :
                    "bg-error-container text-on-error-container"
                  )}>
                    {apt.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-all opacity-0 group-hover:opacity-100">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Quick Action Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-custom border-t-4 border-primary">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-on-surface">Call Reminders</h4>
          </div>
          <p className="text-sm text-on-surface-variant mb-4">4 patients haven't confirmed their appointments for tomorrow.</p>
          <button className="text-primary font-bold text-sm hover:underline flex items-center gap-1">
            Open Call List <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-custom border-t-4 border-tertiary">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-tertiary/10 rounded-lg text-tertiary">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-on-surface">WhatsApp Confirmations</h4>
          </div>
          <p className="text-sm text-on-surface-variant mb-4">Automated confirmation messages were sent to 12 patients.</p>
          <button className="text-tertiary font-bold text-sm hover:underline flex items-center gap-1">
            View Sent Logs <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl shadow-custom border-t-4 border-secondary">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-on-surface">Waitlist Management</h4>
          </div>
          <p className="text-sm text-on-surface-variant mb-4">There are 3 patients waiting for a cancellation slot today.</p>
          <button className="text-secondary font-bold text-sm hover:underline flex items-center gap-1">
            Manage Waitlist <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
