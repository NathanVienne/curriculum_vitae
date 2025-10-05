import Icon from '@mdi/react';
import { mdiCodeTags, mdiBasketball, mdiGolfTee, mdiHiking, mdiWatch, mdiCoffee } from '@mdi/js';

const interests = [
    { iconPath: mdiCodeTags, label: "Developpement Web" },
    { iconPath: mdiBasketball, label: "Basket" },
    { iconPath: mdiGolfTee, label: "Golf" },
    { iconPath: mdiHiking, label: "Randonnées" },
    { iconPath: mdiWatch, label: "Horlogerie" },
    { iconPath: mdiCoffee, label: "Café" },
];

export default function About() {
    return (
        <section className="bg-neutral text-white py-10">
            <div className="text-center">
                <h2 className="pt-10 pb-5 text-4xl font-bold">A Propos</h2>
                <p className="text-xl pb-12 text-accent">En savoir plus sur moi & mes valeurs</p>
            </div>
            <div className="p-8 bg-primary mx-10 md:mx-40 rounded-2xl space-y-5 text-justify text-lg shdow-2xl">
                <p>Passionné par le développement web depuis plus de 5 ans, je m'efforce de créer des solutions élégantes et performantes qui répondent aux besoins réels des utilisateurs.
                    Mon approche combine expertise technique, créativité et souci du détail pour livrer des produits de qualité.</p>
                <p>Je crois fermement en l'apprentissage continu et j'aime explorer de nouvelles technologies.
                    La collaboration et le partage de connaissances sont au cœur de ma philosophie professionnelle.</p>
                <p>En dehors du code, j'apprécie les moments passés à découvrir de nouveaux lieux, écouter de la musique et contribuer à des projets open source.
                    Je suis toujours ouvert à de nouvelles opportunités et collaborations enrichissantes.</p>
            </div>
            <div className="text-center text-2xl font-semibold mt-10 px-10">
                <h3>Centres d'Intérêt</h3>
                <article className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-15 max-w-4xl mx-auto'>
                    {interests.map((interest, index) => (
                        <div className='card bg-neutral rounded-2xl shadow-2xl border border-neutral hover:border-secondary' key={index}>
                            <figure className='pt-6'>
                                <Icon 
                                    path={interest.iconPath} 
                                    size={2.5} 
                                    className='p-4 bg-primary rounded-full text-accent' 
                                />
                            </figure>
                            <div className='card-body items-center text-center'>
                                <h3 className='card-title'>
                                    {interest.label}
                                </h3>
                            </div>
                        </div>
                    ))}
                </article>
            </div>
        </section>
    )
}