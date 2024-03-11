const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const Member = require('./Members/Members')
const port = 3000 
 
app.use(express.json())
app.use(cors())


app.get('/Member', async(req, res) => {
    try {
        const members = await Member.find(req.body);
        res.status(200).json(members)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})        
    }

  })
  app.get('/getMember/:id',(req,res)=>{
    const id = req.params.id;
    Member.findById({_id:id})
    .then(members => res.json(members))
    .catch(err => res.json(err))
  })
  
  app.put('/updateMember/:id', async (req, res) => {
    try {
      const postId = req.params.id;
      const fname = req.body.Fname;
      const age = req.body.Age;
      const address = req.body.Address;
      const email = req.body.Email;
  
      // Find the post by ID and update its content
      const updatedPost = await Member.findByIdAndUpdate(postId, { Fname: fname , Age:age ,Address:address,Email:email }, { new: true });
  
      if (!updatedPost) {
        return res.status(404).json({ error: 'Post not found' });
      }
  
      return res.json(updatedPost);
    } catch (error) {
      console.error('Error updating post:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });
  
// Define a route to handle DELETE requests for deleting a post
app.delete('/DeleteMember/:id', async (req, res) => {
  const postId = req.params.id;
  try {
    // Find the post by ID and delete it
    const deletedPost = await Member.findByIdAndDelete(postId);

    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    return res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});

  app.post('/Member', async(req, res) => {
    try {
        const product = await Member.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: error.message})        
    }

  })

 

mongoose.connect('mongodb+srv://admin:12345678Admin@devapi.fgcjlns.mongodb.net/Crud?retryWrites=true&w=majority&appName=DevApi')
        .then(()=> {
            console.log('connected to database')  
            app.listen(3000, () => {
                console.log(`Example app listening on port ${port}`)
              })
        }).catch((error) =>{
            console.log(error)
        })