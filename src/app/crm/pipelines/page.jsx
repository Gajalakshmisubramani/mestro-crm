// import Navbar from "./components/Navbar";
// import PipelineColumn from "./components/PipelineColumn";

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
      count: 0,
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
    <div className="p-2 overflow-x-auto bg-gray-100">
      {/* <Navbar />
      <div className="flex flex-row justify-center gap-4 mt-6 ">
        {stages.map((stage, idx) => (
          <PipelineColumn
            key={idx}
            title={stage.title}
            total={stage.total}
            count={stage.count}
            deals={stage.deals}
          />
        ))}
      </div> */}
      <h1 className="text-2xl font-bold text-center text-gray-700">
        CRM Pipeline Page Under Construction
      </h1>
    </div>
  );
}
