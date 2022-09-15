export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '63230fb8312c892b09e191e3',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-v42xcyu2',
                  apiId: '0b891932-3706-4487-bfae-642e48090ac8'
                },
                {
                  buildHookId: '63230fb81b35e22c72c78d03',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-v4kead37',
                  apiId: '20fd8cf6-37d7-4658-96d6-9cc75a69483e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nick-muckypuddle/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-v4kead37.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
