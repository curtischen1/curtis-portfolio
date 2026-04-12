import { useState } from 'react';

function MailIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 4L12 13 2 4" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="black">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function SubstackIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="black">
      <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
    </svg>
  );
}

export function Footer() {
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText('curtischen1@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <footer className="site-footer">
      <div>
        <div className="site-footer__brand">
          <span className="site-footer__name">Curtis Chen</span>
          <img
            src="/assets/my-notion-face-portrait.svg"
            alt="Curtis Chen"
            className="site-footer__avatar"
          />
        </div>
        <p className="site-footer__made-with">
          Made with <img src="/assets/Lego Heart.svg" alt="heart" className="site-footer__heart" />
        </p>
      </div>

      <div>
        <p className="site-footer__reach">Reach Out!</p>
        <div className="site-footer__links">
          <button onClick={handleCopyEmail} className="site-footer__link">
            <MailIcon />
            <span className="site-footer__email-text">{copied ? 'Copied!' : 'curtischen1@gmail.com'}</span>
          </button>

          <a
            href="https://www.linkedin.com/in/curtischen1/"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__link"
          >
            <LinkedInIcon />
            LinkedIn
          </a>

          <a
            href="https://curtischen1.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="site-footer__link"
          >
            <SubstackIcon />
            Substack
          </a>
        </div>
      </div>
    </footer>
  );
}
