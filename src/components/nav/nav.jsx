import { useState } from "react";
import Links from "./items";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";

function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white fixed top-0 left-0 right-0 z-50 border-b border-b-neutral w-screen">
      <nav className="px-4 md:px-6">
        <div className="hidden md:flex justify-between items-center">
          <div className="w-15 my-3">
            <img src="../../public/CV_WEB.png" alt="Logo Vienne Nathan" />
          </div>
          <ul className="flex space-x-6">
            <Links label="Présentation" href="#hero" />
            <Links label="Parcours" href="#experience" />
            <Links label="Compétences" />
            <Links label="A Propos" href="#about" />
            <Links label="Contact" href="#contact" />
          </ul>
        </div>

        <div className="md:hidden flex justify-between items-center py-4">
          <div className="w-15">
            <img src="../../public/CV_WEB.png" alt="Logo Vienne Nathan" />
          </div>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Icon path={mdiMenu} size={1} className="text-white" />
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-2 pb-4">
              <Links label="Présentation" href="#hero" />
              <Links label="Parcours" href="#experience" />
              <Links label="Compétences" />
              <Links label="A Propos" href="#about" />
              <Links label="Contact" href="#contact" />
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Navigation;
