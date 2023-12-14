function TotalAmount(props) {
  const vipTotal = props.vipValue * props.priceVIP;
  const regularTotal = props.regularValue * props.priceRegular;
  let greenCampingTotal = props.priceGreenCamping;
  const twoPersonTentTotal =
    props.twoPersonTentValue * props.priceTwoPersonTent;
  const threePersonTentTotal =
    props.threePersonTentValue * props.priceThreePersonTent;
  const bookingFee = 99;

  if (props.greenCamping === true) {
    greenCampingTotal = props.priceGreenCamping;
  } else {
    greenCampingTotal = 0;
  }

  const total =
    vipTotal +
    regularTotal +
    greenCampingTotal +
    twoPersonTentTotal +
    threePersonTentTotal +
    bookingFee;
  const subtotal = total - greenCampingTotal - bookingFee;

  {
    props.setTotalSpendAmount(() => total);
  }

  return (
    <div className="grid grid-cols-3 items-center">
      <p className="grid-start-1">Booking fee </p>
      <p className="col-start-3">{bookingFee}</p>
      <span className="col-start-4">DKK</span>
      <p className="col-start-1 row-start-2">Subtotal: </p>
      <p className="col-start-3 row-start-2">{subtotal}</p>
      <span className="col-start-4">DKK</span>
      <p className="col-start-1 row-start-3">Total: </p>
      <p className="col-start-3 row-start-3">{total}</p>
      <span className="col-start-4">DKK</span>
    </div>
  );
}

export default TotalAmount;
