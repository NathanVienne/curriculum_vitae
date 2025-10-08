import Card from './card';
import { mdiCodeTags, mdiBasketball, mdiGolfTee, mdiHiking, mdiWatch, mdiCoffee, mdiAccountCog, mdiMicroscope, mdiWordpress } from '@mdi/js';
import Test from './card_test';

const interests = [
    { iconPath: mdiCodeTags, label: "Developpement Web" },
    { iconPath: mdiBasketball, label: "Basket" },
    { iconPath: mdiGolfTee, label: "Golf" },
    { iconPath: mdiHiking, label: "Randonnées" },
    { iconPath: mdiWatch, label: "Horlogerie" },
    { iconPath: mdiCoffee, label: "Café" },
];

const benevolats = [
    { title: "Soutient Logistique", description: "Assure la préparation et le bon déroulement des collectes et événements : gestion du matériel, transport, sécurité et brief des équipes. Tient l'inventaire et veille à l'entretien des équipements.", icon: mdiAccountCog },
    { title: "Commission Scientifique", description: "Participe à la caractérisation des déchets, à la structuration des données (tableaux, cartes, indicateurs) et à leur analyse. Rédige des notes/recommandations pour orienter les opérations et sensibiliser partenaires et publics.", icon: mdiMicroscope },
    { title: "Développeur Web", description: "Développe et maintient le site (WordPress) : corrections, nouvelles features, performance, sécurité, accessibilité et SEO. Intègre des outils tiers (ex. HelloAsso, analytics) et documente les process pour l'équipe.", icon: mdiWordpress },
]

export default function About() {
    return (
        <section className="bg-neutral text-white py-10">
            <div className="text-center">
                <h2 className="pt-10 pb-5 text-4xl font-bold">A Propos</h2>
                <p className="text-xl pb-12 text-accent">En savoir plus sur moi & mes valeurs</p>
            </div>
            <div className="p-8 bg-primary mx-10 md:mx-40 rounded-tl-4xl rounded-br-4xl space-y-5 text-justify text-lg shdow-2xl">
                <p>Passionné par le développement web depuis plus de 5 ans, je m'efforce de créer des solutions élégantes et performantes qui répondent aux besoins réels des utilisateurs.
                    Mon approche combine expertise technique, créativité et souci du détail pour livrer des produits de qualité.</p>
                <p>Je crois fermement en l'apprentissage continu et j'aime explorer de nouvelles technologies.
                    La collaboration et le partage de connaissances sont au cœur de ma philosophie professionnelle.</p>
                <p>En dehors du code, j'apprécie les moments passés à découvrir de nouveaux lieux, écouter de la musique et contribuer à des projets open source.
                    Je suis toujours ouvert à de nouvelles opportunités et collaborations enrichissantes.</p>
            </div>
            <div className="text-center text-2xl font-semibold my-10 px-10">
                <h3>Centres d'Intérêt</h3>
                <article className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto'>
                    {interests.map((interest, index) => (
                        <Card key={index} label={interest.label} iconPath={interest.iconPath} />
                    ))}
                </article>
            </div>
            <div className='bg-primary py-10'>
                <h3 className='text-center text-2xl font-semibold'>Bénévolat</h3>
                <div className='flex justify-around mt-5'>
                    {benevolats.map((benevolat, index) => (
                        < Test key={index} title={benevolat.title} description={benevolat.description} icon={benevolat.icon}/>
                    ))}
                </div>
            </div>
        </section>
    )
}