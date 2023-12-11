import ReactDOM from 'react-dom';
import './Modal.css'

const Backdrop = (props) => {
    return <div className= 'backdrop'/>;
  };
  
  const Overlay = (props) => {
    return (
      <div className='modal'>
        <div className='content'>{props.children}</div>
      </div>
    );
  };
  
  const portalItem = document.getElementById('overlays');
  
  const Modal = (props) => {
    return (
      <>
        {ReactDOM.createPortal(<Backdrop />, portalItem)}
        {ReactDOM.createPortal(
          <Overlay>{props.children}</Overlay>,
          portalItem
        )}
      </>
    );
  };
  
  export default Modal;