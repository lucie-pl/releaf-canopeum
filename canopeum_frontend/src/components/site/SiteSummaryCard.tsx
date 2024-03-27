import headerLogo from '@assets/images/map/MARR4059.png'
import ToggleSwitch from '@components/inputs/ToggleSwitch'
import PrimaryIconBadge from '@components/PrimaryIconBadge'
import type { SiteSocial } from '@services/api'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  readonly viewMode: 'admin' | 'user' | 'visitor',
  readonly site: SiteSocial,
}

const onFollowClick = () => {
  // TODO implement follow here when backend is available
}

const updateSiteIsPublic = async (_: boolean) => {
  // TODO Implement site update when backend is ready
}
const SiteSummaryCard = ({ site, viewMode }: Props) => {
  const { t } = useTranslation()
  const [isPublic, setIsPublic] = useState(true)

  useEffect(() => void updateSiteIsPublic(isPublic), [isPublic])

  return (
    <div className='card mb-3'>
      <div className='row g-0'>
        <div className='col-md-4'>
          {/* TODO: replace img source when backend offers an image endpoint */}
          <img alt='header logo' className='img-fluid' src={headerLogo} />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <div className='d-flex flex-row justify-content-between'>
              <h1 className='fw-bold card-title'>{site.name}</h1>
              {viewMode === 'user' && (
                <button className='btn btn-secondary' onClick={onFollowClick} type='button'>
                  {t('mapSite.siteSummaryCard.follow')}
                </button>
              )}
              {viewMode === 'admin' && (
                <ToggleSwitch
                  additionalClassNames='fs-4'
                  checked={isPublic}
                  onChange={setIsPublic}
                  text={t('mapSite.siteSummaryCard.public')}
                />
              )}
            </div>
            <div className='card-text d-flex flex-row gap-1'>
              <PrimaryIconBadge type='school' />
              <h4 className='fw-bold text-primary'>{site.type.en}</h4>
            </div>
            <p className='card-text'>{site.description ?? ''}</p>
            <div className='container fw-bold'>
              <div className='mb-2'>
                <span className='material-symbols-outlined align-middle'>person</span>
                <span>{t('mapSite.siteSummaryCard.sponsors')}:</span>
              </div>
              <div className='row'>
                {site.sponsors.map(sponsorName => (
                  <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3' key={sponsorName}>{sponsorName}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SiteSummaryCard
