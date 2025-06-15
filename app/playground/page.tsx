import { RDotIcon } from "@/components/r-dot-icon"
import RDotIconLoading from "@/components/r-dot-icon-loading"
import { LoadingPage } from "@/components/loading-page"

export default function Playground() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <RDotIcon className="size-10" />
      <RDotIconLoading className="size-10" />
    </div>
  )
}
