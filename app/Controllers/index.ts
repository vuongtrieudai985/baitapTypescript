// Bootstrap + jquery 
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery';
import 'bootstrap/dist/js/bootstrap.min';
import 'popper.js';
// Font Awesome
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/js/all.min';
// MY CSS
import '../../assets/css/index.css';
import {Ghe} from '../Models/Ghe';
import GheService from '../Services/GheService';

import * as $ from 'jquery';
// import GheService from '../Services/GheService';

// import Ghe from '../Models/Ghe';
 
// import GheService from '../Services/GheService';

// let dsGhe = new GheService();



// $(document).ready(function(){
    let dsGhe = new GheService();
    Ghe;
    // console.log(dsGhe);
    // dsGhe.LayDanhSachGhe().done(function(ketqua:any){
    //     console.log(ketqua);
    dsGhe.LayDanhSachGhe();
    
    let ketqua:[] = dsGhe.ds;
    console.log(ketqua);
        // HienThiDanhSachGhe(ketqua);

//     }).fail(function(err:any){
//     });
// })
// console.log(abc);

// let xoa =function () {
//     for (let i in ketqua) {
//         ketqua.splice(1,1);
//         console.log(i);
//     }
//     HienThiDanhSachGhe(ketqua);
// }
// xoa();



let HienThiDanhSachGhe = function(dsGhe:Ghe[]){
    let content ='';
    let i =1;
    for(let Ghe of dsGhe){
        if(Ghe.TrangThai){
            content+=`<button class="ghe dadat"> ${Ghe.SoGhe} </button>`
        } 
        else{
            content += `<button class="ghe"> ${Ghe.SoGhe} </button>`
        };
        if(i % 4==0){
            content +=`<br>`
        }
        i++
    }
    $("#danh-sach-ghe").html(content);

}
let xoa =function () {
    for (let i in ketqua) {
        ketqua.splice(1,1);
        console.log(i);
    }
    HienThiDanhSachGhe(ketqua);
}
xoa();
