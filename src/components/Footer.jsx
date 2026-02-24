function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.links}>
          <a href="/privacidade" style={styles.link}>Política de Privacidade</a>
          <a href="/termos" style={styles.link}>Termos de Uso</a>
          <a href="mailto:contato@nocorre.com" style={styles.link}>Contato</a>
        </div>
        <div style={styles.socials}>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>Instagram</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>Facebook</a>
        </div>
        <div style={styles.copyright}>
          © {new Date().getFullYear()} NoCorre. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: '#f7fafc',
    color: '#222',
    padding: '8px 0 4px 0',
    fontSize: '13px',
    borderTop: '1px solid #e2e8f0',
    opacity: 0.85,
    position: 'fixed',
    left: 0,
    bottom: 0,
    width: '100%',
    zIndex: 100,
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    padding: '0 32px',
    flexWrap: 'wrap',
    minHeight: '40px',
  },
  links: {
    display: 'flex',
    gap: '18px',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  link: {
    color: '#222',
    textDecoration: 'none',
    fontSize: '13px',
    opacity: 0.7,
  },
  socials: {
    display: 'flex',
    gap: '14px',
    alignItems: 'center',
  },
  icon: {
    color: '#222',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '13px',
    opacity: 0.7,
  },
  copyright: {
    fontSize: '12px',
    opacity: 0.6,
    whiteSpace: 'nowrap',
  },
};

export default Footer;
