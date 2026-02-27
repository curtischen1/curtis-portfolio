type Page = 'home' | 'writing' | 'about';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const GH = "'Gloria Hallelujah', cursive";

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="px-8 py-6 flex justify-end">
      <nav
        style={{
          border: '2px solid black',
          borderRadius: '9999px',
          overflow: 'hidden',
          display: 'flex',
        }}
      >
        {(['home', 'about', 'writing'] as Page[]).map((page) => (
          <button
            key={page}
            onClick={() => onNavigate(page)}
            style={{
              fontFamily: GH,
              fontSize: '14px',
              padding: '8px 20px',
              cursor: 'pointer',
              background: 'transparent',
              border: 'none',
              textDecoration: currentPage === page ? 'underline' : 'none',
              fontWeight: currentPage === page ? 'bold' : 'normal',
            }}
          >
            {page}
          </button>
        ))}
      </nav>
    </header>
  );
}
