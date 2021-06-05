import { graphql } from "gatsby";
import React from "react";
import Action from  './action.jsx';

export default function SectionCallToAction({ section }) {
  const ActionComponents = section.actions.map((action) => {
    return <Action action={action} />
  });
  return (
    <section className="py-8 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
      <div className="bg-gradient-to-r from-blue-800 via-blue-700 to-blue-500 rounded-lg py-16 px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-4">{section.title}</h2>
        <p className="text-xl text-white text-center mb-8">{section.subtitle}</p>
        <div className="relative flex flex-wrap items-left justify-center -my-6">
          {ActionComponents}
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment SectionCtaFragment on ContentfulSectionCallToAction {
    title
    subtitle
    actions {
      ...ActionFields
    }
  }
`;
