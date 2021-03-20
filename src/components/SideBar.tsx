import { Button } from './Button';

interface Genre {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  genres: Genre[]
  selectedGenre: Genre;
  onSelectGenre: (genreId: number) => void
}

export function SideBar({ 
  genres,
  selectedGenre,
  onSelectGenre
}: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => onSelectGenre(genre.id)}
            selected={selectedGenre.id === genre.id}
          />
        ))}
      </div>
    </nav>
  )
}