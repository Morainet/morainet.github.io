export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Morainet. 由 GitHub Pages 构建。</p>
        <p><a href="https://github.com/Morainet" target="_blank" rel="noopener">GitHub 组织 ↗</a></p>
      </div>
    </footer>
  )
}
