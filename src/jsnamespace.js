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

/** 继承. 即设置好 Child 的原型为 Parent的原型实例，并设置 uber 属性.
 * 
 *  @param	{Function}	Child	子类（构造函数）.
 *  @param	{Function}	Parent	父类（构造函数）.
 *	@static
 */
jsnamespace.extend = function(Child, Parent) {
	var F = function(){};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.uber = Parent.prototype;
};

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
	cfg = cfg || {};
	/** @property {String} 姓名. */
	this.name = cfg["name"] || "";
	/** @property {jsnamespace.GenderCode} 性别. */
	this.gender = cfg["gender"] || jsnamespace.GenderCode.UNKNOWN;
};
(function(){
	/**
	 * 欢迎单词.
	 * @static @private
	 */
	var m_WordHello = "Hello";
	
	/**
	 * 取得称谓文本.
	 *
	 * @param {jsnamespace.GenderCode}	gender	性别.
	 * @return  {String}	返回称谓字符串.
	 * @static @private
	 */
	var m_getAppellationText = function(gender) {
		var rt = "";
		if (jsnamespace.GenderCode.MALE == gender) {
			rt = "Mr.";
		} else if (jsnamespace.GenderCode.FEMALE == gender) {
			rt = "Ms.";
		}
		return rt;
	};

	/**
	 * 取得称谓.
	 *
	 * @return  {String}	返回称谓字符串.
	 */
	jsnamespace.PersonInfo.prototype.getAppellation = function() {
		var rt = m_getAppellationText(this.gender);
		return rt;
	};

	/**
	 * 取得欢迎字符串.
	 *
	 * @return  {String}	返回欢迎字符串.
	 */
	jsnamespace.PersonInfo.prototype.getHello = function() {
		var rt = m_WordHello + " " + this.getAppellation() + " " + this.name;
		return rt;
	};

	// -- static method --
	/** 取得欢迎单词.
	 *
	 * @return  {String}	返回欢迎单词.
	 * @static
	 */
	jsnamespace.PersonInfo.getWordHello = function() {
		return m_WordHello;
	};
	/** 设置欢迎单词.
	 *
	 * @param {String}	v	欢迎单词.
	 * @static
	 */
	jsnamespace.PersonInfo.setWordHello = function(v) {
		m_WordHello = v;
	};
	
})();

// == Employee class ==

/** @class
 * 雇员信息. 构造函数法的类.
 *
 * @extends jsnamespace.PersonInfo
 */
jsnamespace.Employee = function(cfg) {
	cfg = cfg || {};
	jsnamespace.PersonInfo.call(this, cfg);
	// 自身的实例字段.
	/** @property {String} 电子邮箱. */
	this.email = cfg["email"] || "";
};
jsnamespace.extend(jsnamespace.Employee, jsnamespace.PersonInfo);
(function(){

	/** @inheritdoc */
	jsnamespace.Employee.prototype.getHello = function() {
		var rt = jsnamespace.PersonInfo.prototype.getHello.call(this);
		rt = rt + " (" + this.email + ")";
		return rt;
	};
	
})();


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

