// await this.$api("users", "show", {id: id});

export default async (req, res, next) => {
  try {
    let url = req._parsedUrl.pathname.replace(/^\/+|\/+$|\.+/g, "");

    url = url.split("/");

    const method = url.pop();
    const controller = url.slice(1).join("/");
    const api = require("../api/" + controller);
    const result = await api[method](req.params);

    res.end(JSON.stringify({ success: 1, result }));
  } catch(err) {
    console.error('Error. ', err);
    res.end(JSON.stringify({ success: 0 }));
  }
};

