export default function BusinessCard() {
  return (
    <article className="flex flex-row flex-wrap gap-6 h-screen w-full items-center justify-center *:rounded-md *:print:rounded-none px-6 py-12">
      <div className="bg-foreground flex h-[51mm] w-[89mm] flex-col items-center justify-center shadow-2xl">
        <h1 className="text-5xl font-medium text-background">r.</h1>
      </div>
      <div className="h-[51mm] w-[89mm] shadow-2xl py-4 px-6 grid grid-cols-2 grid-rows-2">
        <div>
          <h1 className="text-xs">
            me@rafadlis.space / https://rafadlis.space
          </h1>
        </div>
        <div className="flex flex-col items-end justify-start">
          <h1 className="text-xs">+62 8 998 001 772</h1>
        </div>
        <div className="col-span-2 flex flex-col items-start justify-end">
          <h1 className="text-xs">Software Engineer</h1>
          <p className="text-2xl font-black">R. R. Fadli Sadikin</p>
        </div>
      </div>
    </article>
  )
}
