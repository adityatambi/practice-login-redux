import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen py-10 text-xl font-bold text-slate-600">
      <Link to={'loginUsePropDrilling'} className="hover:underline block mb-2">
        Login Using Prop Drilling
      </Link>
      <Link to={'loginUseContext'} className="hover:underline block mb-2">
        Login Using useContext Hook
      </Link>
    </div>
  );
}
