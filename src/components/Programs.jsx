import { ArrowUpLeft, Clock3, ExternalLink, GitBranch, GraduationCap, Sparkles } from 'lucide-react'
import { programs } from '../data/content'

const iconMap = { sparkles: Sparkles, git: GitBranch }

function Programs() {
  return (
    <section className="section programs-section" id="programs" aria-label="البرامج التعليمية">
      <div className="container">
        <div className="section-heading section-heading-split">
          <div>
            <span className="section-kicker">تعلّم بشيء تصنعه</span>
            <h2 className="section-title">برامج تساعدك تتعلّم وتنجز</h2>
          </div>
          <p className="section-description">استكشف برامج تعليمية تركّز على بناء المهارات من خلال التعلّم والتطبيق.</p>
        </div>

        <div className="programs-grid">
          {programs.map((program) => {
            const Icon = iconMap[program.icon]
            return (
              <article className={`program-card${program.featured ? ' is-featured' : ''}`} key={program.title}>
                {program.featured && <span className="featured-badge">برنامج مميّز</span>}
                <div className="program-card-top">
                  <span className="program-icon" aria-hidden="true"><Icon /></span>
                  <span className="program-category">{program.category}</span>
                </div>
                <h3><bdi>{program.title}</bdi></h3>
                <p>{program.description}</p>

                <div className="program-meta" aria-label="تفاصيل البرنامج">
                  {program.details ? (
                    <>
                      <span><GraduationCap aria-hidden="true" /> {program.details[0]}</span>
                      <span><Clock3 aria-hidden="true" /> {program.details[1]}</span>
                    </>
                  ) : (
                    <span><Sparkles aria-hidden="true" /> تعلّم وتطبيق عملي</span>
                  )}
                </div>

                <a
                  className="program-link"
                  href={program.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`اكتشف البرنامج: ${program.title}`}
                >
                  اكتشف البرنامج <ArrowUpLeft aria-hidden="true" />
                </a>
                <ExternalLink className="program-watermark" aria-hidden="true" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Programs
