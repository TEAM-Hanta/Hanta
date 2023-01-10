// 댓글 달렸을 때 -> 글쓴이에게 / 자격증 알림 -> 알림 신청한 사람에게
const db = require('../utils/database');

module.exports = class Notice {
    constructor(id, user_id, message, url) {
        (this.id = id), (this.user_id = user_id), (this.message = message), (this.url = url);
    }

    // 댓글이 작성될 때 동시에 저장
    // 댓글 알림 (reply_type,message,send_date,url,user_id,reply_id)
    save() {
        return db.execute('INSERT INTO reply_notice (reply_type,user_id,message,url,reply_id) VALUES (0,?,?,?,15)', [this.user_id, this.message, this.url]);
    }

    // 알림 조회
    // 대댓글은 글쓴이와 댓글쓴이에게도 알림이 감 - 일단 댓글만
    // user_id는 글쓴이 아이디
    // 제일 마지막으로 추가된 데이터만 출력하면 되는지 모름
    static replyList(user_id) {
        return db.execute('SELECT message,send_date,url FROM reply_notice WHERE user_id = ? ORDER BY send_date DESC LIMIT 1', [user_id]);
    }

    // 자격증 알림 - 보류
};
