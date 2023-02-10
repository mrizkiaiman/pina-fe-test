import * as React from 'react'

import { SectionPointHorizontal } from '@components/section-point-horizontal'
import { SectionPointHorizontalProps } from '@components/section-point-horizontal'

export interface SubSectionProps {
  title: string
  data: Array<SectionPointHorizontalProps>
  className?: string
}

export const SubSection: React.FC<SubSectionProps> = ({ data, title, className }) => {
  return (
    <div className={className}>
      <p className="font-bold text-lg">{title}</p>
      <div className="flex flex-col gap-4 mt-4">
        {data.map((item, index) => (
          <SectionPointHorizontal key={item.label} label={item.label} value={item.value} />
        ))}
      </div>
    </div>
  )
}

export default SubSection
