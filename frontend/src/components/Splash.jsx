import { useState, useEffect } from "react";

function Splash({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  // Progress 0 se 100 tak badhta hai (about 2.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 1));
    }, 25);
    return () => clearInterval(timer);
  }, []);

  // 100% hone par screen upar slide karke hat jati hai
  useEffect(() => {
    if (progress === 100) {
      const t1 = setTimeout(() => setLeaving(true), 300);
      const t2 = setTimeout(onFinish, 1000);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [progress, onFinish]);

  return (
    <div
      className={
        "fixed inset-0 z-[100] bg-gray-950 text-white flex flex-col items-center justify-center overflow-hidden transition-transform duration-700 ease-in-out " +
        (leaving ? "-translate-y-full" : "translate-y-0")
      }
    >
      <style>{`
        .serif { font-family: 'Playfair Display', serif; }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes glow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }
        .fade-up { opacity: 0; animation: fadeUp 0.8s ease forwards; }
        .glow { animation: glow 3s ease-in-out infinite; }
      `}</style>

      {/* Background glow */}
      <div className="glow absolute w-80 h-80 bg-amber-400/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 text-center px-6">
        <p className="fade-up text-amber-400 font-semibold tracking-widest uppercase text-sm mb-4">
          Welcome to my portfolio
        </p>

        <h1
          className="serif fade-up text-5xl md:text-7xl font-semibold mb-3"
          style={{ animationDelay: "0.3s" }}
        >
          Vansh<span className="italic text-amber-400">.dev</span>
        </h1>

        <p
          className="fade-up text-gray-400 mb-10"
          style={{ animationDelay: "0.6s" }}
        >
          MERN Stack Developer
        </p>

        {/* Loading bar */}
        <div
          className="fade-up w-64 mx-auto"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="h-1 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-amber-400 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-xs text-gray-500 mt-3">{progress}%</p>
        </div>
      </div>
    </div>
  );
}

export default Splash;