(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{874:function(e,o,t){"use strict";t.r(o);var r=t(1),v=Object(r.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"docker-高级网络配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker-高级网络配置"}},[e._v("#")]),e._v(" Docker 高级网络配置")]),e._v(" "),t("blockquote",[t("p",[e._v("注意：本章属于 "),t("code",[e._v("Docker")]),e._v(" 高级配置，如果您是初学者，您可以暂时跳过本章节，直接学习 "),t("code",[e._v("Docker Compose")]),e._v(" 一节。")])]),e._v(" "),t("p",[e._v("本章将介绍 Docker 的一些高级网络配置和选项。")]),e._v(" "),t("p",[e._v("当 Docker 启动时，会自动在主机上创建一个 "),t("code",[e._v("docker0")]),e._v(" 虚拟网桥，实际上是 Linux 的一个 bridge，可以理解为一个软件交换机。它会在挂载到它的网口之间进行转发。")]),e._v(" "),t("p",[e._v("同时，Docker 随机分配一个本地未占用的私有网段（在 "),t("a",{attrs:{href:"http://tools.ietf.org/html/rfc1918",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC1918"),t("OutboundLink")],1),e._v(" 中定义）中的一个地址给 "),t("code",[e._v("docker0")]),e._v(" 接口。比如典型的 "),t("code",[e._v("172.17.42.1")]),e._v("，掩码为 "),t("code",[e._v("255.255.0.0")]),e._v("。此后启动的容器内的网口也会自动分配一个同一网段（"),t("code",[e._v("172.17.0.0/16")]),e._v("）的地址。")]),e._v(" "),t("p",[e._v("当创建一个 Docker 容器的时候，同时会创建了一对 "),t("code",[e._v("veth pair")]),e._v(" 接口（当数据包发送到一个接口时，另外一个接口也可以收到相同的数据包）。这对接口一端在容器内，即 "),t("code",[e._v("eth0")]),e._v("；另一端在本地并被挂载到 "),t("code",[e._v("docker0")]),e._v(" 网桥，名称以 "),t("code",[e._v("veth")]),e._v(" 开头（例如 "),t("code",[e._v("vethAQI2QT")]),e._v("）。通过这种方式，主机可以跟容器通信，容器之间也可以相互通信。Docker 就创建了在主机和所有容器之间一个虚拟共享网络。")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://funtl.com/assets/network.png",alt:"Docker 网络"}})]),e._v(" "),t("p",[e._v("接下来的部分将介绍在一些场景中，Docker 所有的网络定制配置。以及通过 Linux 命令来调整、补充、甚至替换 Docker 默认的网络配置。")])])}),[],!1,null,null,null);o.default=v.exports}}]);