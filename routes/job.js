const router = require('express').Router();
const authentication = require('../middleware/authenticate');

const { getJobs, uploadNewJob } = require('../controllers/jobs');

router.route('/').get(getJobs).post(authentication, uploadNewJob);

module.exports = router;
