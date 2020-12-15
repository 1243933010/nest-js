export function saveRequest(req, res, next) {
    console.log(`全局保存方法触发...`);
    next();
  };