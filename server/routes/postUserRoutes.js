const router = require("express").Router();
import { createStylist, createClient, createTeacher } from '../controllers/users';

router.route('/stylist').post(createStylist);
router.route('/client').post(createClient);
router.route('/teacher').post(createTeacher)

export default router;