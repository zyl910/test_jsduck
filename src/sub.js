/**
* # 描述
* 这是一个Sub类的描述
* {@img img.png  alt text}
* @class Sub
* @extends People
*/
function Sub(cfg){}
Sub.prototype={
	/**
	* 事件的描述
	* @event eat
	* @param {Object} ev
	* 事件参数的描述
	*/

	/**
	* 配置项目描述
	* @cfg {Object} size 大小
	* @cfg {Number} size.height 初始化配置高度
	* @cfg {Number} size.width 初始化配置宽度
	*/

	/**
	* @inheritdoc People#sex
	* @type String
	*/
	sex:'female',

	/**
	* {@link People#getName getName方法}
	* 设置它的名称
	* @param {String} firstName 参数的描述
	* @param {String} lastName 参数的描述
	*/
	setName:function(firstName ,lastName){}
};