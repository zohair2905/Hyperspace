const modules = import.meta.glob('./articles/*.mdx')

export function loadArticle(slug) {
  const key = `./articles/${slug}.mdx`
  if (!modules[key]) throw new Error(`No article for slug: ${slug}`)
  return modules[key]() // returns Promise<{ default: Component }>
}