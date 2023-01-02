import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import { Table } from './Table'

const CommissionPage: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Commission</PageTitle>
      <Table className='mb-5 mb-xl-8' />
    </>
  )
}

export default CommissionPage
