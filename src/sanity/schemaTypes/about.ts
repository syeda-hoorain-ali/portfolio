import { defineField, defineType } from "sanity";
import { ContactRoundIcon } from "lucide-react";

export const about = defineType({
    name: "about",
    title: "About",
    type: "document",
    icon: ContactRoundIcon,

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
