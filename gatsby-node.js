const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResult = await graphql(`
    query {
      flexipage: allContentfulFlexiblePage {
        nodes {
          slug
        }
      }
      blogpost: allContentfulBlogPost {
        nodes {
          slug
        }
      }
    }
  `);
  const flexipage_nodes = queryResult.data.flexipage.nodes.map((node) => {return {template:'flexible-page', ...node}; });
  const blogpost_nodes = queryResult.data.blogpost.nodes.map((node) => {return {template:'post', ...node}; });
  const the_nodes = [...flexipage_nodes, ...blogpost_nodes];
  if (!!the_nodes) {
    the_nodes.map(({ slug, template }) => {
	  let the_path = `/`;
	  if (template === 'post') {
		  the_path = the_path + `blog/${slug}`;
	  } else if (slug !== 'index') {
		the_path = the_path + slug;
	  }
      createPage({
        path: the_path,
        component: path.resolve(`./src/templates/${template}.jsx`),
        context: { slug },
      });
    });
  };
};