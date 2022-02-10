const router = require("express").Router();

const {
  allThoughts,
  singleThought,
  newThought,
  updateThought,
  deleteThought,
} = require("../../controllers/thoughtControllers");

router.route("/")
.get(allThoughts)
.post(newThought);

router.route("/:thoughtId")
.get(singleThought)
.put(updateThought)
.delete(deleteThought)

module.exports = router;