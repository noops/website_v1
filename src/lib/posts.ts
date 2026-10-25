export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "first-post",
    title: "My First Blog Post",
    date: "Feb 14, 2026",
    excerpt:
      "This is the content of my very first blog post. I'm excited to share my thoughts and projects here.",
    body: [
      "This is the content of my very first blog post. I'm excited to share my thoughts and projects here.",
      "Stay tuned for more updates!",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}
