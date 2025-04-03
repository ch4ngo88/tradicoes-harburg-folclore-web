
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="w-full bg-seagreen text-white p-2 text-right">
      <p className="text-xs">
        <span className="mr-2">
          <Link to="/impressum" className="hover:text-portuguesered transition-colors">
            Impressum
          </Link>
        </span>
        <span className="text-[8px] align-top">©</span> 2024 GCRFP
      </p>
    </footer>
  );
};
