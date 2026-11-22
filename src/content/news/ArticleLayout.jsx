
import { Link } from 'react-router-dom'

export default function ArticleLayout({ meta, children }) {
  if (!meta) return null

  return (
    <article className="news-article">
      <header className="news-article__header">
        <Link to="/news" className="news-article__back">
          ← Back to news
        </Link>

        <div className="news-article__meta">
          <span className="news-article__category">{meta.category}</span>
          <span className="news-article__dot" aria-hidden="true">·</span>
          <time className="news-article__date">{meta.date}</time>
        </div>

        <h1 className="news-article__title">{meta.title}</h1>

        {meta.excerpt && (
          <p className="news-article__excerpt">{meta.excerpt}</p>
        )}
      </header>

      <div className="news-article__body">
        {children ?? <ArticleSkeleton />}
      </div>
    </article>
  )
}

function ArticleSkeleton() {
  return (
    <div className="news-article__skeleton" aria-busy="true" aria-live="polite">
      <span className="sr-only">Loading article…</span>
      <div className="news-article__skeleton-line" />
      <div className="news-article__skeleton-line" />
      <div className="news-article__skeleton-line news-article__skeleton-line--short" />
    </div>
  )
}