interface Props {
  children: React.ReactNode;
}

export default function Badge({ children }: Props) {
  return (
    <div className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">

      <span className="text-sm font-medium text-cyan-300">
        {children}
      </span>

    </div>
  );
}