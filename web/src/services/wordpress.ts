export type WordPressPost = {
  id: number;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
};

// TODO: change this to your real WordPress site URL
const WORDPRESS_BASE_URL = 'https://your-wordpress-site.com';

export async function fetchRecentPosts(limit = 5): Promise<WordPressPost[]> {
  const url = `${WORDPRESS_BASE_URL}/wp-json/wp/v2/posts?per_page=${limit}&_embed`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch WordPress posts: ${res.status}`);
  }

  return res.json();
}

