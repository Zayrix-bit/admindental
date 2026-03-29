import { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  LayoutDashboard, 
  UserSearch, 
  CalendarDays, 
  Globe, 
  FileText, 
  Settings, 
  Search, 
  Bell, 
  HelpCircle, 
  LogOut 
} from "lucide-react";
import { cn } from "@/src/lib/utils";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const navItems = [
    { icon: LayoutDashboard, label: "Dashboard", path: "/" },
    { icon: UserSearch, label: "Leads", path: "/leads" },
    { icon: CalendarDays, label: "Appointments", path: "/appointments" },
    { icon: Globe, label: "Site Content", path: "/content" },
    { icon: FileText, label: "Blog", path: "/blog" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-surface flex">
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full hidden lg:flex flex-col py-6 w-64 bg-slate-50 border-r border-slate-100 z-40">
        <div className="px-6 mb-10">
          <h1 className="text-xl font-bold tracking-tight text-primary font-headline">Dental Sanctuary</h1>
          <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mt-1">Admin Console</p>
        </div>

        <nav className="flex-1 space-y-1 px-3">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group",
                  isActive 
                    ? "text-primary font-bold border-r-2 border-primary bg-primary/5" 
                    : "text-on-surface-variant hover:text-primary hover:bg-primary/5"
                )}
              >
                <item.icon className={cn("w-5 h-5", isActive && "fill-primary/10")} />
                <span className="text-sm font-semibold font-headline">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="px-6 pt-6 mt-auto border-t border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
              <span className="text-xs font-bold text-on-primary-container">DS</span>
            </div>
            <div>
              <p className="text-xs font-bold text-on-surface">Dental Sanctuary</p>
              <p className="text-[10px] text-on-surface-variant">v2.4.0-prod</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Wrapper */}
      <div className="lg:pl-64 flex-1 flex flex-col">
        {/* TopNavBar */}
        <header className="sticky top-0 z-50 flex justify-between items-center w-full px-6 py-3 bg-white/80 backdrop-blur-md border-b border-slate-100 shadow-sm">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant/50 w-4 h-4" />
              <input
                className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary transition-all outline-none"
                placeholder="Search content sections..."
                type="text"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-on-surface-variant hover:text-primary transition-all active:scale-95">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-on-surface-variant hover:text-primary transition-all active:scale-95">
              <HelpCircle className="w-5 h-5" />
            </button>
            <div className="h-8 w-px bg-slate-100 mx-2" />
            <div className="flex items-center gap-3 cursor-pointer group">
              <img
                alt="Dr. Smith"
                className="w-8 h-8 rounded-full object-cover"
                src="https://picsum.photos/seed/dentist/200/200"
              />
              <div className="hidden sm:block">
                <p className="text-sm font-medium font-headline group-hover:text-primary transition-colors">Dr. Smith</p>
                <p className="text-[10px] text-on-surface-variant">Administrator</p>
              </div>
              <Link to="/login" className="text-on-surface-variant group-hover:text-primary transition-colors">
                <LogOut className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-md border-t border-slate-100 flex items-center justify-around py-3 px-4 z-50">
        {navItems.slice(0, 4).map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex flex-col items-center gap-1",
                isActive ? "text-primary" : "text-on-surface-variant"
              )}
            >
              <item.icon className={cn("w-6 h-6", isActive && "fill-primary/10")} />
              <span className="text-[10px] font-bold">{item.label.slice(0, 5)}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
