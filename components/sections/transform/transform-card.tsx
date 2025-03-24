import React, { FC, ReactNode } from "react";

interface iCard {
  icon: ReactNode;
  title: string;
  content: string;
}

const TransformCard: FC<iCard> = ({ icon, title, content }) => {
  return (
    <div className="rounded-2xl col-span-6 md:col-span-3 bg-white dark:bg-[#093F2D] dark:border-[#0F7760] min-h-[200px] border border-[rgba(15,119,97,0.5)] flex items-center flex-wrap gap-8 md:p-16 break-words p-6">
      {icon}
      <div className="space-y-2 text-start">
        <p className="capitalize text-[#093F2D] dark:text-white">
          <b>{title}</b>
        </p>
        <p className="text-[#043024] dark:text-white opacity-[68%]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default TransformCard;
