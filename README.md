# test_jsduck

Test JSDuck make JavaScript code document(测试JSDuck生成JavaScript代码的文档)

Links:

* Git:	https://github.com/zyl910/test_jsduck
* Blog:	http://www.cnblogs.com/zyl910/tag/test_jsduck/

![img_home](images/img_home.png "img_home")

![img_cat](images/img_cat.png "img_cat")

Sample:

```JavaScript
/** 动物.
 */
var Animal = {
	/** 创建 动物.
	 *
	 * @return  {Animal}	返回所创建的对象.
	 * @static
	 */
	createNew: function(){
		var animal = {};
		/** 睡觉.
		 */
		animal.sleep = function(){ alert("睡懒觉"); };
		return animal;
	}
};

/** 猫.
 *
 * @extends Animal
 */
var Cat = {
	/** 声音.
	 * @static @protected
	 */
	sound : "喵喵喵",
	/** 创建 猫.
	 *
	 * @return  {Cat}	返回所创建的对象.
	 * @static
	 */
	createNew: function(){
		var cat = Animal.createNew();
		/** 发声.
		 */
		cat.makeSound = function(){ alert(Cat.sound); };
		/** 修改声音.
		 * @param {String}	x	声音.
		 */
		cat.changeSound = function(x){ Cat.sound = x; };
		return cat;
	}
};

```


## Change history (变更日志)

[2015-10-26] v1.0: http://www.cnblogs.com/zyl910/p/zdbviewcs.html

* Release v1.0 (发布1.0版).
