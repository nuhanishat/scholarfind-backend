import { getAllResearchers, postNewResearcher, updateResearcher } from '../controllers/controllers';

const Researcher = require('../models/Researcher');

export const routes = (app) => {
    // GET: get all researchers 
    app.route('/api/researchers')
        .get(getAllResearchers) 
        
    // POST: add new researchers
    app.route('/api/researchers/add')
        .post(postNewResearcher);
    
    // PUT: update existing researcher info
    app.route('/api/researchers/update')
        .put(updateResearcher);
    
}