import { HomeIcon } from "lucide-react";
import { defineField, defineType, ValidationError } from "sanity";


export const about = defineType({
    name: "about",
    title: "About",
    type: "document",
    icon: HomeIcon,
    // groups: [
    //     { name: "content", title: "Content" },
    //     { name: "socialMedia", title: "Social Media" },
    // ],

    fields: [
        defineField({
            name: "about_section",
            title: "About section",
            type: "text",
            validation: (rule) => rule.required().min(10)
        }),
        defineField({
            name: "about_page",
            title: "About page",
            type: "text",
            validation: (rule) => rule.required().min(10)
        }),
    ]
})
