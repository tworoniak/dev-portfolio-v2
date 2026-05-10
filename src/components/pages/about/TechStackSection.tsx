import { useAccentColor } from '../../../hooks/useAccentColor';
import {
  techStackGroups,
  type TechStackGroup,
  type TechRankItem,
} from '../../../data/techStack';

const TechItem = ({ item, accent }: { item: TechRankItem; accent: string }) => (
  <div className='py-3 border-b border-zinc-100 dark:border-white/5 last:border-b-0'>
    <div className='flex items-center justify-between'>
      <span className='text-sm font-medium text-zinc-900 dark:text-white'>
        {item.name}
      </span>
      <span className='text-xs text-zinc-500'>{item.score}/5</span>
    </div>
    <div className='mt-1 flex gap-[3px]'>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`h-[3px] w-5 rounded-full${i < item.score ? '' : ' bg-zinc-200 dark:bg-white/10'}`}
          style={i < item.score ? { backgroundColor: accent } : undefined}
        />
      ))}
    </div>
    <p className='mt-1 text-xs text-zinc-500 dark:text-zinc-500'>{item.note}</p>
  </div>
);

const GroupCard = ({
  group,
  accent,
}: {
  group: TechStackGroup;
  accent: string;
}) => (
  <div className='card-xl p-5'>
    <p className='text-xs uppercase tracking-[0.3em] text-zinc-500 mb-4'>
      {group.category}
    </p>
    {group.items.map((item) => (
      <TechItem key={item.name} item={item} accent={accent} />
    ))}
  </div>
);

const TechStackSection = () => {
  const { accent } = useAccentColor();

  return (
    <section className='mx-auto max-w-7xl px-2 sm:px-6 py-16 sm:py-24'>
      <p className='text-xs uppercase tracking-[0.3em] text-zinc-500'>
        / TECH STACK
      </p>
      <h2 className='text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mt-3'>
        The tools I reach for first.
      </h2>
      <p className='text-base leading-7 text-zinc-500 dark:text-zinc-400 mt-3 max-w-2xl'>
        A smaller set of tools used repeatedly in production, with everything
        else supporting the work around them.
      </p>

      <div className='mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
        {techStackGroups.map((group) => (
          <GroupCard key={group.category} group={group} accent={accent} />
        ))}
      </div>
    </section>
  );
};

export default TechStackSection;
