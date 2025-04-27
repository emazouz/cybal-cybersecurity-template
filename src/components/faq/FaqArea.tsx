

'use client'
import React, { useState } from 'react';


const faq_data = [
  {
    id: "One",
    question: `How does it create content?`,
    answer: `Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that.`,
  },
  {
    id: "Two",
    question: `Is the content original?`,
    answer: `Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that.`,
  },
  {
    id: "Three",
    question: `How to write long-form blogs?`,
    answer: `Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that.`,
  },
  {
    id: "Four",
    question: `How do I view my usage?`,
    answer: `Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that.`,
  },
  {
    id: "Five",
    question: `How does it create content?`,
    answer: `Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that. Great value and so easy to use and saves me so much time! I was shocked by how much time and brain energy it saved me. Simple & easy gotta love that.`,
  },
]



const FaqArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleActive = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <section className="faq_area section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span>Faq</span>
            <h2>See all question <br /> & answer</h2>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="accordion" id="accordionExample">
                {faq_data.map((item, i) => (
                  <div key={i} className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button ${activeIndex === i ? 'active' : ''}`}
                        type="button"
                        onClick={() => toggleActive(i)}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse ${activeIndex === i ? 'show' : ''}`}
                      aria-labelledby={`heading${item.id}`}
                    >
                      <div className="accordion-body">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqArea;
