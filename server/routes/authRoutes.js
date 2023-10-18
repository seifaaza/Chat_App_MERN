const { Router } = require('express')
const authController = require('../controllers/authController')
const requireAuth = require('../middlewares/requireAuth')

const router = Router()

router.post('/signup', authController.signUp)
router.post('/login', authController.login)
router.get('/check-auth',requireAuth, authController.checkAuth)
router.get('/logout', authController.logout)

module.exports = router