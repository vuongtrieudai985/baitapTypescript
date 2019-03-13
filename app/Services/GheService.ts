import * as $ from 'jquery';
export default class GheService {
    public ds: any = [];
    public LayDanhSachGhe() {
        return $.ajax({
            url: "../../assets/data/data.json",
            type: "GET"
        }).done(function (kq) {
            this.ds = kq.data;
            console.log(this.ds)
        }).fail(function () {

        });
    }
 
// public xoa (abc:any,ds:any) {
//     for (let i in ds) {
//         this.ds.splice(abc,1);
//         console.log(i);
//     }
// }
  
}

// export default class GheService {
//     public LayDanhSachGhe(){
//         return $.ajax({
//          url: "../../assets/data/data.json",
//          type:"DELETE"
//         })
//     }
// }