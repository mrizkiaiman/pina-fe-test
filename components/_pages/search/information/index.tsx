import * as React from 'react'
import { StatistikSection, StatistikSectionProps } from '@app/components/_pages/search/information/statistik'
import { BeritaSection } from '@app/components/_pages/search/information/berita'
import { CorpActionSection } from '@app/components/_pages/search/information/corp-action'
import { LaporanKeuanganSection } from '@app/components/_pages/search/information/laporan-keuangan'
import { TentangPerusahaanSection } from '@app/components/_pages/search/information/tentang perusahaan'

export const InformationSection: React.FC<StatistikSectionProps> = ({ data }) => {
  const dataPerMenu = ['Statistik', 'Corp Action', 'Berita', 'Laporan Keuangan', 'Tentang Perusahaan']
  const [selectedMenu, setSelectedMenu] = React.useState('Statistik')

  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-2 items-start">
        {dataPerMenu.map((item, index) => (
          <button
            onClick={() => setSelectedMenu(item)}
            className={`${
              selectedMenu === item ? 'bg-yellow-650' : 'bg-gray-225'
            } font-bold flex items-center justify-center py-2 px-4 rounded-xl`}
            key={item}>
            <p>{item}</p>
          </button>
        ))}
      </div>
      {selectedMenu === 'Statistik' && <StatistikSection data={data} />}
      {selectedMenu === 'Corp Action' && <CorpActionSection />}
      {selectedMenu === 'Berita' && <BeritaSection />}
      {selectedMenu === 'Laporan Keuangan' && <LaporanKeuanganSection />}
      {selectedMenu === 'Tentang Perusahaan' && <TentangPerusahaanSection />}
    </div>
  )
}

export default InformationSection
