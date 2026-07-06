interface Props {
  href: string;
  icon: React.ReactNode;
}

export default function SocialButton({
  href,
  icon,
}: Props) {
  const isExternal =
    href.startsWith("http") || href.startsWith("mailto:");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-700 bg-slate-900/30 text-white transition hover:border-cyan-400 hover:text-cyan-400"
    >
      {icon}
    </a>
  );
}