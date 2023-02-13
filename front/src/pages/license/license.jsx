import React, { Suspense } from "react";
import Licensecard from "./licensecard";
import "../css/license.css"

function fetchlicense() {
    let license;
    const suspender = fetch('http://localhost:8080/api/license')
        .then((response) => response.json())
        .then((data) => {
            const obj = data.reduce((acc, val) => {
                if (!acc?.[val.major]) {
                    acc[val.major] = [];
                }
                acc[val.major].push(val);
                return acc;
            }, {});
            const majorArr = Object.keys(obj);
            license = majorArr.map((major) => obj[major]);
        });
        // {컴공: [...], 요리사: [..]}
    return {
        read() {
            if (!license) {
                throw suspender;
            } else {
                return license;
            }
        }
    };


}

function License() {
    return (
        <>
            <div>
                <h1 style={{ fontSize: "35px", margin:"0 auto", display:"block", width:"380px" }}>자격증 알리미</h1>
            </div><br />
            <Suspense fallback={<>... 로딩</>}>
                <Licensecard value={fetchlicense()} ></Licensecard>
            </Suspense>
        </>
    );
}

export default License;
