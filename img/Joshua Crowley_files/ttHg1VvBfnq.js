if (self.CavalryLogger) { CavalryLogger.start_js(["vun\/r"]); }

__d("MercuryTypeaheadConstants",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={COMPOSER_FRIENDS_MAX:4,COMPOSER_FB4C_MAX:4,COMPOSER_NON_FRIENDS_MAX:2,COMPOSER_MESSENGER_ONLY_CONTACT_MAX:4,COMPOSER_SHOW_MORE_LIMIT:2,COMPOSER_THREADS_INITIAL_LIMIT:2,COMPOSER_CHATTAB_MAX:5,COMPOSER_PAGES_MAX:4,COMPOSER_WM_MAX:18,USER_TYPE:"user",PAGE_TYPE:"page",THREAD_TYPE:"thread",HEADER_TYPE:"header",SEARCH_TYPE:"search",FRIEND_TYPE:"friend",NON_FRIEND_TYPE:"non_friend",FB4C_TYPE:"fb4c",MEETING_ROOM_PAGE_TYPE:"meeting_room_page",COMMERCE_PAGE_TYPE:"commerce_page",VALID_EMAIL:"^([A-Z0-9._\u0025+-]+\u0040((?!facebook\\.com))[A-Z0-9.-]+\\.[A-Z]{2,4}|(([A-Z._\u0025+-]+[A-Z0-9._\u0025+-]*)|([A-Z0-9._\u0025+-]+[A-Z._\u0025+-]+[A-Z0-9._\u0025+-]*))\u0040(?:facebook\\.com))$"};},null);
__d("NotificationConstants",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();f.exports={PayloadSourceType:{UNKNOWN:0,USER_ACTION:1,LIVE_SEND:2,ENDPOINT:3,INITIAL_LOAD:4,OTHER_APPLICATION:5,SYNC:6,CLIENT:7}};},null);
__d('NotificationTokens',['CurrentUser'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={tokenizeIDs:function(i){return i.map(function(j){return c('CurrentUser').getID()+':'+j;});},untokenizeIDs:function(i){return i.map(function(j){return j.split(':')[1];});}};f.exports=h;},null);
__d('NotificationUpdates',['Arbiter','BizSiteIdentifier.brands','BusinessUserConf','ChannelConstants','JSLogger','NotificationConstants','NotificationTokens','LiveTimer','createObjectFrom'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={},i={},j={},k={},l=[],m=0,n=c('JSLogger').create('notification_updates');function o(){if(m)return;var t=h,u=i,v=j,w=k;h={};i={};j={};k={};q('notifications-updated',t);if(Object.keys(u).length)q('seen-state-updated',u);if(Object.keys(v).length)q('read-state-updated',v);if(Object.keys(w).length)q('hidden-state-updated',w);l.pop();}function p(){if(l.length)return l[l.length-1];return c('NotificationConstants').PayloadSourceType.UNKNOWN;}function q(event,t){s.inform(event,{updates:t,source:p()});}var r=null,s=Object.assign(new (c('Arbiter'))(),{getserverTime:function(){return r;},handleUpdate:function(t,u){var v=c('BizSiteIdentifier.brands').isBizSite()&&!!c('BusinessUserConf').biz_user_id;if(u.nodes&&Array.isArray(u.nodes)){u.nodes=this._filterNodesBasedOnBusinessUser(u.nodes,c('BusinessUserConf').biz_user_id);if(!v)u.nodes=this._filterNodesBasedOnBusinessID(u.nodes);}if(u.servertime){r=u.servertime;c('LiveTimer').restart(u.servertime);}if(Object.keys(u).length)this.synchronizeInforms(function(){l.push(t);var w=babelHelpers['extends']({payloadsource:p()},u);this.inform('update-notifications',w);this.inform('update-seen',w);this.inform('update-read',w);this.inform('update-hidden',w);}.bind(this));},didUpdateNotifications:function(t){Object.assign(h,c('createObjectFrom')(t));o();},didUpdateSeenState:function(t){Object.assign(i,c('createObjectFrom')(t));o();},didUpdateReadState:function(t){Object.assign(j,c('createObjectFrom')(t));o();},didUpdateHiddenState:function(t){Object.assign(k,c('createObjectFrom')(t));o();},synchronizeInforms:function(t){m++;try{t();}catch(u){throw u;}finally{m--;o();}},_filterNodesBasedOnBusinessID:function(t){return t.filter(function(u){return u.business_ids&&Object.keys(u.business_ids).length>0?!!('business_ids_user_pref' in u?u.business_ids_user_pref[c('BizSiteIdentifier.brands').getBusinessID()]:u.business_ids[c('BizSiteIdentifier.brands').getBusinessID()]):!c('BizSiteIdentifier.brands').isBizSite();});},_filterNodesBasedOnBusinessUser:function(t,u){return t.filter(function(v){return u==v.biz_user_id;});}});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notification_json'),function(t,u){var v=Date.now(),w=u.obj.nodes;if(w){w.forEach(function(x){x.receivedTime=v;});n.debug('notifications_received',w);s.handleUpdate(c('NotificationConstants').PayloadSourceType.LIVE_SEND,u.obj);}});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notifications_seen'),function(t,u){var v=c('NotificationTokens').tokenizeIDs(u.obj.alert_ids);s.handleUpdate(c('NotificationConstants').PayloadSourceType.LIVE_SEND,{seenState:c('createObjectFrom')(v)});});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notifications_read'),function(t,u){var v=c('NotificationTokens').tokenizeIDs(u.obj.alert_ids);s.handleUpdate(c('NotificationConstants').PayloadSourceType.LIVE_SEND,{readState:c('createObjectFrom')(v)});});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notification_hidden'),function(t,u){var v=c('NotificationTokens').tokenizeIDs([u.obj.notif_id+'']);s.handleUpdate(c('NotificationConstants').PayloadSourceType.LIVE_SEND,{HiddenState:c('createObjectFrom')(v)});});f.exports=s;},null);
__d('NotificationStore',['BizSiteIdentifier.brands','BusinessUserConf','KeyedCallbackManager','NotificationConstants','NotificationUpdates','RangedCallbackManager','MercuryServerDispatcher'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=function(m){this.notifications=new (c('KeyedCallbackManager'))();var n=function(o){var p=this.notifications.getResource(o);return p.creation_time;};this.order=new (c('RangedCallbackManager'))(n.bind(this),function(o,p){return p-o;});this.graphQLPageInfo={};},i=c('BizSiteIdentifier.brands').isBizSite()?c('BizSiteIdentifier.brands').getBusinessID():null;c('NotificationUpdates').subscribe('update-notifications',function(m,n){var o=n.endpoint||k;if(n.page_info)j[o].graphQLPageInfo=n.page_info;if(n.nodes===undefined)return;var p,q=[],r={},s=n.nodes||[],t;s.forEach(function(u){p=u.alert_id;t=j[o].notifications.getResource(p);if(!t||t.creation_time<u.creation_time){q.push(p);r[p]=u;}});j[o].notifications.addResourcesAndExecute(r);j[o].order.addResources(q);c('NotificationUpdates').didUpdateNotifications(q);});var j={},k='/ajax/notifications/client/get.php',l={getNotifications:function(m,n){var o=arguments.length<=2||arguments[2]===undefined?k:arguments[2],p=j[o].order.executeOrEnqueue(0,m,function(w){var x=j[o].notifications.executeOrEnqueue(w,n);}),q=j[o].order.getUnavailableResources(p);if(q.length){j[o].order.unsubscribe(p);if(!l.canFetchMore(o)){j[o].notifications.executeOrEnqueue(j[o].order.getAllResources(),n);return;}var r=j[o].graphQLPageInfo,s=r&&r.end_cursor||null,t;if(s){var u=Math.max.apply(null,q),v=j[o].order.getCurrentArraySize();t=u-v+1;}else t=m;c('MercuryServerDispatcher').trySend(o,{businessID:i,businessUserID:c('BusinessUserConf').biz_user_id,cursor:s,length:t});}},getAll:function(m){var n=arguments.length<=1||arguments[1]===undefined?k:arguments[1];l.getNotifications(l.getCount(n),m,n);},getCount:function(){var m=arguments.length<=0||arguments[0]===undefined?k:arguments[0];return j[m].order.getAllResources().length;},canFetchMore:function(){var m=arguments.length<=0||arguments[0]===undefined?k:arguments[0],n=j[m].graphQLPageInfo;return (!n||!n.hasOwnProperty('has_next_page')||n.has_next_page);},registerEndpoint:function(m){if(m&&!(m in j)){j[m]=new h(m);var n={};n[m]={mode:c('MercuryServerDispatcher').IMMEDIATE,handler:function(o){o.endpoint=m;c('NotificationUpdates').handleUpdate(c('NotificationConstants').PayloadSourceType.ENDPOINT,o);}};c('MercuryServerDispatcher').registerEndpoints(n);}},setBusinessID:function(m){i=m;}};l.registerEndpoint(k);f.exports=l;},null);
__d("XNotificationsOptionsController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/notifications\/feedback\/option\/",{notif_id:{type:"Int",required:true},undo:{type:"Bool",defaultValue:false},server_action:{type:"String",required:true},biz_user_id:{type:"Int"}});},null);
__d('NotificationUserActions',['AsyncRequest','BusinessUserConf','NotificationConstants','NotificationStore','NotificationTokens','NotificationUpdates','URI','XNotificationsOptionsController','createObjectFrom','emptyFunction'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('NotificationConstants').PayloadSourceType.USER_ACTION,i='mark_spam',j='turn_off',k='undo',l='original_subscription_level',m=false;function n(t){t.biz_user_id=c('BusinessUserConf').biz_user_id;new (c('AsyncRequest'))('/ajax/notifications/mark_read.php').setData(t).send();}function o(t){var u={};t.forEach(function(v,w){u['alert_ids['+w+']']=v;});return u;}function p(t,u,v,w,x){var y=c('NotificationTokens').untokenizeIDs([t])[0],z={notification_id:y,client_rendered:true,request_type:u};Object.assign(z,v);new (c('AsyncRequest'))('/ajax/notifications/negative_req.php').setData(z).setHandler(w||c('emptyFunction')).setErrorHandler(x||c('emptyFunction')).send();}function q(t,u,v,w,x){var y=c('XNotificationsOptionsController').getURIBuilder().setInt('notif_id',c('NotificationTokens').untokenizeIDs([t])[0]).setInt('biz_user_id',c('BusinessUserConf').biz_user_id).setBool('undo',w).setString('server_action',x).getURI(),z=function(aa){if(!aa.payload)throw new Error('No response from notif option!');c('NotificationUpdates').handleUpdate(h,{hiddenState:c('createObjectFrom')([t],!aa.payload.visible)});u(aa.payload);};new (c('AsyncRequest'))(y).setHandler(z||c('emptyFunction')).setErrorHandler(v||c('emptyFunction')).send();}function r(t,u,v,w,x){var y=x?k:j;c('NotificationStore').getAll(function(z){var aa=Object.keys(z).filter(function(ba){var ca=z[ba];return !!(ca.application&&ca.application.id&&ca.application.id==u);});p(t,y,null,function(ba){v(ba);c('NotificationUpdates').handleUpdate(h,{hiddenState:c('createObjectFrom')(aa,!x)});},w);});}var s={markNotificationsAsSeen:function(t){c('NotificationUpdates').handleUpdate(h,{seenState:c('createObjectFrom')(t)});var u=c('NotificationTokens').untokenizeIDs(t),v=o(u);v.seen=true;n(v);},setNextIsFromReadButton:function(t){m=t;},markNotificationsAsRead:function(t){c('NotificationUpdates').handleUpdate(h,{readState:c('createObjectFrom')(t)});var u=c('NotificationTokens').untokenizeIDs(t),v=o(u);if(m){v.from_read_button=true;m=false;}n(v);},sendNotifOption:function(t,u,v,w){q(t,u,v,false,w);},undoNotifOption:function(t,u,v,w){q(t,u,v,true,w);},markNotificationAsHidden:function(t,u,v){c('NotificationUpdates').handleUpdate(h,{hiddenState:c('createObjectFrom')([t])});p(t,j,null,u,v);},markNotificationAsVisible:function(t,u,v,w){c('NotificationUpdates').handleUpdate(h,{hiddenState:c('createObjectFrom')([t],false)});var x=null;if(u!==null){x={};x[l]=u;}p(t,k,x,v,w);},markNotificationAsSpam:function(t,u,v){c('NotificationUpdates').handleUpdate(h,{hiddenState:c('createObjectFrom')([t],true)});p(t,i,null,u,v);},markAppAsHidden:function(t,u,v,w){var x=false;r(t,u,v,w,x);},markAppAsVisible:function(t,u,v,w){var x=true;r(t,u,v,w,x);}};f.exports=s;},null);
__d('EXHPLeftNavController',['cx','csx','Arbiter','Bootloader','Event','Parent','UIPagelet','emptyFunction','requireWeak'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=void 0;function k(){if(!j){j=true;c('Bootloader').loadModules(["LeftNavActions","BookmarkPopoverMenu.react","LeftNavDragController","LeftNavItemDraggableBehavior"],c('emptyFunction'),'EXHPLeftNavController');}}var l=void 0;function m(){if(!l){l=true;c('UIPagelet').loadFromEndpoint('ReactLeftNavPagelet','pagelet_navigation').setHandler(function(){l=false;if(q){q.remove();q=null;}});}}var n={},o={},p=void 0,q=void 0,r={init:function(x){q=c('Event').listen(x,'click',function(y){var z=y.target,aa=c('Parent').byAttribute(z,'data-nav-see-more');if(aa){s(aa);return;}var ba=c('Parent').bySelector(z,"._1msp");if(ba){var ca=c('Parent').byClass(ba,'homeSideNav').id;t(ba,ca);return;}var da=c('Parent').byAttribute(z,'data-nav-item-id');if(!da)return;var ea=da.getAttribute('data-nav-item-id'),fa=c('Parent').bySelector(z,"._26tg");if(fa){u(fa,ea);}else v(da,ea);});},consumeDidHaveClick:function(x){var y=n[x];delete n[x];return !!y;},consumeDidClickSeeAll:function(x){var y=o[x];delete o[x];return !!y;},consumeDidClickSeeMore:function(){var x=p;p=false;return x;}};function s(x){x.parentNode.insertBefore(w(),x);p=true;c('Bootloader').loadModules(["LeftNavSeeMoreContainer.react"],c('emptyFunction'),'EXHPLeftNavController');m();}function t(x,y){x.parentNode.insertBefore(w(),x);o[y]=true;k();m();}function u(x,y){x.parentNode.replaceChild(w(),x);n[y]=true;k();m();}function v(x,y){var z=x.querySelector('.countValue');z&&z.remove();if(x.getAttribute('data-type')==='type_explore_feed'){m();c('requireWeak')('LeftNavController',function(aa){c('Arbiter').inform('LeftNavController/topicFeedClick',y);});}}function w(){var x=document.createElement('span');x.className="_2ita _55ym _55yn _55yo";return x;}f.exports=r;},null);
__d('MNCommerceDialogStateStore',['FluxStore','MessengerDispatcher','MNCommerceActionTypes'],function a(b,c,d,e,f,g){'use strict';var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('FluxStore'));i=h&&h.prototype;function j(){i.constructor.call(this,c('MessengerDispatcher'));this.$MNCommerceDialogStateStore1=null;this.$MNCommerceDialogStateStore2=null;}j.prototype.__onDispatch=function(k){var l=k.type;switch(l){case c('MNCommerceActionTypes').DIALOG.SHOW:this.$MNCommerceDialogStateStore1=k.dialogContainer;this.$MNCommerceDialogStateStore2=k.state;this.__emitChange();break;case c('MNCommerceActionTypes').DIALOG.HIDE:this.$MNCommerceDialogStateStore1=null;this.$MNCommerceDialogStateStore2=null;this.__emitChange();break;}};j.prototype.getDialogContainer=function(){return this.$MNCommerceDialogStateStore1;};j.prototype.getState=function(){return this.$MNCommerceDialogStateStore2;};f.exports=new j();},null);
__d('MercuryTypeaheadDataSource',['CurrentUser','DataSource','MercuryConfig','MercuryParticipantTypes','MercuryTypeaheadConstants','OrderedFriendsList','ShortProfiles','WorkModeConfig','debounce'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=500,k=[],l={},m={},n={},o=false,p=false;h=babelHelpers.inherits(q,c('DataSource'));i=h&&h.prototype;function q(r){'use strict';r=r||{};r.kanaNormalization=true;i.constructor.call(this,r);}q.prototype.dirty=function(){'use strict';this.$MercuryTypeaheadDataSource1=k;this.localCache=m;this.queryCache=l;this.queryIDs=n;return this;};q.prototype.bootstrap=function(){'use strict';if(o||p)return false;p=true;c('ShortProfiles').fetchAll().then(function(){this.updateBootstrapData();p=false;o=true;}.bind(this),function(){}.bind(this));return true;};q.prototype.updateBootstrapData=function(){'use strict';var r=this.getCachedShortProfileIDs(),s=c('WorkModeConfig').is_work_user?c('MercuryParticipantTypes').FB4C:c('MercuryParticipantTypes').FRIEND,t=r.map(function(u){var v=c('ShortProfiles').getNow(u),w=u==c('CurrentUser').getID()?s:v.type,x=[v.additionalName,v.alternateName].concat(v.searchTokens||[]).join(' '),y=v.name,z=null;if(v.threadNickname){y=v.threadNickname;z=v.name;}return {uid:u,index:c('OrderedFriendsList').getActiveRank(u),text:y,subtext:z,tokens:x,localized_text:v.name,additional_text:v.additionalName,photo:v.thumbSrc,render_type:w,type:c('MercuryTypeaheadConstants').USER_TYPE};});if(t.length)this.addEntries(t);};q.prototype.query=function(r,s,t,u){'use strict';var v=s||r.length===1;return i.query.call(this,r,v,t,u);};q.prototype.getQueryData=function(r,s){'use strict';return babelHelpers['extends']({},i.getQueryData.call(this,r,s));};q.prototype.setEntry=function(r,s){'use strict';this.$MercuryTypeaheadDataSource1[r]=s;};q.prototype.getEntry=function(r){'use strict';return this.$MercuryTypeaheadDataSource1[r]||null;};q.prototype.getCachedShortProfileIDs=function(){'use strict';var r=c('ShortProfiles').getCachedProfileIDs(),s=r.filter(function(t){var u=c('ShortProfiles').getNow(t);return (t==c('CurrentUser').getID()||u.type===c('MercuryParticipantTypes').FRIEND||u.type===c('MercuryParticipantTypes').FB4C||u.type===c('MercuryParticipantTypes').PAGE&&c('MercuryConfig').LinkedAgents&&c('MercuryConfig').LinkedAgents.indexOf(t.toString())>-1);});return s;};q.prototype.isBootstrapped=function(){'use strict';return o;};q.prototype.isBootstrapping=function(){'use strict';return p;};q.prototype.processEntries=function(r,s){'use strict';r=r.map(function(t){if(t.index==null&&(t.render_type===c('MercuryParticipantTypes').FRIEND||t.render_type===c('MercuryParticipantTypes').FB4C))t.index=c('OrderedFriendsList').getActiveRank(t.uid);if(t.render_type===c('MercuryParticipantTypes').PAGE&&c('MercuryConfig').LinkedAgents&&c('MercuryConfig').LinkedAgents.indexOf(t.uid.toString())>-1)t.index=1;return t;});return i.processEntries.call(this,r);};q.prototype.mergeUids=function(r,s,t,u){'use strict';var v=s.sort(function(w,x){return this.getEntry(w).index-this.getEntry(x).index;}.bind(this));return i.mergeUids.call(this,r,v,t,u);};f.exports=q;},null);
__d('MercuryFilters',['MessagingTag','arrayContains'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=[c('MessagingTag').UNREAD],i={ALL:'all',NONPRIORITY:'non-priority',UNREAD:c('MessagingTag').UNREAD,getSupportedFilters:function(){return h.concat();},isSupportedFilter:function(j){return c('arrayContains')(h,j);}};f.exports=i;},null);
__d('CompactTypeaheadRenderer',['BadgeHelper','DOM','emojiAndEmote','TypeaheadFacepile'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j){var k=[];if(i.xhp)return c('DOM').create('li',{className:'raw'},i.xhp);var l=i.photos||i.photo;if(l){if(l instanceof Array){l=c('TypeaheadFacepile').render(l);}else l=c('DOM').create('img',{alt:'',src:l});k.push(l);}var m=i.iconClass;if(m){var n=c('DOM').create('span',{className:m});k.push(n);}var o=i.debug_info;if(o)k.push(c('DOM').create('span',{className:'debugInfo'},o));if(i.text){var p=c('emojiAndEmote')(i.text);if(i.is_verified){p.push(c('BadgeHelper').renderBadge('xsmall','verified'));}else if(i.is_work_user){p.push(c('BadgeHelper').renderBadge('xsmall','work'));}else if(i.is_trending_hashtag)p.push(c('BadgeHelper').renderBadge('xsmall','trending'));k.push(c('DOM').create('span',{className:'text'},p));}var q=i.subtext,r=i.category;if(q||r){var s=[];q&&s.push(q);q&&r&&s.push(" \u00b7 ");r&&s.push(r);k.push(c('DOM').create('span',{className:'subtext'},s));}var t=c('DOM').create('li',{className:i.type||''},k);if(i.text){t.setAttribute('title',i.text);t.setAttribute('aria-label',i.text);}return t;}h.className='compact';f.exports=h;},null);
__d('legacy:CompactTypeaheadRenderer',['CompactTypeaheadRenderer'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();if(!b.TypeaheadRenderers)b.TypeaheadRenderers={};b.TypeaheadRenderers.compact=c('CompactTypeaheadRenderer');},3);
__d('PureStoreBasedStateMixin',['invariant','StoreBasedStateMixinHelper','setImmediate'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=function(){for(var j=arguments.length,k=Array(j),l=0;l<j;l++)k[l]=arguments[l];return {getInitialState:function(){return this.constructor.calculateState();},componentWillMount:function(){!this.constructor.calculateState?h(0):void 0;this._recalculateStateID=null;var m=function(){if(this.isMounted())this.setState(this.constructor.calculateState());this._recalculateStateID=null;}.bind(this);this._mixin=new (c('StoreBasedStateMixinHelper'))(k);this._mixin.subscribeCallback(function(){if(this._recalculateStateID===null)this._recalculateStateID=c('setImmediate')(m);}.bind(this));},componentWillUnmount:function(){this._mixin.release();this._mixin=null;}};}.bind(this);f.exports=i;},null);