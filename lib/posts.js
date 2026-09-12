import fs from "fs";
import path from "path";
import matter from "gray-matter";

const DIR = path.join(process.cwd(), "content", "blog");

/** Every post, newest first. Front matter is the single source of truth. */
export function getPosts() {
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const { data } = matter(fs.readFileSync(path.join(DIR, file), "utf-8"));
      return {
        slug,
        title: data.title || slug,
        description: data.description || "",
        date: data.date || "",
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug) {
  const { data, content } = matter(
    fs.readFileSync(path.join(DIR, `${slug}.md`), "utf-8")
  );
  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date || "",
    body: content,
  };
}
