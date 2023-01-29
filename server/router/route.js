import { Router } from "express";
const router = Router();

import * as controller from '../controllers/appController.js'
/**POST Methods */
router.route('/register').post(controller.register)
// router.route('/registerMail').post();// send the mail
router.route('/authenticate').post((res, req) => res.next());// authenticate user
router.route('/login').post(controller.login);// login in app
/**GET  Methods*/
router.route('/user/:username').get(controller.getUser);// user with username
router.route('/generateOTP').get(controller.generateOTP); // generate rondom OTP
router.route('verifyOTP').get(controller.verifyOTP); //verify generate OTP
router.route('createResetSession').get(controller.createResetSession); // reset all the variables
/**PUT  Methods*/
router.route('/updateuser').put(controller.updateUser); // is use to update the user profile
router.route('/resetpassword').put(controller.resetPassword); // user to reset password 

export default router;





/** Router İlk Temel
 * import { Router } from "express";
 * const router = Router();
 * POST Methods 
 * router.route('/register').post((response, request) => request.json('register route'));
 * router.route('/registerMail').post();
 * router.route('/authenticate').post();
 * router.route('/login').post();
 * /**GET  Methods
 * router.route('/user/:username').get();
 * router.route('/generateOTP').get();
 * router.route('verifyOTP').get();
 * router.route('createResetSession').get();
 * /**PUT  Methods
 * router.route('/updateuser').put();
 * router.route('/resetpassword').put();
 */