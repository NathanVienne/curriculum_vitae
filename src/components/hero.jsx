import profileImage from "../assets/profile_image.jpg"
import Icon from '@mdi/react';
import { mdiGithub, mdiLinkedin, mdiAt, mdiTrayArrowDown, mdiEmailOutline } from '@mdi/js';

function Hero() {
    return (
        <section id="hero" className="min-h-screen bg-primary flex items-center justify-center pt-16">
            <div className="container mx-auto py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 space-y-6 text-center  text-white md:text-left">
                        <div className="space-y-2">
                            <p className="text-3xl font-medium">Bonjour, je suis</p>
                            <h1 className="text-6xl md:text-6xl font-bold">
                                Nathan <span className="text-hollow">Vienne</span>
                            </h1>
                            <h2 className="text-3xl md:text-3xl text-accent font-semibold text-foreground">
                                Développeur Full Stack
                            </h2>
                            <p className="text-lg text-muted-foreground text-slate-400 max-w-xl">
                                Passionné par la création d'expériences web modernes et performantes.
                                Spécialisé en React, Node.js et architectures cloud.
                            </p>
                        </div>
                        <div className="space-y-8">
                            <div className="flex space-x-5">
                                <div className="btn btn-md btn-primary border-neutral hover:btn-accent hover:text-primary">
                                    <Icon path={mdiTrayArrowDown} size={1} />
                                    <button>Télécharger CV</button>
                                </div>
                                <div className="btn btn-md btn-primary border-neutral hover:btn-secondary hover:text-primary">
                                    <Icon path={mdiEmailOutline} size={1} />
                                    <button >Me Contacter</button>
                                </div>
                            </div>
                            <div className="flex space-x-7">
                                <div>
                                    <button type="button"><Icon path={mdiGithub} size={1.6} className="p-2 bg-neutral rounded-full" /></button>
                                </div>
                                <div>
                                    <button type="button"><Icon path={mdiLinkedin} size={1.6} className="p-2 bg-neutral rounded-full" /></button>
                                </div>
                                <div>
                                    <button type="button"><Icon path={mdiAt} size={1.6} className="p-2 bg-neutral rounded-full" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            <img
                                src={profileImage}
                                alt="Nathan Vienne"
                                className="relative w-64 h-64 md:w-90 md:h-90 rounded-full object-cover border-3 border-neutral shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero