import { type Article } from '../data/articles';

const GH = "'Gloria Hallelujah', cursive";

interface ArticleProps {
  article: Article;
  onBack: () => void;
}

export function ArticleView({ article, onBack }: ArticleProps) {
  return (
    <div style={{ paddingTop: '24px', paddingBottom: '80px' }}>
      {/* Back link */}
      <button
        onClick={onBack}
        style={{
          fontFamily: GH,
          fontSize: '18px',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#000',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '40px',
          padding: 0,
        }}
      >
        ← Back to writing
      </button>

      {/* Article as paper note */}
      <div
        style={{
          backgroundColor: '#fff',
          border: '3px solid black',
          boxShadow: '5px 6px 0px rgba(0,0,0,0.15)',
          padding: '48px 48px 56px',
          maxWidth: '820px',
        }}
      >
        {/* Article title */}
        <h1
          style={{
            fontFamily: GH,
            fontSize: '64px',
            lineHeight: 1.2,
            marginBottom: '48px',
          }}
        >
          {article.title}
        </h1>

        {/* Article content */}
        <div>
          {article.content.map((section, i) => (
            <div key={i} style={{ marginBottom: '48px' }}>
              {section.heading && (
                <h2
                  style={{
                    fontFamily: GH,
                    fontSize: '36px',
                    marginBottom: '20px',
                    lineHeight: 1.3,
                  }}
                >
                  {section.heading}
                </h2>
              )}

              {section.body && section.body.map((paragraph, j) => (
                <p
                  key={j}
                  style={{
                    fontSize: '18px',
                    lineHeight: 1.8,
                    color: '#222',
                    marginBottom: '16px',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  {paragraph}
                </p>
              ))}

              {section.bullets && section.bullets.length > 0 && (
                <ul
                  style={{
                    paddingLeft: '28px',
                    marginBottom: '16px',
                  }}
                >
                  {section.bullets.map((bullet, k) => (
                    <li
                      key={k}
                      style={{
                        fontSize: '18px',
                        lineHeight: 1.8,
                        color: '#222',
                        marginBottom: '6px',
                        fontFamily: 'Georgia, serif',
                      }}
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {section.body2 && section.body2.map((paragraph, j) => (
                <p
                  key={`b2-${j}`}
                  style={{
                    fontSize: '18px',
                    lineHeight: 1.8,
                    color: '#222',
                    marginBottom: '16px',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
