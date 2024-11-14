import express from 'express'
import { ReportController } from '../controllers/ReportController'

const router = express.Router()
const reportController = new ReportController()

// POST /admin/reports - Generate a report as an admin.
router.post('/', (req, res) => {
  const { type } = req.body
  const report = reportController.generateReport(type)
  res.json(report)
})

export { router as ReportRoutes }
