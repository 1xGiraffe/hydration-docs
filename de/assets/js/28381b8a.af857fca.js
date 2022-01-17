"use strict";(self.webpackChunkhydra_dx_docs=self.webpackChunkhydra_dx_docs||[]).push([[276],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),o=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=o(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),m=o(t),h=a,p=m["".concat(l,".").concat(h)]||m[h]||u[h]||i;return t?r.createElement(p,s(s({ref:n},c),{},{components:t})):r.createElement(p,s({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=m;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d.mdxType="string"==typeof e?e:a,s[1]=d;for(var o=2;o<i;o++)s[o]=t[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1181:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return c},default:function(){return m}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),s=(t(4996),["components"]),d={id:"node_setup",title:"Eine HydraDX Node einrichten"},l=void 0,o={unversionedId:"node_setup",id:"node_setup",title:"Eine HydraDX Node einrichten",description:"Dieser Abschnitt soll Sie durch Prozess zum Aufbau und zum Betrieb einer HydraDX node f\xfchren.",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/node_setup.md",sourceDirName:".",slug:"/node_setup",permalink:"/de/node_setup",editUrl:"https://github.com/galacticcouncil/HydraDX-docs/edit/main/docs/node_setup.md",tags:[],version:"current",frontMatter:{id:"node_setup",title:"Eine HydraDX Node einrichten"},sidebar:"sidebar",previous:{title:"Omnipool Design",permalink:"/de/omnipool_design"},next:{title:"Leistungs-Benchmark",permalink:"/de/performance_benchmark"}},c=[{value:"00 Systemanforderungen",id:"00-required-technical-specifications",children:[],level:2},{value:"01 Pr\xfcfen ob die Systemuhr synchronisiert ist",id:"01-check-whether-your-system-clock-is-synchronized",children:[],level:2},{value:"02 Firewall-Einstellungen anpassen",id:"02-adjust-your-firewall-settings",children:[],level:2},{value:"03 Herunterladen oder Binary erstellen",id:"03-download-or-build-a-binary",children:[],level:2},{value:"04 Binary ausf\xfchren",id:"04-run-the-binary",children:[],level:2},{value:"05 Mit systemd starten",id:"05-running-with-systemd",children:[],level:2}],u={toc:c};function m(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Dieser Abschnitt soll Sie durch Prozess zum Aufbau und zum Betrieb einer HydraDX node f\xfchren."),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Das Betreiben und Erstellen einer Validator node setzt ein gewisses Ma\xdf an technischen F\xe4higkeiten vorraus, die ben\xf6tigt werden um den Fehlerfreien Betrieb der Node zu gew\xe4hrleisten. Wenn Sie nicht genau was Sie hier genau vorhaben, empfehlen wir das Sie einen erfahrenen Validator mit ihren HDX nominieren ",(0,i.kt)("a",{parentName:"p",href:"/start_nominating"},"nominate your HDX")," to an experienced validator instead. Wenn Sie das Betreiben der Validator Nodes den erfahreneren \xfcberlassen, sch\xfctzen Sie sich und andere vor dem Verlust des eigenen Kryptokapitals."))),(0,i.kt)("h2",{id:"00-required-technical-specifications"},"00 Systemanforderungen"),(0,i.kt)("p",null,"Folgende Hardware stellt das minimum dar, dass zum Betreiben einer HydraDX Validator Node aufgebracht werden muss:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Betriebssystem: Ubuntu 20.04"),(0,i.kt)("li",{parentName:"ul"},"CPU: Intel Core i7-7700K (oder h\xf6here Single-Thread-Leistung)"),(0,i.kt)("li",{parentName:"ul"},"Arbeitsspeicher: 64GB RAM"),(0,i.kt)("li",{parentName:"ul"},"Speicher: NVMe SSD mit mindestens 200GB Speicherplatz (Speicherbedarf steigt mit der Zeit)")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Die oben genannten Mindestvorraussetzungen wurden von unserem Team \xfcberpr\xfcft. Um sicherzugehen ob Ihre Hardware die Anforderungen erf\xfcllt k\xf6nnen sie diesen ",(0,i.kt)("a",{parentName:"p",href:"/performance_benchmark"},"Leistungs-Benchmark")," nutzen."))),(0,i.kt)("h2",{id:"01-check-whether-your-system-clock-is-synchronized"},"01 Pr\xfcfen ob die Systemuhr synchronisiert ist"),(0,i.kt)("p",null,"Bevor Sie einen Validator Node betreiben, \xfcberpr\xfcfen sie ob ihre Systemuhr synchronisiert ist. Dies ist wichtig da alle Validatoren zusammen arbeiten, was eine gemeinsam synchronisierte Systemuhr vorraussetzt. Unter Ubuntu 20.04 sollte die Synchronisation bereits voreingestellt sein. Um dies zu \xfcberpr\xfcfen, f\xfchren sie den nachfolgenden Befehl aus und \xfcberpr\xfcfen die Ausgabe der Konsole:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ timedatectl | grep "System clock"\nSystem clock synchronized: yes\n')),(0,i.kt)("p",null,"Sollte sich ihre Folgeausgabe auf den Befehl unterscheiden, k\xf6nnen sie NTP auch manuell mit dem folgenden Befehl installieren, und erneut \xfcberpr\xfcfen ob die Systemuhr synchronisiert ist:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ apt install ntp\n$ ntpq -p\n")),(0,i.kt)("h2",{id:"02-adjust-your-firewall-settings"},"02 Firewall-Einstellungen anpassen"),(0,i.kt)("p",null,"Der Port ",(0,i.kt)("inlineCode",{parentName:"p"},"30333")," wird zur Verbindung zu anderen Nodes verwendet. Wenn Sie den Node als Validator verwenden m\xf6chten, empfehlen wir eine Firewall einzurichten und nur diesen Port f\xfcr Remote Verbindungen freizugeben."),(0,i.kt)("p",null,"Wenn Sie den Node nicht als Validator verwenden, k\xf6nnen Sie auch den Port ",(0,i.kt)("inlineCode",{parentName:"p"},"9944"),"freigeben (f\xfcr RPC websocket Verbdinungen mit externen Apps) und ",(0,i.kt)("inlineCode",{parentName:"p"},"9933"),"(f\xfcr HTTP Anfragen an Ihren Node). Sie k\xf6nnen den Port ",(0,i.kt)("inlineCode",{parentName:"p"},"9944"),"verwenden um ihren Node mit ",(0,i.kt)("a",{parentName:"p",href:"/polkadotjs_apps_local"},"Polkadot/apps")," zu verbinden. "),(0,i.kt)("h2",{id:"03-download-or-build-a-binary"},"03 Herunterladen oder Binary erstellen"),(0,i.kt)("p",null,"Sie k\xf6nnen unter folgendem Githublink den aktuellsten Release unserer Binary herunterladen (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/galacticcouncil/HydraDX-node/releases"},"https://github.com/galacticcouncil/HydraDX-node/releases"),")."),(0,i.kt)("p",null,"Alternativ ist es auch m\xf6glich mit folgendem Befehl den aktuellen Build zu beziehen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Install dependencies\n$ curl https://getsubstrate.io -sSf | bash -s -- --fast\n\n# Fetch source of the latest stable release\n$ git clone https://github.com/galacticcouncil/HydraDX-node -b stable\n\n# Build the binary\n$ cd HydraDX-node/\n$ cargo build --release\n")),(0,i.kt)("p",null,"Wenn Sie die Binary \xfcber die Oben genannten Schritte bezogen haben, lautet der Dateipfad wiefolgt:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"target/release/hydra-dx\n")),(0,i.kt)("h2",{id:"04-run-the-binary"},"04 Binary ausf\xfchren"),(0,i.kt)("p",null,"Ausf\xfchren k\xf6nnen Sie die binary indem sie folgenden Befehl ausf\xfchren:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ {PATH_TO_YOUR_BINARY} --chain lerna --name {YOUR_NODE_NAME} --validator\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Validator Nodes ben\xf6tigen die gesamte Chain Database. Wenn Sie die Node ohne die  ",(0,i.kt)("inlineCode",{parentName:"p"},"--validator")," flag ausgef\xfchrt haben, m\xfcssen Sie Database neu synchronisieren indem sie die Chain vor dem Start der Node mit folgendem Befehl l\xf6schen."),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ {PATH_TO_YOUR_BINARY} purge-chain --chain lerna\n")))),(0,i.kt)("p",null,"Neben dem Dateipfad zu der Binary m\xfcssen Sie noch einen Namen f\xfcr Ihre Node festlegen welcher zur Identifikation in ",(0,i.kt)("a",{parentName:"p",href:"https://telemetry.hydradx.io/#/HydraDX%20Snakenet%20Gen2"},"Telemetry")," genutzt wird. Dort finden Sie ebenfalls eine Liste aller Nodes im HydraDX Snakenet."),(0,i.kt)("h2",{id:"05-running-with-systemd"},"05 Mit systemd starten"),(0,i.kt)("p",null,'Um gew\xe4hrleisten zu k\xf6nnen das ihr Node automatisch bei einem Systemneustart startet, empfehlen wir den HydraDX node als System Prozess zu betreiben. Diese Einstellungen k\xf6nnen sie mit folgendem Befehl vornehmen (in die "{}" Klammern m\xfcssen sie Ihre Daten eingeben) :'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ touch /etc/systemd/system/hydradx-validator.service\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[Unit]\nDescription=HydraDX validator\n\n[Service]\nType=exec\nUser={UNIX_USER}\nExecStart={PATH_TO_YOUR_BINARY} --chain lerna --name {YOUR_NODE_NAME} --validator\nRestart=always\nRestartSec=120\n\n[Install]\nWantedBy=multi-user.target\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},'Die Einstellung "RestartSec" ist empfehlenswert da es den Neustart der Node im Falle eines Crashs verz\xf6gert. Dies erm\xf6glicht das volatile Daten (wie zb consensus votes) auf die Festplatte geschrieben werden bevor der Node neugestartet wird. Wenn die Node direkt nach einem Crash neugestartet wird kann dies zu Mehrdeutigkeiten oder doppelten Signierungen f\xfchren welche m\xf6glicherweise zu slashing f\xfchren kann.'))),(0,i.kt)("p",null,"Nachdem die Konfigurations Datei erstellt wurde k\xf6nnen sie mit Ihrem HydraDX Validator Node als Systemprozess interagieren:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Start the node at system boot\n$ systemctl enable hydradx-validator.service\n\n# Start the node manually\n$ systemctl start hydradx-validator.service\n\n# Check the status of the node\n$ systemctl status hydradx-validator.service\n\n# Check the logs of the node\n$ journalctl -f -u hydradx-validator.service\n")),(0,i.kt)("p",null,"Ihre HydraDX node ist jetzt konfiguriert und in Betrieb!\nJetzt k\xf6nnen sie die letzten Schritte ausf\xfchren um mit dem ",(0,i.kt)("a",{parentName:"p",href:"/start_validating"},"validieren zu beginnen"),"."))}m.isMDXComponent=!0}}]);