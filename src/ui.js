
"ui";
// ui.layout(
//       <vertical padding="16">
//         <checkbox id="auto" text="自动亮度"/>
//         <text textColor="black" textSize="16sp" margin="8">亮度</text>
//         <seekbar id="brightness" max="100"/>
//         <button id="btn_submit" text="点击"></button>
//     </vertical>
// );
// toast("UI zhi");
// ui.btn_submit.on("long_click",()=>{
//     toast("long_click_再次点击");
// });

"ui";

ui.layout(
    <frame>
        <list id="list">
            <vertical>
                <text id="name" textSize="16sp" textColor="#000000" text="姓名: {{name}}"/>
                <text id="age" textSize="16sp" textColor="#000000" text="年龄: {{age}}岁"/>
                <button id="deleteItem1" text="删除"/>
                <button id="addItem" text="添加"/>

            </vertical>
        </list>
    </frame>
);

var items = [
    {name: "小明", age: 18}, {name: "小红", age: 30},
    {name: "小东", age: 19}, {name: "小强", age: 31},

];

ui.list.setDataSource(items);

ui.list.on("item_click", function(item, i, itemView, listView){
    toast("被点击的人名字为: " + item.name + "，年龄为: " + item.age);
});

ui.list.on("item_bind", function(itemView, itemHolder){
    itemView.deleteItem1.on("click", function(){
        let item = itemHolder.item;
        toast("被删除的人名字为: " + item.name + "，年龄为: " + item.age);
        items.splice(itemHolder.position, 1);
    });

    itemView.addItem.on("click",function(){
        items.push({name: "test==", age: 29});
    });
})


