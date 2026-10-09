import { Blocks, Compass, Flag, Play } from 'lucide-react'
import { journeySteps } from '../data/content'

const iconMap = { compass: Compass, play: Play, blocks: Blocks, flag: Flag }

function LearningJourney() {
  return (
    <section className="section journey-section" id="journey">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">بداية بسيطة، أثر مستمر</span>
          <h2 className="section-title">كيف تبدأ رحلتك مع باثي؟</h2>
          <p className="section-description">من اختيار هدفك إلى إنجاز مشروعك، تبدأ الرحلة بخطوات بسيطة.</p>
        </div>

        <ol className="journey-list">
          {journeySteps.map((step) => {
            const Icon = iconMap[step.icon]
            return (
              <li className="journey-step" key={step.number}>
                <div className="journey-top">
                  <span className="journey-icon" aria-hidden="true"><Icon /></span>
                  <span className="journey-number" aria-hidden="true">{step.number}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}

export default LearningJourney
