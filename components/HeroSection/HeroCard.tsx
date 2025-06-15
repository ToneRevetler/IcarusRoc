interface HeroCardProps {
  title: string;
  description: string;
}

export default function HeroCard({ title, description }: HeroCardProps) {
  return (
    <div className="border p-6 shadow-sm hover:shadow-md transition">
      <h3 className="md:text-2xl font-semibold text-icarus-dark-blue mb-2">{title}</h3>
      <p className="text-base text-gray-600">{description}</p>
    </div>
  );
}
