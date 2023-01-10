const db = require('../utils/database');

module.exports = class Post {
    constructor(id, title, content, user_id, post_type) {
        (this.id = id), (this.title = title), (this.content = content), (this.user_id = user_id), (this.post_type = post_type);
    }

    // post 테이블에 글 저장하기
    save() {
        return db.execute('INSERT INTO post (title,content,user_id,post_type) VALUES (?,?,?,?)', [this.title, this.content, this.user_id, this.post_type]);
    }

    // 전체 글 리스트 출력하기
    static fetchAll() {
        return db.execute('SELECT * FROM post');
    }

    // post_id에 해당하는 글 상세보기
    static fetchOne(post_id) {
        return db.execute('SELECT * FROM post WHERE post.id = ?', [post_id]);
    }

    // 글 삭제하기 (글쓴이와 현재 로그인된 회원아이디가 일치해야하고, post_id와 id가 일치하는 글을 삭제해야 함)
    static deletePost(post_id) {
        return db.execute('DELETE FROM post WHERE post.id = ?', [post_id]);
    }

    // user_id가 쓴 글 목록
    static findMyPost(user_id) {
        return db.execute('SELECT * FROM post WHERE post.user_id = ?', [user_id]);
    }

    // 인기글 목록 (상위 1O개)
    static popularPost() {
        return db.execute(
            'SELECT post.id,title,content,created_at,post.user_id FROM post JOIN like_count ON post.id = like_count.post_id GROUP BY like_count.post_id ORDER BY count(like_count.post_id) DESC LIMIT 0,10;'
        );
    }

    // 쿼리스트링으로 검색
    static findPost(keyword) {
        return db.execute('SELECT * FROM post WHERE post.title LIKE ? OR post.content LIKE ?', [keyword, keyword]);
    }
};
