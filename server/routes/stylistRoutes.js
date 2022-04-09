const { getProfileStylist, getProfileTeacher, updateStylist } = require("../controllers/profile");

const router = require("express").Router();



/* 
here is where the:
autofill client data will be pulled from to fill in the new visit form
students data will be loaded from so the teachers can view everything
students data will be loaded so they can view their own data aswell as edit stuff if they need to, if we choose to let them edit their own data rather then the teachers
active clients data will load from when displayed on the right of the page when they are ready to be checked out or whatever

more here:

*/

router.route('/profile/:id').get(getProfileStylist).put(updateStylist)





module.exports = router