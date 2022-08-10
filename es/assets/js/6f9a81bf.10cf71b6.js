"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[824],{3905:function(e,n,r){r.d(n,{Zo:function(){return p},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=t.createContext({}),c=function(e){var n=t.useContext(i),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=c(e.components);return t.createElement(i.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?t.createElement(g,s(s({ref:n},p),{},{components:r})):t.createElement(g,s({ref:n},p))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=r[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2771:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var t=r(3117),a=r(102),o=(r(7294),r(3905)),s=r(4996),l=["components"],i={id:"node_monitoring",title:"Monitoreo de nodo"},c=void 0,p={unversionedId:"node_monitoring",id:"node_monitoring",title:"Monitoreo de nodo",description:"En este cap\xedtulo, lo guiaremos a trav\xe9s de la configuraci\xf3n del monitoreo local para su nodo validador.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/node_monitoring.md",sourceDirName:".",slug:"/node_monitoring",permalink:"/es/node_monitoring",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/node_monitoring.md",tags:[],version:"current",frontMatter:{id:"node_monitoring",title:"Monitoreo de nodo"},sidebar:"sidebar",previous:{title:"Benchmark de desempe\xf1o",permalink:"/es/performance_benchmark"},next:{title:"Intro to Development",permalink:"/es/dev_intro"}},u=[{value:"Pre-requisitos",id:"prerequisites",children:[],level:2},{value:"Configuraci\xf3n de Prometheus",id:"prometheus-setup",children:[{value:"Usuario y directorios",id:"user-and-directories",children:[],level:3},{value:"Instalar Prometheus",id:"install-prometheus",children:[],level:3},{value:"Iniciando Prometheus",id:"starting-prometheus",children:[],level:3}],level:2},{value:"Exportador de nodor",id:"node-exporter",children:[{value:"Instalar Node Exporter",id:"install-node-exporter",children:[],level:3},{value:"Crear un servicio Systemd",id:"create-a-systemd-service",children:[],level:3},{value:"A\xf1ade Scrape Job para Node Exporter",id:"add-scrape-job-for-node-exporter",children:[],level:3}],level:2},{value:"Grafana Configuraci\xf3n",id:"grafana-setup",children:[{value:"Instalar Grafana",id:"install-grafana",children:[],level:3},{value:"Acceder a la interfaz web",id:"accessing-the-web-interface",children:[],level:3},{value:"Configuraci\xf3n de la fuente de datos",id:"configuring-the-datasource",children:[],level:3},{value:"Importando the Dashboard",id:"importing-the-dashboard",children:[],level:3}],level:2}],d={toc:u};function m(e){var n=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"En este cap\xedtulo, lo guiaremos a trav\xe9s de la configuraci\xf3n del monitoreo local para su nodo validador."),(0,o.kt)("h2",{id:"prerequisites"},"Pre-requisitos"),(0,o.kt)("p",null,"Debe tener su ",(0,o.kt)("a",{parentName:"p",href:"/collator_setup"},"Nodo collator")," en funcionamiento.",(0,o.kt)("br",{parentName:"p"}),"\n","Esta gu\xeda se prob\xf3 en la versi\xf3n Ubuntu 20.04 LTS."),(0,o.kt)("h2",{id:"prometheus-setup"},"Configuraci\xf3n de Prometheus"),(0,o.kt)("p",null,"En el primer paso, configuraremos el servidor Prometheus."),(0,o.kt)("h3",{id:"user-and-directories"},"Usuario y directorios"),(0,o.kt)("p",null,"Creamos un usuario solo para fines de monitoreo que no tiene un directorio de inicio y no se puede usar para iniciar sesi\xf3n."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo useradd --no-create-home --shell /usr/sbin/nologin prometheus\n")),(0,o.kt)("p",null,"Luego creamos directorios para el ejecutable y el archivo de configuraci\xf3n."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo mkdir /etc/prometheus\n$ sudo mkdir /var/lib/prometheus\n")),(0,o.kt)("p",null,"Cambie la propiedad de los directorios para restringirlos a nuestro nuevo usuario de monitoreo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown -R prometheus:prometheus /etc/prometheus\n$ sudo chown -R prometheus:prometheus /var/lib/prometheus\n")),(0,o.kt)("h3",{id:"install-prometheus"},"Instalar Prometheus"),(0,o.kt)("p",null,"Consulte el n\xfamero de versi\xf3n m\xe1s reciente de Prometheus en ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus/prometheus/releases/"},"GitHub release page"),".",(0,o.kt)("br",{parentName:"p"}),"\n","En el momento de escribir este art\xedculo es la v2.25.2. Inserte la \xfaltima versi\xf3n de lanzamiento en los siguientes comandos."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# download prometheus\n$ wget https://github.com/prometheus/prometheus/releases/download/v2.25.2/prometheus-2.25.2.linux-amd64.tar.gz\n\n# unpack the binaries\n$ tar xfz prometheus-*.tar.gz\n\n# enter the unpacked directory\n$ cd prometheus-2.25.2.linux-amd64\n")),(0,o.kt)("p",null,"Ahora copie los binarios en la carpeta local."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo cp ./prometheus /usr/local/bin/\n$ sudo cp ./promtool /usr/local/bin/\n")),(0,o.kt)("p",null,"Ahora necesitamos asignar esos binarios a nuestro usuario reci\xe9n creado."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown prometheus:prometheus /usr/local/bin/prometheus\n$ sudo chown prometheus:prometheus /usr/local/bin/promtool\n")),(0,o.kt)("p",null,"A continuaci\xf3n, copiaremos la interfaz web y los ajustes preestablecidos de configuraci\xf3n.."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo cp -r ./consoles /etc/prometheus\n$ sudo cp -r ./console_libraries /etc/prometheus\n")),(0,o.kt)("p",null,"Y Puede que ya lo hayas adivinado, pero tambi\xe9n estamos cambiando la propiedad de esos directorios."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown -R prometheus:prometheus /etc/prometheus/consoles\n$ sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries\n")),(0,o.kt)("p",null,"Ahora tenemos todo lo que necesitamos del paquete descargado, as\xed que daremos un paso atr\xe1s y realizaremos una limpieza."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ cd .. && rm -rf prometheus*\n")),(0,o.kt)("p",null,"Creemos un archivo de configuraci\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"YAML")," para Prometheus con el editor de su elecci\xf3n (nano / vim / pico)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/prometheus/prometheus.yml\n")),(0,o.kt)("p",null,"Nuestra configuraci\xf3n se divide en tres secciones:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"global"),": establece los valores predeterminados para ",(0,o.kt)("inlineCode",{parentName:"li"},"scrape_interval")," y el intervalo de ejecuci\xf3n de reglas con `Evaluation_interval\xb4"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rule_files"),": especifica los archivos de reglas que el servidor Prometheus debe cargar"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"scrape_configs"),": aqu\xed es donde configuras los recursos de monitoreo")),(0,o.kt)("p",null,"Lo mantendremos muy b\xe1sico y terminaremos con algo como esto:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'global:\n  scrape_interval: 15s\n  evaluation_interval: 15s\n\nrule_files:\n  # - "weHaveNo.rules"\n\nscrape_configs:\n  - job_name: "prometheus"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9090"]\n  - job_name: "substrate_node"\n    scrape_interval: 5s\n    static_configs:\n      - targets: ["localhost:9615"]\n')),(0,o.kt)("p",null,"El primer trabajo de scrape exporta datos del propio Prometheus, el segundo exporta las m\xe9tricas del nodo HydraDX.\nAjustamos el ",(0,o.kt)("inlineCode",{parentName:"p"},"scrape_interval")," de ambos trabajos para obtener estad\xedsticas m\xe1s detalladas. Esto anula los valores globales.\nEl ",(0,o.kt)("inlineCode",{parentName:"p"},"target")," en",(0,o.kt)("inlineCode",{parentName:"p"}," static_configs")," establece d\xf3nde se ejecutan los exportadores, aqu\xed nos ce\xf1imos a los puertos predeterminados."),(0,o.kt)("p",null,"Despu\xe9s de guardar la configuraci\xf3n, cambiaremos, una vez m\xe1s, la propiedad."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo chown prometheus:prometheus /etc/prometheus/prometheus.yml\n")),(0,o.kt)("h3",{id:"starting-prometheus"},"Iniciando Prometheus"),(0,o.kt)("p",null,"Para que Prometheus se inicie autom\xe1ticamente y se ejecute en segundo plano, usaremos ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd"),".\nCree una nueva configuraci\xf3n (nuevamente con el editor de su elecci\xf3n):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/systemd/system/prometheus.service\n")),(0,o.kt)("p",null,"Pegue la siguiente configuraci\xf3n y guarde el archivo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Unit]\n  Description=Prometheus Monitoring\n  Wants=network-online.target\n  After=network-online.target\n\n[Service]\n  User=prometheus\n  Group=prometheus\n  Type=simple\n  ExecStart=/usr/local/bin/prometheus \\\n  --config.file /etc/prometheus/prometheus.yml \\\n  --storage.tsdb.path /var/lib/prometheus/ \\\n  --web.console.templates=/etc/prometheus/consoles \\\n  --web.console.libraries=/etc/prometheus/console_libraries\n  ExecReload=/bin/kill -HUP $MAINPID\n\n[Install]\n  WantedBy=multi-user.target\n")),(0,o.kt)("p",null,"A continuaci\xf3n realizaremos los siguientes tres pasos:\n",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl deamon-reload")," carga nuevas configuraciones y actualiza las existentes\n",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl enable")," activa nuestro nuevo servicio\n",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl start")," desencadena la ejecuci\xf3n del servicio"),(0,o.kt)("p",null,"Puede realizar los pasos anteriores en un comando ejecutando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && systemctl enable prometheus && systemctl start prometheus\n")),(0,o.kt)("p",null,"Ahora deber\xeda poder acceder a la interfaz web de Prometheus en http://localhost:9090/."),(0,o.kt)("h2",{id:"node-exporter"},"Exportador de nodor"),(0,o.kt)("p",null,"Instalaremos Node Exporter para extraer las m\xe9tricas del servidor que se utilizar\xe1n en el panel.\nCompruebe el n\xfamero de versi\xf3n de la \xfaltima versi\xf3n. ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/prometheus/node_exporter/releases/"},"Aqui")," y actualice el comando.",(0,o.kt)("br",{parentName:"p"}),"\n","En el momento de redactar este art\xedculo, la \xfaltima versi\xf3n estaba ",(0,o.kt)("inlineCode",{parentName:"p"},"1.1.2"),"."),(0,o.kt)("h3",{id:"install-node-exporter"},"Instalar Node Exporter"),(0,o.kt)("p",null,"Descargue la \xfaltima versi\xf3n."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ wget https://github.com/prometheus/node_exporter/releases/download/v1.1.2/node_exporter-1.1.2.linux-amd64.tar.gz\n")),(0,o.kt)("p",null,"Desempaquete el archivo que acaba de descargar. Esto crear\xe1 una carpeta llamada ",(0,o.kt)("inlineCode",{parentName:"p"},"node_exporter-1.1.2.linux-amd64"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ tar xvf node_exporter-1.1.2.linux-amd64.tar.gz\n")),(0,o.kt)("p",null,"A continuaci\xf3n, copiamos el binario en nuestro directorio de aplicaciones local y lo asignamos a nuestro usuario de monitoreo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"# copy binary\n$ cp node_exporter-1.1.2.linux-amd64/node_exporter /usr/local/bin\n\n# set ownership\n$ sudo chown prometheus:prometheus /usr/local/bin/node_exporter\n")),(0,o.kt)("p",null,"Ahora podemos hacer una limpieza y eliminar el paquete descargado y descomprimido."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ rm -rf node_exporter*\n")),(0,o.kt)("h3",{id:"create-a-systemd-service"},"Crear un servicio Systemd"),(0,o.kt)("p",null,"Al igual que prometheus, queremos que Node Exporter tambi\xe9n se ejecute como un servicio.\nCree un servicio systemd con su editor de elecci\xf3n."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/systemd/system/node_exporter.service\n")),(0,o.kt)("p",null,"Y pega la siguiente configuraci\xf3n en \xe9l."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Node Exporter\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=prometheus\nGroup=prometheus\nType=simple\nExecStart=/usr/local/bin/node_exporter\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("p",null,"Ahora activaremos e iniciaremos el servicio con este resumen."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && systemctl enable node_exporter && systemctl start node_exporter\n")),(0,o.kt)("h3",{id:"add-scrape-job-for-node-exporter"},"A\xf1ade Scrape Job para Node Exporter"),(0,o.kt)("p",null,"El Exportador de nodos ya est\xe1 en funcionamiento, pero debemos decirle a Prometheus que extraiga sus datos.\nAbriremos el archivo de configuraci\xf3n una vez m\xe1s con el editor que elijamos."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo nano /etc/prometheus/prometheus.yml\n")),(0,o.kt)("p",null,"Y en la parte inferior del archivo, agregaremos una configuraci\xf3n de scrape m\xe1s.\nPegue el siguiente contenido y guarde el archivo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  - job_name: 'node_exporter'\n    scrape_interval: 5s\n    static_configs:\n      - targets: ['localhost:9100']\n")),(0,o.kt)("p",null,"Para aplicar la configuraci\xf3n de cambios, es necesario reiniciar el servicio Prometheus."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl restart prometheus.service \n")),(0,o.kt)("p",null,"Las m\xe9tricas de su servidor ahora se raspan y se pueden encontrar en la interfaz web de Prometheus.\nLos necesitaremos m\xe1s tarde para nuestro tablero."),(0,o.kt)("h2",{id:"grafana-setup"},"Grafana Configuraci\xf3n"),(0,o.kt)("p",null,"Podemos ver nuestras m\xe9tricas en la interfaz web, pero no es as\xed como queremos monitorearlas.\nLo queremos bonito y bonito. Ah\xed es donde entra en juego Grafana."),(0,o.kt)("h3",{id:"install-grafana"},"Instalar Grafana"),(0,o.kt)("p",null,"Compruebe cu\xe1l es la \xfaltima versi\xf3n de Grafana ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/download?platform=linux"},"con este link"),".",(0,o.kt)("br",{parentName:"p"}),"\n",'Puede cambiar el n\xfamero de versi\xf3n en los siguientes comandos o copiar los comandos de instalaci\xf3n directamente desde el enlace.\nEn el momento de escribir este art\xedculo, la \xfaltima versi\xf3n era "7.5.1".'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo apt-get install -y adduser libfontconfig1\n$ wget https://dl.grafana.com/oss/release/grafana_7.5.1_amd64.deb\n$ sudo dpkg -i grafana_7.5.1_amd64.deb\n")),(0,o.kt)("p",null,"El paquete viene con un servicio ",(0,o.kt)("inlineCode",{parentName:"p"},"systemd")," incorporado que configuraremos e iniciaremos como el servicio Prometheus."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"$ sudo systemctl daemon-reload && sudo systemctl enable grafana-server && sudo systemctl start grafana-server\n")),(0,o.kt)("h3",{id:"accessing-the-web-interface"},"Acceder a la interfaz web"),(0,o.kt)("p",null,"Podremos abrir la interfaz web de Grafana en http://localhost:3000/.",(0,o.kt)("br",{parentName:"p"}),"\n","El inicio de sesi\xf3n predeterminado de Grafana es:\nUser: ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),(0,o.kt)("br",{parentName:"p"}),"\n","Password: ",(0,o.kt)("inlineCode",{parentName:"p"},"admin"),"  "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,s.Z)("/node-monitoring/grafana-home.png")})),(0,o.kt)("h3",{id:"configuring-the-datasource"},"Configuraci\xf3n de la fuente de datos"),(0,o.kt)("p",null,'Haga clic en el engranaje de configuraci\xf3n en el men\xfa y seleccione fuentes de datos.\nEn la siguiente ventana, haga clic en "Agregar fuente de datos" y seleccione "Prometheus"..  '),(0,o.kt)("p",null,"En el siguiente formulario, no necesita cambiar nada m\xe1s que la URL.\nColocar",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:9090/")," y clic ",(0,o.kt)("inlineCode",{parentName:"p"},"Save and Test"),".  "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,s.Z)("/node-monitoring/grafana-datasource.png")})),(0,o.kt)("h3",{id:"importing-the-dashboard"},"Importando the Dashboard"),(0,o.kt)("p",null,"Por favor presione el bonton ",(0,o.kt)("inlineCode",{parentName:"p"},"Plus"),"en la navegacion principal y selecciona ",(0,o.kt)("inlineCode",{parentName:"p"},"import"),".  "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,s.Z)("/node-monitoring/grafana-import.png")})),(0,o.kt)("p",null,"Nosotros usaremos el ",(0,o.kt)("a",{parentName:"p",href:"https://grafana.com/grafana/dashboards/14158"},"HydraDX Dashboard")," y para cargarlo, simplemente ingrese el id ",(0,o.kt)("inlineCode",{parentName:"p"},"14158")," y presione el bot\xf3n ",(0,o.kt)("inlineCode",{parentName:"p"},"Load"),".  "),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,s.Z)("/node-monitoring/grafana-import-options.png")})),(0,o.kt)("p",null,"No necesita mucha configuraci\xf3n aqu\xed, solo aseg\xfarese de que Prometheus se use como fuente de datos.\nAhora puede finalizar la importaci\xf3n."),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:(0,s.Z)("/node-monitoring/grafana-dashboard.png")})),(0,o.kt)("p",null,"Ahora deber\xeda ver su panel de control de inmediato.\nSi algunos paneles est\xe1n vac\xedos, aseg\xfarese de que su selecci\xf3n sobre los paneles sea as\xed:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Chain Metrics"),": Substrate  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Chain Instance"),": localhost:9615  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Server Job"),": node_exporter  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Server Host"),": localhost:9100")))}m.isMDXComponent=!0}}]);