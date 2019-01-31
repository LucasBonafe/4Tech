const jobModel= require('../../models/job')

let collectionJobs= []

module.exports = routes =>{

	routes.get('/jobs/:id', (req, res)=>{
		let job= collectionJobs.find(job => job.id == req.params.id)

		if(job)
			res.send(job)
		else
			res.status(404).send('Job not found')
	})

	routes.put('/jobs/:id', (req, res)=>{
		collectionJobs.forEach(job =>{
			if(job.id == req.params.id){
				try{
					job.id= req.body.id,
					job.name= req.body.name,
					job.salary= req.body.salary,
					job.description= req.body.description,
					job.skills= req.body.skills,
					job.area= req.body.area,
					job.differentials= req.body.differentials,
					job.isPcd= req.body.isPcd,
					job.isActive= req.body.isActive

					res.send(job)
				}catch(error){return res.status(500).send('Invalid parameters!')}
				
			}
		})
	})

    routes.get('/jobs', (req, res)=>{
        res.send(collectionJobs)
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

}