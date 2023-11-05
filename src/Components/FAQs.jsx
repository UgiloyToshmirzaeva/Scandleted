import React, { useState, useRef, useEffect } from 'react';
import './FAQs.css';
import Button from './Button';

const faqs = [
  {
    question: 'Product & Promos',
    answer: 'Are candles safe for babies to toddle? Absolutely, because we use organic ingredients and does not use hazardous chemicals',
  },
  {
    question: 'Delivery',
    answer: 'Answer for Delivery',
  },
  {
    question: 'Refunds',
    answer: 'Answer for Refunds',
  },
  {
    question: 'Can I resell wax products at a different price?',
    answer: 'Answer for reselling',
  },
];

function FAQs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setActiveIndex(null);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page" ref={ref}>
        
        <div className="faq-navigation">
        <h1>FAQs</h1>
            <button className='first'>Product Promos</button>
            <button className='faq-nav-btns'>Delivery</button>
            <button className='faq-nav-btns'>Refunds</button>
        </div>
      <div className="Acc">
      {faqs.map((faq, index) => (
        <div key={index}>
            <div className="line"></div>
          <div className="accordion">
          <h3>{faq.question}</h3> <span className='spanPlus' onClick={() => handleClick(index)}>+</span>
          </div>
          <p className={`answer ${activeIndex === index ? 'open' : ''}`}>{faq.answer}</p>
          <div className="line"></div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default FAQs;
