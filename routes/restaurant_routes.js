const router = require('express').Router();

const restaurant_controller = require('../controllers/restaurant_controller');

router.get('/profile', restaurant_controller.get_userResto);

router.get('/:restaurantId', restaurant_controller.get_restaurant_profile); // Customer View

router.get('/editMenu', restaurant_controller.get_edit_menu);

router.post('/addProduct', restaurant_controller.addProduct);//add Product to menu

module.exports = router;