// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  siteUrl: `https://www.itsnwa.com`,
  host: "0.0.0.0",
  titleTemplate: "%s - NWA",
  siteDescription: "Creative technologist",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-strapi",
      options: {
        apiURL: "http://49.234.12.142:1337",
        queryLimit: 1000,
        contentTypes: ['journals', 'projects'],
        //singleTypes: [],
        // loginData: {
        //   identifier: '',
        //   password: ''
        // }
      }
    }
  ],
  templates: {
    StrapiJournals: [
      {
        path: '/journal/:id',
        component: './src/templates/JournalPost.vue'
      }
    ],
    StrapiProjects: [
      {
        path: '/project/:id',
        component: './src/templates/ProjectPost.vue'
      }
    ]
  },
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
}
