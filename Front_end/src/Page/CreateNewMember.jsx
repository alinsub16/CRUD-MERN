import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate ,Link} from 'react-router-dom'


const CreateNewMember = () => {
  const [fname , setfname] = useState('');
  const [age , setage] = useState();
  const [address , setadress] = useState('');
  const [email , setemail] = useState();
  const navigate = useNavigate()

  const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/Member',{Fname:fname,Age:age,Address:address,Email:email})
        .then(result => console.log(result))
        navigate('/') 
        .catch((err) => console.log(err))
  }
  return (
    <div className='d-flex bg-secondary vh-100 justify-content-center align-items-center '>
      <div className='col-6' >
        <form onSubmit={Submit}>
          <h1 className='text-light' >Add Member</h1>
          <div>

            <label htmlFor="">Fullname</label>
            <input type="text" placeholder='Enter fullname' className='form-control' 
            onChange={(e) => setfname(e.target.value)} value={fname}/>
          </div>
          <div>
            <label htmlFor="">Age</label>
            <input type="number" placeholder='Enter age'  className='form-control ' 
              onChange={(e) => setage(e.target.value)} value={age}/>
          </div>
          <div>
            <label htmlFor="">Address</label>
            <input type="text" placeholder='Enter Address' className='form-control'
            onChange={(e) => setadress(e.target.value)} value={address}/>
          </div>
          <div>
            <label htmlFor="">Email</label>
            <input type="text" placeholder='Enter Email' className='form-control' 
            onChange={(e) => setemail(e.target.value)} value={email}/>
          </div>
          <button className='btn btn-success mt-3'>Submit</button>
          <Link to='/' className='btn btn-primary  mt-3 ms-2'>Back</Link>
        </form>
      </div>
    </div>
  )
}

export default CreateNewMember