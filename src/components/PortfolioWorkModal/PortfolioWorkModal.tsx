import { useEffect, useRef } from "react";
import { useAppDispatch } from "../../store";
import { closeModal, MODAL_TYPE } from "../../store/modal/slice";
import "./PortfolioWorkModal.scss";

interface PortfolioWorkModalProps {
  workLink: string | null;
  id: string | null;
  handleClose: () => void;
}

const PortfolioWorkModal = ({ workLink }: PortfolioWorkModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  // handler for ESC popup closing
  useEffect(() => {
    modalRef.current?.focus();
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onCloseModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // instant scroll to previous position, when modal is closed
  useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.top = `-${scrollY}px`;
    document.body.style.position = "fixed";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo({left: 0, top: scrollY, behavior: "instant"});
    };
  });

  const dispatch = useAppDispatch();

  const onCloseModal = () => {
    dispatch(closeModal({ id: MODAL_TYPE.portfolio }));
    window.scrollTo(0, scrollY);
  };

  return (
    <div className="popup">
      <div className="popup__content" onClick={(e) => e.stopPropagation()}>
        <img id="popup__image" src={workLink ?? ""} alt="Full Image" />
        <span className="popup__close" onClick={onCloseModal}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default PortfolioWorkModal;
