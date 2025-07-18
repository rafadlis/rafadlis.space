import { cn } from "@/lib/utils"

interface LogoIconProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export function LogoIcon({ className, ...props }: LogoIconProps) {
  return (
    <svg
      viewBox="0 0 134 134"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-full", className)}
      {...props}
    >
      <path
        d="M 96,33 C 79.93,13.8 46.11,18.71 30.92,37.92 15.73,57.13 17.55,89.72 40,103 45.5,84.7 59.33,69.53 72,56 57.4,65.6 43.02,79.13 36,95 32.02,86.55 33.54,69.78 40.25,61.25 46.95,52.71 55.47,47.52 65.32,44.32 75.17,41.12 87.09,39.03 96,33 Z"
        fill="currentColor"
      />
      <path
        d="m 42,105 c 18.28,14.24 47,8.16 61.23,-9.77 C 117.46,77.3 116.33,47.28 97,34 91.08,50.49 93.51,69.3 84.92,84.92 76.33,100.53 59.36,105.98 42,105 Z"
        fill="currentColor"
      />
    </svg>
  )
}
