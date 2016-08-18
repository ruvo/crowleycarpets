if (self.CavalryLogger) { CavalryLogger.start_js(["1D8BZ"]); }

__d('NotificationHiddenState',['NotificationUpdates','NotificationConstants','isEmpty'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={};c('NotificationUpdates').subscribe('update-notifications',function(j,k){var l=k.nodes,m=k.payloadsource;if(m===c('NotificationConstants').PayloadSourceType.LIVE_SEND&&l&&l.length){var n={};l.forEach(function(o){var p=o.alert_id;if(h[p])n[p]=false;});if(!c('isEmpty')(n)){h=Object.assign(h,n);c('NotificationUpdates').didUpdateHiddenState(Object.keys(n));}}});c('NotificationUpdates').subscribe('update-hidden',function(j,k){if(k.hiddenState){h=Object.assign(h,k.hiddenState);c('NotificationUpdates').didUpdateHiddenState(Object.keys(k.hiddenState));}});var i={isHidden:function(j){if(h[j])return h[j];return false;}};f.exports=i;},null);
__d('NotificationList.react',['NotificationConstants','NotificationHiddenState','NotificationSeenState','NotificationStore','NotificationUpdates','NotificationUserActions','React','getObjectValues','isEmpty','mapObject'],function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('NotificationConstants').PayloadSourceType.LIVE_SEND;h=babelHelpers.inherits(l,c('React').Component);i=h&&h.prototype;function l(m){'use strict';i.constructor.call(this,m);this.$NotificationList6=function(n){var o=Object.keys(this.state.notifs),p=Object.keys(n).filter(function(r){return !this.state.notifs[r];}.bind(this));o=o.concat(p);var q={};o.forEach(function(r){if(this.$NotificationList2[r]){if(this.state.notifs[r])q[r]=this.state.notifs[r];}else q[r]=n[r];}.bind(this));return q;}.bind(this);this.$NotificationList5=function(n){this.$NotificationList1=true;c('NotificationStore').getNotifications(n,function(o){var p=c('isEmpty')(this.$NotificationList2)?o:this.$NotificationList6(o),q={},r={};c('getObjectValues')(p).forEach(function(s){var t=s.alert_id;q[t]=c('NotificationSeenState').isRead(t);r[t]=c('NotificationHiddenState').isHidden(t);});this.$NotificationList1=false;this.setState({notifs:p,canFetchMore:c('NotificationStore').canFetchMore(this.props.endpoint)||c('NotificationStore').getCount(this.props.endpoint)!==Object.keys(p).length,readState:babelHelpers['extends']({},this.state.readState,q),hiddenState:babelHelpers['extends']({},this.state.hiddenState,r)});}.bind(this),this.props.endpoint);}.bind(this);this.$NotificationList7=function(){var n={};Object.keys(this.$NotificationList2).forEach(function(o){var p=c('NotificationHiddenState').isHidden(o);if(p!=this.state.hiddenState[o])n[o]=p;}.bind(this));if(!c('isEmpty')(n))this.setState({hiddenState:babelHelpers['extends']({},this.state.hiddenState,n)});this.$NotificationList2={};this.$NotificationList5(c('NotificationStore').getCount(this.props.endpoint));}.bind(this);this.$NotificationList8=function(){if(!this.$NotificationList1){var n=Object.keys(this.state.notifs).length;this.$NotificationList5(n+this.props.numPerPage);}}.bind(this);this.$NotificationList9=function(n){if(this.$NotificationList1||!this.state.canFetchMore)return;if(n)this.$NotificationList8();}.bind(this);this.$NotificationList10=function(){this.setState({showingChevron:true});}.bind(this);this.$NotificationList11=function(){this.setState({showingChevron:false});}.bind(this);this.$NotificationList12=function(n){if(n.length>this.props.numPerPage){this.$NotificationList5(n.length);}else this.$NotificationList8();return;}.bind(this);this.$NotificationList13=function(n){var o=c('NotificationSeenState').getUnseenIDs();if(!c('isEmpty')(this.$NotificationList2))o=o.filter(function(p){return !this.$NotificationList2[p];}.bind(this));if(o.length&&this.props.paused)c('NotificationUserActions').markNotificationsAsSeen(o);if(this.props.hasEverBeenOpened)if(!n||!n.hasEverBeenOpened)this.$NotificationList12(o);}.bind(this);this.$NotificationList1=false;this.$NotificationList2={};this.$NotificationList3=false;this.state={canFetchMore:true,notifs:{},hiddenState:{},readState:{},showingChevron:false};}l.prototype.componentWillMount=function(){'use strict';c('NotificationStore').registerEndpoint(this.props.endpoint);c('NotificationStore').setBusinessID(this.props.businessID);this.$NotificationList4=[c('NotificationUpdates').subscribe('notifications-updated',function(m,n){if(n.source==k&&!c('isEmpty')(n.updates)){this.$NotificationList3=true;if(this.props.paused!==false)this.$NotificationList2=babelHelpers['extends']({},this.$NotificationList2,n.updates);return;}this.$NotificationList5(c('NotificationStore').getCount(this.props.endpoint));}.bind(this)),c('NotificationUpdates').subscribe(['hidden-state-updated','read-state-updated'],function(m,n){if(m=='hidden-state-updated'){if(n.source!==k||!this.props.paused){var o=c('mapObject')(n.updates,function(q,r){return c('NotificationHiddenState').isHidden(r);});this.setState({hiddenState:babelHelpers['extends']({},this.state.hiddenState,o)});}}else{var p=c('mapObject')(n.updates,function(q,r){return c('NotificationSeenState').isRead(r);});this.setState({readState:babelHelpers['extends']({},this.state.readState,p)});}}.bind(this))];};l.prototype.componentWillUnmount=function(){'use strict';if(this.$NotificationList4){while(this.$NotificationList4.length)this.$NotificationList4.pop().unsubscribe();this.$NotificationList4=null;}};l.prototype.componentDidUpdate=function(m){'use strict';this.$NotificationList13(m);if(m.paused&&!this.props.paused){this.$NotificationList3=false;setTimeout(this.$NotificationList7,0);return;}};l.prototype.componentDidMount=function(){'use strict';this.$NotificationList13();};l.prototype.render=function(){'use strict';var m=this.props.listRenderer;return (c('React').createElement(m,{paused:this.props.paused,tracking:this.props.tracking,negativeTracking:this.props.negativeTracking,shortenTimestamp:this.props.shortenTimestamp,businessID:this.props.businessID,maxHeight:this.props.maxHeight,useChevron:this.props.useChevron,chevronType:this.props.chevronType,notifs:this.state.notifs,afterScroll:this.$NotificationList9,onChevronShow:this.$NotificationList10,onChevronHide:this.$NotificationList11,canFetchMore:this.state.canFetchMore,hiddenState:this.state.hiddenState,readState:this.state.readState,showingChevron:this.state.showingChevron,shouldScroll:this.$NotificationList3,upsell:this.props.upsell||null,isRHC:this.props.isRHC}));};l.propTypes={businessID:j.string,hasEverBeenOpened:j.bool,maxHeight:j.number,negativeTracking:j.object,paused:j.bool,tracking:j.string,useChevron:j.bool,chevronType:j.string,numPerPage:j.number.isRequired,listRenderer:j.func.isRequired,upsell:j.object,endpoint:j.string};f.exports=l;},null);
__d('FlexibleBlock.react',['cx','invariant','LeftRight.react','React','keyMirror'],function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();var l=c('keyMirror')({left:true,right:true});function m(o){!(o.flex&&o.flex in n.FLEX)?i(0):void 0;!(o.children&&o.children.length===2)?i(0):void 0;}j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;n.prototype.render=function(){'use strict';m(this.props);var o,p=this.props.children[0],q=this.props.children[1],r=this.props.flex==l.left,s;if(r){s=p;o=c('LeftRight.react').DIRECTION.right;}else{s=q;o=c('LeftRight.react').DIRECTION.left;}var t=c('React').createElement('div',{className:"_42ef"},s);return (c('React').createElement(c('LeftRight.react'),babelHelpers['extends']({},this.props,{direction:o}),r?t:this.props.children[0],r?this.props.children[1]:t));};function n(){'use strict';j.apply(this,arguments);}n.FLEX=l;f.exports=n;},null);
__d('ReadToggle.react',['cx','Event','Keys','React','emptyFunction','joinClasses'],function a(b,c,d,e,f,g,h){'use strict';var i,j;if(c.__markCompiled)c.__markCompiled();var k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return m=(n=j.constructor).call.apply(n,[this].concat(p)),this.$ReadToggle1=function(){return c('joinClasses')(this.props.className,(!this.props.isRead?"_5c9q":'')+(this.props.isRead?' '+"_5c9_":''));}.bind(this),this.$ReadToggle2=function(event){if(c('Event').getKeyCode(event)===c('Keys').RETURN)this.props.onClick();}.bind(this),m;}l.prototype.render=function(){if(this.props.isRead){return c('React').createElement('div',{'aria-label':this.props.readLabel,className:this.$ReadToggle1(),'data-hover':'tooltip','data-tooltip-alignh':'center','data-tooltip-content':this.props.readLabel,onClick:this.props.onClick,tabIndex:0});}else return c('React').createElement('div',{'aria-label':this.props.unreadLabel,className:this.$ReadToggle1(),'data-hover':'tooltip','data-tooltip-alignh':'center','data-tooltip-content':this.props.unreadLabel,onClick:this.props.onClick,onKeyDown:this.$ReadToggle2,role:'button',tabIndex:'0'});};l.propTypes={isRead:k.bool.isRequired,onClick:k.func,readLabel:k.node,unreadLabel:k.node};l.defaultProps={onClick:c('emptyFunction')};f.exports=l;},null);
__d('NotificationListItem.react',['cx','fbt','invariant','AbstractPopoverButton.react','AsyncResponse','Banzai','BanzaiLogger','BizSiteIdentifier.brands','Event','FlexibleBlock.react','Image.react','ImageBlock.react','Keys','List.react','LogicalGridRow.react','LogicalGridCell.react','NotificationInterpolator','NotificationPhotoThumbnail','NotificationTokens','NotificationURI','NotificationUserActions','PopoverMenu.react','React','ReadToggle.react','TextWithEntities.react','Timestamp.react','VaultBoxURI','URI','ReactXUIMenu','NotifTestIDs'],function a(b,c,d,e,f,g,h,i,j){var k,l;if(c.__markCompiled)c.__markCompiled();var m=c('ReactXUIMenu').Item;k=babelHelpers.inherits(n,c('React').Component);l=k&&k.prototype;function n(){var o,p;'use strict';for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return o=(p=l.constructor).call.apply(p,[this].concat(r)),this.state={showingOptions:false,negativeFeedbackConfirmation:null,canReportAsSpam:false,spamReportConfirmation:null,sendingFeedback:false,mayUndoHide:false,notifOptionConfirmation:null,isBizSite:c('BizSiteIdentifier.brands').isBizSite()},this.$NotificationListItem1=function(t){if(c('Event').getKeyCode(t.nativeEvent)==c('Keys').RETURN)this.$NotificationListItem2();}.bind(this),this.$NotificationListItem3=function(){if(!this.props.isRead)c('NotificationUserActions').setNextIsFromReadButton(true);this.$NotificationListItem4();}.bind(this),this.$NotificationListItem4=function(){!this.props.isRead&&this.$NotificationListItem2();}.bind(this),this.$NotificationListItem2=function(){c('NotificationUserActions').markNotificationsAsRead([this.props.alert_id]);}.bind(this),this.$NotificationListItem5=function(t){c('AsyncResponse').defaultErrorHandler(t);this.setState({sendingFeedback:false});}.bind(this),this.$NotificationListItem6=function(t){var u=t.getPayload();!u.confirmation?j(0):void 0;this.setState({negativeFeedbackConfirmation:u.confirmation,canReportAsSpam:u.canReportAsSpam,sendingFeedback:false,showingOptions:true});}.bind(this),this.$NotificationListItem7=function(t){var u=t.getPayload(),v=u.confirmation,w=u.canReportAsSpam;!v?j(0):void 0;this.setState({negativeFeedbackConfirmation:v,canReportAsSpam:w,mayUndoHide:true,sendingFeedback:false,showingOptions:true});}.bind(this),this.$NotificationListItem8=function(t){var u=t.getPayload().spamReportConfirmation;this.setState({negativeFeedbackConfirmation:null,spamReportConfirmation:u,sendingFeedback:false});}.bind(this),this.$NotificationListItem9=function(){c('NotificationUserActions').markNotificationAsHidden(this.props.alert_id,this.$NotificationListItem6,this.$NotificationListItem5);this.setState({sendingFeedback:true,mayUndoHide:true});}.bind(this),this.$NotificationListItem10=function(){this.setState({notifOptionConfirmation:null,negativeFeedbackConfirmation:null,sendingFeedback:false,showingOptions:false});}.bind(this),this.$NotificationListItem11=function(){var t=this.props.negative?this.props.negative.subscription_level:null;c('NotificationUserActions').markNotificationAsVisible(this.props.alert_id,t,this.$NotificationListItem10,this.$NotificationListItem5);this.setState({sendingFeedback:true});}.bind(this),this.$NotificationListItem12=function(){c('NotificationUserActions').markNotificationAsSpam(this.props.alert_id,this.$NotificationListItem8,this.$NotificationListItem5);this.setState({sendingFeedback:true});}.bind(this),this.$NotificationListItem13=function(){c('NotificationUserActions').markAppAsHidden(this.props.alert_id,this.props.application.id,this.$NotificationListItem7,this.$NotificationListItem5);this.setState({sendingFeedback:true});}.bind(this),this.$NotificationListItem14=function(){c('NotificationUserActions').markAppAsVisible(this.props.alert_id,this.props.application.id,function(){this.setState({negativeFeedbackConfirmation:null,sendingFeedback:false,showingOptions:false,mayUndoHide:false});}.bind(this),this.$NotificationListItem5);this.setState({sendingFeedback:true});}.bind(this),this.$NotificationListItem15=function(t){if(t)return (c('React').createElement(c('Image.react'),{src:t.uri,className:"_42td",'aria-hidden':true}));return c('React').createElement('span',null);},this.$NotificationListItem16=function(t){return JSON.stringify(babelHelpers['extends']({},JSON.parse(this.props.tracking),t));}.bind(this),this.$NotificationListItem17=function(){this.setState({showingOptions:false});}.bind(this),this.$NotificationListItem18=function(){if(!this.props.menu_options||!this.props.menu_options.length)return null;var t="_1_0c"+(' '+"_55m9"),u=Object.assign({},this.props);delete u.parent;var v=new (c('URI'))('/ajax/bugs/employee_report').setQueryData({notif:JSON.stringify(u)}),w=c('React').createElement(c('ReactXUIMenu'),null,this.props.menu_options?this.props.menu_options.map(function(z){var aa=function(){this.$NotificationListItem19(z.server_action);}.bind(this),ba=z.client_action==='REPORT_BUG';return (c('React').createElement(m,{onclick:ba?null:aa,ajaxify:ba?v:null,rel:ba?'dialog':null,key:z.client_action+z.server_action},c('React').createElement('div',{className:"_18qh"},z.text)));}.bind(this)):null),x={button:c('React').createElement('a',{href:'#','aria-label':'Notification options',className:"_1_0d"})},y=c('React').createElement(c('PopoverMenu.react'),{'data-testid':c('NotifTestIDs').CHEVRON,alignh:'right',menu:w,className:t,disableArrowKeyActivation:true,onShow:this.$NotificationListItem20,onHide:this.$NotificationListItem21},c('React').createElement(c('AbstractPopoverButton.react'),{config:x,haschevron:false,image:null,label:null}));return y;}.bind(this),this.$NotificationListItem21=function(){this.props.onChevronHide();this.$NotificationListItem22('close');}.bind(this),this.$NotificationListItem20=function(){this.props.onChevronShow();this.$NotificationListItem22('open');var t={notif_type:this.props.notif_type};c('Banzai').post('notif_chevron_on_click',t);}.bind(this),this.$NotificationListItem22=function(t){var u={event:t,notif_type:this.props.notif_type,notif_id:parseInt(c('NotificationTokens').untokenizeIDs([this.props.alert_id])[0],10)};c('BanzaiLogger').log('NotifJewelMenuLoggerConfig',u);}.bind(this),this.$NotificationListItem23=function(t){this.setState({showingOptions:true,sendingFeedback:false,notifOptionConfirmation:t});}.bind(this),this.$NotificationListItem24=function(){if(this.props.row!='undefined')return this.$NotificationListItem16({row:this.props.row});return this.props.tracking;}.bind(this),this.$NotificationListItem19=function(t){this.setState({sendingFeedback:true,mayUndoHide:true});c('NotificationUserActions').sendNotifOption(this.props.alert_id,this.$NotificationListItem23,this.$NotificationListItem5,t);}.bind(this),this.$NotificationListItem25=function(t){this.setState({sendingFeedback:true});c('NotificationUserActions').undoNotifOption(this.props.alert_id,this.$NotificationListItem10,this.$NotificationListItem5,t);}.bind(this),this.$NotificationListItem26=function(){var t=this.props,u=t.attachments,v=t.feedback_context,w=t.attached_story,x=u||[];if(v&&v.relevant_comments)x.push.apply(x,v.relevant_comments);if(w&&w.attachments)x.push.apply(x,w.attachments);return x.some(function(y){if(!y.style_list||!y.style_list.length)return false;switch(y.style_list[0]){case 'new_album':case 'album':case 'photo':case 'video':case 'video_autoplay':case 'video_inline':return true;default:return false;}});}.bind(this),o;}n.prototype.shouldComponentUpdate=function(o,p){'use strict';return this.props.visible!==o.visible||this.props.isRead!==o.isRead||this.props.timestamp!==o.timestamp||this.props.paused!==o.paused||this.state.showingOptions!==p.showingOptions||this.state.sendingFeedback!==p.sendingFeedback||this.state.canReportAsSpam!==p.canReportAsSpam||this.state.spamReportConfirmation!==p.spamReportConfirmation;};n.prototype.componentWillReceiveProps=function(o){'use strict';if(this.props.paused&&!o.paused&&!this.props.visible&&this.state.mayUndoHide)this.setState({mayUndoHide:false});};n.prototype.render=function(){'use strict';if(!this.props.visible&&!this.state.mayUndoHide)return c('React').createElement('li',{className:"_4_62"});var o="_33c"+(!this.props.isRead?' '+"jewelItemNew":'')+(this.state.showingOptions?' '+"_4ag":'')+(this.state.sendingFeedback?' '+"_4m8s":''),p=this.$NotificationListItem24();if(this.state.negativeFeedbackConfirmation){var q=this.state.negativeFeedbackConfirmation,r=null,s=null;if(this.state.canReportAsSpam)s=c('React').createElement(c('List.react'),{border:'none',spacing:'small',className:"_1v4c"},c('React').createElement('li',null,c('React').createElement('a',{href:'#',onClick:this.$NotificationListItem12,className:'mls'},i._("Report app for spam"))));return (c('React').createElement('li',{className:o,'data-gt':p},c('React').createElement('div',{className:"_4ai"},c('React').createElement(c('TextWithEntities.react'),{interpolator:c('NotificationInterpolator'),ranges:q.ranges,aggregatedranges:q.aggregated_ranges,text:q.text}),r),s));}var t=this.state.spamReportConfirmation;if(t)return (c('React').createElement('li',{className:o,'data-gt':p},c('React').createElement('div',{className:"_4ai"},c('React').createElement(c('TextWithEntities.react'),{interpolator:c('NotificationInterpolator'),ranges:t.ranges,aggregatedranges:t.aggregated_ranges,text:t.text}))));if(this.state.notifOptionConfirmation){q=this.state.notifOptionConfirmation;return (c('React').createElement('li',{className:o,'data-gt':p},c('React').createElement('div',{className:"_4ai"},c('React').createElement(c('TextWithEntities.react'),{interpolator:c('NotificationInterpolator'),ranges:q.ranges,aggregatedranges:q.aggregated_ranges,text:q.text&&q.text.text?q.text.text:''}),c('React').createElement('a',{href:'#',onClick:function(){this.$NotificationListItem25(q.undo_action);}.bind(this),className:'mls'},i._("Undo"))),c('React').createElement(c('List.react'),{border:'none',spacing:'small',className:"_1v4c"},q.follow_up_options.map?q.follow_up_options.map(function(la){return (c('React').createElement('li',{key:la.client_action+la.server_action},c('React').createElement('a',{onClick:function(){this.$NotificationListItem19(la.server_action);}.bind(this),href:'#',className:'mls'},la.text)));}.bind(this)):null)));}var u=null;if(this.props.title)u=c('React').createElement(c('TextWithEntities.react'),{interpolator:c('NotificationInterpolator'),ranges:this.props.title.ranges,aggregatedranges:this.props.title.aggregated_ranges,text:this.props.title.text,renderEmoji:true,renderEmoticons:true});var v=null,w=c('NotificationURI').localize(this.props.url),x=null;if(!this.props.noPhotoPreviews)x=c('NotificationPhotoThumbnail').getThumbnail(this.props.attachments,this.props.attached_story,this.props.feedback_context);var y=this.$NotificationListItem26()&&c('NotificationURI').snowliftable(w),z=c('NotificationURI').isVaultSetURI(w),aa=c('NotificationURI').isAlbumDraftRecoveryDialogURI(w),ba="_55ma"+(' '+"_55m9"),ca=c('React').createElement(c('ReadToggle.react'),{className:ba,isRead:!!this.props.isRead,onClick:this.$NotificationListItem3,readLabel:i._("Read"),unreadLabel:i._("Mark as Read")}),da=this.$NotificationListItem18(),ea=y||z||aa?w:this.props.ajaxify_url,fa=null,ga=null,ha=z?c('VaultBoxURI').getSyncedTabURI().toString():w;if(y){fa='theater';}else if(aa){fa='async-post';}else if(z||ea)fa='dialog';var ia=null,ja=this.props.actors[0];if(ja&&ja.profile_picture)ia=c('React').createElement(c('Image.react'),{src:ja.profile_picture.uri,alt:'',className:(!this.props.isNotifsPage?"_33h":'')+(this.props.isNotifsPage?' '+"_12u1":'')});var ka=c('React').createElement('div',null,c('React').createElement(c('LogicalGridCell.react'),{columnIndex:1,component:c('React').createElement('span',null)},ca),c('React').createElement(c('LogicalGridCell.react'),{columnIndex:2,component:c('React').createElement('span',null),disableFocusRecovery:true},da));return (c('React').createElement('li',{className:o,'data-gt':p,onMouseLeave:v},c('React').createElement(c('LogicalGridRow.react'),{className:'anchorContainer',rowIndex:this.props.rowIndex,component:c('React').createElement('div',null)},c('React').createElement(c('LogicalGridCell.react'),{columnIndex:0,component:c('React').createElement('div',null)},c('React').createElement('a',{href:ha,ajaxify:ea,className:"_33e"+(' '+"_1_0e"),rel:fa,onClick:ga,onMouseDown:this.$NotificationListItem2,onKeyDown:this.$NotificationListItem1},c('React').createElement(c('ImageBlock.react'),null,ia,c('React').createElement(c('FlexibleBlock.react'),{flex:c('FlexibleBlock.react').FLEX.left},c('React').createElement('div',{className:"_4l_v"},u,c('React').createElement(c('ImageBlock.react'),{className:"_33f"+(this.state.isBizSite?' '+"_2g48":'')},c('React').createElement(c('Image.react'),{className:"_10cu",src:this.props.icon.uri}),c('React').createElement('span',null,c('React').createElement(c('Timestamp.react'),{shorten:this.props.shortenTimestamp,time:this.props.timestamp.time,text:this.props.timestamp.text,verbose:this.props.timestamp.verbose,className:"_33g"})))),this.$NotificationListItem15(x))))),ka)));};f.exports=n;},null);
__d('NotificationListPropTypes',['React'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i={negativeTracking:h.object,tracking:h.string,notifs:h.object,afterScroll:h.func,onChevronShow:h.func,onChevronHide:h.func,canFetchMore:h.bool,hiddenState:h.object,readState:h.object,showingChevron:h.bool,paused:h.bool,maxHeight:h.number,shouldScroll:h.bool};f.exports=i;},null);
__d('NotificationPageList.react',['cx','fbt','Event','LoadingIndicator.react','LogicalGrid.react','NotificationListItem.react','NotificationListPropTypes','NotifTestIDs','React','ReactDOM','Vector','debounce','getObjectValues','isEmpty'],function a(b,c,d,e,f,g,h,i){var j,k;if(c.__markCompiled)c.__markCompiled();j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return m=(n=k.constructor).call.apply(n,[this].concat(p)),this.$NotificationPageList1=function(){var r=this.refs.loading;if(!r)return false;var s=c('Vector').getElementPosition(c('ReactDOM').findDOMNode(r),'viewport').y;return s<c('Vector').getViewportDimensions().y;}.bind(this),this.$NotificationPageList2=function(){this.props.afterScroll(this.$NotificationPageList1());}.bind(this),this.$NotificationPageList3=function(r,s){return s.indexOf(r);},this.$NotificationPageList4=function(){var r=c('getObjectValues')(this.props.notifs).map(function(s){return s.alert_id;});return c('getObjectValues')(this.props.notifs).map(function(s,t){var u=s.alert_id,v=this.$NotificationPageList3(u,r);return (c('React').createElement(c('NotificationListItem.react'),babelHelpers['extends']({key:u,visible:!this.props.hiddenState[u],isRead:this.props.readState[u],rowIndex:t,negativeTracking:this.props.negativeTracking,shortenTimestamp:this.props.shortenTimestamp,onChevronShow:this.props.onChevronShow,onChevronHide:this.props.onChevronHide,noPhotoPreviews:true,isNotifsPage:true,paused:this.props.paused,row:v},s)));}.bind(this));}.bind(this),m;}l.prototype.componentDidUpdate=function(){'use strict';this.$NotificationPageList2();};l.prototype.componentDidMount=function(){'use strict';c('Event').listen(window,'scroll',c('debounce')(this.$NotificationPageList2));this.$NotificationPageList2();};l.prototype.render=function(){'use strict';var m=null,n=null,o=c('React').createElement('ul',{'data-gt':this.props.tracking,'data-testid':c('NotifTestIDs').SEE_ALL_LIST});if(!c('isEmpty')(this.props.notifs)){m=c('React').createElement(c('LogicalGrid.react'),{component:o},this.$NotificationPageList4());}else if(!this.props.canFetchMore)m=c('React').createElement('div',{className:"_44_s",'data-testid':c('NotifTestIDs').SEE_ALL_LIST},i._("No new notifications"));if(this.props.canFetchMore)n=c('React').createElement(c('LoadingIndicator.react'),{color:'white',size:'large',ref:'loading',className:"_44_t"});var p=null;if(this.props.upsell){var q=this.props.upsell.module;p=c('React').createElement(q,babelHelpers['extends']({isPage:true},this.props.upsell.props));}var r="_44_u"+(this.props.showingChevron?' '+"_44_v":'');return (c('React').createElement('div',{className:r},p,m,n));};l.propTypes=c('NotificationListPropTypes');f.exports=l;},null);
__d('MobileSmsActivationController',['AsyncRequest','AsyncResponse','Dialog','goURI','ge','ReloadPage','$','DeprecatedCSSMiscellany'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('DeprecatedCSSMiscellany').hide,i=c('DeprecatedCSSMiscellany').show;function j(k,l,m,n,o,p){Object.assign(this,{profile_id:k,parent:parent,source:l,misc:m,carrier:null,AJAX_URI:'/ajax/mobile/activation.php',redirect_uri:null,cb_obj:n,status_id:p||'mobile_throbber'});if(o){this.goVerification();}else this.start();j.instance=this;}j.instance={};j.getInstance=function(){return j.instance;};j.show_carriers=function(){var k=c('$')('selected_country').value,l=c('$')('carrier_country').value;if(k)h(c('$')(k+'_carrier_select'));c('$')('selected_country').value=l;c('$')('selected_carrier').value=0;i(c('$')(l+'_carrier_select'));};j.update_carrier=function(){var k=c('$')('selected_country').value+'_carrier_select';c('$')('selected_carrier').value=c('$')(k).value;};Object.assign(j.prototype,{goStep:function(k){if(k==2){this.getShortCode();return;}else if(k==3){this.getConfirmCode();return;}this.start();},start:function(k){new (c('AsyncRequest'))().setURI(this.AJAX_URI).setData({profile_id:this.profile_id,get_carriers:1,source:this.source,misc:this.misc,error:k}).setHandler(this.showCarriers.bind(this)).setStatusElement(c('$')(this.status_id)).send();},showCarriers:function(k){var l=k.getPayload();if(!l)return;if(this.cb_obj&&this.cb_obj.onShowCarriers){this.cb_obj.onShowCarriers(l);}else new (c('Dialog'))().setTitle(l.title).setBody(l.html).setHandler(this.getShortCode.bind(this)).setButtons([c('Dialog').NEXT,c('Dialog').CANCEL]).show();},getShortCode:function(){if(!this.carrier){this.carrier=parseInt(c('$')('selected_carrier').value,10);if(!this.carrier){this.start(true);return false;}}c('Dialog').getCurrent()&&c('Dialog').getCurrent().setButtonsMessage('<img src="/images/loaders/indicator_blue_small.gif" />');new (c('AsyncRequest'))().setURI(this.AJAX_URI).setData({profile_id:this.profile_id,get_code:1,carrier:this.carrier,source:this.source,misc:this.misc}).setHandler(this.showShortCode.bind(this)).send();return false;},showShortCode:function(k){var l=k.getPayload();if(this.cb_obj&&this.cb_obj.onShowShortCode){this.cb_obj.onShowShortCode(l);}else new (c('Dialog'))().setTitle(l.title).setBody(l.html).setHandler(this.activate.bind(this)).setButtons([c('Dialog').NEXT,c('Dialog').CANCEL]).show();},activate:function(){var k=c('$')('sms_code').value;if(!k)return;var l=c('ge')('profile_add');l=l?l.checked:null;var m=c('ge')('message_on');m=m?m.checked:null;new (c('AsyncRequest'))().setURI(this.AJAX_URI).setData({profile_id:this.profile_id,confirm:1,code:k,profile_add:l,message_on:m,source:this.source,misc:this.misc}).setHandler(this.confirmCode.bind(this)).setErrorHandler(this.confirmCode.bind(this)).send();},confirmCode:function(k){var l=k.getPayload();if(!k.error&&l.success){if(this.cb_obj&&this.cb_obj.onActivationSuccess){this.cb_obj.onActivationSuccess(l);}else{if(l.redirect_now){c('goURI')(l.redirect);return;}if(l.redirect==null)return;this.redirect_uri=l.redirect;new (c('Dialog'))().setTitle(l.title).setBody(l.html).setHandler(this.redirect.bind(this)).setButtons([c('Dialog').OK]).show();}}else if(this.cb_obj&&this.cb_obj.onActivationFailure){this.cb_obj.onActivationFailure(k);}else c('AsyncResponse').defaultErrorHandler.call(this,k);},redirect:function(){if(this.redirect_uri=='reload'){c('ReloadPage').now();}else c('goURI')(this.redirect_uri);},goVerification:function(){new (c('AsyncRequest'))().setURI(this.AJAX_URI).setData({profile_id:this.profile_id,show_verification:1,source:this.source,misc:this.misc}).setHandler(this.displayVerification.bind(this)).send();return false;},displayVerification:function(k){var l=k.getPayload();if(this.cb_obj&&this.cb_obj.onDisplayVerification){this.cb_obj.onDisplayVerification(l);}else new (c('Dialog'))().setTitle(l.title).setBody(l.html).setHandler(this.completeVerification.bind(this,k)).setButtons([c('Dialog').OK]).show();},completeVerification:function(k){var l=k.getPayload();if(this.cb_obj)this.cb_obj.onVerificationComplete(l);}});f.exports=j;},null);
__d('legacy:mobile-sms-activation',['MobileSmsActivationController'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.MobileSmsActivationController=c('MobileSmsActivationController');b.mobile_activation_show_carriers=c('MobileSmsActivationController').show_carriers;b.mobile_activation_update_carrier=c('MobileSmsActivationController').update_carrier;},3);