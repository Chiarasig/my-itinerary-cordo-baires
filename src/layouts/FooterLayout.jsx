import React from 'react'
import FooterNetworks from '../components/Home2/FooterNetworks'
import FooterPages from '../components/Home2/FooterPages'
import FooterMaps from '../components/Home2/FooterMaps'
import '../index.css'

export default function footer() {
  return (
    <div className='footerLayout'>
        <FooterNetworks></FooterNetworks>
        <FooterPages></FooterPages>
        <FooterMaps></FooterMaps>
    </div>
  )
}
