import Links from "./items"

function Navigation() {
    return (
        <header className="bg-primary text-white flex justify-between items-center fixed top-0 left-0 right-0 z-50 border-b border-b-neutral border-border">
            <div className="w-15 ms-4 my-3">
                <img src="../../public/CV_WEB.png" alt="" />
            </div>
            <nav>
                <ul className="flex space-x-6 me-6">
                    <Links label="Présentation"/>
                    <Links label="Parcours"/>
                    <Links label="Compétences"/>
                    <Links label="A Propos"/>
                    <Links label="Contact"/>
                </ul>
            </nav>
        </header>
    )

}

export default Navigation