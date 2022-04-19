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
                  buildHookId: '625ef0f25dd1e84067066bb5',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-wh8cq4bp',
                  apiId: '3f5599ce-18b3-4194-8868-2f216686b9b9'
                },
                {
                  buildHookId: '625ef0f32c46df3f80615b0b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-op16ypw5',
                  apiId: '3617de4e-10f1-4d0c-9397-fb72174130db'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/taylorhackbart/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-op16ypw5.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
