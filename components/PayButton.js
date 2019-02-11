import React from 'react';

class PayButton extends React.Component {
    state = {
        showModal: false,
    }

    showPaymentWindow = () => {
        this.setState({

        })
    }

    render() {
        return (
            <button onClick={this.showPaymentWindow}>
                Buy now
            </button>
        )
    }
}

export default PayButton;