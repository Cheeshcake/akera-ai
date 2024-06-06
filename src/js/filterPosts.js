document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.btn');
  const posts = document.querySelectorAll('.post');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.textContent;
      posts.forEach(post => {
        if (category === 'All' || post.dataset.category === category) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      });
    });
  });
});
