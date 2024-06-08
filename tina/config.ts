import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch: "main",

  // Get this from tina.io
  clientId: "4bbac9dc-6a25-4ed0-84de-7af1cb0582a0",
  // Get this from tina.io
  token: "e604515cda58cfcd1b9116485772b28d2978bc0e",

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "post",
        label: "Posts",
        path: "src/pages/posts/",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "author",
            label: "Author",
            required: true,
          },
          {
            type: "image",
            name: "authorImage",
            label: "Author Image",
            required: true,
          },
          {
            type: "image",
            name: "image",
            label: "Blog Image",
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "string",
            name: "category",
            label: "Category",
            options: ["Technology", "Politics", "Health", "Environment", "Sports"],
            required: true,
          },
          {
            type: "string",
            name: "readingTime",
            label: "Reading Time (in minutes)",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
            ui: {
              component: "textarea",
            },
          },
          {
            type: "rich-text",
            name: "body",
            label: "Content",
            isBody: true,
            required: true,
          },
          {
            type: "string",
            name: "layout",
            label: "Layout",
            required: true,
            ui: {
              component: "hidden", 
            },
          },
        ],
        defaultItem: () => ({
          layout: "../../layouts/BlogLayout.astro",
        }),
      },
    ],
  },
});
