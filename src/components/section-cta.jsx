import { graphql } from "gatsby";
import React from "react";
import Action from  './action.jsx';

export default function SectionCallToAction({ section }) {
  const sectionTitleWords = section.title.split(' ');
  const sectionTitleFirstWord = sectionTitleWords[0];
  const sectionTitleRemainingWords = sectionTitleWords.slice(1).join(' ');
  const ActionComponents = section.actions.map((action) => {
    return <Action action={action} />
  });
  return (
    <section className="relative">
      <div className="max-w-2xl px-4 py-16 mx-auto sm:max-w-xl md:max-w-2xl lg:pt-32 md:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-indigo-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="9ef1ff62-feb2-41fe-8163-772b4c79de7b"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#9ef1ff62-feb2-41fe-8163-772b4c79de7b)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">{sectionTitleFirstWord}</span>
          </span>{' '}
          {sectionTitleRemainingWords}
        </h2>
            <p className="text-base text-gray-700 md:text-lg">
          {section.subtitle}
        </p>
          </div>
      </div>
      <div className="relative flex flex-wrap items-left justify-center -mt-6 -ml-6">
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
