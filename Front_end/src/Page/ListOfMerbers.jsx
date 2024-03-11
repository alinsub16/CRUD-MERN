import axios from "axios"
import { useState, useEffect } from "react"
import React from 'react'
import { Link, useParams } from "react-router-dom"


const ListOfMerbers = () => {

  const [members, setmembers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/Member')
      .then(result => setmembers(result.data))
      .catch(err => console.log(err))
  }, [])

  const HandleDelete = async (id) => {

    try {
      await axios.delete(`http://localhost:3000/DeleteMember/${id}`);
      console.log('Post deleted:', id);
      window.location.reload();
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  return (
    <div className=' '>
      <div className='d-flex flex-column col-12 vh-100 bg-secondary rounded p-3 justify-content-center align-items-center'>
        <h1 className="text-light mb-4">List of Members</h1>
        <Link to='/create' className="btn btn-success mb-3">Add Member</Link>
        <table class="table ">
          <thead>
            <tr>

              <th scope="col">Full Name</th>
              <th scope="col">Age</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              members.map((member) => {
                return (
                  <tr >

                    <td>{member.Fname}</td>
                    <td>{member.Age}</td>
                    <td>{member.Address}</td>
                    <td>{member.Email}</td>
                    <td><Link to={`/update/${member._id}`} className="btn btn-primary ">Update</Link>
                      <button className="btn btn-danger ms-2" onClick={(e) => HandleDelete(member._id)}>Delete</button>
                    </td>

                  </tr>)
              })
            }

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListOfMerbers