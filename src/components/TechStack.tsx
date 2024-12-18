interface TechStackProps {
    techStack: { id: string | number; techStack: string }[];
}

export default function TechStack({techStack}: TechStackProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-5">
      {techStack.map((stack) => (
        <button
          key={stack.id}
          className="font-inter border border-coral text-coral py-1 px-3 rounded-full"
        >
          {stack.techStack}
        </button>
      ))}
    </div>
  )
}