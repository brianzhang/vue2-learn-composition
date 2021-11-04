/**
 * 根据文字生成rgba颜色值
 * @param {*} name
 */
export const extractColorByName = (name) => {
  const temp = [];
  for (let i = 0; i < name.length; i++) {
    temp.push(parseInt(name[i].charCodeAt(0), 10).toString(16));
  }
  return `#0${temp.slice(0, 4).join('').slice(0, 4)}0`;
};
