import { articles, type Article } from '../data/articles';
import { SlantedUnderline } from './SlantedUnderline';

const GH = "'Gloria Hallelujah', cursive";

interface WorkProps {
  onSelectArticle: (article: Article) => void;
}

export function Work({ onSelectArticle }: WorkProps) {

  return (
    <section className="py-12">
      {/* Title */}
      <h1
        style={{
          fontFamily: GH,
          fontSize: '72px',
          textAlign: 'center',
          marginBottom: '48px',
          lineHeight: 1.1,
        }}
      >
        <SlantedUnderline>Stories</SlantedUnderline>
      </h1>

      {/* Subtitle row: typewriter illustration + text */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px',
          marginBottom: '56px',
        }}
      >
        <img
          src="/assets/Curtis_TypeWriter.png"
          alt="typewriter"
          style={{ width: '220px', flexShrink: 0 }}
        />
        <p style={{ fontFamily: GH, fontSize: '40px', lineHeight: 1.4 }}>
          Check out some of my<br />writing...
        </p>
      </div>

      {/* Article grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '24px',
        }}
      >
        {articles.map((article) => (
          <article
            key={article.id}
            onClick={() => onSelectArticle(article)}
            style={{
              border: '2px solid black',
              backgroundColor: '#F6F5F3',
              cursor: 'pointer',
              overflow: 'hidden',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
            }}
          >
            {/* Cover image */}
            <div
              style={{
                aspectRatio: '16/9',
                backgroundColor: '#F1EEE1',
                overflow: 'hidden',
                borderBottom: '2px solid black',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {article.coverImage && (
                <img
                  src={article.coverImage}
                  alt={article.title}
                  style={article.coverImageStyle ?? { width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>

            {/* Card body */}
            <div style={{ padding: '16px' }}>
              <p
                style={{
                  fontSize: '13px',
                  color: '#555',
                  marginBottom: '8px',
                }}
              >
                {article.date} ~ {article.readTime}
              </p>
              <h2
                style={{
                  fontFamily: GH,
                  fontSize: '22px',
                  lineHeight: 1.3,
                  marginBottom: '8px',
                  color: '#000',
                }}
              >
                {article.title}
              </h2>
              <p style={{ fontSize: '14px', color: '#444', lineHeight: 1.5 }}>
                {article.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
