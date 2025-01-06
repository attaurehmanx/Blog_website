import { title } from "process";

export const Post = {
  name: "post",
  title: "Post",
  type: "document",

  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: { source: "title" }
      },
      {
        name: "publishedAt",
        title: "Published At",
        type: "datetime",
        initialValue: () => new Date().toISOString()
      },
      {
        name: "excerpt",
        title: "Message",
        type: "text",
      },
      {
        name: "body",
        title: "Body",
        type: "array",
        of: [{ type: "block"},
            { type: "image"},
        ]
      },
      {
        name: "tags",
        title: "Tags",
        type: "array",
        of: [{ type: "reference", to: [{type: "tag"}] }]
      },
  ],
};
