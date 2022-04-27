/* eslint-disable */
// @ts-nocheck
import { useState } from 'react'

export const UploadTest = () => {
  const [image, setImage] = useState()
  const [loading, setLoading] = useState(false)

  // const fileChangeHandler = (event: any) => {}

  const fileUploadHandler = async (e) => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    // data.append('upload_preset', 'swift')
    setLoading(true)
    const res = await fetch(
      'https://api.imgbb.com/1/upload?key=9a6872ef998ba332b96a74033020be3e',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()
    setImage(file.secure_url)
    setLoading(false)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        margin: '38% auto',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '20px'
      }}
    >
      <h1>Upload File</h1>
      <input
        type="file"
        onChange={fileUploadHandler}
        style={{ textAlignLast: 'center' }}
      ></input>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <img src={image} style={{ width: '300px' }} />
      )}
    </div>
  )
}
