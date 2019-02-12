import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import Qs from 'qs'
Vue.use(Vuex);
const store =()=>new Vuex.Store({
    state:{
        suggests:[
            {
                title:"李宁闪击III 低帮男子反弹篮球专业比赛鞋 带碳板",
                imgSrc:"http://shihuo.hupucdn.com/def/20180901/910daf8b3cb4c593fab2a3b630e0af7a1535767885.jpg?imageView2/1/w/310/h/310",
                oldPrice:599,
                newPrice:299
            },
            {
                title:"李宁音速6高帮篮球鞋 韦德之道7男子减震篮球专业比赛鞋",
                imgSrc:"http://shihuo.hupucdn.com/groupon.admin.cover/20190117/465e55db9be86f80afb7c451b71a586a1547695842.jpg?imageView2/1/w/310/h/310",
                oldPrice:639,
                newPrice:389
            },
            {
                title:"中国李宁巴黎时装周走秀款 悟道2ACE男子篮球休闲鞋",
                imgSrc:"http://shihuo.hupucdn.com/def/20181107/d048293f43813c19a528dd3523ff77221541572676.jpg?imageView2/1/w/310/h/310",
                oldPrice:899,
                newPrice:599
            },
            {
                title:"Air Jordan AJ23 Low黑白奥利奥低帮篮球鞋905288-010-202",
                imgSrc:"http://shihuo.hupucdn.com/def/20180728/f893100cda58eee9a5f9c25d5b2feca31532746946.jpg?imageView2/1/w/310/h/310",
                oldPrice:228,
                newPrice:749
            },
            {
                title:"ARTPOR 日系磨毛格子长袖男基本款长袖衬衣",
                imgSrc:"http://shihuo.hupucdn.com/groupon.admin.cover/20181130/b36aaf401961e406d52d8ec68832e07e1543585385.jpg?imageView2/1/w/310/h/310",
                oldPrice:88,
                newPrice:358
            },
            {
                title:"李宁潮流休闲训练鞋 gosh无界嘻哈独立缓震模块运动鞋男",
                imgSrc:"http://shihuo.hupucdn.com/groupon.admin.cover/20190126/1952cad63e5325af9db920d431cf1c881548492424.jpg?imageView2/1/w/310/h/310",
                oldPrice:269,
                newPrice:539
            },
            {
                title:"李宁音速5篮球鞋 韦德之道低帮埃文特纳纯白",
                imgSrc:"http://shihuo.hupucdn.com/groupon.admin.cover/20190124/689592858c3b44ec8f31ff28b8e3f34a1548317810.jpg?imageView2/1/w/310/h/310",
                oldPrice:639,
                newPrice:339
            },
            {
                title:"匹克休闲鞋男鞋2018年冬新款霍华德帕克舒适泼墨篮球文化鞋运动鞋",
                imgSrc:"http://shihuo.hupucdn.com/groupon.admin.cover/20190131/f5aa8c3af50fcdb162bccf398074087b1548906615.jpg?imageView2/1/w/310/h/310",
                oldPrice:339,
                newPrice:169
            },
            {
                title:"李宁休闲鞋 悟道2 韦德之道新款轻便耐磨高帮篮球运动鞋",
                imgSrc:"http://shihuo.hupucdn.com/groupon.admin.cover/20190127/e9e150adbe4f515d07274a0a065b7b701548598600.jpg?imageView2/1/w/310/h/310",
                oldPrice:449,
                newPrice:249
            },
            {
                title:"亚瑟士 ASICS GEL-LYTE V 元祖灰 黑武士 复古慢跑鞋 ",
                imgSrc:"http://shihuo.hupucdn.com/def/20190109/a39e3b203dae0c34dad70c3af16d2b6c1547008291.jpg?imageView2/1/w/310/h/310",
                oldPrice:890,
                newPrice:448
            },
            {
                title:"巴黎时装周 中国李宁系列卫衣",
                imgSrc:"http://shihuo.hupucdn.com/groupon.admin.cover/20190116/f9e9d2c6791bb3e91d12ec2e47e9fd001547620789.jpg?imageView2/1/w/310/h/310",
                oldPrice:449,
                newPrice:279
            },
            {
                title:"匹克篮球鞋男鞋2018年冬新款耐磨霍华德四代战靴4代运动鞋E84013A",
                imgSrc:"http://shihuo.hupucdn.com/groupon.admin.cover/20190118/0a414f49635efd242097f2a4d546f5e01547818454.jpg?imageView2/1/w/310/h/310",
                oldPrice:699,
                newPrice:350
            },
            {
                title:"ASICS 亚瑟士运动女鞋 GEL-KAYANO 23 女子夜跑稳定跑步鞋",
                imgSrc:"http://shihuo.hupucdn.com/trade/reposition/2019-01-09/ffbb0509663c72d4546db929836912d4.png?imageView2/1/w/310/h/310",
                oldPrice:1390,
                newPrice:448
            },
            {
                title:"准者运动短裤男2019新款跑步健身五分篮球宽松速干训练休闲运动裤",
                imgSrc:"http://shihuo.hupucdn.com/groupon.admin.cover/20190112/9c0d50e3c848f08712711ef4dd53e1a61547260227.jpg?imageView2/1/w/310/h/310",
                oldPrice:99,
                newPrice:49
            },
            {
                title:"威尔胜Wilson篮球7号成人官方虎扑识货耐磨儿童5小学生6室外识货",
                imgSrc:"http://shihuo.hupucdn.com/groupon.admin.cover/20181219/4b2df1d9a657d2b021de16a1fa62d3e71545205497.jpg?imageView2/1/w/310/h/310",
                oldPrice:249,
                newPrice:99
            },
            {
                title:"NBA明星球队配色篮球袜运动防滑防臭专业精英袜",
                imgSrc:"http://shihuo.hupucdn.com/groupon.admin.cover/20180918/f438448ffb3417065680b32ba53ec36d1537234436.jpg?imageView2/1/w/310/h/310",
                oldPrice:147,
                newPrice:26
            },
        ],
        pages:1,
        detailSuggests:[
            {
                title:"KOBE AD MID",
                oldPrice:"1299",
                newPrice:"588",
                rebate:"4.5",
                imgSrc:"http://shihuo.hupucdn.com/def/20181109/6083036f134f992960944528fe85ad841541746230.jpg?imageView2/1/w/220/h/220"
            },
            {
                title:"长青款 Nike Roshe",
                oldPrice:"499",
                newPrice:"198",
                rebate:"4",
                imgSrc:"http://shihuo.hupucdn.com/def/20180731/8e6bcf551b04d13ffbf0e5433a1ea91d1532966579.jpg?imageView2/1/w/220/h/220"
            },
            {
                title:"Adidas Crazy Speed 男子外场实战球鞋",
                oldPrice:"729",
                newPrice:"149",
                rebate:"2",
                imgSrc:"http://shihuo.hupucdn.com/def/20180815/0895a5f760a107af00fb738ca106895f1534340263.jpg?imageView2/1/w/220/h/220"
            },
            {
                title:"AJ1 GS 乔1 全白 女子潮流低帮休闲篮球鞋",
                oldPrice:"599",
                newPrice:"479",
                rebate:"8",
                imgSrc:"http://shihuo.hupucdn.com/trade/reposition/2018-11-18/9279946a15c6f58968142ef7b5160455.png?imageView2/1/w/220/h/220"
            },
            {
                title:"安踏篮球鞋男鞋低帮2018秋季新款透气要疯2代a-shock外场实战战靴",
                oldPrice:"469",
                newPrice:"199",
                rebate:"4.2",
                imgSrc:"http://shihuo.hupucdn.com/trade/reposition/2018-06-13/c053dededfa0b3f9d357a6d1a313a697.png?imageView2/1/w/220/h/220"
            },
        ],
        likes:[
            {
                title:"http://shihuo.hupucdn.com/groupon.admin.cover/20190202/0d79c47591c5bf60f3b6ee5b0c4c69cd1549091547.jpg?imageView2/1/w/220/h/220",
                price:"498"
            },
            {
                title:"http://shihuo.hupucdn.com/def/20180802/655a67c622ff7640314932dd496912521533187727.jpg?imageView2/1/w/220/h/220",
                price:"188"
            },
            {
                title:"http://shihuo.hupucdn.com/def/20190122/48b3eecea46b804896857149e22652921548145098.jpg?imageView2/1/w/220/h/220",
                price:"499"
            },
            {
                title:"http://shihuo.hupucdn.com/groupon.admin.cover/20190114/6257defcaa8fae969d6e3fc2ae9f82c81547451865.jpg?imageView2/1/w/220/h/220",
                price:"159"
            },
            {
                title:"http://shihuo.hupucdn.com/def/20180813/0ca0aa74eaaebd44176ab803be0940c41534170693.jpg?imageView2/1/w/220/h/220",
                price:"369"
            },
            {
                title:"http://shihuo.hupucdn.com/def/20180730/ac3c9bb325720b80024858c86ee378a41532880523.jpg?imageView2/1/w/220/h/220",
                price:"519"
            },
        ],
        maybeLike:[
            {
                imgSrc:"http://shihuo.hupucdn.com/uploads/trade/haitao/cover/201702/1513/0494f9e1fa31193d54b328ef1e7b9098.jpg",
                title:"adidas Originals三叶草Superstar 贝壳头男子板鞋",
                price:"287.64"
            },
            {
                imgSrc:"http://shihuo.hupucdn.com/uploads/trade/haitao/cover/201702/2716/eec324441f14112f1cece78e93ae1c56.jpg",
                title:"Champion 冠军Performance抓绒套头卫衣",
                price:"323.86"
            },
            {
                imgSrc:"http://shihuo.hupucdn.com/uploads/trade/haitao/cover/201608/3109/e7c4be319b5921f23c5db524d3e7925f.jpg",
                title:"限量黑金！Casio卡西欧G-SHOCK GA-110GB-1A 男表",
                price:"0"
            },
            {
                imgSrc:"http://shihuo.hupucdn.com/images/I/1419251978e992736cf5b9ef772bd1a63eff809df3.jpg",
                title:"CAT Caterpillar 2nd Shift 6 经典软头工装靴",
                price:"500.84"
            },
            {
                imgSrc:"http://shihuo.hupucdn.com/uploads/trade/haitao/cover/201606/2815/aef3afed5e24818f6c193cbdef593338.jpg",
                title:"ASICS亚瑟士 GEL Venture 5 男款越野跑鞋",
                price:"323.64"
            },
        ]
    },
    mutations:{
        changePage(state){
            if(state.pages < 5){
                state.pages ++;
            }
            return ;
        }
    },
    actions:{
        getData(context){
            return new Promise(async (resolve,reject)=>{
                let data = await axios({
                    url:"/shihuo/groupon/getGroupons",
                    method:'post',
                    data:{
                        page:context.state.pages,
                        brand:'',
                        sex:'',
                        order:"default",
                        orderType:'',
                        keywords:""
                    },
                    transformRequest: [function (data) {
                      data = Qs.stringify(data);
                      return data;
                    }],
                    headers:{'Content-Type':'application/x-www-form-urlencoded'}
                  })
                  resolve(data);
            });
        },
        changePage({commit}){
            commit('changePage');
        }
    }
})
export default store;


// import Vuex  from 'vuex'
// import Vue from 'vue'
// import axios from 'axios'
// Vue.use(Vuex);
// const store = new Vuex.Store({
//     namespaced: true,
//     state: {
       
//     },
//     mutations:{
//         city(state,data){
//             console.log(data);
//             Object.keys(data).forEach((key)=>{
//                 state[key] = data[key]
//             })
//         },
       
//     }, 
//     actions:{
//         getCity(context){
//             return new Promise(async (resolve, reject) => {
//                 let data = await  axios.get('/sexLady/ajax/filterCinemas?ci=1');
//                  console.log(data);
//                 context.commit('city',{
//                     district: data.data.district,
//                     subway: data.data.subway,
//                     brand : data.data.brand
//                 });
//                 resolve(200)
//             })
//         },
//         changeArr({commit},index){
//             commit('addRightArr',index)
//         }
//     }
// });

// export default store
