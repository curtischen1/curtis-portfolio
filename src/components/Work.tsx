import { articles, type Article } from '../data/articles';
import { SlantedUnderline } from './SlantedUnderline';

interface WorkProps {
  onSelectArticle: (article: Article) => void;
}

export function Work({ onSelectArticle }: WorkProps) {
  return (
    <section className="work">
      <div className="page-enter">
        <h1 className="work__title">
          <SlantedUnderline>Stories</SlantedUnderline>
        </h1>

        <div className="work__subtitle-row">
          <img
            src="/assets/Curtis_TypeWriter.png"
            alt="typewriter"
            className="work__typewriter"
          />
          <p className="work__subtitle">
            Check out some of my<br />writing...
          </p>
        </div>
      </div>

      <div className="page-enter-delayed">
        <div className="work__grid">
          {articles.map((article) => (
            <article
              key={article.id}
              onClick={() => onSelectArticle(article)}
              className="work__card"
            >
              <div className="work__cover">
                {article.coverImage && (
                  <img
                    src={article.coverImage}
                    alt={article.title}
                    style={article.coverImageStyle}
                  />
                )}
              </div>

              <div className="work__body">
                <p className="work__meta">{article.date} ~ {article.readTime}</p>
                <h2 className="work__card-title">{article.title}</h2>
                <p className="work__description">{article.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
