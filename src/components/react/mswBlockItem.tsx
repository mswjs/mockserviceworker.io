import mswLogo from '../../images/msw.svg'

export function MswBlockItem(): JSX.Element {
  return (
    <div className="inline-block border-2 border-neutral-800 bg-neutral-900 rounded-xl p-5 w-24 shadow-xl">
      <img src={mswLogo.src} className="flex select-none" />
    </div>
  )
}
