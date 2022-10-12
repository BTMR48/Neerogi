const router = require("express").Router();
const { addArticle , getAllArticles, getArticle , updateArticle,deleteArticle} = require('../controllers/ArticleController');

router.get('/',getAllArticles);
router.post('/add',addArticle);
router.get('/:id',getArticle);
router.put('/update/:id',updateArticle);
router.delete('/delete/:id',deleteArticle);

module.exports = router;