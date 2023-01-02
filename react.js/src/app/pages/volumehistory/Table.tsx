import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { BackendURL } from '../../config'

type Props = {
  className: string
}

const Table: React.FC<Props> = ({className}) => {
  const [volHistorys, setVolumeHistory] = useState([])
  
  useEffect(() => {
    const getVolumeHistory = async () => {
      const response = await axios.get<any>(`${BackendURL}/Orders`)
      setVolumeHistory(response.data)
    }

    getVolumeHistory()
  }, [])

  return (
    <div className={`card ${className}`}>
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bolder fs-3 mb-1'>Binary Volume History</span>
          <span className='text-muted mt-1 fw-bold fs-7'>{volHistorys.length} Items were found </span>
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
                <th className='ps-4 min-w-300px rounded-start'>User Name</th>
                <th className='min-w-125px'>Volume</th>
                <th className='min-w-100px'>Position</th>
                <th className='min-w-100px'>Father</th>
                <th className='min-w-200px'>Data of Submission</th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              {volHistorys.map((volHistory, i) => (
                <tr key={i}>
                  <td className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    {volHistory['user_name']}
                  </td>
                  <td className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    {volHistory['volume']}
                  </td>
                  <td className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    {volHistory['position']}
                  </td>
                  <td className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    {volHistory['father']}
                  </td>
                  <td className='text-dark fw-bolder text-hover-primary mb-1 fs-6'>
                    {volHistory['date_of_submission']}
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
