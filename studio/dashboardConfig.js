export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5da38d01850f2b8cbbd8f3ce',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-r6pobcb6',
                  apiId: 'e923aaef-a4ff-421d-b84b-92e3c1016998'
                },
                {
                  buildHookId: '5da38d0101ef5c33ada775b1',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-14wkaoej',
                  apiId: '7c392bc8-64eb-4a3d-94c3-8d25437e1495'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/elliota43/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-14wkaoej.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
