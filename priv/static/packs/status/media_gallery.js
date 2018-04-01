webpackJsonp([25],{154:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.d(t,"default",function(){return N});var a,n,s,l,o,r=i(2),d=i.n(r),p=i(1),c=i.n(p),u=i(3),h=i.n(u),g=i(4),v=i.n(g),m=i(0),f=i.n(m),y=i(8),b=(i.n(y),i(23)),_=i(6),k=i(35),x=i(10),C=i.n(x),w=i(11),M=Object(_.f)({toggle_visible:{id:"media_gallery.toggle_visible",defaultMessage:"Toggle visibility"}}),P=(n=a=function(e){function t(){var i,a,n;c()(this,t);for(var s=arguments.length,l=Array(s),o=0;o<s;o++)l[o]=arguments[o];return i=a=h()(this,e.call.apply(e,[this].concat(l))),a.handleMouseEnter=function(e){a.hoverToPlay()&&e.target.play()},a.handleMouseLeave=function(e){a.hoverToPlay()&&(e.target.pause(),e.target.currentTime=0)},a.handleClick=function(e){var t=a.props,i=t.index,n=t.onClick;0===e.button&&(e.preventDefault(),n(i)),e.stopPropagation()},n=i,h()(a,n)}return v()(t,e),t.prototype.hoverToPlay=function(){var e=this.props.attachment;return!w.a&&"gifv"===e.get("type")},t.prototype.render=function(){var e=this.props,t=e.attachment,i=e.index,a=e.size,n=e.standalone,s=50,l=100,o="auto",r="auto",p="auto",c="auto";1===a&&(s=100),(4===a||3===a&&i>0)&&(l=50),2===a?0===i?c="2px":r="2px":3===a?(0===i?c="2px":i>0&&(r="2px"),1===i?p="2px":i>1&&(o="2px")):4===a&&(0!==i&&2!==i||(c="2px"),1!==i&&3!==i||(r="2px"),i<2?p="2px":o="2px");var u="";if("image"===t.get("type")){var h=t.get("preview_url"),g=t.getIn(["meta","small","width"]),v=t.get("url"),m=t.getIn(["meta","original","width"]),f="number"==typeof m&&"number"==typeof g,y=f?v+" "+m+"w, "+h+" "+g+"w":null,b=f?"(min-width: 1025px) "+s/100*320+"px, "+s+"vw":null,_=t.getIn(["meta","focus","x"])||0,x=t.getIn(["meta","focus","y"])||0,M=100*(_/2+.5),P=100*(x/-2+.5);u=d()("a",{className:"media-gallery__item-thumbnail",href:t.get("remote_url")||v,onClick:this.handleClick,target:"_blank"},void 0,d()("img",{src:h,srcSet:y,sizes:b,alt:t.get("description"),title:t.get("description"),style:{objectPosition:M+"% "+P+"%"}}))}else if("gifv"===t.get("type")){var N=!Object(k.a)()&&w.a;u=d()("div",{className:C()("media-gallery__gifv",{autoplay:N})},void 0,d()("video",{className:"media-gallery__item-gifv-thumbnail","aria-label":t.get("description"),role:"application",src:t.get("url"),onClick:this.handleClick,onMouseEnter:this.handleMouseEnter,onMouseLeave:this.handleMouseLeave,autoPlay:N,loop:!0,muted:!0}),d()("span",{className:"media-gallery__gifv__label"},void 0,"GIF"))}return d()("div",{className:C()("media-gallery__item",{standalone:n}),style:{left:r,top:o,right:c,bottom:p,width:s+"%",height:l+"%"}},t.get("id"),u)},t}(f.a.PureComponent),a.defaultProps={standalone:!1,index:0,size:1},n),N=Object(_.g)((o=l=function(e){function t(){var i,a,n;c()(this,t);for(var s=arguments.length,l=Array(s),o=0;o<s;o++)l[o]=arguments[o];return i=a=h()(this,e.call.apply(e,[this].concat(l))),a.state={visible:!a.props.sensitive||w.f},a.handleOpen=function(){a.setState({visible:!a.state.visible})},a.handleClick=function(e){a.props.onOpenMedia(a.props.media,e)},a.handleRef=function(e){e&&a.setState({width:e.offsetWidth})},n=i,h()(a,n)}return v()(t,e),t.prototype.componentWillReceiveProps=function(e){Object(y.is)(e.media,this.props.media)||this.setState({visible:!e.sensitive})},t.prototype.isStandaloneEligible=function(){var e=this.props,t=e.media;return e.standalone&&1===t.size&&t.getIn([0,"meta","small","aspect"])},t.prototype.render=function(){var e=this,t=this.props,i=t.media,a=t.intl,n=t.sensitive,s=t.height,l=this.state,o=l.width,r=l.visible,p=void 0,c={};if(this.isStandaloneEligible()?o&&(c.height=o/this.props.media.getIn([0,"meta","small","aspect"])):c.height=o?o/(16/9):s,r){var u=i.take(4).size;p=this.isStandaloneEligible()?d()(P,{standalone:!0,onClick:this.handleClick,attachment:i.get(0)}):i.take(4).map(function(t,i){return d()(P,{onClick:e.handleClick,attachment:t,index:i,size:u},t.get("id"))})}else{var h=void 0;h=n?d()(_.b,{id:"status.sensitive_warning",defaultMessage:"Sensitive content"}):d()(_.b,{id:"status.media_hidden",defaultMessage:"Media hidden"}),p=f.a.createElement("button",{type:"button",className:"media-spoiler",onClick:this.handleOpen,style:c,ref:this.handleRef},d()("span",{className:"media-spoiler__warning"},void 0,h),d()("span",{className:"media-spoiler__trigger"},void 0,d()(_.b,{id:"status.sensitive_toggle",defaultMessage:"Click to view"})))}return f.a.createElement("div",{className:"media-gallery",style:c,ref:this.handleRef},d()("div",{className:C()("spoiler-button",{"spoiler-button--visible":r})},void 0,d()(b.a,{title:a.formatMessage(M.toggle_visible),icon:r?"eye":"eye-slash",overlay:!0,onClick:this.handleOpen})),p)},t}(f.a.PureComponent),l.defaultProps={standalone:!1},s=o))||s}});
//# sourceMappingURL=media_gallery.js.map