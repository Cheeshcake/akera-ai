// Created a helper function to derive URLs from file paths
export function getPostUrl(post) {
  const filePath = post.file;
  const fileName = filePath.split('/').pop().replace('.md', '');
  return `../${fileName}/`; 
}