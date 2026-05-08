const AvatarBlock = () => (
  <div className='relative inline-block shrink-0'>
    <div
      className='flex h-16 w-16 items-center justify-center rounded-2xl text-xl font-bold text-white select-none'
      style={{ background: 'oklch(18% 0.08 280)' }}
    >
      TW
    </div>
    <span
      className='absolute bottom-1 right-1 h-3 w-3 rounded-full border-2 bg-emerald-400'
      style={{ borderColor: 'oklch(8% 0.02 280)' }}
      aria-hidden='true'
    />
  </div>
);

export default AvatarBlock;
