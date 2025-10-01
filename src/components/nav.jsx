function Navigation() {
    return (
        <header className="bg-primary text-white flex justify-between fixed top-0 left-0 right-0 z-50 border-b border-b-neutral border-border">
            <div className="w-15 ms-4 my-3"><img src="../../public/CV_WEB.png" alt="" /></div>
            <nav className="my-auto">
                <ul className="flex gap-6 me-6">
                    <li><a>Présentation</a></li>
                    <li><a>Expériences</a></li>
                    <li><a>Compétences</a></li>
                    <li><a>A Propos</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
        </header>
    )

}

export default Navigation