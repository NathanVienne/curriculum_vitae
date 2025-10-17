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
                        <label className="block text-xs text-secondary" for="name"
                        >Nom & Prénom</label
                        >
                        <input
                            className="mt-1 p-2 w-full transparent-input border border-gray-600 rounded-md text-white"
                            type="text"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-xs text-secondary" for="email"
                        >Adresse Email</label
                        >
                        <input
                            className="mt-1 p-2 w-full transparent-input border border-gray-600 rounded-md text-white"
                            name="email"
                            id="email"
                            type="email"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-xs text-secondary" for="content"
                        >Message</label
                        >
                        <textarea
                            className="mt-1 p-2 w-full transparent-input border border-gray-600 rounded-md text-white"
                            rows="3"
                            name="bio"
                            id="bio"
                        ></textarea>
                    </div>

                    <div className="flex justify-end">
                        <button
                            className="bg-primary text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                            type="submit"
                        >
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}