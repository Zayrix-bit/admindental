import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Stethoscope, Mail, Lock, Eye, ArrowRight, ShieldCheck, Activity } from "lucide-react";
import { cn } from "@/src/lib/utils";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center overflow-hidden relative bg-surface">
      {/* Subtle Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-tertiary/5 rounded-full blur-[100px] pointer-events-none" />

      <main className="w-full max-w-[440px] px-6 relative z-10">
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-10">
          <div className="w-16 h-16 bg-primary-container flex items-center justify-center rounded-xl mb-4 shadow-custom">
            <Stethoscope className="text-primary w-8 h-8" fill="currentColor" />
          </div>
          <h1 className="font-headline text-2xl font-extrabold tracking-tight text-on-surface">Dental Sanctuary</h1>
          <p className="text-sm text-on-surface-variant mt-1 font-medium">Admin Management Console</p>
        </div>

        {/* Login Card */}
        <div className="bg-surface-container-lowest rounded-xl p-8 shadow-custom border border-outline-variant/10">
          <header className="mb-8">
            <h2 className="font-headline text-xl font-bold text-on-surface mb-2">Welcome back</h2>
            <p className="text-sm text-on-surface-variant font-medium">Please enter your credentials to access the console.</p>
          </header>

          <form className="space-y-6" onSubmit={handleLogin}>
            {/* Username/Email Field */}
            <div className="space-y-2">
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="username">
                Username or Email
              </label>
              <div className="relative flex items-center">
                <Mail className="absolute left-4 text-on-surface-variant/50 w-5 h-5" />
                <input
                  className="w-full bg-surface-container-low border-0 rounded-lg py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-200 placeholder:text-on-surface-variant/30 outline-none"
                  id="username"
                  placeholder="admin@dentalsanctuary.com"
                  type="text"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider" htmlFor="password">
                  Password
                </label>
                <a className="text-xs font-semibold text-primary hover:text-primary-dim transition-colors" href="#">
                  Forgot Password?
                </a>
              </div>
              <div className="relative flex items-center">
                <Lock className="absolute left-4 text-on-surface-variant/50 w-5 h-5" />
                <input
                  className="w-full bg-surface-container-low border-0 rounded-lg py-3 pl-12 pr-4 text-sm focus:ring-2 focus:ring-primary focus:bg-white transition-all duration-200 placeholder:text-on-surface-variant/30 outline-none"
                  id="password"
                  placeholder="••••••••"
                  type={showPassword ? "text" : "password"}
                />
                <button
                  className="absolute right-4 text-on-surface-variant/50 hover:text-on-surface-variant transition-colors"
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Remember Me Toggle */}
            <div className="flex items-center space-x-3">
              <input
                className="w-4 h-4 rounded border-outline-variant text-primary focus:ring-primary-container cursor-pointer"
                id="remember"
                type="checkbox"
              />
              <label className="text-sm text-on-surface-variant font-medium cursor-pointer select-none" htmlFor="remember">
                Remember this device
              </label>
            </div>

            {/* Login Button */}
            <button
              className="w-full primary-gradient text-on-primary font-headline font-bold py-3.5 rounded-lg shadow-custom hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              type="submit"
            >
              <span>Login to Dashboard</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Footer / Support */}
        <footer className="mt-8 text-center">
          <p className="text-xs text-on-surface-variant font-medium">
            Need help? <a className="text-primary hover:underline underline-offset-4" href="#">Contact IT Support</a>
          </p>
          <div className="mt-12 flex justify-center gap-6 opacity-30 grayscale hover:grayscale-0 transition-all duration-500">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <Activity className="w-6 h-6 text-primary" />
          </div>
        </footer>
      </main>

      {/* Decorative Bottom Asset */}
      <div className="fixed bottom-0 left-0 w-full h-1 primary-gradient opacity-20" />
    </div>
  );
}
