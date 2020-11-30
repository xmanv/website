(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{779:function(s,t,a){"use strict";a.r(t);var n=a(1),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[s._v("#")]),s._v(" Linux")]),s._v(" "),a("h2",{attrs:{id:"一、linux简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、linux简介"}},[s._v("#")]),s._v(" 一、linux简介")]),s._v(" "),a("p",[s._v("Linux（聆听i/ˈlɪnəks/ lin-əks）是一种自由和开放源码的类UNIX作业系统。目前运用领域最广泛、使用人数最多的操作系统。该操作系统的内核由林纳斯·托瓦兹在1991年10月5日首次发布。在加上使用者空间的应用程式之后，成为Linux作业系统。Linux也是自由软件和开放源代码软件发展中最著名的例子。只要遵循GNU通用公共许可证，任何个人和机构都可以自由地使用Linux的所有底层源代码，也可以自由地修改和再发布。大多数Linux系统还包括像提供GUI的X Window之类的程序。除了一部分专家之外，大多数人都是直接使用Linux发行版，而不是自己选择每一样组件或自行设置。")]),s._v(" "),a("h2",{attrs:{id:"二、linux与windows对比"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、linux与windows对比"}},[s._v("#")]),s._v(" 二、linux与windows对比")]),s._v(" "),a("ul",[a("li",[s._v("linux免费开源，windows商业付费")]),s._v(" "),a("li",[s._v("linux操作复杂，windows操作简单")]),s._v(" "),a("li",[s._v("linux适合程序员开发，windows适合一般人员")]),s._v(" "),a("li",[s._v("linux相对更安全高效")])]),s._v(" "),a("h2",{attrs:{id:"三、在vps中使用linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、在vps中使用linux"}},[s._v("#")]),s._v(" 三、在vps中使用linux")]),s._v(" "),a("p",[s._v("centos6 为例")]),s._v(" "),a("h3",{attrs:{id:"_1、换源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、换源"}},[s._v("#")]),s._v(" 1、换源")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.163.com/.help/CentOS6-Base-163.repo\nyum clean all\nyum update\n\n")])])]),a("h3",{attrs:{id:"_2、查看系统使用的linux版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、查看系统使用的linux版本"}},[s._v("#")]),s._v(" 2、查看系统使用的Linux版本")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 内核版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/version\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发行版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/redhat-release\n\n")])])]),a("h3",{attrs:{id:"_3、配置防火墙-iptables"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、配置防火墙-iptables"}},[s._v("#")]),s._v(" 3、配置防火墙 iptables")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存至 /etc/sysconfig/iptables")]),s._v("\n/etc/rc.d/init.d/iptables save\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写入规则")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh服务器")]),s._v("\niptables -A INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v(" -j ACCEPT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ftp服务器")]),s._v("\niptables -A INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" -j ACCEPT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# web服务器")]),s._v("\niptables -A INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v(" -j ACCEPT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mysql服务器")]),s._v("\niptables -A INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(" -j ACCEPT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 邮件服务器")]),s._v("\niptables -A INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v(" -j ACCEPT\niptables -A INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("110")]),s._v(" -j ACCEPT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# DNS服务器")]),s._v("\niptables -A INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v(" -j ACCEPT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redis服务器")]),s._v("\niptables -A INPUT -p tcp --dport "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6379")]),s._v(" -j ACCEPT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存")]),s._v("\n/etc/rc.d/init.d/iptables save\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" iptables restart\n\n")])])]),a("h3",{attrs:{id:"_4、配置远程连接-ssh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、配置远程连接-ssh"}},[s._v("#")]),s._v(" 4、配置远程连接 ssh")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/ssh/sshd_config\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 禁止root登陆")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#PermitRootLogin yes  => PermitRootLogin no")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改端口号")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Port 22 => Port 1657")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" sshd restart\n\n")])])]),a("h3",{attrs:{id:"_5、清除登录日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、清除登录日志"}},[s._v("#")]),s._v(" 5、清除登录日志")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用户最近登录信息的命令")]),s._v("\nlast命令，对应的日志文件/var/log/wtmp； 成功登录用户\nlastb命令，对应的日志文件/var/log/btmp； 尝试登录信息\nlastlog命令，对应的日志文件/var/log/lastlog； 显示最近登录信息\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清空日志文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /var/log/wtmp\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /var/log/btmp\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /var/log/lastlog\n\n清除Bash历史\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除当前登录session的历史")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" -r\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除所有历史")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("history")]),s._v(" -cw\n\n")])])]),a("h3",{attrs:{id:"_6、查看linux上启动的服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、查看linux上启动的服务"}},[s._v("#")]),s._v(" 6、查看linux上启动的服务")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看系统运行的进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看系统监听的服务")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -antp\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看当前所有服务的状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v("  --status-all\n\n")])])]),a("h2",{attrs:{id:"四、linux服务器部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、linux服务器部署"}},[s._v("#")]),s._v(" 四、linux服务器部署")]),s._v(" "),a("h2",{attrs:{id:"五、参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、参考资料"}},[s._v("#")]),s._v(" 五、参考资料")])])}),[],!1,null,null,null);t.default=e.exports}}]);