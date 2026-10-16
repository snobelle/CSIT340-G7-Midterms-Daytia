import RepoCard from "./RepoCard";
function Repositories({portfolioStars, todoStars, dotfilesStars,  onStarPortfolio, onStarTodo, onStarDotfiles}) {
  return (
    <main className="grid grid-cols-3 gap-8 px-20 pt-8">
        <RepoCard name = "Portfolio" description = "My personal page built with React." language = "JavaScript" commits = {12} stars = {portfolioStars} onStar={onStarPortfolio}/>
        <RepoCard name = "Todo App" description = "A simple todo app built with React." language = "JavaScript" commits = {48} stars = {todoStars} onStar={onStarTodo}/>
        <RepoCard name = "Dotfiles" description = "My dotfiles for Linux and macOS." language = "Shell" commits = {30} stars = {dotfilesStars} onStar={onStarDotfiles}/>
    </main>
    );
}

export default Repositories;