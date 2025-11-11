import { useState } from "react";
import Modal from "./modal";
import Icon from "@mdi/react";
import { mdiBriefcase, mdiSchool } from '@mdi/js';


export default function Items({ experiences }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openModal = (index) => setSelectedIndex(index);
    const closeModal = () => setSelectedIndex(null);

    return (
        <>
            {experiences.map((experience, index) => {
                const isSelected = index === selectedIndex;

                return (
                    <button
                        id="experienceItems"
                        key={index}
                        onClick={() => openModal(index)}
                        className={`flex gap-x-2 items-center bg-[#fff2] p-3 pe-4 rounded-3xl ${index %2 === 0 ? "md:self-start" : "md:self-end"}`}>
                        <div className="bg-accent p-2 rounded-xl">{experience.type === "work" ? <Icon path={mdiBriefcase} size={1} /> : <Icon path={mdiSchool} size={1} />}</div>
                        <div className="flex flex-col items-start text-white">
                            <span className="font-bold block">{experience.period}</span>
                            <p className="text-sm">{experience.title}</p>
                        </div>


                        {isSelected && (
                            <Modal experience={experience} onClose={closeModal} />
                        )}
                    </button>
                );
            })}
        </>
    );
}
