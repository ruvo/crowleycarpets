if (self.CavalryLogger) { CavalryLogger.start_js(["muFW0"]); }

__d('HomeRHCAdsBasicRefresh',['AdsRefreshHandler','Arbiter','NavigationMessage','Run','SubscriptionsHandler','ge'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h,i,j,k;function l(){if(h){h.cleanup();h=null;}if(i){i.release();i=null;}j=null;}function m(){var p=c('ge')(k);if(p&&j){p.appendChild(j);j=null;}}function n(p,q){j=q;h&&h.forceLoadIfEnoughTimePassed(0);}var o={init:function(p,q,r){k=p;h=new (c('AdsRefreshHandler'))(c('ge')(p),q,r).subscribeDefaultEventsForRefresh();i=new (c('SubscriptionsHandler'))();i.addSubscriptions(c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,l),c('Arbiter').subscribe('ProfileQuestionAnswered',n),c('Arbiter').subscribe('AdsRefreshHandler/AdsLoaded',m));c('Run').onLeave(l);}};f.exports=o;},null);
__d('TickerController',['invariant','Arbiter','AsyncSignal','Bootloader','CSS','DOM','Parent','UIPagelet','Vector','$','emptyFunction','ge'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=1,j=2,k=3,l=4,m=15000,n=null,o={},p={},q={setActiveInstance:function(r){n=r;},getActiveInstance:function(){return n;},clearRHCplaceholder:function(){o.pagelet_rhc_ticker=null;},registerInstance:function(r,s){!r?h(0):void 0;p[r]=s;q.setActiveInstance(s);},getInstance:function(r){if(!r)return null;var s=c('Parent').byClass(c('$')(r),'fbFeedTicker');return p[s.id]||null;},isLoaded:function(r){var s=o[r.id];return !s||s.status==k;},show:function(r,s){s=s||c('emptyFunction');for(var t in p){var u=c('ge')(t);if(!u||u.parentNode.id==r.id)continue;q.hide(u.parentNode);}q._doPositionChange(r);c('CSS').show(r);var v=o[r.id];if(v&&v.status==i){var w=(c('Vector').getElementDimensions(r).y||0)>0,x=r.id==='pagelet_rhc_ticker'&&!c('CSS').hasClass(r,'hidden_rhc_ticker');if(w||x){var y=c('DOM').scry(r,'.tickerPlaceholderSpinner')[0];y&&c('CSS').show(y);q._fetchTickerForPlaceholder(r,s);}else c('Arbiter').subscribe('Ticker/resized',function(){if(v.status==i)q._fetchTickerForPlaceholder(r,s);});}else{var z=c('DOM').scry(r,'.fbFeedTicker')[0],aa=q.getInstance(z);n=aa;aa&&aa._poll();o[r.id]={status:l,callback:s};s();}c('Arbiter').inform('ticker/show',{node:r,callback:s});},_doPositionChange:function(r){if(c('CSS').shown(r))return;new (c('AsyncSignal'))('/common/ods_endpoint.php',{k:'ticker.render.switch.'+r.id}).send();},hide:function(r){var s=c('DOM').scry(r,'.fbFeedTicker')[0],t=q.getInstance(s);t&&t.hideActiveStory();c('CSS').hide(r);},hideStoriesByClass:function(r){for(var s in p)c('DOM').scry(c('$')(s),r).forEach(c('CSS').hide);},hideStory:function(r){var s=q.getInstance(r);s&&s.hideStory(r);},replaceStory:function(r,s){var t=c('DOM').scry(document.body,'div.fbFeedTickerStory'),u=q.getInstance(t[0]);if(!u)return;var v=u._findStoryById(r);u.handleRemoveStory();c('CSS').hide(v);c('DOM').insertAfter(v,s);s.setAttribute('data-story-id',v.getAttribute('id'));var w=setTimeout(function(){return q.removeMarkup(s,v);},m);s.setAttribute('data-timeout-token',w);},removeMarkup:function(r,s){c('Bootloader').loadModules(["Animation"],function(t){c('CSS').addClass(r,'removedStoryMarkup');new t(r).to('height',0).duration(500).ondone(function(){c('DOM').remove(r);}).go();},'TickerController');},undoHideStory:function(r){var s=q.getInstance(r);s&&s.undoHideStory(r);},insertStoriesAtBottom:function(r){n.insertStoriesAtBottom(r);},_fetchTickerForPlaceholder:function(r,s){var t={handler:function(){o[r.id].status=k;s();}};c('UIPagelet').loadFromEndpoint('TickerEntStoryPagelet',r.id,o[r.id].pageletData,t);o[r.id].status=j;},registerStoryDialog:function(r,s){c('Arbiter').subscribe('ticker/init',function(){var t=c('ge')(r),u=q.getInstance(t);u&&u.registerStoryDialog(t,s);},c('Arbiter').SUBSCRIBE_ALL);},registerPlaceholder:function(r,s){var t=o[r];o[r]={status:i,pageletData:s};if(t&&t.status==l){q.show(c('$')(r));t.callback();}}};f.exports=q;},null);
__d('TickerRightColumnController',['Arbiter','CSS','DOM','Event','NavigationMessage','Run','Style','SubscriptionsHandler','TickerController','Vector','ge','throttle'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h;function i(){var n=c('ge')('pagelet_rhc_ticker');n&&c('TickerController').show(n,k);}function j(){var n=c('ge')('pagelet_rhc_ticker');n&&c('TickerController').hide(n);}function k(){var n=c('ge')('pagelet_rhc_ticker'),o=c('DOM').scry(n,'.ticker_container')[0],p=c('DOM').scry(n,'.ticker_stream')[0],q=c('ge')('rightCol');if(!n||!o||!p||!q)return;c('Style').set(o,'height','0');var r=75,s=c('Vector').getViewportDimensions().y,t=c('Vector').getElementDimensions(q).y,u=s-t-r,v=c('Vector').getElementDimensions(p).y,w=Math.max(Math.min(u,v,h.tickerMaxHeight||425),h.tickerMinHeight||225);c('Style').set(o,'height',w+'px');}function l(n){var o=c('ge')('pagelet_reminders'),p=c('ge')('pagelet_rhc_ticker'),q=o&&c('DOM').scry(o,'div.tickerToggleWrapper')[0],r=p&&c('DOM').scry(p,'div.tickerToggleWrapper')[0];q&&c('CSS').conditionClass(q,'displayedTickerToggleWrapper',!n);r&&c('CSS').conditionClass(r,'displayedTickerToggleWrapper',n);p&&c('CSS').conditionClass(p,'hidden_rhc_ticker',!n);if(n){k();var s=c('ge')('fbTickerClosedEd');s&&c('CSS').hide(s);}}var m={init:function(n){h=n;var o=new (c('SubscriptionsHandler'))();if(h.enableSidebar)o.addSubscriptions(c('Arbiter').subscribe('sidebar/visibility',function(q,r){if(r){j();}else i();}),c('Arbiter').subscribe('minisidebar/show',i),c('Arbiter').subscribe('LitestandClassicRHC/loaded',k),c('Event').listen(window,'scroll',c('throttle')(function(){var q=c('DOM').scry(c('ge')('pagelet_rhc_ticker'),'.fbFeedTicker')[0],r=c('TickerController').getInstance(q);r&&r.handleRemoveStory();})));if(!c('CSS').hasClass(document.documentElement,'sidebarMode')){i();}else if(h.enableSidebar)j();var p=function(){o.release();};c('Arbiter').subscribeOnce(c('NavigationMessage').NAVIGATION_BEGIN,p);c('Run').onLeave(p);},initRHCTickerHider:function(n){c('Event').listen(n,'click',this.hideRHCTicker);},showRHCTicker:function(){l(true);},hideRHCTicker:function(){l(false);}};f.exports=m;},null);
__d('LitestandColumnManager',['Arbiter','BlueBar','Event','NavigationMessage','Run','SubscriptionsHandler','clamp','ge','getScrollPosition'],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h=0,i=null;function j(){if(i)return;i=new (c('SubscriptionsHandler'))();i.addSubscriptions(c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,function(){m(0);k();}),c('Event').listen(window,'resize',function(){if(!c('BlueBar').hasFixedBlueBar()){m(0);k();}}),c('Event').listen(window,'scroll',function(){if(!l())k();}));c('Run').onLeave(function(){return i&&i.release();});}function k(){i.release();i=null;}function l(){if(h<=0)return false;m(c('clamp')(c('getScrollPosition')(window).y,0,h));return h>0;}function m(p){if(p===h)return;n('leftCol',p);n('rightCol',p);h=p;}function n(p,q){var r=c('ge')(p);if(r)r.style.marginTop=q?q+'px':'';}var o={adjustVerticalWindowPosition:function(p,q){j();m(q);window.scrollTo(p.x,p.y+h);}};f.exports=o;},null);
__d('LitestandStream',['csx','Arbiter','CSS','LitestandColumnManager','LitestandStoryInsertionStatus','Run','ViewportBounds','getElementPosition','getScrollPosition','nullthrows'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=void 0,j=void 0,k=void 0,l=void 0,m={init:function(n,o,p,q){i=p;k=n;j=q;if(!l)l=c('Arbiter').subscribe('ufi/didUpdate',function(r,s){if(s.offsetY)c('LitestandColumnManager').adjustVerticalWindowPosition(c('getScrollPosition')(window),s.offsetY);});c('Run').onLeave(function(){l&&l.unsubscribe();l=null;});},getStoriesSelector:function(){return "._5jmm";},getStreamRoot:function(){return k;},getSectionID:function(){return i;},getStoryID:function(){return j;},isStory:function(n){return c('CSS').matchesSelector(n,"._5jmm");},canInsertNewerStories:function(){if(c('ViewportBounds').getTop()>c('getElementPosition')(m.getStreamRoot()).y)return false;return c('LitestandStoryInsertionStatus').canInsert();},getFeedStreamID:function(){return parseInt(c('nullthrows')(k).id.split('feed_stream_')[1],16)%1e+08;}};f.exports=m;},null);