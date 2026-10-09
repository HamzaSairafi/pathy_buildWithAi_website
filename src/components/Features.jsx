import { BookOpen, ChartNoAxesColumnIncreasing, Code2, Target } from 'lucide-react'
import { features } from '../data/content'

const iconMap = {
  book: BookOpen,
  code: Code2,
  chart: ChartNoAxesColumnIncreasing,
  target: Target,
}

function Features() {
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">تجربة صُممت للاستمرار</span>
          <h2 className="section-title">ليش تختار باثي؟</h2>
          <p className="section-description">تجربة تعلّم تساعدك على التركيز والاستمرار وتحويل المعرفة إلى تطبيق.</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <article className="feature-card" key={feature.title}>
                <span className="feature-number" aria-hidden="true">0{index + 1}</span>
                <span className="icon-box" aria-hidden="true"><Icon /></span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
