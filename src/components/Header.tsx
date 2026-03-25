type Page = 'home' | 'writing' | 'about';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const GH = "'Gloria Hallelujah', cursive";

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header style={{ padding: '24px 32px', display: 'flex', justifyContent: 'flex-end', width: '100%', boxSizing: 'border-box' }}>
      <nav
        style={{
          border: '4px solid black',
          borderRadius: '9999px',
          display: 'flex',
          alignItems: 'center',
          padding: '0px',
          gap: '0px',
        }}
      >
        {(['home', 'about', 'writing'] as Page[]).map((page) => (
          <button
            key={page}
            onClick={() => onNavigate(page)}
            style={{
              fontFamily: GH,
              fontSize: '22px',
              padding: '10px 28px',
              cursor: 'pointer',
              border: 'none',
              borderRadius: '9999px',
              backgroundColor: currentPage === page ? '#000' : 'transparent',
              color: currentPage === page ? '#F1EEE1' : '#000',
              transition: 'background-color 0.15s ease, color 0.15s ease',
            }}
          >
            {page}
          </button>
        ))}
      </nav>
    </header>
  );
}
