# seal-hotkeys
热键模块，使用Jquery委托事件进行事件的代理

    * 组合热键绑定
    * 热键删除

## DEMO

```javascript
var hotKey = new SealHotKeys({
    el: "#superMan"     // 设置目标元素为一个textarea
});
hotKey.add("ctrl + a", function(e){     // 当textarea组合键按[ctrl+a]下时触发
    // do something
});
```

## API:

### `add`

增加一个热键绑定，第一个参数是一个组合热键。一般是一个控制键(`shift、ctrl、alt`)加上一个标准键。第二个参数是热键处理函数，用法如下。

```javascript
hotKey.add("ctrl + a", function(e){
    res = 'aha';
});
```

### `remove`

移除一个绑定热键，参数是一个热键组合名称同添加热键，用法如下。

```javascript
hotKey.remove('ctrl + a');
```
### `destroy`

释放所有绑定热键，用法如下。

```javascript
hotKey.destroy()；
```
