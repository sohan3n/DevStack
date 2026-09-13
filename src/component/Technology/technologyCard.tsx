export interface Technology {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
}

interface TechnologyCardProps {
  tech: Technology;
  isAdded: boolean;
  onAddToStack: (tech: Technology) => void;
}

export default function TechnologyCard({
  tech,
  isAdded,
  onAddToStack,
}: TechnologyCardProps) {
  return (
    <div className="card bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 p-6 flex flex-col justify-between rounded-2xl">
      <div>
        {/* Top Row: Icon and Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center p-2.5 border border-gray-100">
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-full h-full object-contain"
            />
          </div>
          <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-50 text-orange-600 border border-orange-100">
            {tech.badge}
          </span>
        </div>

        {/* Name of technology and Description */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
          {tech.description}
        </p>
      </div>

      <div>
        {/* Category chip, Difficulty and Rating */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-5 pt-4 border-t border-gray-100">
          <span className="px-2.5 py-1 bg-gray-100 rounded-lg font-medium text-gray-700">
            {tech.category}
          </span>
          <span className="font-medium text-gray-600">{tech.difficulty}</span>
          <span className="flex items-center gap-1 font-semibold text-gray-800">
            ⭐ {tech.rating}
          </span>
        </div>

        {/* Action Button */}
        <button
          onClick={() => onAddToStack(tech)}
          disabled={isAdded}
          className={`w-full py-3 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
            isAdded
              ? "bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200"
              : "bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 text-white shadow-sm hover:opacity-95 active:scale-[0.98]"
          }`}
        >
          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}
