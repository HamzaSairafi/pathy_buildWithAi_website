import { ArrowLeft, BookOpen, Check, Flag, Sparkles, Target } from 'lucide-react'

function HeroIllustration() {
  return (
    <div className="hero-visual" aria-label="تصميم توضيحي لرحلة تعليمية تجريبية">
      <span className="visual-orbit visual-orbit-one" aria-hidden="true"><BookOpen /></span>
      <span className="visual-orbit visual-orbit-two" aria-hidden="true"><Target /></span>

      <div className="learning-card">
        <div className="learning-card-header">
          <div>
            <span className="demo-label">نموذج توضيحي</span>
            <h2>رحلتك التعليمية</h2>
          </div>
          <span className="learning-icon" aria-hidden="true"><Sparkles /></span>
        </div>

        <div className="learning-path" aria-hidden="true">
          <div className="path-item is-complete">
            <span className="path-status"><Check /></span>
            <div><strong>اختر هدفك</strong><small>حددت وجهتك</small></div>
          </div>
          <div className="path-item is-active">
            <span className="path-status">02</span>
            <div><strong>ابدأ التعلّم</strong><small>خطوة بخطوة</small></div>
          </div>
          <div className="path-item">
            <span className="path-status"><Flag /></span>
            <div><strong>أنجز مشروعك</strong><small>حوّل المعرفة إلى أثر</small></div>
          </div>
        </div>

        <div className="learning-note">
          <span className="note-dot" aria-hidden="true" />
          <span>كل خطوة صغيرة تقرّبك من هدفك</span>
        </div>
      </div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div className="hero-content">
          <span className="eyebrow"><Sparkles size={17} aria-hidden="true" /> رحلتك التعليمية تبدأ هنا</span>
          <h1>لا تبدأ فقط<span>.. استمر</span></h1>
          <p>
            مع باثي، تعلّم بخطوات واضحة، وطبّق ما تتعلّمه، وتابع تقدمك حتى تحوّل أهدافك إلى إنجازات حقيقية.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#programs">
              استكشف البرامج <ArrowLeft size={19} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#about">تعرّف على باثي</a>
          </div>
          <div className="hero-promise">
            <span><Check size={16} aria-hidden="true" /> خطوات واضحة</span>
            <span><Check size={16} aria-hidden="true" /> تطبيق عملي</span>
            <span><Check size={16} aria-hidden="true" /> تقدّم مستمر</span>
          </div>
        </div>

        <HeroIllustration />
      </div>
    </section>
  )
}

export default Hero
