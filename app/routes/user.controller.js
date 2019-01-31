const userModel= require('../../models/user')

let collectionUsers= []

module.exports = routes =>{

    routes.get('/users/:id', (req, res)=>{
        let user= collectionUsers.find(user => user.id == req.params.id)

		if(user)
			res.send(user)
		else
			res.status(404).send('User not found')
	})
	
	routes.put('/users/:id', (req, res)=>{
		collectionUsers.forEach(user =>{
			if(user.id == req.params.id){
				try{
					user.name= req.body.name,
					user.email= req.body.email,
					user.password= req.body.password

					res.send(user)
				}catch(error){return res.status(500).send('Invalid parameters!')}
			}
		})
	})

	routes.delete('/users/:id', (req, res)=>{

		let userExist= false

		collectionUsers.forEach((user, index)=>{
			if(user.id == req.params.id){
				userExist= true
				collectionUsers.splice(index,1)

				res.send('Deleted')
			}
		})

		if(!userExist)
			res.status(404).send('User not found')
	})

    routes.get('/users', (req, res)=>{
        res.send(collectionUsers)
    })

    routes.post('/users', (req, res)=>{
        try{
            let newUser= new userModel.User(
                req.body.id,
                req.body.name,
                req.body.email,
                req.body.password
            )
            collectionUsers.push(newUser)
            res.send(newUser)
        }catch(error){res.status(500).send(error)}
    })
    
}