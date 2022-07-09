import React, { useEffect } from "react";
import {
  Link,
  useParams,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { Message } from "../components/Message";
import { addToCart } from "../actions/cartActions";

function CartScreen() {
  const { id } = useParams();

  /* hook to use search params in url */
  let [searchParams, setSearchParams] = useSearchParams();

  const qty = searchParams.get("qty");

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  console.log(id);

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  return <div>Cart</div>;
}

export default CartScreen;
