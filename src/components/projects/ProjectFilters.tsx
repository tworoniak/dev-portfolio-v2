type ProjectFiltersProps = {
  tags: string[];
  active: Set<string>;
  onToggle: (tag: string) => void;
  onClear: () => void;
};

const ProjectFilters = ({ tags, active, onToggle, onClear }: ProjectFiltersProps) => {
  return (
    <div className='flex flex-wrap items-center gap-2'>
      {tags.map((tag) => {
        const isActive = active.has(tag);
        return (
          <button
            key={tag}
            onClick={() => onToggle(tag)}
            className={`rounded-full border px-3 py-1 text-xs transition-colors ${
              isActive
                ? 'border-zinc-700 bg-zinc-900 text-white dark:border-white/60 dark:bg-white dark:text-black'
                : 'border-zinc-300 bg-transparent text-zinc-600 hover:border-zinc-400 hover:text-zinc-900 dark:border-white/15 dark:text-zinc-400 dark:hover:border-white/30 dark:hover:text-white'
            }`}
          >
            {tag}
          </button>
        );
      })}

      {active.size > 0 && (
        <button
          onClick={onClear}
          className='ml-1 text-xs text-zinc-400 underline-offset-2 hover:text-zinc-600 hover:underline dark:hover:text-zinc-200'
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default ProjectFilters;
