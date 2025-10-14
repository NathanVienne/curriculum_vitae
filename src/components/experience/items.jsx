import { useState } from "react";
import Modal from "./modal";
import Icon from '@mdi/react';
import { mdiBriefcase, mdiSchool } from '@mdi/js';


export default function Items({ experiences }) {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const openModal = (index) => setSelectedIndex(index);
    const closeModal = () => setSelectedIndex(null);

    return (
        <>
            {experiences.map((experience, index) => {
                const isFirst = index === 0;
                const isLast = index === experiences.length - 1;
                const isSelected = index === selectedIndex;

                return (
                    <li key={index}>
                        {!isFirst && <hr className="bg-gray-400" />}

                        <div
                            className={`${index % 2 === 0 ? "timeline-end" : "timeline-start"
                                } py-2 px-3 text-secondary bg-secondary/30 rounded-xl font-semibold`}
                        >
                            {experience.period}
                        </div>
                        <div className={`btn ${index % 2 === 0 ? "timeline-start" : "timeline-end"
                            } timeline-box indicator bg-primary border-primary hover:shadow-md hover:shadow-secondary`}>
                            <span className="indicator-item text-accent p-2 rounded-full bg-primary/80">
                                {experience.type === "work" ? <Icon path={mdiBriefcase} size={0.75} /> : <Icon path={mdiSchool} size={1} />}
                            </span>
                            <button
                                onClick={() => openModal(index)}
                                className="text-white text-base"
                            >
                                {experience.title}
                            </button>
                        </div>

                        <div className="timeline-middle py-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="text-secondary h-6 w-6"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>

                        {!isLast && <hr className="bg-gray-400" />}

                        {isSelected && (
                            <Modal experience={experience} onClose={closeModal} />
                        )}
                    </li>
                );
            })}
        </>
    );
}
