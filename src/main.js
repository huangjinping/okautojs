// import data from './data.js'

// input("测试")
// scrollUp();
// toast("茅台军");
// scrollUp(0)
// toast('开始抓取数据');
// console.log("输入正确");

// home();
// sleep(3000);
// toast('inxDemo');
// click("InxDemo");

// console.log("输入正确");


// sleep(3000);
// click("开始抓取");
// while(!click("仅在使用中允许"));
// sleep(3000);
// toast('开始抓取数据');
// sleep(3000);
// click('hardware');
// toast('打开hardware');

// var sendButton = text("Cumplido").findOne();
// sendButton.click();

// var sendButton = id("edt_collectiontype").findOne();
// sendButton.click();
// sleep(3000);
// click("Bank Card");

// toast('开始抓取数据');

// click('Consultas');
// sleep(1000);
// back();
// alert("dd");
// var clear = confirm("要清除所有缓存吗?");
// if(clear){
//     alert("清除成功!");
// }
// alert("出现错误~", "出现未知错误，请联系脚本作者”);

// alert("嘿嘿嘿").then(()=>{
//     //当点击确定后会执行这里
//     console.log("dddddd");
// });

// "ui";
// confirm("确定吗").then(value=>{
//     //当点击确定后会执行这里, value为true或false, 表示点击"确定"或"取消"
// });

// "ui";
// rawInput("请输入您的名字", "小明").then(name => {
//     alert("您的名字是" + name);
// });

// var options = ["选项A", "选项B", "选项C", "选项D"]
// var i = dialogs.select("请选择一个选项", options);
// if(i >= 0){
//     toast("您选择的是" + options[i]);
// }else{
//     toast("您取消了选择");
// }



// console.show();
// var r = http.get("www.baidu.com");
// log("code = " + r.statusCode);
// log("html = " + r.body.string());

// console.show();
// http.get("www.baidu.com", {}, function(res, err){
// 	if(err){
// 		console.error(err);
// 		return;
// 	}
// 	log("code = " + res.statusCode);
// 	log("html = " + res.body.string());
// });

// var city = "广州";
// var res = http.get("http://www.sojson.com/open/api/weather/json.shtml?city=" + city);
// if(res.statusCode != 200){
// 	toast("请求失败: " + res.statusCode + " " + res.statusMessage);
// }else{
// 	var weather = res.body.json();
// 	log(weather);
// 	toast(util.format("温度: %s 湿度: %s 空气质量: %s", weather.data.wendu,
// 		weather.data.shidu, weather.quality));

// }
// log("html = ==============="+device.width);
// log("dddd");

// threads.start(function(){
//     //在新线程执行的代码
//     while(true){
//         log("子线程");
//     }
// });
// while(true){
//     log("脚本主线程");
// }


// var thread = threads.start(function(){
//     while(true){
//         log("子线程");
//     }
// });
// //停止线程执行
// thread.interrupt();

// threads.shutDownAll()
// log("脚本主线程");

// log("获取本地数据");
// home();
// "ui";
// ui.layout(
//     <frame>
//         <text id="example" text="1"/>
//     </frame>
// );
// function plusOne() {
//     // 获取文本
//     let text = ui.example.attr("text");
//     // 解析为数字
//     let num = parseInt(text);
//     // 数字加1
//     num++;
//     // 设置文本
//     ui.example.attr("text", String(num));
//     // 1秒后继续
//     ui.post(plusOne, 1000);
// }
// plusOne();


// log(text("微信").findOne());
// toast("123456");
// click("微信");
// text("微信1").findOne(3000);
// toast("123456");
// log("0000000000000000")
// var result= text("微信1").exists();
// log(result);

// log("================================0");
// var  name_id="com.tencent.mm:id/kbq";
// var num=id(name_id).find().size();
// log(num);
// log("================================1");
// var obj=id(name_id).find().get(4)
// log(obj.text())

// log("================================1");

// id("com.tencent.mm:id/kbq").find().forEach(child => {
//     // var target = child.findOne(id("kbo"));
//     // target.click();
//     log(child.text());
//     log(child.parent());
//     // child.click();
//     // click(child.text());
//     // sleep(3000);
//     // back();
//     });
// log("================================2");
// click("微信");
// back();


// if(!requestScreenCapture()){
//     toast("请求截图失败");
//     exit();
// }
// var img = captureScreen();
// images.saveImage(img, "/sdcard/1ccc.png");

// log("======================+》》》》》》》》》》》》------");
// toastLog("开始找色")


// var url="https://gips3.baidu.com/it/u=2970428147,1680662499&fm=3003&app=3003&f=JPEG?w=4800&h=2700";
// var logo=images.load(url);
// log(logo);
// images.save(logo,"/sdcard/xiaomi.png");

// // 精确找色
var url="https://gips3.baidu.com/it/u=2970428147,1680662499&fm=3003&app=3003&f=JPEG?w=4800&h=2700";
var img=images.load(url);
toastLog("开始找色")
log("----------开始找色-----------------");
// var point=images.findColorEquals(img,0x5FD1DC);
var  point=images.findColor(img,0x5FD1DC);
log(point);


//
// "ui";
// ui.layout(
//     <vertical padding="16">
//         <checkbox id="auto" text="自动亮度"/>
//         <text textColor="black" textSize="16sp" margin="8">亮度</text>
//         <seekbar id="brightness" max="100"/>
//     </vertical>
// );

// //getBrightnessMode()返回亮度模式，1为自动亮度
// ui.auto.setChecked(device.getBrightnessMode() == 1);
// ui.auto.setOnCheckedChangeListener(function(v, checked){
//     device.setBrightnessMode(checked ? 1: 0);
// });

// ui.brightness.setProgress(device.getBrightness());
// ui.brightness.setOnSeekBarChangeListener({
//     onProgressChanged: function(seekbar, p, fromUser){
//         if(fromUser){
//             device.setBrightness(p);
//         }
//     }
// });




// console.show();

// var str = "";
// str += "屏幕宽度:" + device.width;
// str += "\n屏幕高度:" + device.height;
// str += "\nbuildId:" + device.buildId;
// str += "\n主板:" + device.board;
// str += "\n制造商:" + device.brand;
// str += "\n型号:" + device.model;
// str += "\n产品名称:" + device.product;
// str += "\nbootloader版本:" + device.bootloader;
// str += "\n硬件名称:" + device.hardware;
// str += "\n唯一标识码:" + device.fingerprint;
// str += "\nIMEI: " + device.getIMEI();
// str += "\nAndroidId: " + device.getAndroidId();
// str += "\nMac: " + device.getMacAddress();
// str += "\nAPI: " + device.sdkInt;
// str += "\n电量: " + device.getBattery();

// log(str);

// var url = "www.baidu.com";
// var res = http.get(url);
// if(res.statusCode == 200){
//     toast("请求成功");
//     console.show();
//     log(res.body.string());
// }else{
//     toast("请求失败:" + res.statusMessage);
// }


// var appName = rawInput("钉钉");
// launchApp("钉钉");

//输入应用名称
// var appName = rawInput('钉钉');
//获取应用包名
// var packageName = getPackageName(appName);
// if(!packageName){
//     toast("应用不存在！");
// }else{
//     //卸载应用
//     app.uninstall(packageName);
// }