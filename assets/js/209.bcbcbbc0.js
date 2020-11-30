(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{690:function(t,a,_){"use strict";_.r(a);var v=_(1),s=Object(v.a)({},(function(){var t=this,a=t.$createElement,_=t._self._c||a;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"http协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http协议"}},[t._v("#")]),t._v(" HTTP协议")]),t._v(" "),_("h2",{attrs:{id:"一、网络基础"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、网络基础"}},[t._v("#")]),t._v(" 一、网络基础")]),t._v(" "),_("h3",{attrs:{id:"_1、tcp-ip协议族各层作用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、tcp-ip协议族各层作用"}},[t._v("#")]),t._v(" 1、TCP/IP协议族各层作用")]),t._v(" "),_("h4",{attrs:{id:"应用层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#应用层"}},[t._v("#")]),t._v(" 应用层")]),t._v(" "),_("p",[t._v("决定了向用户提供应用服务时通信的活动")]),t._v(" "),_("p",[t._v("比如：FTP、DNS、HTTP")]),t._v(" "),_("h4",{attrs:{id:"传输层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#传输层"}},[t._v("#")]),t._v(" 传输层")]),t._v(" "),_("p",[t._v("提供数据传输")]),t._v(" "),_("p",[t._v("比如：TCP、UDP")]),t._v(" "),_("h4",{attrs:{id:"网络层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#网络层"}},[t._v("#")]),t._v(" 网络层")]),t._v(" "),_("p",[t._v("处理在网络上流动的数据包（网络传输最小单位）")]),t._v(" "),_("p",[t._v("比如IP协议")]),t._v(" "),_("h4",{attrs:{id:"链路层"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#链路层"}},[t._v("#")]),t._v(" 链路层")]),t._v(" "),_("p",[t._v("用来处理连接网络的硬件部分")]),t._v(" "),_("h3",{attrs:{id:"_2、tcp-ip-通信传输流"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、tcp-ip-通信传输流"}},[t._v("#")]),t._v(" 2、TCP/IP 通信传输流")]),t._v(" "),_("p",[t._v("发送端从应用层往下走，接收端则往应用层往上走\n"),_("img",{attrs:{src:"public/img/http/http_trans.jpg",alt:""}}),t._v("\n发送端每经过一层打上一个该层的首部信息  -> 封装encapsulate")]),t._v(" "),_("p",[t._v("接收端每经过一层把首部信息消去")]),t._v(" "),_("p",[_("img",{attrs:{src:"public/img/http/http_trans2.jpg",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"_3、关系密切的ip、tcp、dns协议-3次握手"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、关系密切的ip、tcp、dns协议-3次握手"}},[t._v("#")]),t._v(" 3、关系密切的IP、TCP、DNS协议（3次握手）")]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[t._v("\nIP协议的作用是把各种数据包传送给对方。 IP地址和MAC地址。 ARP协议（解析地址的协议"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("。\n\nTCP协议把数据准确的传给对方，可以分割大数据。 为了准确传输，采用三次握手策略。\n\n*三次握手（three-way handshaking）\n发送端发送一个带有SYN"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("synchronize"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("标志的数据包给对方\n接收端收到后，回传一个带有SYN/ACK标志的数据包表示确认信息\n发送端再回传一个ACK"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("acknowledgement"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("标志的数据包，代表握手结束\n\nDNS服务提供域名到IP地址之间的解析服务  发送端发送http://t66y.com/，DNS解析对应一个IP地址，然后访问服务器\n\n")])])]),_("p",[_("img",{attrs:{src:"public/img/http/three_way_handshanking.jpg",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"_4、uri和url"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、uri和url"}},[t._v("#")]),t._v(" 4、URI和URL")]),t._v(" "),_("p",[t._v("http://t66y.com/ => URL 统一资源定位符(Uniform Resource Locator)")]),t._v(" "),_("p",[t._v("http://t66y.com/index.php  => URI  统一资源标识符(Uniform Resource Idenitifier)")]),t._v(" "),_("p",[t._v("绝对URI格式\n"),_("img",{attrs:{src:"public/img/http/uri.jpg",alt:""}})]),t._v(" "),_("h2",{attrs:{id:"二、简单的http协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、简单的http协议"}},[t._v("#")]),t._v(" 二、简单的HTTP协议")]),t._v(" "),_("p",[t._v("客户端：请求访问文本或图像等资源的一端")]),t._v(" "),_("p",[t._v("服务端：提供资源响应的一端")]),t._v(" "),_("p",[_("img",{attrs:{src:"public/img/http/client1.jpg",alt:""}}),t._v(" "),_("img",{attrs:{src:"public/img/http/client2.jpg",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"_1、通过请求和响应的交换达成通信"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、通过请求和响应的交换达成通信"}},[t._v("#")]),t._v(" 1、通过请求和响应的交换达成通信")]),t._v(" "),_("p",[t._v("请求报文是由请求方法、请求URI、协议版本、可选的请求首部字段和内容实体构成\n"),_("img",{attrs:{src:"public/img/http/request.jpg",alt:""}})]),t._v(" "),_("p",[t._v("响应报文是由协议版本、状态码、状态码的原因短语、可选的响应首部字段和主体构成\n"),_("img",{attrs:{src:"public/img/http/response.jpg",alt:""}})]),t._v(" "),_("h3",{attrs:{id:"_2、http是一种无状态协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、http是一种无状态协议"}},[t._v("#")]),t._v(" 2、HTTP是一种无状态协议")]),t._v(" "),_("p",[t._v("使用HTTP协议，每当有新的请求发送，就会有新的响应产生")]),t._v(" "),_("p",[t._v("cookie可以保存状态")]),t._v(" "),_("h3",{attrs:{id:"_3、http方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、http方法"}},[t._v("#")]),t._v(" 3、HTTP方法")]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[t._v("\nGET：获取资源\nPOST：传输实体主体\nPUT：传输文件\nHEAD：获得报文首部\nDELETE：删除文件\nOPTIONS：询问支持的方法\n\n")])])]),_("h3",{attrs:{id:"_4、持久连接-keep-alive"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4、持久连接-keep-alive"}},[t._v("#")]),t._v(" 4、持久连接 keep-alive")]),t._v(" "),_("p",[t._v("HTTP/1.1默认持久连接")]),t._v(" "),_("p",[t._v("特点：只要任意一端没有明确提出断开连接，则保持TCP连接状态")]),t._v(" "),_("p",[t._v("好处：减少重复连接和断开的开销，减轻服务器的负载，减少响应时间，提高速度")]),t._v(" "),_("h3",{attrs:{id:"_5、cookie"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5、cookie"}},[t._v("#")]),t._v(" 5、cookie")]),t._v(" "),_("p",[t._v("Cookie技术通过在请求和响应报文中写入Cookie信息来控制客户端的状态   Set-Cookie")]),t._v(" "),_("h2",{attrs:{id:"三、http报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、http报文"}},[t._v("#")]),t._v(" 三、HTTP报文")]),t._v(" "),_("h3",{attrs:{id:"_2、用于http协议交互的信息称为http报文"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、用于http协议交互的信息称为http报文"}},[t._v("#")]),t._v(" 2、用于HTTP协议交互的信息称为HTTP报文")]),t._v(" "),_("p",[t._v("报文首部和报文主体是由回车符和换行符（CR+LF）来划分，报文主体可以没有")]),t._v(" "),_("p",[t._v("可以通过压缩来提升传输效率")]),t._v(" "),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[t._v("通用首部\nRequest URL:http://t66y.com/\nRequest Method:GET\nStatus Code:200 OK\nRemote Address:127.0.0.1:1086\nReferrer Policy:no-referrer-when-downgrade\n")])])]),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[t._v("请求报文\nGET / HTTP/1.1\nHost: t66y.com\nConnection: keep-alive\nCache-Control: max-age"),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\nUpgrade-Insecure-Requests: "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\nUser-Agent: Mozilla/5.0 "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Macintosh"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" Intel Mac OS X 10_12_3"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" AppleWebKit/537.36 "),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("KHTML, like Gecko"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Chrome/63.0.3239.132 Safari/537.36\nAccept: text/html,application/xhtml+xml,application/xml"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("q")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),t._v(",image/webp,image/apng,*/*"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("q")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.8")]),t._v("\nAccept-Encoding: gzip, deflate\nAccept-Language: zh-CN,zh"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("q")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.9")]),t._v("\nCookie: "),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("__cfduid")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("db7678b2090563fd2573d39bd6ea46ab21494210787"),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("227c9_lastfid")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("22")]),_("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("227c9_lastvisit")]),_("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("%091509547246%09%2Fthread0806.php%3Ffid%3D22%26search%3D%26page%3D661\nAlexaToolbar-ALX_NS_PH: AlexaToolbar/alx-4.0.1\n")])])]),_("div",{staticClass:"language-bash extra-class"},[_("pre",{pre:!0,attrs:{class:"language-bash"}},[_("code",[t._v("响应报文\nHTTP/1.1 "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" OK\nDate: Thu, 01 Feb "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("2018")]),t._v(" "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),t._v(":42:28 GMT\nContent-Type: text/html\nContent-Length: "),_("span",{pre:!0,attrs:{class:"token number"}},[t._v("920")]),t._v("\nConnection: keep-alive\nX-Powered-By: PHP/5.6.33\nVary: Accept-Encoding\nContent-Encoding: "),_("span",{pre:!0,attrs:{class:"token function"}},[t._v("gzip")]),t._v("\nServer: cloudflare\nCF-RAY: 3e64a5c607a313cb-LAX\n")])])]),_("h3",{attrs:{id:"_2、多部分对象集合"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、多部分对象集合"}},[t._v("#")]),t._v(" 2、多部分对象集合")]),t._v(" "),_("p",[t._v("MIME多用途因特网邮件扩展（Multipurpose Internet Mail Extensions）是允许邮件处理文本、图片、视频等的数据")]),t._v(" "),_("ul",[_("li",[t._v("multipart/form-data")])]),t._v(" "),_("p",[t._v("Web表单上传文件使用")]),t._v(" "),_("h2",{attrs:{id:"四、http状态码"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、http状态码"}},[t._v("#")]),t._v(" 四、HTTP状态码")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("状态码")]),t._v(" "),_("th",[t._v("英文描述")]),t._v(" "),_("th",[t._v("类别")]),t._v(" "),_("th",[t._v("原因短语")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("1XX")]),t._v(" "),_("td",[t._v("Informational")]),t._v(" "),_("td",[t._v("信息性")]),t._v(" "),_("td",[t._v("接收的请求正在处理")])]),t._v(" "),_("tr",[_("td",[t._v("2XX")]),t._v(" "),_("td",[t._v("Success")]),t._v(" "),_("td",[t._v("成功")]),t._v(" "),_("td",[t._v("请求正常处理完毕")])]),t._v(" "),_("tr",[_("td",[t._v("3XX")]),t._v(" "),_("td",[t._v("Redirection")]),t._v(" "),_("td",[t._v("重定向")]),t._v(" "),_("td",[t._v("需要进行附加操作已完成请求")])]),t._v(" "),_("tr",[_("td",[t._v("4XX")]),t._v(" "),_("td",[t._v("Client Error")]),t._v(" "),_("td",[t._v("客户端错误")]),t._v(" "),_("td",[t._v("服务器无法处理请求")])]),t._v(" "),_("tr",[_("td",[t._v("5XX")]),t._v(" "),_("td",[t._v("Server Error")]),t._v(" "),_("td",[t._v("服务器错误")]),t._v(" "),_("td",[t._v("服务器处理请求出错")])])])]),t._v(" "),_("p",[t._v("常见的状态码：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("状态码")]),t._v(" "),_("th",[t._v("英文描述")]),t._v(" "),_("th",[t._v("描述")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("200")]),t._v(" "),_("td",[t._v("ok")]),t._v(" "),_("td",[t._v("请求正常，响应信息会随方法不同而不同")])]),t._v(" "),_("tr",[_("td",[t._v("204")]),t._v(" "),_("td",[t._v("No Content")]),t._v(" "),_("td",[t._v("响应报文不含实体的主体部分")])]),t._v(" "),_("tr",[_("td",[t._v("206")]),t._v(" "),_("td",[t._v("partial Content")]),t._v(" "),_("td",[t._v("范围请求")])]),t._v(" "),_("tr",[_("td",[t._v("301")]),t._v(" "),_("td",[t._v("Moved Permanently")]),t._v(" "),_("td",[t._v("永久性重定向")])]),t._v(" "),_("tr",[_("td",[t._v("302")]),t._v(" "),_("td",[t._v("Found")]),t._v(" "),_("td",[t._v("临时性重定向")])]),t._v(" "),_("tr",[_("td",[t._v("303")]),t._v(" "),_("td",[t._v("See Other")]),t._v(" "),_("td",[t._v("GET方法临时重定向")])]),t._v(" "),_("tr",[_("td",[t._v("304")]),t._v(" "),_("td",[t._v("Not Modified")]),t._v(" "),_("td",[t._v("服务端资源未改变")])]),t._v(" "),_("tr",[_("td",[t._v("307")]),t._v(" "),_("td",[t._v("Temporary Redirect")]),t._v(" "),_("td",[t._v("临时性重定向")])]),t._v(" "),_("tr",[_("td",[t._v("400")]),t._v(" "),_("td",[t._v("Bad Request")]),t._v(" "),_("td",[t._v("请求语法错误")])]),t._v(" "),_("tr",[_("td",[t._v("401")]),t._v(" "),_("td",[t._v("Unauthorized")]),t._v(" "),_("td",[t._v("认证失败")])]),t._v(" "),_("tr",[_("td",[t._v("403")]),t._v(" "),_("td",[t._v("Forbidden")]),t._v(" "),_("td",[t._v("服务器拒绝")])]),t._v(" "),_("tr",[_("td",[t._v("404")]),t._v(" "),_("td",[t._v("Not Found")]),t._v(" "),_("td",[t._v("服务器没有请求的资源")])]),t._v(" "),_("tr",[_("td",[t._v("499")]),t._v(" "),_("td",[t._v("Nginx错误")]),t._v(" "),_("td",[t._v("客户端关闭了连接")])]),t._v(" "),_("tr",[_("td",[t._v("500")]),t._v(" "),_("td",[t._v("Internal Server Error")]),t._v(" "),_("td",[t._v("服务器端执行请求错误")])]),t._v(" "),_("tr",[_("td",[t._v("502")]),t._v(" "),_("td",[t._v("Bad Gateway")]),t._v(" "),_("td",[t._v("连接超时，请求太多，导致无法正常的响应")])]),t._v(" "),_("tr",[_("td",[t._v("503")]),t._v(" "),_("td",[t._v("Server Unavailable")]),t._v(" "),_("td",[t._v("服务器超负载")])]),t._v(" "),_("tr",[_("td",[t._v("504")]),t._v(" "),_("td",[t._v("Gateway Time-out")]),t._v(" "),_("td",[t._v("服务器超时")])])])]),t._v(" "),_("h2",{attrs:{id:"五、http协作的web服务器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、http协作的web服务器"}},[t._v("#")]),t._v(" 五、HTTP协作的Web服务器")]),t._v(" "),_("p",[t._v("虚拟主机：一台服务器为多位客户服务")]),t._v(" "),_("h3",{attrs:{id:"_1、通信数据转发-代理、网关、隧道"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、通信数据转发-代理、网关、隧道"}},[t._v("#")]),t._v(" 1、通信数据转发：代理、网关、隧道")]),t._v(" "),_("p",[t._v("代理：扮演“中间人”角色，每层代理加上Via首部信息")]),t._v(" "),_("p",[t._v("网关：提供非HTTP协议服务，使得网络通信更加安全")]),t._v(" "),_("p",[t._v("隧道：使用SSL通信，保证安全性")]),t._v(" "),_("h3",{attrs:{id:"_2、缓存"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、缓存"}},[t._v("#")]),t._v(" 2、缓存")]),t._v(" "),_("p",[t._v("服务器端缓存和客户端缓存，目的都是加快请求，具有有效期限")]),t._v(" "),_("h2",{attrs:{id:"六、http首部"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六、http首部"}},[t._v("#")]),t._v(" 六、HTTP首部")]),t._v(" "),_("h3",{attrs:{id:"http首部字段"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http首部字段"}},[t._v("#")]),t._v(" HTTP首部字段")]),t._v(" "),_("p",[t._v("HTTP首部字段都是由首部字段名和字段值构成的，中间用冒号（:）分隔")]),t._v(" "),_("p",[t._v("4种：列举常见的")]),t._v(" "),_("p",[t._v("1.通用首部字段General")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名字")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Cache-Control")]),t._v(" "),_("td",[t._v("控制缓存行为")])]),t._v(" "),_("tr",[_("td",[t._v("Connection")]),t._v(" "),_("td",[t._v("逐跳首部、连接的管理")])]),t._v(" "),_("tr",[_("td",[t._v("Date")]),t._v(" "),_("td",[t._v("创建报文的日期时间")])]),t._v(" "),_("tr",[_("td",[t._v("Transfer_Encoding")]),t._v(" "),_("td",[t._v("指定报文主体的传输编码方式")])]),t._v(" "),_("tr",[_("td",[t._v("Via")]),t._v(" "),_("td",[t._v("代理服务器的相关信息")])])])]),t._v(" "),_("p",[t._v("2.请求首部字段Request")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名字")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Accept")]),t._v(" "),_("td",[t._v("用户代理可处理的媒体类型")])]),t._v(" "),_("tr",[_("td",[t._v("Authorization")]),t._v(" "),_("td",[t._v("Web认证信息")])]),t._v(" "),_("tr",[_("td",[t._v("Host")]),t._v(" "),_("td",[t._v("请求域名")])]),t._v(" "),_("tr",[_("td",[t._v("Referer")]),t._v(" "),_("td",[t._v("原始请求方")])]),t._v(" "),_("tr",[_("td",[t._v("User-Agent")]),t._v(" "),_("td",[t._v("HTTP客户端程序的信息")])])])]),t._v(" "),_("p",[t._v("3.响应首部字段Response")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名字")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Etag")]),t._v(" "),_("td",[t._v("资源的匹配信息")])]),t._v(" "),_("tr",[_("td",[t._v("Location")]),t._v(" "),_("td",[t._v("重定向至指定URI")])]),t._v(" "),_("tr",[_("td",[t._v("Server")]),t._v(" "),_("td",[t._v("服务器信息")])])])]),t._v(" "),_("p",[t._v("4.实体首部字段Entity")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("名字")]),t._v(" "),_("th",[t._v("说明")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("Allow")]),t._v(" "),_("td",[t._v("资源可支持的HTTP方法")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Encoding")]),t._v(" "),_("td",[t._v("实体的编码方式")])]),t._v(" "),_("tr",[_("td",[t._v("Content-Type")]),t._v(" "),_("td",[t._v("实体主体的媒体类型")])]),t._v(" "),_("tr",[_("td",[t._v("Expires")]),t._v(" "),_("td",[t._v("过期日期")])])])]),t._v(" "),_("h2",{attrs:{id:"七、https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#七、https"}},[t._v("#")]),t._v(" 七、HTTPS")]),t._v(" "),_("h3",{attrs:{id:"_1、http的缺点"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、http的缺点"}},[t._v("#")]),t._v(" 1、HTTP的缺点")]),t._v(" "),_("p",[t._v("通信使用明文，内容可能被窃听")]),t._v(" "),_("p",[t._v("不验证通信方的身份，因此可能遭遇伪装")]),t._v(" "),_("p",[t._v("无法证明报文的完整性，有可能已遭篡改")]),t._v(" "),_("h3",{attrs:{id:"_2、http-加密-认证-完整性保护-https"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、http-加密-认证-完整性保护-https"}},[t._v("#")]),t._v(" 2、HTTP+加密+认证+完整性保护 = HTTPS")]),t._v(" "),_("p",[t._v("HTPPS 是身披SSL（Secure Socket Layer）的HTTP")]),t._v(" "),_("h2",{attrs:{id:"八、确认访问用户身份的认证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#八、确认访问用户身份的认证"}},[t._v("#")]),t._v(" 八、确认访问用户身份的认证")]),t._v(" "),_("h3",{attrs:{id:"_1、http认证"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、http认证"}},[t._v("#")]),t._v(" 1、HTTP认证")]),t._v(" "),_("p",[t._v("认证多半是基于表单认证")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("BASIC认证（基本认证）\nDIGSET认证（摘要认证）\nSSL客户端认证\nFormBase认证（基于表单认证）\n")])])]),_("h3",{attrs:{id:"_2、session管理和cookie应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、session管理和cookie应用"}},[t._v("#")]),t._v(" 2、Session管理和Cookie应用")]),t._v(" "),_("p",[t._v("HTTP是无状态协议，无法实现状态管理，因此我们用Cookie来管理Session")]),t._v(" "),_("h2",{attrs:{id:"九、基于http的功能追加协议"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#九、基于http的功能追加协议"}},[t._v("#")]),t._v(" 九、基于HTTP的功能追加协议")]),t._v(" "),_("h3",{attrs:{id:"_1、http瓶颈"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、http瓶颈"}},[t._v("#")]),t._v(" 1、HTTP瓶颈")]),t._v(" "),_("ul",[_("li",[t._v("一条连接上只可发送一个请求")]),t._v(" "),_("li",[t._v("请求只能从客户端开始")]),t._v(" "),_("li",[t._v("请求、响应首部未经压缩就发生")]),t._v(" "),_("li",[t._v("发送冗余的首部")]),t._v(" "),_("li",[t._v("可任意选择数据压缩格式")])]),t._v(" "),_("h3",{attrs:{id:"_2、ajax"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、ajax"}},[t._v("#")]),t._v(" 2、Ajax")]),t._v(" "),_("p",[t._v("Ajax（异步JavaScript和XML技术）操作DOM，以达到局部Web页面替换的异步通信手段")]),t._v(" "),_("h3",{attrs:{id:"_3、使用浏览器进行全双工通信的websocket"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、使用浏览器进行全双工通信的websocket"}},[t._v("#")]),t._v(" 3、使用浏览器进行全双工通信的WebSocket")]),t._v(" "),_("p",[t._v("WebSocket是建立在HTTP基础上的协议，因此连接的发起方仍是客户端，服务器和客户端都可以直接向对方发送报文")]),t._v(" "),_("p",[t._v("WebSocket是长连接，一直会保持状态，减少了连接开销")]),t._v(" "),_("ul",[_("li",[t._v("握手请求 Upgrade: websocket")]),t._v(" "),_("li",[t._v("握手响应 HTTP/1.1 101 Switching Protocols")])]),t._v(" "),_("h2",{attrs:{id:"十、构建web内容的技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#十、构建web内容的技术"}},[t._v("#")]),t._v(" 十、构建Web内容的技术")]),t._v(" "),_("h3",{attrs:{id:"_1、html-css-javascript"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、html-css-javascript"}},[t._v("#")]),t._v(" 1、HTML+CSS+JavaScript")]),t._v(" "),_("h3",{attrs:{id:"_2、web应用"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、web应用"}},[t._v("#")]),t._v(" 2、Web应用")]),t._v(" "),_("p",[t._v("CGI（通用网关接口）是指Web服务器在接收到客户端发过来的请求后转发给程序的一道机制，在CGI的作用下，程序会对请求内容作出相应的动作")]),t._v(" "),_("p",[t._v("CGI程序比如有Perl、PHP、Ruby、C")]),t._v(" "),_("p",[t._v("Servlet是一种能在服务器上创建动态内容的程序，是Java的一个接口，属于JavaEE")]),t._v(" "),_("p",[t._v("CGI每次接到请求，程序都要跟着重启一次，而Servlet运行在与Web服务器相同的进程中，因此受到负载较小")]),t._v(" "),_("h3",{attrs:{id:"_3、数据格式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、数据格式"}},[t._v("#")]),t._v(" 3、数据格式")]),t._v(" "),_("p",[t._v("XML（可扩展标记语言）")]),t._v(" "),_("p",[t._v("RSS（简易信息聚合）")]),t._v(" "),_("p",[t._v("JSON（JavaScript Object Notion）包含false、null、true、对象、数组、数字、字符串7种类型")]),t._v(" "),_("h2",{attrs:{id:"十一、web攻击技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#十一、web攻击技术"}},[t._v("#")]),t._v(" 十一、Web攻击技术")]),t._v(" "),_("h3",{attrs:{id:"_1、针对web的攻击技术"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1、针对web的攻击技术"}},[t._v("#")]),t._v(" 1、针对Web的攻击技术")]),t._v(" "),_("p",[_("img",{attrs:{src:"public/img/http/attack.jpg",alt:""}})]),t._v(" "),_("p",[t._v("一份调查：SQL注入（39%）、XSS（15%）、phpMyAdmin（9%）、ZanCart（5%）、其他（32%）")]),t._v(" "),_("h3",{attrs:{id:"_2、针对web的攻击模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2、针对web的攻击模式"}},[t._v("#")]),t._v(" 2、针对Web的攻击模式")]),t._v(" "),_("p",[t._v("主动攻击：攻击者直接访问Web应用进行攻击，代表SQL注入")]),t._v(" "),_("p",[t._v("被动攻击：利用圈套策略执行攻击代码，代表XSS（Cross-Site Script，跨站脚本攻击）、CSRF（Cross-Site Request Forgeries，跨站点请求伪造）")]),t._v(" "),_("h3",{attrs:{id:"_3、密码破解"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3、密码破解"}},[t._v("#")]),t._v(" 3、密码破解")]),t._v(" "),_("p",[t._v("穷举法、字典攻击、彩虹表")]),t._v(" "),_("h2",{attrs:{id:"十二、参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#十二、参考资料"}},[t._v("#")]),t._v(" 十二、参考资料")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://book.douban.com/subject/25863515/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《图解HTTP》"),_("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=s.exports}}]);