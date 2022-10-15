const router = require("express").Router();
const { addVideo , getAllVideos, getVideo , updateVideo,deleteVideo} = require('../controllers/VideoController');

router.get('/',getAllVideos);
router.post('/add',addVideo);
router.get('/:id',getVideo);
router.put('/update/:id',updateVideo);
router.delete('/delete/:id',deleteVideo);

module.exports = router;