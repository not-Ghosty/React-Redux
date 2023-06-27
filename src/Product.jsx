import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { add } from "./store/cartSlice";
const Product = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setData(response.data);
    });
  }, []);

  const dispatch = useDispatch();
  const addtocart = (product) => {
    dispatch(add(product));
  };
  const card = data.map((x) => (
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
            style={{ width: "130px", height: "150px", paddingTop: "15px" }}
          />
        </div>

        <Card.Body style={{ marginTop: "10px" }}>
          <Card.Title>{x.title}</Card.Title>
          <Card.Text>INR . {x.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button
            variant="primary"
            onClick={() => {
              addtocart(x);
            }}
          >
            Add to cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div className="App">
      <h1>Product dashbord</h1>
      <div className="row">{card}</div>
    </div>
  );
};

export default Product;
