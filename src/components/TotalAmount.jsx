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
    <div>
      <p>Booking fee {bookingFee} DKK</p>
      <p>Subtotal: {subtotal} DKK</p>
      <p>Total: {total} DKK</p>
    </div>
  );
}

export default TotalAmount;
