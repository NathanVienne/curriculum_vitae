import Items from "./items";

const experiences = [
    {
        type: "education",
        title: "Licence de Psychologie",
        status: "Diplomante",
        company: "Université Catholique de l'Ouest Réunion (UCO)",
        period: "2018 - 2022",
        description: "Formation axée sur la compréhension du comportement humain et des mécanismes cognitifs, avec un travail approfondi sur l'analyse critique d'articles scientifiques. Développement de solides compétences en synthèse, communication écrite et orale, ainsi qu'en esprit d'analyse, utiles dans tout environnement nécessitant rigueur et sens de l'observation.",
        stages: `2019 - Stage au Groupe Hospitalier Est Réunion
        \n 2020 - Stage chez Célio Réunion
        \n 2021 - Stage en Neuropsychologie au service de Neurologie du CHU Nord`
    },
    {
        type: "work",
        title: "Commis de Cuisine",
        company: "Restaurant Le Bedroom",
        period: "2023",
        description: `- Préparation et mise en place du poste de travail avant service
        \n- Réalisation de plats froids (entrées, salades, dressages) et participation à la préparation de plats chauds
        \n- Préparation des desserts selon les consignes du chef
        \n- Participation à la plonge et au nettoyage de la cuisine et des zones de stockage
        \n- Suivi des stocks et réalisation d'inventaires réguliers
        \n- Respect rigoureux des normes d'hygiène et de sécurité alimentaire`,
    },
    {
        type: "education",
        title: "Bachelor - Marketing Digital et Social Media",
        status: "Diplomante",
        company: "Créalise",
        period: "2023 - 2024",
        description: "Formation centrée sur les stratégies de communication en ligne, la gestion de contenu et l'analyse des performances digitales. Acquisition de compétences concrètes en SEO, réseaux sociaux, création de contenu, stratégie de marque et utilisation d'outils numériques (Google Analytics, Meta Ads, Canva…). Approche orientée résultats et compréhension fine des comportements utilisateurs.",
    },
    {
        type: "work",
        title: "Community Manager",
        company: "Pala Créateur Joaillier",
        period: "2023 - 2024",
        description: `- Création et planification de contenu pour Facebook et Instagram
        \n- Mise en place de comptes distincts pour les gammes horlogerie et joaillerie,
        \n- Gestion de la relation client via les réseaux sociaux (réponses aux commentaires & messages),
        \n- Scraping et ajout de produits au catalogue du site e-commerce,
        \n- Participation à la vente en boutique et en ligne (montres et bijoux),
        \n- Contribution à la sélection d'une nouvelle marque de montres pour le catalogue`,
    },
    {
        type: "education",
        title: "Developpement Web et Web Mobile",
        status: "Non Diplomante",
        company: "AFPAR",
        period: "2024 - 2025",
        description: "Apprentissage des fondamentaux du développement web (Algorithmie, HTML, CSS, JavaScript, Frameworks, responsive design) et des bases de la programmation. Réalisation de projets concrets (conception, intégration de maquettes, pages dynamiques). Formation non diplômante mais enrichissante, ayant renforcé ma culture web, ma logique technique et ma capacité à collaborer sur des projets digitaux.",
    },
];

export default function Experience() {
    return (
        <section id="experience" className="bg-neutral py-15">
            <div className="text-center pb-10 md:pb-30 space-y-4">
                <h2 className="text-4xl text-white font-bold">Expériences & Formations</h2>
                <p className="text-accent text-xl">Cliquez sur les éléments pour en savoir plus</p>
            </div>
            <ul className="timeline timeline-vertical md:timeline-horizontal mx-auto w-fit">
                < Items experiences={experiences} />
            </ul>
        </section>
    )
}