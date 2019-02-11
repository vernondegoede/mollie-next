import React from "react";
import PaymentForm from "./../PaymentForm";

class PayButton extends React.Component {
  state = {
    showModal: false,
  };

  showPaymentModal = () => {
    this.setState({
      showModal: true,
    });
  };

  renderPayButton() {
    return <button onClick={this.showPaymentModal}>Buy now</button>;
  }

  render() {
    const { showModal } = this.state;

    if (showModal) {
      return (
        <>
          <PaymentForm {...this.props} />
          {this.renderPayButton()}
        </>
      );
    }

    return this.renderPayButton();
  }
}

export default PayButton;
