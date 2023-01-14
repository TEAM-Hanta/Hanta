const db = require('../utils/database');

module.exports = class License {
    constructor(id, user_id, license_name) {
        (this.id = id), (this.user_id = user_id), (this.license_name = license_name);
    }

    // 알림 받을 회원의 아이디, 자격증 이름 저장
    save() {
        return db.execute('INSERT INTO license_notice_user (user_id,license_name) VALUES (?,?)', [this.user_id, this.license_name]);
    }

    // license_notice_user 테이블에서 사용자 찾기
    static findUser(user_id, license_name) {
        return db.execute('SELECT * FROM license_notice_user WHERE user_id = ? AND license_name = ?', [user_id, license_name]);
    }

    // 알림신청을 이미 한 적 있으면 알림신청 취소
    static deleteLicense(user_id, license_name) {
        return db.execute('DELETE FROM license_notice_user WHERE user_id = ? AND license_name = ?', [user_id, license_name]);
    }

    // 자격증 목록
    static licenseList() {
        return db.execute('SELECT DISTINCT name,major FROM license');
    }
};
