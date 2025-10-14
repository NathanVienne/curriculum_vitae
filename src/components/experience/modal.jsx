import { useEffect, useRef } from "react";

export default function Modal({ experience, onClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  }, []);

  return (
    <dialog ref={modalRef} className="modal">
      <div className="modal-box bg-primary px-15">
        <p className="my-1 w-28 text-center text-secondary font-semibold bg-secondary/40 rounded-xl">{experience.period}</p>
        <h3 className="mt-2 font-semibold text-xl text-accent">{experience.title}</h3>
        <p className="mt-1 text-lg text-white">{experience.company}</p>
        <p className="py-4 text-white text-center text-justify" style={{ whiteSpace: 'pre-line' }}>{experience.description}</p>
        {experience.stages && (<p className="py-4 text-white text-center text-justify" style={{ whiteSpace: 'pre-line' }}><span className="text-accent">Stages durant cette période</span><br/>{experience.stages}</p>)}
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-accent" onClick={onClose}>Fermer</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
