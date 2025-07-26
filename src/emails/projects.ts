import { BadgeCheckIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const projects = defineType({
    name: "projects",
    title: "Projects",
    type: "document",
    icon: BadgeCheckIcon,
    
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
            name: "image",
            title: "Image",
            type: "image",
            validation: (rule) => rule.required()
        }),
        
        defineField({
            name: "image",
            title: "Image",
            type: "image",
            validation: (rule) => rule.required()
        }),
    ]
})
