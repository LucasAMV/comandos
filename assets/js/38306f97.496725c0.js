"use strict";(self.webpackChunkcomandos_website=self.webpackChunkcomandos_website||[]).push([[3107],{250:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=a(4848),i=a(8453);const r={},o=void 0,l={id:"Docker/images filter",title:"images filter",description:"Sim, o comando docker images possui o par\xe2metro --filter, que permite filtrar a lista de imagens com base em determinados crit\xe9rios. Aqui est\xe3o alguns dos filtros dispon\xedveis e como us\xe1-los:",source:"@site/docs/Docker/images filter.md",sourceDirName:"Docker",slug:"/Docker/images filter",permalink:"/comandos/docs/Docker/images filter",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/images filter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"images filter xargs",permalink:"/comandos/docs/Docker/images filter xargs"},next:{title:"Git",permalink:"/comandos/docs/Git/default"}},c={},d=[{value:"Filtros Dispon\xedveis:",id:"filtros-dispon\xedveis",level:3},{value:"Exemplos de Uso:",id:"exemplos-de-uso",level:3},{value:"Combinando Filtros:",id:"combinando-filtros",level:3},{value:"Comando Formatado para Mostrar Apenas IDs:",id:"comando-formatado-para-mostrar-apenas-ids",level:3}];function t(e){const s={code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:["Sim, o comando ",(0,n.jsx)(s.code,{children:"docker images"})," possui o par\xe2metro ",(0,n.jsx)(s.code,{children:"--filter"}),", que permite filtrar a lista de imagens com base em determinados crit\xe9rios. Aqui est\xe3o alguns dos filtros dispon\xedveis e como us\xe1-los:"]}),"\n",(0,n.jsx)(s.h3,{id:"filtros-dispon\xedveis",children:"Filtros Dispon\xedveis:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"dangling"}),": Imagens que n\xe3o possuem tags associadas."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'docker images --filter "dangling=true"\n'})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"label"}),": Filtra imagens com base nas etiquetas (labels) atribu\xeddas."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'docker images --filter "label=<key>=<value>"\n'})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"before"}),": Imagens criadas antes de uma determinada imagem."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'docker images --filter "before=<image>:<tag>"\n'})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"since"}),": Imagens criadas desde uma determinada imagem."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'docker images --filter "since=<image>:<tag>"\n'})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"reference"}),": Filtra imagens com base no nome do reposit\xf3rio ou tag."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'docker images --filter "reference=<repository>:<tag>"\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"exemplos-de-uso",children:"Exemplos de Uso:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Listar Imagens Dangling"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'docker images --filter "dangling=true"\n'})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Listar Imagens com uma Etiqueta Espec\xedfica"}),":\nSuponha que voc\xea tenha uma imagem com a etiqueta ",(0,n.jsx)(s.code,{children:"version=1.0"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'docker images --filter "label=version=1.0"\n'})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Listar Imagens Criadas Antes de uma Imagem Espec\xedfica"}),":\nSuponha que voc\xea tenha uma imagem ",(0,n.jsx)(s.code,{children:"myrepo/myimage:latest"})," e deseja listar imagens criadas antes dela."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'docker images --filter "before=myrepo/myimage:latest"\n'})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Listar Imagens Criadas Desde uma Imagem Espec\xedfica"}),":\nSuponha que voc\xea tenha uma imagem ",(0,n.jsx)(s.code,{children:"myrepo/myimage:latest"})," e deseja listar imagens criadas desde ela."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'docker images --filter "since=myrepo/myimage:latest"\n'})}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Listar Imagens de um Reposit\xf3rio Espec\xedfico"}),":\nSuponha que voc\xea queira listar imagens do reposit\xf3rio ",(0,n.jsx)(s.code,{children:"myrepo/myimage"}),"."]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'docker images --filter "reference=myrepo/myimage"\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"combinando-filtros",children:"Combinando Filtros:"}),"\n",(0,n.jsx)(s.p,{children:"Voc\xea tamb\xe9m pode combinar m\xfaltiplos filtros para refinar ainda mais a lista de imagens:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'docker images --filter "dangling=false" --filter "label=version=1.0"\n'})}),"\n",(0,n.jsx)(s.h3,{id:"comando-formatado-para-mostrar-apenas-ids",children:"Comando Formatado para Mostrar Apenas IDs:"}),"\n",(0,n.jsxs)(s.p,{children:["Para listar apenas os IDs das imagens de um reposit\xf3rio espec\xedfico usando o filtro ",(0,n.jsx)(s.code,{children:"reference"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'docker images --filter "reference=<repository>:<tag>" --format "{{.ID}}"\n'})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Exemplo"}),":"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'docker images --filter "reference=myrepo/myimage" --format "{{.ID}}"\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Isso retornar\xe1 uma lista dos IDs das imagens do reposit\xf3rio ",(0,n.jsx)(s.code,{children:"myrepo/myimage"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"Essas op\xe7\xf5es de filtro permitem que voc\xea refine a lista de imagens de acordo com suas necessidades espec\xedficas. Se precisar de mais alguma coisa ou tiver outras d\xfavidas, estou aqui para ajudar! \ud83d\ude0a"})]})}function m(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(t,{...e})}):t(e)}},8453:(e,s,a)=>{a.d(s,{R:()=>o,x:()=>l});var n=a(6540);const i={},r=n.createContext(i);function o(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);