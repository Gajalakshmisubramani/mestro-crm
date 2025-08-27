"use client";

import React from "react";
import DealCard from "./DealCard";

interface PipelineColumnProps {
  title: string;
  total: string;
  count: number;
  deals?: {
    title: string;
    owner: string;
    amount: string;
    date: string;
  }[];
}

const PipelineColumn: React.FC<PipelineColumnProps> = ({
  title,
  total,
  count,
  deals = [],
}) => {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg w-72 flex-shrink-0 flex flex-col">
      {/* Header */}
      <div className="p-3 border-b border-gray-200 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
          <p className="text-xs text-gray-500">
            {total} • {count} Deal{count !== 1 && "s"}
          </p>
        </div>
        <button className="w-6 h-6 rounded-full bg-gray-100 text-gray-500 flex items-center justify-center hover:bg-gray-200">
          +
        </button>
      </div>

      {/* Deal cards */}
      <div className="p-3 flex flex-col gap-3 flex-1">
        {deals.length > 0 ? (
          deals.map((deal, idx) => (
            <DealCard
              key={idx}
              title={deal.title}
              owner={deal.owner}
              amount={deal.amount}
              date={deal.date}
            />
          ))
        ) : (
          <p className="text-xs text-gray-400 text-center mt-10">
            This stage is empty
          </p>
        )}
      </div>
    </div>
  );
};

export default PipelineColumn;
