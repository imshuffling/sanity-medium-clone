export default {
  name: "comment",
  title: "Comment",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
    },
    {
      name: "approved",
      title: "Approved",
      type: "boolean",
      description: "Comments won't show on the site without approval",
    },
    {
      name: "email",
      type: "string",
    },
    {
      name: "post",
      type: "reference",
      to: { type: "post" },
    },
    {
      name: "comment",
      type: "text",
    },
  ],
};
