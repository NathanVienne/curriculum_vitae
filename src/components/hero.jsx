import profileImage from "../assets/profile_image.jpg"

function Hero() {
    return (
        <section id="hero" className="min-h-screen bg-primary flex items-center justify-center pt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <div className="flex-1 space-y-6 text-center  text-white md:text-left">
                        <div className="space-y-2">
                            <p className="text-3xl font-medium">Bonjour, je suis</p>
                            <h1 className="text-6xl md:text-6xl font-bold">
                                Nathan Vienne
                            </h1>
                            <h2 className="text-3xl md:text-3xl font-semibold text-foreground">
                                Développeur Full Stack
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-xl">
                                Passionné par la création d'expériences web modernes et performantes.
                                Spécialisé en React, Node.js et architectures cloud.
                            </p>
                        </div>
                    </div>
                    <div className="flex-shrink-0">
                        <div className="relative">
                            <div className="absolute inset-0 bg-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
                            <img
                                src={profileImage}
                                alt="Nathan Vienne"
                                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-3 border-neutral shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero