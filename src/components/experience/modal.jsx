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
        <h3 className="font-bold text-lg text-white text-center">{experience.title}</h3>
        <p className="py-1 text-secondary text-center font-semibold">{experience.period}</p>
        <p className="py-4 text-white text-center text-justify">{experience.description}</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-accent" onClick={onClose}>Fermer</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}
