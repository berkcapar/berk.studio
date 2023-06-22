import matter from "gray-matter";

export function getLatestBlogPost() {
  const blogDirectory = require.context("../content/blog", false, /\.md$/);
  const blogFiles = blogDirectory.keys();

  const sortedFiles = blogFiles.sort((a, b) => {
    const fileA = blogDirectory(a);
    const fileB = blogDirectory(b);
    const { data: dataA } = matter(fileA.default);
    const { data: dataB } = matter(fileB.default);
    const dateA = new Date(dataA.date);
    const dateB = new Date(dataB.date);
    return dateB - dateA;
  });

  const latestPostPath = sortedFiles[0];
  const latestPostContent = blogDirectory(latestPostPath);
  const { data } = matter(latestPostContent.default);

  // Extract the slug from the file path
  const slug = latestPostPath.replace(/^.*[\\\/]/, "").replace(/\.[^/.]+$/, "");

  const latestPost = {
    title: data.title,
    description: data.description,
    url: `/blog/${slug}`,
  };

  return latestPost;
}