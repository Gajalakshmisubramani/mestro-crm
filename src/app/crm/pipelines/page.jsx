import PipelineColumn from "../components/PipelineColumn";
import PipelineSubNav from "../components/PipelineSubNav"; // 👈 import the sub nav

export default function CRMPage() {
  const stages = [
    {
      title: "Qualification",
      total: "₹5,671.00",
      count: 1,
      deals: [
        {
          title: "Zylker Yearly Subs...",
          owner: "Ted Watson",
          amount: "₹5,671.00",
          date: "Aug 19",
        },
      ],
    },
    { title: "Needs Analysis", total: "₹0.00", count: 0, deals: [] },
    { title: "Proposal/Price Quote", total: "₹0.00", count: 0, deals: [] },
    {
      title: "Negotiation/Review",
      total: "₹0.00",
      count: 2,
      deals: [
        {
          title: "Zylker Yearly Subs...",
          owner: "Ted Watson",
          amount: "₹5,671.00",
          date: "Aug 19",
        },
        {
          title: "Zylker Yearly Subs...",
          owner: "Ted Watson",
          amount: "₹5,671.00",
          date: "Aug 19",
        },
      ],
    },
    { title: "Closed Won", total: "₹0.00", count: 0, deals: [] },
    { title: "Closed Lost", total: "₹0.00", count: 0, deals: [] },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Sub Navbar */}
      <PipelineSubNav /> {/* 👈 this appears at the top */}
      {/* Pipeline Columns */}
      <div className="flex-1 p-2 overflow-x-auto">
        <div className="flex flex-row gap-4 h-full">
          {stages.map((stage, idx) => (
            <PipelineColumn
              key={idx}
              title={stage.title}
              total={stage.total}
              count={stage.count}
              deals={stage.deals}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
