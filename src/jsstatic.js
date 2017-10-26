/** @enum */
MyEnum = {
  /** the first enum value */
  FIRST: 'foo',
  /** the second enum value */
  SECOND: 'bar'
};

/** @enum */
My.enum.Smartness = [
    /** A wise choice. */
    "wise",
    /** A foolish decision. */
    "fool"
];

// == 闭包法定义类 ==

/**
 * 拼接工具.
 * @class JoinUtil
 */
var JoinUtil = function () {
	
	return {
		NUM0: 0, // 行尾注释0
		NUM1: 1, ///< 行尾注释1
		NUM2: 2, //!< 行尾注释2
		NUM3: 3, /**< 行尾注释3 */
		NUM4: 4, /*!< 行尾注释4 */
		NUM5: 5, /// 行尾注释5
		NUM6: 6,
		
		// enum
		StrEnum: {},
		IntEnum: {},
		
		/** 字典转换. 根据map将键名转为键值.
		 *
		 * @param {String}	map	字典映射表.
		 * @param {String}	key	键名.
		 * @param {String}	defstr	默认字符串.
		 * @param {String}	defisold	用旧值(key)作为默认字符串.
		 * @return  {String}	转换成功时返回转换后的键值.
		 * @static
		 */
		dictConvert: function(map, key, defstr, defisold) {
			return defstr;
		},
		
		/** 版本号. @readonly */
		version: 0x100
	};
}();

/** @enum */
JoinUtil.StrEnum = {
  /** the first enum value */
  FIRST: 'foo',
  /** the second enum value */
  SECOND: 'bar'
};

/** @enum */
JoinUtil.IntEnum = {
  /** the first enum value */
  FIRST: 1,
  /** the second enum value */
  SECOND: 2
};

// 极简主义法（minimalist approach）定义类.

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

