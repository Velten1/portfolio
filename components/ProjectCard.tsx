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
    <Link href={`/projects/${slug}`} className="group">
      <div className="overflow-hidden rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1">
        <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-900">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-6">
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
              {title}
            </h3>
            <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>

          <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
            {description}
          </p>

          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  )
}

