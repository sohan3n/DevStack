interface Technology {
  id: string;
  name: string;
  category: string;
  icon: string;
}

interface StackSidebarProps {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}

export default function StackSidebar({
  stack,
  onRemove,
  onRemoveAll,
}: StackSidebarProps) {
  const count = stack.length;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sticky top-6">
      {/* stackBar Header */}
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
          <p className="text-xs text-gray-500 mt-0.5">
            {count === 0
              ? "No technologies selected yet."
              : `${count} Technology${count === 1 ? "" : "ies"} Selected`}
          </p>
        </div>
        {count > 0 && (
          <span className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center text-xs font-bold">
            {count}
          </span>
        )}
      </div>

      {/* Empty State and Selected List */}
      {count === 0 ? (
        <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center my-4">
          <p className="text-sm text-gray-400 font-medium">
            Your stack is empty.
          </p>
          <p className="text-xs text-gray-300 mt-1">
            Pick technologies from the grid to build your stack.
          </p>
        </div>
      ) : (
        <div className="space-y-3 mb-6">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-white p-1.5 border border-gray-100 shrink-0 flex items-center justify-center">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-semibold text-gray-900 truncate">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500 truncate">
                    {item.category}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onRemove(item.id)}
                aria-label={`Remove ${item.name}`}
                className="w-7 h-7 rounded-lg text-gray-400 hover:text-red-500 hover:bg-red-50 flex items-center justify-center transition-colors text-xs font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All Button */}
      {count > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full py-2.5 rounded-xl border border-red-200 text-red-600 hover:bg-red-50 text-sm font-medium transition-colors cursor-pointer"
        >
          Remove All
        </button>
      )}
    </div>
  );
}
