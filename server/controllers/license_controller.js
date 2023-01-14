const HttpError = require('../models/http-error');
const License = require('../models/license');

// 자격증 목록
exports.licenseList = async (req, res, next) => {
    let licenseList;
    try {
        [licenseList] = await License.licenseList();
    } catch (err) {
        const error = new HttpError('자격증 목록을 불러오지 못했습니다.', 500);
        return next(error);
    }
    res.status(200).json(licenseList);
};

// 자격증 알림신청
exports.applyForNotification = async (req, res, next) => {
    const license_name = req.body.license_name;
    const user_id = req.userData.userId;
    const findUser = await License.findUser(user_id, license_name);

    if (findUser[0].length > 0) {
        License.deleteLicense(user_id, license_name);
        return res.status(200).json({
            message: '알림신청한 회원 데이터 삭제 성공',
        });
    } else {
        const addNotification = new License(null, user_id, license_name);

        try {
            await addNotification.save();
        } catch (err) {
            const error = new HttpError('알림신청한 회원 데이터 저장 실패', 500);
            return next(error);
        }

        res.status(200).json({
            message: '알림신청한 회원 데이터 저장 성공',
        });
    }
};
