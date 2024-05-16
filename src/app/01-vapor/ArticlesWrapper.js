export const ArticlesWrapper = ({ children, numOfArticles }) => {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
        <p>
          <span className="num-of-games">{numOfArticles}</span> games in library
        </p>
      </header>
      <div className="game-grid">{children}</div>
    </section>
  );
};
