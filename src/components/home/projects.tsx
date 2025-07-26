"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import Card from "../Card"
import { useEffect, useState } from "react";
import { fetchProjects } from "@/lib/data";

// const projects: Record<string, CardProps[]> = {
//   "Web Development": [
//     {
//       title: "Text Editor",
//       github: "https://github.com/...",
//       live: "https://...",
//       labels: ["HTML", "CSS", "JavaScript"],
//       image: "/projects/text-editor.png",
//     },
//     {
//       title: "Password Manager",
//       github: "https://github.com/...",
//       live: "https://...",
//       labels: ["Next.js", "Tailwindcss"],
//       image: "/projects/password.png",
//     },
//   ],
//   "Python": [
//     {
//       title: "Voice AI Agent",
//       github: "https://github.com/...",
//       live: "https://...",
//       labels: ["OpenAI", "Gemini", "Chainlit"],
//       image: "/projects/voice-agent.png",
//     },
//   ],
//   "Agentic AI": [
//     {
//       title: "Voice AI Agent",
//       github: "https://github.com/...",
//       live: "https://...",
//       labels: ["OpenAI", "Gemini", "Chainlit"],
//       image: "/projects/voice-agent.png",
//     },
//   ],
// }

const ProjectSection = () => {

  const [projectsData, setProjectsData] = useState<Record<string, any[]>>({});

  useEffect(() => {
    const fetch = async () => {
      const data = await fetchProjects();
      setProjectsData(data);
      console.log(data)
    }

    fetch()
  }, []);


  return (
    <section className="px-4 sm:px-10 md:px-32 my-10 md:my-20">
      <h2 className="text-4xl text-center font-bold underline underline-offset-4 decoration-fuchsia-500 mb-8">
        My Projects
      </h2>
      <Tabs defaultValue="Web Development" className="w-full">
        <TabsList className="flex flex-wrap justify-center gap-2 mb-6">
          {Object.keys(projectsData).map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(projectsData).map(([category, cards]) => (
          <TabsContent
            key={category}
            value={category}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {cards.map((card, idx) => (
              <Card key={idx} {...card} />
            ))}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}

export default ProjectSection;
