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
	
	routes.put('/jobs/:id', (req, res)=>{
		collectionJobs.forEach(job =>{
			if(job.id == req.params.id){
				try{
					let job = await db.doc(req.params.id).update(req.body)
					
					if(job.exists)
					return res.send(`A vaga ${req.params.id} foi atualizada com sucesso`)
					else
					return res.status(404).send('Job not found')
				}catch(error){
					return res.status(500).send('Invalid parameters!')
				}
				
			}
		})
	})
	
	routes.delete('/jobs/:id', async (req, res)=>{
		try{
			let job = await db.doc(req.params.id).delete()

			if(job)
				return res.send(`A vaga ${req.params.id} foi removida com sucesso`)
			else
				return res.status(404).send('Job not found')
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
	
    routes.post('/jobs', (req, res)=>{
        try{
            let newJob= new jobModel.Job(
				req.body.id,
                req.body.name,
                req.body.salary,
                req.body.description,
                req.body.skills,
                req.body.area,
                req.body.differentials,
                req.body.isPcd,
                req.body.isActive
            )
            collectionJobs.push(newJob)
            res.send(newJob)
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