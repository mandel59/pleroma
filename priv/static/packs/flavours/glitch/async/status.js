(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{654:function(e,t,a){"use strict";a.d(t,"a",function(){return I});var h=a(1),s=a(6),i=a(0),o=a(2),n=a(3),O=a.n(n),c=a(5),r=a.n(c),l=a(26),d=a.n(l),f=a(100),g=a(101),j=a(110),m=a(456),v=a(392),k=a(386),M=a(7),y=a(444),u=a(24),C=a(136),_=a(446),p=a(531),b=a(12),x=a.n(b),I=function(n){function e(){for(var a,e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return a=n.call.apply(n,[this].concat(t))||this,Object(o.a)(Object(i.a)(Object(i.a)(a)),"state",{height:null}),Object(o.a)(Object(i.a)(Object(i.a)(a)),"handleAccountClick",function(e){0===e.button&&!(e.ctrlKey||e.altKey||e.metaKey)&&a.context.router&&(e.preventDefault(),a.context.router.history.push("/accounts/"+a.props.status.getIn(["account","id"]))),e.stopPropagation()}),Object(o.a)(Object(i.a)(Object(i.a)(a)),"parseClick",function(e,t){0===e.button&&!(e.ctrlKey||e.altKey||e.metaKey)&&a.context.router&&(e.preventDefault(),a.context.router.history.push(t)),e.stopPropagation()}),Object(o.a)(Object(i.a)(Object(i.a)(a)),"handleOpenVideo",function(e,t){a.props.onOpenVideo(e,t)}),Object(o.a)(Object(i.a)(Object(i.a)(a)),"setRef",function(e){a.node=e,a._measureHeight()}),Object(o.a)(Object(i.a)(Object(i.a)(a)),"handleModalLink",function(e){var t;e.preventDefault(),t="A"!==e.target.nodeName?e.target.parentNode.href:e.target.href,window.open(t,"mastodon-intent","width=445,height=600,resizable=no,menubar=no,status=no,scrollbars=yes")}),a}Object(s.a)(e,n);var t=e.prototype;return t._measureHeight=function(e){var t=this;this.props.measureHeight&&this.node&&(Object(p.a)(function(){return t.node&&t.setState({height:Math.ceil(t.node.scrollHeight)+1})}),this.props.onHeightChange&&e&&this.props.onHeightChange())},t.componentDidUpdate=function(e,t){this._measureHeight(t.height!==this.state.height)},t.render=function(){var e=this.props.status.get("reblog")?this.props.status.get("reblog"):this.props.status,t=this.props,a=t.expanded,s=t.onToggleHidden,n=t.settings,i={boxSizing:"border-box"},o=this.props.compact;if(!e)return null;var c="",r=null,l="",d="",u="retweet",p="";if(this.props.measureHeight&&(i.height=this.state.height+"px"),0<e.get("media_attachments").size)if(e.get("media_attachments").some(function(e){return"unknown"===e.get("type")}))c=Object(h.a)(v.a,{media:e.get("media_attachments")});else if("video"===e.getIn(["media_attachments",0,"type"])){var b=e.getIn(["media_attachments",0]);c=Object(h.a)(C.default,{preview:b.get("preview_url"),src:b.get("url"),alt:b.get("description"),inline:!0,sensitive:e.get("sensitive"),letterbox:n.getIn(["media","letterbox"]),fullwidth:n.getIn(["media","fullwidth"]),preventPlayback:!a,onOpenVideo:this.handleOpenVideo,autoplay:!0}),r="video-camera"}else c=Object(h.a)(m.default,{standalone:!0,sensitive:e.get("sensitive"),media:e.get("media_attachments"),letterbox:n.getIn(["media","letterbox"]),fullwidth:n.getIn(["media","fullwidth"]),hidden:!a,onOpenMedia:this.props.onOpenMedia}),r="picture-o";else c=Object(h.a)(y.a,{onOpenMedia:this.props.onOpenMedia,card:e.get("card",null)});return e.get("application")&&(l=Object(h.a)("span",{},void 0," · ",Object(h.a)("a",{className:"detailed-status__application",href:e.getIn(["application","website"]),target:"_blank",rel:"noopener"},void 0,e.getIn(["application","name"])))),"direct"===e.get("visibility")?u="envelope":"private"===e.get("visibility")&&(u="lock"),d="private"===e.get("visibility")?Object(h.a)("i",{className:"fa fa-"+u}):this.context.router?Object(h.a)(k.a,{to:"/statuses/"+e.get("id")+"/reblogs",className:"detailed-status__link"},void 0,Object(h.a)("i",{className:"fa fa-"+u}),Object(h.a)("span",{className:"detailed-status__reblogs"},void 0,Object(h.a)(M.c,{value:e.get("reblogs_count")}))):Object(h.a)("a",{href:"/interact/"+e.get("id")+"?type=reblog",className:"detailed-status__link",onClick:this.handleModalLink},void 0,Object(h.a)("i",{className:"fa fa-"+u}),Object(h.a)("span",{className:"detailed-status__reblogs"},void 0,Object(h.a)(M.c,{value:e.get("reblogs_count")}))),p=this.context.router?Object(h.a)(k.a,{to:"/statuses/"+e.get("id")+"/favourites",className:"detailed-status__link"},void 0,Object(h.a)("i",{className:"fa fa-star"}),Object(h.a)("span",{className:"detailed-status__favorites"},void 0,Object(h.a)(M.c,{value:e.get("favourites_count")}))):Object(h.a)("a",{href:"/interact/"+e.get("id")+"?type=favourite",className:"detailed-status__link",onClick:this.handleModalLink},void 0,Object(h.a)("i",{className:"fa fa-star"}),Object(h.a)("span",{className:"detailed-status__favorites"},void 0,Object(h.a)(M.c,{value:e.get("favourites_count")}))),Object(h.a)("div",{style:i},void 0,O.a.createElement("div",{ref:this.setRef,className:x()("detailed-status",{compact:o}),"data-status-by":e.getIn(["account","acct"])},Object(h.a)("a",{href:e.getIn(["account","url"]),onClick:this.handleAccountClick,className:"detailed-status__display-name"},void 0,Object(h.a)("div",{className:"detailed-status__display-avatar"},void 0,Object(h.a)(f.a,{account:e.get("account"),size:48})),Object(h.a)(g.a,{account:e.get("account"),localDomain:this.props.domain})),Object(h.a)(j.a,{status:e,media:c,mediaIcon:r,expanded:a,collapsed:!1,onExpandedToggle:s,parseClick:this.parseClick}),Object(h.a)("div",{className:"detailed-status__meta"},void 0,Object(h.a)("a",{className:"detailed-status__datetime",href:e.get("url"),target:"_blank",rel:"noopener"},void 0,Object(h.a)(M.a,{value:new Date(e.get("created_at")),hour12:!1,year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"})),l," · ",d," · ",p," · ",Object(h.a)(_.a,{visibility:e.get("visibility")}))))},e}(u.a);Object(o.a)(I,"contextTypes",{router:r.a.object}),Object(o.a)(I,"propTypes",{status:d.a.map.isRequired,settings:d.a.map.isRequired,onOpenMedia:r.a.func.isRequired,onOpenVideo:r.a.func.isRequired,onToggleHidden:r.a.func.isRequired,expanded:r.a.bool,measureHeight:r.a.bool,onHeightChange:r.a.func,domain:r.a.string.isRequired,compact:r.a.bool})},726:function(e,t,a){"use strict";a.r(t);var s,n,i,o,c,r,l,b=a(1),d=a(6),u=a(0),p=a(2),h=a(4),O=a.n(h),f=a(3),g=a.n(f),j=a(20),m=a(5),v=a.n(m),k=a(12),M=a.n(k),y=a(26),C=a.n(y),_=a(50),x=a(898),I=a(654),w=a(46),R=a(521),D=a(7),N=a(30),E=a(138),H=Object(D.f)({delete:{id:"status.delete",defaultMessage:"Delete"},redraft:{id:"status.redraft",defaultMessage:"Delete & re-draft"},direct:{id:"status.direct",defaultMessage:"Direct message @{name}"},mention:{id:"status.mention",defaultMessage:"Mention @{name}"},reply:{id:"status.reply",defaultMessage:"Reply"},reblog:{id:"status.reblog",defaultMessage:"Boost"},reblog_private:{id:"status.reblog_private",defaultMessage:"Boost to original audience"},cannot_reblog:{id:"status.cannot_reblog",defaultMessage:"This post cannot be boosted"},favourite:{id:"status.favourite",defaultMessage:"Favourite"},bookmark:{id:"status.bookmark",defaultMessage:"Bookmark"},mute:{id:"status.mute",defaultMessage:"Mute @{name}"},muteConversation:{id:"status.mute_conversation",defaultMessage:"Mute conversation"},unmuteConversation:{id:"status.unmute_conversation",defaultMessage:"Unmute conversation"},block:{id:"status.block",defaultMessage:"Block @{name}"},report:{id:"status.report",defaultMessage:"Report @{name}"},share:{id:"status.share",defaultMessage:"Share"},pin:{id:"status.pin",defaultMessage:"Pin on profile"},unpin:{id:"status.unpin",defaultMessage:"Unpin from profile"},embed:{id:"status.embed",defaultMessage:"Embed"},admin_account:{id:"status.admin_account",defaultMessage:"Open moderation interface for @{name}"},admin_status:{id:"status.admin_status",defaultMessage:"Open this status in the moderation interface"}}),A=Object(D.g)((i=n=function(n){function e(){for(var t,e=arguments.length,a=new Array(e),s=0;s<e;s++)a[s]=arguments[s];return t=n.call.apply(n,[this].concat(a))||this,Object(p.a)(Object(u.a)(Object(u.a)(t)),"handleReplyClick",function(){t.props.onReply(t.props.status)}),Object(p.a)(Object(u.a)(Object(u.a)(t)),"handleReblogClick",function(e){t.props.onReblog(t.props.status,e)}),Object(p.a)(Object(u.a)(Object(u.a)(t)),"handleFavouriteClick",function(e){t.props.onFavourite(t.props.status,e)}),Object(p.a)(Object(u.a)(Object(u.a)(t)),"handleBookmarkClick",function(e){t.props.onBookmark(t.props.status,e)}),Object(p.a)(Object(u.a)(Object(u.a)(t)),"handleDeleteClick",function(){t.props.onDelete(t.props.status,t.context.router.history)}),Object(p.a)(Object(u.a)(Object(u.a)(t)),"handleRedraftClick",function(){t.props.onDelete(t.props.status,t.context.router.history,!0)}),Object(p.a)(Object(u.a)(Object(u.a)(t)),"handleDirectClick",function(){t.props.onDirect(t.props.status.get("account"),t.context.router.history)}),Object(p.a)(Object(u.a)(Object(u.a)(t)),"handleMentionClick",function(){t.props.onMention(t.props.status.get("account"),t.context.router.history)}),Object(p.a)(Object(u.a)(Object(u.a)(t)),"handleMuteClick",function(){t.props.onMute(t.props.status.get("account"))}),Object(p.a)(Object(u.a)(Object(u.a)(t)),"handleConversationMuteClick",function(){t.props.onMuteConversation(t.props.status)}),Object(p.a)(Object(u.a)(Object(u.a)(t)),"handleBlockClick",function(){t.props.onBlock(t.props.status.get("account"))}),Object(p.a)(Object(u.a)(Object(u.a)(t)),"handleReport",function(){t.props.onReport(t.props.status)}),Object(p.a)(Object(u.a)(Object(u.a)(t)),"handlePinClick",function(){t.props.onPin(t.props.status)}),Object(p.a)(Object(u.a)(Object(u.a)(t)),"handleShare",function(){navigator.share({text:t.props.status.get("search_index"),url:t.props.status.get("url")})}),Object(p.a)(Object(u.a)(Object(u.a)(t)),"handleEmbed",function(){t.props.onEmbed(t.props.status)}),t}return Object(d.a)(e,n),e.prototype.render=function(){var e=this.props,t=e.status,a=e.intl,s=["public","unlisted"].includes(t.get("visibility")),n=t.get("muted"),i=[];s&&(i.push({text:a.formatMessage(H.embed),action:this.handleEmbed}),i.push(null)),N.l===t.getIn(["account","id"])?(s&&i.push({text:a.formatMessage(t.get("pinned")?H.unpin:H.pin),action:this.handlePinClick}),i.push(null),i.push({text:a.formatMessage(n?H.unmuteConversation:H.muteConversation),action:this.handleConversationMuteClick}),i.push(null),i.push({text:a.formatMessage(H.delete),action:this.handleDeleteClick}),i.push({text:a.formatMessage(H.redraft),action:this.handleRedraftClick})):(i.push({text:a.formatMessage(H.mention,{name:t.getIn(["account","username"])}),action:this.handleMentionClick}),i.push({text:a.formatMessage(H.direct,{name:t.getIn(["account","username"])}),action:this.handleDirectClick}),i.push(null),i.push({text:a.formatMessage(H.mute,{name:t.getIn(["account","username"])}),action:this.handleMuteClick}),i.push({text:a.formatMessage(H.block,{name:t.getIn(["account","username"])}),action:this.handleBlockClick}),i.push({text:a.formatMessage(H.report,{name:t.getIn(["account","username"])}),action:this.handleReport}),N.i&&(E.a||E.e)&&(i.push(null),void 0!==E.a&&i.push({text:a.formatMessage(H.admin_account,{name:t.getIn(["account","username"])}),href:Object(E.a)(t.getIn(["account","id"]))}),void 0!==E.e&&i.push({text:a.formatMessage(H.admin_status),href:Object(E.e)(t.getIn(["account","id"]),t.get("id"))})));var o="share"in navigator&&"public"===t.get("visibility")&&Object(b.a)("div",{className:"detailed-status__button"},void 0,Object(b.a)(w.a,{title:a.formatMessage(H.share),icon:"share-alt",onClick:this.handleShare})),c="direct"===t.get("visibility")||"private"===t.get("visibility")&&N.l!==t.getIn(["account","id"]),r="private"===t.get("visibility")?H.reblog_private:H.reblog;return Object(b.a)("div",{className:"detailed-status__action-bar"},void 0,Object(b.a)("div",{className:"detailed-status__button"},void 0,Object(b.a)(w.a,{title:a.formatMessage(H.reply),icon:null===t.get("in_reply_to_id",null)?"reply":"reply-all",onClick:this.handleReplyClick})),Object(b.a)("div",{className:"detailed-status__button"},void 0,Object(b.a)(w.a,{disabled:c,active:t.get("reblogged"),title:c?a.formatMessage(H.cannot_reblog):a.formatMessage(r),icon:"retweet",onClick:this.handleReblogClick})),Object(b.a)("div",{className:"detailed-status__button"},void 0,Object(b.a)(w.a,{className:"star-icon",animate:!0,active:t.get("favourited"),title:a.formatMessage(H.favourite),icon:"star",onClick:this.handleFavouriteClick})),o,Object(b.a)("div",{className:"detailed-status__button"},void 0,Object(b.a)(w.a,{className:"bookmark-icon",active:t.get("bookmarked"),title:a.formatMessage(H.bookmark),icon:"bookmark",onClick:this.handleBookmarkClick})),Object(b.a)("div",{className:"detailed-status__action-bar-dropdown"},void 0,Object(b.a)(R.a,{size:18,icon:"ellipsis-h",items:i,direction:"left",ariaLabel:"More"})))},e}(g.a.PureComponent),Object(p.a)(n,"contextTypes",{router:v.a.object}),s=i))||s,B=a(639),F=a(25),S=a(19),T=a(290),z=a(14),q=a(66),U=a(90),P=a(166),V=a(295),K=a(888),L=a(427),W=a(632),J=a(44),Y=a(24),G=a(176),Q=a(168),X=a(523),Z=a(627);a.d(t,"default",function(){return ee});var $=Object(D.f)({deleteConfirm:{id:"confirmations.delete.confirm",defaultMessage:"Delete"},deleteMessage:{id:"confirmations.delete.message",defaultMessage:"Are you sure you want to delete this status?"},redraftConfirm:{id:"confirmations.redraft.confirm",defaultMessage:"Delete & redraft"},redraftMessage:{id:"confirmations.redraft.message",defaultMessage:"Are you sure you want to delete this status and re-draft it? You will lose all replies, boosts and favourites to it."},blockConfirm:{id:"confirmations.block.confirm",defaultMessage:"Block"},revealAll:{id:"status.show_more_all",defaultMessage:"Show more for all"},hideAll:{id:"status.show_less_all",defaultMessage:"Show less for all"},detailedStatus:{id:"status.detailed_status",defaultMessage:"Detailed conversation view"},replyConfirm:{id:"confirmations.reply.confirm",defaultMessage:"Reply"},replyMessage:{id:"confirmations.reply.message",defaultMessage:"Replying now will overwrite the message you are currently composing. Are you sure you want to proceed?"}}),ee=(o=Object(j.connect)(function(){var s=Object(P.f)();return function(n,e){var i=s(n,{id:e.params.statusId}),t=O.a.List(),a=O.a.List();return i&&(t=t.withMutations(function(e){for(var t=i.get("in_reply_to_id");t;)e.unshift(t),t=n.getIn(["contexts","inReplyTos",t])}),a=a.withMutations(function(e){for(var t=[i.get("id")];0<t.length;){var a=t.shift(),s=n.getIn(["contexts","replies",a]);i.get("id")!==a&&e.push(a),s&&s.reverse().forEach(function(e){t.unshift(e)})}})),{status:i,ancestorsIds:t,descendantsIds:a,settings:n.get("local_settings"),askReplyConfirmation:n.getIn(["local_settings","confirm_before_clearing_draft"])&&0!==n.getIn(["compose","text"]).trim().length,domain:n.getIn(["meta","domain"])}}}),Object(D.g)(c=o((l=r=function(s){function e(){for(var o,e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return o=s.call.apply(s,[this].concat(t))||this,Object(p.a)(Object(u.a)(Object(u.a)(o)),"state",{fullscreen:!1,isExpanded:void 0,threadExpanded:void 0,statusId:void 0}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleExpandedToggle",function(){o.props.status.get("spoiler_text")&&o.setExpansion(!o.state.isExpanded)}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleModalFavourite",function(e){o.props.dispatch(Object(F.r)(e))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleFavouriteClick",function(e,t){e.get("favourited")?o.props.dispatch(Object(F.x)(e)):t&&t.shiftKey||!N.g?o.handleModalFavourite(e):o.props.dispatch(Object(J.d)("FAVOURITE",{status:e,onFavourite:o.handleModalFavourite}))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handlePin",function(e){e.get("pinned")?o.props.dispatch(Object(F.y)(e)):o.props.dispatch(Object(F.u)(e))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleReplyClick",function(e){var t=o.props,a=t.askReplyConfirmation,s=t.dispatch,n=t.intl;s(a?Object(J.d)("CONFIRM",{message:n.formatMessage($.replyMessage),confirm:n.formatMessage($.replyConfirm),onDoNotAsk:function(){return s(Object(T.b)(["confirm_before_clearing_draft"],!1))},onConfirm:function(){return s(Object(S.W)(e,o.context.router.history))}}):Object(S.W)(e,o.context.router.history))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleModalReblog",function(e){o.props.dispatch(Object(F.v)(e))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleReblogClick",function(e,t){e.get("reblogged")?o.props.dispatch(Object(F.z)(e)):t&&t.shiftKey||!N.b?o.handleModalReblog(e):o.props.dispatch(Object(J.d)("BOOST",{status:e,onReblog:o.handleModalReblog}))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleBookmarkClick",function(e){e.get("bookmarked")?o.props.dispatch(Object(F.w)(e)):o.props.dispatch(Object(F.q)(e))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleDeleteClick",function(e,t,a){void 0===a&&(a=!1);var s=o.props,n=s.dispatch,i=s.intl;N.d?n(Object(J.d)("CONFIRM",{message:i.formatMessage(a?$.redraftMessage:$.deleteMessage),confirm:i.formatMessage(a?$.redraftConfirm:$.deleteConfirm),onConfirm:function(){return n(Object(_.f)(e.get("id"),t,a))}})):n(Object(_.f)(e.get("id"),t,a))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleDirectClick",function(e,t){o.props.dispatch(Object(S.P)(e,t))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleMentionClick",function(e,t){o.props.dispatch(Object(S.U)(e,t))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleOpenMedia",function(e,t){o.props.dispatch(Object(J.d)("MEDIA",{media:e,index:t}))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleOpenVideo",function(e,t){o.props.dispatch(Object(J.d)("VIDEO",{media:e,time:t}))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleMuteClick",function(e){o.props.dispatch(Object(q.g)(e))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleConversationMuteClick",function(e){e.get("muted")?o.props.dispatch(Object(_.k)(e.get("id"))):o.props.dispatch(Object(_.i)(e.get("id")))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleToggleAll",function(){var e=o.state.isExpanded;o.setState({isExpanded:!e,threadExpanded:!e})}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleBlockClick",function(e){var t=o.props,a=t.dispatch,s=t.intl;a(Object(J.d)("CONFIRM",{message:Object(b.a)(D.b,{id:"confirmations.block.message",defaultMessage:"Are you sure you want to block {name}?",values:{name:Object(b.a)("strong",{},void 0,"@",e.get("acct"))}}),confirm:s.formatMessage($.blockConfirm),onConfirm:function(){return a(Object(z.A)(e.get("id")))}}))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleReport",function(e){o.props.dispatch(Object(U.k)(e.get("account"),e))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleEmbed",function(e){o.props.dispatch(Object(J.d)("EMBED",{url:e.get("url")}))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleHotkeyMoveUp",function(){o.handleMoveUp(o.props.status.get("id"))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleHotkeyMoveDown",function(){o.handleMoveDown(o.props.status.get("id"))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleHotkeyReply",function(e){e.preventDefault(),o.handleReplyClick(o.props.status)}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleHotkeyFavourite",function(){o.handleFavouriteClick(o.props.status)}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleHotkeyBoost",function(){o.handleReblogClick(o.props.status)}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleHotkeyMention",function(e){e.preventDefault(),o.handleMentionClick(o.props.status)}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleHotkeyOpenProfile",function(){o.context.router.history.push("/accounts/"+o.props.status.getIn(["account","id"]))}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleMoveUp",function(e){var t=o.props,a=t.status,s=t.ancestorsIds,n=t.descendantsIds;if(e===a.get("id"))o._selectChild(s.size-1);else{var i=s.indexOf(e);-1===i?(i=n.indexOf(e),o._selectChild(s.size+i)):o._selectChild(i-1)}}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"handleMoveDown",function(e){var t=o.props,a=t.status,s=t.ancestorsIds,n=t.descendantsIds;if(e===a.get("id"))o._selectChild(s.size+1);else{var i=s.indexOf(e);-1===i?(i=n.indexOf(e),o._selectChild(s.size+i+2)):o._selectChild(i+1)}}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"setExpansion",function(e){o.setState({isExpanded:e})}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"setRef",function(e){o.node=e}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"onFullScreenChange",function(){o.setState({fullscreen:Object(Q.d)()})}),Object(p.a)(Object(u.a)(Object(u.a)(o)),"shouldUpdateScroll",function(e,t){var a=t.location;return!(((e||{}).location||{}).state||{}).mastodonModalOpen&&!(a.state&&a.state.mastodonModalOpen)}),o}Object(d.a)(e,s);var t=e.prototype;return t.componentDidMount=function(){Object(Q.a)(this.onFullScreenChange),this.props.dispatch(Object(_.g)(this.props.params.statusId));var e=this.props,t=e.status,a=e.ancestorsIds;if(t&&a&&0<a.size){var s=this.node.querySelectorAll(".focusable")[a.size-1];window.requestAnimationFrame(function(){s.scrollIntoView(!0)})}},e.getDerivedStateFromProps=function(e,t){return t.statusId!==e.params.statusId&&e.params.statusId?(e.dispatch(Object(_.g)(e.params.statusId)),{threadExpanded:void 0,isExpanded:Object(X.a)(e.settings,e.status),statusId:e.params.statusId}):null},t._selectChild=function(e){var t=this.node.querySelectorAll(".focusable")[e];t&&t.focus()},t.renderChildren=function(e){var t=this;return e.map(function(e){return Object(b.a)(W.a,{id:e,expanded:t.state.threadExpanded,onMoveUp:t.handleMoveUp,onMoveDown:t.handleMoveDown,contextType:"thread"},e)})},t.componentDidUpdate=function(e){if(this.props.params.statusId&&(this.props.params.statusId!==e.params.statusId||e.ancestorsIds.size<this.props.ancestorsIds.size)){var t=this.props,a=t.status,s=t.ancestorsIds;if(a&&s&&0<s.size){var n=this.node.querySelectorAll(".focusable")[s.size-1];window.requestAnimationFrame(function(){n.scrollIntoView(!0)})}}},t.componentWillUnmount=function(){Object(Q.b)(this.onFullScreenChange)},t.render=function(){this.setExpansion;var e,t,a=this.props,s=a.status,n=a.settings,i=a.ancestorsIds,o=a.descendantsIds,c=a.intl,r=a.domain,l=this.state,d=l.fullscreen,u=l.isExpanded;if(null===s)return Object(b.a)(B.a,{},void 0,Object(b.a)(K.a,{}),Object(b.a)(x.a,{}));i&&0<i.size&&(e=Object(b.a)("div",{},void 0,this.renderChildren(i))),o&&0<o.size&&(t=Object(b.a)("div",{},void 0,this.renderChildren(o)));var p={moveUp:this.handleHotkeyMoveUp,moveDown:this.handleHotkeyMoveDown,reply:this.handleHotkeyReply,favourite:this.handleHotkeyFavourite,boost:this.handleHotkeyBoost,mention:this.handleHotkeyMention,openProfile:this.handleHotkeyOpenProfile,toggleSpoiler:this.handleExpandedToggle};return Object(b.a)(B.a,{label:c.formatMessage($.detailedStatus)},void 0,Object(b.a)(L.a,{showBackButton:!0,extraButton:Object(b.a)("button",{className:"column-header__button",title:c.formatMessage(u?$.hideAll:$.revealAll),"aria-label":c.formatMessage(u?$.hideAll:$.revealAll),onClick:this.handleToggleAll,"aria-pressed":u?"true":"false"},void 0,Object(b.a)("i",{className:"fa fa-"+(u?"eye":"eye-slash")}))}),Object(b.a)(V.a,{scrollKey:"thread",shouldUpdateScroll:this.shouldUpdateScroll},void 0,g.a.createElement("div",{className:M()("scrollable","detailed-status__wrapper",{fullscreen:d}),ref:this.setRef},e,Object(b.a)(G.HotKeys,{handlers:p},void 0,Object(b.a)("div",{className:"focusable",tabIndex:"0","aria-label":Object(Z.b)(c,s,!1,!s.get("hidden"))},void 0,Object(b.a)(I.a,{status:s,settings:n,onOpenVideo:this.handleOpenVideo,onOpenMedia:this.handleOpenMedia,expanded:u,onToggleHidden:this.handleExpandedToggle,domain:r}),Object(b.a)(A,{status:s,onReply:this.handleReplyClick,onFavourite:this.handleFavouriteClick,onReblog:this.handleReblogClick,onBookmark:this.handleBookmarkClick,onDelete:this.handleDeleteClick,onDirect:this.handleDirectClick,onMention:this.handleMentionClick,onMute:this.handleMuteClick,onMuteConversation:this.handleConversationMuteClick,onBlock:this.handleBlockClick,onReport:this.handleReport,onPin:this.handlePin,onEmbed:this.handleEmbed}))),t)))},e}(Y.a),Object(p.a)(r,"contextTypes",{router:v.a.object}),Object(p.a)(r,"propTypes",{params:v.a.object.isRequired,dispatch:v.a.func.isRequired,status:C.a.map,settings:C.a.map.isRequired,ancestorsIds:C.a.list,descendantsIds:C.a.list,intl:v.a.object.isRequired,askReplyConfirmation:v.a.bool,domain:v.a.string.isRequired}),c=l))||c)||c)}}]);
//# sourceMappingURL=status.js.map