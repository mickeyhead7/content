export const components = [
  {
    id: 1,
    title: 'Model',
    description: 'A linked model'
  },
  {
    id: 2,
    title: 'Short text input',
    description: 'Short text input'
  },
  {
    id: 3,
    title: 'Long text input',
    description: 'Long text input'
  },
  {
    id: 4,
    title: 'Number',
    description: 'Numeric input'
  }
];

export const models = [
  {
    id: 1,
    key: 'author',
    title: 'Author',
    description: 'Content authors',
    createdAt: {
      date: '2018-08-26 20:16:37',
      timezone: 'Europe/London'
    },
    components: [
      {
        component: 2,
        key: 'title',
        title: 'Title',
        description: 'Author\'s title',
        config: {
          dataType: 'String',
          required: true,
          maxLength: 256
        }
      },
      {
        component: 2,
        key: 'firstname',
        title: 'First name',
        description: 'Author\'s first name',
        config: {
          dataType: 'String',
          required: true,
          maxLength: 256
        }
      },
      {
        component: 2,
        key: 'lastname',
        title: 'Last name',
        description: 'Author\'s last name',
        config: {
          dataType: 'String',
          required: true,
          maxLength: 256
        }
      },
      {
        component: 2,
        key: 'slug',
        title: 'Slug',
        description: '',
        config: {
          dataType: 'String',
          required: true,
          maxLength: 256
        }
      }
    ]
  },
  {
    id: 2,
    key: 'blogPost',
    title: 'Blog post',
    description: 'Static blog post entries',
    createdAt: {
      date: '2018-08-26 20:16:37',
      timezone: 'Europe/London'
    },
    components: [
      {
        component: 2,
        key: 'title',
        title: 'Title',
        description: 'Blog post title',
        config: {
          dataType: 'String',
          required: true,
          maxLength: 256
        }
      },
      {
        component: 2,
        key: 'slug',
        title: 'Slug',
        description: '',
        config: {
          dataType: 'String',
          required: true,
          maxLength: 256
        }
      },
      {
        component: 1,
        key: 'author',
        title: 'Author',
        description: 'Blog post author',
        config: {
          dataType: 'Int',
          model: 1,
          required: true
        }
      },
      {
        component: 3,
        key: 'introduction',
        title: 'Introduction',
        description: 'Short introduction',
        config: {
          dataType: 'String',
          required: true,
          maxLength: null
        }
      },
      {
        component: 3,
        key: 'content',
        title: 'Content',
        description: 'Longform content',
        config: {
          dataType: 'String',
          required: true,
          maxLength: null
        }
      }
    ]
  }
];

export const entries = [
  {
    id: 1,
    model: 1,
    createdAt: {
      date: '2018-08-26 20:16:37',
      timezone: 'Europe/London'
    },
    title: 'Mr',
    firstname: 'Mark',
    lastname: 'Head',
    slug: 'mark-head'
  },
  {
    id: 2,
    model: 2,
    createdAt: {
      date: '2018-08-26 20:16:37',
      timezone: 'Europe/London'
    },
    title: 'My first blog post',
    slug: 'my-first-post',
    introduction: 'This is the introduction to my first blog post...',
    content: 'This is the main body of my first blog post',
    author: 1
  }
];
