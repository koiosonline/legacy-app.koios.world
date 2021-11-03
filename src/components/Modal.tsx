import { Icon } from "./Util/Icon";

type ModalProps = {
  modalState: () => void;
};

export const Modal: React.FC<ModalProps> = (props) => {
  return (
    <div className="modal__background" onClick={props.modalState}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        <Icon type="close" className="icon-close" onClick={props.modalState} />
        {props.children}
      </div>
    </div>
  );
};
