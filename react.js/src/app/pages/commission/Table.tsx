import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BackendURL } from '../../config'

type Props = {
  className: string
}

const Table: React.FC<Props> = ({className}) => {
  const [commissions, setCommissions] = useState([])
  
  useEffect(() => {
    const getCommissions = async () => {
      const response = await axios.get<any>(`${BackendURL}/users`)
      setCommissions(response.data)
    }

    getCommissions()
  }, [])

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Calculated Commissions</span>
          <span className='text-muted mt-1 fw-bold fs-7'>{commissions.length} members</span>
        </h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted bg-light'>
                <th className='ps-4 min-w-200px rounded-start'>User Name</th>
                <th className='min-w-125px'>Commission</th>
                <th className='min-w-150px'>LPV</th>
                <th className='min-w-150px'>RPV</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {commissions.map((commission, i) => (
                <tr key={i}>
                  <td className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    {commission['user_name']}
                  </td>
                  <td className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    {commission['commission']}
                  </td>
                  <td className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    {commission['LPV']}
                  </td>
                  <td className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    {commission['RPV']}
                  </td>
                </tr>
                // <span key={i}>{b} </span>
              ))}
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export {Table}
