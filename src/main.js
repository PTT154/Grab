// document.getElementById('btnTinhTien').onclick = function (){
//     console.log(123);
// }

const GRAB_CAR1 = 8000;
const GRAB_CAR2 = 7500;
const GRAB_CAR3 = 7000;
const GRAB_CAR_WAIT = 2000;

const GRAB_SUV1 = 9000;
const GRAB_SUV2 = 8500;
const GRAB_SUV3 = 8000;
const GRAB_SUV_WAIT = 3000;

const GRAB_BLACK1 = 10000;
const GRAB_BLACK2 = 9500;
const GRAB_BLACK3 = 9000;
const GRAB_BLACK_WAIT = 3500;

function handleTinhTien() {
    const type = getCarType();
    const km = document.getElementById('txt-km').value * 1;
    const time = document.getElementById('txt-thoiGianCho').value * 1;

    let totalAll = "";
    switch (type) {
        case "GRAB_CAR":
            totalAll = calcTotal(km, type, time, GRAB_CAR1, GRAB_CAR2, GRAB_CAR3);
            break;

        case "GRAB_SUV":
            totalAll = calcTotal(km, type, time, GRAB_SUV1, GRAB_SUV2, GRAB_SUV3);
            break;

        case "GRAB_BLACK":
            totalAll = calcTotal(km, type, time, GRAB_BLACK1, GRAB_BLACK2, GRAB_BLACK3)
            break;

        default:
            console.log("Chưa chọn loại xe");
    }

    document.getElementById('divThanhTien').style.display = 'block';
    document.getElementById('xuatTien').innerHTML = totalAll.toLocaleString('vi-VN') + " VND";
    console.log(totalAll)
}



const calcTotal = (km, type, time, grabPrice_1, grabPrice_2, grabPrice_3) => {
    let total = 0;
    if (0 <= km && km <= 1) {
        total = grabPrice_1 + calcWaitMoney(time, type);
    } else if (1 < km && km <= 19) {
        total = grabPrice_1 + km * grabPrice_2 + calcWaitMoney(time, type);
    } else if (19 < km) {
        total = grabPrice_1 + 19 * grabPrice_2 + (km - 19) * grabPrice_3 + calcWaitMoney(time, type);
    } else {
        alert("Vui long nhap so lon hon 0")
    }
    return total;
};

function calcWaitMoney(time, type) {
    let waitMoney = 0;
    switch (type) {
        case "GRAB_CAR":
            waitMoney = Math.floor(time / 3) * GRAB_CAR_WAIT;
            break;

        case "GRAB_SUV":
            waitMoney = Math.floor(time / 3) * GRAB_SUV_WAIT;
            break;

        case "GRAB_BLACK":
            waitMoney = Math.floor(time / 3) * GRAB_BLACK_WAIT;
            break;
    }
    return waitMoney;
};

function getCarType() {
    const grabCar = document.getElementById('grabX');
    const grabSUV = document.getElementById('grabSUV');
    const grabBlack = document.getElementById('grabBlack');
    let type = "";
    // kiểm tra loại xe
    if (grabCar.checked) {
        type = "GRAB_CAR";
    } else if (grabSUV.checked) {
        type = "GRAB_SUV";
    } else if (grabBlack.checked) {
        type = "GRAB_BLACK";
    } else {
        alert("Vui long chon loai xe");
    }
    return type;
};