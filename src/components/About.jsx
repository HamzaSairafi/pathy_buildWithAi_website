import { ArrowUpLeft, CheckCircle2, Route } from 'lucide-react'

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div className="about-content">
          <span className="section-kicker">عن المنصة</span>
          <h2 className="section-title">ما هي باثي؟</h2>
          <p className="section-description">
            باثي منصة تعليمية تساعدك على تطوير مهاراتك من خلال تجربة تعلّم منظمة تجمع بين المعرفة والتطبيق والاستمرار. الفكرة ليست أن تبدأ رحلة التعلّم فقط، بل أن تواصلها حتى تحقق هدفك.
          </p>
          <blockquote>“التعلّم رحلة، والاستمرار يصنع الفرق.”</blockquote>
        </div>

        <div className="about-card">
          <div className="about-card-icon" aria-hidden="true"><Route /></div>
          <div>
            <span className="about-card-label">مسارك أوضح</span>
            <h3>من هدف تتطلّع إليه إلى إنجاز تفتخر به</h3>
          </div>
          <ul>
            <li><CheckCircle2 aria-hidden="true" /> معرفة منظّمة</li>
            <li><CheckCircle2 aria-hidden="true" /> تطبيق يصنع المهارة</li>
            <li><CheckCircle2 aria-hidden="true" /> استمرار يقود للنتيجة</li>
          </ul>
          <span className="about-arrow" aria-hidden="true"><ArrowUpLeft /></span>
        </div>
      </div>
    </section>
  )
}

export default About
