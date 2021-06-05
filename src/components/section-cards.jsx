//import { graphql } from "gatsby";
import React from "react";
import Card from "./card.jsx";

export default function SectionCards({ section }) {
  const { title, cards } = section;
  if (!title && (!cards || cards.length === 0)) {
    return "";
  }
  const CardComponents = !!cards && cards.length > 0 && cards.map((card) => {
    return <Card card={card} />;
  });
  return (
    <section className="py-8 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      {!!title && (
        <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      )}
      {!!cards && cards.length > 0 && (
        <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
          {CardComponents}
        </div>
      )}
    </section>
  );
}

/*export const query = graphql`
  fragment SectionCardFragment on ContentfulSectionCard {
    title
    subtitle
    actions {
      ...ActionFields
    }
  }
`;*/
