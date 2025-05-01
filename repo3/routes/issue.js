const express = require('express');
const router = express.Router();
const { projectById } = require('../controllers/projectController');
const {
  listIssues,
  addIssue,
  removeIssue,
  updateIssue
} = require('../controllers/issueController');
const { requireSignin } = require('../controllers/projectController'); // Import requireSignin

// Nested issue routes under project with authentication
router.get('/project/:projectId/issues', requireSignin, listIssues);
router.post('/project/:projectId/issue', requireSignin, addIssue);
router.put('/project/:projectId/issue/:issueId', requireSignin, updateIssue);
router.delete('/project/:projectId/issue/:issueId', requireSignin, removeIssue);

// param middleware
router.param('projectId', projectById);

module.exports = router;
