import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { faqItems } from '../data/content'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="section faq-section" id="faq">
      <div className="container faq-layout">
        <div className="faq-intro">
          <span className="section-kicker">قبل أن تبدأ</span>
          <h2 className="section-title">الأسئلة الشائعة</h2>
          <p className="section-description">إجابات مختصرة عن باثي وطريقة التعلّم فيها.</p>
          <span className="faq-illustration" aria-hidden="true"><HelpCircle /></span>
        </div>

        <div className="accordion">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            const panelId = `faq-panel-${index}`
            const buttonId = `faq-button-${index}`

            return (
              <div className={`accordion-item${isOpen ? ' is-open' : ''}`} key={item.question}>
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.question}</span>
                    <ChevronDown aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="accordion-panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
