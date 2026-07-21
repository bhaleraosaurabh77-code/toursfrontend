import React from "react";

const faqs = [
  {
    q: "Is train fare included?",
    a: "Yes, as per the selected package.",
  },
  {
    q: "Are entry tickets included?",
    a: "Yes, wherever mentioned in the itinerary.",
  },
  {
    q: "Can I travel alone?",
    a: "Yes, solo travellers are welcome.",
  },
  {
    q: "Do you provide tour coordinators?",
    a: "Yes, experienced coordinators accompany the group.",
  },
];

const FAQTab = () => {
  return (

    <div className="space-y-5">

      {faqs.map((faq, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl shadow-md p-6"
        >

          <h3 className="font-bold text-lg text-[#0078AA]">
            {faq.q}
          </h3>

          <p className="text-gray-600 mt-2">
            {faq.a}
          </p>

        </div>

      ))}

    </div>

  );
};

export default FAQTab;