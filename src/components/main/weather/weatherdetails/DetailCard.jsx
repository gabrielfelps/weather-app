function DetailCard({ title, metrics, isLoading }) {
  return (
    <div className="flex flex-col p-5 items-start gap-6 bg-neutral-800 border border-neutral-600 rounded-xl">
      <p className="text-neutral-200 text-center text-lg font-medium leading-[120%]">
        {title}
      </p>
      {isLoading ? (
        <p className="text-[2rem] font-light leading-[120%]">–</p>
      ) : (
        <p className="text-[2rem] font-light leading-[120%]">{metrics}</p>
      )}
    </div>
  );
}

export default DetailCard;
