// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
module.exports = {
  gettingStartedSidebar: [
    {
      type: "autogenerated",
      dirName: "getting-started",
    },
  ],
  guidesSidebar: [
    {
      type: "autogenerated",
      dirName: "guides",
    },
  ],
  referenceSidebar: [
    "reference/index",
    {
      type: "category",
      label: "@auth/core",
      link: { type: "doc", id: "reference/core/index" },
      items: [{ type: "autogenerated", dirName: "reference/core" }],
    },
    {
      type: "category",
      label: "@auth/sveltekit",
      link: { type: "doc", id: "reference/sveltekit/index" },
      items: [{ type: "autogenerated", dirName: "reference/sveltekit" }],
    },
    {
      type: "category",
      label: "@auth/solid-start",
      link: { type: "doc", id: "reference/solidstart/index" },
      items: [{ type: "autogenerated", dirName: "reference/solidstart" }],
    },
    {
      type: "category",
      label: "next-auth",
      link: { type: "doc", id: "reference/nextjs/index" },
      items: [{ type: "autogenerated", dirName: "reference/nextjs" }],
    },
    ...(process.env.TYPEDOC_SKIP_ADAPTERS
      ? []
      : [
          {
            type: "category",
            label: "Database Adapters",
            link: { type: "doc", id: "reference/adapters/index" },
            items: [
              { type: "doc", id: "reference/adapter/azure-tables/index" },
              { type: "doc", id: "reference/adapter/d1/index" },
              { type: "doc", id: "reference/adapter/edgedb/index" },
              { type: "doc", id: "reference/adapter/dgraph/index" },
              { type: "doc", id: "reference/adapter/drizzle/index" },
              { type: "doc", id: "reference/adapter/dynamodb/index" },
              { type: "doc", id: "reference/adapter/fauna/index" },
              { type: "doc", id: "reference/adapter/firebase/index" },
              { type: "doc", id: "reference/adapter/kysely/index" },
              { type: "doc", id: "reference/adapter/mikro-orm/index" },
              { type: "doc", id: "reference/adapter/mongodb/index" },
              { type: "doc", id: "reference/adapter/neo4j/index" },
              { type: "doc", id: "reference/adapter/pg/index" },
              { type: "doc", id: "reference/adapter/pouchdb/index" },
              { type: "doc", id: "reference/adapter/prisma/index" },
              { type: "doc", id: "reference/adapter/sequelize/index" },
              { type: "doc", id: "reference/adapter/supabase/index" },
              { type: "doc", id: "reference/adapter/surrealdb/index" },
              { type: "doc", id: "reference/adapter/typeorm/index" },
              { type: "doc", id: "reference/adapter/upstash-redis/index" },
              { type: "doc", id: "reference/adapter/xata/index" },
            ],
          },
        ]),
    "reference/warnings",
  ],
  conceptsSidebar: [
    {
      type: "autogenerated",
      dirName: "concepts",
    },
  ],
}
