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
    { title: "Soutient Logistique", period: "2021-2022", description: "Assure la préparation et le bon déroulement des collectes et événements : gestion du matériel, transport, sécurité et brief des équipes. Tient l'inventaire et veille à l'entretien des équipements.", icon: mdiAccountCog },
    { title: "Commission Scientifique", period: "2022-2023", description: "Participe à la caractérisation des déchets, à la structuration des données (tableaux, cartes, indicateurs) et à leur analyse. Rédige des notes/recommandations pour orienter les opérations et sensibiliser partenaires et publics.", icon: mdiMicroscope },
    { title: "Développeur Web", period: "2025", description: "Développe et maintient le site (WordPress) : corrections, nouvelles features, performance, sécurité, accessibilité et SEO. Intègre des outils tiers (ex. HelloAsso, analytics) et documente les process pour l'équipe.", icon: mdiWordpress },
]

export default function About() {
    return (
        <section id="about" className="bg-neutral text-white py-10">
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
                <div className='propreunion w-290 my-10 mx-auto flex rounded-xl'>
                    <div className='flex-grow w-100 flex items-center justify-end'>
                        <img src="src/assets/logo-propreunion-3.0.png"
                            alt="Logo Association PropRéunion"
                            className='w-20' />
                    </div>
                    <div className='mx-auto p-5 space-y-4'>
                        <h4 className='font-semibold text-2xl text-accent'>PropRéunion</h4>
                        <p className='text-justify'>PropRéunion est une association réunionnaise qui lutte concrètement contre les déchets et les pollutions du quotidien.
                            Elle organise des collectes de terrain, coordonne les bénévoles et accompagne les partenaires locaux.
                            Sa commission scientifique caractérise les déchets, produit des données utiles et alimente des recommandations pour prévenir à la source.
                            L'association sensibilise écoles, habitants et décideurs à des pratiques sobres et à l'économie circulaire.
                            Son combat : des milieux naturels, littoraux et quartiers propres, grâce à l'action citoyenne, la pédagogie et le plaidoyer.</p>
                    </div>
                </div>
                <div className='flex justify-evenly mt-5'>
                    {benevolats.map((benevolat, index) => (
                        < Test key={index}
                            title={benevolat.title}
                            period={benevolat.period}
                            description={benevolat.description}
                            icon={benevolat.icon} />
                    ))}
                </div>
            </div>
        </section>
    )
}