/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {AsideMenuItemWithSub} from './AsideMenuItemWithSub'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()

  return (
    <>
      <AsideMenuItem
        to='/commission'
        icon='/media/icons/duotune/art/art002.svg'
        title='Commission'
        fontIcon='bi-app-indicator'
      />
      <AsideMenuItem
        to='/volumehistory'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Binary Volume history'
        fontIcon='bi-layers'
      />
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to='/crafted/accounts'
        title='Accounts'
        icon='/media/icons/duotune/communication/com006.svg'
        fontIcon='bi-person'
      >
        <AsideMenuItem to='' title='Overview' hasBullet={true} />
        <AsideMenuItem to='' title='Settings' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/error'
        title='Errors'
        fontIcon='bi-sticky'
        icon='/media/icons/duotune/general/gen040.svg'
      >
        <AsideMenuItem to='' title='Error 404' hasBullet={true} />
        <AsideMenuItem to='' title='Error 500' hasBullet={true} />
      </AsideMenuItemWithSub>
      <AsideMenuItemWithSub
        to='/crafted/widgets'
        title='Widgets'
        icon='/media/icons/duotune/general/gen025.svg'
        fontIcon='bi-layers'
      >
        <AsideMenuItem to='' title='Lists' hasBullet={true} />
        <AsideMenuItem to='' title='Statistics' hasBullet={true} />
        <AsideMenuItem to='' title='Charts' hasBullet={true} />
        <AsideMenuItem to='' title='Mixed' hasBullet={true} />
        <AsideMenuItem to='' title='Tables' hasBullet={true} />
        <AsideMenuItem to='' title='Feeds' hasBullet={true} />
      </AsideMenuItemWithSub>
      <div className='menu-item'>
        <div className='menu-content pt-8 pb-2'>
          <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Apps</span>
        </div>
      </div>
      <AsideMenuItemWithSub
        to=''
        title='Chat'
        fontIcon='bi-chat-left'
        icon='/media/icons/duotune/communication/com012.svg'
      >
        <AsideMenuItem to='' title='Private Chat' hasBullet={true} />
        <AsideMenuItem to='' title='Group Chart' hasBullet={true} />
        <AsideMenuItem to='' title='Drawer Chart' hasBullet={true} />
      </AsideMenuItemWithSub>
    </>
  )
}
