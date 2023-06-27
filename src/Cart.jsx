import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "./store/cartSlice";

const Cart = () => {
  const producttoremove = useDispatch();
  const productstoveiw = useSelector((state) => state.cart);

  const removeitem = (item) => {
    producttoremove(remove(item));
  };
  const card = productstoveiw.map((x) => (
    <div className="col-md-3 my-3">
      <Card
        key={x.id}
        className="h-100 "
        style={{
          width: "18rem",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        }}
      >
        <div className="text-center">
          <Card.Img
            variant="top"
            src={x.image}
            style={{ width: "130px", height: "150px" }}
          />
        </div>

        <Card.Body>
          <Card.Title>{x.title}</Card.Title>
          <Card.Text>INR . {x.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ textAlign: "center" }}>
          <Button
            variant="danger"
            onClick={() => {
              removeitem(x.id);
            }}
          >
            Delete
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
      <div className="row">{card}</div>
    </div>
  );
};

export default Cart;
