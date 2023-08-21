import "./style.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
function CartWidget() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="cart-container"
        variant="light"
        size="lg"
        onClick={handleShow}
      >
        <i className="cart bi bi-cart3"></i>
        <span className="number">4</span>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    // <div className="cart-container">
    //   <i className="bi bi-cart3"></i>

    //   <span className="number">4</span>
    // </div>
  );
}

export default CartWidget;
