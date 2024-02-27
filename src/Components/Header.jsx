import React from "react";
import { useUserContext } from "../ContextProvider";

function Header() {
  const { cardQuantity, cardAmount } = useUserContext() || {};

  return (
    <>
      <header>
        <div className="row text-bg-secondary d-flex align-items-center py-3">
          <div className="col-9">TOTAL QTY: {cardQuantity}</div>
          <div className="col-3">TOTAL Price : { (cardAmount)?.toFixed(2)}</div>
        </div>
      </header>
    </>
  );
}

export default Header;