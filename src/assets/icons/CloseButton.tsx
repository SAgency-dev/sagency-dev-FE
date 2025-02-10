type CloseButtonProps = {
  handleClose: () => void;
};

const CloseButton = ({ handleClose }: CloseButtonProps) => {
  return (
    <button
      onClick={handleClose}
      style={{
        display: "inline-flex",
        padding: "0",
        border: "none",
        cursor: "pointer",
        width: "14px",
        height: "14px",
        position: "absolute",
        top: "20px",
        right: "20px",
        backgroundColor: "inherit",
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.307991 13.692C-0.102664 13.2814 -0.102664 12.6156 0.307991 12.2049L12.2049 0.307992C12.6155 -0.102663 13.2814 -0.102664 13.692 0.307991C14.1027 0.718646 14.1027 1.38445 13.692 1.7951L1.7951 13.692C1.38445 14.1027 0.718646 14.1027 0.307991 13.692Z"
          fill="white"
        />
        <path
          d="M0.307992 0.307991C0.718646 -0.102664 1.38445 -0.102664 1.7951 0.307991L13.692 12.2049C14.1027 12.6156 14.1027 13.2814 13.692 13.692C13.2814 14.1027 12.6156 14.1027 12.2049 13.692L0.307992 1.7951C-0.102663 1.38445 -0.102663 0.718646 0.307992 0.307991Z"
          fill="white"
        />
      </svg>
    </button>
  );
};

export default CloseButton;
