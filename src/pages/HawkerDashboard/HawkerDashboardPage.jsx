import {
  MapPin,
  Calendar,
  BadgeCheck,
  Wallet,
  ClipboardCheck,
  Flame,
  Package,
  Truck,
  PhoneCall,
  Bell,
  ArrowUpRight,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const quickActions = [
  { label: "Apply Stall Renewal", icon: ClipboardCheck },
  { label: "Request Supplies", icon: Package },
  { label: "Book Cart Repair", icon: Truck },
  { label: "Emergency Contact", icon: PhoneCall },
];

const alerts = [
  {
    title: "License renewal due in 12 days",
    meta: "Submit documents by Apr 21",
    tone: "bg-amber-50 text-amber-900 border-amber-200",
  },
  {
    title: "New vendor zone announced",
    meta: "Check Ward 18 opportunities",
    tone: "bg-emerald-50 text-emerald-900 border-emerald-200",
  },
];

const todayPlan = [
  { time: "7:30 AM", task: "Morning setup and safety check" },
  { time: "11:00 AM", task: "Restock fresh produce" },
  { time: "3:00 PM", task: "Community market meeting" },
  { time: "7:30 PM", task: "Close stall and clean-up" },
];

export default function HawkerDashboardPage() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="relative overflow-hidden">
        <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-emerald-500/30 blur-[120px]" />
        <div className="absolute top-20 right-0 h-72 w-72 rounded-full bg-amber-400/30 blur-[110px]" />

        <div className="relative z-10 px-6 pb-12 pt-10 md:px-10 lg:px-16">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">
                Hawker Personal Dashboard
              </p>
              <h1 className="mt-3 text-3xl font-heading font-semibold md:text-4xl">
                Welcome back, {user?.name || "Vendor"}
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-200/80">
                Your daily command center for permits, earnings, inventory, and
                neighborhood updates.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/90 transition hover:bg-white/20">
                <Bell size={16} />
                Alerts (2)
              </button>
              <button className="flex items-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
                View stall map
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="flex items-center justify-between text-emerald-200">
                <MapPin size={18} />
                <span className="text-xs uppercase tracking-[0.2em]">
                  Zone
                </span>
              </div>
              <p className="mt-4 text-2xl font-semibold">Ward 12A</p>
              <p className="text-xs text-white/60">Approved vending area</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="flex items-center justify-between text-amber-200">
                <Calendar size={18} />
                <span className="text-xs uppercase tracking-[0.2em]">
                  Today
                </span>
              </div>
              <p className="mt-4 text-2xl font-semibold">4 Tasks</p>
              <p className="text-xs text-white/60">2 priority items</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="flex items-center justify-between text-sky-200">
                <Wallet size={18} />
                <span className="text-xs uppercase tracking-[0.2em]">
                  Earnings
                </span>
              </div>
              <p className="mt-4 text-2xl font-semibold">LKR 18,450</p>
              <p className="text-xs text-white/60">+12% this week</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
              <div className="flex items-center justify-between text-emerald-200">
                <BadgeCheck size={18} />
                <span className="text-xs uppercase tracking-[0.2em]">
                  Compliance
                </span>
              </div>
              <p className="mt-4 text-2xl font-semibold">92%</p>
              <p className="text-xs text-white/60">2 checks pending</p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 pb-16 pt-2 md:px-10 lg:px-16">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-xl font-heading font-semibold">
                    Today&apos;s Route
                  </h2>
                  <p className="text-sm text-slate-300">
                    Focus on the busiest streets and keep your cart stocked.
                  </p>
                </div>
                <span className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-medium text-emerald-200">
                  Peak hours 12 PM - 3 PM
                </span>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {todayPlan.map((item) => (
                  <div
                    key={item.time}
                    className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-200">
                      <Flame size={18} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">{item.time}</p>
                      <p className="text-xs text-slate-300">{item.task}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                <h3 className="text-lg font-heading font-semibold">
                  Inventory Pulse
                </h3>
                <p className="text-sm text-slate-300">
                  Stock levels for top-selling items.
                </p>
                <div className="mt-5 space-y-4">
                  {[
                    { name: "Fresh fruit", value: 78 },
                    { name: "Packaged snacks", value: 62 },
                    { name: "Drinking water", value: 48 },
                  ].map((item) => (
                    <div key={item.name}>
                      <div className="flex items-center justify-between text-xs text-slate-300">
                        <span>{item.name}</span>
                        <span>{item.value}%</span>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-slate-800">
                        <div
                          className="h-2 rounded-full bg-amber-400"
                          style={{ width: `${item.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-2 text-sm font-medium text-white/80 transition hover:bg-slate-900">
                  Order supplies
                </button>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                <h3 className="text-lg font-heading font-semibold">
                  Compliance Health
                </h3>
                <p className="text-sm text-slate-300">
                  Keep your license and safety checks on track.
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    { label: "Waste disposal", value: "Complete" },
                    { label: "Food safety log", value: "Pending review" },
                    { label: "Fire extinguisher", value: "Valid until Jun 30" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-sm"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs text-emerald-200">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
                <button className="mt-6 w-full rounded-2xl bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
                  Upload documents
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-lg font-heading font-semibold">
                Quick Actions
              </h3>
              <p className="text-sm text-slate-300">
                Shortcuts to keep your day moving.
              </p>
              <div className="mt-5 grid gap-3">
                {quickActions.map((item) => (
                  <button
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 px-4 py-3 text-left text-sm font-medium transition hover:border-emerald-400/60 hover:bg-slate-900"
                  >
                    <span className="flex items-center gap-3">
                      <item.icon size={18} className="text-emerald-200" />
                      {item.label}
                    </span>
                    <ArrowUpRight size={16} className="text-slate-400" />
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-lg font-heading font-semibold">
                Alerts and Updates
              </h3>
              <div className="mt-4 space-y-3">
                {alerts.map((item) => (
                  <div
                    key={item.title}
                    className={`rounded-2xl border px-4 py-3 text-sm ${item.tone}`}
                  >
                    <p className="font-medium">{item.title}</p>
                    <p className="text-xs opacity-80">{item.meta}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
              <h3 className="text-lg font-heading font-semibold">
                Community Score
              </h3>
              <p className="text-sm text-slate-300">
                Your standing in the vendor community.
              </p>
              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-4">
                <div className="flex items-center justify-between text-sm">
                  <span>Trust rating</span>
                  <span className="text-emerald-200">4.7 / 5</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-300">
                  <span>Last inspection</span>
                  <span>Mar 27</span>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs text-slate-300">
                  <span>Next audit</span>
                  <span>Apr 29</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
