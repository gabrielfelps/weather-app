import checkmark from '@/assets/images/icon-checkmark.svg';

function UnitsMenuGroup({ title, metric, imperial, checked }) {
  return (
    <div className="flex flex-col self-stretch">
      <p className="text-sm text-neutral-300 px-2 pt-1.5 cursor-default">
        {title}
      </p>
      <p
        className={`flex gap-2.5 justify-between px-2 py-2.5 ${checked ? 'bg-neutral-700 rounded-lg' : ''}`}
      >
        {metric}
        {checked && <img src={checkmark} alt=""></img>}
      </p>
      <p
        className={`flex gap-2.5 justify-between px-2 py-2.5 ${checked ? '' : 'bg-neutral-700 rounded-lg'}`}
      >
        {imperial}
        {!checked && <img src={checkmark} alt=""></img>}
      </p>
    </div>
  );
}

export default UnitsMenuGroup;
