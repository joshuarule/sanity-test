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
                  buildHookId: '5e32fd9a5623e7e722ac9bf1',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-7p3x27pp',
                  apiId: 'f3aafaa8-b670-47f0-a349-b82dea373428'
                },
                {
                  buildHookId: '5e32fd9ab9c259b8723a3cee',
                  title: 'Portfolio Website',
                  name: 'sanity-test-web-bsw7zuzw',
                  apiId: '0767e3ff-a058-485c-98f3-39ba55e31749'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joshuarule/sanity-test',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-test-web-bsw7zuzw.netlify.com',
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
