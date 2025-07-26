import { FolderGit2Icon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const projects = defineType({
    name: "projects",
    title: "Projects",
    type: "document",
    icon: FolderGit2Icon,

    fields: [
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            validation: (rule) => rule.required().min(5).max(50),
        }),

        defineField({
            name: "description",
            title: "Description",
            type: "text",
            validation: (rule) => rule.required().min(20).max(255),
        }),

        defineField({
            name: "category",
            title: "Category",
            type: "reference",
            to: [{ type: "project-category" }],
            validation: (rule) => rule.required()
        }),

        defineField({
            name: "live_url",
            title: "Live URL",
            type: "url",
            validation: (rule) => rule.required()
        }),

        defineField({
            name: "github_url",
            title: "GitHub URL",
            type: "url",
            validation: (rule) => rule.required()
        }),

        defineField({
            name: "labels",
            title: "Labels",
            type: "array",
            of: [{ type: "string" }],
            options: { layout: "tags" },
            validation: (rule) => rule.required().min(1)
        }),

        defineField({
            name: "image",
            title: "Image",
            type: "image",
            validation: (rule) => rule.required()
        })
    ]
})


