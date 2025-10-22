export default function ContactForm() {
    return (
        <>
            <div
                className="max-w-md relative overflow-hidden z-10 p-12 rounded-lg"
                id="form"
            >
                <h3 className="text-2xl font-semibold text-white mb-6">Envoyez-moi un message</h3>

                <form method="post" action="#">
                    <div className="mb-4">
                        <label className="block text-xs text-gray-400 font-semibold" for="name"
                        >Nom & Prénom</label
                        >
                        <input
                            className="mt-1 p-2 w-full border border-[#fff2] rounded-md text-white"
                            type="text"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-xs text-gray-400 font-semibold" for="email"
                        >Adresse Email</label
                        >
                        <input
                            className="mt-1 p-2 w-full border border-[#fff2] rounded-md text-white"
                            name="email"
                            id="email"
                            type="email"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-xs text-gray-400 font-semibold" for="content"
                        >Message</label
                        >
                        <textarea
                            className="mt-1 p-2 w-full border border-[#fff2] rounded-md text-white"
                            rows="3"
                            name="bio"
                            id="bio"
                        ></textarea>
                    </div>

                    <div className="flex justify-end">
                        <button
                            className="bg-primary text-white px-4 py-2 font-semibold rounded-md hover:shadow-sm hover:shadow-secondary w-full group"
                            type="submit"
                        >
                            <div className="relative overflow-hidden">
                                <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                                    Envoyer
                                </p>
                                <p className="absolute top-7 left-36 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" class="svg_send">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                    </svg>
                                </p>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}