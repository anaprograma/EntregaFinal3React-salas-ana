import "./style.css";
import CartView from "../../CartView";

import { useState, useEffect } from "react";
import { useProductContext } from "../../../ProductContext/ProductContext";
import { useParams } from "react-router-dom";

function CartWidget() {
  const { product } = useProductContext();
  let { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const itemData = async () => {
      const selectedItem = product.find((prod) => prod.id === id);
      setItem(selectedItem);
    };
    itemData();
  }, [id]);

  return (
    <div className="cartv">
      {item ? (
        <>
          <CartView data={item} cartItems={cartItems} />
        </>
      ) : null}
    </div>
  );
}
{
  /* <div className="itemdetail">
      {item ? <ItemList data={item} description={true} /> : null}
    </div> */
}

export default CartWidget;
