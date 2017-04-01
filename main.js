/**
 *通过类名获取元素,直接使用老师给的封装函数
 * @param   {Object} element 父级对象
 * @param   {String} names 类名
 * @returns {Array}  获取到的节点数组
 */
function getElementsByClassName(element, names) {
    if (element.getElementsByClassName) {
        return element.getElementsByClassName(names);
    } else {
        var elements = element.getElementsByTagName("*");
        var result = [];
        var  childElement,
             classNameStr,
             flag;
        names = names.split(" ");
        for (var i = 0;  childElement = elements[i]; i++) {
            classNameStr = " " +  childElement.className + " ";
            flag = true;
            for (var j = 0, name; name = names[j]; j++) {
                if (classNameStr.indexOf(" " + name + "") == -1) {
                    flag = false;
                    break;
                }
            }
            if (flag) {
                result.push( childElement);
            }
        }
        return result;
    }
}

(function () {
	var aBtn = getElementsByClassName(document,'btn-f');
	var aDetail = getElementsByClassName(document,'detail');
	var timer;
	var index;
	for (var i = 0; i < aBtn.length; i++) {
		aBtn[i].index = i;
		aBtn[i].onmouseover = function () {
			for (var i = 0; i < aDetail.length; i++) {
				aDetail[i].style.display = "none";
			}

			aDetail[this.index].style.display = "block";
		};
	}
})();