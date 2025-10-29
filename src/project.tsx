import { useState } from "react";

export default function Projects() {
  const categories = [
    "All",
    "Architectural",
    "Interior Design",
    "Civil Engineering",
    "Urban Planning",
    "Landscape",
  ];

  const allProjects = [
    {
      title: "Bridge Construction",
      category: "Civil Engineering",
      img: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Modern Architecture",
      category: "Architectural",
      img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=1200&q=80",
    },

    {
      title: "Luxury Interior",
      category: "Interior Design",
      img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "City Masterplan",
      category: "Urban Planning",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    },

    {
      title: "Garden Landscape",
      category: "Landscape",
      img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Industrial Installation",
      category: "Civil Engineering",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h3 className="text-3xl font-bold text-[#0b3b4a] mb-6 text-center">
          Recent Projects
        </h3>

        {/* Scrollable Category Buttons */}
        <div className="flex gap-4 overflow-x-auto pb-4 mb-10 no-scrollbar justify-center sm:justify-start">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm whitespace-nowrap border transition-all duration-200 ${
                !(selectedCategory === cat)
                  ? "bg-gray-100 text-gray-400 font-bold border-gray-200"
                  : "bg-red-500 text-white border-red-600 hover:bg-red-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProjects.map((p) => (
            <div
              key={p.title}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div
                className="h-56 bg-cover bg-center"
                style={{ backgroundImage: `url('${p.img}')` }}
              ></div>
              <div className="absolute inset-0 bg-[#0b3b4a]/70 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <h4 className="text-white text-xl font-bold">{p.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No projects available in this category.
          </p>
        )}
      </div>
    </section>
  );
}
