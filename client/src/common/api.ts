import { request } from "./request";

export const getConsoleList = async () => {
  return await request(
    {
      url: "whistle.devtool/cgi-bin/console/list",
      type: "get",
      mode: "cancel",
    },
    {}
  );
}


export const clearConsoleList = async () => {
  return await request(
    {
      url: "whistle.devtool/cgi-bin/console/clear",
      type: "get",
      mode: "cancel",
    },
    {}
  );
}
