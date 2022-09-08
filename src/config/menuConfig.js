/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "首页",
    path: "/dashboard",
    icon: "home",
    roles:["admin","editor","guest"]
  },
  {
    title: "引导页",
    path: "/guide",
    icon: "key",
    roles:["admin","editor"]
  },
  {
    title: "区块链",
    path: "/sandy-chain/blockchain",
    icon: "lock",
    children: [
      {
        title: "实时区块展示",
        path: "/sandychain/blockchain/display",
        roles:["admin"]
      },
      {
        title: "区块详细信息",
        path: "/sandychain/blockchain/blockinfo",
        roles:["admin"]
      },
      {
        title: "交易详细信息",
        path: "/sandychain/blockchain/txinfo",
        roles:["admin"]
      },
      {
        title: "链网络信息",
        path: "/sandychain/blockchain/netinfo",
        roles:["guest"]
      },
      {
        title: "最近活跃用户",
        path: "/sandychain/blockchain/active-user",
        roles:["editor"]
      },
    ],
  },
  {
    title: "日志防篡改",
    path: "/sandychain/log",
    icon: "appstore",
    roles:["admin","editor"],
    children: [
      {
        title: "日志概览",
        path: "/sandychain/log/overview",
        roles:["admin","editor"],
      },
      {
        title: "日志告警",
        path: "/sandychain/log/alert-info",
        roles:["admin","editor"],
      },
      {
        title: "日志篡改保护",
        path: "/sandychain/log/tamper-protection",
        roles:["admin","editor"],
      },
      {
        title: "日志检索",
        path: "/sandychain/log/retrieve",
        roles:["admin","editor"],
      },
    ],
  },
  {
    title: "Tokoin访问控制",
    path: "/sandychain/tokoin",
    icon: "area-chart",
    roles:["admin","editor"],
    children: [
      {
        title: "权限展示",
        path: "/sandychain/tokoin/permission/display",
        roles:["admin","editor"],
      },
      {
        title: "权限操作",
        path: "/sandychain/tokoin/permission/operate",
        roles:["admin","editor"],
      },
    ],
  },
];
export default menuList;
