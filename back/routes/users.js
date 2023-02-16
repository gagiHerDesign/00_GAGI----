import { Router } from 'express'
import content from '../middleware/content.js'
import * as auth from '../middleware/auth.js'
import { register, login, logout, extend, getUser, editCart, getCart } from '../controllers/users.js'

const router = Router()

router.post('/', content('application/json'), register)
router.post('/login', content('application/json'), auth.login, login)
router.delete('/logout', auth.jwt, logout)
// 舊換新(過期的jwt)
router.patch('/extend', auth.jwt, extend)
router.get('/me', auth.jwt, getUser)
// 加入購物車
router.post('/cart', content('application/json'), auth.jwt, editCart)
router.get('/cart', auth.jwt, getCart)

export default router
