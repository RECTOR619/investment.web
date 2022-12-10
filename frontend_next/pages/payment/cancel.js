import Head from "next/head";
import Link from "next/link";
import React from "react";
import Payment from ".";
import PaymentModal from "../../components/Modal/PaymentModal";

const Cancel = () => {
  return (
    <div>
      <Payment />

      <PaymentModal status={false} />
    </div>
  );
};

export default Cancel;
