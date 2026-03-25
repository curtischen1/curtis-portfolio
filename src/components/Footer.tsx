import { useState } from 'react';

const GH = "'Gloria Hallelujah', cursive";

export function Footer() {
  const [copied, setCopied] = useState(false);

  function handleCopyEmail() {
    navigator.clipboard.writeText('curtischen1@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <footer
      style={{
        borderTop: '3px solid black',
        padding: '48px 24px',
        textAlign: 'center',
      }}
    >
      <p
        style={{
          fontFamily: GH,
          fontSize: '32px',
          marginBottom: '24px',
        }}
      >
        Thanks for stopping by
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '28px',
          marginBottom: '24px',
        }}
      >
        <button
          onClick={handleCopyEmail}
          style={{
            fontFamily: GH,
            fontSize: '18px',
            color: '#000',
            textDecoration: 'none',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0,
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.textDecoration = 'none';
          }}
        >
          {copied ? 'Copied!' : 'Email'}
        </button>
        <a
          href="https://www.linkedin.com/in/curtischen1/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: GH,
            fontSize: '18px',
            color: '#000',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.textDecoration = 'none';
          }}
        >
          LinkedIn
        </a>
        <a
          href="https://curtischen1.substack.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: GH,
            fontSize: '18px',
            color: '#000',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.textDecoration = 'none';
          }}
        >
          Substack
        </a>
      </div>

      <p style={{ fontSize: '14px', color: '#666' }}>
        &copy; {new Date().getFullYear()} Curtis Chen
      </p>
    </footer>
  );
}
