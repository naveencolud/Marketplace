const filters = ['All', 'Artwork', 'Book']

export default function FilterBar({ value, onChange }) {
  return (
    <div className="filter-bar" role="group" aria-label="Filter by category">
      {filters.map((filter) => (
        <button type="button" key={filter} className={`filter-chip ${value === filter ? 'active' : ''}`} onClick={() => onChange(filter)}>{filter}</button>
      ))}
    </div>
  )
}