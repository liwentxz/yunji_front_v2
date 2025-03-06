// 一维数组转二维
export function listTo2D(arr, rows, cols) {
  const result = [];
  for (let i = 0; i < rows; i++) {
    result.push(arr.slice(i * cols, (i + 1) * cols));
  }
  return result;
}

//一维数组转树形数据
export function changeListToTree(list, params) {
  const map = new Map();
  list.forEach((item) => {
    item[params.childrenKey] = []; // 初始化 children
    map.set(item[params.idKey], item);
  });

  // 构建树形结构
  const treeData = [];
  list.forEach((item) => {
    const parentId = item[params.parentIdKey];
    if (parentId === null || parentId === undefined || !map.has(parentId)) {
      treeData.push(item); // 根节点
    } else {
      const parent = map.get(parentId);
      parent.children.push(item); // 子节点挂载
    }
  });

  return treeData;
}

// 首字母大小
export function titleCase(str) {
  return str.replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
}

// 下划转驼峰
export function camelCase(str) {
  return str.replace(/_[a-z]/g, (str1) => str1.substr(-1).toUpperCase());
}

// 转换字符串，undefined,null等转化为""
export function parseStrEmpty(str) {
  if (!str || str == "undefined" || str == "null") {
    return "";
  }
  return str;
}
