(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{725:function(a,e,t){"use strict";t.r(e);var l=t(1),o=t(6),n=t(0),s=t(2),c=(t(3),t(20)),i=t(26),r=t.n(i),d=t(5),p=t.n(d),u=t(14),b=t(31),h=t(288),O=t(639),j=t(888),m=t(24),f=t(166),g=t(319),v=t(30),I=function(c){function a(){for(var a,e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return a=c.call.apply(c,[this].concat(t))||this,Object(s.a)(Object(n.a)(Object(n.a)(a)),"state",{visible:"hide_all"!==v.f&&!a.props.media.getIn(["status","sensitive"])||"show_all"===v.f}),Object(s.a)(Object(n.a)(Object(n.a)(a)),"handleClick",function(){return!a.state.visible&&(a.setState({visible:!0}),!0)}),a}return Object(o.a)(a,c),a.prototype.render=function(){var a,e,t,o=this.props.media,c=this.state.visible,n=o.get("status"),s=100*(o.getIn(["meta","focus","x"])/2+.5),i=100*(o.getIn(["meta","focus","y"])/-2+.5),r={};return"gifv"===o.get("type")&&(a=Object(l.a)("span",{className:"media-gallery__gifv__label"},void 0,"GIF")),t=c?(r.backgroundImage="url("+o.get("preview_url")+")",r.backgroundPosition=s+"% "+i+"%",o.get("description")):(e=Object(l.a)("span",{className:"account-gallery__item__icons"},void 0,Object(l.a)("i",{className:"fa fa-eye-slash"})),n.get("spoiler_text")||o.get("description")),Object(l.a)("div",{className:"account-gallery__item"},void 0,Object(l.a)(g.a,{to:"/statuses/"+n.get("id"),href:n.get("url"),style:r,title:t,onInterceptClick:this.handleClick},void 0,e,a))},a}(m.a);Object(s.a)(I,"propTypes",{media:r.a.map.isRequired});var y,_,M,L=t(901),w=t(295),S=t(646);t.d(e,"default",function(){return x});var k=function(c){function a(){for(var a,e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return a=c.call.apply(c,[this].concat(t))||this,Object(s.a)(Object(n.a)(Object(n.a)(a)),"handleLoadMore",function(){a.props.onLoadMore(a.props.maxId)}),a}return Object(o.a)(a,c),a.prototype.render=function(){return Object(l.a)(S.a,{disabled:this.props.disabled,onClick:this.handleLoadMore})},a}(m.a);Object(s.a)(k,"propTypes",{maxId:p.a.string,onLoadMore:p.a.func.isRequired});var x=Object(c.connect)(function(a,e){return{medias:Object(f.a)(a,e.params.accountId),isLoading:a.getIn(["timelines","account:"+e.params.accountId+":media","isLoading"]),hasMore:a.getIn(["timelines","account:"+e.params.accountId+":media","hasMore"])}})((M=_=function(c){function a(){for(var o,a=arguments.length,e=new Array(a),t=0;t<a;t++)e[t]=arguments[t];return o=c.call.apply(c,[this].concat(e))||this,Object(s.a)(Object(n.a)(Object(n.a)(o)),"handleScrollToBottom",function(){o.props.hasMore&&o.handleLoadMore(0<o.props.medias.size?o.props.medias.last().getIn(["status","id"]):void 0)}),Object(s.a)(Object(n.a)(Object(n.a)(o)),"handleScroll",function(a){var e=a.target,t=e.scrollTop;e.scrollHeight-t-e.clientHeight<150&&!o.props.isLoading&&o.handleScrollToBottom()}),Object(s.a)(Object(n.a)(Object(n.a)(o)),"handleLoadMore",function(a){o.props.dispatch(Object(b.m)(o.props.params.accountId,{maxId:a}))}),Object(s.a)(Object(n.a)(Object(n.a)(o)),"handleLoadOlder",function(a){a.preventDefault(),o.handleScrollToBottom()}),Object(s.a)(Object(n.a)(Object(n.a)(o)),"shouldUpdateScroll",function(a,e){var t=e.location;return!(((a||{}).location||{}).state||{}).mastodonModalOpen&&!(t.state&&t.state.mastodonModalOpen)}),o}Object(o.a)(a,c);var e=a.prototype;return e.componentDidMount=function(){this.props.dispatch(Object(u.G)(this.props.params.accountId)),this.props.dispatch(Object(b.m)(this.props.params.accountId))},e.componentWillReceiveProps=function(a){a.params.accountId!==this.props.params.accountId&&a.params.accountId&&(this.props.dispatch(Object(u.G)(a.params.accountId)),this.props.dispatch(Object(b.m)(this.props.params.accountId)))},e.render=function(){var t=this,a=this.props,o=a.medias,e=a.isLoading,c=a.hasMore,n=null;return!o&&e?Object(l.a)(O.a,{},void 0,Object(l.a)(h.a,{})):(!c||e&&0===o.size||(n=Object(l.a)(S.a,{visible:!e,onClick:this.handleLoadOlder})),Object(l.a)(O.a,{},void 0,Object(l.a)(j.a,{}),Object(l.a)(w.a,{scrollKey:"account_gallery",shouldUpdateScroll:this.shouldUpdateScroll},void 0,Object(l.a)("div",{className:"scrollable scrollable--flex",onScroll:this.handleScroll},void 0,Object(l.a)(L.a,{accountId:this.props.params.accountId}),Object(l.a)("div",{role:"feed",className:"account-gallery__container"},void 0,o.map(function(a,e){return null===a?Object(l.a)(k,{maxId:0<e?o.getIn(e-1,"id"):null,onLoadMore:t.handleLoadMore},"more:"+o.getIn(e+1,"id")):Object(l.a)(I,{media:a},a.get("id"))}),n),e&&0===o.size&&Object(l.a)("div",{className:"scrollable__append"},void 0,Object(l.a)(h.a,{}))))))},a}(m.a),Object(s.a)(_,"propTypes",{params:p.a.object.isRequired,dispatch:p.a.func.isRequired,medias:r.a.list.isRequired,isLoading:p.a.bool,hasMore:p.a.bool}),y=M))||y}}]);
//# sourceMappingURL=account_gallery.js.map