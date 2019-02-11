import React, { useState } from "react";

const PaymentForm = () => {
  return (
    <>
      <div className="payment-form__backdrop" />
      <form className="payment-form">
        <strong>test</strong>
      </form>
      <style jsx>
        {`
          .payment-form__backdrop {
            background: rgba(0, 0, 0, 0.8);
          }

          .payment-form {
            width: 300px;
            left: 50%;
            transform: translateX(-50%);
            top: 100px;
            background: white;
            border-radius: 6px;
            padding: 30px;
          }

          .payment-form__backdrop {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
          }

          .payment-form,
          .payment-form__backdrop {
            position: absolute;
          }
        `}
      </style>
    </>
  );
};

export default PaymentForm;
