export default function Degree({ label, year, time, values }) {
    return (
        <article className="bg-gradient-to-r from-violet-700 to-cyan-400 p-0.25 rounded-md">
            <div className="bg-gray-950 text-white p-6 rounded-lg w-full max-w-md font-mono h-110 md:h-90">
                <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                        <div className="w-3 h-3 rounded-full bg-neutral"></div>
                        <div className="w-3 h-3 rounded-full bg-secondary"></div>
                        <div className="w-3 h-3 rounded-full bg-accent"></div>
                    </div>
                    <p className="text-sm text-accent">{label}</p>
                </div>

                <div className="mt-4">
                    <p className="text-secondary">`$ Intitulé formation:  {label}`</p>
                    <p className="text-white">`Date de dernière version - {year}`</p>
                    <p className="text-white">`Durée: {time}`</p>

                    <div className="mt-3 grid grid-cols-3 gap-2 max-h-24">
                        {values.map((value, index) => (
                            <p
                                key={index}
                                className="text-[0.62em] md:text-xs text-gray-300 bg-primary rounded-md px-2 py-1 text-center hover:bg-gray-700 hover:cursor-pointer"
                            >
                                {value}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
}
