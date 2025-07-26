import { CardProps } from "@/components/Card";
import { client } from "@/sanity/lib/client";

export async function fetchProjects() {
  const data = await client.fetch(`
    *[_type == "projects"]{
      "title": name,
      description,
      labels,
      "live": live_url,
      "github": github_url,
      "category": category->name,
      "image": image.asset->url
    }
  `);

  // Group projects by category
  const grouped: Record<string, CardProps[]> = {};
  data.forEach((proj: any) => {
    const category = proj.category;
    if (!grouped[category]) grouped[category] = [];

    grouped[category].push({
      title: proj.title,
      description: proj.description,
      live: proj.live,
      github: proj.github,
      labels: proj.labels,
      image: proj.image,
    });
  });

  return grouped

}