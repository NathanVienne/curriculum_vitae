import Degree from "./degrees";

export default function DegreesList() {
    const degrees = [
        {
            label: "Développement Web & Web Mobile",
            year: "2025",
            time: "8 mois",
            values: [
                "HTML",
                "CSS",
                "Javascript",
                "Typescript",
                "PHP",
                "React",
                "SQL",
                "Conception",
                "Algorithmie",
                "Git/GitHub",
                "API REST/JSON",
                "Méthodologies Agile/Scrum",
            ],
        },
        {
            label: "Marketing Digital & Social Media",
            year: "2024",
            time: "1 an",
            values: [
                "Community Management",
                "SEO/SEA",
                "Google Ads",
                "Meta Business Suite",
                "Scraping",
                "WordPress",
                "Shopify/E-commerce",
                "Trello",
                "Canva",
                "Gestion de Projet",
            ],
        },
        {
            label: "Psychologie",
            year: "2022",
            time: "4 ans",
            values: [
                "Esprit Critique",
                "Raisonnement Scientifique",
                "Méthodologie de Recherche",
                "Analyse Statistique",
                "Traitement de Données",
                "Rédaction/Synthèses",
                "Méthodologie Expérimentale",
                "Outils Psychotechniques",
            ],
        },
    ];

    return (
        <section className="flex flex-col space-y-4 md:flex-row justify-evenly mt-6 pb-6">
            {degrees.map((degree, index) => (
                <Degree
                    key={index}
                    label={degree.label}
                    year={degree.year}
                    time={degree.time}
                    number={degree.values.length}
                    values={degree.values}
                />
            ))}
        </section>
    );
}
