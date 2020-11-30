(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{671:function(s,a,e){"use strict";e.r(a);var t=e(1),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"docker-列出镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-列出镜像"}},[s._v("#")]),s._v(" Docker 列出镜像")]),s._v(" "),e("p",[s._v("要想列出已经下载下来的镜像，可以使用 "),e("code",[s._v("docker image ls")]),s._v(" 命令。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker image "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\nREPOSITORY           TAG                 IMAGE ID            CREATED             SIZE\nredis                latest              5f515359c7f8        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("183")]),s._v(" MB\nnginx                latest              05a60462f8ba        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("181")]),s._v(" MB\nmongo                "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.2")]),s._v("                 fe9198c04d62        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("342")]),s._v(" MB\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("               "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("              00285df0df87        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("342")]),s._v(" MB\nubuntu               "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.04")]),s._v("               f753707788c5        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127")]),s._v(" MB\nubuntu               latest              f753707788c5        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127")]),s._v(" MB\nubuntu               "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.04")]),s._v("               1e0c3dd64ccd        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("188")]),s._v(" MB\n")])])]),e("p",[s._v("列表包含了 "),e("code",[s._v("仓库名")]),s._v("、"),e("code",[s._v("标签")]),s._v("、"),e("code",[s._v("镜像 ID")]),s._v("、"),e("code",[s._v("创建时间")]),s._v(" 以及 "),e("code",[s._v("所占用的空间")]),s._v("。")]),s._v(" "),e("p",[s._v("其中仓库名、标签在之前的基础概念章节已经介绍过了。"),e("strong",[s._v("镜像 ID")]),s._v(" 则是镜像的唯一标识，一个镜像可以对应多个"),e("strong",[s._v("标签")]),s._v("。因此，在上面的例子中，我们可以看到 "),e("code",[s._v("ubuntu:16.04")]),s._v(" 和 "),e("code",[s._v("ubuntu:latest")]),s._v(" 拥有相同的 ID，因为它们对应的是同一个镜像。")]),s._v(" "),e("h2",{attrs:{id:"镜像体积"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镜像体积"}},[s._v("#")]),s._v(" 镜像体积")]),s._v(" "),e("p",[s._v("如果仔细观察，会注意到，这里标识的所占用空间和在 Docker Hub 上看到的镜像大小不同。比如，"),e("code",[s._v("ubuntu:16.04")]),s._v(" 镜像大小，在这里是 "),e("code",[s._v("127 MB")]),s._v("，但是在 "),e("a",{attrs:{href:"https://hub.docker.com/r/library/ubuntu/tags/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker Hub"),e("OutboundLink")],1),s._v(" 显示的却是 "),e("code",[s._v("50 MB")]),s._v("。这是因为 Docker Hub 中显示的体积是压缩后的体积。在镜像下载和上传过程中镜像是保持着压缩状态的，因此 Docker Hub 所显示的大小是网络传输中更关心的流量大小。而 "),e("code",[s._v("docker image ls")]),s._v(" 显示的是镜像下载到本地后，展开的大小，准确说，是展开后的各层所占空间的总和，因为镜像到本地后，查看空间的时候，更关心的是本地磁盘空间占用的大小。")]),s._v(" "),e("p",[s._v("另外一个需要注意的问题是，"),e("code",[s._v("docker image ls")]),s._v(" 列表中的镜像体积总和并非是所有镜像实际硬盘消耗。由于 Docker 镜像是多层存储结构，并且可以继承、复用，因此不同镜像可能会因为使用相同的基础镜像，从而拥有共同的层。由于 Docker 使用 Union FS，相同的层只需要保存一份即可，因此实际镜像硬盘占用空间很可能要比这个列表镜像大小的总和要小的多。")]),s._v(" "),e("p",[s._v("你可以通过以下命令来便捷的查看镜像、容器、数据卷所占用的空间。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker system "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v("\n\nTYPE                TOTAL               ACTIVE              SIZE                RECLAIMABLE\nImages              "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("24")]),s._v("                  "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".992GB             "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".992GB "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nContainers          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("                   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("62")]),s._v(".82MB             "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("62")]),s._v(".82MB "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nLocal Volumes       "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v("                   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("                   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("652")]),s._v(".2MB             "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("652")]),s._v(".2MB "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("100")]),s._v("%"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nBuild Cache                                                 0B                  0B\n")])])]),e("h2",{attrs:{id:"虚悬镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#虚悬镜像"}},[s._v("#")]),s._v(" 虚悬镜像")]),s._v(" "),e("p",[s._v("上面的镜像列表中，还可以看到一个特殊的镜像，这个镜像既没有仓库名，也没有标签，均为 ``。：")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("               "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("              00285df0df87        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("342")]),s._v(" MB\n")])])]),e("p",[s._v("这个镜像原本是有镜像名和标签的，原来为 "),e("code",[s._v("mongo:3.2")]),s._v("，随着官方镜像维护，发布了新版本后，重新 "),e("code",[s._v("docker pull mongo:3.2")]),s._v(" 时，"),e("code",[s._v("mongo:3.2")]),s._v(" 这个镜像名被转移到了新下载的镜像身上，而旧的镜像上的这个名称则被取消，从而成为了 "),e("code",[s._v("。除了 `docker pull` 可能导致这种情况，`docker build` 也同样可以导致这种现象。由于新旧镜像同名，旧镜像名称被取消，从而出现仓库名、标签均为")]),s._v(" 的镜像。这类无标签镜像也被称为 "),e("strong",[s._v("虚悬镜像(dangling image)")]),s._v(" ，可以用下面的命令专门显示这类镜像：")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker image "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -f "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("dangling")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("              "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("              00285df0df87        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("342")]),s._v(" MB\n")])])]),e("p",[s._v("一般来说，虚悬镜像已经失去了存在的价值，是可以随意删除的，可以用下面的命令删除。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker image prune\n")])])]),e("h2",{attrs:{id:"中间层镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#中间层镜像"}},[s._v("#")]),s._v(" 中间层镜像")]),s._v(" "),e("p",[s._v("为了加速镜像构建、重复利用资源，Docker 会利用 "),e("strong",[s._v("中间层镜像")]),s._v("。所以在使用一段时间后，可能会看到一些依赖的中间层镜像。默认的 "),e("code",[s._v("docker image ls")]),s._v(" 列表中只会显示顶层镜像，如果希望显示包括中间层镜像在内的所有镜像的话，需要加 "),e("code",[s._v("-a")]),s._v(" 参数。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker image "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -a\n")])])]),e("p",[s._v("这样会看到很多无标签的镜像，与之前的虚悬镜像不同，这些无标签的镜像很多都是中间层镜像，是其它镜像所依赖的镜像。这些无标签镜像不应该删除，否则会导致上层镜像因为依赖丢失而出错。实际上，这些镜像也没必要删除，因为之前说过，相同的层只会存一遍，而这些镜像是别的镜像的依赖，因此并不会因为它们被列出来而多存了一份，无论如何你也会需要它们。只要删除那些依赖它们的镜像后，这些依赖的中间层镜像也会被连带删除。")]),s._v(" "),e("h2",{attrs:{id:"列出部分镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#列出部分镜像"}},[s._v("#")]),s._v(" 列出部分镜像")]),s._v(" "),e("p",[s._v("不加任何参数的情况下，"),e("code",[s._v("docker image ls")]),s._v(" 会列出所有顶级镜像，但是有时候我们只希望列出部分镜像。"),e("code",[s._v("docker image ls")]),s._v(" 有好几个参数可以帮助做到这个事情。")]),s._v(" "),e("p",[s._v("根据仓库名列出镜像")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker image "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" ubuntu\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nubuntu              "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.04")]),s._v("               f753707788c5        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127")]),s._v(" MB\nubuntu              latest              f753707788c5        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127")]),s._v(" MB\nubuntu              "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.04")]),s._v("               1e0c3dd64ccd        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("188")]),s._v(" MB\n")])])]),e("p",[s._v("列出特定的某个镜像，也就是说指定仓库名和标签")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker image "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" ubuntu:16.04\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nubuntu              "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.04")]),s._v("               f753707788c5        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" weeks ago         "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("127")]),s._v(" MB\n")])])]),e("p",[s._v("除此以外，"),e("code",[s._v("docker image ls")]),s._v(" 还支持强大的过滤器参数 "),e("code",[s._v("--filter")]),s._v("，或者简写 "),e("code",[s._v("-f")]),s._v("。之前我们已经看到了使用过滤器来列出虚悬镜像的用法，它还有更多的用法。比如，我们希望看到在 "),e("code",[s._v("mongo:3.2")]),s._v(" 之后建立的镜像，可以用下面的命令：")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker image "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -f "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("since")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("mongo:3.2\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\nredis               latest              5f515359c7f8        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("183")]),s._v(" MB\nnginx               latest              05a60462f8ba        "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" days ago          "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("181")]),s._v(" MB\n")])])]),e("p",[s._v("想查看某个位置之前的镜像也可以，只需要把 "),e("code",[s._v("since")]),s._v(" 换成 "),e("code",[s._v("before")]),s._v(" 即可。")]),s._v(" "),e("p",[s._v("此外，如果镜像构建时，定义了 "),e("code",[s._v("LABEL")]),s._v("，还可以通过 "),e("code",[s._v("LABEL")]),s._v(" 来过滤。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker image "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -f "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("label")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("com.example.version"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.1")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),e("h2",{attrs:{id:"以特定格式显示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#以特定格式显示"}},[s._v("#")]),s._v(" 以特定格式显示")]),s._v(" "),e("p",[s._v("默认情况下，"),e("code",[s._v("docker image ls")]),s._v(" 会输出一个完整的表格，但是我们并非所有时候都会需要这些内容。比如，刚才删除虚悬镜像的时候，我们需要利用 "),e("code",[s._v("docker image ls")]),s._v(" 把所有的虚悬镜像的 ID 列出来，然后才可以交给 "),e("code",[s._v("docker image rm")]),s._v(" 命令作为参数来删除指定的这些镜像，这个时候就用到了 "),e("code",[s._v("-q")]),s._v(" 参数。")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker image "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -q\n5f515359c7f8\n05a60462f8ba\nfe9198c04d62\n00285df0df87\nf753707788c5\nf753707788c5\n1e0c3dd64ccd\n")])])]),e("p",[e("code",[s._v("--filter")]),s._v(" 配合 "),e("code",[s._v("-q")]),s._v(" 产生出指定范围的 ID 列表，然后送给另一个 "),e("code",[s._v("docker")]),s._v(" 命令作为参数，从而针对这组实体成批的进行某种操作的做法在 Docker 命令行使用过程中非常常见，不仅仅是镜像，将来我们会在各个命令中看到这类搭配以完成很强大的功能。因此每次在文档看到过滤器后，可以多注意一下它们的用法。")]),s._v(" "),e("p",[s._v("另外一些时候，我们可能只是对表格的结构不满意，希望自己组织列；或者不希望有标题，这样方便其它程序解析结果等，这就用到了 "),e("a",{attrs:{href:"https://gohugo.io/templates/go-templates/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Go 的模板语法"),e("OutboundLink")],1),s._v("。")]),s._v(" "),e("p",[s._v("比如，下面的命令会直接列出镜像结果，并且只包含镜像ID和仓库名：")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker image "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" --format "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"{{.ID}}: {{.Repository}}"')]),s._v("\n5f515359c7f8: redis\n05a60462f8ba: nginx\nfe9198c04d62: mongo\n00285df0df87: "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nf753707788c5: ubuntu\nf753707788c5: ubuntu\n1e0c3dd64ccd: ubuntu\n")])])]),e("p",[s._v("或者打算以表格等距显示，并且有标题行，和默认一样，不过自己定义列：")]),s._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("$ docker image "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" --format "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"table {{.ID}}'),e("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v("{{.Repository}}"),e("span",{pre:!0,attrs:{class:"token entity",title:"\\t"}},[s._v("\\t")]),s._v('{{.Tag}}"')]),s._v("\nIMAGE ID            REPOSITORY          TAG\n5f515359c7f8        redis               latest\n05a60462f8ba        nginx               latest\nfe9198c04d62        mongo               "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.2")]),s._v("\n00285df0df87        "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("              "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nf753707788c5        ubuntu              "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.04")]),s._v("\nf753707788c5        ubuntu              latest\n1e0c3dd64ccd        ubuntu              "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("14.04")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);