import type React from "react"
interface SectionProps {
  title: string
  titleAlign?: "left" | "center" | "right"
  children: React.ReactNode
}

export default function Section({ title, titleAlign = "center", children }: SectionProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[titleAlign]

  return (
    <section className="mb-8">
      <h2 className={`text-xl font-semibold text-gray-800 mb-6 ${alignClass}`}>{title}</h2>
      {children}
    </section>
  )
}
