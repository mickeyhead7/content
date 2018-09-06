export const fetchEntries = () => {
  const body = {
    query: `
      {
        blogPostEntries {
          id
          model
          createdAt {
            date
            timezone
          }
          title
          slug
          introduction
          content
          author
        }
      }
    `
  };
  
  const response = fetch('http://localhost:4001', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  
  return response.then(result => result.json())
    .then(body => body.data.blogPostEntries);
};
