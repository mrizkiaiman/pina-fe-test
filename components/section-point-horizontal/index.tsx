import * as React from 'react'

export interface SectionPointHorizontalProps {
  label: string
  value: string | number
  onClickValue?: () => void
}

export const SectionPointHorizontal: React.FC<SectionPointHorizontalProps> = ({ label, value, onClickValue }) => {
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-sm text-gray-350">{label}</p>
      {onClickValue ? (
        <button onClick={onClickValue}>
          <p className="text-orange-350 font-bold">{value}</p>
        </button>
      ) : (
        <p className="font-bold">{value}</p>
      )}
    </div>
  )
}
