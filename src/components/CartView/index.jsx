import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
const CartView = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [number, setNumber] = useState(0);
  const sum = () => {
    setNumber(number + 1);
  };
  const minus = () => {
    number > 0 ? setNumber(number - 1) : null;
  };
  const subtotal = 4 * number;

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
          <Modal.Title>Carrito</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="container text-left">
            <div className="row">
              <div className="col-3">Column</div>
              <div className="col-9">
                <div className="row">
                  <div className="col-10">
                    <div>nombre producto </div>
                    <button onClick={sum} className="buttons btn btn-link">
                      <i className="bi bi-plus"></i>
                    </button>
                    <p className="Sum">{number}</p>
                    <button onClick={minus} className="buttons btn btn-link">
                      <i className="bi bi-dash"></i>
                    </button>
                    <div>Precio: 12344 </div>
                  </div>
                  <div className="col-2">
                    {" "}
                    <button className="button btn btn-link">
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="total">
            <div className="row">
              <div className="col">
                <h6 className="card-text">Subtotal: 123444</h6>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Finalizar compra
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default CartView;
