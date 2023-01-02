import React, {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import { Table } from './Table'

const BuilderPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Binary Volume history</PageTitle>
      <Table className='mb-5 mb-xl-8' />
    </>
  )
}

export default BuilderPageWrapper
