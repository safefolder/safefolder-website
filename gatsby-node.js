/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const mdx = require('remark-mdx')
const path = require("path")

const pageTemplate = path.resolve(`./src/components/mdx_layouts/page.js`)


async function createMdxPages(graphql, actions, reporter) {
  // Destructure the createPage function from the actions object
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            path
            contentType
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  // Create blog post pages.
  const posts = result.data.allMdx.nodes
  // you'll call `createPage` for each result
  posts.forEach(( node ) => {
    const contentType = node.frontmatter.contentType
    const component = `./src/components/mdx_layouts/${contentType}.js`
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.frontmatter.path,
      // This component will wrap our MDX content
      // component: path.resolve(component),
      // component: node.internal.contentFilePath,
      component: `${pageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: { 
        id: node.id,
        slug: node.slug,
        title: node.title
      },
    })
  })
}

exports.createPages = async ({graphql, actions, reporter}) => {
  await createMdxPages(graphql, actions, reporter)
}
