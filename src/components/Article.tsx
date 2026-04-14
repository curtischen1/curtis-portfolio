import { type Article } from '../data/articles';
import { TableOfContents } from './TableOfContents';

interface ArticleProps {
  article: Article;
  onBack: () => void;
}

export function ArticleView({ article, onBack }: ArticleProps) {
  const hasToc = !!(article.toc && article.toc.length > 0);

  return (
    <div className="article">
      <button onClick={onBack} className="article__back">
        ← Back to writing
      </button>

      <div className={`article__paper${hasToc ? ' article__paper--with-toc' : ''}`}>
        <div className="article__layout">
          {hasToc && (
            <aside className="article__toc">
              <TableOfContents sections={article.toc!} />
            </aside>
          )}

          <div className="article__main">
            <h1 className="article__title">{article.title}</h1>

            <div>
              {article.content.map((section, i) => (
                <div key={i} className="article__section">
                  {section.heading && (
                    <h2 id={section.id} className="article__heading">
                      {section.heading}
                    </h2>
                  )}

                  {section.body && section.body.map((paragraph, j) => (
                    <p key={j} className="article__paragraph">{paragraph}</p>
                  ))}

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="article__bullets">
                      {section.bullets.map((bullet, k) => (
                        <li key={k}>{bullet}</li>
                      ))}
                    </ul>
                  )}

                  {section.body2 && section.body2.map((paragraph, j) => (
                    <p key={`b2-${j}`} className="article__paragraph">{paragraph}</p>
                  ))}

                  {section.image && (
                    <figure className="article__image">
                      <img src={section.image.src} alt={section.image.alt} />
                      {section.image.caption && (
                        <figcaption className="article__image-caption">{section.image.caption}</figcaption>
                      )}
                    </figure>
                  )}

                  {section.body3 && section.body3.map((paragraph, j) => (
                    <p key={`b3-${j}`} className="article__paragraph">{paragraph}</p>
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
