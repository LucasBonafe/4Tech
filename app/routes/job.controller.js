const jobModel= require('../../models/job')

let collectionJobs= []

module.exports = routes =>{

	routes.get('/jobs/:id', async (req, res)=>{
		try{
			let job= db.doc(req.params.id).get()
		}catch(error){
			return res.status(500).send(error)
		}
	})
	
	routes.put('/jobs/:id', async (req, res)=>{
		try{
			let job = await db.doc(req.params.id).update(req.body)
			if(job.exists)
				return res.send(`A vaga ${req.params.id} foi atualizada com sucesso`)
			else
				return res.status(404).send('Job not found')
		}catch(error){
			return res.status(500).send(error)
		}
	})
	
	routes.delete('/jobs/:id', async (req, res)=>{
		try{
			let job= await db.doc(req.params.id).delete()
			return res.send(job)
		}catch(error){
			return res.status(500).send(error)
		}
	})

    routes.get('/jobs', async (req, res)=>{
		try{
			let docs= await db.get()
			let jobs= []
			
			docs.forEach(doc =>{
				jobs.push(extractJob(doc))
			})
			
			return res.send(jobs)
		}catch (error){
			return res.status(500).send(error)
		}
    })

	routes.post('/jobs', [check('name').isLength({min: 5})], async (req, res)=>{
		try{
			await db.doc().set(req.body)
			return res.send('Job added successfully')
		}catch(error){res.status(500).send(error)}
	})

	extractJob = job => {
		let v = job.data()
		return {
			id: job.id,
			name: v.name,
			salary: v.salary,
			description: v.description,
			skills: v.skills,
			differentials: v.differentials,
			isPcd: v.isPcd,
			isActive: v.isActive
		}
	}

}