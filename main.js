/**
 * TÌM SỐ CHẲN LẼ NHỎ HƠN 100
 * Đầu vào: số trần: 100
 * Xử lý: for i chạy từ 0 đến số trần.
 *      + Nếu i chia hết cho 2 thì là số Chẵn.
 *      + Ngược lại: i là số lẻ
 * Đầu ra: In kết quả dãy số chẵn, số lẻ.
 */

function soChanLe() {
    var num = 100;
    var soChan = "";
    var soLe = "";
    for (i = 0; i < num; i++) {
        if (i % 2 == 0) {
            soChan += i + " ";
        } else {
            soLe += i + " ";
        }
    }
    var res1 = "👉";
    res1 += "Số chẵn: " + soChan;
    document.getElementById("infosoChan").innerHTML = res1;

    var res2 = "👉";
    res2 += "Số lẻ: " + soLe;
    document.getElementById("infosoLe").innerHTML = res2;
}


/**
 * ĐẾM CÁC SỐ CHIA HẾT CHO 3 TỪ 0 ĐẾN DƯỚI 1000
 * Đầu vào: số trần: 1000
 * Xử lý: for i chạy từ 0 đến số trần.
 *      + Nếu i chia hết cho 3 thì là đếm tăng 1.
 *      + Ngược lại: i là không đếm
 * Đầu ra: In kết quả của các số chia hết cho 3 trong khoảng trên.
 */

function chiaBa() {
    var i = 0
    var chia3 = 0;
    while (i < 1000) {
        if (i % 3 == 0) {
            chia3++;
        }
        i++;
    }
    var res3 = "👉";
    res3 += "Số chia hết cho 3 nhỏ hơn 1000: " + chia3 + " số";
    document.getElementById("infochiaBa").innerHTML = res3;
}

//  Tìm số nguyên dương
/**
 * Đầu vào: sum, count, i;
 * Xử lý:
 *      + cho i chạy từ 1, xét điều kiện sum<10000
 *          * True: count + 1; và sum cộng cho số bước nhảy.
 * Đầu ra: in ra số đếm.
 */
function soNguyenDuong() {
    var sum = 0;
    var count = 0;
    // var inf = "";
    // var inf2 = "";
    // while (sum < 10000) {
    //     sum += count;
    //     count = count + 1;
    // }
    for (i = 1; sum < 10000; ++i) {
        sum += i;
        count = count + 1;
        // inf += sum + " ";
        // inf2 += count + " ";
    }
    // console.log(inf);
    // console.log(inf2);

    var res4 = "👉";
    res4 += "Số nguyên dương nhỏ nhất: " + count;
    document.getElementById("infosoNguyenDuong").innerHTML = res4;
}

/**
 * tinhTong]
 * Đầu vào: nhập số x, n;
 * Xử lý:
 *  + Cho số i chạy từ 1 đến n.
 *          + i < n thì tổng += x^i;
 * Ghi chú: không lấy số i = 0, do i^0 = 1 sai yêu cầu;
 * Đầu ra: in kết quả.
 */

function tinhTong() {
    var x = document.getElementById("soX").value * 1;
    var n = document.getElementById("soN").value * 1;
    var tinhTong = 0;
    for (i = 1; i <= n; i++) {
        tinhTong += x ** i;
    }
    var res5 = "👉";
    res5 += "Tổng: " + tinhTong;
    document.getElementById("infotinhTong").innerHTML = res5;
}

/**
 * Tính giai thừa
 * Đầu vào: số giai thừa
 * Xử lý:
 *      Cho biến i chạy từ 1 đến số giai thừa nhập vào,
 *      i < số giai thừa thì tổng giai thừa = giai thừa * i;
 * 
 * Đầu ra: in kết quả tổng;
 */

function tinhGiaiThua() {
    var soGiaiThua = document.getElementById("soGiaiThua").value * 1;
    var giaiThua = 1;
    for (i = 1; i <= soGiaiThua; i++) {
        giaiThua = giaiThua * i;
    }
    var res6 = "👉";
    res6 += "Tổng: " + giaiThua;
    document.getElementById("infotinhGiaiThua").innerHTML = res6;
}

/**
 *          IN THẺ DIV
 */

function inTheDiv() {
    var content = "";
    for (i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            content += "<p>Div chẵn</p>";
        } else {
            content += "<p>Div lẽ</p>";
        }
    }
    var res7 = "👉";
    res7 += content;
    document.getElementById("infoinTheDiv").innerHTML = res7;
}