const curFilterList = [
  {
    label: "姓名",
    code: "name",
    value: "",
    placeholder: "请输入姓名",
  },
  {
    label: "年龄",
    code: "age",
    value: "",
    placeholder: "请输入年龄",
  },
  {
    label: "邮箱",
    code: "email",
    value: "",
    placeholder: "请输入邮箱",
  },
];
const columnList = [
  {
    code: "user_id",
    label: "用户编号",
    sort: 0,
  },
  {
    code: "user_name",
    label: "用户名称",
    sort: 0,
  },
  {
    code: "nick_name",
    label: "昵称",
    sort: 0,
  },
  {
    code: "create_time",
    label: "创建日期",
    sort: 1,
  },
];
const tableList = [
  {
    user_id: "001",
    user_name: "李稳",
    nick_name: "liwen",
    create_time: "2025-02-27",
    status: "正常",
  },
  {
    user_id: "002",
    user_name: "赵梦",
    nick_name: "zhaomeng",
    create_time: "2025-02-26",
    status: "正常",
  },
];
export { curFilterList, columnList, tableList };
