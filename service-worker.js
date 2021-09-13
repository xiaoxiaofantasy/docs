/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a1bf84c0b9411566c2ae213d906c429f"
  },
  {
    "url": "AI智能配置/index.html",
    "revision": "37b88d04324240ac7e58e48c5969955b"
  },
  {
    "url": "AI智能配置/在线沟通.html",
    "revision": "2944461bdb12ac6a8e3be61a5f2d1d10"
  },
  {
    "url": "AI智能配置/智能问答.html",
    "revision": "5c7130d7e31bcfcff82b7b93638f88f1"
  },
  {
    "url": "AI智能配置/留言管理.html",
    "revision": "368e49d308da60bd4b5af427c7f6054b"
  },
  {
    "url": "AI智能配置/直播管理.html",
    "revision": "8ccdc10a9347019704bd6e0f0df43489"
  },
  {
    "url": "assets/css/0.styles.066b16da.css",
    "revision": "f5ac1849717984e49c9b15ef92c0ee5c"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/showinfo.png",
    "revision": "3ec3b6fabf00631c71409120d1366cdc"
  },
  {
    "url": "assets/js/10.2f1f5cfa.js",
    "revision": "adfceab2e9103b867487a0314c719cf5"
  },
  {
    "url": "assets/js/11.ae017013.js",
    "revision": "3ed99f9fc84c18a78719d62f084824a3"
  },
  {
    "url": "assets/js/12.91f67481.js",
    "revision": "8e1e6c8b3d0daf5f8e3c76fa3b6b40dd"
  },
  {
    "url": "assets/js/13.60bfad0c.js",
    "revision": "7af46651c8c748406788cbb26e97989a"
  },
  {
    "url": "assets/js/14.35b2561b.js",
    "revision": "30d22941770b16d933ef5fb47941611e"
  },
  {
    "url": "assets/js/15.ea098aa3.js",
    "revision": "df89a991239f7cf98124cf15e9d88aa8"
  },
  {
    "url": "assets/js/16.60da1996.js",
    "revision": "5aa8ff2e7b0e7253c95b5fd10452afad"
  },
  {
    "url": "assets/js/17.b573a84d.js",
    "revision": "67370f2e29798673a4bca4bc60630189"
  },
  {
    "url": "assets/js/18.0e73e998.js",
    "revision": "513a86a5f3afde0cba7b1bce6525ab7b"
  },
  {
    "url": "assets/js/19.c8b4ea81.js",
    "revision": "f123cd72930cf8ac5fce849c6f01daaa"
  },
  {
    "url": "assets/js/2.33abcc9f.js",
    "revision": "00f8e37c2d2fd740b5a3e1af031f25e5"
  },
  {
    "url": "assets/js/20.2515aade.js",
    "revision": "42bd142726370bcc38006d0be8571500"
  },
  {
    "url": "assets/js/21.742703fd.js",
    "revision": "43c0d37557b26e5d55cbe266f364af03"
  },
  {
    "url": "assets/js/22.6711eac0.js",
    "revision": "35d5e6ef15992a5a96326a789ee9ccdc"
  },
  {
    "url": "assets/js/23.9411fa86.js",
    "revision": "5723c374779802e96d3c9866c31dd4a5"
  },
  {
    "url": "assets/js/3.33243b81.js",
    "revision": "562d2e7e3b3c64758ebdd6ed3f3d71b5"
  },
  {
    "url": "assets/js/4.bd597365.js",
    "revision": "c8c376e5a7e395a1549a4de58b326324"
  },
  {
    "url": "assets/js/5.e4384fb4.js",
    "revision": "25be569864dfedc9664b0cd202f4a472"
  },
  {
    "url": "assets/js/6.cefaecfc.js",
    "revision": "d678d5a1600695c071497a192d7cc493"
  },
  {
    "url": "assets/js/7.4da6f25d.js",
    "revision": "41807429f524fb7742ec2e3c17cdf64a"
  },
  {
    "url": "assets/js/8.843a773d.js",
    "revision": "aedef18df9445317a1e2490be9abfdf3"
  },
  {
    "url": "assets/js/9.65b0a71a.js",
    "revision": "b6173d302439cbbba31adf1a8ac2113b"
  },
  {
    "url": "assets/js/app.8226a291.js",
    "revision": "abaa46584da6973618457b248e90e10a"
  },
  {
    "url": "bujumoban/add-template.png",
    "revision": "5756227cdb6a27586e7833825724a385"
  },
  {
    "url": "bujumoban/add-templatewindows.png",
    "revision": "599721c840cbf3cdedd6e66a9b63e849"
  },
  {
    "url": "bujumoban/delete.png",
    "revision": "588e2d78ae23ace2698cc8812926dfd6"
  },
  {
    "url": "bujumoban/edit.png",
    "revision": "8a27be8474cadf127ee012a470fdec6e"
  },
  {
    "url": "bujumoban/query.png",
    "revision": "e9489569ed57df36331059ad6dd197c1"
  },
  {
    "url": "bujumoban/select-all.png",
    "revision": "6f7d90f70833ab77ed4fa1e7241c7f7a"
  },
  {
    "url": "changjingbianji/add-mark.png",
    "revision": "e3261feb3fad49d6781e1c29bfbed138"
  },
  {
    "url": "changjingbianji/add-point.png",
    "revision": "5fa6f296c790d1d976bf37b327d899b6"
  },
  {
    "url": "changjingbianji/add-scene.png",
    "revision": "89ebd85909ce82aa50add7969dff903b"
  },
  {
    "url": "changjingbianji/custom-logo.png",
    "revision": "d4daac3b40330d8387e9fa3b48c15cad"
  },
  {
    "url": "changjingbianji/custom-logo1.png",
    "revision": "f431578734c0970745d344d5b2279422"
  },
  {
    "url": "changjingbianji/file-point.png",
    "revision": "0348d7123090b12ddc9612e16e247372"
  },
  {
    "url": "changjingbianji/FOV-view.png",
    "revision": "1f480d57cb1b33d51869665d29939b29"
  },
  {
    "url": "changjingbianji/H5-source.png",
    "revision": "1bc3126991c116d81e2e654bd485ee5d"
  },
  {
    "url": "changjingbianji/horizontal-view.png",
    "revision": "9788ad2ae9a2acb5ecd1aa69e15f0b75"
  },
  {
    "url": "changjingbianji/initial-view.png",
    "revision": "d49560194a039451b106f40568a83cd9"
  },
  {
    "url": "changjingbianji/loading-interface.png",
    "revision": "745e968618e6ae465e3881e27f90c5c6"
  },
  {
    "url": "changjingbianji/loading-interface1.png",
    "revision": "c54b816fdaf68249a3c00dadbcbc6eb7"
  },
  {
    "url": "changjingbianji/mark-list.png",
    "revision": "92ba68def6467cdeda6d440a66bf8066"
  },
  {
    "url": "changjingbianji/new.png",
    "revision": "476256ac6c6cdc33a51d08f7a9d21605"
  },
  {
    "url": "changjingbianji/open.png",
    "revision": "29a11275f64268c1b8d9ce0852818c12"
  },
  {
    "url": "changjingbianji/picture-point.png",
    "revision": "ed5a523d04c3e0e18dca26cc8620506f"
  },
  {
    "url": "changjingbianji/point-edit.png",
    "revision": "16d5a0906d9f0dd24ab4e614073ee830"
  },
  {
    "url": "changjingbianji/point-list.png",
    "revision": "64037cb2153a0e0cc12b8a2471d503a2"
  },
  {
    "url": "changjingbianji/point-page.png",
    "revision": "0f1dad212f780d72da9fd82bc07f39b6"
  },
  {
    "url": "changjingbianji/point-type.png",
    "revision": "1be6026d5db38adbcf5fc949b309fa04"
  },
  {
    "url": "changjingbianji/point.png",
    "revision": "4bdda373c5c5eff84f9821d3a642b827"
  },
  {
    "url": "changjingbianji/preview.png",
    "revision": "8e85109410904ea2cb2d89d9f2ac8bb3"
  },
  {
    "url": "changjingbianji/project-list.png",
    "revision": "4a3e00c0acc3161873f97a8e21893da1"
  },
  {
    "url": "changjingbianji/project-name.png",
    "revision": "0e49bfc851dac3d4e405b249c1199dd1"
  },
  {
    "url": "changjingbianji/restore-default-view.png",
    "revision": "6d7186c1f30d3dcbc4ed1997eb5abe18"
  },
  {
    "url": "changjingbianji/sand-background.png",
    "revision": "66840ce843a60d3605ab37a0eb250b88"
  },
  {
    "url": "changjingbianji/save.png",
    "revision": "ea6272a512b58749d1a00916e4c91122"
  },
  {
    "url": "changjingbianji/scene-delete.png",
    "revision": "d786573048657da4d503875dce11f225"
  },
  {
    "url": "changjingbianji/scene-edit.png",
    "revision": "85b11b08dc97a417bcbb3c5c16688fe2"
  },
  {
    "url": "changjingbianji/scene-move.png",
    "revision": "2975f889d9b36d2648e9af2a2fc8b4ae"
  },
  {
    "url": "changjingbianji/scene-name.png",
    "revision": "8a963a7ec054e5d6ab4e166da96487e9"
  },
  {
    "url": "changjingbianji/scene-replace.png",
    "revision": "7761a899a5a9fc12d89a56aa6f68c00b"
  },
  {
    "url": "changjingbianji/scene-switch.png",
    "revision": "d2f568750a3eb771fd02cd8b212143a1"
  },
  {
    "url": "changjingbianji/scene-type.png",
    "revision": "ffc3b35dbc5e12e91b1dbcb72a7ca030"
  },
  {
    "url": "changjingbianji/scene-voice.png",
    "revision": "5af810c432ea6ab67f244ff95b4e1aa9"
  },
  {
    "url": "changjingbianji/select-icon.png",
    "revision": "21194a44247ff01dfdff2c538094dd7a"
  },
  {
    "url": "changjingbianji/show-sand.png",
    "revision": "c7ecb3b5b6fd967bebeb296c6ad41cfb"
  },
  {
    "url": "changjingbianji/title.png",
    "revision": "69ffb6896ecf4b30ddb7ca781e7cd23a"
  },
  {
    "url": "changjingbianji/vertical-view.png",
    "revision": "99534ece2c288d9cf0e8f01d6f3c4f2a"
  },
  {
    "url": "changjingbianji/video-point.png",
    "revision": "20af070cf623f1339147f0f02534fa7f"
  },
  {
    "url": "changjingbianji/view-setting.png",
    "revision": "5d657edffb1d85469b4ca675bdba4c1a"
  },
  {
    "url": "changjingbianji/virtual-human.png",
    "revision": "122e661ee92ad3dfeaa29e7b8933aeb5"
  },
  {
    "url": "changjingbianji/virtual-human1.png",
    "revision": "138c0951c023a49313f37bab98da8c9d"
  },
  {
    "url": "changjingbianji/virtual-human2.png",
    "revision": "f0fed16ba2e332837c286963e9a0abe6"
  },
  {
    "url": "changjingbianji/web-point.png",
    "revision": "f733e9abb47f538b699620d6c35b2f5a"
  },
  {
    "url": "changjingbianji/word-point.png",
    "revision": "bc2b811761486ab3fbeb8ee5e5d2835d"
  },
  {
    "url": "guide.html",
    "revision": "22ec9b925c17436cfda08cdcd099a943"
  },
  {
    "url": "icons/128.png",
    "revision": "b9e8e8bd53e78f686807ceb608ee21f9"
  },
  {
    "url": "icons/144.png",
    "revision": "738de2a6a7c4f8338550b04b86997988"
  },
  {
    "url": "icons/192.png",
    "revision": "267d81bc8afcb2c8f37a392211c9872f"
  },
  {
    "url": "icons/256.png",
    "revision": "db92165cf4efd732b10a1078061f2ea7"
  },
  {
    "url": "icons/512.png",
    "revision": "fabfef7a0e373b264c95be69056a6803"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "738de2a6a7c4f8338550b04b86997988"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "738de2a6a7c4f8338550b04b86997988"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "e72246db25e3d82669082730ce0095e6"
  },
  {
    "url": "index.html",
    "revision": "a136eb702581920c53905ddaa33d064a"
  },
  {
    "url": "liuyanguanli/add-message.png",
    "revision": "6b0cfe65704d5a1501d170dc590f56f0"
  },
  {
    "url": "liuyanguanli/delete.png",
    "revision": "32c64b0600b0fff20b8ac7d46caa16fc"
  },
  {
    "url": "liuyanguanli/list-windows.png",
    "revision": "7c08cd29b7f52375236ce297715be87a"
  },
  {
    "url": "liuyanguanli/message-information.png",
    "revision": "f4dcba0cb64e7a672d5c45bb2bb5b7fc"
  },
  {
    "url": "liuyanguanli/message-list.png",
    "revision": "a8496b45bcba0e414c25052ac2af2c0a"
  },
  {
    "url": "liuyanguanli/message-windows.png",
    "revision": "bc6bfb3129ec7a4ffedec86686f10f84"
  },
  {
    "url": "liuyanguanli/query.png",
    "revision": "888c581645a74eb502899252569adefb"
  },
  {
    "url": "ordinary/yunhuizhan.png",
    "revision": "58de70ce9712b47067907e8c505e1562"
  },
  {
    "url": "ordinary/云汇展2.png",
    "revision": "9146e2acc595a4ee056d3755dfd97935"
  },
  {
    "url": "ordinary/云汇展3.jpg",
    "revision": "e2740c3a2a2ad9d42a75043cf066c773"
  },
  {
    "url": "rizhiguanli/log.png",
    "revision": "86458f203a3a577bb0212ae79752e05e"
  },
  {
    "url": "rizhiguanli/query.png",
    "revision": "8c43033ce0754e9c1915617702519c73"
  },
  {
    "url": "sucaiguanli/add-material.png",
    "revision": "134e98c227acad958193fa46cb6162f4"
  },
  {
    "url": "sucaiguanli/all-select.png",
    "revision": "c4f14d8436b7df4d4168a9e29e1ef834"
  },
  {
    "url": "sucaiguanli/delete.png",
    "revision": "0f3485342fb27beb44eb0f9e9b239b1a"
  },
  {
    "url": "sucaiguanli/H5-text.png",
    "revision": "ac3fb514053dd8ea4244f6ee2c430ab8"
  },
  {
    "url": "sucaiguanli/query.png",
    "revision": "acc314632dd6c24945de2ceec7b5ee77"
  },
  {
    "url": "sucaiguanli/text-edit.png",
    "revision": "f0c0a23b68f8c290ade728036b0c2756"
  },
  {
    "url": "sucaiguanli/upload-material.png",
    "revision": "aa7b44317ab7e2ffe4fd6dac32e9b115"
  },
  {
    "url": "zaixiangoutong/add-meeting-windows.png",
    "revision": "c88454592f8cf84c8226d5899e27e4ff"
  },
  {
    "url": "zaixiangoutong/add-meeting.png",
    "revision": "1fea5bff0af2c1758f4e2f476e3109a4"
  },
  {
    "url": "zaixiangoutong/meeting-information.png",
    "revision": "3932a5732c656e33452aceeeaaefcb8a"
  },
  {
    "url": "zaixiangoutong/meeting-list.png",
    "revision": "132f4763c14b810efb70da7c5334b2d5"
  },
  {
    "url": "zaixiangoutong/query.png",
    "revision": "d2d061ee567a33197fa5080bff96c94a"
  },
  {
    "url": "zaixiangoutong/reservation-information.png",
    "revision": "47db70632c7fcc4b8ffa60ef28db317a"
  },
  {
    "url": "zhanghaoguanli/account.png",
    "revision": "3d747ed736614949decdf89d0a4ae618"
  },
  {
    "url": "zhantaiguanli/add-showcase.png",
    "revision": "5214c65445b9112eb1f81912fcb63e1e"
  },
  {
    "url": "zhantaiguanli/all-delete.png",
    "revision": "962577d1a2a9d2d2175ca6d2e8c2b963"
  },
  {
    "url": "zhantaiguanli/close.png",
    "revision": "5367008357a3c10dedc67a5fbe4dc36f"
  },
  {
    "url": "zhantaiguanli/configure.png",
    "revision": "38922a73c14d82610c6801b79ced1b6b"
  },
  {
    "url": "zhantaiguanli/delete.png",
    "revision": "05fa5dcbf4494cd390d54a137899dd73"
  },
  {
    "url": "zhantaiguanli/edit.png",
    "revision": "62051870d684e6d20b1ebfd13a151d5f"
  },
  {
    "url": "zhantaiguanli/preview-windows.png",
    "revision": "1864407e108fef34310b4a30566503f9"
  },
  {
    "url": "zhantaiguanli/preview.png",
    "revision": "071320520f49c66897df199b2bb7eb3e"
  },
  {
    "url": "zhantaiguanli/query.png",
    "revision": "e5e4697b431bcf331b0b9aaeea0aaaf8"
  },
  {
    "url": "zhantaiguanli/showcase-windows.png",
    "revision": "fdf6b000d97e3a42aa3a5a8442cc6b24"
  },
  {
    "url": "zhiboguanli/add-live.png",
    "revision": "b897351a0d070d4ffd40915999233906"
  },
  {
    "url": "zhiboguanli/delete.png",
    "revision": "b58b07cb31502e7fd62621ca1be91826"
  },
  {
    "url": "zhiboguanli/edit.png",
    "revision": "fc1d13e3ef6d8b74d89fe3e88beb927c"
  },
  {
    "url": "zhiboguanli/new-live.png",
    "revision": "62ccdd0f130ce97e907a6877a5152c18"
  },
  {
    "url": "zhiboguanli/open.png",
    "revision": "5d4ce04fef15dded7c89aa227b5291f2"
  },
  {
    "url": "zhiboguanli/query.png",
    "revision": "c561ecdb70db388ad4c3725f963a5ccf"
  },
  {
    "url": "zhinengwenda/add-auto-answer.png",
    "revision": "d246bb0ef7f55d9ed0b1abb3b83982a5"
  },
  {
    "url": "zhinengwenda/answer-information.png",
    "revision": "4a1cde61200342243b978713c6b7618e"
  },
  {
    "url": "zhinengwenda/check.png",
    "revision": "6dcc5704a64ad14d69555decbf2c7f40"
  },
  {
    "url": "zhinengwenda/consult-list.png",
    "revision": "d7fc2728044ee607c98db3c73b7d3e57"
  },
  {
    "url": "zhinengwenda/convenient-reply.png",
    "revision": "9fff47fafbca170b3ede202ced4f013f"
  },
  {
    "url": "zhinengwenda/delete.png",
    "revision": "de778f3c50c1c6e19d742730226a90ef"
  },
  {
    "url": "zhinengwenda/edit-windows.png",
    "revision": "17f9b44638c8804621647dda0ebd1288"
  },
  {
    "url": "zhinengwenda/edit.png",
    "revision": "c7c086db148007accfb9aef3e68315b1"
  },
  {
    "url": "zhinengwenda/manual-reply.png",
    "revision": "8ba71448be4c38a14593400888a8c351"
  },
  {
    "url": "zhinengwenda/new-auto-answer.png",
    "revision": "4d3c57d119a5c49a0f6f8602c047a8ed"
  },
  {
    "url": "zhinengwenda/query.png",
    "revision": "c20f70e2d5f5c9084370cf5921aa640f"
  },
  {
    "url": "zhinengwenda/query1.png",
    "revision": "8e1d15b238d887759e9c55cc3d3cae77"
  },
  {
    "url": "其他/index.html",
    "revision": "3f3b77fdf1d438408b2a7719052033c5"
  },
  {
    "url": "其他/日志管理.html",
    "revision": "516d1efbd2564fd3a437f9e4bacac45d"
  },
  {
    "url": "其他/账号管理.html",
    "revision": "ec4c41ffb9a9ba7e2678233ea354e8f8"
  },
  {
    "url": "展台配置/index.html",
    "revision": "fc24861caed3ef41396e2e13d06bb870"
  },
  {
    "url": "展台配置/场景编辑.html",
    "revision": "5488c1655d30e53948080cf8e2edb17c"
  },
  {
    "url": "展台配置/展台管理.html",
    "revision": "9dc1040b6f5c4cf150a023e894f2b29f"
  },
  {
    "url": "展台配置/布局模板.html",
    "revision": "5b58bd5ee451b80c1d6319c8c22995dc"
  },
  {
    "url": "展台配置/素材管理.html",
    "revision": "961dc2c221391d75978b662463320525"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
