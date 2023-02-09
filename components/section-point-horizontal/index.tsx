import * as React from 'react'

export interface SectionPointHorizontalProps {
  label: string
  value: string | number
}

export const SectionPointHorizontal: React.FC<SectionPointHorizontalProps> = ({ label, value }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-sm text-gray-350">{label}</p>
      <p className="font-bold">{value}</p>
    </div>
  )
}
