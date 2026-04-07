import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-cosmic-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cosmic-indigo/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cosmic-violet/10 rounded-full blur-[150px]"></div>

      <div className="text-center relative z-10 glass-premium p-16 rounded-[3rem] border border-white/10 max-w-lg mx-4">
        <h1 className="text-9xl font-bold font-outfit gradient-text mb-4 tracking-tighter">404</h1>
        <div className="w-20 h-1.5 bg-gradient-to-r from-cosmic-indigo to-cosmic-violet mx-auto rounded-full mb-8"></div>
        <p className="text-2xl text-white font-bold font-outfit mb-4">Galaxie Perdue</p>
        <p className="text-cosmic-slate mb-10 font-medium">La page que vous recherchez semble avoir dérivé hors de notre orbite.</p>
        <a
          href="/"
          className="btn-primary h-14 px-10 rounded-2xl inline-flex items-center justify-center font-bold font-outfit group transition-all"
        >
          <span className="mr-2 group-hover:-translate-x-1 transition-transform">←</span>
          Retourner à l'Accueil
        </a>
      </div>
    </div>
  );
};

export default NotFound;
