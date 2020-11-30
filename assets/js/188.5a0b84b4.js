(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{819:function(s,t,a){"use strict";a.r(t);var e=a(1),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"docker-私有仓库高级配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-私有仓库高级配置"}},[s._v("#")]),s._v(" Docker 私有仓库高级配置")]),s._v(" "),a("p",[s._v("上一节我们搭建了一个具有基础功能的私有仓库，本小节我们来使用 "),a("code",[s._v("Docker Compose")]),s._v(" 搭建一个拥有权限认证、TLS 的私有仓库。")]),s._v(" "),a("p",[s._v("新建一个文件夹，以下步骤均在该文件夹中进行。")]),s._v(" "),a("h2",{attrs:{id:"准备站点证书"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备站点证书"}},[s._v("#")]),s._v(" 准备站点证书")]),s._v(" "),a("p",[s._v("如果你拥有一个域名，国内各大云服务商均提供免费的站点证书。你也可以使用 "),a("code",[s._v("openssl")]),s._v(" 自行签发证书。")]),s._v(" "),a("p",[s._v("这里假设我们将要搭建的私有仓库地址为 "),a("code",[s._v("docker.domain.com")]),s._v("，下面我们介绍使用 "),a("code",[s._v("openssl")]),s._v(" 自行签发 "),a("code",[s._v("docker.domain.com")]),s._v(" 的站点 SSL 证书。")]),s._v(" "),a("p",[s._v("第一步创建 "),a("code",[s._v("CA")]),s._v(" 私钥。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ openssl genrsa -out "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.key"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n")])])]),a("p",[s._v("第二步利用私钥创建 "),a("code",[s._v("CA")]),s._v(" 根证书请求文件。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ openssl req "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n          -new -key "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.key"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n          -out "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.csr"')]),s._v(" -sha256 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n          -subj "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/C=CN/ST=Shanxi/L=Datong/O=Your Company Name/CN=Your Company Name Docker Registry CA'")]),s._v("\n")])])]),a("blockquote",[a("p",[s._v("以上命令中 "),a("code",[s._v("-subj")]),s._v(" 参数里的 "),a("code",[s._v("/C")]),s._v(" 表示国家，如 "),a("code",[s._v("CN")]),s._v("；"),a("code",[s._v("/ST")]),s._v(" 表示省；"),a("code",[s._v("/L")]),s._v(" 表示城市或者地区；"),a("code",[s._v("/O")]),s._v(" 表示组织名；"),a("code",[s._v("/CN")]),s._v(" 通用名称。")])]),s._v(" "),a("p",[s._v("第三步配置 "),a("code",[s._v("CA")]),s._v(" 根证书，新建 "),a("code",[s._v("root-ca.cnf")]),s._v("。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root_ca"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nbasicConstraints "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" critical,CA:TRUE,pathlen:1\nkeyUsage "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" critical, nonRepudiation, cRLSign, keyCertSign\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("subjectKeyIdentifier")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hash\n")])])]),a("p",[s._v("第四步签发根证书。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ openssl x509 -req  -days "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3650")]),s._v("  -in "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.csr"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               -signkey "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.key"')]),s._v(" -sha256 -out "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.crt"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               -extfile "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.cnf"')]),s._v(" -extensions "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n               root_ca\n")])])]),a("p",[s._v("第五步生成站点 "),a("code",[s._v("SSL")]),s._v(" 私钥。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ openssl genrsa -out "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker.domain.com.key"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\n")])])]),a("p",[s._v("第六步使用私钥生成证书请求文件。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ openssl req -new -key "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker.domain.com.key"')]),s._v(" -out "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"site.csr"')]),s._v(" -sha256 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n          -subj "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/C=CN/ST=Shanxi/L=Datong/O=Your Company Name/CN=docker.domain.com'")]),s._v("\n")])])]),a("p",[s._v("第七步配置证书，新建 "),a("code",[s._v("site.cnf")]),s._v(" 文件。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("server"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("authorityKeyIdentifier")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("keyid,issuer\nbasicConstraints "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" critical,CA:FALSE\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("extendedKeyUsage")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("serverAuth\nkeyUsage "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" critical, digitalSignature, keyEncipherment\nsubjectAltName "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" DNS:docker.domain.com, IP:127.0.0.1\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("subjectKeyIdentifier")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("hash\n")])])]),a("p",[s._v("第八步签署站点 "),a("code",[s._v("SSL")]),s._v(" 证书。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ openssl x509 -req -days "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("750")]),s._v(" -in "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"site.csr"')]),s._v(" -sha256 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -CA "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.crt"')]),s._v(" -CAkey "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root-ca.key"')]),s._v("  -CAcreateserial "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -out "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker.domain.com.crt"')]),s._v(" -extfile "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"site.cnf"')]),s._v(" -extensions server\n")])])]),a("p",[s._v("这样已经拥有了 "),a("code",[s._v("docker.domain.com")]),s._v(" 的网站 SSL 私钥 "),a("code",[s._v("docker.domain.com.key")]),s._v(" 和 SSL 证书 "),a("code",[s._v("docker.domain.com.crt")]),s._v("。")]),s._v(" "),a("p",[s._v("新建 "),a("code",[s._v("ssl")]),s._v(" 文件夹并将 "),a("code",[s._v("docker.domain.com.key")]),s._v(" "),a("code",[s._v("docker.domain.com.crt")]),s._v(" 这两个文件移入，删除其他文件。")]),s._v(" "),a("h2",{attrs:{id:"配置私有仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置私有仓库"}},[s._v("#")]),s._v(" 配置私有仓库")]),s._v(" "),a("p",[s._v("私有仓库默认的配置文件位于 "),a("code",[s._v("/etc/docker/registry/config.yml")]),s._v("，我们先在本地编辑 "),a("code",[s._v("config.yml")]),s._v("，之后挂载到容器中。")]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("accesslog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("disabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("level")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" debug\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("formatter")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" text\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("fields")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" registry\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("environment")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" staging\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storage")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("delete")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("cache")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("blobdescriptor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" inmemory\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("filesystem")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("rootdirectory")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /var/lib/registry\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("auth")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("htpasswd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("realm")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" basic"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("realm\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("path")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /etc/docker/registry/auth/nginx.htpasswd\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("addr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("443")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("host")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("//docker.domain.com\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("headers")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("X-Content-Type-Options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("nosniff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("http2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("disabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("false")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tls")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("certificate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /etc/docker/registry/ssl/docker.domain.com.crt\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /etc/docker/registry/ssl/docker.domain.com.key\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("health")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("storagedriver")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("enabled")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("interval")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10s\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("threshold")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])])]),a("h2",{attrs:{id:"生成-http-认证文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成-http-认证文件"}},[s._v("#")]),s._v(" 生成 http 认证文件")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" auth\n\n$ docker run --rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    --entrypoint htpasswd "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    registry "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    -Bbn username password "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" auth/nginx.htpasswd\n")])])]),a("blockquote",[a("p",[s._v("将上面的 "),a("code",[s._v("username")]),s._v(" "),a("code",[s._v("password")]),s._v(" 替换为你自己的用户名和密码。")])]),s._v(" "),a("h2",{attrs:{id:"编辑-docker-compose-yml"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑-docker-compose-yml"}},[s._v("#")]),s._v(" 编辑 "),a("code",[s._v("docker-compose.yml")])]),s._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3'")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("services")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("registry")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" registry\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"443:443"')]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" ./"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/etc/docker/registry\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" registry"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("/var/lib/registry\n\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("volumes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("registry-data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n")])])]),a("h2",{attrs:{id:"修改-hosts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-hosts"}},[s._v("#")]),s._v(" 修改 hosts")]),s._v(" "),a("p",[s._v("编辑 "),a("code",[s._v("/etc/hosts")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("docker.domain.com "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n")])])]),a("h2",{attrs:{id:"启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动"}},[s._v("#")]),s._v(" 启动")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker-compose up -d\n")])])]),a("p",[s._v("这样我们就搭建好了一个具有权限认证、TLS 的私有仓库，接下来我们测试其功能是否正常。")]),s._v(" "),a("h2",{attrs:{id:"测试私有仓库功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试私有仓库功能"}},[s._v("#")]),s._v(" 测试私有仓库功能")]),s._v(" "),a("p",[s._v("登录到私有仓库。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker login docker.domain.com\n")])])]),a("p",[s._v("尝试推送、拉取镜像。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker pull ubuntu:17.10\n\n$ docker tag ubuntu:17.10 docker.domain.com/username/ubuntu:17.10\n\n$ docker push docker.domain.com/username/ubuntu:17.10\n\n$ docker image "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" docker.domain.com/username/ubuntu:17.10\n\n$ docker pull docker.domain.com/username/ubuntu:17.10\n")])])]),a("p",[s._v("如果我们退出登录，尝试推送镜像。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ docker "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("logout")]),s._v(" docker.domain.com\n\n$ docker push docker.domain.com/username/ubuntu:17.10\n\nno basic auth credentials\n")])])]),a("p",[s._v("发现会提示没有登录，不能将镜像推送到私有仓库中。")]),s._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),a("p",[s._v("如果你本机占用了 "),a("code",[s._v("443")]),s._v(" 端口，你可以配置 "),a("a",{attrs:{href:"https://docs.docker.com/registry/recipes/nginx/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Nginx 代理"),a("OutboundLink")],1),s._v("，这里不再赘述。")])])}),[],!1,null,null,null);t.default=n.exports}}]);