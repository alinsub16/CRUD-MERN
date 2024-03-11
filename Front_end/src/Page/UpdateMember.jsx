import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams , Link } from 'react-router-dom'
import axios from 'axios'

const UpdateMember = () => {
  const { id } = useParams()
  const [fname, setfname] = useState()
  const [age, setage] = useState()
  const [address, setaddress] = useState()
  const [email, setemail] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get('http://localhost:3000/getMember/' + id)
      .then(result => {
        console.log(result)
        setfname(result.data.Fname)
        setage(result.data.Age)
        setaddress(result.data.Address)
        setemail(result.data.Email)
      })

      .catch(err => console.log(err))
  }, [])

  // const Update = (e) => {
  //   e.preventDefault();
  //   axios.post(`http://localhost:3000/updateMember/${id}`, { Fname: fname, Age: age, Address: address, Email: email })
  //     .then(result => console.log(result))

  //   navigate('/')
  //     .catch((err) => console.log(err))
  // }
  const Update = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3000/updateMember/${id}`, {
        Fname: fname, Age: age, Address: address, Email: email
      });
      console.log('Post updated:', response.data);
      navigate('/')
      
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };
  return (
    <div className='d-flex vh-100 bg-secondary justify-content-center align-items-center '>
      <div className='col-6'>
        <form onSubmit={Update}>
          <div>
            <label htmlFor="">Fullname</label>
            <input type="text" className='form-control' value={fname} onChange={(e) => setfname(e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Age</label>
            <input type="number" className='form-control' value={age} onChange={(e) => setage(e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Address</label>
            <input type="text" className='form-control' value={address} onChange={(e) => setaddress(e.target.value)} />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" className='form-control' value={email} onChange={(e) => setemail(e.target.value)} />
          </div>
          <button className='btn btn-success mt-3'>UPDATE</button>
          <Link to='/' className='btn btn-primary  mt-3 ms-2'>Back</Link>
        </form>
      </div>

    </div>
  )
}

export default UpdateMember