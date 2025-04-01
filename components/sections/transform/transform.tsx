import UserGroup from "@/components/icons/user-group";
import React from "react";
import TransformCard from "./transform-card";
import Enterprise from "@/components/icons/enterpise";
import Bag from "@/components/icons/bag";
import Trend from "@/components/icons/trend";

const Transform = () => {
  return (
    <section className="min-h-[70vh] py-20 bg-[radial-gradient(circle_at_50%_75%,#DEFEE8,white)] dark:bg-[radial-gradient(circle_at_top_left,#00261e,#043024)] text-center">
      <div className="container mx-auto px-10 lg:px-20 space-y-10">
        <h1 className="font-bold text-[#043024] dark:text-white text-[30px]">
          Transform Your Financial Journey With WePay!
        </h1>

        <div className="grid grid-cols-6 gap-6 xl:px-20">
          <TransformCard
            content="Simplify payments and withdrawals with just a touch."
            title="For Individuals"
            icon={<UserGroup />}
          />
          <TransformCard
            content="Empower your business with affordable POS systems and seamless transactions."
            title="For SMEs"
            icon={<Enterprise />}
          />
          <TransformCard
            content="Deliver fast, secure, touch-based payments to your customers effortlessly."
            title="For Marketplaces"
            icon={<Bag />}
          />
          <TransformCard
            content="Embrace cashless innovation and identity banking with biometric solutions."
            title="For financial institutions"
            icon={<Trend />}
          />
        </div>
      </div>
    </section>
  );
};

export default Transform;
