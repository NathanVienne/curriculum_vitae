import Links from "./items"

function Navigation() {
    return (
        <header className="bg-primary text-white flex justify-between items-center fixed top-0 left-0 right-0 z-50 border-b border-b-neutral border-border">
            <div className="w-15 ms-4 my-3">
                <img src="../../public/CV_WEB.png" alt="Logo Vienne Nathan" />
            </div>
            <nav>
                <ul className="flex space-x-6 me-6">
                    <Links label="Présentation" href="#hero"/>
                    <Links label="Parcours" href="#experience"/>
                    <Links label="Compétences"/>
                    <Links label="A Propos" href="#about"/>
                    <Links label="Contact" href="#contact" />
                </ul>
            </nav>
        </header>
    )

}

export default Navigation