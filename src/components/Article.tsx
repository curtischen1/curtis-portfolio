import { type Article } from '../data/articles';
import { TableOfContents } from './TableOfContents';

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
          backgroundColor: '#F6F5F3',
          border: '3px solid black',
          boxShadow: '5px 6px 0px rgba(0,0,0,0.15)',
          padding: '48px 48px 56px',
          maxWidth: article.toc && article.toc.length > 0 ? '1020px' : '820px',
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '48px' }}>
          {/* Sticky TOC sidebar — starts below the title */}
          {article.toc && article.toc.length > 0 && (
            <aside
              style={{
                position: 'sticky',
                top: '24px',
                flexShrink: 0,
                alignSelf: 'flex-start',
                marginTop: '200px',
              }}
            >
              <TableOfContents sections={article.toc} />
            </aside>
          )}

          {/* Main column: title + content */}
          <div style={{ flex: '1 1 auto', minWidth: 0 }}>
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
                  id={section.id}
                  style={{
                    fontFamily: GH,
                    fontSize: '36px',
                    marginBottom: '20px',
                    lineHeight: 1.3,
                    scrollMarginTop: '24px',
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
                    listStyleType: 'disc',
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

              {section.image && (
                <div style={{ display: 'flex', justifyContent: 'center', margin: '24px 0 32px' }}>
                  <img
                    src={section.image.src}
                    alt={section.image.alt}
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>
              )}

              {section.body3 && section.body3.map((paragraph, j) => (
                <p
                  key={`b3-${j}`}
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
      </div>
    </div>
  );
}
