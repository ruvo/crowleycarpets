if (self.CavalryLogger) { CavalryLogger.start_js(["YmZUg"]); }

__d('AsyncLoader',['AsyncRequest','BaseAsyncLoader'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){this._endpoint=i;this._type=j;}Object.assign(h.prototype,c('BaseAsyncLoader').prototype);h.prototype.send=function(i,j,k,l,m){new (c('AsyncRequest'))(i).setData({ids:j}).setHandler(l).setErrorHandler(m).setAllowCrossPageTransition(true).setMethod('GET').setReadOnly(true).send();};f.exports=h;},null);
__d('ChatHovercard',['Arbiter','AsyncLoader','Bootloader','JSLogger','debounce'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=5,i=new (c('AsyncLoader'))('/ajax/chat/hovercard/sidebar.php','hover'),j=c('JSLogger').create('chat_hovercard');c('Arbiter').subscribe('Hovercard/dirty',i.reset.bind(i));function k(o,p){if(!o)return;i.get(o,function(q){setTimeout(function(){if(!q){j.error('fetch_failure',{id:o});return;}c('Bootloader').loadModules(["Hovercard"],function(r){var s=r.getDialog(q);if(!s){j.error('no_hovercard',{id:o,endpoint:q});return;}if(o==p.getActiveID())p.showHovercard(o,s);},'ChatHovercard');},0);});}function l(o,p){var q=[];function r(u){if(u>=0&&u<o.length)q.push(o[u]);}var s=o.indexOf(p);if(s>-1){r(s);for(var t=1;t<h;t++){r(s+t);r(s-t);}}return q.filter(function(u){return u;});}function m(o,p){var q=p.getActiveID();if(q){var r=o.getShowingUsers(),s=l(r,q);i.get(s,function(){});}}function n(o){var p=o.getHoverController();p.registerDefault(k);p.subscribe('hover',c('debounce')(m.bind(null,o,p),100));}f.exports=n;},null);
__d('ChatOrderedListHover',['csx','ArbiterMixin','CSS','ErrorUtils','Event','LayerHideOnBlur','Parent','mixin','setTimeoutAcrossTransitions','shield'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();function k(n){c('CSS').addClass(n,'fetching');}function l(n){c('CSS').removeClass(n,'fetching');}i=babelHelpers.inherits(m,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;function m(n){'use strict';j.constructor.call(this);this._orderedList=n;this._root=n.getRoot();c('Event').listen(this._root,'mouseover',this._mouseOver.bind(this));c('Event').listen(this._root,'mouseleave',this._mouseLeave.bind(this));n.subscribe('click',c('shield')(this._hide,this));}m.prototype._mouseOver=function(event){'use strict';if(this._paused)return;var n=event.getTarget(),o=c('Parent').bySelector(n,"._42fz")||c('Parent').bySelector(n,"._5a58");o&&this._setActiveItem(o);};m.prototype._mouseLeave=function(event){'use strict';this._setActiveItem(null);};m.prototype._clearTimeouts=function(){'use strict';this._showTimeout&&clearTimeout(this._showTimeout);this._showTimeout=null;this._hideTimeout&&clearTimeout(this._hideTimeout);this._hideTimeout=null;};m.prototype._hide=function(){'use strict';if(this._showingDialog){this._showingDialog.hide();this._showingDialog=null;this._showingID=null;}};m.prototype._show=function(){'use strict';var n=this.getActiveID(),o=false;if(this._defaultHandler){o=true;c('ErrorUtils').applyWithGuard(this._defaultHandler,{},[n,this]);}if(o&&this._showingID!=this.getActiveID())k(this._activeItem);};m.prototype._setActiveItem=function(n){'use strict';if(n!=this._activeItem){this._clearTimeouts();this._activeItem&&l(this._activeItem);if(n){this._activeItem=n;var o=this._showingDialog?0:600;this._showTimeout=c('setTimeoutAcrossTransitions')(function(){return this._show();}.bind(this),o);this.inform('hover');}else{this._activeItem=null;this._hideTimeout=c('setTimeoutAcrossTransitions')(function(){return this._hide();}.bind(this),10);this.inform('leave');}}};m.prototype.registerDefault=function(n){'use strict';this._defaultHandler=n;};m.prototype.getActiveID=function(){'use strict';var n=this._activeItem&&this._orderedList.getUserForNode(this._activeItem);return n||null;};m.prototype.showHovercard=function(n,o){'use strict';if(n==this.getActiveID()&&n!=this._showingID){this._clearTimeouts();l(this._activeItem);this._hide();this._showingDialog=o;this._showingID=n;var p=o.subscribe('mouseenter',this._setActiveItem.bind(this,this._activeItem)),q=o.subscribe('mouseleave',function(){p.unsubscribe();this._setActiveItem(null);}.bind(this)),r=o.subscribe('hide',function(){this.inform('hovercard_hide');p.unsubscribe();q.unsubscribe();r.unsubscribe();}.bind(this));o.enableBehavior(c('LayerHideOnBlur')).setContext(this._activeItem).setPosition('left').show();this.inform('hovercard_show');}};Object.assign(m.prototype,{_root:null,_activeItem:null,_hideTimeout:null,_showTimeout:null,_showingDialog:null,_showingID:null,_defaultHandler:null});f.exports=m;},null);
__d("ChatSidebarConstants",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={LITESTAND_CLASSIC_SIZE:32,IMAGE_SIZE:32};Object.assign(h,{getImageSize:function(i){if(i===false)return h.IMAGE_SIZE;return h.LITESTAND_CLASSIC_SIZE;},getItemHeight:function(){return h.IMAGE_SIZE+8;}});f.exports=h;},null);
__d('ChatSidebarItem.react',['cssVar','cx','ix','xuiglyph','AvailableListConstants','XUIBadge.react','ChatConfig','ChatSidebarConstants','Image.react','Link.react','MercuryConfig','MessengerTextWithEmoticons.react','React','SplitImage.react','TextWithEmoticons.react'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';var l,m;if(c.__markCompiled)c.__markCompiled();var n=c('React').PropTypes,o=c('ChatConfig').get('divebar_rounded_profile',false),p=9;l=babelHelpers.inherits(q,c('React').PureComponent);m=l&&l.prototype;function q(){var x,y;for(var z=arguments.length,aa=Array(z),ba=0;ba<z;ba++)aa[ba]=arguments[ba];return x=(y=m.constructor).call.apply(y,[this].concat(aa)),this.renderName=function(){if(this.props.nameCanHaveEmoji){var ca=c('React').createElement(c('TextWithEmoticons.react'),{renderEmoticons:true,renderEmoji:true,text:this.props.name});if(c('MercuryConfig').MessengerNewEmojiGK)ca=c('React').createElement(c('MessengerTextWithEmoticons.react'),{renderEmoticons:true,renderEmoji:true,text:this.props.name});return ca;}else return this.props.name;}.bind(this),this.renderUnreadCount=function(){var ca=this.props.unreadCount;if(!ca)return null;return (c('React').createElement(c('XUIBadge.react'),{count:ca,maxcount:p,type:'regular'}));}.bind(this),this.renderStatus=function(){var ca=this.$ChatSidebarItem1();if(!ca&&!this.props.statusTime)return null;var da=true;if(this.props.unreadCount&&this.props.unreadCount>0){ca=this.props.statusTime?null:ca;da=false;}return (c('React').createElement('div',{className:"_568z"},da?this.renderLastActiveTime():null,ca));}.bind(this),this.renderLastActiveTime=function(){return (c('React').createElement('div',{className:"_568-"},this.props.statusTime));}.bind(this),this.renderBirthday=function(){if(!this.props.birthday)return null;return (c('React').createElement(c('Image.react'),{className:"_5dv3",src:u()}));}.bind(this),this.renderPlayingGame=function(){if(this.props.statusTime||this.props.birthday||!this.props.isPlayingGame)return null;return (c('React').createElement('div',{className:"_46b2"},c('React').createElement(c('Image.react'),{className:"_46b3",src:w()})));}.bind(this),this.renderProfileBadge=function(){if(this.props.statusTime||this.props.isPlayingGame||this.props.birthday||!this.props.profileBadge)return null;return (c('React').createElement('div',{className:"_46b2"},c('React').createElement(c('Image.react'),{className:"_g7p",src:this.props.profileBadge})));}.bind(this),this.$ChatSidebarItem1=function(){if(this.props.isMessengerOnlyContact){return (c('React').createElement(c('Image.react'),{className:"_568_",src:v()}));}else if(this.props.status===c('AvailableListConstants').ACTIVE)return (c('React').createElement('span',{style:{background:"#42b72a",borderRadius:'50%',display:'inline-block',height:'6px',marginLeft:'4px',veritcalAlign:'middle',width:'6px'}}));return null;}.bind(this),x;}q.prototype.render=function(){var x="_55ln"+(this.props.context?' '+"_55lo":'')+(o?' '+"_qhr":'');return c('React').createElement(c('Link.react'),{className:x,href:{url:this.props.href},onClick:this.props.onClick,rel:'ignore'},c('React').createElement('div',{className:"_55lp"},c('React').createElement('div',{className:"_55lq"},c('React').createElement(c('SplitImage.react'),{size:this.props.imageSize||c('ChatSidebarConstants').IMAGE_SIZE,srcs:this.props.image||this.props.images})),c('React').createElement('div',{className:"_5bon"},this.renderProfileBadge(),this.renderPlayingGame(),this.renderBirthday(),this.renderUnreadCount(),this.renderStatus()),c('React').createElement('div',{className:"_55lr"},this.renderName()),c('React').createElement('div',{className:"_55ls"},this.props.context)));};q.propTypes={image:n.string,images:n.array,isPlayingGame:n.bool,birthday:n.bool,context:n.node,href:n.string,imageSize:n.number,name:n.node.isRequired,nameCanHaveEmoji:n.bool,onClick:n.func,status:n.number,statusTime:n.string,unreadCount:n.number,isMessengerOnlyContact:n.bool,profileBadge:n.string};var r=void 0,s=void 0,t=void 0;function u(){if(!r)r=j('/images/gifts/icons/cake_icon.png');return r;}function v(){if(!t)t=j('/images/chat/sidebar/buddylist_nub/phone.png');return t;}function w(){if(!s)s=k({name:'games',size:'small'});return s;}f.exports=q;},null);
__d('ChatSidebarThread.react',['fbt','ChatSidebarItem.react','ChatOpenTab','MercuryParticipantListRenderer','WebMessengerPermalinkConstants','React','TooltipData','MercuryConfig','FantaTabActions'],function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes,l=10,m='\n';i=babelHelpers.inherits(n,c('React').PureComponent);j=i&&i.prototype;function n(){var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return q=(r=j.constructor).call.apply(r,[this].concat(t)),this.$ChatSidebarThread1=function(){var v=[],w=this.props.participants.length,x=this.props.numOtherParticipants,y=Math.min(l,w);if(x-y===1)y--;for(var z=0;z<y;z++)v.push(this.props.participants[z].name);if(y<x)v.push(h._("and {num} more...",[h.param('num',x-y)]));return v.join(m);}.bind(this),this.$ChatSidebarThread2=function(v){v.preventDefault();if(c('MercuryConfig').FantaTabs){c('FantaTabActions').openTab(this.props.threadFBID);}else c('ChatOpenTab').openThread(this.props.threadFBID,this.props.referrer);}.bind(this),q;}n.prototype.render=function(){var q=this.props.name,r=o(this.props.threadFBID,this.props.participants,this.props.numOtherParticipants),s=q?r:undefined,t=this.props.image?[]:p(this.props.participants),u=q?q:r;return c('React').createElement('div',c('TooltipData').propsFor(this.$ChatSidebarThread1()),c('React').createElement(c('ChatSidebarItem.react'),{context:s,href:c('WebMessengerPermalinkConstants').getURIPathForThreadID(this.props.threadFBID),imageSize:this.props.imageSize,image:this.props.image,images:t,name:u,nameCanHaveEmoji:true,onClick:this.$ChatSidebarThread2,referrer:this.props.referrer,status:this.props.status,unreadCount:this.props.unreadCount}));};n.propTypes={image:k.string,imageSize:k.number,name:k.string,participants:k.array.isRequired,numOtherParticipants:k.number.isRequired,referrer:k.string,status:k.number,threadFBID:k.string,unreadCount:k.number};n.defaultProps={numOtherParticipants:l};function o(q,r,s){return new (c('MercuryParticipantListRenderer'))().setIsNewThread(!q).setUseShortName(true).setTotalParticipantCount(s).renderParticipantList(r);}function p(q){return q.map(function(r){return r.image_src;}).filter(function(r){return r;});}f.exports=n;},null);
__d('ChatSidebarGroupThreadsGroup.react',['cx','ChatSidebarThread.react','ChatSidebarSections','ChatSidebarConstants','PresencePrivacy','PresenceStatus','React'],function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return m=(n=j.constructor).call.apply(n,[this].concat(p)),this.$ChatSidebarGroupThreadsGroup1=function(r){var s=r.mercury_thread.participants,t=this.props.isDisconnected||c('PresencePrivacy').isUserOffline();return (c('React').createElement('li',{className:"_42fz"+(t?' '+"_570-":''),'data-id':r.uid,key:r.uid},c('React').createElement(c('ChatSidebarThread.react'),{image:r.mercury_thread.image_src,imageSize:c('ChatSidebarConstants').getImageSize(),name:r.mercury_thread.name,participants:r.participants_to_render,numOtherParticipants:s.length-1,referrer:c('ChatSidebarSections').ORDERED_LIST,status:c('PresenceStatus').getGroup(s),threadFBID:r.uid})));}.bind(this),m;}l.prototype.render=function(){return c('React').createElement('ul',null,this.props.groups.map(this.$ChatSidebarGroupThreadsGroup1));};l.propTypes={groups:k.array.isRequired,isDisconnected:k.bool};f.exports=l;},null);
__d('ChatSidebarHeader.react',['cx','React','joinClasses'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('React').PureComponent);j=i&&i.prototype;k.prototype.render=function(){'use strict';return (c('React').createElement('div',babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_55ob")}),c('React').createElement('div',{className:"_55oc"},this.props.children)));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;},null);
__d('ChatSidebarItemPlaceholder.react',['cx','React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=function(j){return (c('React').createElement('li',{className:"_42fz"+(j.isDisconnected?' '+"_570-":'')},c('React').createElement('div',{className:"_55ln"+(j.roundedProfile?' '+"_qhr":'')},c('React').createElement('div',{className:"_55lp"},c('React').createElement('span',{className:"_1qh _55lq"}),c('React').createElement('span',{className:"_55lr"},c('React').createElement('span',{className:"_1qh",style:{width:50+Math.ceil(Math.random()*50)+'px'}}))))));};f.exports=i;},null);
__d('ChatSidebarUser.react',['ChatOpenTab','ChatSidebarItem.react','FantaTabActions','MercuryConfig','WebMessengerPermalinkConstants','React'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').PureComponent);i=h&&h.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return l=(m=i.constructor).call.apply(m,[this].concat(o)),this.$ChatSidebarUser1=function(q){if(c('MercuryConfig').FantaTabs){c('FantaTabActions').openTab(this.props.userID,{type:'user'});}else c('ChatOpenTab').openUserTab(this.props.userID,this.props.sectionName,{global_slot:this.props.slot});q.preventDefault();}.bind(this),l;}k.prototype.render=function(){'use strict';var l=c('WebMessengerPermalinkConstants').getURIPathForIDOrVanity(this.props.userID);return c('React').createElement(c('ChatSidebarItem.react'),{onClick:this.$ChatSidebarUser1,href:l,imageSize:this.props.imageSize,image:this.props.image,isPlayingGame:this.props.isPlayingGame,name:this.props.name,nameCanHaveEmoji:false,status:this.props.status,birthday:this.props.birthday,statusTime:this.props.statusTime,context:this.props.context,unreadCount:this.props.unreadCount,isMessengerOnlyContact:this.props.isMessengerOnlyContact,profileBadge:this.props.profileBadge});};k.propTypes={birthday:j.bool,image:j.string,imageSize:j.number,isPlayingGame:j.bool,name:j.string,sectionName:j.string.isRequired,slot:j.number,status:j.number,statusTime:j.string,unreadCount:j.number,userID:j.string.isRequired,isMessengerOnlyContact:j.bool,profileBadge:j.string};f.exports=k;},null);
__d('ChatUnreadCountStore',['ChatDispatcher','ChatUnreadCountActionTypes','FluxStore','ifRequired'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('FluxStore'));i=h&&h.prototype;function j(){i.constructor.call(this,c('ChatDispatcher'));}j.prototype.__onDispatch=function(k){var l=k.type;switch(l){case c('ChatUnreadCountActionTypes').COUNT_UPDATED:this.__emitChange();break;default:break;}};j.prototype.get=function(k){return c('ifRequired')('ChatUnreadCount',function(l){return l.get().getUnreadCountForUID(k);},function(){return 0;});};f.exports=new j();},null);
__d('PresenceStatusStore',['ChatDispatcher','FluxStore','PresenceStatus','PresenceStatusActionTypes'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('FluxStore'));i=h&&h.prototype;function j(){i.constructor.call(this,c('ChatDispatcher'));}j.prototype.__onDispatch=function(k){var l=k.type;switch(l){case c('PresenceStatusActionTypes').AVAILABILITY_CHANGED:this.__emitChange();break;default:break;}};j.prototype.get=function(k){return c('PresenceStatus').get(k);};j.prototype.getIsPlaying=function(k){return c('PresenceStatus').isPlayingCanvasGameUser(k);};f.exports=new j();},null);
__d('ShortProfilesActionTypes',['keyMirror'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();f.exports=c('keyMirror')({PROFILE_UPDATED:null});},null);
__d('ShortProfilesStore',['ChatDispatcher','FluxStore','ShortProfiles','ShortProfilesActionTypes'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('FluxStore'));i=h&&h.prototype;function j(){i.constructor.call(this,c('ChatDispatcher'));}j.prototype.__onDispatch=function(k){var l=k.type;switch(l){case c('ShortProfilesActionTypes').PROFILE_UPDATED:this.__emitChange();break;default:break;}};j.prototype.get=function(k){var l=c('ShortProfiles').getNow(k);if(!l)c('ShortProfiles').get(k,this.$ShortProfilesStore1);return l;};j.prototype.$ShortProfilesStore1=function(k){c('ChatDispatcher').dispatch({type:c('ShortProfilesActionTypes').PROFILE_UPDATED});};f.exports=new j();},null);
__d("XProfileBadgeAsyncController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/profile_badge\/async\/badges\/",{user_ids:{type:"StringVector",defaultValue:[]}});},null);
__d('ChatSidebarUserGroup.react',['cx','AsyncRequest','AvailableListConstants','ChatConfig','ChatSidebarItemPlaceholder.react','ChatSidebarSections','ChatSidebarUser.react','ChatUnreadCountStore','LastActiveTimes','PresencePrivacy','PresenceStatusStore','ProfileBadgeConfig','React','ShortProfilesStore','StoreAndPropBasedStateMixin','SubscriptionsHandler','XProfileBadgeAsyncController','createCancelableFunction'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('ChatConfig').get('divebar_rounded_profile',false),k=Object.keys(c('ChatSidebarSections')).map(function(m){return c('ChatSidebarSections')[m];}),l=c('React').createClass({displayName:'ChatSidebarUserGroup',_subscriptions:null,_updateProfileBadges:null,mixins:[c('StoreAndPropBasedStateMixin')(c('ChatUnreadCountStore'),c('PresenceStatusStore'),c('ShortProfilesStore'))],propTypes:{ids:i.arrayOf(i.string).isRequired,isDisconnected:i.bool,loadExtras:i.bool,sectionName:i.oneOf(k).isRequired},statics:{calculateState:function(m){var n={},o={},p=[],q={};m.ids.forEach(function(r){var s=c('PresenceStatusStore').get(r);if(s===c('AvailableListConstants').ACTIVE)o[r]=s;p.push(c('ShortProfilesStore').get(r));q[r]=c('ChatUnreadCountStore').get(r);if(m.loadExtras)n[r]=c('PresenceStatusStore').getIsPlaying(r);});return {playingMap:n,statusMap:o,unreadCounts:q,userData:p};}},componentWillMount:function(){this._subscriptions=new (c('SubscriptionsHandler'))();this._updateProfileBadges=c('createCancelableFunction')(function(){var m=c('XProfileBadgeAsyncController').getURIBuilder().setStringVector('user_ids',this.props.ids).getURI();new (c('AsyncRequest'))().setURI(m).setHandler(function(n){this.setState({userIDToProfileBadge:n.payload});}.bind(this)).send();}.bind(this));this._subscriptions.addSubscriptions(this._updateProfileBadges);this.componentWillReceiveProps(this.props);},shouldComponentUpdate:function(m,n){var o=this.props,p=o.ids,q=babelHelpers.objectWithoutProperties(o,['ids']);for(var r in q)if(q.hasOwnProperty(r))if(q[r]!==m[r])return true;var s=n.userData,t=this.state?this.state.userData:[];if(s.length!==t.length)return true;for(var u=0;u<t.length;u++)if(!t[u]||!s[u]||t[u].id!==s[u].id)return true;for(var v in this.state.unreadCounts)if(this.state.unreadCounts[v]!==n.unreadCounts[v])return true;var w=this.state.statusMap,x=n.statusMap;for(var y in w)if(w.hasOwnProperty(y))if(w[y]!==x[y])return true;for(var z in x)if(x.hasOwnProperty(z))if(x[z]!==w[z])return true;return false;},componentWillUnmount:function(){this._subscriptions.release();},componentWillReceiveProps:function(m){if(this.props.loadExtras&&c('ProfileBadgeConfig').show_sidebar_badge)this._updateProfileBadges&&this._updateProfileBadges();},render:function(){return (c('React').createElement('ul',this.props,this.state.userData.map(this._renderProfile)));},_renderProfile:function(m,n){if(!m)return (c('React').createElement(c('ChatSidebarItemPlaceholder.react'),{isDisconnected:!!this.props.isDisconnected,key:'placeholder'+n,roundedProfile:j}));if(!m.id)return null;var o=this.state.statusMap[m.id],p=o!==c('AvailableListConstants').ACTIVE?c('LastActiveTimes').getShortDisplay(m.id):undefined,q=this.props.isDisconnected||!c('PresencePrivacy').allows(m.id),r=this.state.userIDToProfileBadge?this.state.userIDToProfileBadge[m.id]:undefined;return (c('React').createElement('li',{className:"_42fz"+(q?' '+"_570-":''),'data-id':m.id,key:m.id},c('React').createElement(c('ChatSidebarUser.react'),{birthday:m.is_birthday,image:m.thumbSrc,imageSize:this.props.imageSize,isPlayingGame:!!this.state.playingMap[m.id],name:m.name,roundedProfile:j,sectionName:this.props.sectionName,slot:n,status:o,statusTime:p,userID:m.id,unreadCount:this.state.unreadCounts[m.id],isMessengerOnlyContact:m.is_messenger_only,profileBadge:r})));}});f.exports=l;},null);
__d('ChatSidebarOrderedList.react',['cx','fbt','Bootloader','ChatQuietLinks','ChatReliabilityInstrumentation','ChatSidebarConstants','ChatSidebarGroupThreadsGroup.react','ChatSidebarHeader.react','ChatSidebarSections','ChatSidebarUserGroup.react','PresencePrivacy','React','ReactDOM','Run','Scroll','SubscriptionsHandler','WorkModeConfig','ifRequired'],function a(b,c,d,e,f,g,h,i){'use strict';var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').PureComponent);k=j&&j.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return n=(o=k.constructor).call.apply(o,[this].concat(q)),this.state={isDisconnected:false,renderBelowFold:false},this.$ChatSidebarOrderedList1=null,this.$ChatSidebarOrderedList7=function(s){var t=this.props.scrollContainer;if(!t)return;var u=t.clientHeight,v=t.scrollHeight,w=c('Scroll').getTop(t),x=Math.min(s.offsetTop,v-u);if(w!==x)c('ifRequired')('Animation',function(y){var z=Math.abs(x-w)/t.clientHeight*500;new y(t).to('scrollTop',x).ease(y.ease.end).duration(z).go();},function(){c('Scroll').setTop(t,x);});}.bind(this),this.$ChatSidebarOrderedList3=function(){var s=c('ChatSidebarConstants').getImageSize(this.props.isSidebar),t=this.props.topUsers.filter(function(x){return !c('PresencePrivacy').allows(x);});t.splice(-2);var u=c('React').createElement('a',{ajaxify:'/ajax/chat/privacy/settings_dialog.php?ref=whitelist_separator',href:'#',rel:'dialog'},i._("Edit")),v=c('WorkModeConfig').is_work_user?i._("MORE COWORKERS"):i._("MORE CONTACTS"),w=c('WorkModeConfig').is_work_user?i._("These coworkers can't see you on chat. {=link}",[i.param('=link',u)]):i._("These contacts can't see you on chat. {=link}",[i.param('=link',u)]);return [c('React').createElement(c('ChatSidebarHeader.react'),{key:'usersSeparator1'},v),c('React').createElement(c('ChatSidebarHeader.react'),{className:"_5j9-",key:'usersSeparator2'},w),c('React').createElement(c('ChatSidebarUserGroup.react'),{ids:t,isDisconnected:this.state.isDisconnected,imageSize:s,key:c('ChatSidebarSections').OFFLINE_USERS,loadExtras:this.state.renderBelowFold,sectionName:c('ChatSidebarSections').OFFLINE_USERS})];}.bind(this),this.$ChatSidebarOrderedList4=function(){if(this.props.availableUsers.length===0)return null;if(!this.state.renderBelowFold){var s=c('ChatSidebarConstants').getItemHeight();return [c('React').createElement('div',{key:c('ChatSidebarSections').MORE_ONLINE_FRIENDS,style:{height:s*this.props.availableUsers.length}})];}var t=c('ChatSidebarConstants').getImageSize(this.props.isSidebar),u=c('WorkModeConfig').is_work_user?i._("{MORE ONLINE COWORKERS} ({=count})",[i.param('MORE ONLINE COWORKERS',i._("MORE COWORKERS")),i.param('=count',this.props.availableUsers.length)]):i._("{MORE ONLINE CONTACTS} ({=count})",[i.param('MORE ONLINE CONTACTS',i._("MORE CONTACTS")),i.param('=count',this.props.availableUsers.length)]),v=c('React').createElement(c('ChatSidebarUserGroup.react'),{ids:this.props.availableUsers,imageSize:t,isDisconnected:this.state.isDisconnected,key:c('ChatSidebarSections').MORE_ONLINE_FRIENDS,loadExtras:this.state.renderBelowFold,sectionName:c('ChatSidebarSections').MORE_ONLINE_FRIENDS});return [c('React').createElement(c('ChatSidebarHeader.react'),{ref:'usersSeparator',key:'usersSeparator',onClick:function(){return this.$ChatSidebarOrderedList7(c('ReactDOM').findDOMNode(this.refs.usersSeparator));}.bind(this)},u),v];}.bind(this),this.$ChatSidebarOrderedList6=function(){if(this.props.groups.length===0)return null;var s=this.state.isDisconnected||c('PresencePrivacy').isUserOffline();return [c('React').createElement(c('ChatSidebarHeader.react'),{ref:'groupSeparator',key:'groupSeparator',className:s?"_570-":'',onClick:function(){return this.$ChatSidebarOrderedList7(c('ReactDOM').findDOMNode(this.refs.groupSeparator));}.bind(this)},i._("GROUP CONVERSATIONS")),c('React').createElement(c('ChatSidebarGroupThreadsGroup.react'),{groups:this.props.groups,isDisconnected:this.state.isDisconnected,key:'group_threads_section',loadExtras:this.state.renderBelowFold})];}.bind(this),this.$ChatSidebarOrderedList5=function(){var s=c('ChatSidebarConstants').getImageSize(this.props.isSidebar),t=this.props.topUsers;if(c('PresencePrivacy').getVisibility()==c('PresencePrivacy').ONLINE)t=this.props.topUsers.filter(function(u){return c('PresencePrivacy').allows(u);});return (c('React').createElement(c('ChatSidebarUserGroup.react'),{key:c('ChatSidebarSections').ORDERED_LIST,ids:t,isDisconnected:this.state.isDisconnected,imageSize:s,loadExtras:this.state.renderBelowFold,sectionName:c('ChatSidebarSections').ORDERED_LIST}));}.bind(this),this.$ChatSidebarOrderedList2=function(){c('Bootloader').loadModules(["ChannelConnection"],function(s){this.$ChatSidebarOrderedList1.addSubscriptions(s.subscribe([s.CONNECTED,s.RECONNECTING,s.SHUTDOWN,s.MUTE_WARNING,s.UNMUTE_WARNING],function(){var t=s.disconnected();if(t!==this.state.isDisconnected){if(t){c('ChatReliabilityInstrumentation').logCHANNEL_DISCONNECT();}else c('ChatReliabilityInstrumentation').logCHANNEL_CONNECT();this.setState({isDisconnected:t});}}.bind(this)));}.bind(this),'ChatSidebarOrderedList.react');}.bind(this),n;}m.prototype.componentDidMount=function(){c('ChatQuietLinks').nukeLinks(c('ReactDOM').findDOMNode(this));this.$ChatSidebarOrderedList1=new (c('SubscriptionsHandler'))();c('Run').onAfterLoad(function(){this.setState({renderBelowFold:true});this.$ChatSidebarOrderedList2();}.bind(this));};m.prototype.componentWillUnmount=function(){this.$ChatSidebarOrderedList1.release();};m.prototype.render=function(){var n=c('PresencePrivacy').getOnlinePolicy()===c('PresencePrivacy').ONLINE_TO_WHITELIST&&c('PresencePrivacy').getVisibility()?this.$ChatSidebarOrderedList3():this.$ChatSidebarOrderedList4();return c('React').createElement('div',null,this.$ChatSidebarOrderedList5(),this.$ChatSidebarOrderedList6(),n);};m.propTypes={availableUsers:l.array.isRequired,groups:l.array.isRequired,isSidebar:l.bool.isRequired,scrollContainer:l.object,topUsers:l.array.isRequired};f.exports=m;},null);
__d('ChatSortUsers',['ShortProfiles','TokenizeUtil'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={};function i(k){if(h[k])return h[k];var l=(c('ShortProfiles').getNow(k)||{}).name;if(l)return h[k]=c('TokenizeUtil').flatten(l);return '~';}var j={sortAlphabetical:function(k,l){var m=i(k),n=i(l);if(m!==n)return m<n?-1:1;return 0;}};f.exports=j;},null);
__d('PresenceOrderedList',['ChatSidebarPreloadStore','ChatSortUsers','PresencePrivacy','PresenceStatus'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(k){return k.map(function(l){var m=l.slice(0,-2),n=Number(l.slice(-1));return [m,n];});}function i(k,l){var m=[];k.forEach(function(n){var o=n[0],p=n[1];if(m.length>=l)return;if(c('PresencePrivacy').getFriendVisibility(o)==c('PresencePrivacy').BLACKLISTED)return;if(p==c('PresenceStatus').get(o))m.push(o);});return m;}function j(){'use strict';this.$PresenceOrderedList1=null;}j.prototype.getSorted=function(k,l){'use strict';if(this.$PresenceOrderedList1){l(i(this.$PresenceOrderedList1,k));return;}c('ChatSidebarPreloadStore').onLoaded(function(m){var n=m.buddies;this.$PresenceOrderedList1=h(n);l(i(this.$PresenceOrderedList1,k));}.bind(this));};j.prototype.getAvailableSorted=function(k){'use strict';var l=c('PresenceStatus').getOnlineIDs();if(k)l=l.filter(function(m){return k&&k.indexOf(m)===-1;});return l.sort(c('ChatSortUsers').sortAlphabetical);};j.prototype.getAllSorted=function(k){'use strict';var l=[],m=this.$PresenceOrderedList1||[];c('PresenceStatus').getAllIDs().concat(m.map(function(n){return n[0];})).forEach(function(n){return l.indexOf(n)===-1&&l.push(n);});if(k)l=l.filter(function(n){return k&&k.indexOf(n)===-1;});return l.sort(c('ChatSortUsers').sortAlphabetical);};f.exports=new j();},null);
__d('ChatOrderedList',['csx','Arbiter','ArbiterMixin','AvailableList','AvailableListConstants','CSS','ChatConfig','ChatHovercard','ChatOptions','ChatOrderedListHover','ChatSidebarConstants','ChatSidebarOrderedList.react','ChatSidebarPreloadStore','DOM','DataStore','Event','JSLogger','Parent','PresenceOrderedList','PresencePrivacy','React','ReactDOM','WorkModeConfig','debounceAcrossTransitions','mixin','shield'],function a(b,c,d,e,f,g,h){var i,j;if(c.__markCompiled)c.__markCompiled();i=babelHelpers.inherits(k,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;function k(l,m){'use strict';j.constructor.call(this);this._isSidebar=l;this._root=m;this._isVisible=false;this._excludedIds={};this._numTopFriends=5;this._groups=[];this._hoverController=null;this._isHovering=false;this._orderedList=c('DOM').find(this._root,'.fbChatOrderedList');c('Event').listen(this._orderedList,'mouseover',function(){this._isHovering=true;}.bind(this));c('Event').listen(this._orderedList,'mouseout',function(){this._isHovering=false;this._render();}.bind(this));this._scrollableOrderedList=c('Parent').byClass(this._root,'scrollableOrderedList');this._scrollableArea=c('Parent').byClass(this._root,'scrollable');if(this._isSidebar)new (c('ChatHovercard'))(this);c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(n,o){this.getSortedList(function(p){o.chat_lists=o.chat_lists||{sorted_list:p,available_list:c('PresenceOrderedList').getAvailableSorted(),excluded_list:this._excludedIds};}.bind(this));}.bind(this));c('PresencePrivacy').subscribe('privacy-user-presence-changed',c('shield')(this._render,this));c('AvailableList').subscribe(c('AvailableListConstants').ON_AVAILABILITY_CHANGED,c('shield')(this._render,this));}k.prototype.getShowingUsers=function(){'use strict';return c('DOM').scry(this._root,"li._42fz,li._5a58").map(this.getUserForNode);};k.prototype.getUserForNode=function(l){'use strict';return c('DataStore').get(l,'id')||c('DataStore').get(l,'serverthreadid');};k.prototype.getHoverController=function(){'use strict';if(!this._hoverController)this._hoverController=new (c('ChatOrderedListHover'))(this);return this._hoverController;};k.prototype.getItemHeight=function(){'use strict';return c('ChatSidebarConstants').getItemHeight();};k.prototype.getRoot=function(){'use strict';return this._root;};k.prototype.getSortedList=function(l){'use strict';c('PresenceOrderedList').getSorted(this._numTopFriends,function(m){return l(m);});};k.prototype.hide=function(){'use strict';if(!this._isVisible)return;this._isVisible=false;c('CSS').hide(this._scrollableOrderedList||this._root);this.inform('hide');};k.prototype.setNumTopFriends=function(l,m){'use strict';if(c('ChatConfig').get('web_messenger_divebar_show_more_groups')){this.setNumTopFriendsMoreGroups(l,m);return;}c('ChatSidebarPreloadStore').onLoaded(function(n){var o=n.groups,p=!c('ChatOptions').getSetting('hide_groups')?o:[],q=l-p.length;if(q>c('ChatConfig').get('min_top_friends'))l=q;l--;if(l!==this._numTopFriends||p.length!==this._groups.length){this._groups=p;this._numTopFriends=l;if(m){this._renderOrderedList();}else this._render();}}.bind(this));};k.prototype.setNumTopFriendsMoreGroups=function(l,m){'use strict';c('ChatSidebarPreloadStore').onLoaded(function(n){var o=n.groups,p=!c('ChatOptions').getSetting('hide_groups')?o:[],q=Math.max(Math.min(Math.floor(l/5),p.length),2),r=p.length>q?q:p.length,s=Math.max(l-r,1);if(s>1)s--;p=p.slice(0,r);if(s!==this._numTopFriends||p.length!==this._groups.length){this._numTopFriends=s;this._groups=p;if(m){this._renderOrderedList();}else this._render();}}.bind(this));};k.prototype._renderOrderedList=function(){'use strict';if(!this._isVisible||this._isHovering)return;c('PresenceOrderedList').getSorted(this._numTopFriends,function(l){var m=c('WorkModeConfig').is_work_user?c('PresenceOrderedList').getAllSorted(l):c('PresenceOrderedList').getAvailableSorted(l);c('ReactDOM').render(c('React').createElement(c('ChatSidebarOrderedList.react'),{availableUsers:m,isSidebar:this._isSidebar,scrollContainer:this._scrollContainer,topUsers:l,groups:this._groups}),this._orderedList);this.inform('render');}.bind(this));};k.prototype._render=function(){'use strict';this._render=c('debounceAcrossTransitions')(this._renderOrderedList.bind(this),300);this._render();};k.prototype.show=function(){'use strict';if(this._isVisible)return;this._isVisible=true;c('CSS').show(this._scrollableOrderedList||this._root);this._render();this.inform('show');};k.prototype.isVisible=function(){'use strict';return this._isVisible;};k.prototype.setScrollContainer=function(l){'use strict';if(c('DOM').contains(l,this._root))this._scrollContainer=l;};f.exports=k;},null);
__d('ErrorSignal',['AsyncRequest','AsyncSignal','BanzaiODS','ErrorSignalConfig','SessionName','ScriptPath','SiteData','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(l,m){if(l&&l==='beacon_error'){c('BanzaiODS').bumpEntityKey('js_error_reporting','beacon_error_signal.sent');new (c('AsyncSignal'))(c('ErrorSignalConfig').uri,{c:l,m:m}).send();return;}else if(l&&l==='async_error'){var n=JSON.parse(m),o=n.err_code,p=n.path;if(o in {'1004':1,'12029':1,'12031':1,'12152':1}&&p.indexOf('scribe_endpoint.php')==-1){new (c('AsyncRequest'))().setURI(c('ErrorSignalConfig').uri).setData({c:'async_error',m:m}).setMethod('GET').setReadOnly(true).setOption('suppressEvaluation',true).setOption('suppressErrorAlerts',true).setHandler(c('emptyFunction')).setErrorHandler(c('emptyFunction')).send(true);return;}}if(l==='javascript_error')c('BanzaiODS').bumpEntityKey('js_error_reporting','error_signal.sent');new (c('AsyncSignal'))(c('ErrorSignalConfig').uri,{c:l,m:m}).send();}function i(l,m){m=m||{};m.svn_rev=c('SiteData').revision;m.push_phase=c('SiteData').push_phase;m.script_path=c('ScriptPath').getScriptPath();m.extra=m.extra||{};m.extra.hrm=c('SiteData').be_mode;var n=(c('SessionName').getName()||'-')+'/-';h('javascript_error',JSON.stringify({c:l,a:n,m:m}));}function j(){var l='beacon_error',m=(c('SessionName').getName()||'-')+'/-',n={};n.error=l;n.svn_rev=c('SiteData').revision;n.push_phase=c('SiteData').push_phase;n.script_path=c('ScriptPath').getScriptPath();n.extra={message:l,type:'info'};h(l,JSON.stringify({c:l,a:m,m:n}));}var k={sendBeaconErrorSignal:j,sendErrorSignal:h,logJSError:i};f.exports=k;b.ErrorSignal=k;},null);
__d('FeedLoadEventLogger',['Arbiter','BanzaiLogger','ErrorSignal','ErrorUtils','LitestandMessages','PageletEventConstsJS','URI'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=['substream_','more_pager_pagelet_','pagelet_composer','pagelet_navigation','pagelet_rhc_footer'],i=[c('PageletEventConstsJS').ARRIVE_END,c('PageletEventConstsJS').DISPLAY_END,c('PageletEventConstsJS').ONLOAD_END],j=['pre_page_transition','page_transition'],k=[c('LitestandMessages').NEWSFEED_LOAD,c('LitestandMessages').STORIES_REQUESTED,c('LitestandMessages').STORIES_INSERTED,c('LitestandMessages').NEWER_STORIES_REQUESTED,c('LitestandMessages').NEWER_STORIES_INSERTED,c('LitestandMessages').STREAM_LOAD_ERROR,c('LitestandMessages').STREAM_LOAD_RETRY,c('LitestandMessages').DUPLICATE_CURSOR_ERROR],l=false;function m(q){return q&&(q.getPath()==='/'||q.getPath()==='/home.php');}function n(q){c('BanzaiLogger').log('WebFeedLoadLoggerConfig',q);}function o(q){if(!q)return null;if(q.indexOf('more_pager_pagelet_')===0)return 'more_pager_pagelet_n';if(q.indexOf('substream_')===0&&q!=='substream_0'&&q!=='substream_1')return 'substream_n';return q;}var p={init:function(){if(l)return;c('Arbiter').subscribe('BigPipe/init',function(q,r){if(!r||!r.arbiter)return;r.arbiter.subscribe('pagelet_event',function(s,t){if(t&&m(c('URI').getNextURI())&&i.indexOf(t.event)>=0&&h.some(function(u){return t.id.indexOf(u)===0;}))n({event:'pagelet',pagelet_id:o(t.id),pagelet_event_type:t.event,pagelet_phase:t.phase.toString()});});});c('Arbiter').subscribe(j,function(q,r){if(r){var s=r.to||r.uri;if(m(s))n({event:'page_transition',transition_event_type:q});}});c('Arbiter').subscribe(k,function(q,r){var s=null,t=null;if(q===c('LitestandMessages').STREAM_LOAD_ERROR){s=r;}else if(q===c('LitestandMessages').DUPLICATE_CURSOR_ERROR)t=r;n({event:'stream_load',stream_event_type:q,stream_cursor:t,stream_substream_id:o(r&&r.substream_id),error_name:s&&s.name,error_message:s&&s.message,error_stack:s&&s.stack});});c('ErrorUtils').addListener(function(q){if(q&&m(c('URI').getNextURI())){c('ErrorSignal').logJSError('feedloaderror',{error:q.name||q.message,extra:q});n({event:'js_error',error_name:q.name,error_message:q.message,error_stack:q.stack});}});l=true;}};f.exports=p;},null);