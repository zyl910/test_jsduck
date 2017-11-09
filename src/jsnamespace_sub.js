/*! @file jsnamespace_sub.js
 * 演示JavaScript中如何模拟子命名空间.
 *
 * @author zhouyuelin
 * @version v1.0
 */

// 声明本模块所依赖的命名空间.
var jsnamespace = window.jsnamespace || {};


/** @class
 * 子命名空间.
 * @abstract
 */
jsnamespace.sub = window.jsnamespace.sub || {};

// 极简主义法（minimalist approach）定义类.

/**
 * 动物.
 */
jsnamespace.sub.Animal = {
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

/**
 * 猫.
 * @extends jsnamespace.sub.Animal
 */
jsnamespace.sub.Cat = {
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
		var cat = jsnamespace.sub.Animal.createNew();
		/** 发声.
		 */
		cat.makeSound = function(){ alert(jsnamespace.sub.Cat.sound); };
		/** 修改声音.
		 * @param {String}	x	声音.
		 */
		cat.changeSound = function(x){ jsnamespace.sub.Cat.sound = x; };
		return cat;
	}
};
