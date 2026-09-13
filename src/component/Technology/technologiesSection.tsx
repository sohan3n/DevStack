import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import TechnologyCard from "./technologyCard";
import type { Technology } from "./technologyCard";
import StackSidebar from "./stackSidebar";

export default function TechnologiesSection() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedStack, setSelectedStack] = useState<Technology[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load technologies");
        return res.json();
      })
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to load technology data");
        setLoading(false);
      });
  }, []);

  const handleAddToStack = (tech: Technology) => {
    const exists = selectedStack.some((item) => item.id === tech.id);
    if (exists) {
      toast.warn(`${tech.name} is already in your stack!`);
      return;
    }
    setSelectedStack((prev) => [...prev, tech]);
    toast.success(`Added ${tech.name} to stack!`);
  };

  const handleRemoveFromStack = (id: string) => {
    const target = selectedStack.find((item) => item.id === id);
    setSelectedStack((prev) => prev.filter((item) => item.id !== id));
    if (target) {
      toast.info(`Removed ${target.name} from stack`);
    }
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
    toast.info("Cleared entire stack");
  };

  return (
    <section className="py-16 bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Technology-Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Explore the{" "}
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <span className="loading loading-spinner loading-lg text-orange-500"></span>
            <p className="text-sm text-gray-500 font-medium">
              Loading technologies...
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
            {/* 3-Column Technology Grid */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech) => {
                const isAdded = selectedStack.some(
                  (item) => item.id === tech.id,
                );
                return (
                  <TechnologyCard
                    key={tech.id}
                    tech={tech}
                    isAdded={isAdded}
                    onAddToStack={handleAddToStack}
                  />
                );
              })}
            </div>

            {/* Stack-Sidebar Panel */}
            <div className="lg:col-span-1">
              <StackSidebar
                stack={selectedStack}
                onRemove={handleRemoveFromStack}
                onRemoveAll={handleRemoveAll}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
