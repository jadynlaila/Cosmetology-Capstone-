const StylistModel = require("../models/StylistModel");
const ClientModel = require("../models/ClientModel");
const TeacherModel = require("../models/TeacherModel");
const VisitModel = require("../models/VisitModel");

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CREATE A STYLIST

creating a new stylist. 
all the info in the req body is coming from the signup form
there should be a check *first thing* when the signup form is submitted
if there was no teacher code entered, *then* this will run

.post('/stylist')
req.body {clients, teacher, email, pin, s1hours, s2hours, s3hours, s4hours }
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const createStylist = async (req, res) => {
  const {
    name,
    email,
    pin,
    clients,
    teacher,
    s1hours,
    s2hours,
    s3hours,
    s4hours,
  } = req.body;

  try {
    return res.status(200).json();
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ createStylist");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
EDIT STYLIST
.put('/stylist/:stylistId')
req.params {stylistId}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const updateStylist = async (req, res) => {
  const { stylistId } = req.params;
  try {
    return res.status(200).json();
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ updateStylist");
  }
};


/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CREATE A NEW CLIENT

creating a new client. 
this will happen when a stylist submits the new client form
keep in mind that some of the advanced information may be missing so we need to account for null values 

.post('/client')
req.body = {name, email, address, phone, dob, hairCondition, scalpCondition, hairTexture, growthPatterns, hairDensity, hairPorosity, hairElasticity, hairLength}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const createClient = async (req, res) => {
  const {
    name,
    email,
    address,
    phone,
    dob,
    hairCondition,
    scalpCondition,
    hairTexture,
    growthPatterns,
    hairDensity,
    hairPorosity,
    hairElasticity,
    hairLength,
  } = req.body;

  try {
    return res.status(200).json();
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ createClient");
  }
};
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
EDIT CLIENT
.put('/client/:clientId')
req.params {clientId}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const updateClient = async (req, res) => {
  const { clientId } = req.params;
  try {
    return res.status(200).json();
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ updateClient");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CREATE A NEW TEACHER

creating a new teacher
if a VALID teacher code was entered on signup, then this should run

.post('/teacher')
req.body = {name, email, pin, students}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const createTeacher = async (req, res) => {
  const { name, email, pin, students } = req.body;
  try {
    return res.status(200).json();
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ createTeacher");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
EDIT TEACHER

we'll have a little edit button on the teacher profile where they can edit their basic information if needed
....or not because that seems a bit unnecessary

.post('/teacher')
req.params {teacherId}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const updateTeacher = async (req, res) => {
  const { teacherId } = req.params;
  try {
    return res.status(200).json();
  } catch (error) {
    console.log(error);
    return res.status(500).send("server error @ updateTeacher");
  }
};


//! eerything below this is copy and pasted from an old project so it can be ignored for now

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
LIKE A POST
.post('/like/:postId')
req.params {postId}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req;

    const post = await PostModel.findById(postId);
    if (!post) return res.status(403).send("Post not found");

    const isLiked = post.likes.find((like) => like.user.toString() === userId);
    if (isLiked) return res.status(401).send("post already liked");

    await post.likes.unshift({ user: userId });
    await post.save();

    return res.status(200).send("Post liked");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ likePost");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
UNLIKE A POST
.put('/like/:postId')
req.params {postId}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const unlikePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req;

    const post = await PostModel.findById(postId);
    if (!post) return res.status(403).send("Post not found");

    const likedIndex = post.likes.findIndex(
      (like) => like.user.toString() === userId
    );

    if (likedIndex === -1) return res.status(403).send("post not liked");

    await post.likes.splice(likedIndex, 1);
    await post.save();

    return res.status(200).send("post unliked");
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ unlikePost");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
GET ALL LIKES ON A POST
.get('/like/:postId)
req.params {postId}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const getLikes = async (req, res) => {
  try {
    const { postId } = req.params;

    const post = await PostModel.findById(postId).populate("likes.user");
    if (!post) return res.status(403).send("Post not found");

    return res.status(200).json(post.likes);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ getLikes");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
CREATE A COMMENT
.post('/comment/:postId)
req.params {postId}
req.body {text}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const createComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { text } = req.body;

    if (!text) return res.status(403).send("Text required");
    const post = await PostModel.findById(postId);
    if (!post) return res.status(403).send("Post not found");

    const newComment = {
      user: req.userId,
      _id: uuid(),
      text,
    };

    await post.comments.unshift(newComment);
    await post.save();

    return res.status(200).json(newComment._id);
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ createComment");
  }
};

/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
DELETE A COMMENT
.delete('/comment/:postId/:commentId)
req.params {postId, commentId}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

const deleteComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const { userId } = req;

    const post = await PostModel.findById(postId);
    if (!post) return res.status(403).send("Post not found");

    const comment = post.comments.find((comment) => comment._id === commentId);
    if (!comment) return res.status(403).send("Comment not found");

    const user = await UserModel.findById(userId);

    const deleteComment = async () => {
      const indexOf = post.comments.indexOf(comment);
      await post.comments.splice(indexOf, 1);
      await post.save();

      return res.status(200).send("comment deleted");
    };

    if (comment.user.toString() !== userId) {
      if (user.role === "admin") {
        await deleteComment();
      } else {
        return res.status(401).send("unauthorized");
      }
    }

    await deleteComment();
  } catch (error) {
    console.log(error);
    return res.status(500).send("Server Error @ createComment");
  }
};

module.exports = {
  deleteComment,
  createComment,
  getLikes,
  unlikePost,
  likePost,
  createPost,
  getAllPosts,
  getPostById,
  deletePost,
};
