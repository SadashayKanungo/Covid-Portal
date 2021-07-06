const express = require('express')
const user = require('../controller/controller')
const auth = require('../middleware/auth.js')

const jsonParser = express.json()

const router = express.Router()

router.post('/api/signIn',jsonParser, user.signIn)

router.post('/api/signUp',jsonParser, user.signUp)

router.get('/api/signOut', auth, user.signOut)

router.get('/api/signOutAll', auth, user.signOutAll)

router.put('/api/update/:userId', auth, user.updateAdmin)

router.get('/api/country', user.getCountry)

router.get('/api/country/:countryName', user.getOneCountry)

router.get('/api/country/:countryName/states', user.getStates)

router.get('/api/country/:countryName/states/:stateName',user.getOneState)

router.get('/api/states/:stateName/districts', user.getDistricts)

router.get('/api/states/:stateName/districts/:districtName', user.getOneDistrict)

router.get('/api/hospitals', user.getHospital)

router.get('/api/hospitals/:hospitalName', user.getOneHospital)


module.exports = router