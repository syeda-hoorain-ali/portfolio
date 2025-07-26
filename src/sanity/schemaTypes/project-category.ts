import { FolderGit2Icon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const projectsCategory = defineType({
    name: "project-category",
    title: "Project Category",
    type: "document",
    icon: FolderGit2Icon,
    
    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule) => rule.required().min(5).max(50),
        })
    ]
})


