import { ArrowUpLeft } from 'lucide-react'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <div className="footer-brand">
          <a className="wordmark wordmark-footer" href="#home">
            <span className="wordmark-mark" aria-hidden="true">ب</span>
            <span>باثي <bdi>| Pathy</bdi></span>
          </a>
          <p>رحلة التعلّم لا تنتهي عند البداية، بل تستمر مع كل خطوة وإنجاز.</p>
        </div>

        <nav className="footer-links" aria-label="روابط التذييل">
          <a href="https://pathy.live/" target="_blank" rel="noreferrer noopener">
            موقع باثي الرسمي <ArrowUpLeft aria-hidden="true" />
          </a>
          <a href="#programs">البرامج</a>
          <a href="#faq">الأسئلة الشائعة</a>
        </nav>
      </div>
      <div className="container footer-bottom">
        <p>هذا الموقع نموذج تعليمي غير رسمي مستوحى من منصة باثي، أُنشئ لأغراض مشروع دراسي.</p>
        <a href="#home">العودة إلى الأعلى</a>
      </div>
    </footer>
  )
}

export default Footer
