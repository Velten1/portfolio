import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'content/projects')

export interface ProjectMetadata {
  title: string
  description: string
  image: string
  tags: string[]
  date: string
  github?: string
  githubFrontend?: string
  githubBackend?: string
  demo?: string
  video?: string
}

export interface Project {
  slug: string
  metadata: ProjectMetadata
  content: string
}

export function getAllProjects(): Project[] {
  const fileNames = fs.readdirSync(projectsDirectory)
  const allProjectsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(projectsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      return {
        slug,
        metadata: data as ProjectMetadata,
        content,
      }
    })

  return allProjectsData.sort((a, b) => {
    if (a.metadata.date < b.metadata.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getProjectBySlug(slug: string): Project | null {
  try {
    const fullPath = path.join(projectsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug,
      metadata: data as ProjectMetadata,
      content,
    }
  } catch (error) {
    return null
  }
}

