if (self.CavalryLogger) { CavalryLogger.start_js(["0hKk8"]); }

__d("d3/core/bisect",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(k){return {left:function(l,m,n,o){if(arguments.length<3)n=0;if(arguments.length<4)o=l.length;while(n<o){var p=n+o>>>1;if(k.call(l,l[p],p)<m){n=p+1;}else o=p;}return n;},right:function(l,m,n,o){if(arguments.length<3)n=0;if(arguments.length<4)o=l.length;while(n<o){var p=n+o>>>1;if(m<k.call(l,l[p],p)){o=p;}else n=p+1;}return n;}};},i=h(function(k){return k;}),j=i.right;j.left=i.left;j.right=j;j.or=h;f.exports=j;},null);
__d("d3/core/class",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){try{for(var l in j)Object.defineProperty(i.prototype,l,{value:j[l],enumerable:false});}catch(k){i.prototype=j;}}g._class=h;},null);
__d("d3/core/color",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){}h.prototype.toString=function(){return this.rgb()+"";};g._Color=h;},null);
__d('d3/core/core',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=Math.PI,i=1e-06,j={version:"3.0.6"},k=h/180,l=180/h,m=typeof document==='undefined'?null:document,n=typeof window==='undefined'?null:window;function o(q){return q.target;}function p(q){return q.source;}j._u03c0=h;j._u03b5=i;j._radians=k;j._degrees=l;j._document=m;j._window=n;j._target=o;j._source=p;f.exports=j;},null);
__d("d3/core/format-en_US",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=".",i=",",j=[3,3];g._decimalPoint=h;g._thousandsSeparator=i;g._grouping=j;},null);
__d("d3/core/identity",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i){return i;}g._identity=h;},null);
__d("d3/core/map",["d3/core/class"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/core\/class")._class,i=function(m){var n=new j();for(var o in m)n.set(o,m[o]);return n;};function j(){}h(j,{has:function(m){return k+m in this;},get:function(m){return this[k+m];},set:function(m,n){return this[k+m]=n;},remove:function(m){m=k+m;return m in this&&delete this[m];},keys:function(){var m=[];this.forEach(function(n){m.push(n);});return m;},values:function(){var m=[];this.forEach(function(n,o){m.push(o);});return m;},entries:function(){var m=[];this.forEach(function(n,o){m.push({key:n,value:o});});return m;},forEach:function(m){for(var n in this)if(n.charCodeAt(0)===l)m.call(this,n.substring(1),this[n]);}});var k="\0",l=k.charCodeAt(0);i._Map=j;f.exports=i;},null);
__d("d3/core/round",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(i,j){return j?Math.round(i*(j=Math.pow(10,j)))/j:Math.round(i);};f.exports=h;},null);
__d("d3/core/format",["d3/core/format-en_US","d3/core/identity","d3/core/map","d3/core/round","d3/core/formatPrefix"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3/core/format-en_US")._decimalPoint,i=c("d3\/core\/identity")._identity,j=c("d3/core/format-en_US")._grouping,k=c("d3/core/format-en_US")._thousandsSeparator,l=function(s){var t=m.exec(s),u=t[1]||" ",v=t[2]||">",w=t[3]||"",x=t[4]||"",y=t[5],z=+t[6],aa=t[7],ba=t[8],ca=t[9],da=1,ea="",fa=false;if(ba)ba=+ba.substring(1);if(y||u==="0"&&v==="="){y=u="0";v="=";if(aa)z-=Math.floor((z-1)/4);}switch(ca){case "n":aa=true;ca="g";break;case "%":da=100;ea="%";ca="f";break;case "p":da=100;ea="%";ca="r";break;case "b":case "o":case "x":case "X":if(x)x="0"+ca.toLowerCase();case "c":case "d":fa=true;ba=0;break;case "s":da=-1;ca="r";break;}if(x==="#")x="";if(ca=="r"&&!ba)ca="g";ca=n.get(ca)||p;var ga=y&&aa;return function(ha){if(fa&&ha%1)return "";var ia=ha<0||ha===0&&1/ha<0?(ha=-ha,"-"):w;if(da<0){var ja=c("d3\/core\/formatPrefix")(ha,ba);ha=ja.scale(ha);ea=ja.symbol;}else ha*=da;ha=ca(ha,ba);if(!y&&aa)ha=q(ha);var ka=x.length+ha.length+(ga?0:ia.length),la=ka<z?new Array(ka=z-ka+1).join(u):"";if(ga)ha=q(la+ha);if(h)ha.replace(".",h);ia+=x;return (v==="<"?ia+ha+la:v===">"?la+ia+ha:v==="^"?la.substring(0,ka>>=1)+ia+ha+la.substring(ka):ia+(ga?ha:la+ha))+ea;};},m=/(?:([^{])?([<>=^]))?([+\- ])?(#)?(0)?([0-9]+)?(,)?(\.[0-9]+)?([a-zA-Z%])?/,n=c("d3/core/map")({b:function(s){return s.toString(2);},c:function(s){return String.fromCharCode(s);},o:function(s){return s.toString(8);},x:function(s){return s.toString(16);},X:function(s){return s.toString(16).toUpperCase();},g:function(s,t){return s.toPrecision(t);},e:function(s,t){return s.toExponential(t);},f:function(s,t){return s.toFixed(t);},r:function(s,t){return (s=c("d3/core/round")(s,o(s,t))).toFixed(Math.max(0,Math.min(20,o(s*(1+1e-15),t))));}});function o(s,t){return t-(s?Math.ceil(Math.log(s)/Math.LN10):1);}function p(s){return s+"";}var q=i;if(j){var r=j.length;q=function(s){var t=s.lastIndexOf("."),u=t>=0?"."+s.substring(t+1):(t=s.length,""),v=[],w=0,x=j[0];while(t>0&&x>0){v.push(s.substring(t-=x,t+x));x=j[w=(w+1)%r];}return v.reverse().join(k||"")+u;};}l._precision=o;f.exports=l;},null);
__d("d3/core/formatPrefix",["d3/core/round","d3/core/format"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=["y","z","a","f","p","n","\u00b5","m","","k","M","G","T","P","E","Z","Y"].map(j),i=function(k,l){var m=0;if(k){if(k<0)k*=-1;if(l)k=c("d3/core/round")(k,c("d3\/core\/format")._precision(k,l));m=1+Math.floor(1e-12+Math.log(k)/Math.LN10);m=Math.max(-24,Math.min(24,Math.floor((m<=0?m+1:m-1)/3)*3));}return h[8+m/3];};function j(k,l){var m=Math.pow(10,Math.abs(8-l)*3);return {scale:l>8?function(n){return n/m;}:function(n){return n*m;},symbol:k};}f.exports=i;},null);
__d("d3/core/hcl",["d3/core/color","d3/core/core","d3/core/lab","d3/core/rgb"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/core\/color")._Color,i=c("d3\/core\/core")._radians,j=function(o,p,q){return arguments.length===1?o instanceof l?k(o.h,o.c,o.l):o instanceof c("d3\/core\/lab")._Lab?c("d3\/core\/lab")._hcl(o.l,o.a,o.b):c("d3\/core\/lab")._hcl((o=c("d3\/core\/rgb")._lab((o=c("d3\/core\/rgb")(o)).r,o.g,o.b)).l,o.a,o.b):k(+o,+p,+q);};function k(o,p,q){return new l(o,p,q);}function l(o,p,q){this.h=o;this.c=p;this.l=q;}var m=l.prototype=new h();m.brighter=function(o){return k(this.h,this.c,Math.min(100,this.l+c("d3\/core\/lab")._K*(arguments.length?o:1)));};m.darker=function(o){return k(this.h,this.c,Math.max(0,this.l-c("d3\/core\/lab")._K*(arguments.length?o:1)));};m.rgb=function(){return n(this.h,this.c,this.l).rgb();};function n(o,p,q){return c("d3\/core\/lab")._lab(q,Math.cos(o*=i)*p,Math.sin(o)*p);}j._Hcl=l;j._hcl=k;j._lab=n;f.exports=j;},null);
__d("d3/core/hsl",["d3/core/color","d3/core/rgb"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/core\/color")._Color,i=function(n,o,p){return arguments.length===1?n instanceof k?j(n.h,n.s,n.l):c("d3\/core\/rgb")._parse(""+n,c("d3\/core\/rgb")._hsl,j):j(+n,+o,+p);};function j(n,o,p){return new k(n,o,p);}function k(n,o,p){this.h=n;this.s=o;this.l=p;}var l=k.prototype=new h();l.brighter=function(n){n=Math.pow(.7,arguments.length?n:1);return j(this.h,this.s,this.l/n);};l.darker=function(n){n=Math.pow(.7,arguments.length?n:1);return j(this.h,this.s,n*this.l);};l.rgb=function(){return m(this.h,this.s,this.l);};function m(n,o,p){var q,r;n=n%360;if(n<0)n+=360;o=o<0?0:o>1?1:o;p=p<0?0:p>1?1:p;r=p<=.5?p*(1+o):p+o-p*o;q=2*p-r;function s(u){if(u>360){u-=360;}else if(u<0)u+=360;if(u<60)return q+(r-q)*u/60;if(u<180)return r;if(u<240)return q+(r-q)*(240-u)/60;return q;}function t(u){return Math.round(s(u)*255);}return c("d3\/core\/rgb")._rgb(t(n+120),t(n),t(n-120));}i._hsl=j;i._rgb=m;f.exports=i;},null);
__d("d3/core/xyz",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j){return j>.008856?Math.pow(j,1/3):7.787037*j+4/29;}function i(j){return Math.round(255*(j<=.00304?12.92*j:1.055*Math.pow(j,1/2.4)-.055));}g._lab=h;g._rgb=i;},null);
__d("d3/core/lab",["d3/core/color","d3/core/xyz","d3/core/core","d3/core/hcl","d3/core/rgb"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/core\/color")._Color,i=c("d3\/core\/xyz")._rgb,j=c("d3\/core\/core")._u03c0,k=function(v,w,x){return arguments.length===1?v instanceof m?l(v.l,v.a,v.b):v instanceof c("d3\/core\/hcl")._Hcl?c("d3\/core\/hcl")._lab(v.l,v.c,v.h):c("d3\/core\/rgb")._lab((v=c("d3\/core\/rgb")(v)).r,v.g,v.b):l(+v,+w,+x);};function l(v,w,x){return new m(v,w,x);}function m(v,w,x){this.l=v;this.a=w;this.b=x;}var n=18,o=.95047,p=1,q=1.08883,r=m.prototype=new h();r.brighter=function(v){return l(Math.min(100,this.l+n*(arguments.length?v:1)),this.a,this.b);};r.darker=function(v){return l(Math.max(0,this.l-n*(arguments.length?v:1)),this.a,this.b);};r.rgb=function(){return s(this.l,this.a,this.b);};function s(v,w,x){var y=(v+16)/116,z=y+w/500,aa=y-x/200;z=u(z)*o;y=u(y)*p;aa=u(aa)*q;return c("d3\/core\/rgb")._rgb(i(3.2404542*z-1.5371385*y-.4985314*aa),i(-.969266*z+1.8760108*y+.041556*aa),i(.0556434*z-.2040259*y+1.0572252*aa));}function t(v,w,x){return c("d3\/core\/hcl")._hcl(Math.atan2(x,w)/j*180,Math.sqrt(w*w+x*x),v);}function u(v){return v>.206893034?v*v*v:(v-4/29)/7.787037;}k._K=n;k._X=o;k._Y=p;k._Z=q;k._Lab=m;k._lab=l;k._rgb=s;k._hcl=t;f.exports=k;},null);
__d("d3/core/rgb",["d3/core/color","d3/core/xyz","d3/core/map","d3/core/hsl","d3/core/lab"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/core\/color")._Color,i=c("d3\/core\/xyz")._lab,j=function(u,v,w){return arguments.length===1?u instanceof l?k(u.r,u.g,u.b):o(""+u,k,c("d3\/core\/hsl")._rgb):k(~~u,~~v,~~w);};function k(u,v,w){return new l(u,v,w);}function l(u,v,w){this.r=u;this.g=v;this.b=w;}var m=l.prototype=new h();m.brighter=function(u){u=Math.pow(.7,arguments.length?u:1);var v=this.r,w=this.g,x=this.b,y=30;if(!v&&!w&&!x)return k(y,y,y);if(v&&v<y)v=y;if(w&&w<y)w=y;if(x&&x<y)x=y;return k(Math.min(255,Math.floor(v/u)),Math.min(255,Math.floor(w/u)),Math.min(255,Math.floor(x/u)));};m.darker=function(u){u=Math.pow(.7,arguments.length?u:1);return k(Math.floor(u*this.r),Math.floor(u*this.g),Math.floor(u*this.b));};m.hsl=function(){return p(this.r,this.g,this.b);};m.toString=function(){return "#"+n(this.r)+n(this.g)+n(this.b);};function n(u){return u<16?"0"+Math.max(0,u).toString(16):Math.min(255,u).toString(16);}function o(u,v,w){var x=0,y=0,z=0,aa,ba,ca;aa=/([a-z]+)\((.*)\)/i.exec(u);if(aa){ba=aa[2].split(",");switch(aa[1]){case "hsl":return w(parseFloat(ba[0]),parseFloat(ba[1])/100,parseFloat(ba[2])/100);case "rgb":return v(s(ba[0]),s(ba[1]),s(ba[2]));}}if(ca=t.get(u))return v(ca.r,ca.g,ca.b);if(u!=null&&u.charAt(0)==="#"){if(u.length===4){x=u.charAt(1);x+=x;y=u.charAt(2);y+=y;z=u.charAt(3);z+=z;}else if(u.length===7){x=u.substring(1,3);y=u.substring(3,5);z=u.substring(5,7);}x=parseInt(x,16);y=parseInt(y,16);z=parseInt(z,16);}return v(x,y,z);}function p(u,v,w){var x=Math.min(u/=255,v/=255,w/=255),y=Math.max(u,v,w),z=y-x,aa,ba,ca=(y+x)/2;if(z){ba=ca<.5?z/(y+x):z/(2-y-x);if(u==y){aa=(v-w)/z+(v<w?6:0);}else if(v==y){aa=(w-u)/z+2;}else aa=(u-v)/z+4;aa*=60;}else ba=aa=0;return c("d3\/core\/hsl")._hsl(aa,ba,ca);}function q(u,v,w){u=r(u);v=r(v);w=r(w);var x=i((.4124564*u+.3575761*v+.1804375*w)/c("d3\/core\/lab")._X),y=i((.2126729*u+.7151522*v+.072175*w)/c("d3\/core\/lab")._Y),z=i((.0193339*u+.119192*v+.9503041*w)/c("d3\/core\/lab")._Z);return c("d3\/core\/lab")._lab(116*y-16,500*(x-y),200*(y-z));}function r(u){return (u/=255)<=.04045?u/12.92:Math.pow((u+.055)/1.055,2.4);}function s(u){var v=parseFloat(u);return u.charAt(u.length-1)==="%"?Math.round(v*2.55):v;}var t=c("d3/core/map")({aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"});t.forEach(function(u,v){t.set(u,o(v,k,c("d3\/core\/hsl")._rgb));});j._names=t;j._rgb=k;j._parse=o;j._hsl=p;j._hex=n;j._lab=q;f.exports=j;},null);
__d("d3/core/ns",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},i={prefix:h,qualify:function(j){var k=j.indexOf(":"),l=j;if(k>=0){l=j.substring(0,k);j=j.substring(k+1);}return h.hasOwnProperty(l)?{space:h[l],local:j}:j;}};f.exports=i;},null);
__d("d3/core/transform",["d3/core/core","d3/core/ns"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3/core/core")._document,i=c("d3/core/core")._degrees,j=function(p){var q=h.createElementNS(c("d3/core/ns").prefix.svg,"g");return (j=function(r){q.setAttribute("transform",r);var s=q.transform.baseVal.consolidate();return new k(s?s.matrix:o);})(p);};function k(p){var q=[p.a,p.b],r=[p.c,p.d],s=m(q),t=l(q,r),u=m(n(r,q,-t))||0;if(q[0]*r[1]<r[0]*q[1]){q[0]*=-1;q[1]*=-1;s*=-1;t*=-1;}this.rotate=(s?Math.atan2(q[1],q[0]):Math.atan2(-r[0],r[1]))*i;this.translate=[p.e,p.f];this.scale=[s,u];this.skew=u?Math.atan2(t,u)*i:0;}k.prototype.toString=function(){return "translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")";};function l(p,q){return p[0]*q[0]+p[1]*q[1];}function m(p){var q=Math.sqrt(l(p,p));if(q){p[0]/=q;p[1]/=q;}return q;}function n(p,q,r){p[0]+=r*q[0];p[1]+=r*q[1];return p;}var o={a:1,b:0,c:0,d:1,e:0,f:0};f.exports=j;},null);
__d("d3/core/interpolate",["d3/core/rgb","d3/core/hsl","d3/core/lab","d3/core/hcl","d3/core/color","d3/core/transform"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3/core/rgb")._hex,i=c("d3/core/hsl")._rgb,j=c("d3/core/lab")._rgb,k=c("d3/core/hcl")._lab,l=c("d3/core/rgb")._names,m=c("d3\/core\/color")._Color,n=function(q,r){var s=n.interpolators.length,t;while(--s>=0&&!(t=n.interpolators[s](q,r)));return t;};n.number=function(q,r){r-=q;return function(s){return q+r*s;};};n.round=function(q,r){r-=q;return function(s){return Math.round(q+r*s);};};n.string=function(q,r){var s,t,u,v=0,w=0,x=[],y=[],z,aa;o.lastIndex=0;for(t=0;s=o.exec(r);++t){if(s.index)x.push(r.substring(v,w=s.index));y.push({i:x.length,x:s[0]});x.push(null);v=o.lastIndex;}if(v<r.length)x.push(r.substring(v));for(t=0,z=y.length;(s=o.exec(q))&&t<z;++t){aa=y[t];if(aa.x==s[0]){if(aa.i){if(x[aa.i+1]==null){x[aa.i-1]+=aa.x;x.splice(aa.i,1);for(u=t+1;u<z;++u)y[u].i--;}else{x[aa.i-1]+=aa.x+x[aa.i+1];x.splice(aa.i,2);for(u=t+1;u<z;++u)y[u].i-=2;}}else if(x[aa.i+1]==null){x[aa.i]=aa.x;}else{x[aa.i]=aa.x+x[aa.i+1];x.splice(aa.i+1,1);for(u=t+1;u<z;++u)y[u].i--;}y.splice(t,1);z--;t--;}else aa.x=n.number(parseFloat(s[0]),parseFloat(aa.x));}while(t<z){aa=y.pop();if(x[aa.i+1]==null){x[aa.i]=aa.x;}else{x[aa.i]=aa.x+x[aa.i+1];x.splice(aa.i+1,1);}z--;}if(x.length===1)return x[0]==null?y[0].x:function(){return r;};return function(ba){for(t=0;t<z;++t)x[(aa=y[t]).i]=aa.x(ba);return x.join("");};};n.transform=function(q,r){var s=[],t=[],u,v=c("d3/core/transform")(q),w=c("d3/core/transform")(r),x=v.translate,y=w.translate,z=v.rotate,aa=w.rotate,ba=v.skew,ca=w.skew,da=v.scale,ea=w.scale;if(x[0]!=y[0]||x[1]!=y[1]){s.push("translate(",null,",",null,")");t.push({i:1,x:n.number(x[0],y[0])},{i:3,x:n.number(x[1],y[1])});}else if(y[0]||y[1]){s.push("translate("+y+")");}else s.push("");if(z!=aa){if(z-aa>180){aa+=360;}else if(aa-z>180)z+=360;t.push({i:s.push(s.pop()+"rotate(",null,")")-2,x:n.number(z,aa)});}else if(aa)s.push(s.pop()+"rotate("+aa+")");if(ba!=ca){t.push({i:s.push(s.pop()+"skewX(",null,")")-2,x:n.number(ba,ca)});}else if(ca)s.push(s.pop()+"skewX("+ca+")");if(da[0]!=ea[0]||da[1]!=ea[1]){u=s.push(s.pop()+"scale(",null,",",null,")");t.push({i:u-4,x:n.number(da[0],ea[0])},{i:u-2,x:n.number(da[1],ea[1])});}else if(ea[0]!=1||ea[1]!=1)s.push(s.pop()+"scale("+ea+")");u=t.length;return function(fa){var ga=-1,ha;while(++ga<u)s[(ha=t[ga]).i]=ha.x(fa);return s.join("");};};n.rgb=function(q,r){q=c("d3/core/rgb")(q);r=c("d3/core/rgb")(r);var s=q.r,t=q.g,u=q.b,v=r.r-s,w=r.g-t,x=r.b-u;return function(y){return "#"+h(Math.round(s+v*y))+h(Math.round(t+w*y))+h(Math.round(u+x*y));};};n.hsl=function(q,r){q=c("d3/core/hsl")(q);r=c("d3/core/hsl")(r);var s=q.h,t=q.s,u=q.l,v=r.h-s,w=r.s-t,x=r.l-u;if(v>180){v-=360;}else if(v<-180)v+=360;return function(y){return i(s+v*y,t+w*y,u+x*y)+"";};};n.lab=function(q,r){q=c("d3/core/lab")(q);r=c("d3/core/lab")(r);var s=q.l,t=q.a,u=q.b,v=r.l-s,w=r.a-t,x=r.b-u;return function(y){return j(s+v*y,t+w*y,u+x*y)+"";};};n.hcl=function(q,r){q=c("d3/core/hcl")(q);r=c("d3/core/hcl")(r);var s=q.h,t=q.c,u=q.l,v=r.h-s,w=r.c-t,x=r.l-u;if(v>180){v-=360;}else if(v<-180)v+=360;return function(y){return k(s+v*y,t+w*y,u+x*y)+"";};};n.array=function(q,r){var s=[],t=[],u=q.length,v=r.length,w=Math.min(q.length,r.length),x;for(x=0;x<w;++x)s.push(n(q[x],r[x]));for(;x<u;++x)t[x]=q[x];for(;x<v;++x)t[x]=r[x];return function(y){for(x=0;x<w;++x)t[x]=s[x](y);return t;};};n.object=function(q,r){var s={},t={},u;for(u in q)if(u in r){s[u]=p(u)(q[u],r[u]);}else t[u]=q[u];for(u in r)if(!(u in q))t[u]=r[u];return function(v){for(u in s)t[u]=s[u](v);return t;};};var o=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g;function p(q){return q=="transform"?n.transform:n;}n.interpolators=[n.object,function(q,r){return r instanceof Array&&n.array(q,r);},function(q,r){return (typeof q==="string"||typeof r==="string")&&n.string(q+"",r+"");},function(q,r){return (typeof r==="string"?l.has(r)||/^(#|rgb\(|hsl\()/.test(r):r instanceof m)&&n.rgb(q,r);},function(q,r){return !isNaN(q=+q)&&!isNaN(r=+r)&&n.number(q,r);}];n._interpolateByName=p;f.exports=n;},null);
__d("d3/core/range",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(j,k,l){if(arguments.length<3){l=1;if(arguments.length<2){k=j;j=0;}}if((k-j)/l===Infinity)throw new Error("infinite range");var m=[],n=i(Math.abs(l)),o=-1,p;j*=n,k*=n,l*=n;if(l<0){while((p=j+l*++o)>k)m.push(p/n);}else while((p=j+l*++o)<k)m.push(p/n);return m;};function i(j){var k=1;while(j*k%1)k*=10;return k;}f.exports=h;},null);
__d("d3/core/rebind",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(j,k){var l=1,m=arguments.length,n;while(++l<m)j[n=arguments[l]]=i(j,k,k[n]);return j;};function i(j,k,l){return function(){var m=l.apply(k,arguments);return arguments.length?j:m;};}f.exports=h;},null);
__d("d3/core/requote",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(j){return j.replace(i,"\\$&");},i=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;f.exports=h;},null);
__d("d3/core/uninterpolate",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k){k=k-(j=+j)?1/(k-j):0;return function(l){return (l-j)*k;};}function i(j,k){k=k-(j=+j)?1/(k-j):0;return function(l){return Math.max(0,Math.min(1,(l-j)*k));};}g._uninterpolateNumber=h;g._uninterpolateClamp=i;},null);
__d("d3/scale/bilinear",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k,l){var m=k(i[0],i[1]),n=l(j[0],j[1]);return function(o){return n(m(o));};}g._bilinear=h;},null);
__d("d3/scale/nice",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(j,k){var l=0,m=j.length-1,n=j[l],o=j[m],p;if(o<n){p=l,l=m,m=p;p=n,n=o,o=p;}if(k=k(o-n)){j[l]=k.floor(n);j[m]=k.ceil(o);}return j;}function i(){return Math;}g._nice=h;g._niceDefault=i;},null);
__d("d3/scale/polylinear",["d3/core/bisect"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k,l){var m=[],n=[],o=0,p=Math.min(i.length,j.length)-1;if(i[p]<i[0]){i=i.slice().reverse();j=j.slice().reverse();}while(++o<=p){m.push(k(i[o-1],i[o]));n.push(l(j[o-1],j[o]));}return function(q){var r=c("d3/core/bisect")(i,q,1,p)-1;return n[r](m[r](q));};}g._polylinear=h;},null);
__d("d3/scale/scale",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={};function i(k){var l=k[0],m=k[k.length-1];return l<m?[l,m]:[m,l];}function j(k){return k.rangeExtent?k.rangeExtent():i(k.range());}h._scaleExtent=i;h._scaleRange=j;f.exports=h;},null);
__d("d3/scale/linear",["d3/core/uninterpolate","d3/scale/polylinear","d3/scale/bilinear","d3/scale/nice","d3/scale/scale","d3/core/interpolate","d3/core/rebind","d3/core/range","d3/core/core","d3/core/format"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/scale\/polylinear")._polylinear,i=c("d3\/scale\/bilinear")._bilinear,j=c("d3/core/uninterpolate")._uninterpolateClamp,k=c("d3/core/uninterpolate")._uninterpolateNumber,l=c("d3\/scale\/nice")._nice,m=c("d3\/scale\/scale")._scaleExtent,n=function(){return o([0,1],[0,1],c("d3/core/interpolate"),false);};function o(u,v,w,x){var y,z;function aa(){var ca=Math.min(u.length,v.length)>2?h:i,da=x?j:k;y=ca(u,v,da,w);z=ca(v,u,da,c("d3/core/interpolate"));return ba;}function ba(ca){return y(ca);}ba.invert=function(ca){return z(ca);};ba.domain=function(ca){if(!arguments.length)return u;u=ca.map(Number);return aa();};ba.range=function(ca){if(!arguments.length)return v;v=ca;return aa();};ba.rangeRound=function(ca){return ba.range(ca).interpolate(c("d3/core/interpolate").round);};ba.clamp=function(ca){if(!arguments.length)return x;x=ca;return aa();};ba.interpolate=function(ca){if(!arguments.length)return w;w=ca;return aa();};ba.ticks=function(ca){return s(u,ca);};ba.tickFormat=function(ca){return t(u,ca);};ba.nice=function(){l(u,q);return aa();};ba.copy=function(){return o(u,v,w,x);};return aa();}function p(u,v){return c("d3/core/rebind")(u,v,"range","rangeRound","interpolate","clamp");}function q(u){u=Math.pow(10,Math.round(Math.log(u)/Math.LN10)-1);return u&&{floor:function(v){return Math.floor(v/u)*u;},ceil:function(v){return Math.ceil(v/u)*u;}};}function r(u,v){var w=m(u),x=w[1]-w[0],y=Math.pow(10,Math.floor(Math.log(x/v)/Math.LN10)),z=v/x*y;if(z<=.15){y*=10;}else if(z<=.35){y*=5;}else if(z<=.75)y*=2;w[0]=Math.ceil(w[0]/y)*y;w[1]=Math.floor(w[1]/y)*y+y*.5;w[2]=y;return w;}function s(u,v){return c("d3/core/range").apply(c("d3/core/core"),r(u,v));}function t(u,v){return c("d3/core/format")(",."+Math.max(0,-Math.floor(Math.log(r(u,v)[2])/Math.LN10+.01))+"f");}n._linearTicks=s;n._linearTickFormat=t;n._linearNice=q;n._linearRebind=p;f.exports=n;},null);
__d("d3/scale/ordinal",["d3/core/map","d3/scale/scale","d3/core/range"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/core\/map")._Map,i=c("d3\/scale\/scale")._scaleExtent,j=function(){return k([],{t:"range",a:[[]]});};function k(l,m){var n,o,p;function q(s){return o[((n.get(s)||n.set(s,l.push(s)))-1)%o.length];}function r(s,t){return c("d3/core/range")(l.length).map(function(u){return s+t*u;});}q.domain=function(s){if(!arguments.length)return l;l=[];n=new h();var t=-1,u=s.length,v;while(++t<u)if(!n.has(v=s[t]))n.set(v,l.push(v));return q[m.t].apply(q,m.a);};q.range=function(s){if(!arguments.length)return o;o=s;p=0;m={t:"range",a:arguments};return q;};q.rangePoints=function(s,t){if(arguments.length<2)t=0;var u=s[0],v=s[1],w=(v-u)/(Math.max(1,l.length-1)+t);o=r(l.length<2?(u+v)/2:u+w*t/2,w);p=0;m={t:"rangePoints",a:arguments};return q;};q.rangeBands=function(s,t,u){if(arguments.length<2)t=0;if(arguments.length<3)u=t;var v=s[1]<s[0],w=s[v-0],x=s[1-v],y=(x-w)/(l.length-t+2*u);o=r(w+y*u,y);if(v)o.reverse();p=y*(1-t);m={t:"rangeBands",a:arguments};return q;};q.rangeRoundBands=function(s,t,u){if(arguments.length<2)t=0;if(arguments.length<3)u=t;var v=s[1]<s[0],w=s[v-0],x=s[1-v],y=Math.floor((x-w)/(l.length-t+2*u)),z=x-w-(l.length-t)*y;o=r(w+Math.round(z/2),y);if(v)o.reverse();p=Math.round(y*(1-t));m={t:"rangeRoundBands",a:arguments};return q;};q.rangeBand=function(){return p;};q.rangeExtent=function(){return i(m.a[0]);};q.copy=function(){return k(l,m);};return q.domain(l);}f.exports=j;},null);
__d("d3/time/time",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i=Date,j=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function k(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0]);}k.prototype={getDate:function(){return this._.getUTCDate();},getDay:function(){return this._.getUTCDay();},getFullYear:function(){return this._.getUTCFullYear();},getHours:function(){return this._.getUTCHours();},getMilliseconds:function(){return this._.getUTCMilliseconds();},getMinutes:function(){return this._.getUTCMinutes();},getMonth:function(){return this._.getUTCMonth();},getSeconds:function(){return this._.getUTCSeconds();},getTime:function(){return this._.getTime();},getTimezoneOffset:function(){return 0;},valueOf:function(){return this._.valueOf();},setDate:function(){l.setUTCDate.apply(this._,arguments);},setDay:function(){l.setUTCDay.apply(this._,arguments);},setFullYear:function(){l.setUTCFullYear.apply(this._,arguments);},setHours:function(){l.setUTCHours.apply(this._,arguments);},setMilliseconds:function(){l.setUTCMilliseconds.apply(this._,arguments);},setMinutes:function(){l.setUTCMinutes.apply(this._,arguments);},setMonth:function(){l.setUTCMonth.apply(this._,arguments);},setSeconds:function(){l.setUTCSeconds.apply(this._,arguments);},setTime:function(){l.setTime.apply(this._,arguments);}};var l=Date.prototype;h._time=i;h._daySymbols=j;h._utc=k;f.exports=h;},null);
__d("d3/time/interval",["d3/time/time"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3/time/time")._utc;function i(k,l,m){function n(t){var u=k(t),v=p(u,1);return t-u<v-t?u:v;}function o(t){l(t=k(new (c("d3/time/time")._time)(t-1)),1);return t;}function p(t,u){l(t=new (c("d3/time/time")._time)(+t),u);return t;}function q(t,u,v){var w=o(t),x=[];if(v>1){while(w<u){if(!(m(w)%v))x.push(new Date(+w));l(w,1);}}else while(w<u)x.push(new Date(+w)),l(w,1);return x;}function r(t,u,v){try{c("d3/time/time")._time=h;var w=new h();w._=t;return q(w,u,v);}finally{c("d3/time/time")._time=Date;}}k.floor=k;k.round=n;k.ceil=o;k.offset=p;k.range=q;var s=k.utc=j(k);s.floor=s;s.round=j(n);s.ceil=j(o);s.offset=j(p);s.range=r;return k;}function j(k){return function(l,m){try{c("d3/time/time")._time=h;var n=new h();n._=l;return k(n,m)._;}finally{c("d3/time/time")._time=Date;}};}g._interval=i;},null);
__d("d3/time/day",["d3/time/time","d3/time/interval","d3/time/year"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/time\/interval")._interval,i=h(function(j){var k=new (c("d3/time/time")._time)(1970,0);k.setFullYear(j.getFullYear(),j.getMonth(),j.getDate());return k;},function(j,k){j.setDate(j.getDate()+k);},function(j){return j.getDate()-1;});i.s=i.range;i.s.utc=i.utc.range;i.ofYear=function(j){var k=c("d3\/time\/year")(j);return Math.floor((j-k-(j.getTimezoneOffset()-k.getTimezoneOffset())*60000)/86400000);};f.exports=i;},null);
__d("d3/time/year",["d3/time/interval","d3/time/day"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/time\/interval")._interval,i=h(function(j){j=c("d3\/time\/day")(j);j.setMonth(0,1);return j;},function(j,k){j.setFullYear(j.getFullYear()+k);},function(j){return j.getFullYear();});i.s=i.range;i.s.utc=i.utc.range;f.exports=i;},null);
__d("d3/time/format-en_US",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h="%a %b %e %X %Y",i="%m/%d/%Y",j="%H:%M:%S",k=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],l=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],m=["January","February","March","April","May","June","July","August","September","October","November","December"],n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];g._formatDateTime=h;g._formatDate=i;g._formatTime=j;g._days=k;g._dayAbbreviations=l;g._months=m;g._monthAbbreviations=n;},null);
__d("d3/time/format",["d3/time/time","d3/core/map","d3/time/format-en_US","d3/core/requote","d3/time/day"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3/core/map")._Map,i=c("d3/time/format-en_US")._days,j=c("d3/time/format-en_US")._dayAbbreviations,k=c("d3/time/format-en_US")._months,l=c("d3/time/format-en_US")._monthAbbreviations,m=c("d3/time/format-en_US")._formatDateTime,n=c("d3/time/format-en_US")._formatDate,o=c("d3/time/format-en_US")._formatTime,p=function(xa){var ya=xa.length;function za(ab){var bb=[],cb=-1,db=0,eb,fb,gb;while(++cb<ya)if(xa.charCodeAt(cb)===37){bb.push(xa.substring(db,cb));if((fb=aa[eb=xa.charAt(++cb)])!=null)eb=xa.charAt(++cb);if(gb=ba[eb])eb=gb(ab,fb==null?eb==="e"?" ":"0":fb);bb.push(eb);db=cb+1;}bb.push(xa.substring(db,cb));return bb.join("");}za.parse=function(ab){var bb={y:1900,m:0,d:1,H:0,M:0,S:0,L:0},cb=q(bb,xa,ab,0);if(cb!=ab.length)return null;if("p" in bb)bb.H=bb.H%12+bb.p*12;var db=new (c("d3/time/time")._time)();db.setFullYear(bb.y,bb.m,bb.d);db.setHours(bb.H,bb.M,bb.S,bb.L);return db;};za.toString=function(){return xa;};return za;};function q(xa,ya,za,ab){var bb,cb,db=0,eb=ya.length,fb=za.length;while(db<eb){if(ab>=fb)return -1;bb=ya.charCodeAt(db++);if(bb===37){cb=ca[ya.charAt(db++)];if(!cb||(ab=cb(xa,za,ab))<0)return -1;}else if(bb!=za.charCodeAt(ab++))return -1;}return ab;}function r(xa){return new RegExp("^(?:"+xa.map(c("d3/core/requote")).join("|")+")","i");}function s(xa){var ya=new h(),za=-1,ab=xa.length;while(++za<ab)ya.set(xa[za].toLowerCase(),za);return ya;}function t(xa,ya,za){xa+="";var ab=xa.length;return ab<za?new Array(za-ab+1).join(ya)+xa:xa;}var u=r(i),v=r(j),w=r(k),x=s(k),y=r(l),z=s(l),aa={"-":"",_:" ","0":"0"},ba={a:function(xa){return j[xa.getDay()];},A:function(xa){return i[xa.getDay()];},b:function(xa){return l[xa.getMonth()];},B:function(xa){return k[xa.getMonth()];},c:p(m),d:function(xa,ya){return t(xa.getDate(),ya,2);},e:function(xa,ya){return t(xa.getDate(),ya,2);},H:function(xa,ya){return t(xa.getHours(),ya,2);},I:function(xa,ya){return t(xa.getHours()%12||12,ya,2);},j:function(xa,ya){return t(1+c("d3/time/day").ofYear(xa),ya,3);},L:function(xa,ya){return t(xa.getMilliseconds(),ya,3);},m:function(xa,ya){return t(xa.getMonth()+1,ya,2);},M:function(xa,ya){return t(xa.getMinutes(),ya,2);},p:function(xa){return xa.getHours()>=12?"PM":"AM";},S:function(xa,ya){return t(xa.getSeconds(),ya,2);},U:function(xa,ya){return t(c("d3/time/time").sundayOfYear(xa),ya,2);},w:function(xa){return xa.getDay();},W:function(xa,ya){return t(c("d3/time/time").mondayOfYear(xa),ya,2);},x:p(n),X:p(o),y:function(xa,ya){return t(xa.getFullYear()%100,ya,2);},Y:function(xa,ya){return t(xa.getFullYear()%10000,ya,4);},Z:wa,"%":function(){return "%";}},ca={a:da,A:ea,b:fa,B:ga,c:ha,d:oa,e:oa,H:pa,I:pa,L:sa,m:na,M:qa,p:ua,S:ra,x:ia,X:ja,y:la,Y:ka};function da(xa,ya,za){v.lastIndex=0;var ab=v.exec(ya.substring(za));return ab?za+=ab[0].length:-1;}function ea(xa,ya,za){u.lastIndex=0;var ab=u.exec(ya.substring(za));return ab?za+=ab[0].length:-1;}function fa(xa,ya,za){y.lastIndex=0;var ab=y.exec(ya.substring(za));return ab?(xa.m=z.get(ab[0].toLowerCase()),za+=ab[0].length):-1;}function ga(xa,ya,za){w.lastIndex=0;var ab=w.exec(ya.substring(za));return ab?(xa.m=x.get(ab[0].toLowerCase()),za+=ab[0].length):-1;}function ha(xa,ya,za){return q(xa,ba.c.toString(),ya,za);}function ia(xa,ya,za){return q(xa,ba.x.toString(),ya,za);}function ja(xa,ya,za){return q(xa,ba.X.toString(),ya,za);}function ka(xa,ya,za){ta.lastIndex=0;var ab=ta.exec(ya.substring(za,za+4));return ab?(xa.y=+ab[0],za+=ab[0].length):-1;}function la(xa,ya,za){ta.lastIndex=0;var ab=ta.exec(ya.substring(za,za+2));return ab?(xa.y=ma(+ab[0]),za+=ab[0].length):-1;}function ma(xa){return xa+(xa>68?1900:2000);}function na(xa,ya,za){ta.lastIndex=0;var ab=ta.exec(ya.substring(za,za+2));return ab?(xa.m=ab[0]-1,za+=ab[0].length):-1;}function oa(xa,ya,za){ta.lastIndex=0;var ab=ta.exec(ya.substring(za,za+2));return ab?(xa.d=+ab[0],za+=ab[0].length):-1;}function pa(xa,ya,za){ta.lastIndex=0;var ab=ta.exec(ya.substring(za,za+2));return ab?(xa.H=+ab[0],za+=ab[0].length):-1;}function qa(xa,ya,za){ta.lastIndex=0;var ab=ta.exec(ya.substring(za,za+2));return ab?(xa.M=+ab[0],za+=ab[0].length):-1;}function ra(xa,ya,za){ta.lastIndex=0;var ab=ta.exec(ya.substring(za,za+2));return ab?(xa.S=+ab[0],za+=ab[0].length):-1;}function sa(xa,ya,za){ta.lastIndex=0;var ab=ta.exec(ya.substring(za,za+3));return ab?(xa.L=+ab[0],za+=ab[0].length):-1;}var ta=/^\s*\d+/;function ua(xa,ya,za){var ab=va.get(ya.substring(za,za+=2).toLowerCase());return ab==null?-1:(xa.p=ab,za);}var va=c("d3/core/map")({am:0,pm:1});function wa(xa){var ya=xa.getTimezoneOffset(),za=ya>0?"-":"+",ab=~~(Math.abs(ya)/60),bb=Math.abs(ya)%60;return za+t(ab,"0",2)+t(bb,"0",2);}f.exports=p;},null);
__d("d3/time/hour",["d3/time/time","d3/time/interval"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/time\/interval")._interval,i=h(function(j){var k=j.getTimezoneOffset()/60;return new (c("d3/time/time")._time)((Math.floor(j/3600000-k)+k)*3600000);},function(j,k){j.setTime(j.getTime()+Math.floor(k)*3600000);},function(j){return j.getHours();});i.s=i.range;i.s.utc=i.utc.range;f.exports=i;},null);
__d("d3/time/minute",["d3/time/time","d3/time/interval"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/time\/interval")._interval,i=h(function(j){return new (c("d3/time/time")._time)(Math.floor(j/60000)*60000);},function(j,k){j.setTime(j.getTime()+Math.floor(k)*60000);},function(j){return j.getMinutes();});i.s=i.range;i.s.utc=i.utc.range;f.exports=i;},null);
__d("d3/time/month",["d3/time/interval","d3/time/day"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/time\/interval")._interval,i=h(function(j){j=c("d3/time/day")(j);j.setDate(1);return j;},function(j,k){j.setMonth(j.getMonth()+k);},function(j){return j.getMonth();});i.s=i.range;i.s.utc=i.utc.range;f.exports=i;},null);
__d("d3/time/second",["d3/time/time","d3/time/interval"],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c("d3\/time\/interval")._interval,i=h(function(j){return new (c("d3/time/time")._time)(Math.floor(j/1000)*1000);},function(j,k){j.setTime(j.getTime()+Math.floor(k)*1000);},function(j){return j.getSeconds();});i.s=i.range;i.s.utc=i.utc.range;f.exports=i;},null);