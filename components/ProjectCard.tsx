import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tags: string[]
  slug: string
}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  slug,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group block h-full">
      <article className="project-card h-full overflow-hidden rounded-[1.4rem]">
        <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>

        <div className="p-6 md:p-7">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {title}
            </h3>
            <span className="card-arrow"><ArrowUpRight className="w-4 h-4" /></span>
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
              className="tech-pill"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  )
}
