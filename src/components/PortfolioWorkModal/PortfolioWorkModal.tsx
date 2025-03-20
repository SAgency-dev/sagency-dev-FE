import { useRef } from "react";
import { useDisabledPageScroll, useOutsideClick } from "../../helpers/hooks";
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
  useDisabledPageScroll();

  const dispatch = useAppDispatch();

  const onCloseModal = () => {
    dispatch(closeModal({ id: MODAL_TYPE.portfolio }));
    window.scrollTo(0, scrollY);
  };

  useOutsideClick(modalRef, onCloseModal);

  return (
    <div className="popup">
      <div
        className="popup__content"
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
      >
        <img id="popup__image" src={workLink ?? ""} alt="Full Image" />
        <span className="popup__close" onClick={onCloseModal}>
          &times;
        </span>
      </div>
    </div>
  );
};

export default PortfolioWorkModal;
