type Page = 'home' | 'writing' | 'about';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="site-header">
      <nav className="site-header__nav">
        {(['home', 'about', 'writing'] as Page[]).map((page) => (
          <button
            key={page}
            onClick={() => onNavigate(page)}
            className={`site-header__link${currentPage === page ? ' site-header__link--active' : ''}`}
          >
            {page}
          </button>
        ))}
      </nav>
    </header>
  );
}
