/*! @file jsnamespace.js
 * 演示JavaScript中如何模拟命名空间，并支持 构造函数法、闭包法 来构造类. 还演示了 jsduck 文档注释.
 *
 * @author zhouyuelin
 * @version v1.0
 */

/** @class
 * JavaScript的命名空间.
 * @abstract
 */
var jsnamespace = window.jsnamespace || {};

// == enum ==

/** @enum
 * 性别代码. 枚举类.
 */
jsnamespace.GenderCode = {
	/** 未知 */
	"UNKNOWN": 0,
	/** 男 */
	"MALE": 1,
	/** 女 */
	"FEMALE": 2
};


// == PersonInfo class ==

/** @class
 * 个人信息. 构造函数法的类.
 */
jsnamespace.PersonInfo = function(cfg) {
	/** @cfg {String} [name=""]
	 * 姓名.
	 */
	/** @cfg {jsnamespace.GenderCode} [gender=jsnamespace.GenderCode.UNKNOWN]
	 * 性别.
	 */
	cfg = cfg || {};
	/** @property {String} [name=""]
	 * 姓名.
	 */
	this.name = cfg["name"] || "";
	/** @property {jsnamespace.GenderCode} [gender=jsnamespace.GenderCode.UNKNOWN]
	 * 性别.
	 */
	this.gender = cfg["gender"] || jsnamespace.GenderCode.UNKNOWN;
};

/**
 * 取得称谓.
 *
 * @return  {String}	返回欢迎字符串.
 */
jsnamespace.PersonInfo.prototype.getAppellation = function() {
	var rt = "";
	if (jsnamespace.GenderCode.MALE == this.gender) {
		rt = "Mr.";
	} else if (jsnamespace.GenderCode.FEMALE == this.gender) {
		rt = "Ms.";
	}
	return rt;
};

/**
 * 取得欢迎字符串.
 *
 * @return  {String}	返回欢迎字符串.
 */
jsnamespace.PersonInfo.prototype.getHello = function() {
	var rt = "Hello, " + this.getAppellation() + " " + (this.name);
	return rt;
};


// == PersonInfoUtil class ==

/** @class
 * 个人信息工具. 闭包法的类.
 */
jsnamespace.PersonInfoUtil = function () {
	/**
	 * 前缀.
	 *
	 * @static @private
	 */
	var _prefix = "[show] ";
	
	return {
		/** 显示信息.
		 *
		 * @param {jsnamespace.PersonInfo}	p	个人信息.
		 * @static
		 */
		show: function(p) {
			var s = _prefix;
			if (!!p) {
				s += p.getHello();
			}
			alert(s);
		},
		
		/** 版本号. @readonly */
		version: 0x100
	};
}();


// == jsnamespace.sub ==

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
