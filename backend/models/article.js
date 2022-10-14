class Article {
    constructor(id, heading, author, date, content,imgUrl,pdfUrl ) {
            this.id = id;
            this.heading = heading;
            this.author = author;
            this.date = date;
            this.content = content;
            this.pdfUrl = pdfUrl;
            this.imgUrl = imgUrl;
    }
}

module.exports = Article;