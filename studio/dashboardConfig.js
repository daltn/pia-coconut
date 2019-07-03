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
                  buildHookId: '5d1c02b19625f70f44cc1420',
                  title: 'Sanity Studio',
                  name: 'pia-coconut-studio',
                  apiId: '71fe5496-fa8d-44d6-8f74-f4ad5e5935ea'
                },
                {
                  buildHookId: '5d1c02b10fd48d275562ea56',
                  title: 'Portfolio Website',
                  name: 'pia-coconut',
                  apiId: 'b9c27b89-64da-4696-a2b3-b845dc226bf8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/daltn/pia-coconut',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://pia-coconut.netlify.com',
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
