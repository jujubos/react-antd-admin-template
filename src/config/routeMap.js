import Loadable from 'react-loadable';
import Loading from '@/components/Loading'
const Dashboard = Loadable({loader: () => import(/*webpackChunkName:'Dashboard'*/'@/views/dashboard'),loading: Loading});
const Doc = Loadable({loader: () => import(/*webpackChunkName:'Doc'*/'@/views/doc'),loading: Loading});
const Guide = Loadable({loader: () => import(/*webpackChunkName:'Guide'*/'@/views/guide'),loading: Loading});
const Explanation = Loadable({loader: () => import(/*webpackChunkName:'Explanation'*/'@/views/permission'),loading: Loading});
const AdminPage = Loadable({loader: () => import(/*webpackChunkName:'AdminPage'*/'@/views/permission/adminPage'),loading: Loading});
const GuestPage = Loadable({loader: () => import(/*webpackChunkName:'GuestPage'*/'@/views/permission/guestPage'),loading: Loading});
const EditorPage = Loadable({loader: () => import(/*webpackChunkName:'EditorPage'*/'@/views/permission/editorPage'),loading: Loading});
const RichTextEditor = Loadable({loader: () => import(/*webpackChunkName:'RichTextEditor'*/'@/views/components-demo/richTextEditor'),loading: Loading});
const Markdown = Loadable({loader: () => import(/*webpackChunkName:'Markdown'*/'@/views/components-demo/Markdown'),loading: Loading});
const Draggable = Loadable({loader: () => import(/*webpackChunkName:'Draggable'*/'@/views/components-demo/draggable'),loading: Loading});
const KeyboardChart = Loadable({loader: () => import(/*webpackChunkName:'KeyboardChart'*/'@/views/charts/keyboard'),loading: Loading});
const LineChart = Loadable({loader: () => import(/*webpackChunkName:'LineChart'*/'@/views/charts/line'),loading: Loading});
const MixChart = Loadable({loader: () => import(/*webpackChunkName:'MixChart'*/'@/views/charts/mixChart'),loading: Loading});
const Menu1_1 = Loadable({loader: () => import(/*webpackChunkName:'Menu1_1'*/'@/views/nested/menu1/menu1-1'),loading: Loading});
const Menu1_2_1 = Loadable({loader: () => import(/*webpackChunkName:'Menu1_2_1'*/'@/views/nested/menu1/menu1-2/menu1-2-1'),loading: Loading});
const Table = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/views/table'),loading: Loading});
const ExportExcel = Loadable({loader: () => import(/*webpackChunkName:'ExportExcel'*/'@/views/excel/exportExcel'),loading: Loading});
const UploadExcel = Loadable({ loader: () => import(/*webpackChunkName:'UploadExcel'*/'@/views/excel/uploadExcel'),loading: Loading });
const Zip = Loadable({loader: () => import(/*webpackChunkName:'Zip'*/'@/views/zip'),loading: Loading});
const Clipboard = Loadable({loader: () => import(/*webpackChunkName:'Clipboard'*/'@/views/clipboard'),loading: Loading});
const Error404 = Loadable({loader: () => import(/*webpackChunkName:'Error404'*/'@/views/error/404'),loading: Loading});
const User = Loadable({loader: () => import(/*webpackChunkName:'User'*/'@/views/user'),loading: Loading});
const About = Loadable({loader: () => import(/*webpackChunkName:'About'*/'@/views/about'),loading: Loading});
const Bug = Loadable({loader: () => import(/*webpackChunkName:'Bug'*/'@/views/bug'),loading: Loading});
/* sandy-chain */
/* blockchain */
const Display = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/views/sandy-chain/blockchain/display'),loading: Loading});
const BlockInfo = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/views/sandy-chain/blockchain/blockinfo'),loading: Loading});
const TxInfo = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/views/sandy-chain/blockchain/txinfo'),loading: Loading});
const NetInfo = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/views/sandy-chain/blockchain/netinfo'),loading: Loading});
const ActiveUser = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/views/sandy-chain/blockchain/active-user'),loading: Loading});
/* log */
const Overview = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/views/sandy-chain/log/overview'),loading: Loading});
const AlertInfo = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/views/sandy-chain/log/alert-info'),loading: Loading});
const TamperProtection = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/views/sandy-chain/log/tamper-protection'),loading: Loading});
const Retrive = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/views/sandy-chain/log/retrieve'),loading: Loading});
/* tokoin */
const PermissionDisplay = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/views/sandy-chain/tokoin/permission/display'),loading: Loading});
const PermissionOperate = Loadable({loader: () => import(/*webpackChunkName:'Table'*/'@/views/sandy-chain/tokoin/permission/operate'),loading: Loading});

export default [
  { path: "/dashboard", component: Dashboard, roles: ["admin","editor","guest"] },
  { path: "/doc", component: Doc, roles: ["admin","editor","guest"] },
  { path: "/guide", component: Guide, roles: ["admin","editor"] },
  { path: "/permission/explanation", component: Explanation, roles: ["admin"] },
  { path: "/permission/adminPage", component: AdminPage, roles: ["admin"] },
  { path: "/permission/guestPage", component: GuestPage, roles: ["guest"] },
  { path: "/permission/editorPage", component: EditorPage, roles: ["editor"] },
  { path: "/components/richTextEditor", component: RichTextEditor, roles: ["admin","editor"] },
  { path: "/components/Markdown", component: Markdown, roles: ["admin","editor"] },
  { path: "/components/draggable", component: Draggable, roles: ["admin","editor"] },
  { path: "/charts/keyboard", component: KeyboardChart, roles: ["admin","editor"] },
  { path: "/charts/line", component: LineChart, roles: ["admin","editor"] },
  { path: "/charts/mix-chart", component: MixChart, roles: ["admin","editor"] },
  { path: "/nested/menu1/menu1-1", component: Menu1_1, roles: ["admin","editor"] },
  { path: "/nested/menu1/menu1-2/menu1-2-1", component: Menu1_2_1, roles: ["admin","editor"] },
  { path: "/table", component: Table, roles: ["admin","editor"] },
  { path: "/excel/export", component: ExportExcel, roles: ["admin","editor"] },
  { path: "/excel/upload", component: UploadExcel, roles: ["admin","editor"] },
  { path: "/zip", component: Zip, roles: ["admin","editor"] },
  { path: "/clipboard", component: Clipboard, roles: ["admin","editor"] },
  { path: "/user", component: User, roles: ["admin"] },
  { path: "/about", component: About, roles: ["admin", "editor", "guest"] },
  { path: "/bug", component: Bug, roles: ["admin"] },
  { path: "/error/404", component: Error404 },
  /* sandy-chain */
  /* blockchain */
  { path: "/sandychain/blockchain/display", component: Display },
  { path: "/sandychain/blockchain/blockinfo", component: BlockInfo },
  { path: "/sandychain/blockchain/txinfo", component: TxInfo },
  { path: "/sandychain/blockchain/netinfo", component: NetInfo },
  { path: "/sandychain/blockchain/active-user", component: ActiveUser },
  /* log */
  { path: "/sandychain/log/overview", component: Overview },
  { path: "/sandychain/log/alert-info", component: AlertInfo },
  { path: "/sandychain/log/tamper-protection", component: TamperProtection },
  { path: "/sandychain/log/retrieve", component: Retrive },
  /* tokoin */
  { path: "/sandychain/tokoin/permission/display", component: PermissionDisplay },
  { path: "/sandychain/tokoin/permission/operate", component: PermissionOperate },
];
