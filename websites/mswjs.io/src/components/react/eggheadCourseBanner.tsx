import { LinkExternal } from '@mswjs/shared/components/react/linkExternal'
import courseCover from '../../images/egghead-msw-course.png'
import { EGGHEAD_COURSE_URL } from '../../consts'

export function EggheadCourseBanner({
  courseUrl,
  title,
  description,
}: {
  courseUrl: string
  title: React.ReactNode
  description: React.ReactNode
}) {
  return (
    <LinkExternal
      href={courseUrl}
      className="relative group my-10 px-5 py-5 min-h-[125px] grid grid-cols-[150px_1fr] gap-8 items-center bg-neutral-800 bg-opacity-40 border border-neutral-800 rounded-lg no-underline hover:bg-opacity-70"
    >
      <img
        src={courseCover.src}
        className="absolute m-0 top-0 left-3 w-[170px] transition-transform duration-500 -translate-y-[25px] group-hover:-translate-y-[35px]"
      />
      <div className="col-start-2">
        <h4 className="mt-0">{title}</h4>
        <p className="mb-0 text-neutral-400 leading-6">{description}</p>
      </div>
    </LinkExternal>
  )
}
