(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function o(s){if(s.ep)return;s.ep=!0;const c=r(s);fetch(s.href,c)}})();function Sh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ud={exports:{}},zl={};var u0;function H_(){if(u0)return zl;u0=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function r(o,s,c){var d=null;if(c!==void 0&&(d=""+c),s.key!==void 0&&(d=""+s.key),"key"in s){c={};for(var h in s)h!=="key"&&(c[h]=s[h])}else c=s;return s=c.ref,{$$typeof:n,type:o,key:d,ref:s!==void 0?s:null,props:c}}return zl.Fragment=i,zl.jsx=r,zl.jsxs=r,zl}var c0;function q_(){return c0||(c0=1,ud.exports=H_()),ud.exports}var x=q_(),cd={exports:{}},De={};var f0;function $_(){if(f0)return De;f0=1;var n=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),A=Symbol.iterator;function M(R){return R===null||typeof R!="object"?null:(R=A&&R[A]||R["@@iterator"],typeof R=="function"?R:null)}var z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function T(R,Z,ne){this.props=R,this.context=Z,this.refs=S,this.updater=ne||z}T.prototype.isReactComponent={},T.prototype.setState=function(R,Z){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,Z,"setState")},T.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function _(){}_.prototype=T.prototype;function O(R,Z,ne){this.props=R,this.context=Z,this.refs=S,this.updater=ne||z}var L=O.prototype=new _;L.constructor=O,C(L,T.prototype),L.isPureReactComponent=!0;var Y=Array.isArray;function P(){}var q={H:null,A:null,T:null,S:null},W=Object.prototype.hasOwnProperty;function ge(R,Z,ne){var re=ne.ref;return{$$typeof:n,type:R,key:Z,ref:re!==void 0?re:null,props:ne}}function Te(R,Z){return ge(R.type,Z,R.props)}function Se(R){return typeof R=="object"&&R!==null&&R.$$typeof===n}function me(R){var Z={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(ne){return Z[ne]})}var ue=/\/+/g;function be(R,Z){return typeof R=="object"&&R!==null&&R.key!=null?me(""+R.key):Z.toString(36)}function Ee(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(P,P):(R.status="pending",R.then(function(Z){R.status==="pending"&&(R.status="fulfilled",R.value=Z)},function(Z){R.status==="pending"&&(R.status="rejected",R.reason=Z)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function G(R,Z,ne,re,pe){var oe=typeof R;(oe==="undefined"||oe==="boolean")&&(R=null);var xe=!1;if(R===null)xe=!0;else switch(oe){case"bigint":case"string":case"number":xe=!0;break;case"object":switch(R.$$typeof){case n:case i:xe=!0;break;case g:return xe=R._init,G(xe(R._payload),Z,ne,re,pe)}}if(xe)return pe=pe(R),xe=re===""?"."+be(R,0):re,Y(pe)?(ne="",xe!=null&&(ne=xe.replace(ue,"$&/")+"/"),G(pe,Z,ne,"",function(vt){return vt})):pe!=null&&(Se(pe)&&(pe=Te(pe,ne+(pe.key==null||R&&R.key===pe.key?"":(""+pe.key).replace(ue,"$&/")+"/")+xe)),Z.push(pe)),1;xe=0;var Qe=re===""?".":re+":";if(Y(R))for(var Ve=0;Ve<R.length;Ve++)re=R[Ve],oe=Qe+be(re,Ve),xe+=G(re,Z,ne,oe,pe);else if(Ve=M(R),typeof Ve=="function")for(R=Ve.call(R),Ve=0;!(re=R.next()).done;)re=re.value,oe=Qe+be(re,Ve++),xe+=G(re,Z,ne,oe,pe);else if(oe==="object"){if(typeof R.then=="function")return G(Ee(R),Z,ne,re,pe);throw Z=String(R),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return xe}function ae(R,Z,ne){if(R==null)return R;var re=[],pe=0;return G(R,re,"","",function(oe){return Z.call(ne,oe,pe++)}),re}function ce(R){if(R._status===-1){var Z=R._result;Z=Z(),Z.then(function(ne){(R._status===0||R._status===-1)&&(R._status=1,R._result=ne)},function(ne){(R._status===0||R._status===-1)&&(R._status=2,R._result=ne)}),R._status===-1&&(R._status=0,R._result=Z)}if(R._status===1)return R._result.default;throw R._result}var Oe=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},_e={map:ae,forEach:function(R,Z,ne){ae(R,function(){Z.apply(this,arguments)},ne)},count:function(R){var Z=0;return ae(R,function(){Z++}),Z},toArray:function(R){return ae(R,function(Z){return Z})||[]},only:function(R){if(!Se(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return De.Activity=b,De.Children=_e,De.Component=T,De.Fragment=r,De.Profiler=s,De.PureComponent=O,De.StrictMode=o,De.Suspense=p,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=q,De.__COMPILER_RUNTIME={__proto__:null,c:function(R){return q.H.useMemoCache(R)}},De.cache=function(R){return function(){return R.apply(null,arguments)}},De.cacheSignal=function(){return null},De.cloneElement=function(R,Z,ne){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var re=C({},R.props),pe=R.key;if(Z!=null)for(oe in Z.key!==void 0&&(pe=""+Z.key),Z)!W.call(Z,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&Z.ref===void 0||(re[oe]=Z[oe]);var oe=arguments.length-2;if(oe===1)re.children=ne;else if(1<oe){for(var xe=Array(oe),Qe=0;Qe<oe;Qe++)xe[Qe]=arguments[Qe+2];re.children=xe}return ge(R.type,pe,re)},De.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:c,_context:R},R},De.createElement=function(R,Z,ne){var re,pe={},oe=null;if(Z!=null)for(re in Z.key!==void 0&&(oe=""+Z.key),Z)W.call(Z,re)&&re!=="key"&&re!=="__self"&&re!=="__source"&&(pe[re]=Z[re]);var xe=arguments.length-2;if(xe===1)pe.children=ne;else if(1<xe){for(var Qe=Array(xe),Ve=0;Ve<xe;Ve++)Qe[Ve]=arguments[Ve+2];pe.children=Qe}if(R&&R.defaultProps)for(re in xe=R.defaultProps,xe)pe[re]===void 0&&(pe[re]=xe[re]);return ge(R,oe,pe)},De.createRef=function(){return{current:null}},De.forwardRef=function(R){return{$$typeof:h,render:R}},De.isValidElement=Se,De.lazy=function(R){return{$$typeof:g,_payload:{_status:-1,_result:R},_init:ce}},De.memo=function(R,Z){return{$$typeof:y,type:R,compare:Z===void 0?null:Z}},De.startTransition=function(R){var Z=q.T,ne={};q.T=ne;try{var re=R(),pe=q.S;pe!==null&&pe(ne,re),typeof re=="object"&&re!==null&&typeof re.then=="function"&&re.then(P,Oe)}catch(oe){Oe(oe)}finally{Z!==null&&ne.types!==null&&(Z.types=ne.types),q.T=Z}},De.unstable_useCacheRefresh=function(){return q.H.useCacheRefresh()},De.use=function(R){return q.H.use(R)},De.useActionState=function(R,Z,ne){return q.H.useActionState(R,Z,ne)},De.useCallback=function(R,Z){return q.H.useCallback(R,Z)},De.useContext=function(R){return q.H.useContext(R)},De.useDebugValue=function(){},De.useDeferredValue=function(R,Z){return q.H.useDeferredValue(R,Z)},De.useEffect=function(R,Z){return q.H.useEffect(R,Z)},De.useEffectEvent=function(R){return q.H.useEffectEvent(R)},De.useId=function(){return q.H.useId()},De.useImperativeHandle=function(R,Z,ne){return q.H.useImperativeHandle(R,Z,ne)},De.useInsertionEffect=function(R,Z){return q.H.useInsertionEffect(R,Z)},De.useLayoutEffect=function(R,Z){return q.H.useLayoutEffect(R,Z)},De.useMemo=function(R,Z){return q.H.useMemo(R,Z)},De.useOptimistic=function(R,Z){return q.H.useOptimistic(R,Z)},De.useReducer=function(R,Z,ne){return q.H.useReducer(R,Z,ne)},De.useRef=function(R){return q.H.useRef(R)},De.useState=function(R){return q.H.useState(R)},De.useSyncExternalStore=function(R,Z,ne){return q.H.useSyncExternalStore(R,Z,ne)},De.useTransition=function(){return q.H.useTransition()},De.version="19.2.7",De}var d0;function vu(){return d0||(d0=1,cd.exports=$_()),cd.exports}var k=vu();const Ae=Sh(k);var fd={exports:{}},Ml={},dd={exports:{}},hd={};var h0;function V_(){return h0||(h0=1,(function(n){function i(G,ae){var ce=G.length;G.push(ae);e:for(;0<ce;){var Oe=ce-1>>>1,_e=G[Oe];if(0<s(_e,ae))G[Oe]=ae,G[ce]=_e,ce=Oe;else break e}}function r(G){return G.length===0?null:G[0]}function o(G){if(G.length===0)return null;var ae=G[0],ce=G.pop();if(ce!==ae){G[0]=ce;e:for(var Oe=0,_e=G.length,R=_e>>>1;Oe<R;){var Z=2*(Oe+1)-1,ne=G[Z],re=Z+1,pe=G[re];if(0>s(ne,ce))re<_e&&0>s(pe,ne)?(G[Oe]=pe,G[re]=ce,Oe=re):(G[Oe]=ne,G[Z]=ce,Oe=Z);else if(re<_e&&0>s(pe,ce))G[Oe]=pe,G[re]=ce,Oe=re;else break e}}return ae}function s(G,ae){var ce=G.sortIndex-ae.sortIndex;return ce!==0?ce:G.id-ae.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;n.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();n.unstable_now=function(){return d.now()-h}}var p=[],y=[],g=1,b=null,A=3,M=!1,z=!1,C=!1,S=!1,T=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function L(G){for(var ae=r(y);ae!==null;){if(ae.callback===null)o(y);else if(ae.startTime<=G)o(y),ae.sortIndex=ae.expirationTime,i(p,ae);else break;ae=r(y)}}function Y(G){if(C=!1,L(G),!z)if(r(p)!==null)z=!0,P||(P=!0,me());else{var ae=r(y);ae!==null&&Ee(Y,ae.startTime-G)}}var P=!1,q=-1,W=5,ge=-1;function Te(){return S?!0:!(n.unstable_now()-ge<W)}function Se(){if(S=!1,P){var G=n.unstable_now();ge=G;var ae=!0;try{e:{z=!1,C&&(C=!1,_(q),q=-1),M=!0;var ce=A;try{t:{for(L(G),b=r(p);b!==null&&!(b.expirationTime>G&&Te());){var Oe=b.callback;if(typeof Oe=="function"){b.callback=null,A=b.priorityLevel;var _e=Oe(b.expirationTime<=G);if(G=n.unstable_now(),typeof _e=="function"){b.callback=_e,L(G),ae=!0;break t}b===r(p)&&o(p),L(G)}else o(p);b=r(p)}if(b!==null)ae=!0;else{var R=r(y);R!==null&&Ee(Y,R.startTime-G),ae=!1}}break e}finally{b=null,A=ce,M=!1}ae=void 0}}finally{ae?me():P=!1}}}var me;if(typeof O=="function")me=function(){O(Se)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,be=ue.port2;ue.port1.onmessage=Se,me=function(){be.postMessage(null)}}else me=function(){T(Se,0)};function Ee(G,ae){q=T(function(){G(n.unstable_now())},ae)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(G){G.callback=null},n.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<G?Math.floor(1e3/G):5},n.unstable_getCurrentPriorityLevel=function(){return A},n.unstable_next=function(G){switch(A){case 1:case 2:case 3:var ae=3;break;default:ae=A}var ce=A;A=ae;try{return G()}finally{A=ce}},n.unstable_requestPaint=function(){S=!0},n.unstable_runWithPriority=function(G,ae){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ce=A;A=G;try{return ae()}finally{A=ce}},n.unstable_scheduleCallback=function(G,ae,ce){var Oe=n.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?Oe+ce:Oe):ce=Oe,G){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=ce+_e,G={id:g++,callback:ae,priorityLevel:G,startTime:ce,expirationTime:_e,sortIndex:-1},ce>Oe?(G.sortIndex=ce,i(y,G),r(p)===null&&G===r(y)&&(C?(_(q),q=-1):C=!0,Ee(Y,ce-Oe))):(G.sortIndex=_e,i(p,G),z||M||(z=!0,P||(P=!0,me()))),G},n.unstable_shouldYield=Te,n.unstable_wrapCallback=function(G){var ae=A;return function(){var ce=A;A=ae;try{return G.apply(this,arguments)}finally{A=ce}}}})(hd)),hd}var p0;function Y_(){return p0||(p0=1,dd.exports=V_()),dd.exports}var pd={exports:{}},Lt={};var m0;function G_(){if(m0)return Lt;m0=1;var n=vu();function i(p){var y="https://react.dev/errors/"+p;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)y+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var o={d:{f:r,r:function(){throw Error(i(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},s=Symbol.for("react.portal");function c(p,y,g){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:b==null?null:""+b,children:p,containerInfo:y,implementation:g}}var d=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,y){if(p==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Lt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Lt.createPortal=function(p,y){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(i(299));return c(p,y,null,g)},Lt.flushSync=function(p){var y=d.T,g=o.p;try{if(d.T=null,o.p=2,p)return p()}finally{d.T=y,o.p=g,o.d.f()}},Lt.preconnect=function(p,y){typeof p=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,o.d.C(p,y))},Lt.prefetchDNS=function(p){typeof p=="string"&&o.d.D(p)},Lt.preinit=function(p,y){if(typeof p=="string"&&y&&typeof y.as=="string"){var g=y.as,b=h(g,y.crossOrigin),A=typeof y.integrity=="string"?y.integrity:void 0,M=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;g==="style"?o.d.S(p,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:b,integrity:A,fetchPriority:M}):g==="script"&&o.d.X(p,{crossOrigin:b,integrity:A,fetchPriority:M,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Lt.preinitModule=function(p,y){if(typeof p=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var g=h(y.as,y.crossOrigin);o.d.M(p,{crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&o.d.M(p)},Lt.preload=function(p,y){if(typeof p=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var g=y.as,b=h(g,y.crossOrigin);o.d.L(p,g,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Lt.preloadModule=function(p,y){if(typeof p=="string")if(y){var g=h(y.as,y.crossOrigin);o.d.m(p,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else o.d.m(p)},Lt.requestFormReset=function(p){o.d.r(p)},Lt.unstable_batchedUpdates=function(p,y){return p(y)},Lt.useFormState=function(p,y,g){return d.H.useFormState(p,y,g)},Lt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Lt.version="19.2.7",Lt}var y0;function Ib(){if(y0)return pd.exports;y0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),pd.exports=G_(),pd.exports}var g0;function X_(){if(g0)return Ml;g0=1;var n=Y_(),i=vu(),r=Ib();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function h(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(o(188))}function y(e){var t=e.alternate;if(!t){if(t=c(e),t===null)throw Error(o(188));return t!==e?null:e}for(var a=e,l=t;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(l=u.return,l!==null){a=l;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),e;if(f===l)return p(u),t;f=f.sibling}throw Error(o(188))}if(a.return!==l.return)a=u,l=f;else{for(var m=!1,v=u.child;v;){if(v===a){m=!0,a=u,l=f;break}if(v===l){m=!0,l=u,a=f;break}v=v.sibling}if(!m){for(v=f.child;v;){if(v===a){m=!0,a=f,l=u;break}if(v===l){m=!0,l=f,a=u;break}v=v.sibling}if(!m)throw Error(o(189))}}if(a.alternate!==l)throw Error(o(190))}if(a.tag!==3)throw Error(o(188));return a.stateNode.current===a?e:t}function g(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=g(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,A=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),z=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),_=Symbol.for("react.consumer"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),ge=Symbol.for("react.activity"),Te=Symbol.for("react.memo_cache_sentinel"),Se=Symbol.iterator;function me(e){return e===null||typeof e!="object"?null:(e=Se&&e[Se]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Symbol.for("react.client.reference");function be(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case T:return"Profiler";case S:return"StrictMode";case Y:return"Suspense";case P:return"SuspenseList";case ge:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case z:return"Portal";case O:return e.displayName||"Context";case _:return(e._context.displayName||"Context")+".Consumer";case L:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case q:return t=e.displayName||null,t!==null?t:be(e.type)||"Memo";case W:t=e._payload,e=e._init;try{return be(e(t))}catch{}}return null}var Ee=Array.isArray,G=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},Oe=[],_e=-1;function R(e){return{current:e}}function Z(e){0>_e||(e.current=Oe[_e],Oe[_e]=null,_e--)}function ne(e,t){_e++,Oe[_e]=e.current,e.current=t}var re=R(null),pe=R(null),oe=R(null),xe=R(null);function Qe(e,t){switch(ne(oe,t),ne(pe,e),ne(re,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Mg(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Mg(t),e=jg(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(re),ne(re,e)}function Ve(){Z(re),Z(pe),Z(oe)}function vt(e){e.memoizedState!==null&&ne(xe,e);var t=re.current,a=jg(t,e.type);t!==a&&(ne(pe,e),ne(re,a))}function Fn(e){pe.current===e&&(Z(re),Z(pe)),xe.current===e&&(Z(xe),Al._currentValue=ce)}var _t,ai;function Kt(e){if(_t===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);_t=t&&t[1]||"",ai=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_t+e+ai}var Vt=!1;function Re(e,t){if(!e||Vt)return"";Vt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(t){var I=function(){throw Error()};if(Object.defineProperty(I.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(I,[])}catch(Q){var X=Q}Reflect.construct(e,[],I)}else{try{I.call()}catch(Q){X=Q}e.call(I.prototype)}}else{try{throw Error()}catch(Q){X=Q}(I=e())&&typeof I.catch=="function"&&I.catch(function(){})}}catch(Q){if(Q&&X&&typeof Q.stack=="string")return[Q.stack,X.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),m=f[0],v=f[1];if(m&&v){var E=m.split(`
`),V=v.split(`
`);for(u=l=0;l<E.length&&!E[l].includes("DetermineComponentFrameRoot");)l++;for(;u<V.length&&!V[u].includes("DetermineComponentFrameRoot");)u++;if(l===E.length||u===V.length)for(l=E.length-1,u=V.length-1;1<=l&&0<=u&&E[l]!==V[u];)u--;for(;1<=l&&0<=u;l--,u--)if(E[l]!==V[u]){if(l!==1||u!==1)do if(l--,u--,0>u||E[l]!==V[u]){var K=`
`+E[l].replace(" at new "," at ");return e.displayName&&K.includes("<anonymous>")&&(K=K.replace("<anonymous>",e.displayName)),K}while(1<=l&&0<=u);break}}}finally{Vt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Kt(a):""}function wt(e,t){switch(e.tag){case 26:case 27:case 5:return Kt(e.type);case 16:return Kt("Lazy");case 13:return e.child!==t&&t!==null?Kt("Suspense Fallback"):Kt("Suspense");case 19:return Kt("SuspenseList");case 0:case 15:return Re(e.type,!1);case 11:return Re(e.type.render,!1);case 1:return Re(e.type,!0);case 31:return Kt("Activity");default:return""}}function Yt(e){try{var t="",a=null;do t+=wt(e,a),a=e,e=e.return;while(e);return t}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Gt=Object.prototype.hasOwnProperty,Aa=n.unstable_scheduleCallback,Oa=n.unstable_cancelCallback,ta=n.unstable_shouldYield,mo=n.unstable_requestPaint,Bt=n.unstable_now,Qu=n.unstable_getCurrentPriorityLevel,yo=n.unstable_ImmediatePriority,Zu=n.unstable_UserBlockingPriority,Hr=n.unstable_NormalPriority,go=n.unstable_LowPriority,w=n.unstable_IdlePriority,B=n.log,H=n.unstable_setDisableYieldValue,te=null,ee=null;function le(e){if(typeof B=="function"&&H(e),ee&&typeof ee.setStrictMode=="function")try{ee.setStrictMode(te,e)}catch{}}var ie=Math.clz32?Math.clz32:Ie,fe=Math.log,Ce=Math.LN2;function Ie(e){return e>>>=0,e===0?32:31-(fe(e)/Ce|0)|0}var Et=256,Mn=262144,Pt=4194304;function on(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ni(e,t,a){var l=e.pendingLanes;if(l===0)return 0;var u=0,f=e.suspendedLanes,m=e.pingedLanes;e=e.warmLanes;var v=l&134217727;return v!==0?(l=v&~f,l!==0?u=on(l):(m&=v,m!==0?u=on(m):a||(a=v&~e,a!==0&&(u=on(a))))):(v=l&~f,v!==0?u=on(v):m!==0?u=on(m):a||(a=l&~e,a!==0&&(u=on(a)))),u===0?0:t!==0&&t!==u&&(t&f)===0&&(f=u&-u,a=t&-t,f>=a||f===32&&(a&4194048)!==0)?t:u}function Ca(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ku(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qr(){var e=Pt;return Pt<<=1,(Pt&62914560)===0&&(Pt=4194304),e}function Pu(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function $r(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ax(e,t,a,l,u,f){var m=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var v=e.entanglements,E=e.expirationTimes,V=e.hiddenUpdates;for(a=m&~a;0<a;){var K=31-ie(a),I=1<<K;v[K]=0,E[K]=-1;var X=V[K];if(X!==null)for(V[K]=null,K=0;K<X.length;K++){var Q=X[K];Q!==null&&(Q.lane&=-536870913)}a&=~I}l!==0&&pp(e,l,0),f!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=f&~(m&~t))}function pp(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var l=31-ie(t);e.entangledLanes|=t,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function mp(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var l=31-ie(a),u=1<<l;u&t|e[l]&t&&(e[l]|=t),a&=~u}}function yp(e,t){var a=t&-t;return a=(a&42)!==0?1:Ju(a),(a&(e.suspendedLanes|t))!==0?0:a}function Ju(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Iu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function gp(){var e=ae.p;return e!==0?e:(e=window.event,e===void 0?32:n0(e.type))}function bp(e,t){var a=ae.p;try{return ae.p=e,t()}finally{ae.p=a}}var Da=Math.random().toString(36).slice(2),At="__reactFiber$"+Da,Jt="__reactProps$"+Da,Ui="__reactContainer$"+Da,Wu="__reactEvents$"+Da,Ox="__reactListeners$"+Da,Cx="__reactHandles$"+Da,vp="__reactResources$"+Da,Vr="__reactMarker$"+Da;function ec(e){delete e[At],delete e[Jt],delete e[Wu],delete e[Ox],delete e[Cx]}function Bi(e){var t=e[At];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ui]||a[At]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=qg(e);e!==null;){if(a=e[At])return a;e=qg(e)}return t}e=a,a=e.parentNode}return null}function Li(e){if(e=e[At]||e[Ui]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Yr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function Hi(e){var t=e[vp];return t||(t=e[vp]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Tt(e){e[Vr]=!0}var xp=new Set,Sp={};function ii(e,t){qi(e,t),qi(e+"Capture",t)}function qi(e,t){for(Sp[e]=t,e=0;e<t.length;e++)xp.add(t[e])}var Dx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),_p={},wp={};function zx(e){return Gt.call(wp,e)?!0:Gt.call(_p,e)?!1:Dx.test(e)?wp[e]=!0:(_p[e]=!0,!1)}function bo(e,t,a){if(zx(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var l=t.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function vo(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function na(e,t,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+l)}}function bn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ep(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Mx(e,t,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var u=l.get,f=l.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(m){a=""+m,f.call(this,m)}}),Object.defineProperty(e,t,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(m){a=""+m},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function tc(e){if(!e._valueTracker){var t=Ep(e)?"checked":"value";e._valueTracker=Mx(e,t,""+e[t])}}function Tp(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),l="";return e&&(l=Ep(e)?e.checked?"true":"false":e.value),e=l,e!==a?(t.setValue(e),!0):!1}function xo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var jx=/[\n"\\]/g;function vn(e){return e.replace(jx,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function nc(e,t,a,l,u,f,m,v){e.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?e.type=m:e.removeAttribute("type"),t!=null?m==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+bn(t)):e.value!==""+bn(t)&&(e.value=""+bn(t)):m!=="submit"&&m!=="reset"||e.removeAttribute("value"),t!=null?ac(e,m,bn(t)):a!=null?ac(e,m,bn(a)):l!=null&&e.removeAttribute("value"),u==null&&f!=null&&(e.defaultChecked=!!f),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.name=""+bn(v):e.removeAttribute("name")}function Rp(e,t,a,l,u,f,m,v){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),t!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||t!=null)){tc(e);return}a=a!=null?""+bn(a):"",t=t!=null?""+bn(t):a,v||t===e.value||(e.value=t),e.defaultValue=t}l=l??u,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=v?e.checked:!!l,e.defaultChecked=!!l,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.name=m),tc(e)}function ac(e,t,a){t==="number"&&xo(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function $i(e,t,a,l){if(e=e.options,t){t={};for(var u=0;u<a.length;u++)t["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=t.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&l&&(e[a].defaultSelected=!0)}else{for(a=""+bn(a),t=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,l&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function Ap(e,t,a){if(t!=null&&(t=""+bn(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+bn(a):""}function Op(e,t,a,l){if(t==null){if(l!=null){if(a!=null)throw Error(o(92));if(Ee(l)){if(1<l.length)throw Error(o(93));l=l[0]}a=l}a==null&&(a=""),t=a}a=bn(t),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),tc(e)}function Vi(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var kx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Cp(e,t,a){var l=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":l?e.setProperty(t,a):typeof a!="number"||a===0||kx.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Dp(e,t,a){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||t!=null&&t.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var u in t)l=t[u],t.hasOwnProperty(u)&&a[u]!==l&&Cp(e,u,l)}else for(var f in t)t.hasOwnProperty(f)&&Cp(e,f,t[f])}function ic(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ux=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function So(e){return Ux.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function aa(){}var rc=null;function lc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yi=null,Gi=null;function zp(e){var t=Li(e);if(t&&(e=t.stateNode)){var a=e[Jt]||null;e:switch(e=t.stateNode,t.type){case"input":if(nc(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+vn(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var l=a[t];if(l!==e&&l.form===e.form){var u=l[Jt]||null;if(!u)throw Error(o(90));nc(l,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(t=0;t<a.length;t++)l=a[t],l.form===e.form&&Tp(l)}break e;case"textarea":Ap(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&$i(e,!!a.multiple,t,!1)}}}var oc=!1;function Mp(e,t,a){if(oc)return e(t,a);oc=!0;try{var l=e(t);return l}finally{if(oc=!1,(Yi!==null||Gi!==null)&&(ss(),Yi&&(t=Yi,e=Gi,Gi=Yi=null,zp(t),e)))for(t=0;t<e.length;t++)zp(e[t])}}function Gr(e,t){var a=e.stateNode;if(a===null)return null;var l=a[Jt]||null;if(l===null)return null;a=l[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(o(231,t,typeof a));return a}var ia=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sc=!1;if(ia)try{var Xr={};Object.defineProperty(Xr,"passive",{get:function(){sc=!0}}),window.addEventListener("test",Xr,Xr),window.removeEventListener("test",Xr,Xr)}catch{sc=!1}var za=null,uc=null,_o=null;function jp(){if(_o)return _o;var e,t=uc,a=t.length,l,u="value"in za?za.value:za.textContent,f=u.length;for(e=0;e<a&&t[e]===u[e];e++);var m=a-e;for(l=1;l<=m&&t[a-l]===u[f-l];l++);return _o=u.slice(e,1<l?1-l:void 0)}function wo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Eo(){return!0}function kp(){return!1}function It(e){function t(a,l,u,f,m){this._reactName=a,this._targetInst=u,this.type=l,this.nativeEvent=f,this.target=m,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(a=e[v],this[v]=a?a(f):f[v]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Eo:kp,this.isPropagationStopped=kp,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),t}var ri={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},To=It(ri),Fr=b({},ri,{view:0,detail:0}),Bx=It(Fr),cc,fc,Qr,Ro=b({},Fr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Qr&&(Qr&&e.type==="mousemove"?(cc=e.screenX-Qr.screenX,fc=e.screenY-Qr.screenY):fc=cc=0,Qr=e),cc)},movementY:function(e){return"movementY"in e?e.movementY:fc}}),Np=It(Ro),Lx=b({},Ro,{dataTransfer:0}),Hx=It(Lx),qx=b({},Fr,{relatedTarget:0}),dc=It(qx),$x=b({},ri,{animationName:0,elapsedTime:0,pseudoElement:0}),Vx=It($x),Yx=b({},ri,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Gx=It(Yx),Xx=b({},ri,{data:0}),Up=It(Xx),Fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kx(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zx[e])?!!t[e]:!1}function hc(){return Kx}var Px=b({},Fr,{key:function(e){if(e.key){var t=Fx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hc,charCode:function(e){return e.type==="keypress"?wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jx=It(Px),Ix=b({},Ro,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bp=It(Ix),Wx=b({},Fr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hc}),eS=It(Wx),tS=b({},ri,{propertyName:0,elapsedTime:0,pseudoElement:0}),nS=It(tS),aS=b({},Ro,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),iS=It(aS),rS=b({},ri,{newState:0,oldState:0}),lS=It(rS),oS=[9,13,27,32],pc=ia&&"CompositionEvent"in window,Zr=null;ia&&"documentMode"in document&&(Zr=document.documentMode);var sS=ia&&"TextEvent"in window&&!Zr,Lp=ia&&(!pc||Zr&&8<Zr&&11>=Zr),Hp=" ",qp=!1;function $p(e,t){switch(e){case"keyup":return oS.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Xi=!1;function uS(e,t){switch(e){case"compositionend":return Vp(t);case"keypress":return t.which!==32?null:(qp=!0,Hp);case"textInput":return e=t.data,e===Hp&&qp?null:e;default:return null}}function cS(e,t){if(Xi)return e==="compositionend"||!pc&&$p(e,t)?(e=jp(),_o=uc=za=null,Xi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lp&&t.locale!=="ko"?null:t.data;default:return null}}var fS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!fS[e.type]:t==="textarea"}function Gp(e,t,a,l){Yi?Gi?Gi.push(l):Gi=[l]:Yi=l,t=ms(t,"onChange"),0<t.length&&(a=new To("onChange","change",null,a,l),e.push({event:a,listeners:t}))}var Kr=null,Pr=null;function dS(e){Rg(e,0)}function Ao(e){var t=Yr(e);if(Tp(t))return e}function Xp(e,t){if(e==="change")return t}var Fp=!1;if(ia){var mc;if(ia){var yc="oninput"in document;if(!yc){var Qp=document.createElement("div");Qp.setAttribute("oninput","return;"),yc=typeof Qp.oninput=="function"}mc=yc}else mc=!1;Fp=mc&&(!document.documentMode||9<document.documentMode)}function Zp(){Kr&&(Kr.detachEvent("onpropertychange",Kp),Pr=Kr=null)}function Kp(e){if(e.propertyName==="value"&&Ao(Pr)){var t=[];Gp(t,Pr,e,lc(e)),Mp(dS,t)}}function hS(e,t,a){e==="focusin"?(Zp(),Kr=t,Pr=a,Kr.attachEvent("onpropertychange",Kp)):e==="focusout"&&Zp()}function pS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ao(Pr)}function mS(e,t){if(e==="click")return Ao(t)}function yS(e,t){if(e==="input"||e==="change")return Ao(t)}function gS(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var sn=typeof Object.is=="function"?Object.is:gS;function Jr(e,t){if(sn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),l=Object.keys(t);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var u=a[l];if(!Gt.call(t,u)||!sn(e[u],t[u]))return!1}return!0}function Pp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jp(e,t){var a=Pp(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=t&&l>=t)return{node:a,offset:t-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Pp(a)}}function Ip(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Ip(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Wp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=xo(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=xo(e.document)}return t}function gc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var bS=ia&&"documentMode"in document&&11>=document.documentMode,Fi=null,bc=null,Ir=null,vc=!1;function em(e,t,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;vc||Fi==null||Fi!==xo(l)||(l=Fi,"selectionStart"in l&&gc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ir&&Jr(Ir,l)||(Ir=l,l=ms(bc,"onSelect"),0<l.length&&(t=new To("onSelect","select",null,t,a),e.push({event:t,listeners:l}),t.target=Fi)))}function li(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Qi={animationend:li("Animation","AnimationEnd"),animationiteration:li("Animation","AnimationIteration"),animationstart:li("Animation","AnimationStart"),transitionrun:li("Transition","TransitionRun"),transitionstart:li("Transition","TransitionStart"),transitioncancel:li("Transition","TransitionCancel"),transitionend:li("Transition","TransitionEnd")},xc={},tm={};ia&&(tm=document.createElement("div").style,"AnimationEvent"in window||(delete Qi.animationend.animation,delete Qi.animationiteration.animation,delete Qi.animationstart.animation),"TransitionEvent"in window||delete Qi.transitionend.transition);function oi(e){if(xc[e])return xc[e];if(!Qi[e])return e;var t=Qi[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in tm)return xc[e]=t[a];return e}var nm=oi("animationend"),am=oi("animationiteration"),im=oi("animationstart"),vS=oi("transitionrun"),xS=oi("transitionstart"),SS=oi("transitioncancel"),rm=oi("transitionend"),lm=new Map,Sc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Sc.push("scrollEnd");function jn(e,t){lm.set(e,t),ii(t,[e])}var Oo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xn=[],Zi=0,_c=0;function Co(){for(var e=Zi,t=_c=Zi=0;t<e;){var a=xn[t];xn[t++]=null;var l=xn[t];xn[t++]=null;var u=xn[t];xn[t++]=null;var f=xn[t];if(xn[t++]=null,l!==null&&u!==null){var m=l.pending;m===null?u.next=u:(u.next=m.next,m.next=u),l.pending=u}f!==0&&om(a,u,f)}}function Do(e,t,a,l){xn[Zi++]=e,xn[Zi++]=t,xn[Zi++]=a,xn[Zi++]=l,_c|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function wc(e,t,a,l){return Do(e,t,a,l),zo(e)}function si(e,t){return Do(e,null,null,t),zo(e)}function om(e,t,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var u=!1,f=e.return;f!==null;)f.childLanes|=a,l=f.alternate,l!==null&&(l.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(u=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,u&&t!==null&&(u=31-ie(a),e=f.hiddenUpdates,l=e[u],l===null?e[u]=[t]:l.push(t),t.lane=a|536870912),f):null}function zo(e){if(50<xl)throw xl=0,jf=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Ki={};function _S(e,t,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function un(e,t,a,l){return new _S(e,t,a,l)}function Ec(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ra(e,t){var a=e.alternate;return a===null?(a=un(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function sm(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Mo(e,t,a,l,u,f){var m=0;if(l=e,typeof e=="function")Ec(e)&&(m=1);else if(typeof e=="string")m=A_(e,a,re.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ge:return e=un(31,a,t,u),e.elementType=ge,e.lanes=f,e;case C:return ui(a.children,u,f,t);case S:m=8,u|=24;break;case T:return e=un(12,a,t,u|2),e.elementType=T,e.lanes=f,e;case Y:return e=un(13,a,t,u),e.elementType=Y,e.lanes=f,e;case P:return e=un(19,a,t,u),e.elementType=P,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:m=10;break e;case _:m=9;break e;case L:m=11;break e;case q:m=14;break e;case W:m=16,l=null;break e}m=29,a=Error(o(130,e===null?"null":typeof e,"")),l=null}return t=un(m,a,t,u),t.elementType=e,t.type=l,t.lanes=f,t}function ui(e,t,a,l){return e=un(7,e,l,t),e.lanes=a,e}function Tc(e,t,a){return e=un(6,e,null,t),e.lanes=a,e}function um(e){var t=un(18,null,null,0);return t.stateNode=e,t}function Rc(e,t,a){return t=un(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var cm=new WeakMap;function Sn(e,t){if(typeof e=="object"&&e!==null){var a=cm.get(e);return a!==void 0?a:(t={value:e,source:t,stack:Yt(t)},cm.set(e,t),t)}return{value:e,source:t,stack:Yt(t)}}var Pi=[],Ji=0,jo=null,Wr=0,_n=[],wn=0,Ma=null,Qn=1,Zn="";function la(e,t){Pi[Ji++]=Wr,Pi[Ji++]=jo,jo=e,Wr=t}function fm(e,t,a){_n[wn++]=Qn,_n[wn++]=Zn,_n[wn++]=Ma,Ma=e;var l=Qn;e=Zn;var u=32-ie(l)-1;l&=~(1<<u),a+=1;var f=32-ie(t)+u;if(30<f){var m=u-u%5;f=(l&(1<<m)-1).toString(32),l>>=m,u-=m,Qn=1<<32-ie(t)+u|a<<u|l,Zn=f+e}else Qn=1<<f|a<<u|l,Zn=e}function Ac(e){e.return!==null&&(la(e,1),fm(e,1,0))}function Oc(e){for(;e===jo;)jo=Pi[--Ji],Pi[Ji]=null,Wr=Pi[--Ji],Pi[Ji]=null;for(;e===Ma;)Ma=_n[--wn],_n[wn]=null,Zn=_n[--wn],_n[wn]=null,Qn=_n[--wn],_n[wn]=null}function dm(e,t){_n[wn++]=Qn,_n[wn++]=Zn,_n[wn++]=Ma,Qn=t.id,Zn=t.overflow,Ma=e}var Ot=null,We=null,He=!1,ja=null,En=!1,Cc=Error(o(519));function ka(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw el(Sn(t,e)),Cc}function hm(e){var t=e.stateNode,a=e.type,l=e.memoizedProps;switch(t[At]=e,t[Jt]=l,a){case"dialog":Ne("cancel",t),Ne("close",t);break;case"iframe":case"object":case"embed":Ne("load",t);break;case"video":case"audio":for(a=0;a<_l.length;a++)Ne(_l[a],t);break;case"source":Ne("error",t);break;case"img":case"image":case"link":Ne("error",t),Ne("load",t);break;case"details":Ne("toggle",t);break;case"input":Ne("invalid",t),Rp(t,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ne("invalid",t);break;case"textarea":Ne("invalid",t),Op(t,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||l.suppressHydrationWarning===!0||Dg(t.textContent,a)?(l.popover!=null&&(Ne("beforetoggle",t),Ne("toggle",t)),l.onScroll!=null&&Ne("scroll",t),l.onScrollEnd!=null&&Ne("scrollend",t),l.onClick!=null&&(t.onclick=aa),t=!0):t=!1,t||ka(e,!0)}function pm(e){for(Ot=e.return;Ot;)switch(Ot.tag){case 5:case 31:case 13:En=!1;return;case 27:case 3:En=!0;return;default:Ot=Ot.return}}function Ii(e){if(e!==Ot)return!1;if(!He)return pm(e),He=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Zf(e.type,e.memoizedProps)),a=!a),a&&We&&ka(e),pm(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));We=Hg(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));We=Hg(e)}else t===27?(t=We,Za(e.type)?(e=Wf,Wf=null,We=e):We=t):We=Ot?Rn(e.stateNode.nextSibling):null;return!0}function ci(){We=Ot=null,He=!1}function Dc(){var e=ja;return e!==null&&(nn===null?nn=e:nn.push.apply(nn,e),ja=null),e}function el(e){ja===null?ja=[e]:ja.push(e)}var zc=R(null),fi=null,oa=null;function Na(e,t,a){ne(zc,t._currentValue),t._currentValue=a}function sa(e){e._currentValue=zc.current,Z(zc)}function Mc(e,t,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,l!==null&&(l.childLanes|=t)):l!==null&&(l.childLanes&t)!==t&&(l.childLanes|=t),e===a)break;e=e.return}}function jc(e,t,a,l){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var f=u.dependencies;if(f!==null){var m=u.child;f=f.firstContext;e:for(;f!==null;){var v=f;f=u;for(var E=0;E<t.length;E++)if(v.context===t[E]){f.lanes|=a,v=f.alternate,v!==null&&(v.lanes|=a),Mc(f.return,a,e),l||(m=null);break e}f=v.next}}else if(u.tag===18){if(m=u.return,m===null)throw Error(o(341));m.lanes|=a,f=m.alternate,f!==null&&(f.lanes|=a),Mc(m,a,e),m=null}else m=u.child;if(m!==null)m.return=u;else for(m=u;m!==null;){if(m===e){m=null;break}if(u=m.sibling,u!==null){u.return=m.return,m=u;break}m=m.return}u=m}}function Wi(e,t,a,l){e=null;for(var u=t,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var m=u.alternate;if(m===null)throw Error(o(387));if(m=m.memoizedProps,m!==null){var v=u.type;sn(u.pendingProps.value,m.value)||(e!==null?e.push(v):e=[v])}}else if(u===xe.current){if(m=u.alternate,m===null)throw Error(o(387));m.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Al):e=[Al])}u=u.return}e!==null&&jc(t,e,a,l),t.flags|=262144}function ko(e){for(e=e.firstContext;e!==null;){if(!sn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function di(e){fi=e,oa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ct(e){return mm(fi,e)}function No(e,t){return fi===null&&di(e),mm(e,t)}function mm(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},oa===null){if(e===null)throw Error(o(308));oa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else oa=oa.next=t;return a}var wS=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},ES=n.unstable_scheduleCallback,TS=n.unstable_NormalPriority,ht={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kc(){return{controller:new wS,data:new Map,refCount:0}}function tl(e){e.refCount--,e.refCount===0&&ES(TS,function(){e.controller.abort()})}var nl=null,Nc=0,er=0,tr=null;function RS(e,t){if(nl===null){var a=nl=[];Nc=0,er=Hf(),tr={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Nc++,t.then(ym,ym),t}function ym(){if(--Nc===0&&nl!==null){tr!==null&&(tr.status="fulfilled");var e=nl;nl=null,er=0,tr=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function AS(e,t){var a=[],l={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){l.status="fulfilled",l.value=t;for(var u=0;u<a.length;u++)(0,a[u])(t)},function(u){for(l.status="rejected",l.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),l}var gm=G.S;G.S=function(e,t){eg=Bt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&RS(e,t),gm!==null&&gm(e,t)};var hi=R(null);function Uc(){var e=hi.current;return e!==null?e:Je.pooledCache}function Uo(e,t){t===null?ne(hi,hi.current):ne(hi,t.pool)}function bm(){var e=Uc();return e===null?null:{parent:ht._currentValue,pool:e}}var nr=Error(o(460)),Bc=Error(o(474)),Bo=Error(o(542)),Lo={then:function(){}};function vm(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xm(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(aa,aa),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_m(e),e;default:if(typeof t.status=="string")t.then(aa,aa);else{if(e=Je,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(l){if(t.status==="pending"){var u=t;u.status="fulfilled",u.value=l}},function(l){if(t.status==="pending"){var u=t;u.status="rejected",u.reason=l}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,_m(e),e}throw mi=t,nr}}function pi(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(mi=a,nr):a}}var mi=null;function Sm(){if(mi===null)throw Error(o(459));var e=mi;return mi=null,e}function _m(e){if(e===nr||e===Bo)throw Error(o(483))}var ar=null,al=0;function Ho(e){var t=al;return al+=1,ar===null&&(ar=[]),xm(ar,e,t)}function il(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function qo(e,t){throw t.$$typeof===A?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function wm(e){function t(U,D){if(e){var $=U.deletions;$===null?(U.deletions=[D],U.flags|=16):$.push(D)}}function a(U,D){if(!e)return null;for(;D!==null;)t(U,D),D=D.sibling;return null}function l(U){for(var D=new Map;U!==null;)U.key!==null?D.set(U.key,U):D.set(U.index,U),U=U.sibling;return D}function u(U,D){return U=ra(U,D),U.index=0,U.sibling=null,U}function f(U,D,$){return U.index=$,e?($=U.alternate,$!==null?($=$.index,$<D?(U.flags|=67108866,D):$):(U.flags|=67108866,D)):(U.flags|=1048576,D)}function m(U){return e&&U.alternate===null&&(U.flags|=67108866),U}function v(U,D,$,J){return D===null||D.tag!==6?(D=Tc($,U.mode,J),D.return=U,D):(D=u(D,$),D.return=U,D)}function E(U,D,$,J){var ve=$.type;return ve===C?K(U,D,$.props.children,J,$.key):D!==null&&(D.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===W&&pi(ve)===D.type)?(D=u(D,$.props),il(D,$),D.return=U,D):(D=Mo($.type,$.key,$.props,null,U.mode,J),il(D,$),D.return=U,D)}function V(U,D,$,J){return D===null||D.tag!==4||D.stateNode.containerInfo!==$.containerInfo||D.stateNode.implementation!==$.implementation?(D=Rc($,U.mode,J),D.return=U,D):(D=u(D,$.children||[]),D.return=U,D)}function K(U,D,$,J,ve){return D===null||D.tag!==7?(D=ui($,U.mode,J,ve),D.return=U,D):(D=u(D,$),D.return=U,D)}function I(U,D,$){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=Tc(""+D,U.mode,$),D.return=U,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case M:return $=Mo(D.type,D.key,D.props,null,U.mode,$),il($,D),$.return=U,$;case z:return D=Rc(D,U.mode,$),D.return=U,D;case W:return D=pi(D),I(U,D,$)}if(Ee(D)||me(D))return D=ui(D,U.mode,$,null),D.return=U,D;if(typeof D.then=="function")return I(U,Ho(D),$);if(D.$$typeof===O)return I(U,No(U,D),$);qo(U,D)}return null}function X(U,D,$,J){var ve=D!==null?D.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return ve!==null?null:v(U,D,""+$,J);if(typeof $=="object"&&$!==null){switch($.$$typeof){case M:return $.key===ve?E(U,D,$,J):null;case z:return $.key===ve?V(U,D,$,J):null;case W:return $=pi($),X(U,D,$,J)}if(Ee($)||me($))return ve!==null?null:K(U,D,$,J,null);if(typeof $.then=="function")return X(U,D,Ho($),J);if($.$$typeof===O)return X(U,D,No(U,$),J);qo(U,$)}return null}function Q(U,D,$,J,ve){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return U=U.get($)||null,v(D,U,""+J,ve);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case M:return U=U.get(J.key===null?$:J.key)||null,E(D,U,J,ve);case z:return U=U.get(J.key===null?$:J.key)||null,V(D,U,J,ve);case W:return J=pi(J),Q(U,D,$,J,ve)}if(Ee(J)||me(J))return U=U.get($)||null,K(D,U,J,ve,null);if(typeof J.then=="function")return Q(U,D,$,Ho(J),ve);if(J.$$typeof===O)return Q(U,D,$,No(D,J),ve);qo(D,J)}return null}function he(U,D,$,J){for(var ve=null,qe=null,ye=D,Me=D=0,Le=null;ye!==null&&Me<$.length;Me++){ye.index>Me?(Le=ye,ye=null):Le=ye.sibling;var $e=X(U,ye,$[Me],J);if($e===null){ye===null&&(ye=Le);break}e&&ye&&$e.alternate===null&&t(U,ye),D=f($e,D,Me),qe===null?ve=$e:qe.sibling=$e,qe=$e,ye=Le}if(Me===$.length)return a(U,ye),He&&la(U,Me),ve;if(ye===null){for(;Me<$.length;Me++)ye=I(U,$[Me],J),ye!==null&&(D=f(ye,D,Me),qe===null?ve=ye:qe.sibling=ye,qe=ye);return He&&la(U,Me),ve}for(ye=l(ye);Me<$.length;Me++)Le=Q(ye,U,Me,$[Me],J),Le!==null&&(e&&Le.alternate!==null&&ye.delete(Le.key===null?Me:Le.key),D=f(Le,D,Me),qe===null?ve=Le:qe.sibling=Le,qe=Le);return e&&ye.forEach(function(Wa){return t(U,Wa)}),He&&la(U,Me),ve}function we(U,D,$,J){if($==null)throw Error(o(151));for(var ve=null,qe=null,ye=D,Me=D=0,Le=null,$e=$.next();ye!==null&&!$e.done;Me++,$e=$.next()){ye.index>Me?(Le=ye,ye=null):Le=ye.sibling;var Wa=X(U,ye,$e.value,J);if(Wa===null){ye===null&&(ye=Le);break}e&&ye&&Wa.alternate===null&&t(U,ye),D=f(Wa,D,Me),qe===null?ve=Wa:qe.sibling=Wa,qe=Wa,ye=Le}if($e.done)return a(U,ye),He&&la(U,Me),ve;if(ye===null){for(;!$e.done;Me++,$e=$.next())$e=I(U,$e.value,J),$e!==null&&(D=f($e,D,Me),qe===null?ve=$e:qe.sibling=$e,qe=$e);return He&&la(U,Me),ve}for(ye=l(ye);!$e.done;Me++,$e=$.next())$e=Q(ye,U,Me,$e.value,J),$e!==null&&(e&&$e.alternate!==null&&ye.delete($e.key===null?Me:$e.key),D=f($e,D,Me),qe===null?ve=$e:qe.sibling=$e,qe=$e);return e&&ye.forEach(function(L_){return t(U,L_)}),He&&la(U,Me),ve}function Pe(U,D,$,J){if(typeof $=="object"&&$!==null&&$.type===C&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case M:e:{for(var ve=$.key;D!==null;){if(D.key===ve){if(ve=$.type,ve===C){if(D.tag===7){a(U,D.sibling),J=u(D,$.props.children),J.return=U,U=J;break e}}else if(D.elementType===ve||typeof ve=="object"&&ve!==null&&ve.$$typeof===W&&pi(ve)===D.type){a(U,D.sibling),J=u(D,$.props),il(J,$),J.return=U,U=J;break e}a(U,D);break}else t(U,D);D=D.sibling}$.type===C?(J=ui($.props.children,U.mode,J,$.key),J.return=U,U=J):(J=Mo($.type,$.key,$.props,null,U.mode,J),il(J,$),J.return=U,U=J)}return m(U);case z:e:{for(ve=$.key;D!==null;){if(D.key===ve)if(D.tag===4&&D.stateNode.containerInfo===$.containerInfo&&D.stateNode.implementation===$.implementation){a(U,D.sibling),J=u(D,$.children||[]),J.return=U,U=J;break e}else{a(U,D);break}else t(U,D);D=D.sibling}J=Rc($,U.mode,J),J.return=U,U=J}return m(U);case W:return $=pi($),Pe(U,D,$,J)}if(Ee($))return he(U,D,$,J);if(me($)){if(ve=me($),typeof ve!="function")throw Error(o(150));return $=ve.call($),we(U,D,$,J)}if(typeof $.then=="function")return Pe(U,D,Ho($),J);if($.$$typeof===O)return Pe(U,D,No(U,$),J);qo(U,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,D!==null&&D.tag===6?(a(U,D.sibling),J=u(D,$),J.return=U,U=J):(a(U,D),J=Tc($,U.mode,J),J.return=U,U=J),m(U)):a(U,D)}return function(U,D,$,J){try{al=0;var ve=Pe(U,D,$,J);return ar=null,ve}catch(ye){if(ye===nr||ye===Bo)throw ye;var qe=un(29,ye,null,U.mode);return qe.lanes=J,qe.return=U,qe}}}var yi=wm(!0),Em=wm(!1),Ua=!1;function Lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function La(e,t,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Ye&2)!==0){var u=l.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),l.pending=t,t=zo(e),om(e,null,a),t}return Do(e,l,t,a),zo(e)}function rl(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,mp(e,a)}}function qc(e,t){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var m={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=m:f=f.next=m,a=a.next}while(a!==null);f===null?u=f=t:f=f.next=t}else u=f=t;a={baseState:l.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var $c=!1;function ll(){if($c){var e=tr;if(e!==null)throw e}}function ol(e,t,a,l){$c=!1;var u=e.updateQueue;Ua=!1;var f=u.firstBaseUpdate,m=u.lastBaseUpdate,v=u.shared.pending;if(v!==null){u.shared.pending=null;var E=v,V=E.next;E.next=null,m===null?f=V:m.next=V,m=E;var K=e.alternate;K!==null&&(K=K.updateQueue,v=K.lastBaseUpdate,v!==m&&(v===null?K.firstBaseUpdate=V:v.next=V,K.lastBaseUpdate=E))}if(f!==null){var I=u.baseState;m=0,K=V=E=null,v=f;do{var X=v.lane&-536870913,Q=X!==v.lane;if(Q?(Be&X)===X:(l&X)===X){X!==0&&X===er&&($c=!0),K!==null&&(K=K.next={lane:0,tag:v.tag,payload:v.payload,callback:null,next:null});e:{var he=e,we=v;X=t;var Pe=a;switch(we.tag){case 1:if(he=we.payload,typeof he=="function"){I=he.call(Pe,I,X);break e}I=he;break e;case 3:he.flags=he.flags&-65537|128;case 0:if(he=we.payload,X=typeof he=="function"?he.call(Pe,I,X):he,X==null)break e;I=b({},I,X);break e;case 2:Ua=!0}}X=v.callback,X!==null&&(e.flags|=64,Q&&(e.flags|=8192),Q=u.callbacks,Q===null?u.callbacks=[X]:Q.push(X))}else Q={lane:X,tag:v.tag,payload:v.payload,callback:v.callback,next:null},K===null?(V=K=Q,E=I):K=K.next=Q,m|=X;if(v=v.next,v===null){if(v=u.shared.pending,v===null)break;Q=v,v=Q.next,Q.next=null,u.lastBaseUpdate=Q,u.shared.pending=null}}while(!0);K===null&&(E=I),u.baseState=E,u.firstBaseUpdate=V,u.lastBaseUpdate=K,f===null&&(u.shared.lanes=0),Ya|=m,e.lanes=m,e.memoizedState=I}}function Tm(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Rm(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Tm(a[e],t)}var ir=R(null),$o=R(0);function Am(e,t){e=ga,ne($o,e),ne(ir,t),ga=e|t.baseLanes}function Vc(){ne($o,ga),ne(ir,ir.current)}function Yc(){ga=$o.current,Z(ir),Z($o)}var cn=R(null),Tn=null;function Ha(e){var t=e.alternate;ne(ut,ut.current&1),ne(cn,e),Tn===null&&(t===null||ir.current!==null||t.memoizedState!==null)&&(Tn=e)}function Gc(e){ne(ut,ut.current),ne(cn,e),Tn===null&&(Tn=e)}function Om(e){e.tag===22?(ne(ut,ut.current),ne(cn,e),Tn===null&&(Tn=e)):qa()}function qa(){ne(ut,ut.current),ne(cn,cn.current)}function fn(e){Z(cn),Tn===e&&(Tn=null),Z(ut)}var ut=R(0);function Vo(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jf(a)||If(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ua=0,ze=null,Ze=null,pt=null,Yo=!1,rr=!1,gi=!1,Go=0,sl=0,lr=null,OS=0;function ot(){throw Error(o(321))}function Xc(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!sn(e[a],t[a]))return!1;return!0}function Fc(e,t,a,l,u,f){return ua=f,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,G.H=e===null||e.memoizedState===null?fy:sf,gi=!1,f=a(l,u),gi=!1,rr&&(f=Dm(t,a,l,u)),Cm(e),f}function Cm(e){G.H=fl;var t=Ze!==null&&Ze.next!==null;if(ua=0,pt=Ze=ze=null,Yo=!1,sl=0,lr=null,t)throw Error(o(300));e===null||mt||(e=e.dependencies,e!==null&&ko(e)&&(mt=!0))}function Dm(e,t,a,l){ze=e;var u=0;do{if(rr&&(lr=null),sl=0,rr=!1,25<=u)throw Error(o(301));if(u+=1,pt=Ze=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}G.H=dy,f=t(a,l)}while(rr);return f}function CS(){var e=G.H,t=e.useState()[0];return t=typeof t.then=="function"?ul(t):t,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(ze.flags|=1024),t}function Qc(){var e=Go!==0;return Go=0,e}function Zc(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Kc(e){if(Yo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Yo=!1}ua=0,pt=Ze=ze=null,rr=!1,sl=Go=0,lr=null}function Xt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?ze.memoizedState=pt=e:pt=pt.next=e,pt}function ct(){if(Ze===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var t=pt===null?ze.memoizedState:pt.next;if(t!==null)pt=t,Ze=e;else{if(e===null)throw ze.alternate===null?Error(o(467)):Error(o(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},pt===null?ze.memoizedState=pt=e:pt=pt.next=e}return pt}function Xo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ul(e){var t=sl;return sl+=1,lr===null&&(lr=[]),e=xm(lr,e,t),t=ze,(pt===null?t.memoizedState:pt.next)===null&&(t=t.alternate,G.H=t===null||t.memoizedState===null?fy:sf),e}function Fo(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ul(e);if(e.$$typeof===O)return Ct(e)}throw Error(o(438,String(e)))}function Pc(e){var t=null,a=ze.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var l=ze.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(t={data:l.data.map(function(u){return u.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=Xo(),ze.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),l=0;l<e;l++)a[l]=Te;return t.index++,a}function ca(e,t){return typeof t=="function"?t(e):t}function Qo(e){var t=ct();return Jc(t,Ze,e)}function Jc(e,t,a){var l=e.queue;if(l===null)throw Error(o(311));l.lastRenderedReducer=a;var u=e.baseQueue,f=l.pending;if(f!==null){if(u!==null){var m=u.next;u.next=f.next,f.next=m}t.baseQueue=u=f,l.pending=null}if(f=e.baseState,u===null)e.memoizedState=f;else{t=u.next;var v=m=null,E=null,V=t,K=!1;do{var I=V.lane&-536870913;if(I!==V.lane?(Be&I)===I:(ua&I)===I){var X=V.revertLane;if(X===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),I===er&&(K=!0);else if((ua&X)===X){V=V.next,X===er&&(K=!0);continue}else I={lane:0,revertLane:V.revertLane,gesture:null,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},E===null?(v=E=I,m=f):E=E.next=I,ze.lanes|=X,Ya|=X;I=V.action,gi&&a(f,I),f=V.hasEagerState?V.eagerState:a(f,I)}else X={lane:I,revertLane:V.revertLane,gesture:V.gesture,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},E===null?(v=E=X,m=f):E=E.next=X,ze.lanes|=I,Ya|=I;V=V.next}while(V!==null&&V!==t);if(E===null?m=f:E.next=v,!sn(f,e.memoizedState)&&(mt=!0,K&&(a=tr,a!==null)))throw a;e.memoizedState=f,e.baseState=m,e.baseQueue=E,l.lastRenderedState=f}return u===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Ic(e){var t=ct(),a=t.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=e;var l=a.dispatch,u=a.pending,f=t.memoizedState;if(u!==null){a.pending=null;var m=u=u.next;do f=e(f,m.action),m=m.next;while(m!==u);sn(f,t.memoizedState)||(mt=!0),t.memoizedState=f,t.baseQueue===null&&(t.baseState=f),a.lastRenderedState=f}return[f,l]}function zm(e,t,a){var l=ze,u=ct(),f=He;if(f){if(a===void 0)throw Error(o(407));a=a()}else a=t();var m=!sn((Ze||u).memoizedState,a);if(m&&(u.memoizedState=a,mt=!0),u=u.queue,tf(km.bind(null,l,u,e),[e]),u.getSnapshot!==t||m||pt!==null&&pt.memoizedState.tag&1){if(l.flags|=2048,or(9,{destroy:void 0},jm.bind(null,l,u,a,t),null),Je===null)throw Error(o(349));f||(ua&127)!==0||Mm(l,t,a)}return a}function Mm(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=ze.updateQueue,t===null?(t=Xo(),ze.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function jm(e,t,a,l){t.value=a,t.getSnapshot=l,Nm(t)&&Um(e)}function km(e,t,a){return a(function(){Nm(t)&&Um(e)})}function Nm(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!sn(e,a)}catch{return!0}}function Um(e){var t=si(e,2);t!==null&&an(t,e,2)}function Wc(e){var t=Xt();if(typeof e=="function"){var a=e;if(e=a(),gi){le(!0);try{a()}finally{le(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:e},t}function Bm(e,t,a,l){return e.baseState=a,Jc(e,Ze,typeof l=="function"?l:ca)}function DS(e,t,a,l,u){if(Po(e))throw Error(o(485));if(e=t.action,e!==null){var f={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){f.listeners.push(m)}};G.T!==null?a(!0):f.isTransition=!1,l(f),a=t.pending,a===null?(f.next=t.pending=f,Lm(t,f)):(f.next=a.next,t.pending=a.next=f)}}function Lm(e,t){var a=t.action,l=t.payload,u=e.state;if(t.isTransition){var f=G.T,m={};G.T=m;try{var v=a(u,l),E=G.S;E!==null&&E(m,v),Hm(e,t,v)}catch(V){ef(e,t,V)}finally{f!==null&&m.types!==null&&(f.types=m.types),G.T=f}}else try{f=a(u,l),Hm(e,t,f)}catch(V){ef(e,t,V)}}function Hm(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){qm(e,t,l)},function(l){return ef(e,t,l)}):qm(e,t,a)}function qm(e,t,a){t.status="fulfilled",t.value=a,$m(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Lm(e,a)))}function ef(e,t,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do t.status="rejected",t.reason=a,$m(t),t=t.next;while(t!==l)}e.action=null}function $m(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Vm(e,t){return t}function Ym(e,t){if(He){var a=Je.formState;if(a!==null){e:{var l=ze;if(He){if(We){t:{for(var u=We,f=En;u.nodeType!==8;){if(!f){u=null;break t}if(u=Rn(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){We=Rn(u.nextSibling),l=u.data==="F!";break e}}ka(l)}l=!1}l&&(t=a[0])}}return a=Xt(),a.memoizedState=a.baseState=t,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Vm,lastRenderedState:t},a.queue=l,a=sy.bind(null,ze,l),l.dispatch=a,l=Wc(!1),f=of.bind(null,ze,!1,l.queue),l=Xt(),u={state:t,dispatch:null,action:e,pending:null},l.queue=u,a=DS.bind(null,ze,u,f,a),u.dispatch=a,l.memoizedState=e,[t,a,!1]}function Gm(e){var t=ct();return Xm(t,Ze,e)}function Xm(e,t,a){if(t=Jc(e,t,Vm)[0],e=Qo(ca)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var l=ul(t)}catch(m){throw m===nr?Bo:m}else l=t;t=ct();var u=t.queue,f=u.dispatch;return a!==t.memoizedState&&(ze.flags|=2048,or(9,{destroy:void 0},zS.bind(null,u,a),null)),[l,f,e]}function zS(e,t){e.action=t}function Fm(e){var t=ct(),a=Ze;if(a!==null)return Xm(t,a,e);ct(),t=t.memoizedState,a=ct();var l=a.queue.dispatch;return a.memoizedState=e,[t,l,!1]}function or(e,t,a,l){return e={tag:e,create:a,deps:l,inst:t,next:null},t=ze.updateQueue,t===null&&(t=Xo(),ze.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,t.lastEffect=e),e}function Qm(){return ct().memoizedState}function Zo(e,t,a,l){var u=Xt();ze.flags|=e,u.memoizedState=or(1|t,{destroy:void 0},a,l===void 0?null:l)}function Ko(e,t,a,l){var u=ct();l=l===void 0?null:l;var f=u.memoizedState.inst;Ze!==null&&l!==null&&Xc(l,Ze.memoizedState.deps)?u.memoizedState=or(t,f,a,l):(ze.flags|=e,u.memoizedState=or(1|t,f,a,l))}function Zm(e,t){Zo(8390656,8,e,t)}function tf(e,t){Ko(2048,8,e,t)}function MS(e){ze.flags|=4;var t=ze.updateQueue;if(t===null)t=Xo(),ze.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Km(e){var t=ct().memoizedState;return MS({ref:t,nextImpl:e}),function(){if((Ye&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function Pm(e,t){return Ko(4,2,e,t)}function Jm(e,t){return Ko(4,4,e,t)}function Im(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Wm(e,t,a){a=a!=null?a.concat([e]):null,Ko(4,4,Im.bind(null,t,e),a)}function nf(){}function ey(e,t){var a=ct();t=t===void 0?null:t;var l=a.memoizedState;return t!==null&&Xc(t,l[1])?l[0]:(a.memoizedState=[e,t],e)}function ty(e,t){var a=ct();t=t===void 0?null:t;var l=a.memoizedState;if(t!==null&&Xc(t,l[1]))return l[0];if(l=e(),gi){le(!0);try{e()}finally{le(!1)}}return a.memoizedState=[l,t],l}function af(e,t,a){return a===void 0||(ua&1073741824)!==0&&(Be&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=ng(),ze.lanes|=e,Ya|=e,a)}function ny(e,t,a,l){return sn(a,t)?a:ir.current!==null?(e=af(e,a,l),sn(e,t)||(mt=!0),e):(ua&42)===0||(ua&1073741824)!==0&&(Be&261930)===0?(mt=!0,e.memoizedState=a):(e=ng(),ze.lanes|=e,Ya|=e,t)}function ay(e,t,a,l,u){var f=ae.p;ae.p=f!==0&&8>f?f:8;var m=G.T,v={};G.T=v,of(e,!1,t,a);try{var E=u(),V=G.S;if(V!==null&&V(v,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var K=AS(E,l);cl(e,t,K,pn(e))}else cl(e,t,l,pn(e))}catch(I){cl(e,t,{then:function(){},status:"rejected",reason:I},pn())}finally{ae.p=f,m!==null&&v.types!==null&&(m.types=v.types),G.T=m}}function jS(){}function rf(e,t,a,l){if(e.tag!==5)throw Error(o(476));var u=iy(e).queue;ay(e,u,t,ce,a===null?jS:function(){return ry(e),a(l)})}function iy(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:ce},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ca,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ry(e){var t=iy(e);t.next===null&&(t=e.alternate.memoizedState),cl(e,t.next.queue,{},pn())}function lf(){return Ct(Al)}function ly(){return ct().memoizedState}function oy(){return ct().memoizedState}function kS(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=pn();e=Ba(a);var l=La(t,e,a);l!==null&&(an(l,t,a),rl(l,t,a)),t={cache:kc()},e.payload=t;return}t=t.return}}function NS(e,t,a){var l=pn();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Po(e)?uy(t,a):(a=wc(e,t,a,l),a!==null&&(an(a,e,l),cy(a,t,l)))}function sy(e,t,a){var l=pn();cl(e,t,a,l)}function cl(e,t,a,l){var u={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Po(e))uy(t,u);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=t.lastRenderedReducer,f!==null))try{var m=t.lastRenderedState,v=f(m,a);if(u.hasEagerState=!0,u.eagerState=v,sn(v,m))return Do(e,t,u,0),Je===null&&Co(),!1}catch{}if(a=wc(e,t,u,l),a!==null)return an(a,e,l),cy(a,t,l),!0}return!1}function of(e,t,a,l){if(l={lane:2,revertLane:Hf(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Po(e)){if(t)throw Error(o(479))}else t=wc(e,a,l,2),t!==null&&an(t,e,2)}function Po(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function uy(e,t){rr=Yo=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function cy(e,t,a){if((a&4194048)!==0){var l=t.lanes;l&=e.pendingLanes,a|=l,t.lanes=a,mp(e,a)}}var fl={readContext:Ct,use:Fo,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useLayoutEffect:ot,useInsertionEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useSyncExternalStore:ot,useId:ot,useHostTransitionStatus:ot,useFormState:ot,useActionState:ot,useOptimistic:ot,useMemoCache:ot,useCacheRefresh:ot};fl.useEffectEvent=ot;var fy={readContext:Ct,use:Fo,useCallback:function(e,t){return Xt().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:Zm,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,Zo(4194308,4,Im.bind(null,t,e),a)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){Zo(4,2,e,t)},useMemo:function(e,t){var a=Xt();t=t===void 0?null:t;var l=e();if(gi){le(!0);try{e()}finally{le(!1)}}return a.memoizedState=[l,t],l},useReducer:function(e,t,a){var l=Xt();if(a!==void 0){var u=a(t);if(gi){le(!0);try{a(t)}finally{le(!1)}}}else u=t;return l.memoizedState=l.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},l.queue=e,e=e.dispatch=NS.bind(null,ze,e),[l.memoizedState,e]},useRef:function(e){var t=Xt();return e={current:e},t.memoizedState=e},useState:function(e){e=Wc(e);var t=e.queue,a=sy.bind(null,ze,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:nf,useDeferredValue:function(e,t){var a=Xt();return af(a,e,t)},useTransition:function(){var e=Wc(!1);return e=ay.bind(null,ze,e.queue,!0,!1),Xt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var l=ze,u=Xt();if(He){if(a===void 0)throw Error(o(407));a=a()}else{if(a=t(),Je===null)throw Error(o(349));(Be&127)!==0||Mm(l,t,a)}u.memoizedState=a;var f={value:a,getSnapshot:t};return u.queue=f,Zm(km.bind(null,l,f,e),[e]),l.flags|=2048,or(9,{destroy:void 0},jm.bind(null,l,f,a,t),null),a},useId:function(){var e=Xt(),t=Je.identifierPrefix;if(He){var a=Zn,l=Qn;a=(l&~(1<<32-ie(l)-1)).toString(32)+a,t="_"+t+"R_"+a,a=Go++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=OS++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:lf,useFormState:Ym,useActionState:Ym,useOptimistic:function(e){var t=Xt();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=of.bind(null,ze,!0,a),a.dispatch=t,[e,t]},useMemoCache:Pc,useCacheRefresh:function(){return Xt().memoizedState=kS.bind(null,ze)},useEffectEvent:function(e){var t=Xt(),a={impl:e};return t.memoizedState=a,function(){if((Ye&2)!==0)throw Error(o(440));return a.impl.apply(void 0,arguments)}}},sf={readContext:Ct,use:Fo,useCallback:ey,useContext:Ct,useEffect:tf,useImperativeHandle:Wm,useInsertionEffect:Pm,useLayoutEffect:Jm,useMemo:ty,useReducer:Qo,useRef:Qm,useState:function(){return Qo(ca)},useDebugValue:nf,useDeferredValue:function(e,t){var a=ct();return ny(a,Ze.memoizedState,e,t)},useTransition:function(){var e=Qo(ca)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:ul(e),t]},useSyncExternalStore:zm,useId:ly,useHostTransitionStatus:lf,useFormState:Gm,useActionState:Gm,useOptimistic:function(e,t){var a=ct();return Bm(a,Ze,e,t)},useMemoCache:Pc,useCacheRefresh:oy};sf.useEffectEvent=Km;var dy={readContext:Ct,use:Fo,useCallback:ey,useContext:Ct,useEffect:tf,useImperativeHandle:Wm,useInsertionEffect:Pm,useLayoutEffect:Jm,useMemo:ty,useReducer:Ic,useRef:Qm,useState:function(){return Ic(ca)},useDebugValue:nf,useDeferredValue:function(e,t){var a=ct();return Ze===null?af(a,e,t):ny(a,Ze.memoizedState,e,t)},useTransition:function(){var e=Ic(ca)[0],t=ct().memoizedState;return[typeof e=="boolean"?e:ul(e),t]},useSyncExternalStore:zm,useId:ly,useHostTransitionStatus:lf,useFormState:Fm,useActionState:Fm,useOptimistic:function(e,t){var a=ct();return Ze!==null?Bm(a,Ze,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Pc,useCacheRefresh:oy};dy.useEffectEvent=Km;function uf(e,t,a,l){t=e.memoizedState,a=a(l,t),a=a==null?t:b({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var cf={enqueueSetState:function(e,t,a){e=e._reactInternals;var l=pn(),u=Ba(l);u.payload=t,a!=null&&(u.callback=a),t=La(e,u,l),t!==null&&(an(t,e,l),rl(t,e,l))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var l=pn(),u=Ba(l);u.tag=1,u.payload=t,a!=null&&(u.callback=a),t=La(e,u,l),t!==null&&(an(t,e,l),rl(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=pn(),l=Ba(a);l.tag=2,t!=null&&(l.callback=t),t=La(e,l,a),t!==null&&(an(t,e,a),rl(t,e,a))}};function hy(e,t,a,l,u,f,m){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,m):t.prototype&&t.prototype.isPureReactComponent?!Jr(a,l)||!Jr(u,f):!0}function py(e,t,a,l){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,l),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,l),t.state!==e&&cf.enqueueReplaceState(t,t.state,null)}function bi(e,t){var a=t;if("ref"in t){a={};for(var l in t)l!=="ref"&&(a[l]=t[l])}if(e=e.defaultProps){a===t&&(a=b({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function my(e){Oo(e)}function yy(e){console.error(e)}function gy(e){Oo(e)}function Jo(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(l){setTimeout(function(){throw l})}}function by(e,t,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ff(e,t,a){return a=Ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Jo(e,t)},a}function vy(e){return e=Ba(e),e.tag=3,e}function xy(e,t,a,l){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=l.value;e.payload=function(){return u(f)},e.callback=function(){by(t,a,l)}}var m=a.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(e.callback=function(){by(t,a,l),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var v=l.stack;this.componentDidCatch(l.value,{componentStack:v!==null?v:""})})}function US(e,t,a,l,u){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(t=a.alternate,t!==null&&Wi(t,a,u,!0),a=cn.current,a!==null){switch(a.tag){case 31:case 13:return Tn===null?us():a.alternate===null&&st===0&&(st=3),a.flags&=-257,a.flags|=65536,a.lanes=u,l===Lo?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([l]):t.add(l),Uf(e,l,u)),!1;case 22:return a.flags|=65536,l===Lo?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([l]):a.add(l)),Uf(e,l,u)),!1}throw Error(o(435,a.tag))}return Uf(e,l,u),us(),!1}if(He)return t=cn.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=u,l!==Cc&&(e=Error(o(422),{cause:l}),el(Sn(e,a)))):(l!==Cc&&(t=Error(o(423),{cause:l}),el(Sn(t,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,l=Sn(l,a),u=ff(e.stateNode,l,u),qc(e,u),st!==4&&(st=2)),!1;var f=Error(o(520),{cause:l});if(f=Sn(f,a),vl===null?vl=[f]:vl.push(f),st!==4&&(st=2),t===null)return!0;l=Sn(l,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=ff(a.stateNode,l,e),qc(a,e),!1;case 1:if(t=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ga===null||!Ga.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=vy(u),xy(u,e,a,l),qc(a,u),!1}a=a.return}while(a!==null);return!1}var df=Error(o(461)),mt=!1;function Dt(e,t,a,l){t.child=e===null?Em(t,null,a,l):yi(t,e.child,a,l)}function Sy(e,t,a,l,u){a=a.render;var f=t.ref;if("ref"in l){var m={};for(var v in l)v!=="ref"&&(m[v]=l[v])}else m=l;return di(t),l=Fc(e,t,a,m,f,u),v=Qc(),e!==null&&!mt?(Zc(e,t,u),fa(e,t,u)):(He&&v&&Ac(t),t.flags|=1,Dt(e,t,l,u),t.child)}function _y(e,t,a,l,u){if(e===null){var f=a.type;return typeof f=="function"&&!Ec(f)&&f.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=f,wy(e,t,f,l,u)):(e=Mo(a.type,null,l,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(f=e.child,!xf(e,u)){var m=f.memoizedProps;if(a=a.compare,a=a!==null?a:Jr,a(m,l)&&e.ref===t.ref)return fa(e,t,u)}return t.flags|=1,e=ra(f,l),e.ref=t.ref,e.return=t,t.child=e}function wy(e,t,a,l,u){if(e!==null){var f=e.memoizedProps;if(Jr(f,l)&&e.ref===t.ref)if(mt=!1,t.pendingProps=l=f,xf(e,u))(e.flags&131072)!==0&&(mt=!0);else return t.lanes=e.lanes,fa(e,t,u)}return hf(e,t,a,l,u)}function Ey(e,t,a,l){var u=l.children,f=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((t.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(l=t.child=e.child,u=0;l!==null;)u=u|l.lanes|l.childLanes,l=l.sibling;l=u&~f}else l=0,t.child=null;return Ty(e,t,f,a,l)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Uo(t,f!==null?f.cachePool:null),f!==null?Am(t,f):Vc(),Om(t);else return l=t.lanes=536870912,Ty(e,t,f!==null?f.baseLanes|a:a,a,l)}else f!==null?(Uo(t,f.cachePool),Am(t,f),qa(),t.memoizedState=null):(e!==null&&Uo(t,null),Vc(),qa());return Dt(e,t,u,a),t.child}function dl(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ty(e,t,a,l,u){var f=Uc();return f=f===null?null:{parent:ht._currentValue,pool:f},t.memoizedState={baseLanes:a,cachePool:f},e!==null&&Uo(t,null),Vc(),Om(t),e!==null&&Wi(e,t,l,!0),t.childLanes=u,null}function Io(e,t){return t=es({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Ry(e,t,a){return yi(t,e.child,null,a),e=Io(t,t.pendingProps),e.flags|=2,fn(t),t.memoizedState=null,e}function BS(e,t,a){var l=t.pendingProps,u=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(He){if(l.mode==="hidden")return e=Io(t,l),t.lanes=536870912,dl(null,e);if(Gc(t),(e=We)?(e=Lg(e,En),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Qn,overflow:Zn}:null,retryLane:536870912,hydrationErrors:null},a=um(e),a.return=t,t.child=a,Ot=t,We=null)):e=null,e===null)throw ka(t);return t.lanes=536870912,null}return Io(t,l)}var f=e.memoizedState;if(f!==null){var m=f.dehydrated;if(Gc(t),u)if(t.flags&256)t.flags&=-257,t=Ry(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(mt||Wi(e,t,a,!1),u=(a&e.childLanes)!==0,mt||u){if(l=Je,l!==null&&(m=yp(l,a),m!==0&&m!==f.retryLane))throw f.retryLane=m,si(e,m),an(l,e,m),df;us(),t=Ry(e,t,a)}else e=f.treeContext,We=Rn(m.nextSibling),Ot=t,He=!0,ja=null,En=!1,e!==null&&dm(t,e),t=Io(t,l),t.flags|=4096;return t}return e=ra(e.child,{mode:l.mode,children:l.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Wo(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(o(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function hf(e,t,a,l,u){return di(t),a=Fc(e,t,a,l,void 0,u),l=Qc(),e!==null&&!mt?(Zc(e,t,u),fa(e,t,u)):(He&&l&&Ac(t),t.flags|=1,Dt(e,t,a,u),t.child)}function Ay(e,t,a,l,u,f){return di(t),t.updateQueue=null,a=Dm(t,l,a,u),Cm(e),l=Qc(),e!==null&&!mt?(Zc(e,t,f),fa(e,t,f)):(He&&l&&Ac(t),t.flags|=1,Dt(e,t,a,f),t.child)}function Oy(e,t,a,l,u){if(di(t),t.stateNode===null){var f=Ki,m=a.contextType;typeof m=="object"&&m!==null&&(f=Ct(m)),f=new a(l,f),t.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=cf,t.stateNode=f,f._reactInternals=t,f=t.stateNode,f.props=l,f.state=t.memoizedState,f.refs={},Lc(t),m=a.contextType,f.context=typeof m=="object"&&m!==null?Ct(m):Ki,f.state=t.memoizedState,m=a.getDerivedStateFromProps,typeof m=="function"&&(uf(t,a,m,l),f.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(m=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),m!==f.state&&cf.enqueueReplaceState(f,f.state,null),ol(t,l,f,u),ll(),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308),l=!0}else if(e===null){f=t.stateNode;var v=t.memoizedProps,E=bi(a,v);f.props=E;var V=f.context,K=a.contextType;m=Ki,typeof K=="object"&&K!==null&&(m=Ct(K));var I=a.getDerivedStateFromProps;K=typeof I=="function"||typeof f.getSnapshotBeforeUpdate=="function",v=t.pendingProps!==v,K||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(v||V!==m)&&py(t,f,l,m),Ua=!1;var X=t.memoizedState;f.state=X,ol(t,l,f,u),ll(),V=t.memoizedState,v||X!==V||Ua?(typeof I=="function"&&(uf(t,a,I,l),V=t.memoizedState),(E=Ua||hy(t,a,E,l,X,V,m))?(K||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(t.flags|=4194308)):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=l,t.memoizedState=V),f.props=l,f.state=V,f.context=m,l=E):(typeof f.componentDidMount=="function"&&(t.flags|=4194308),l=!1)}else{f=t.stateNode,Hc(e,t),m=t.memoizedProps,K=bi(a,m),f.props=K,I=t.pendingProps,X=f.context,V=a.contextType,E=Ki,typeof V=="object"&&V!==null&&(E=Ct(V)),v=a.getDerivedStateFromProps,(V=typeof v=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(m!==I||X!==E)&&py(t,f,l,E),Ua=!1,X=t.memoizedState,f.state=X,ol(t,l,f,u),ll();var Q=t.memoizedState;m!==I||X!==Q||Ua||e!==null&&e.dependencies!==null&&ko(e.dependencies)?(typeof v=="function"&&(uf(t,a,v,l),Q=t.memoizedState),(K=Ua||hy(t,a,K,l,X,Q,E)||e!==null&&e.dependencies!==null&&ko(e.dependencies))?(V||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,Q,E),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,Q,E)),typeof f.componentDidUpdate=="function"&&(t.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),t.memoizedProps=l,t.memoizedState=Q),f.props=l,f.state=Q,f.context=E,l=K):(typeof f.componentDidUpdate!="function"||m===e.memoizedProps&&X===e.memoizedState||(t.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&X===e.memoizedState||(t.flags|=1024),l=!1)}return f=l,Wo(e,t),l=(t.flags&128)!==0,f||l?(f=t.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:f.render(),t.flags|=1,e!==null&&l?(t.child=yi(t,e.child,null,u),t.child=yi(t,null,a,u)):Dt(e,t,a,u),t.memoizedState=f.state,e=t.child):e=fa(e,t,u),e}function Cy(e,t,a,l){return ci(),t.flags|=256,Dt(e,t,a,l),t.child}var pf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mf(e){return{baseLanes:e,cachePool:bm()}}function yf(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=hn),e}function Dy(e,t,a){var l=t.pendingProps,u=!1,f=(t.flags&128)!==0,m;if((m=f)||(m=e!==null&&e.memoizedState===null?!1:(ut.current&2)!==0),m&&(u=!0,t.flags&=-129),m=(t.flags&32)!==0,t.flags&=-33,e===null){if(He){if(u?Ha(t):qa(),(e=We)?(e=Lg(e,En),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ma!==null?{id:Qn,overflow:Zn}:null,retryLane:536870912,hydrationErrors:null},a=um(e),a.return=t,t.child=a,Ot=t,We=null)):e=null,e===null)throw ka(t);return If(e)?t.lanes=32:t.lanes=536870912,null}var v=l.children;return l=l.fallback,u?(qa(),u=t.mode,v=es({mode:"hidden",children:v},u),l=ui(l,u,a,null),v.return=t,l.return=t,v.sibling=l,t.child=v,l=t.child,l.memoizedState=mf(a),l.childLanes=yf(e,m,a),t.memoizedState=pf,dl(null,l)):(Ha(t),gf(t,v))}var E=e.memoizedState;if(E!==null&&(v=E.dehydrated,v!==null)){if(f)t.flags&256?(Ha(t),t.flags&=-257,t=bf(e,t,a)):t.memoizedState!==null?(qa(),t.child=e.child,t.flags|=128,t=null):(qa(),v=l.fallback,u=t.mode,l=es({mode:"visible",children:l.children},u),v=ui(v,u,a,null),v.flags|=2,l.return=t,v.return=t,l.sibling=v,t.child=l,yi(t,e.child,null,a),l=t.child,l.memoizedState=mf(a),l.childLanes=yf(e,m,a),t.memoizedState=pf,t=dl(null,l));else if(Ha(t),If(v)){if(m=v.nextSibling&&v.nextSibling.dataset,m)var V=m.dgst;m=V,l=Error(o(419)),l.stack="",l.digest=m,el({value:l,source:null,stack:null}),t=bf(e,t,a)}else if(mt||Wi(e,t,a,!1),m=(a&e.childLanes)!==0,mt||m){if(m=Je,m!==null&&(l=yp(m,a),l!==0&&l!==E.retryLane))throw E.retryLane=l,si(e,l),an(m,e,l),df;Jf(v)||us(),t=bf(e,t,a)}else Jf(v)?(t.flags|=192,t.child=e.child,t=null):(e=E.treeContext,We=Rn(v.nextSibling),Ot=t,He=!0,ja=null,En=!1,e!==null&&dm(t,e),t=gf(t,l.children),t.flags|=4096);return t}return u?(qa(),v=l.fallback,u=t.mode,E=e.child,V=E.sibling,l=ra(E,{mode:"hidden",children:l.children}),l.subtreeFlags=E.subtreeFlags&65011712,V!==null?v=ra(V,v):(v=ui(v,u,a,null),v.flags|=2),v.return=t,l.return=t,l.sibling=v,t.child=l,dl(null,l),l=t.child,v=e.child.memoizedState,v===null?v=mf(a):(u=v.cachePool,u!==null?(E=ht._currentValue,u=u.parent!==E?{parent:E,pool:E}:u):u=bm(),v={baseLanes:v.baseLanes|a,cachePool:u}),l.memoizedState=v,l.childLanes=yf(e,m,a),t.memoizedState=pf,dl(e.child,l)):(Ha(t),a=e.child,e=a.sibling,a=ra(a,{mode:"visible",children:l.children}),a.return=t,a.sibling=null,e!==null&&(m=t.deletions,m===null?(t.deletions=[e],t.flags|=16):m.push(e)),t.child=a,t.memoizedState=null,a)}function gf(e,t){return t=es({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function es(e,t){return e=un(22,e,null,t),e.lanes=0,e}function bf(e,t,a){return yi(t,e.child,null,a),e=gf(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zy(e,t,a){e.lanes|=t;var l=e.alternate;l!==null&&(l.lanes|=t),Mc(e.return,t,a)}function vf(e,t,a,l,u,f){var m=e.memoizedState;m===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:u,treeForkCount:f}:(m.isBackwards=t,m.rendering=null,m.renderingStartTime=0,m.last=l,m.tail=a,m.tailMode=u,m.treeForkCount=f)}function My(e,t,a){var l=t.pendingProps,u=l.revealOrder,f=l.tail;l=l.children;var m=ut.current,v=(m&2)!==0;if(v?(m=m&1|2,t.flags|=128):m&=1,ne(ut,m),Dt(e,t,l,a),l=He?Wr:0,!v&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zy(e,a,t);else if(e.tag===19)zy(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"forwards":for(a=t.child,u=null;a!==null;)e=a.alternate,e!==null&&Vo(e)===null&&(u=a),a=a.sibling;a=u,a===null?(u=t.child,t.child=null):(u=a.sibling,a.sibling=null),vf(t,!1,u,a,f,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&Vo(e)===null){t.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}vf(t,!0,a,null,f,l);break;case"together":vf(t,!1,null,null,void 0,l);break;default:t.memoizedState=null}return t.child}function fa(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),Ya|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(Wi(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,a=ra(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=ra(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function xf(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ko(e)))}function LS(e,t,a){switch(t.tag){case 3:Qe(t,t.stateNode.containerInfo),Na(t,ht,e.memoizedState.cache),ci();break;case 27:case 5:vt(t);break;case 4:Qe(t,t.stateNode.containerInfo);break;case 10:Na(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Gc(t),null;break;case 13:var l=t.memoizedState;if(l!==null)return l.dehydrated!==null?(Ha(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Dy(e,t,a):(Ha(t),e=fa(e,t,a),e!==null?e.sibling:null);Ha(t);break;case 19:var u=(e.flags&128)!==0;if(l=(a&t.childLanes)!==0,l||(Wi(e,t,a,!1),l=(a&t.childLanes)!==0),u){if(l)return My(e,t,a);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ne(ut,ut.current),l)break;return null;case 22:return t.lanes=0,Ey(e,t,a,t.pendingProps);case 24:Na(t,ht,e.memoizedState.cache)}return fa(e,t,a)}function jy(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)mt=!0;else{if(!xf(e,a)&&(t.flags&128)===0)return mt=!1,LS(e,t,a);mt=(e.flags&131072)!==0}else mt=!1,He&&(t.flags&1048576)!==0&&fm(t,Wr,t.index);switch(t.lanes=0,t.tag){case 16:e:{var l=t.pendingProps;if(e=pi(t.elementType),t.type=e,typeof e=="function")Ec(e)?(l=bi(e,l),t.tag=1,t=Oy(null,t,e,l,a)):(t.tag=0,t=hf(null,t,e,l,a));else{if(e!=null){var u=e.$$typeof;if(u===L){t.tag=11,t=Sy(null,t,e,l,a);break e}else if(u===q){t.tag=14,t=_y(null,t,e,l,a);break e}}throw t=be(e)||e,Error(o(306,t,""))}}return t;case 0:return hf(e,t,t.type,t.pendingProps,a);case 1:return l=t.type,u=bi(l,t.pendingProps),Oy(e,t,l,u,a);case 3:e:{if(Qe(t,t.stateNode.containerInfo),e===null)throw Error(o(387));l=t.pendingProps;var f=t.memoizedState;u=f.element,Hc(e,t),ol(t,l,null,a);var m=t.memoizedState;if(l=m.cache,Na(t,ht,l),l!==f.cache&&jc(t,[ht],a,!0),ll(),l=m.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:m.cache},t.updateQueue.baseState=f,t.memoizedState=f,t.flags&256){t=Cy(e,t,l,a);break e}else if(l!==u){u=Sn(Error(o(424)),t),el(u),t=Cy(e,t,l,a);break e}else for(e=t.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=Rn(e.firstChild),Ot=t,He=!0,ja=null,En=!0,a=Em(t,null,l,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(ci(),l===u){t=fa(e,t,a);break e}Dt(e,t,l,a)}t=t.child}return t;case 26:return Wo(e,t),e===null?(a=Gg(t.type,null,t.pendingProps,null))?t.memoizedState=a:He||(a=t.type,e=t.pendingProps,l=ys(oe.current).createElement(a),l[At]=t,l[Jt]=e,zt(l,a,e),Tt(l),t.stateNode=l):t.memoizedState=Gg(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return vt(t),e===null&&He&&(l=t.stateNode=$g(t.type,t.pendingProps,oe.current),Ot=t,En=!0,u=We,Za(t.type)?(Wf=u,We=Rn(l.firstChild)):We=u),Dt(e,t,t.pendingProps.children,a),Wo(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&He&&((u=l=We)&&(l=p_(l,t.type,t.pendingProps,En),l!==null?(t.stateNode=l,Ot=t,We=Rn(l.firstChild),En=!1,u=!0):u=!1),u||ka(t)),vt(t),u=t.type,f=t.pendingProps,m=e!==null?e.memoizedProps:null,l=f.children,Zf(u,f)?l=null:m!==null&&Zf(u,m)&&(t.flags|=32),t.memoizedState!==null&&(u=Fc(e,t,CS,null,null,a),Al._currentValue=u),Wo(e,t),Dt(e,t,l,a),t.child;case 6:return e===null&&He&&((e=a=We)&&(a=m_(a,t.pendingProps,En),a!==null?(t.stateNode=a,Ot=t,We=null,e=!0):e=!1),e||ka(t)),null;case 13:return Dy(e,t,a);case 4:return Qe(t,t.stateNode.containerInfo),l=t.pendingProps,e===null?t.child=yi(t,null,l,a):Dt(e,t,l,a),t.child;case 11:return Sy(e,t,t.type,t.pendingProps,a);case 7:return Dt(e,t,t.pendingProps,a),t.child;case 8:return Dt(e,t,t.pendingProps.children,a),t.child;case 12:return Dt(e,t,t.pendingProps.children,a),t.child;case 10:return l=t.pendingProps,Na(t,t.type,l.value),Dt(e,t,l.children,a),t.child;case 9:return u=t.type._context,l=t.pendingProps.children,di(t),u=Ct(u),l=l(u),t.flags|=1,Dt(e,t,l,a),t.child;case 14:return _y(e,t,t.type,t.pendingProps,a);case 15:return wy(e,t,t.type,t.pendingProps,a);case 19:return My(e,t,a);case 31:return BS(e,t,a);case 22:return Ey(e,t,a,t.pendingProps);case 24:return di(t),l=Ct(ht),e===null?(u=Uc(),u===null&&(u=Je,f=kc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),t.memoizedState={parent:l,cache:u},Lc(t),Na(t,ht,u)):((e.lanes&a)!==0&&(Hc(e,t),ol(t,null,null,a),ll()),u=e.memoizedState,f=t.memoizedState,u.parent!==l?(u={parent:l,cache:l},t.memoizedState=u,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=u),Na(t,ht,l)):(l=f.cache,Na(t,ht,l),l!==u.cache&&jc(t,[ht],a,!0))),Dt(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function da(e){e.flags|=4}function Sf(e,t,a,l,u){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(lg())e.flags|=8192;else throw mi=Lo,Bc}else e.flags&=-16777217}function ky(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Kg(t))if(lg())e.flags|=8192;else throw mi=Lo,Bc}function ts(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?qr():536870912,e.lanes|=t,fr|=t)}function hl(e,t){if(!He)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(t)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags&65011712,l|=u.flags&65011712,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,l|=u.subtreeFlags,l|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=l,e.childLanes=a,t}function HS(e,t,a){var l=t.pendingProps;switch(Oc(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return et(t),null;case 3:return a=t.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),t.memoizedState.cache!==l&&(t.flags|=2048),sa(ht),Ve(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ii(t)?da(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Dc())),et(t),null;case 26:var u=t.type,f=t.memoizedState;return e===null?(da(t),f!==null?(et(t),ky(t,f)):(et(t),Sf(t,u,null,l,a))):f?f!==e.memoizedState?(da(t),et(t),ky(t,f)):(et(t),t.flags&=-16777217):(e=e.memoizedProps,e!==l&&da(t),et(t),Sf(t,u,e,l,a)),null;case 27:if(Fn(t),a=oe.current,u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&da(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return et(t),null}e=re.current,Ii(t)?hm(t):(e=$g(u,l,a),t.stateNode=e,da(t))}return et(t),null;case 5:if(Fn(t),u=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==l&&da(t);else{if(!l){if(t.stateNode===null)throw Error(o(166));return et(t),null}if(f=re.current,Ii(t))hm(t);else{var m=ys(oe.current);switch(f){case 1:f=m.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=m.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=m.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=m.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=m.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof l.is=="string"?m.createElement("select",{is:l.is}):m.createElement("select"),l.multiple?f.multiple=!0:l.size&&(f.size=l.size);break;default:f=typeof l.is=="string"?m.createElement(u,{is:l.is}):m.createElement(u)}}f[At]=t,f[Jt]=l;e:for(m=t.child;m!==null;){if(m.tag===5||m.tag===6)f.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;m=m.return}m.sibling.return=m.return,m=m.sibling}t.stateNode=f;e:switch(zt(f,u,l),u){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&da(t)}}return et(t),Sf(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==l&&da(t);else{if(typeof l!="string"&&t.stateNode===null)throw Error(o(166));if(e=oe.current,Ii(t)){if(e=t.stateNode,a=t.memoizedProps,l=null,u=Ot,u!==null)switch(u.tag){case 27:case 5:l=u.memoizedProps}e[At]=t,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||Dg(e.nodeValue,a)),e||ka(t,!0)}else e=ys(e).createTextNode(l),e[At]=t,t.stateNode=e}return et(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(l=Ii(t),a!==null){if(e===null){if(!l)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[At]=t}else ci(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),e=!1}else a=Dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(fn(t),t):(fn(t),null);if((t.flags&128)!==0)throw Error(o(558))}return et(t),null;case 13:if(l=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Ii(t),l!==null&&l.dehydrated!==null){if(e===null){if(!u)throw Error(o(318));if(u=t.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(o(317));u[At]=t}else ci(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;et(t),u=!1}else u=Dc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return t.flags&256?(fn(t),t):(fn(t),null)}return fn(t),(t.flags&128)!==0?(t.lanes=a,t):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=t.child,u=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(u=l.alternate.memoizedState.cachePool.pool),f=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==u&&(l.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),ts(t,t.updateQueue),et(t),null);case 4:return Ve(),e===null&&Yf(t.stateNode.containerInfo),et(t),null;case 10:return sa(t.type),et(t),null;case 19:if(Z(ut),l=t.memoizedState,l===null)return et(t),null;if(u=(t.flags&128)!==0,f=l.rendering,f===null)if(u)hl(l,!1);else{if(st!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(f=Vo(e),f!==null){for(t.flags|=128,hl(l,!1),e=f.updateQueue,t.updateQueue=e,ts(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)sm(a,e),a=a.sibling;return ne(ut,ut.current&1|2),He&&la(t,l.treeForkCount),t.child}e=e.sibling}l.tail!==null&&Bt()>ls&&(t.flags|=128,u=!0,hl(l,!1),t.lanes=4194304)}else{if(!u)if(e=Vo(f),e!==null){if(t.flags|=128,u=!0,e=e.updateQueue,t.updateQueue=e,ts(t,e),hl(l,!0),l.tail===null&&l.tailMode==="hidden"&&!f.alternate&&!He)return et(t),null}else 2*Bt()-l.renderingStartTime>ls&&a!==536870912&&(t.flags|=128,u=!0,hl(l,!1),t.lanes=4194304);l.isBackwards?(f.sibling=t.child,t.child=f):(e=l.last,e!==null?e.sibling=f:t.child=f,l.last=f)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Bt(),e.sibling=null,a=ut.current,ne(ut,u?a&1|2:a&1),He&&la(t,l.treeForkCount),e):(et(t),null);case 22:case 23:return fn(t),Yc(),l=t.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(t.flags|=8192):l&&(t.flags|=8192),l?(a&536870912)!==0&&(t.flags&128)===0&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),a=t.updateQueue,a!==null&&ts(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(l=t.memoizedState.cachePool.pool),l!==a&&(t.flags|=2048),e!==null&&Z(hi),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),sa(ht),et(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function qS(e,t){switch(Oc(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sa(ht),Ve(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Fn(t),null;case 31:if(t.memoizedState!==null){if(fn(t),t.alternate===null)throw Error(o(340));ci()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(fn(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));ci()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Z(ut),null;case 4:return Ve(),null;case 10:return sa(t.type),null;case 22:case 23:return fn(t),Yc(),e!==null&&Z(hi),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return sa(ht),null;case 25:return null;default:return null}}function Ny(e,t){switch(Oc(t),t.tag){case 3:sa(ht),Ve();break;case 26:case 27:case 5:Fn(t);break;case 4:Ve();break;case 31:t.memoizedState!==null&&fn(t);break;case 13:fn(t);break;case 19:Z(ut);break;case 10:sa(t.type);break;case 22:case 23:fn(t),Yc(),e!==null&&Z(hi);break;case 24:sa(ht)}}function pl(e,t){try{var a=t.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var u=l.next;a=u;do{if((a.tag&e)===e){l=void 0;var f=a.create,m=a.inst;l=f(),m.destroy=l}a=a.next}while(a!==u)}}catch(v){Fe(t,t.return,v)}}function $a(e,t,a){try{var l=t.updateQueue,u=l!==null?l.lastEffect:null;if(u!==null){var f=u.next;l=f;do{if((l.tag&e)===e){var m=l.inst,v=m.destroy;if(v!==void 0){m.destroy=void 0,u=t;var E=a,V=v;try{V()}catch(K){Fe(u,E,K)}}}l=l.next}while(l!==f)}}catch(K){Fe(t,t.return,K)}}function Uy(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Rm(t,a)}catch(l){Fe(e,e.return,l)}}}function By(e,t,a){a.props=bi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Fe(e,t,l)}}function ml(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(u){Fe(e,t,u)}}function Kn(e,t){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(u){Fe(e,t,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Fe(e,t,u)}else a.current=null}function Ly(e){var t=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(u){Fe(e,e.return,u)}}function _f(e,t,a){try{var l=e.stateNode;s_(l,e.type,a,t),l[Jt]=t}catch(u){Fe(e,e.return,u)}}function Hy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Za(e.type)||e.tag===4}function wf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Hy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Za(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ef(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=aa));else if(l!==4&&(l===27&&Za(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ef(e,t,a),e=e.sibling;e!==null;)Ef(e,t,a),e=e.sibling}function ns(e,t,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(l!==4&&(l===27&&Za(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ns(e,t,a),e=e.sibling;e!==null;)ns(e,t,a),e=e.sibling}function qy(e){var t=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,u=t.attributes;u.length;)t.removeAttributeNode(u[0]);zt(t,l,a),t[At]=e,t[Jt]=a}catch(f){Fe(e,e.return,f)}}var ha=!1,yt=!1,Tf=!1,$y=typeof WeakSet=="function"?WeakSet:Set,Rt=null;function $S(e,t){if(e=e.containerInfo,Ff=ws,e=Wp(e),gc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var m=0,v=-1,E=-1,V=0,K=0,I=e,X=null;t:for(;;){for(var Q;I!==a||u!==0&&I.nodeType!==3||(v=m+u),I!==f||l!==0&&I.nodeType!==3||(E=m+l),I.nodeType===3&&(m+=I.nodeValue.length),(Q=I.firstChild)!==null;)X=I,I=Q;for(;;){if(I===e)break t;if(X===a&&++V===u&&(v=m),X===f&&++K===l&&(E=m),(Q=I.nextSibling)!==null)break;I=X,X=I.parentNode}I=Q}a=v===-1||E===-1?null:{start:v,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qf={focusedElem:e,selectionRange:a},ws=!1,Rt=t;Rt!==null;)if(t=Rt,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Rt=e;else for(;Rt!==null;){switch(t=Rt,f=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)u=e[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=t,u=f.memoizedProps,f=f.memoizedState,l=a.stateNode;try{var he=bi(a.type,u);e=l.getSnapshotBeforeUpdate(he,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(we){Fe(a,a.return,we)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Pf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Pf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,Rt=e;break}Rt=t.return}}function Vy(e,t,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ma(e,a),l&4&&pl(5,a);break;case 1:if(ma(e,a),l&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(m){Fe(a,a.return,m)}else{var u=bi(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(u,t,e.__reactInternalSnapshotBeforeUpdate)}catch(m){Fe(a,a.return,m)}}l&64&&Uy(a),l&512&&ml(a,a.return);break;case 3:if(ma(e,a),l&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Rm(e,t)}catch(m){Fe(a,a.return,m)}}break;case 27:t===null&&l&4&&qy(a);case 26:case 5:ma(e,a),t===null&&l&4&&Ly(a),l&512&&ml(a,a.return);break;case 12:ma(e,a);break;case 31:ma(e,a),l&4&&Xy(e,a);break;case 13:ma(e,a),l&4&&Fy(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=PS.bind(null,a),y_(e,a))));break;case 22:if(l=a.memoizedState!==null||ha,!l){t=t!==null&&t.memoizedState!==null||yt,u=ha;var f=yt;ha=l,(yt=t)&&!f?ya(e,a,(a.subtreeFlags&8772)!==0):ma(e,a),ha=u,yt=f}break;case 30:break;default:ma(e,a)}}function Yy(e){var t=e.alternate;t!==null&&(e.alternate=null,Yy(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&ec(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var it=null,Wt=!1;function pa(e,t,a){for(a=a.child;a!==null;)Gy(e,t,a),a=a.sibling}function Gy(e,t,a){if(ee&&typeof ee.onCommitFiberUnmount=="function")try{ee.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 26:yt||Kn(a,t),pa(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:yt||Kn(a,t);var l=it,u=Wt;Za(a.type)&&(it=a.stateNode,Wt=!1),pa(e,t,a),El(a.stateNode),it=l,Wt=u;break;case 5:yt||Kn(a,t);case 6:if(l=it,u=Wt,it=null,pa(e,t,a),it=l,Wt=u,it!==null)if(Wt)try{(it.nodeType===9?it.body:it.nodeName==="HTML"?it.ownerDocument.body:it).removeChild(a.stateNode)}catch(f){Fe(a,t,f)}else try{it.removeChild(a.stateNode)}catch(f){Fe(a,t,f)}break;case 18:it!==null&&(Wt?(e=it,Ug(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),vr(e)):Ug(it,a.stateNode));break;case 4:l=it,u=Wt,it=a.stateNode.containerInfo,Wt=!0,pa(e,t,a),it=l,Wt=u;break;case 0:case 11:case 14:case 15:$a(2,a,t),yt||$a(4,a,t),pa(e,t,a);break;case 1:yt||(Kn(a,t),l=a.stateNode,typeof l.componentWillUnmount=="function"&&By(a,t,l)),pa(e,t,a);break;case 21:pa(e,t,a);break;case 22:yt=(l=yt)||a.memoizedState!==null,pa(e,t,a),yt=l;break;default:pa(e,t,a)}}function Xy(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{vr(e)}catch(a){Fe(t,t.return,a)}}}function Fy(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{vr(e)}catch(a){Fe(t,t.return,a)}}function VS(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new $y),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new $y),t;default:throw Error(o(435,e.tag))}}function as(e,t){var a=VS(e);t.forEach(function(l){if(!a.has(l)){a.add(l);var u=JS.bind(null,e,l);l.then(u,u)}})}function en(e,t){var a=t.deletions;if(a!==null)for(var l=0;l<a.length;l++){var u=a[l],f=e,m=t,v=m;e:for(;v!==null;){switch(v.tag){case 27:if(Za(v.type)){it=v.stateNode,Wt=!1;break e}break;case 5:it=v.stateNode,Wt=!1;break e;case 3:case 4:it=v.stateNode.containerInfo,Wt=!0;break e}v=v.return}if(it===null)throw Error(o(160));Gy(f,m,u),it=null,Wt=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Qy(t,e),t=t.sibling}var kn=null;function Qy(e,t){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:en(t,e),tn(e),l&4&&($a(3,e,e.return),pl(3,e),$a(5,e,e.return));break;case 1:en(t,e),tn(e),l&512&&(yt||a===null||Kn(a,a.return)),l&64&&ha&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var u=kn;if(en(t,e),tn(e),l&512&&(yt||a===null||Kn(a,a.return)),l&4){var f=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,u=u.ownerDocument||u;t:switch(l){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Vr]||f[At]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(l),u.head.insertBefore(f,u.querySelector("head > title"))),zt(f,l,a),f[At]=e,Tt(f),l=f;break e;case"link":var m=Qg("link","href",u).get(l+(a.href||""));if(m){for(var v=0;v<m.length;v++)if(f=m[v],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){m.splice(v,1);break t}}f=u.createElement(l),zt(f,l,a),u.head.appendChild(f);break;case"meta":if(m=Qg("meta","content",u).get(l+(a.content||""))){for(v=0;v<m.length;v++)if(f=m[v],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){m.splice(v,1);break t}}f=u.createElement(l),zt(f,l,a),u.head.appendChild(f);break;default:throw Error(o(468,l))}f[At]=e,Tt(f),l=f}e.stateNode=l}else Zg(u,e.type,e.stateNode);else e.stateNode=Fg(u,l,e.memoizedProps);else f!==l?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,l===null?Zg(u,e.type,e.stateNode):Fg(u,l,e.memoizedProps)):l===null&&e.stateNode!==null&&_f(e,e.memoizedProps,a.memoizedProps)}break;case 27:en(t,e),tn(e),l&512&&(yt||a===null||Kn(a,a.return)),a!==null&&l&4&&_f(e,e.memoizedProps,a.memoizedProps);break;case 5:if(en(t,e),tn(e),l&512&&(yt||a===null||Kn(a,a.return)),e.flags&32){u=e.stateNode;try{Vi(u,"")}catch(he){Fe(e,e.return,he)}}l&4&&e.stateNode!=null&&(u=e.memoizedProps,_f(e,u,a!==null?a.memoizedProps:u)),l&1024&&(Tf=!0);break;case 6:if(en(t,e),tn(e),l&4){if(e.stateNode===null)throw Error(o(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(he){Fe(e,e.return,he)}}break;case 3:if(vs=null,u=kn,kn=gs(t.containerInfo),en(t,e),kn=u,tn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{vr(t.containerInfo)}catch(he){Fe(e,e.return,he)}Tf&&(Tf=!1,Zy(e));break;case 4:l=kn,kn=gs(e.stateNode.containerInfo),en(t,e),tn(e),kn=l;break;case 12:en(t,e),tn(e);break;case 31:en(t,e),tn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,as(e,l)));break;case 13:en(t,e),tn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(rs=Bt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,as(e,l)));break;case 22:u=e.memoizedState!==null;var E=a!==null&&a.memoizedState!==null,V=ha,K=yt;if(ha=V||u,yt=K||E,en(t,e),yt=K,ha=V,tn(e),l&8192)e:for(t=e.stateNode,t._visibility=u?t._visibility&-2:t._visibility|1,u&&(a===null||E||ha||yt||vi(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){E=a=t;try{if(f=E.stateNode,u)m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{v=E.stateNode;var I=E.memoizedProps.style,X=I!=null&&I.hasOwnProperty("display")?I.display:null;v.style.display=X==null||typeof X=="boolean"?"":(""+X).trim()}}catch(he){Fe(E,E.return,he)}}}else if(t.tag===6){if(a===null){E=t;try{E.stateNode.nodeValue=u?"":E.memoizedProps}catch(he){Fe(E,E.return,he)}}}else if(t.tag===18){if(a===null){E=t;try{var Q=E.stateNode;u?Bg(Q,!0):Bg(E.stateNode,!1)}catch(he){Fe(E,E.return,he)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,as(e,a))));break;case 19:en(t,e),tn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,as(e,l)));break;case 30:break;case 21:break;default:en(t,e),tn(e)}}function tn(e){var t=e.flags;if(t&2){try{for(var a,l=e.return;l!==null;){if(Hy(l)){a=l;break}l=l.return}if(a==null)throw Error(o(160));switch(a.tag){case 27:var u=a.stateNode,f=wf(e);ns(e,f,u);break;case 5:var m=a.stateNode;a.flags&32&&(Vi(m,""),a.flags&=-33);var v=wf(e);ns(e,v,m);break;case 3:case 4:var E=a.stateNode.containerInfo,V=wf(e);Ef(e,V,E);break;default:throw Error(o(161))}}catch(K){Fe(e,e.return,K)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Zy(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Zy(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function ma(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Vy(e,t.alternate,t),t=t.sibling}function vi(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:$a(4,t,t.return),vi(t);break;case 1:Kn(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&By(t,t.return,a),vi(t);break;case 27:El(t.stateNode);case 26:case 5:Kn(t,t.return),vi(t);break;case 22:t.memoizedState===null&&vi(t);break;case 30:vi(t);break;default:vi(t)}e=e.sibling}}function ya(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var l=t.alternate,u=e,f=t,m=f.flags;switch(f.tag){case 0:case 11:case 15:ya(u,f,a),pl(4,f);break;case 1:if(ya(u,f,a),l=f,u=l.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(V){Fe(l,l.return,V)}if(l=f,u=l.updateQueue,u!==null){var v=l.stateNode;try{var E=u.shared.hiddenCallbacks;if(E!==null)for(u.shared.hiddenCallbacks=null,u=0;u<E.length;u++)Tm(E[u],v)}catch(V){Fe(l,l.return,V)}}a&&m&64&&Uy(f),ml(f,f.return);break;case 27:qy(f);case 26:case 5:ya(u,f,a),a&&l===null&&m&4&&Ly(f),ml(f,f.return);break;case 12:ya(u,f,a);break;case 31:ya(u,f,a),a&&m&4&&Xy(u,f);break;case 13:ya(u,f,a),a&&m&4&&Fy(u,f);break;case 22:f.memoizedState===null&&ya(u,f,a),ml(f,f.return);break;case 30:break;default:ya(u,f,a)}t=t.sibling}}function Rf(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&tl(a))}function Af(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&tl(e))}function Nn(e,t,a,l){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ky(e,t,a,l),t=t.sibling}function Ky(e,t,a,l){var u=t.flags;switch(t.tag){case 0:case 11:case 15:Nn(e,t,a,l),u&2048&&pl(9,t);break;case 1:Nn(e,t,a,l);break;case 3:Nn(e,t,a,l),u&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&tl(e)));break;case 12:if(u&2048){Nn(e,t,a,l),e=t.stateNode;try{var f=t.memoizedProps,m=f.id,v=f.onPostCommit;typeof v=="function"&&v(m,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){Fe(t,t.return,E)}}else Nn(e,t,a,l);break;case 31:Nn(e,t,a,l);break;case 13:Nn(e,t,a,l);break;case 23:break;case 22:f=t.stateNode,m=t.alternate,t.memoizedState!==null?f._visibility&2?Nn(e,t,a,l):yl(e,t):f._visibility&2?Nn(e,t,a,l):(f._visibility|=2,sr(e,t,a,l,(t.subtreeFlags&10256)!==0||!1)),u&2048&&Rf(m,t);break;case 24:Nn(e,t,a,l),u&2048&&Af(t.alternate,t);break;default:Nn(e,t,a,l)}}function sr(e,t,a,l,u){for(u=u&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var f=e,m=t,v=a,E=l,V=m.flags;switch(m.tag){case 0:case 11:case 15:sr(f,m,v,E,u),pl(8,m);break;case 23:break;case 22:var K=m.stateNode;m.memoizedState!==null?K._visibility&2?sr(f,m,v,E,u):yl(f,m):(K._visibility|=2,sr(f,m,v,E,u)),u&&V&2048&&Rf(m.alternate,m);break;case 24:sr(f,m,v,E,u),u&&V&2048&&Af(m.alternate,m);break;default:sr(f,m,v,E,u)}t=t.sibling}}function yl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,l=t,u=l.flags;switch(l.tag){case 22:yl(a,l),u&2048&&Rf(l.alternate,l);break;case 24:yl(a,l),u&2048&&Af(l.alternate,l);break;default:yl(a,l)}t=t.sibling}}var gl=8192;function ur(e,t,a){if(e.subtreeFlags&gl)for(e=e.child;e!==null;)Py(e,t,a),e=e.sibling}function Py(e,t,a){switch(e.tag){case 26:ur(e,t,a),e.flags&gl&&e.memoizedState!==null&&O_(a,kn,e.memoizedState,e.memoizedProps);break;case 5:ur(e,t,a);break;case 3:case 4:var l=kn;kn=gs(e.stateNode.containerInfo),ur(e,t,a),kn=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=gl,gl=16777216,ur(e,t,a),gl=l):ur(e,t,a));break;default:ur(e,t,a)}}function Jy(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function bl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Rt=l,Wy(l,e)}Jy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Iy(e),e=e.sibling}function Iy(e){switch(e.tag){case 0:case 11:case 15:bl(e),e.flags&2048&&$a(9,e,e.return);break;case 3:bl(e);break;case 12:bl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,is(e)):bl(e);break;default:bl(e)}}function is(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var l=t[a];Rt=l,Wy(l,e)}Jy(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:$a(8,t,t.return),is(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,is(t));break;default:is(t)}e=e.sibling}}function Wy(e,t){for(;Rt!==null;){var a=Rt;switch(a.tag){case 0:case 11:case 15:$a(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:tl(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Rt=l;else e:for(a=e;Rt!==null;){l=Rt;var u=l.sibling,f=l.return;if(Yy(l),l===a){Rt=null;break e}if(u!==null){u.return=f,Rt=u;break e}Rt=f}}}var YS={getCacheForType:function(e){var t=Ct(ht),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ct(ht).controller.signal}},GS=typeof WeakMap=="function"?WeakMap:Map,Ye=0,Je=null,ke=null,Be=0,Xe=0,dn=null,Va=!1,cr=!1,Of=!1,ga=0,st=0,Ya=0,xi=0,Cf=0,hn=0,fr=0,vl=null,nn=null,Df=!1,rs=0,eg=0,ls=1/0,os=null,Ga=null,xt=0,Xa=null,dr=null,ba=0,zf=0,Mf=null,tg=null,xl=0,jf=null;function pn(){return(Ye&2)!==0&&Be!==0?Be&-Be:G.T!==null?Hf():gp()}function ng(){if(hn===0)if((Be&536870912)===0||He){var e=Mn;Mn<<=1,(Mn&3932160)===0&&(Mn=262144),hn=e}else hn=536870912;return e=cn.current,e!==null&&(e.flags|=32),hn}function an(e,t,a){(e===Je&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)&&(hr(e,0),Fa(e,Be,hn,!1)),$r(e,a),((Ye&2)===0||e!==Je)&&(e===Je&&((Ye&2)===0&&(xi|=a),st===4&&Fa(e,Be,hn,!1)),Pn(e))}function ag(e,t,a){if((Ye&6)!==0)throw Error(o(327));var l=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ca(e,t),u=l?QS(e,t):Nf(e,t,!0),f=l;do{if(u===0){cr&&!l&&Fa(e,t,0,!1);break}else{if(a=e.current.alternate,f&&!XS(a)){u=Nf(e,t,!1),f=!1;continue}if(u===2){if(f=t,e.errorRecoveryDisabledLanes&f)var m=0;else m=e.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){t=m;e:{var v=e;u=vl;var E=v.current.memoizedState.isDehydrated;if(E&&(hr(v,m).flags|=256),m=Nf(v,m,!1),m!==2){if(Of&&!E){v.errorRecoveryDisabledLanes|=f,xi|=f,u=4;break e}f=nn,nn=u,f!==null&&(nn===null?nn=f:nn.push.apply(nn,f))}u=m}if(f=!1,u!==2)continue}}if(u===1){hr(e,0),Fa(e,t,0,!0);break}e:{switch(l=e,f=u,f){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Fa(l,t,hn,!Va);break e;case 2:nn=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(u=rs+300-Bt(),10<u)){if(Fa(l,t,hn,!Va),Ni(l,0,!0)!==0)break e;ba=t,l.timeoutHandle=kg(ig.bind(null,l,a,nn,os,Df,t,hn,xi,fr,Va,f,"Throttled",-0,0),u);break e}ig(l,a,nn,os,Df,t,hn,xi,fr,Va,f,null,-0,0)}}break}while(!0);Pn(e)}function ig(e,t,a,l,u,f,m,v,E,V,K,I,X,Q){if(e.timeoutHandle=-1,I=t.subtreeFlags,I&8192||(I&16785408)===16785408){I={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:aa},Py(t,f,I);var he=(f&62914560)===f?rs-Bt():(f&4194048)===f?eg-Bt():0;if(he=C_(I,he),he!==null){ba=f,e.cancelPendingCommit=he(dg.bind(null,e,t,f,a,l,u,m,v,E,K,I,null,X,Q)),Fa(e,f,m,!V);return}}dg(e,t,f,a,l,u,m,v,E)}function XS(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var u=a[l],f=u.getSnapshot;u=u.value;try{if(!sn(f(),u))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fa(e,t,a,l){t&=~Cf,t&=~xi,e.suspendedLanes|=t,e.pingedLanes&=~t,l&&(e.warmLanes|=t),l=e.expirationTimes;for(var u=t;0<u;){var f=31-ie(u),m=1<<f;l[f]=-1,u&=~m}a!==0&&pp(e,a,t)}function ss(){return(Ye&6)===0?(Sl(0),!1):!0}function kf(){if(ke!==null){if(Xe===0)var e=ke.return;else e=ke,oa=fi=null,Kc(e),ar=null,al=0,e=ke;for(;e!==null;)Ny(e.alternate,e),e=e.return;ke=null}}function hr(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,f_(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ba=0,kf(),Je=e,ke=a=ra(e.current,null),Be=t,Xe=0,dn=null,Va=!1,cr=Ca(e,t),Of=!1,fr=hn=Cf=xi=Ya=st=0,nn=vl=null,Df=!1,(t&8)!==0&&(t|=t&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=t;0<l;){var u=31-ie(l),f=1<<u;t|=e[u],l&=~f}return ga=t,Co(),a}function rg(e,t){ze=null,G.H=fl,t===nr||t===Bo?(t=Sm(),Xe=3):t===Bc?(t=Sm(),Xe=4):Xe=t===df?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,dn=t,ke===null&&(st=1,Jo(e,Sn(t,e.current)))}function lg(){var e=cn.current;return e===null?!0:(Be&4194048)===Be?Tn===null:(Be&62914560)===Be||(Be&536870912)!==0?e===Tn:!1}function og(){var e=G.H;return G.H=fl,e===null?fl:e}function sg(){var e=G.A;return G.A=YS,e}function us(){st=4,Va||(Be&4194048)!==Be&&cn.current!==null||(cr=!0),(Ya&134217727)===0&&(xi&134217727)===0||Je===null||Fa(Je,Be,hn,!1)}function Nf(e,t,a){var l=Ye;Ye|=2;var u=og(),f=sg();(Je!==e||Be!==t)&&(os=null,hr(e,t)),t=!1;var m=st;e:do try{if(Xe!==0&&ke!==null){var v=ke,E=dn;switch(Xe){case 8:kf(),m=6;break e;case 3:case 2:case 9:case 6:cn.current===null&&(t=!0);var V=Xe;if(Xe=0,dn=null,pr(e,v,E,V),a&&cr){m=0;break e}break;default:V=Xe,Xe=0,dn=null,pr(e,v,E,V)}}FS(),m=st;break}catch(K){rg(e,K)}while(!0);return t&&e.shellSuspendCounter++,oa=fi=null,Ye=l,G.H=u,G.A=f,ke===null&&(Je=null,Be=0,Co()),m}function FS(){for(;ke!==null;)ug(ke)}function QS(e,t){var a=Ye;Ye|=2;var l=og(),u=sg();Je!==e||Be!==t?(os=null,ls=Bt()+500,hr(e,t)):cr=Ca(e,t);e:do try{if(Xe!==0&&ke!==null){t=ke;var f=dn;t:switch(Xe){case 1:Xe=0,dn=null,pr(e,t,f,1);break;case 2:case 9:if(vm(f)){Xe=0,dn=null,cg(t);break}t=function(){Xe!==2&&Xe!==9||Je!==e||(Xe=7),Pn(e)},f.then(t,t);break e;case 3:Xe=7;break e;case 4:Xe=5;break e;case 7:vm(f)?(Xe=0,dn=null,cg(t)):(Xe=0,dn=null,pr(e,t,f,7));break;case 5:var m=null;switch(ke.tag){case 26:m=ke.memoizedState;case 5:case 27:var v=ke;if(m?Kg(m):v.stateNode.complete){Xe=0,dn=null;var E=v.sibling;if(E!==null)ke=E;else{var V=v.return;V!==null?(ke=V,cs(V)):ke=null}break t}}Xe=0,dn=null,pr(e,t,f,5);break;case 6:Xe=0,dn=null,pr(e,t,f,6);break;case 8:kf(),st=6;break e;default:throw Error(o(462))}}ZS();break}catch(K){rg(e,K)}while(!0);return oa=fi=null,G.H=l,G.A=u,Ye=a,ke!==null?0:(Je=null,Be=0,Co(),st)}function ZS(){for(;ke!==null&&!ta();)ug(ke)}function ug(e){var t=jy(e.alternate,e,ga);e.memoizedProps=e.pendingProps,t===null?cs(e):ke=t}function cg(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Ay(a,t,t.pendingProps,t.type,void 0,Be);break;case 11:t=Ay(a,t,t.pendingProps,t.type.render,t.ref,Be);break;case 5:Kc(t);default:Ny(a,t),t=ke=sm(t,ga),t=jy(a,t,ga)}e.memoizedProps=e.pendingProps,t===null?cs(e):ke=t}function pr(e,t,a,l){oa=fi=null,Kc(t),ar=null,al=0;var u=t.return;try{if(US(e,u,t,a,Be)){st=1,Jo(e,Sn(a,e.current)),ke=null;return}}catch(f){if(u!==null)throw ke=u,f;st=1,Jo(e,Sn(a,e.current)),ke=null;return}t.flags&32768?(He||l===1?e=!0:cr||(Be&536870912)!==0?e=!1:(Va=e=!0,(l===2||l===9||l===3||l===6)&&(l=cn.current,l!==null&&l.tag===13&&(l.flags|=16384))),fg(t,e)):cs(t)}function cs(e){var t=e;do{if((t.flags&32768)!==0){fg(t,Va);return}e=t.return;var a=HS(t.alternate,t,ga);if(a!==null){ke=a;return}if(t=t.sibling,t!==null){ke=t;return}ke=t=e}while(t!==null);st===0&&(st=5)}function fg(e,t){do{var a=qS(e.alternate,e);if(a!==null){a.flags&=32767,ke=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){ke=e;return}ke=e=a}while(e!==null);st=6,ke=null}function dg(e,t,a,l,u,f,m,v,E){e.cancelPendingCommit=null;do fs();while(xt!==0);if((Ye&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(f=t.lanes|t.childLanes,f|=_c,Ax(e,a,f,m,v,E),e===Je&&(ke=Je=null,Be=0),dr=t,Xa=e,ba=a,zf=f,Mf=u,tg=l,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,IS(Hr,function(){return gg(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||l){l=G.T,G.T=null,u=ae.p,ae.p=2,m=Ye,Ye|=4;try{$S(e,t,a)}finally{Ye=m,ae.p=u,G.T=l}}xt=1,hg(),pg(),mg()}}function hg(){if(xt===1){xt=0;var e=Xa,t=dr,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=G.T,G.T=null;var l=ae.p;ae.p=2;var u=Ye;Ye|=4;try{Qy(t,e);var f=Qf,m=Wp(e.containerInfo),v=f.focusedElem,E=f.selectionRange;if(m!==v&&v&&v.ownerDocument&&Ip(v.ownerDocument.documentElement,v)){if(E!==null&&gc(v)){var V=E.start,K=E.end;if(K===void 0&&(K=V),"selectionStart"in v)v.selectionStart=V,v.selectionEnd=Math.min(K,v.value.length);else{var I=v.ownerDocument||document,X=I&&I.defaultView||window;if(X.getSelection){var Q=X.getSelection(),he=v.textContent.length,we=Math.min(E.start,he),Pe=E.end===void 0?we:Math.min(E.end,he);!Q.extend&&we>Pe&&(m=Pe,Pe=we,we=m);var U=Jp(v,we),D=Jp(v,Pe);if(U&&D&&(Q.rangeCount!==1||Q.anchorNode!==U.node||Q.anchorOffset!==U.offset||Q.focusNode!==D.node||Q.focusOffset!==D.offset)){var $=I.createRange();$.setStart(U.node,U.offset),Q.removeAllRanges(),we>Pe?(Q.addRange($),Q.extend(D.node,D.offset)):($.setEnd(D.node,D.offset),Q.addRange($))}}}}for(I=[],Q=v;Q=Q.parentNode;)Q.nodeType===1&&I.push({element:Q,left:Q.scrollLeft,top:Q.scrollTop});for(typeof v.focus=="function"&&v.focus(),v=0;v<I.length;v++){var J=I[v];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}ws=!!Ff,Qf=Ff=null}finally{Ye=u,ae.p=l,G.T=a}}e.current=t,xt=2}}function pg(){if(xt===2){xt=0;var e=Xa,t=dr,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=G.T,G.T=null;var l=ae.p;ae.p=2;var u=Ye;Ye|=4;try{Vy(e,t.alternate,t)}finally{Ye=u,ae.p=l,G.T=a}}xt=3}}function mg(){if(xt===4||xt===3){xt=0,mo();var e=Xa,t=dr,a=ba,l=tg;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?xt=5:(xt=0,dr=Xa=null,yg(e,e.pendingLanes));var u=e.pendingLanes;if(u===0&&(Ga=null),Iu(a),t=t.stateNode,ee&&typeof ee.onCommitFiberRoot=="function")try{ee.onCommitFiberRoot(te,t,void 0,(t.current.flags&128)===128)}catch{}if(l!==null){t=G.T,u=ae.p,ae.p=2,G.T=null;try{for(var f=e.onRecoverableError,m=0;m<l.length;m++){var v=l[m];f(v.value,{componentStack:v.stack})}}finally{G.T=t,ae.p=u}}(ba&3)!==0&&fs(),Pn(e),u=e.pendingLanes,(a&261930)!==0&&(u&42)!==0?e===jf?xl++:(xl=0,jf=e):xl=0,Sl(0)}}function yg(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,tl(t)))}function fs(){return hg(),pg(),mg(),gg()}function gg(){if(xt!==5)return!1;var e=Xa,t=zf;zf=0;var a=Iu(ba),l=G.T,u=ae.p;try{ae.p=32>a?32:a,G.T=null,a=Mf,Mf=null;var f=Xa,m=ba;if(xt=0,dr=Xa=null,ba=0,(Ye&6)!==0)throw Error(o(331));var v=Ye;if(Ye|=4,Iy(f.current),Ky(f,f.current,m,a),Ye=v,Sl(0,!1),ee&&typeof ee.onPostCommitFiberRoot=="function")try{ee.onPostCommitFiberRoot(te,f)}catch{}return!0}finally{ae.p=u,G.T=l,yg(e,t)}}function bg(e,t,a){t=Sn(a,t),t=ff(e.stateNode,t,2),e=La(e,t,2),e!==null&&($r(e,2),Pn(e))}function Fe(e,t,a){if(e.tag===3)bg(e,e,a);else for(;t!==null;){if(t.tag===3){bg(t,e,a);break}else if(t.tag===1){var l=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ga===null||!Ga.has(l))){e=Sn(a,e),a=vy(2),l=La(t,a,2),l!==null&&(xy(a,l,t,e),$r(l,2),Pn(l));break}}t=t.return}}function Uf(e,t,a){var l=e.pingCache;if(l===null){l=e.pingCache=new GS;var u=new Set;l.set(t,u)}else u=l.get(t),u===void 0&&(u=new Set,l.set(t,u));u.has(a)||(Of=!0,u.add(a),e=KS.bind(null,e,t,a),t.then(e,e))}function KS(e,t,a){var l=e.pingCache;l!==null&&l.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Je===e&&(Be&a)===a&&(st===4||st===3&&(Be&62914560)===Be&&300>Bt()-rs?(Ye&2)===0&&hr(e,0):Cf|=a,fr===Be&&(fr=0)),Pn(e)}function vg(e,t){t===0&&(t=qr()),e=si(e,t),e!==null&&($r(e,t),Pn(e))}function PS(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),vg(e,a)}function JS(e,t){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(o(314))}l!==null&&l.delete(t),vg(e,a)}function IS(e,t){return Aa(e,t)}var ds=null,mr=null,Bf=!1,hs=!1,Lf=!1,Qa=0;function Pn(e){e!==mr&&e.next===null&&(mr===null?ds=mr=e:mr=mr.next=e),hs=!0,Bf||(Bf=!0,e_())}function Sl(e,t){if(!Lf&&hs){Lf=!0;do for(var a=!1,l=ds;l!==null;){if(e!==0){var u=l.pendingLanes;if(u===0)var f=0;else{var m=l.suspendedLanes,v=l.pingedLanes;f=(1<<31-ie(42|e)+1)-1,f&=u&~(m&~v),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,wg(l,f))}else f=Be,f=Ni(l,l===Je?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||Ca(l,f)||(a=!0,wg(l,f));l=l.next}while(a);Lf=!1}}function WS(){xg()}function xg(){hs=Bf=!1;var e=0;Qa!==0&&c_()&&(e=Qa);for(var t=Bt(),a=null,l=ds;l!==null;){var u=l.next,f=Sg(l,t);f===0?(l.next=null,a===null?ds=u:a.next=u,u===null&&(mr=a)):(a=l,(e!==0||(f&3)!==0)&&(hs=!0)),l=u}xt!==0&&xt!==5||Sl(e),Qa!==0&&(Qa=0)}function Sg(e,t){for(var a=e.suspendedLanes,l=e.pingedLanes,u=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var m=31-ie(f),v=1<<m,E=u[m];E===-1?((v&a)===0||(v&l)!==0)&&(u[m]=Ku(v,t)):E<=t&&(e.expiredLanes|=v),f&=~v}if(t=Je,a=Be,a=Ni(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===t&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Oa(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ca(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(l!==null&&Oa(l),Iu(a)){case 2:case 8:a=Zu;break;case 32:a=Hr;break;case 268435456:a=w;break;default:a=Hr}return l=_g.bind(null,e),a=Aa(a,l),e.callbackPriority=t,e.callbackNode=a,t}return l!==null&&l!==null&&Oa(l),e.callbackPriority=2,e.callbackNode=null,2}function _g(e,t){if(xt!==0&&xt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(fs()&&e.callbackNode!==a)return null;var l=Be;return l=Ni(e,e===Je?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(ag(e,l,t),Sg(e,Bt()),e.callbackNode!=null&&e.callbackNode===a?_g.bind(null,e):null)}function wg(e,t){if(fs())return null;ag(e,t,!0)}function e_(){d_(function(){(Ye&6)!==0?Aa(yo,WS):xg()})}function Hf(){if(Qa===0){var e=er;e===0&&(e=Et,Et<<=1,(Et&261888)===0&&(Et=256)),Qa=e}return Qa}function Eg(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:So(""+e)}function Tg(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function t_(e,t,a,l,u){if(t==="submit"&&a&&a.stateNode===u){var f=Eg((u[Jt]||null).action),m=l.submitter;m&&(t=(t=m[Jt]||null)?Eg(t.formAction):m.getAttribute("formAction"),t!==null&&(f=t,m=null));var v=new To("action","action",null,l,u);e.push({event:v,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Qa!==0){var E=m?Tg(u,m):new FormData(u);rf(a,{pending:!0,data:E,method:u.method,action:f},null,E)}}else typeof f=="function"&&(v.preventDefault(),E=m?Tg(u,m):new FormData(u),rf(a,{pending:!0,data:E,method:u.method,action:f},f,E))},currentTarget:u}]})}}for(var qf=0;qf<Sc.length;qf++){var $f=Sc[qf],n_=$f.toLowerCase(),a_=$f[0].toUpperCase()+$f.slice(1);jn(n_,"on"+a_)}jn(nm,"onAnimationEnd"),jn(am,"onAnimationIteration"),jn(im,"onAnimationStart"),jn("dblclick","onDoubleClick"),jn("focusin","onFocus"),jn("focusout","onBlur"),jn(vS,"onTransitionRun"),jn(xS,"onTransitionStart"),jn(SS,"onTransitionCancel"),jn(rm,"onTransitionEnd"),qi("onMouseEnter",["mouseout","mouseover"]),qi("onMouseLeave",["mouseout","mouseover"]),qi("onPointerEnter",["pointerout","pointerover"]),qi("onPointerLeave",["pointerout","pointerover"]),ii("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ii("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ii("onBeforeInput",["compositionend","keypress","textInput","paste"]),ii("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ii("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ii("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _l="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i_=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_l));function Rg(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],u=l.event;l=l.listeners;e:{var f=void 0;if(t)for(var m=l.length-1;0<=m;m--){var v=l[m],E=v.instance,V=v.currentTarget;if(v=v.listener,E!==f&&u.isPropagationStopped())break e;f=v,u.currentTarget=V;try{f(u)}catch(K){Oo(K)}u.currentTarget=null,f=E}else for(m=0;m<l.length;m++){if(v=l[m],E=v.instance,V=v.currentTarget,v=v.listener,E!==f&&u.isPropagationStopped())break e;f=v,u.currentTarget=V;try{f(u)}catch(K){Oo(K)}u.currentTarget=null,f=E}}}}function Ne(e,t){var a=t[Wu];a===void 0&&(a=t[Wu]=new Set);var l=e+"__bubble";a.has(l)||(Ag(t,e,2,!1),a.add(l))}function Vf(e,t,a){var l=0;t&&(l|=4),Ag(a,e,l,t)}var ps="_reactListening"+Math.random().toString(36).slice(2);function Yf(e){if(!e[ps]){e[ps]=!0,xp.forEach(function(a){a!=="selectionchange"&&(i_.has(a)||Vf(a,!1,e),Vf(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ps]||(t[ps]=!0,Vf("selectionchange",!1,t))}}function Ag(e,t,a,l){switch(n0(t)){case 2:var u=M_;break;case 8:u=j_;break;default:u=id}a=u.bind(null,t,a,e),u=void 0,!sc||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),l?u!==void 0?e.addEventListener(t,a,{capture:!0,passive:u}):e.addEventListener(t,a,!0):u!==void 0?e.addEventListener(t,a,{passive:u}):e.addEventListener(t,a,!1)}function Gf(e,t,a,l,u){var f=l;if((t&1)===0&&(t&2)===0&&l!==null)e:for(;;){if(l===null)return;var m=l.tag;if(m===3||m===4){var v=l.stateNode.containerInfo;if(v===u)break;if(m===4)for(m=l.return;m!==null;){var E=m.tag;if((E===3||E===4)&&m.stateNode.containerInfo===u)return;m=m.return}for(;v!==null;){if(m=Bi(v),m===null)return;if(E=m.tag,E===5||E===6||E===26||E===27){l=f=m;continue e}v=v.parentNode}}l=l.return}Mp(function(){var V=f,K=lc(a),I=[];e:{var X=lm.get(e);if(X!==void 0){var Q=To,he=e;switch(e){case"keypress":if(wo(a)===0)break e;case"keydown":case"keyup":Q=Jx;break;case"focusin":he="focus",Q=dc;break;case"focusout":he="blur",Q=dc;break;case"beforeblur":case"afterblur":Q=dc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Q=Np;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Q=Hx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Q=eS;break;case nm:case am:case im:Q=Vx;break;case rm:Q=nS;break;case"scroll":case"scrollend":Q=Bx;break;case"wheel":Q=iS;break;case"copy":case"cut":case"paste":Q=Gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Q=Bp;break;case"toggle":case"beforetoggle":Q=lS}var we=(t&4)!==0,Pe=!we&&(e==="scroll"||e==="scrollend"),U=we?X!==null?X+"Capture":null:X;we=[];for(var D=V,$;D!==null;){var J=D;if($=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||$===null||U===null||(J=Gr(D,U),J!=null&&we.push(wl(D,J,$))),Pe)break;D=D.return}0<we.length&&(X=new Q(X,he,null,a,K),I.push({event:X,listeners:we}))}}if((t&7)===0){e:{if(X=e==="mouseover"||e==="pointerover",Q=e==="mouseout"||e==="pointerout",X&&a!==rc&&(he=a.relatedTarget||a.fromElement)&&(Bi(he)||he[Ui]))break e;if((Q||X)&&(X=K.window===K?K:(X=K.ownerDocument)?X.defaultView||X.parentWindow:window,Q?(he=a.relatedTarget||a.toElement,Q=V,he=he?Bi(he):null,he!==null&&(Pe=c(he),we=he.tag,he!==Pe||we!==5&&we!==27&&we!==6)&&(he=null)):(Q=null,he=V),Q!==he)){if(we=Np,J="onMouseLeave",U="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(we=Bp,J="onPointerLeave",U="onPointerEnter",D="pointer"),Pe=Q==null?X:Yr(Q),$=he==null?X:Yr(he),X=new we(J,D+"leave",Q,a,K),X.target=Pe,X.relatedTarget=$,J=null,Bi(K)===V&&(we=new we(U,D+"enter",he,a,K),we.target=$,we.relatedTarget=Pe,J=we),Pe=J,Q&&he)t:{for(we=r_,U=Q,D=he,$=0,J=U;J;J=we(J))$++;J=0;for(var ve=D;ve;ve=we(ve))J++;for(;0<$-J;)U=we(U),$--;for(;0<J-$;)D=we(D),J--;for(;$--;){if(U===D||D!==null&&U===D.alternate){we=U;break t}U=we(U),D=we(D)}we=null}else we=null;Q!==null&&Og(I,X,Q,we,!1),he!==null&&Pe!==null&&Og(I,Pe,he,we,!0)}}e:{if(X=V?Yr(V):window,Q=X.nodeName&&X.nodeName.toLowerCase(),Q==="select"||Q==="input"&&X.type==="file")var qe=Xp;else if(Yp(X))if(Fp)qe=yS;else{qe=pS;var ye=hS}else Q=X.nodeName,!Q||Q.toLowerCase()!=="input"||X.type!=="checkbox"&&X.type!=="radio"?V&&ic(V.elementType)&&(qe=Xp):qe=mS;if(qe&&(qe=qe(e,V))){Gp(I,qe,a,K);break e}ye&&ye(e,X,V),e==="focusout"&&V&&X.type==="number"&&V.memoizedProps.value!=null&&ac(X,"number",X.value)}switch(ye=V?Yr(V):window,e){case"focusin":(Yp(ye)||ye.contentEditable==="true")&&(Fi=ye,bc=V,Ir=null);break;case"focusout":Ir=bc=Fi=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":vc=!1,em(I,a,K);break;case"selectionchange":if(bS)break;case"keydown":case"keyup":em(I,a,K)}var Me;if(pc)e:{switch(e){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else Xi?$p(e,a)&&(Le="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Le="onCompositionStart");Le&&(Lp&&a.locale!=="ko"&&(Xi||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&Xi&&(Me=jp()):(za=K,uc="value"in za?za.value:za.textContent,Xi=!0)),ye=ms(V,Le),0<ye.length&&(Le=new Up(Le,e,null,a,K),I.push({event:Le,listeners:ye}),Me?Le.data=Me:(Me=Vp(a),Me!==null&&(Le.data=Me)))),(Me=sS?uS(e,a):cS(e,a))&&(Le=ms(V,"onBeforeInput"),0<Le.length&&(ye=new Up("onBeforeInput","beforeinput",null,a,K),I.push({event:ye,listeners:Le}),ye.data=Me)),t_(I,e,V,a,K)}Rg(I,t)})}function wl(e,t,a){return{instance:e,listener:t,currentTarget:a}}function ms(e,t){for(var a=t+"Capture",l=[];e!==null;){var u=e,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Gr(e,a),u!=null&&l.unshift(wl(e,u,f)),u=Gr(e,t),u!=null&&l.push(wl(e,u,f))),e.tag===3)return l;e=e.return}return[]}function r_(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Og(e,t,a,l,u){for(var f=t._reactName,m=[];a!==null&&a!==l;){var v=a,E=v.alternate,V=v.stateNode;if(v=v.tag,E!==null&&E===l)break;v!==5&&v!==26&&v!==27||V===null||(E=V,u?(V=Gr(a,f),V!=null&&m.unshift(wl(a,V,E))):u||(V=Gr(a,f),V!=null&&m.push(wl(a,V,E)))),a=a.return}m.length!==0&&e.push({event:t,listeners:m})}var l_=/\r\n?/g,o_=/\u0000|\uFFFD/g;function Cg(e){return(typeof e=="string"?e:""+e).replace(l_,`
`).replace(o_,"")}function Dg(e,t){return t=Cg(t),Cg(e)===t}function Ke(e,t,a,l,u,f){switch(a){case"children":typeof l=="string"?t==="body"||t==="textarea"&&l===""||Vi(e,l):(typeof l=="number"||typeof l=="bigint")&&t!=="body"&&Vi(e,""+l);break;case"className":vo(e,"class",l);break;case"tabIndex":vo(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":vo(e,a,l);break;case"style":Dp(e,l,f);break;case"data":if(t!=="object"){vo(e,"data",l);break}case"src":case"href":if(l===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=So(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(t!=="input"&&Ke(e,t,"name",u.name,u,null),Ke(e,t,"formEncType",u.formEncType,u,null),Ke(e,t,"formMethod",u.formMethod,u,null),Ke(e,t,"formTarget",u.formTarget,u,null)):(Ke(e,t,"encType",u.encType,u,null),Ke(e,t,"method",u.method,u,null),Ke(e,t,"target",u.target,u,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=So(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=aa);break;case"onScroll":l!=null&&Ne("scroll",e);break;case"onScrollEnd":l!=null&&Ne("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=So(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Ne("beforetoggle",e),Ne("toggle",e),bo(e,"popover",l);break;case"xlinkActuate":na(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":na(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":na(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":na(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":na(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":na(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":na(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":na(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":na(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":bo(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Nx.get(a)||a,bo(e,a,l))}}function Xf(e,t,a,l,u,f){switch(a){case"style":Dp(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(o(61));if(a=l.__html,a!=null){if(u.children!=null)throw Error(o(60));e.innerHTML=a}}break;case"children":typeof l=="string"?Vi(e,l):(typeof l=="number"||typeof l=="bigint")&&Vi(e,""+l);break;case"onScroll":l!=null&&Ne("scroll",e);break;case"onScrollEnd":l!=null&&Ne("scrollend",e);break;case"onClick":l!=null&&(e.onclick=aa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Sp.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),t=a.slice(2,u?a.length-7:void 0),f=e[Jt]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(t,f,u),typeof l=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,l,u);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):bo(e,a,l)}}}function zt(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",e),Ne("load",e);var l=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var m=a[f];if(m!=null)switch(f){case"src":l=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ke(e,t,f,m,a,null)}}u&&Ke(e,t,"srcSet",a.srcSet,a,null),l&&Ke(e,t,"src",a.src,a,null);return;case"input":Ne("invalid",e);var v=f=m=u=null,E=null,V=null;for(l in a)if(a.hasOwnProperty(l)){var K=a[l];if(K!=null)switch(l){case"name":u=K;break;case"type":m=K;break;case"checked":E=K;break;case"defaultChecked":V=K;break;case"value":f=K;break;case"defaultValue":v=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(o(137,t));break;default:Ke(e,t,l,K,a,null)}}Rp(e,f,v,E,V,m,u,!1);return;case"select":Ne("invalid",e),l=m=f=null;for(u in a)if(a.hasOwnProperty(u)&&(v=a[u],v!=null))switch(u){case"value":f=v;break;case"defaultValue":m=v;break;case"multiple":l=v;default:Ke(e,t,u,v,a,null)}t=f,a=m,e.multiple=!!l,t!=null?$i(e,!!l,t,!1):a!=null&&$i(e,!!l,a,!0);return;case"textarea":Ne("invalid",e),f=u=l=null;for(m in a)if(a.hasOwnProperty(m)&&(v=a[m],v!=null))switch(m){case"value":l=v;break;case"defaultValue":u=v;break;case"children":f=v;break;case"dangerouslySetInnerHTML":if(v!=null)throw Error(o(91));break;default:Ke(e,t,m,v,a,null)}Op(e,l,u,f);return;case"option":for(E in a)a.hasOwnProperty(E)&&(l=a[E],l!=null)&&(E==="selected"?e.selected=l&&typeof l!="function"&&typeof l!="symbol":Ke(e,t,E,l,a,null));return;case"dialog":Ne("beforetoggle",e),Ne("toggle",e),Ne("cancel",e),Ne("close",e);break;case"iframe":case"object":Ne("load",e);break;case"video":case"audio":for(l=0;l<_l.length;l++)Ne(_l[l],e);break;case"image":Ne("error",e),Ne("load",e);break;case"details":Ne("toggle",e);break;case"embed":case"source":case"link":Ne("error",e),Ne("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in a)if(a.hasOwnProperty(V)&&(l=a[V],l!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Ke(e,t,V,l,a,null)}return;default:if(ic(t)){for(K in a)a.hasOwnProperty(K)&&(l=a[K],l!==void 0&&Xf(e,t,K,l,a,void 0));return}}for(v in a)a.hasOwnProperty(v)&&(l=a[v],l!=null&&Ke(e,t,v,l,a,null))}function s_(e,t,a,l){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,m=null,v=null,E=null,V=null,K=null;for(Q in a){var I=a[Q];if(a.hasOwnProperty(Q)&&I!=null)switch(Q){case"checked":break;case"value":break;case"defaultValue":E=I;default:l.hasOwnProperty(Q)||Ke(e,t,Q,null,l,I)}}for(var X in l){var Q=l[X];if(I=a[X],l.hasOwnProperty(X)&&(Q!=null||I!=null))switch(X){case"type":f=Q;break;case"name":u=Q;break;case"checked":V=Q;break;case"defaultChecked":K=Q;break;case"value":m=Q;break;case"defaultValue":v=Q;break;case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(o(137,t));break;default:Q!==I&&Ke(e,t,X,Q,l,I)}}nc(e,m,v,E,V,K,f,u);return;case"select":Q=m=v=X=null;for(f in a)if(E=a[f],a.hasOwnProperty(f)&&E!=null)switch(f){case"value":break;case"multiple":Q=E;default:l.hasOwnProperty(f)||Ke(e,t,f,null,l,E)}for(u in l)if(f=l[u],E=a[u],l.hasOwnProperty(u)&&(f!=null||E!=null))switch(u){case"value":X=f;break;case"defaultValue":v=f;break;case"multiple":m=f;default:f!==E&&Ke(e,t,u,f,l,E)}t=v,a=m,l=Q,X!=null?$i(e,!!a,X,!1):!!l!=!!a&&(t!=null?$i(e,!!a,t,!0):$i(e,!!a,a?[]:"",!1));return;case"textarea":Q=X=null;for(v in a)if(u=a[v],a.hasOwnProperty(v)&&u!=null&&!l.hasOwnProperty(v))switch(v){case"value":break;case"children":break;default:Ke(e,t,v,null,l,u)}for(m in l)if(u=l[m],f=a[m],l.hasOwnProperty(m)&&(u!=null||f!=null))switch(m){case"value":X=u;break;case"defaultValue":Q=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(o(91));break;default:u!==f&&Ke(e,t,m,u,l,f)}Ap(e,X,Q);return;case"option":for(var he in a)X=a[he],a.hasOwnProperty(he)&&X!=null&&!l.hasOwnProperty(he)&&(he==="selected"?e.selected=!1:Ke(e,t,he,null,l,X));for(E in l)X=l[E],Q=a[E],l.hasOwnProperty(E)&&X!==Q&&(X!=null||Q!=null)&&(E==="selected"?e.selected=X&&typeof X!="function"&&typeof X!="symbol":Ke(e,t,E,X,l,Q));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var we in a)X=a[we],a.hasOwnProperty(we)&&X!=null&&!l.hasOwnProperty(we)&&Ke(e,t,we,null,l,X);for(V in l)if(X=l[V],Q=a[V],l.hasOwnProperty(V)&&X!==Q&&(X!=null||Q!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(o(137,t));break;default:Ke(e,t,V,X,l,Q)}return;default:if(ic(t)){for(var Pe in a)X=a[Pe],a.hasOwnProperty(Pe)&&X!==void 0&&!l.hasOwnProperty(Pe)&&Xf(e,t,Pe,void 0,l,X);for(K in l)X=l[K],Q=a[K],!l.hasOwnProperty(K)||X===Q||X===void 0&&Q===void 0||Xf(e,t,K,X,l,Q);return}}for(var U in a)X=a[U],a.hasOwnProperty(U)&&X!=null&&!l.hasOwnProperty(U)&&Ke(e,t,U,null,l,X);for(I in l)X=l[I],Q=a[I],!l.hasOwnProperty(I)||X===Q||X==null&&Q==null||Ke(e,t,I,X,l,Q)}function zg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function u_(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var u=a[l],f=u.transferSize,m=u.initiatorType,v=u.duration;if(f&&v&&zg(m)){for(m=0,v=u.responseEnd,l+=1;l<a.length;l++){var E=a[l],V=E.startTime;if(V>v)break;var K=E.transferSize,I=E.initiatorType;K&&zg(I)&&(E=E.responseEnd,m+=K*(E<v?1:(v-V)/(E-V)))}if(--l,t+=8*(f+m)/(u.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ff=null,Qf=null;function ys(e){return e.nodeType===9?e:e.ownerDocument}function Mg(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function jg(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Zf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Kf=null;function c_(){var e=window.event;return e&&e.type==="popstate"?e===Kf?!1:(Kf=e,!0):(Kf=null,!1)}var kg=typeof setTimeout=="function"?setTimeout:void 0,f_=typeof clearTimeout=="function"?clearTimeout:void 0,Ng=typeof Promise=="function"?Promise:void 0,d_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ng<"u"?function(e){return Ng.resolve(null).then(e).catch(h_)}:kg;function h_(e){setTimeout(function(){throw e})}function Za(e){return e==="head"}function Ug(e,t){var a=t,l=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(u),vr(t);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")El(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,El(a);for(var f=a.firstChild;f;){var m=f.nextSibling,v=f.nodeName;f[Vr]||v==="SCRIPT"||v==="STYLE"||v==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=m}}else a==="body"&&El(e.ownerDocument.body);a=u}while(a);vr(t)}function Bg(e,t){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Pf(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pf(a),ec(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function p_(e,t,a,l){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[Vr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Rn(e.nextSibling),e===null)break}return null}function m_(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Rn(e.nextSibling),e===null))return null;return e}function Lg(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Rn(e.nextSibling),e===null))return null;return e}function Jf(e){return e.data==="$?"||e.data==="$~"}function If(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function y_(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var l=function(){t(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Rn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Wf=null;function Hg(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return Rn(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function qg(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function $g(e,t,a){switch(t=ys(a),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function El(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);ec(e)}var An=new Map,Vg=new Set;function gs(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var va=ae.d;ae.d={f:g_,r:b_,D:v_,C:x_,L:S_,m:__,X:E_,S:w_,M:T_};function g_(){var e=va.f(),t=ss();return e||t}function b_(e){var t=Li(e);t!==null&&t.tag===5&&t.type==="form"?ry(t):va.r(e)}var yr=typeof document>"u"?null:document;function Yg(e,t,a){var l=yr;if(l&&typeof t=="string"&&t){var u=vn(t);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Vg.has(u)||(Vg.add(u),e={rel:e,crossOrigin:a,href:t},l.querySelector(u)===null&&(t=l.createElement("link"),zt(t,"link",e),Tt(t),l.head.appendChild(t)))}}function v_(e){va.D(e),Yg("dns-prefetch",e,null)}function x_(e,t){va.C(e,t),Yg("preconnect",e,t)}function S_(e,t,a){va.L(e,t,a);var l=yr;if(l&&e&&t){var u='link[rel="preload"][as="'+vn(t)+'"]';t==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+vn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+vn(a.imageSizes)+'"]')):u+='[href="'+vn(e)+'"]';var f=u;switch(t){case"style":f=gr(e);break;case"script":f=br(e)}An.has(f)||(e=b({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),An.set(f,e),l.querySelector(u)!==null||t==="style"&&l.querySelector(Tl(f))||t==="script"&&l.querySelector(Rl(f))||(t=l.createElement("link"),zt(t,"link",e),Tt(t),l.head.appendChild(t)))}}function __(e,t){va.m(e,t);var a=yr;if(a&&e){var l=t&&typeof t.as=="string"?t.as:"script",u='link[rel="modulepreload"][as="'+vn(l)+'"][href="'+vn(e)+'"]',f=u;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=br(e)}if(!An.has(f)&&(e=b({rel:"modulepreload",href:e},t),An.set(f,e),a.querySelector(u)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Rl(f)))return}l=a.createElement("link"),zt(l,"link",e),Tt(l),a.head.appendChild(l)}}}function w_(e,t,a){va.S(e,t,a);var l=yr;if(l&&e){var u=Hi(l).hoistableStyles,f=gr(e);t=t||"default";var m=u.get(f);if(!m){var v={loading:0,preload:null};if(m=l.querySelector(Tl(f)))v.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},a),(a=An.get(f))&&ed(e,a);var E=m=l.createElement("link");Tt(E),zt(E,"link",e),E._p=new Promise(function(V,K){E.onload=V,E.onerror=K}),E.addEventListener("load",function(){v.loading|=1}),E.addEventListener("error",function(){v.loading|=2}),v.loading|=4,bs(m,t,l)}m={type:"stylesheet",instance:m,count:1,state:v},u.set(f,m)}}}function E_(e,t){va.X(e,t);var a=yr;if(a&&e){var l=Hi(a).hoistableScripts,u=br(e),f=l.get(u);f||(f=a.querySelector(Rl(u)),f||(e=b({src:e,async:!0},t),(t=An.get(u))&&td(e,t),f=a.createElement("script"),Tt(f),zt(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function T_(e,t){va.M(e,t);var a=yr;if(a&&e){var l=Hi(a).hoistableScripts,u=br(e),f=l.get(u);f||(f=a.querySelector(Rl(u)),f||(e=b({src:e,async:!0,type:"module"},t),(t=An.get(u))&&td(e,t),f=a.createElement("script"),Tt(f),zt(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(u,f))}}function Gg(e,t,a,l){var u=(u=oe.current)?gs(u):null;if(!u)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=gr(a.href),a=Hi(u).hoistableStyles,l=a.get(t),l||(l={type:"style",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=gr(a.href);var f=Hi(u).hoistableStyles,m=f.get(e);if(m||(u=u.ownerDocument||u,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,m),(f=u.querySelector(Tl(e)))&&!f._p&&(m.instance=f,m.state.loading=5),An.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},An.set(e,a),f||R_(u,e,a,m.state))),t&&l===null)throw Error(o(528,""));return m}if(t&&l!==null)throw Error(o(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=br(a),a=Hi(u).hoistableScripts,l=a.get(t),l||(l={type:"script",instance:null,count:0,state:null},a.set(t,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function gr(e){return'href="'+vn(e)+'"'}function Tl(e){return'link[rel="stylesheet"]['+e+"]"}function Xg(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function R_(e,t,a,l){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?l.loading=1:(t=e.createElement("link"),l.preload=t,t.addEventListener("load",function(){return l.loading|=1}),t.addEventListener("error",function(){return l.loading|=2}),zt(t,"link",a),Tt(t),e.head.appendChild(t))}function br(e){return'[src="'+vn(e)+'"]'}function Rl(e){return"script[async]"+e}function Fg(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var l=e.querySelector('style[data-href~="'+vn(a.href)+'"]');if(l)return t.instance=l,Tt(l),l;var u=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Tt(l),zt(l,"style",u),bs(l,a.precedence,e),t.instance=l;case"stylesheet":u=gr(a.href);var f=e.querySelector(Tl(u));if(f)return t.state.loading|=4,t.instance=f,Tt(f),f;l=Xg(a),(u=An.get(u))&&ed(l,u),f=(e.ownerDocument||e).createElement("link"),Tt(f);var m=f;return m._p=new Promise(function(v,E){m.onload=v,m.onerror=E}),zt(f,"link",l),t.state.loading|=4,bs(f,a.precedence,e),t.instance=f;case"script":return f=br(a.src),(u=e.querySelector(Rl(f)))?(t.instance=u,Tt(u),u):(l=a,(u=An.get(f))&&(l=b({},a),td(l,u)),e=e.ownerDocument||e,u=e.createElement("script"),Tt(u),zt(u,"link",l),e.head.appendChild(u),t.instance=u);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(l=t.instance,t.state.loading|=4,bs(l,a.precedence,e));return t.instance}function bs(e,t,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=l.length?l[l.length-1]:null,f=u,m=0;m<l.length;m++){var v=l[m];if(v.dataset.precedence===t)f=v;else if(f!==u)break}f?f.parentNode.insertBefore(e,f.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function ed(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function td(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var vs=null;function Qg(e,t,a){if(vs===null){var l=new Map,u=vs=new Map;u.set(a,l)}else u=vs,l=u.get(a),l||(l=new Map,u.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var f=a[u];if(!(f[Vr]||f[At]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var m=f.getAttribute(t)||"";m=e+m;var v=l.get(m);v?v.push(f):l.set(m,[f])}}return l}function Zg(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function A_(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;return t.rel==="stylesheet"?(e=t.disabled,typeof t.precedence=="string"&&e==null):!0;case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Kg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function O_(e,t,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=gr(l.href),f=t.querySelector(Tl(u));if(f){t=f._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=xs.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=f,Tt(f);return}f=t.ownerDocument||t,l=Xg(l),(u=An.get(u))&&ed(l,u),f=f.createElement("link"),Tt(f);var m=f;m._p=new Promise(function(v,E){m.onload=v,m.onerror=E}),zt(f,"link",l),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=xs.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var nd=0;function C_(e,t){return e.stylesheets&&e.count===0&&_s(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&_s(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+t);0<e.imgBytes&&nd===0&&(nd=62500*u_());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_s(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>nd?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(u)}}:null}function xs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_s(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ss=null;function _s(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ss=new Map,t.forEach(D_,e),Ss=null,xs.call(e))}function D_(e,t){if(!(t.state.loading&4)){var a=Ss.get(e);if(a)var l=a.get(null);else{a=new Map,Ss.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var m=u[f];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(a.set(m.dataset.precedence,m),l=m)}l&&a.set(null,l)}u=t.instance,m=u.getAttribute("data-precedence"),f=a.get(m)||l,f===l&&a.set(null,u),a.set(m,u),this.count++,l=xs.bind(this),u.addEventListener("load",l),u.addEventListener("error",l),f?f.parentNode.insertBefore(u,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),t.state.loading|=4}}var Al={$$typeof:O,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function z_(e,t,a,l,u,f,m,v,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Pu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pu(0),this.hiddenUpdates=Pu(null),this.identifierPrefix=l,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Pg(e,t,a,l,u,f,m,v,E,V,K,I){return e=new z_(e,t,a,m,E,V,K,I,v),t=1,f===!0&&(t|=24),f=un(3,null,null,t),e.current=f,f.stateNode=e,t=kc(),t.refCount++,e.pooledCache=t,t.refCount++,f.memoizedState={element:l,isDehydrated:a,cache:t},Lc(f),e}function Jg(e){return e?(e=Ki,e):Ki}function Ig(e,t,a,l,u,f){u=Jg(u),l.context===null?l.context=u:l.pendingContext=u,l=Ba(t),l.payload={element:a},f=f===void 0?null:f,f!==null&&(l.callback=f),a=La(e,l,t),a!==null&&(an(a,e,t),rl(a,e,t))}function Wg(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function ad(e,t){Wg(e,t),(e=e.alternate)&&Wg(e,t)}function e0(e){if(e.tag===13||e.tag===31){var t=si(e,67108864);t!==null&&an(t,e,67108864),ad(e,67108864)}}function t0(e){if(e.tag===13||e.tag===31){var t=pn();t=Ju(t);var a=si(e,t);a!==null&&an(a,e,t),ad(e,t)}}var ws=!0;function M_(e,t,a,l){var u=G.T;G.T=null;var f=ae.p;try{ae.p=2,id(e,t,a,l)}finally{ae.p=f,G.T=u}}function j_(e,t,a,l){var u=G.T;G.T=null;var f=ae.p;try{ae.p=8,id(e,t,a,l)}finally{ae.p=f,G.T=u}}function id(e,t,a,l){if(ws){var u=rd(l);if(u===null)Gf(e,t,l,Es,a),a0(e,l);else if(N_(u,e,t,a,l))l.stopPropagation();else if(a0(e,l),t&4&&-1<k_.indexOf(e)){for(;u!==null;){var f=Li(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var m=on(f.pendingLanes);if(m!==0){var v=f;for(v.pendingLanes|=2,v.entangledLanes|=2;m;){var E=1<<31-ie(m);v.entanglements[1]|=E,m&=~E}Pn(f),(Ye&6)===0&&(ls=Bt()+500,Sl(0))}}break;case 31:case 13:v=si(f,2),v!==null&&an(v,f,2),ss(),ad(f,2)}if(f=rd(l),f===null&&Gf(e,t,l,Es,a),f===u)break;u=f}u!==null&&l.stopPropagation()}else Gf(e,t,l,null,a)}}function rd(e){return e=lc(e),ld(e)}var Es=null;function ld(e){if(Es=null,e=Bi(e),e!==null){var t=c(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=d(t),e!==null)return e;e=null}else if(a===31){if(e=h(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Es=e,null}function n0(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Qu()){case yo:return 2;case Zu:return 8;case Hr:case go:return 32;case w:return 268435456;default:return 32}default:return 32}}var od=!1,Ka=null,Pa=null,Ja=null,Ol=new Map,Cl=new Map,Ia=[],k_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function a0(e,t){switch(e){case"focusin":case"focusout":Ka=null;break;case"dragenter":case"dragleave":Pa=null;break;case"mouseover":case"mouseout":Ja=null;break;case"pointerover":case"pointerout":Ol.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cl.delete(t.pointerId)}}function Dl(e,t,a,l,u,f){return e===null||e.nativeEvent!==f?(e={blockedOn:t,domEventName:a,eventSystemFlags:l,nativeEvent:f,targetContainers:[u]},t!==null&&(t=Li(t),t!==null&&e0(t)),e):(e.eventSystemFlags|=l,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function N_(e,t,a,l,u){switch(t){case"focusin":return Ka=Dl(Ka,e,t,a,l,u),!0;case"dragenter":return Pa=Dl(Pa,e,t,a,l,u),!0;case"mouseover":return Ja=Dl(Ja,e,t,a,l,u),!0;case"pointerover":var f=u.pointerId;return Ol.set(f,Dl(Ol.get(f)||null,e,t,a,l,u)),!0;case"gotpointercapture":return f=u.pointerId,Cl.set(f,Dl(Cl.get(f)||null,e,t,a,l,u)),!0}return!1}function i0(e){var t=Bi(e.target);if(t!==null){var a=c(t);if(a!==null){if(t=a.tag,t===13){if(t=d(a),t!==null){e.blockedOn=t,bp(e.priority,function(){t0(a)});return}}else if(t===31){if(t=h(a),t!==null){e.blockedOn=t,bp(e.priority,function(){t0(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ts(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=rd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);rc=l,a.target.dispatchEvent(l),rc=null}else return t=Li(a),t!==null&&e0(t),e.blockedOn=a,!1;t.shift()}return!0}function r0(e,t,a){Ts(e)&&a.delete(t)}function U_(){od=!1,Ka!==null&&Ts(Ka)&&(Ka=null),Pa!==null&&Ts(Pa)&&(Pa=null),Ja!==null&&Ts(Ja)&&(Ja=null),Ol.forEach(r0),Cl.forEach(r0)}function Rs(e,t){e.blockedOn===t&&(e.blockedOn=null,od||(od=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,U_)))}var As=null;function l0(e){As!==e&&(As=e,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){As===e&&(As=null);for(var t=0;t<e.length;t+=3){var a=e[t],l=e[t+1],u=e[t+2];if(typeof l!="function"){if(ld(l||a)===null)continue;break}var f=Li(a);f!==null&&(e.splice(t,3),t-=3,rf(f,{pending:!0,data:u,method:a.method,action:l},l,u))}}))}function vr(e){function t(E){return Rs(E,e)}Ka!==null&&Rs(Ka,e),Pa!==null&&Rs(Pa,e),Ja!==null&&Rs(Ja,e),Ol.forEach(t),Cl.forEach(t);for(var a=0;a<Ia.length;a++){var l=Ia[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ia.length&&(a=Ia[0],a.blockedOn===null);)i0(a),a.blockedOn===null&&Ia.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var u=a[l],f=a[l+1],m=u[Jt]||null;if(typeof f=="function")m||l0(a);else if(m){var v=null;if(f&&f.hasAttribute("formAction")){if(u=f,m=f[Jt]||null)v=m.formAction;else if(ld(u)!==null)continue}else v=m.action;typeof v=="function"?a[l+1]=v:(a.splice(l,3),l-=3),l0(a)}}}function o0(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(m){return u=m})},focusReset:"manual",scroll:"manual"})}function t(){u!==null&&(u(),u=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),u!==null&&(u(),u=null)}}}function sd(e){this._internalRoot=e}Os.prototype.render=sd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var a=t.current,l=pn();Ig(a,l,e,t,null,null)},Os.prototype.unmount=sd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ig(e.current,2,null,e,null,null),ss(),t[Ui]=null}};function Os(e){this._internalRoot=e}Os.prototype.unstable_scheduleHydration=function(e){if(e){var t=gp();e={blockedOn:null,target:e,priority:t};for(var a=0;a<Ia.length&&t!==0&&t<Ia[a].priority;a++);Ia.splice(a,0,e),a===0&&i0(e)}};var s0=i.version;if(s0!=="19.2.7")throw Error(o(527,s0,"19.2.7"));ae.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=y(t),e=e!==null?g(e):null,e=e===null?null:e.stateNode,e};var B_={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Cs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Cs.isDisabled&&Cs.supportsFiber)try{te=Cs.inject(B_),ee=Cs}catch{}}return Ml.createRoot=function(e,t){if(!s(e))throw Error(o(299));var a=!1,l="",u=my,f=yy,m=gy;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(l=t.identifierPrefix),t.onUncaughtError!==void 0&&(u=t.onUncaughtError),t.onCaughtError!==void 0&&(f=t.onCaughtError),t.onRecoverableError!==void 0&&(m=t.onRecoverableError)),t=Pg(e,1,!1,null,null,a,l,null,u,f,m,o0),e[Ui]=t.current,Yf(e),new sd(t)},Ml.hydrateRoot=function(e,t,a){if(!s(e))throw Error(o(299));var l=!1,u="",f=my,m=yy,v=gy,E=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(v=a.onRecoverableError),a.formState!==void 0&&(E=a.formState)),t=Pg(e,1,!0,t,a??null,l,u,E,f,m,v,o0),t.context=Jg(null),a=t.current,l=pn(),l=Ju(l),u=Ba(l),u.callback=null,La(a,u,l),a=l,t.current.lanes=a,$r(t,a),Pn(t),e[Ui]=t.current,Yf(e),new Os(t)},Ml.version="19.2.7",Ml}var b0;function F_(){if(b0)return fd.exports;b0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(i){console.error(i)}}return n(),fd.exports=X_(),fd.exports}var Q_=F_();const Z_=Sh(Q_);var _h=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Wb=/^[\\/]{2}/;function K_(n,i){return i+n.replace(/\\/g,"/")}var v0="popstate";function x0(n){return typeof n=="object"&&n!=null&&"pathname"in n&&"search"in n&&"hash"in n&&"state"in n&&"key"in n}function P_(n={}){function i(o,s){let c=s.state?.masked,{pathname:d,search:h,hash:p}=c||o.location;return $d("",{pathname:d,search:h,hash:p},s.state&&s.state.usr||null,s.state&&s.state.key||"default",c?{pathname:o.location.pathname,search:o.location.search,hash:o.location.hash}:void 0)}function r(o,s){return typeof s=="string"?s:Ql(s)}return I_(i,r,null,n)}function rt(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function Cn(n,i){if(!n){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function J_(){return Math.random().toString(36).substring(2,10)}function S0(n,i){return{usr:n.state,key:n.key,idx:i,masked:n.mask?{pathname:n.pathname,search:n.search,hash:n.hash}:void 0}}function $d(n,i,r=null,o,s){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof i=="string"?Mr(i):i,state:r,key:i&&i.key||o||J_(),mask:s}}function Ql({pathname:n="/",search:i="",hash:r=""}){return i&&i!=="?"&&(n+=i.charAt(0)==="?"?i:"?"+i),r&&r!=="#"&&(n+=r.charAt(0)==="#"?r:"#"+r),n}function Mr(n){let i={};if(n){let r=n.indexOf("#");r>=0&&(i.hash=n.substring(r),n=n.substring(0,r));let o=n.indexOf("?");o>=0&&(i.search=n.substring(o),n=n.substring(0,o)),n&&(i.pathname=n)}return i}function I_(n,i,r,o={}){let{window:s=document.defaultView,v5Compat:c=!1}=o,d=s.history,h="POP",p=null,y=g();y==null&&(y=0,d.replaceState({...d.state,idx:y},""));function g(){return(d.state||{idx:null}).idx}function b(){h="POP";let S=g(),T=S==null?null:S-y;y=S,p&&p({action:h,location:C.location,delta:T})}function A(S,T){h="PUSH";let _=x0(S)?S:$d(C.location,S,T);y=g()+1;let O=S0(_,y),L=C.createHref(_.mask||_);try{d.pushState(O,"",L)}catch(Y){if(Y instanceof DOMException&&Y.name==="DataCloneError")throw Y;s.location.assign(L)}c&&p&&p({action:h,location:C.location,delta:1})}function M(S,T){h="REPLACE";let _=x0(S)?S:$d(C.location,S,T);y=g();let O=S0(_,y),L=C.createHref(_.mask||_);d.replaceState(O,"",L),c&&p&&p({action:h,location:C.location,delta:0})}function z(S){return W_(s,S)}let C={get action(){return h},get location(){return n(s,d)},listen(S){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(v0,b),p=S,()=>{s.removeEventListener(v0,b),p=null}},createHref(S){return i(s,S)},createURL:z,encodeLocation(S){let T=z(S);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:A,replace:M,go(S){return d.go(S)}};return C}function W_(n,i,r=!1){let o="http://localhost";n&&(o=n.location.origin!=="null"?n.location.origin:n.location.href),rt(o,"No window.location.(origin|href) available to create URL");let s=typeof i=="string"?i:Ql(i);return s=s.replace(/ $/,"%20"),!r&&Wb.test(s)&&(s=o+s),new URL(s,o)}function ev(n,i,r="/"){return e2(n,i,r,!1)}function e2(n,i,r,o,s){let c=typeof i=="string"?Mr(i):i,d=Ea(c.pathname||"/",r);if(d==null)return null;let h=t2(n),p=null,y=d2(d);for(let g=0;p==null&&g<h.length;++g)p=f2(h[g],y,o);return p}function t2(n){let i=tv(n);return n2(i),i}function tv(n,i=[],r=[],o="",s=!1){let c=(d,h,p=s,y)=>{let g={relativePath:y===void 0?d.path||"":y,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};if(g.relativePath.startsWith("/")){if(!g.relativePath.startsWith(o)&&p)return;rt(g.relativePath.startsWith(o),`Absolute route path "${g.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),g.relativePath=g.relativePath.slice(o.length)}let b=$n([o,g.relativePath]),A=r.concat(g);d.children&&d.children.length>0&&(rt(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),tv(d.children,i,A,b,p)),!(d.path==null&&!d.index)&&i.push({path:b,score:u2(b,d.index),routesMeta:A.map((M,z)=>{let[C,S]=iv(M.relativePath,M.caseSensitive,z===A.length-1);return{...M,matcher:C,compiledParams:S}})})};return n.forEach((d,h)=>{if(d.path===""||!d.path?.includes("?"))c(d,h);else for(let p of nv(d.path))c(d,h,!0,p)}),i}function nv(n){let i=n.split("/");if(i.length===0)return[];let[r,...o]=i,s=r.endsWith("?"),c=r.replace(/\?$/,"");if(o.length===0)return s?[c,""]:[c];let d=nv(o.join("/")),h=[];return h.push(...d.map(p=>p===""?c:[c,p].join("/"))),s&&h.push(...d),h.map(p=>n.startsWith("/")&&p===""?"/":p)}function n2(n){n.sort((i,r)=>i.score!==r.score?r.score-i.score:c2(i.routesMeta.map(o=>o.childrenIndex),r.routesMeta.map(o=>o.childrenIndex)))}var a2=/^:[\w-]+$/,i2=3,r2=2,l2=1,o2=10,s2=-2,_0=n=>n==="*";function u2(n,i){let r=n.split("/"),o=r.length;return r.some(_0)&&(o+=s2),i&&(o+=r2),r.filter(s=>!_0(s)).reduce((s,c)=>s+(a2.test(c)?i2:c===""?l2:o2),o)}function c2(n,i){return n.length===i.length&&n.slice(0,-1).every((o,s)=>o===i[s])?n[n.length-1]-i[i.length-1]:0}function f2(n,i,r=!1){let{routesMeta:o}=n,s={},c="/",d=[];for(let h=0;h<o.length;++h){let p=o[h],y=h===o.length-1,g=c==="/"?i:i.slice(c.length)||"/",b={path:p.relativePath,caseSensitive:p.caseSensitive,end:y},A=p.matcher&&p.compiledParams?av(b,g,p.matcher,p.compiledParams):nu(b,g),M=p.route;if(!A&&y&&r&&!o[o.length-1].route.index&&(A=nu({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},g)),!A)return null;Object.assign(s,A.params),d.push({params:s,pathname:$n([c,A.pathname]),pathnameBase:m2($n([c,A.pathnameBase])),route:M}),A.pathnameBase!=="/"&&(c=$n([c,A.pathnameBase]))}return d}function nu(n,i){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[r,o]=iv(n.path,n.caseSensitive,n.end);return av(n,i,r,o)}function av(n,i,r,o){let s=i.match(r);if(!s)return null;let c=s[0],d=c.replace(/(.)\/+$/,"$1"),h=s.slice(1);return{params:o.reduce((y,{paramName:g,isOptional:b},A)=>{if(g==="*"){let z=h[A]||"";d=c.slice(0,c.length-z.length).replace(/(.)\/+$/,"$1")}const M=h[A];return b&&!M?y[g]=void 0:y[g]=(M||"").replace(/%2F/g,"/"),y},{}),pathname:c,pathnameBase:d,pattern:n}}function iv(n,i=!1,r=!0){Cn(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let o=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,p,y,g)=>{if(o.push({paramName:h,isOptional:p!=null}),p){let b=g.charAt(y+d.length);return b&&b!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return n.endsWith("*")?(o.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,i?void 0:"i"),o]}function d2(n){try{return n.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Cn(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),n}}function Ea(n,i){if(i==="/")return n;if(!n.toLowerCase().startsWith(i.toLowerCase()))return null;let r=i.endsWith("/")?i.length-1:i.length,o=n.charAt(r);return o&&o!=="/"?null:n.slice(r)||"/"}function h2(n,i="/"){let{pathname:r,search:o="",hash:s=""}=typeof n=="string"?Mr(n):n,c;return r?(r=rv(r),r.startsWith("/")?c=w0(r.substring(1),"/"):c=w0(r,i)):c=i,{pathname:c,search:y2(o),hash:g2(s)}}function w0(n,i){let r=au(i).split("/");return n.split("/").forEach(s=>{s===".."?r.length>1&&r.pop():s!=="."&&r.push(s)}),r.length>1?r.join("/"):"/"}function md(n,i,r,o){return`Cannot include a '${n}' character in a manually specified \`to.${i}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${r}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function p2(n){return n.filter((i,r)=>r===0||i.route.path&&i.route.path.length>0)}function wh(n){let i=p2(n);return i.map((r,o)=>o===i.length-1?r.pathname:r.pathnameBase)}function xu(n,i,r,o=!1){let s;typeof n=="string"?s=Mr(n):(s={...n},rt(!s.pathname||!s.pathname.includes("?"),md("?","pathname","search",s)),rt(!s.pathname||!s.pathname.includes("#"),md("#","pathname","hash",s)),rt(!s.search||!s.search.includes("#"),md("#","search","hash",s)));let c=n===""||s.pathname==="",d=c?"/":s.pathname,h;if(d==null)h=r;else{let b=i.length-1;if(!o&&d.startsWith("..")){let A=d.split("/");for(;A[0]==="..";)A.shift(),b-=1;s.pathname=A.join("/")}h=b>=0?i[b]:"/"}let p=h2(s,h),y=d&&d!=="/"&&d.endsWith("/"),g=(c||d===".")&&r.endsWith("/");return!p.pathname.endsWith("/")&&(y||g)&&(p.pathname+="/"),p}var rv=n=>n.replace(/[\\/]{2,}/g,"/"),$n=n=>rv(n.join("/")),au=n=>n.replace(/\/+$/,""),m2=n=>au(n).replace(/^\/*/,"/"),y2=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,g2=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n,b2=class{constructor(n,i,r,o=!1){this.status=n,this.statusText=i||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}};function v2(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}function x2(n){let i=n.map(r=>r.route.path).filter(Boolean);return $n(i)||"/"}var lv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function ov(n,i){let r=n;if(typeof r!="string"||!_h.test(r))return{absoluteURL:void 0,isExternal:!1,to:r};let o=r,s=!1;if(lv)try{let c=new URL(window.location.href),d=Wb.test(r)?new URL(K_(r,c.protocol)):new URL(r),h=Ea(d.pathname,i);d.origin===c.origin&&h!=null?r=h+d.search+d.hash:s=!0}catch{Cn(!1,`<Link to="${r}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:s,to:r}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var sv=["POST","PUT","PATCH","DELETE"];new Set(sv);var S2=["GET",...sv];new Set(S2);var _2=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function w2(n){try{return _2.includes(new URL(n).protocol)}catch{return!1}}var jr=k.createContext(null);jr.displayName="DataRouter";var Su=k.createContext(null);Su.displayName="DataRouterState";var uv=k.createContext(!1);function E2(){return k.useContext(uv)}var cv=k.createContext({isTransitioning:!1});cv.displayName="ViewTransition";var T2=k.createContext(new Map);T2.displayName="Fetchers";var R2=k.createContext(null);R2.displayName="Await";var yn=k.createContext(null);yn.displayName="Navigation";var to=k.createContext(null);to.displayName="Location";var zn=k.createContext({outlet:null,matches:[],isDataRoute:!1});zn.displayName="Route";var Eh=k.createContext(null);Eh.displayName="RouteError";var fv="REACT_ROUTER_ERROR",A2="REDIRECT",O2="ROUTE_ERROR_RESPONSE";function C2(n){if(n.startsWith(`${fv}:${A2}:{`))try{let i=JSON.parse(n.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function D2(n){if(n.startsWith(`${fv}:${O2}:{`))try{let i=JSON.parse(n.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new b2(i.status,i.statusText,i.data)}catch{}}function z2(n,{relative:i}={}){rt(kr(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=k.useContext(yn),{hash:s,pathname:c,search:d}=no(n,{relative:i}),h=c;return r!=="/"&&(h=c==="/"?r:$n([r,c])),o.createHref({pathname:h,search:d,hash:s})}function kr(){return k.useContext(to)!=null}function Gn(){return rt(kr(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(to).location}var dv="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function hv(n){k.useContext(yn).static||k.useLayoutEffect(n)}function Th(){let{isDataRoute:n}=k.useContext(zn);return n?Q2():M2()}function M2(){rt(kr(),"useNavigate() may be used only in the context of a <Router> component.");let n=k.useContext(jr),{basename:i,navigator:r}=k.useContext(yn),{matches:o}=k.useContext(zn),{pathname:s}=Gn(),c=JSON.stringify(wh(o)),d=k.useRef(!1);return hv(()=>{d.current=!0}),k.useCallback((p,y={})=>{if(Cn(d.current,dv),!d.current)return;if(typeof p=="number"){r.go(p);return}let g=xu(p,JSON.parse(c),s,y.relative==="path");n==null&&i!=="/"&&(g.pathname=g.pathname==="/"?i:$n([i,g.pathname])),(y.replace?r.replace:r.push)(g,y.state,y)},[i,r,c,s,n])}var j2=k.createContext(null);function k2(n){let i=k.useContext(zn).outlet;return k.useMemo(()=>i&&k.createElement(j2.Provider,{value:n},i),[i,n])}function N2(){let{matches:n}=k.useContext(zn);return n[n.length-1]?.params??{}}function no(n,{relative:i}={}){let{matches:r}=k.useContext(zn),{pathname:o}=Gn(),s=JSON.stringify(wh(r));return k.useMemo(()=>xu(n,JSON.parse(s),o,i==="path"),[n,s,o,i])}function U2(n,i){return pv(n,i)}function pv(n,i,r){rt(kr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=k.useContext(yn),{matches:s}=k.useContext(zn),c=s[s.length-1],d=c?c.params:{},h=c?c.pathname:"/",p=c?c.pathnameBase:"/",y=c&&c.route;{let S=y&&y.path||"";yv(h,!y||S.endsWith("*")||S.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${S}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${S}"> to <Route path="${S==="/"?"*":`${S}/*`}">.`)}let g=Gn(),b;if(i){let S=typeof i=="string"?Mr(i):i;rt(p==="/"||S.pathname?.startsWith(p),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${S.pathname}" was given in the \`location\` prop.`),b=S}else b=g;let A=b.pathname||"/",M=A;if(p!=="/"){let S=p.replace(/^\//,"").split("/");M="/"+A.replace(/^\//,"").split("/").slice(S.length).join("/")}let z=r&&r.state.matches.length?r.state.matches.map(S=>Object.assign(S,{route:r.manifest[S.route.id]||S.route})):ev(n,{pathname:M});Cn(y||z!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Cn(z==null||z[z.length-1].route.element!==void 0||z[z.length-1].route.Component!==void 0||z[z.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let C=$2(z&&z.map(S=>Object.assign({},S,{params:Object.assign({},d,S.params),pathname:$n([p,o.encodeLocation?o.encodeLocation(S.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?p:$n([p,o.encodeLocation?o.encodeLocation(S.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:S.pathnameBase])})),s,r);return i&&C?k.createElement(to.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...b},navigationType:"POP"}},C):C}function B2(){let n=F2(),i=v2(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),r=n instanceof Error?n.stack:null,o="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:o},c={padding:"2px 4px",backgroundColor:o},d=null;return console.error("Error handled by React Router default ErrorBoundary:",n),d=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:c},"ErrorBoundary")," or"," ",k.createElement("code",{style:c},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},i),r?k.createElement("pre",{style:s},r):null,d)}var L2=k.createElement(B2,null),mv=class extends k.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,i){return i.location!==n.location||i.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:i.error,location:i.location,revalidation:n.revalidation||i.revalidation}}componentDidCatch(n,i){this.props.onError?this.props.onError(n,i):console.error("React Router caught the following error during render",n)}render(){let n=this.state.error;if(this.context&&typeof n=="object"&&n&&"digest"in n&&typeof n.digest=="string"){const r=D2(n.digest);r&&(n=r)}let i=n!==void 0?k.createElement(zn.Provider,{value:this.props.routeContext},k.createElement(Eh.Provider,{value:n,children:this.props.component})):this.props.children;return this.context?k.createElement(H2,{error:n},i):i}};mv.contextType=uv;var yd=new WeakMap;function H2({children:n,error:i}){let{basename:r}=k.useContext(yn);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let o=C2(i.digest);if(o){let s=yd.get(i);if(s)throw s;let c=ov(o.location,r),d=c.absoluteURL||c.to;if(w2(d))throw new Error("Invalid redirect location");if(lv&&!yd.get(i))if(c.isExternal||o.reloadDocument)window.location.href=d;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:o.replace}));throw yd.set(i,h),h}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d}`})}}return n}function q2({routeContext:n,match:i,children:r}){let o=k.useContext(jr);return o&&o.static&&o.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=i.route.id),k.createElement(zn.Provider,{value:n},r)}function $2(n,i=[],r){let o=r?.state;if(n==null){if(!o)return null;if(o.errors)n=o.matches;else if(i.length===0&&!o.initialized&&o.matches.length>0)n=o.matches;else return null}let s=n,c=o?.errors;if(c!=null){let g=s.findIndex(b=>b.route.id&&c?.[b.route.id]!==void 0);rt(g>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),s=s.slice(0,Math.min(s.length,g+1))}let d=!1,h=-1;if(r&&o){d=o.renderFallback;for(let g=0;g<s.length;g++){let b=s[g];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(h=g),b.route.id){let{loaderData:A,errors:M}=o,z=b.route.loader&&!A.hasOwnProperty(b.route.id)&&(!M||M[b.route.id]===void 0);if(b.route.lazy||z){r.isStatic&&(d=!0),h>=0?s=s.slice(0,h+1):s=[s[0]];break}}}}let p=r?.onError,y=o&&p?(g,b)=>{p(g,{location:o.location,params:o.matches?.[0]?.params??{},pattern:x2(o.matches),errorInfo:b})}:void 0;return s.reduceRight((g,b,A)=>{let M,z=!1,C=null,S=null;o&&(M=c&&b.route.id?c[b.route.id]:void 0,C=b.route.errorElement||L2,d&&(h<0&&A===0?(yv("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),z=!0,S=null):h===A&&(z=!0,S=b.route.hydrateFallbackElement||null)));let T=i.concat(s.slice(0,A+1)),_=()=>{let O;return M?O=C:z?O=S:b.route.Component?O=k.createElement(b.route.Component,null):b.route.element?O=b.route.element:O=g,k.createElement(q2,{match:b,routeContext:{outlet:g,matches:T,isDataRoute:o!=null},children:O})};return o&&(b.route.ErrorBoundary||b.route.errorElement||A===0)?k.createElement(mv,{location:o.location,revalidation:o.revalidation,component:C,error:M,children:_(),routeContext:{outlet:null,matches:T,isDataRoute:!0},onError:y}):_()},null)}function Rh(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function V2(n){let i=k.useContext(jr);return rt(i,Rh(n)),i}function Y2(n){let i=k.useContext(Su);return rt(i,Rh(n)),i}function G2(n){let i=k.useContext(zn);return rt(i,Rh(n)),i}function Ah(n){let i=G2(n),r=i.matches[i.matches.length-1];return rt(r.route.id,`${n} can only be used on routes that contain a unique "id"`),r.route.id}function X2(){return Ah("useRouteId")}function F2(){let n=k.useContext(Eh),i=Y2("useRouteError"),r=Ah("useRouteError");return n!==void 0?n:i.errors?.[r]}function Q2(){let{router:n}=V2("useNavigate"),i=Ah("useNavigate"),r=k.useRef(!1);return hv(()=>{r.current=!0}),k.useCallback(async(s,c={})=>{Cn(r.current,dv),r.current&&(typeof s=="number"?await n.navigate(s):await n.navigate(s,{fromRouteId:i,...c}))},[n,i])}var E0={};function yv(n,i,r){!i&&!E0[n]&&(E0[n]=!0,Cn(!1,r))}k.memo(Z2);function Z2({routes:n,manifest:i,future:r,state:o,isStatic:s,onError:c}){return pv(n,void 0,{manifest:i,state:o,isStatic:s,onError:c})}function gv({to:n,replace:i,state:r,relative:o}){rt(kr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=k.useContext(yn);Cn(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=k.useContext(zn),{pathname:d}=Gn(),h=Th(),p=xu(n,wh(c),d,o==="path"),y=JSON.stringify(p);return k.useEffect(()=>{h(JSON.parse(y),{replace:i,state:r,relative:o})},[h,y,o,i,r]),null}function bv(n){return k2(n.context)}function Sa(n){rt(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function K2({basename:n="/",children:i=null,location:r,navigationType:o="POP",navigator:s,static:c=!1,useTransitions:d}){rt(!kr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=n.replace(/^\/*/,"/"),p=k.useMemo(()=>({basename:h,navigator:s,static:c,useTransitions:d,future:{}}),[h,s,c,d]);typeof r=="string"&&(r=Mr(r));let{pathname:y="/",search:g="",hash:b="",state:A=null,key:M="default",mask:z}=r,C=k.useMemo(()=>{let S=Ea(y,h);return S==null?null:{location:{pathname:S,search:g,hash:b,state:A,key:M,mask:z},navigationType:o}},[h,y,g,b,A,M,o,z]);return Cn(C!=null,`<Router basename="${h}"> is not able to match the URL "${y}${g}${b}" because it does not start with the basename, so the <Router> won't render anything.`),C==null?null:k.createElement(yn.Provider,{value:p},k.createElement(to.Provider,{children:i,value:C}))}function P2({children:n,location:i}){return U2(Vd(n),i)}function Vd(n,i=[]){let r=[];return k.Children.forEach(n,(o,s)=>{if(!k.isValidElement(o))return;let c=[...i,s];if(o.type===k.Fragment){r.push.apply(r,Vd(o.props.children,c));return}rt(o.type===Sa,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),rt(!o.props.index||!o.props.children,"An index route cannot have child routes.");let d={id:o.props.id||c.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(d.children=Vd(o.props.children,c)),r.push(d)}),r}var Ls="get",Hs="application/x-www-form-urlencoded";function _u(n){return typeof HTMLElement<"u"&&n instanceof HTMLElement}function J2(n){return _u(n)&&n.tagName.toLowerCase()==="button"}function I2(n){return _u(n)&&n.tagName.toLowerCase()==="form"}function W2(n){return _u(n)&&n.tagName.toLowerCase()==="input"}function ew(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function tw(n,i){return n.button===0&&(!i||i==="_self")&&!ew(n)}function Yd(n=""){return new URLSearchParams(typeof n=="string"||Array.isArray(n)||n instanceof URLSearchParams?n:Object.keys(n).reduce((i,r)=>{let o=n[r];return i.concat(Array.isArray(o)?o.map(s=>[r,s]):[[r,o]])},[]))}function nw(n,i){let r=Yd(n);return i&&i.forEach((o,s)=>{r.has(s)||i.getAll(s).forEach(c=>{r.append(s,c)})}),r}var Ds=null;function aw(){if(Ds===null)try{new FormData(document.createElement("form"),0),Ds=!1}catch{Ds=!0}return Ds}var iw=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gd(n){return n!=null&&!iw.has(n)?(Cn(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hs}"`),null):n}function rw(n,i){let r,o,s,c,d;if(I2(n)){let h=n.getAttribute("action");o=h?Ea(h,i):null,r=n.getAttribute("method")||Ls,s=gd(n.getAttribute("enctype"))||Hs,c=new FormData(n)}else if(J2(n)||W2(n)&&(n.type==="submit"||n.type==="image")){let h=n.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||h.getAttribute("action");if(o=p?Ea(p,i):null,r=n.getAttribute("formmethod")||h.getAttribute("method")||Ls,s=gd(n.getAttribute("formenctype"))||gd(h.getAttribute("enctype"))||Hs,c=new FormData(h,n),!aw()){let{name:y,type:g,value:b}=n;if(g==="image"){let A=y?`${y}.`:"";c.append(`${A}x`,"0"),c.append(`${A}y`,"0")}else y&&c.append(y,b)}}else{if(_u(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');r=Ls,o=null,s=Hs,d=n}return c&&s==="text/plain"&&(d=c,c=void 0),{action:o,method:r.toLowerCase(),encType:s,formData:c,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Oh(n,i){if(n===!1||n===null||typeof n>"u")throw new Error(i)}function vv(n,i,r,o){let s=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return r?s.pathname.endsWith("/")?s.pathname=`${s.pathname}_.${o}`:s.pathname=`${s.pathname}.${o}`:s.pathname==="/"?s.pathname=`_root.${o}`:i&&Ea(s.pathname,i)==="/"?s.pathname=`${au(i)}/_root.${o}`:s.pathname=`${au(s.pathname)}.${o}`,s}async function lw(n,i){if(n.id in i)return i[n.id];try{let r=await import(n.module);return i[n.id]=r,r}catch(r){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(r),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ow(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function sw(n,i,r){let o=await Promise.all(n.map(async s=>{let c=i.routes[s.route.id];if(c){let d=await lw(c,r);return d.links?d.links():[]}return[]}));return dw(o.flat(1).filter(ow).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function T0(n,i,r,o,s,c){let d=(p,y)=>r[y]?p.route.id!==r[y].route.id:!0,h=(p,y)=>r[y].pathname!==p.pathname||r[y].route.path?.endsWith("*")&&r[y].params["*"]!==p.params["*"];return c==="assets"?i.filter((p,y)=>d(p,y)||h(p,y)):c==="data"?i.filter((p,y)=>{let g=o.routes[p.route.id];if(!g||!g.hasLoader)return!1;if(d(p,y)||h(p,y))return!0;if(p.route.shouldRevalidate){let b=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:r[0]?.params||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof b=="boolean")return b}return!0}):[]}function uw(n,i,{includeHydrateFallback:r}={}){return cw(n.map(o=>{let s=i.routes[o.route.id];if(!s)return[];let c=[s.module];return s.clientActionModule&&(c=c.concat(s.clientActionModule)),s.clientLoaderModule&&(c=c.concat(s.clientLoaderModule)),r&&s.hydrateFallbackModule&&(c=c.concat(s.hydrateFallbackModule)),s.imports&&(c=c.concat(s.imports)),c}).flat(1))}function cw(n){return[...new Set(n)]}function fw(n){let i={},r=Object.keys(n).sort();for(let o of r)i[o]=n[o];return i}function dw(n,i){let r=new Set;return new Set(i),n.reduce((o,s)=>{let c=JSON.stringify(fw(s));return r.has(c)||(r.add(c),o.push({key:c,link:s})),o},[])}function Ch(){let n=k.useContext(jr);return Oh(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function hw(){let n=k.useContext(Su);return Oh(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var Dh=k.createContext(void 0);Dh.displayName="FrameworkContext";function wu(){let n=k.useContext(Dh);return Oh(n,"You must render this element inside a <HydratedRouter> element"),n}function pw(n,i){let r=k.useContext(Dh),[o,s]=k.useState(!1),[c,d]=k.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:y,onMouseLeave:g,onTouchStart:b}=i,A=k.useRef(null);k.useEffect(()=>{if(n==="render"&&d(!0),n==="viewport"){let C=T=>{T.forEach(_=>{d(_.isIntersecting)})},S=new IntersectionObserver(C,{threshold:.5});return A.current&&S.observe(A.current),()=>{S.disconnect()}}},[n]),k.useEffect(()=>{if(o){let C=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(C)}}},[o]);let M=()=>{s(!0)},z=()=>{s(!1),d(!1)};return r?n!=="intent"?[c,A,{}]:[c,A,{onFocus:jl(h,M),onBlur:jl(p,z),onMouseEnter:jl(y,M),onMouseLeave:jl(g,z),onTouchStart:jl(b,M)}]:[!1,A,{}]}function jl(n,i){return r=>{n&&n(r),r.defaultPrevented||i(r)}}function mw({page:n,...i}){let r=E2(),{nonce:o}=wu(),{router:s}=Ch(),c=k.useMemo(()=>ev(s.routes,n,s.basename),[s.routes,n,s.basename]);return c?(i.nonce==null&&o&&(i={...i,nonce:o}),r?k.createElement(gw,{page:n,matches:c,...i}):k.createElement(bw,{page:n,matches:c,...i})):null}function yw(n){let{manifest:i,routeModules:r}=wu(),[o,s]=k.useState([]);return k.useEffect(()=>{let c=!1;return sw(n,i,r).then(d=>{c||s(d)}),()=>{c=!0}},[n,i,r]),o}function gw({page:n,matches:i,...r}){let o=Gn(),{future:s}=wu(),{basename:c}=Ch(),d=k.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let h=vv(n,c,s.v8_trailingSlashAwareDataRequests,"rsc"),p=!1,y=[];for(let g of i)typeof g.route.shouldRevalidate=="function"?p=!0:y.push(g.route.id);return p&&y.length>0&&h.searchParams.set("_routes",y.join(",")),[h.pathname+h.search]},[c,s.v8_trailingSlashAwareDataRequests,n,o,i]);return k.createElement(k.Fragment,null,d.map(h=>k.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...r})))}function bw({page:n,matches:i,...r}){let o=Gn(),{future:s,manifest:c,routeModules:d}=wu(),{basename:h}=Ch(),{loaderData:p,matches:y}=hw(),g=k.useMemo(()=>T0(n,i,y,c,o,"data"),[n,i,y,c,o]),b=k.useMemo(()=>T0(n,i,y,c,o,"assets"),[n,i,y,c,o]),A=k.useMemo(()=>{if(n===o.pathname+o.search+o.hash)return[];let C=new Set,S=!1;if(i.forEach(_=>{let O=c.routes[_.route.id];!O||!O.hasLoader||(!g.some(L=>L.route.id===_.route.id)&&_.route.id in p&&d[_.route.id]?.shouldRevalidate||O.hasClientLoader?S=!0:C.add(_.route.id))}),C.size===0)return[];let T=vv(n,h,s.v8_trailingSlashAwareDataRequests,"data");return S&&C.size>0&&T.searchParams.set("_routes",i.filter(_=>C.has(_.route.id)).map(_=>_.route.id).join(",")),[T.pathname+T.search]},[h,s.v8_trailingSlashAwareDataRequests,p,o,c,g,i,n,d]),M=k.useMemo(()=>uw(b,c),[b,c]),z=yw(b);return k.createElement(k.Fragment,null,A.map(C=>k.createElement("link",{key:C,rel:"prefetch",as:"fetch",href:C,...r})),M.map(C=>k.createElement("link",{key:C,rel:"modulepreload",href:C,...r})),z.map(({key:C,link:S})=>k.createElement("link",{key:C,nonce:r.nonce,...S,crossOrigin:S.crossOrigin??r.crossOrigin})))}function vw(...n){return i=>{n.forEach(r=>{typeof r=="function"?r(i):r!=null&&(r.current=i)})}}var xw=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{xw&&(window.__reactRouterVersion="7.18.1")}catch{}function Sw({basename:n,children:i,useTransitions:r,window:o}){let s=k.useRef();s.current==null&&(s.current=P_({window:o,v5Compat:!0}));let c=s.current,[d,h]=k.useState({action:c.action,location:c.location}),p=k.useCallback(y=>{r===!1?h(y):k.startTransition(()=>h(y))},[r]);return k.useLayoutEffect(()=>c.listen(p),[c,p]),k.createElement(K2,{basename:n,children:i,location:d.location,navigationType:d.action,navigator:c,useTransitions:r})}var xv=k.forwardRef(function({onClick:i,discover:r="render",prefetch:o="none",relative:s,reloadDocument:c,replace:d,mask:h,state:p,target:y,to:g,preventScrollReset:b,viewTransition:A,defaultShouldRevalidate:M,...z},C){let{basename:S,navigator:T,useTransitions:_}=k.useContext(yn),O=typeof g=="string"&&_h.test(g),L=ov(g,S);g=L.to;let Y=z2(g,{relative:s}),P=Gn(),q=null;if(h){let Ee=xu(h,[],P.mask?P.mask.pathname:"/",!0);S!=="/"&&(Ee.pathname=Ee.pathname==="/"?S:$n([S,Ee.pathname])),q=T.createHref(Ee)}let[W,ge,Te]=pw(o,z),Se=Ew(g,{replace:d,mask:h,state:p,target:y,preventScrollReset:b,relative:s,viewTransition:A,defaultShouldRevalidate:M,useTransitions:_});function me(Ee){i&&i(Ee),Ee.defaultPrevented||Se(Ee)}let ue=!(L.isExternal||c),be=k.createElement("a",{...z,...Te,href:(ue?q:void 0)||L.absoluteURL||Y,onClick:ue?me:i,ref:vw(C,ge),target:y,"data-discover":!O&&r==="render"?"true":void 0});return W&&!O?k.createElement(k.Fragment,null,be,k.createElement(mw,{page:Y})):be});xv.displayName="Link";var ki=k.forwardRef(function({"aria-current":i="page",caseSensitive:r=!1,className:o="",end:s=!1,style:c,to:d,viewTransition:h,children:p,...y},g){let b=no(d,{relative:y.relative}),A=Gn(),M=k.useContext(Su),{navigator:z,basename:C}=k.useContext(yn),S=M!=null&&Dw(b)&&h===!0,T=z.encodeLocation?z.encodeLocation(b).pathname:b.pathname,_=A.pathname,O=M&&M.navigation&&M.navigation.location?M.navigation.location.pathname:null;r||(_=_.toLowerCase(),O=O?O.toLowerCase():null,T=T.toLowerCase()),O&&C&&(O=Ea(O,C)||O);const L=T!=="/"&&T.endsWith("/")?T.length-1:T.length;let Y=_===T||!s&&_.startsWith(T)&&_.charAt(L)==="/",P=O!=null&&(O===T||!s&&O.startsWith(T)&&O.charAt(T.length)==="/"),q={isActive:Y,isPending:P,isTransitioning:S},W=Y?i:void 0,ge;typeof o=="function"?ge=o(q):ge=[o,Y?"active":null,P?"pending":null,S?"transitioning":null].filter(Boolean).join(" ");let Te=typeof c=="function"?c(q):c;return k.createElement(xv,{...y,"aria-current":W,className:ge,ref:g,style:Te,to:d,viewTransition:h},typeof p=="function"?p(q):p)});ki.displayName="NavLink";var _w=k.forwardRef(({discover:n="render",fetcherKey:i,navigate:r,reloadDocument:o,replace:s,state:c,method:d=Ls,action:h,onSubmit:p,relative:y,preventScrollReset:g,viewTransition:b,defaultShouldRevalidate:A,...M},z)=>{let{useTransitions:C}=k.useContext(yn),S=Ow(),T=Cw(h,{relative:y}),_=d.toLowerCase()==="get"?"get":"post",O=typeof h=="string"&&_h.test(h),L=Y=>{if(p&&p(Y),Y.defaultPrevented)return;Y.preventDefault();let P=Y.nativeEvent.submitter,q=P?.getAttribute("formmethod")||d,W=()=>S(P||Y.currentTarget,{fetcherKey:i,method:q,navigate:r,replace:s,state:c,relative:y,preventScrollReset:g,viewTransition:b,defaultShouldRevalidate:A});C&&r!==!1?k.startTransition(()=>W()):W()};return k.createElement("form",{ref:z,method:_,action:T,onSubmit:o?p:L,...M,"data-discover":!O&&n==="render"?"true":void 0})});_w.displayName="Form";function ww(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Sv(n){let i=k.useContext(jr);return rt(i,ww(n)),i}function Ew(n,{target:i,replace:r,mask:o,state:s,preventScrollReset:c,relative:d,viewTransition:h,defaultShouldRevalidate:p,useTransitions:y}={}){let g=Th(),b=Gn(),A=no(n,{relative:d});return k.useCallback(M=>{if(tw(M,i)){M.preventDefault();let z=r!==void 0?r:Ql(b)===Ql(A),C=()=>g(n,{replace:z,mask:o,state:s,preventScrollReset:c,relative:d,viewTransition:h,defaultShouldRevalidate:p});y?k.startTransition(()=>C()):C()}},[b,g,A,r,o,s,i,n,c,d,h,p,y])}function Tw(n){Cn(typeof URLSearchParams<"u","You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.");let i=k.useRef(Yd(n)),r=k.useRef(!1),o=Gn(),s=k.useMemo(()=>nw(o.search,r.current?null:i.current),[o.search]),c=Th(),d=k.useCallback((h,p)=>{const y=Yd(typeof h=="function"?h(new URLSearchParams(s)):h);r.current=!0,c("?"+y,p)},[c,s]);return[s,d]}var Rw=0,Aw=()=>`__${String(++Rw)}__`;function Ow(){let{router:n}=Sv("useSubmit"),{basename:i}=k.useContext(yn),r=X2(),o=n.fetch,s=n.navigate;return k.useCallback(async(c,d={})=>{let{action:h,method:p,encType:y,formData:g,body:b}=rw(c,i);if(d.navigate===!1){let A=d.fetcherKey||Aw();await o(A,r,d.action||h,{defaultShouldRevalidate:d.defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:g,body:b,formMethod:d.method||p,formEncType:d.encType||y,flushSync:d.flushSync})}else await s(d.action||h,{defaultShouldRevalidate:d.defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:g,body:b,formMethod:d.method||p,formEncType:d.encType||y,replace:d.replace,state:d.state,fromRouteId:r,flushSync:d.flushSync,viewTransition:d.viewTransition})},[o,s,i,r])}function Cw(n,{relative:i}={}){let{basename:r}=k.useContext(yn),o=k.useContext(zn);rt(o,"useFormAction must be used inside a RouteContext");let[s]=o.matches.slice(-1),c={...no(n||".",{relative:i})},d=Gn();if(n==null){c.search=d.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(g=>g==="")){h.delete("index"),p.filter(b=>b).forEach(b=>h.append("index",b));let g=h.toString();c.search=g?`?${g}`:""}}return(!n||n===".")&&s.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r!=="/"&&(c.pathname=c.pathname==="/"?r:$n([r,c.pathname])),Ql(c)}function Dw(n,{relative:i}={}){let r=k.useContext(cv);rt(r!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=Sv("useViewTransitionState"),s=no(n,{relative:i});if(!r.isTransitioning)return!1;let c=Ea(r.currentLocation.pathname,o)||r.currentLocation.pathname,d=Ea(r.nextLocation.pathname,o)||r.nextLocation.pathname;return nu(s.pathname,d)!=null||nu(s.pathname,c)!=null}var zw=Ib(),tt="-ms-",Vl="-moz-",Ge="-webkit-",_v="comm",Eu="rule",zh="decl",Mw="@import",jw="@namespace",wv="@keyframes",kw="@layer",Ev=Math.abs,Mh=String.fromCharCode,Gd=Object.assign;function Nw(n,i){return St(n,0)^45?(((i<<2^St(n,0))<<2^St(n,1))<<2^St(n,2))<<2^St(n,3):0}function Tv(n){return n.trim()}function _a(n,i){return(n=i.exec(n))?n[0]:n}function je(n,i,r){return n.replace(i,r)}function qs(n,i,r){return n.indexOf(i,r)}function St(n,i){return n.charCodeAt(i)|0}function Ci(n,i,r){return n.slice(i,r)}function Ln(n){return n.length}function Rv(n){return n.length}function Ll(n,i){return i.push(n),n}function Uw(n,i){return n.map(i).join("")}function R0(n,i){return n.filter(function(r){return!_a(r,i)})}var Tu=1,Rr=1,Av=0,Dn=0,bt=0,Nr="";function Ru(n,i,r,o,s,c,d,h){return{value:n,root:i,parent:r,type:o,props:s,children:c,line:Tu,column:Rr,length:d,return:"",siblings:h}}function ei(n,i){return Gd(Ru("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},i)}function xr(n){for(;n.root;)n=ei(n.root,{children:[n]});Ll(n,n.siblings)}function Bw(){return bt}function Lw(){return bt=Dn>0?St(Nr,--Dn):0,Rr--,bt===10&&(Rr=1,Tu--),bt}function Vn(){return bt=Dn<Av?St(Nr,Dn++):0,Rr++,bt===10&&(Rr=1,Tu++),bt}function ti(){return St(Nr,Dn)}function $s(){return Dn}function Au(n,i){return Ci(Nr,n,i)}function Zl(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Hw(n){return Tu=Rr=1,Av=Ln(Nr=n),Dn=0,[]}function qw(n){return Nr="",n}function bd(n){return Tv(Au(Dn-1,Xd(n===91?n+2:n===40?n+1:n)))}function $w(n){for(;(bt=ti())&&bt<33;)Vn();return Zl(n)>2||Zl(bt)>3?"":" "}function Vw(n,i){for(;--i&&Vn()&&!(bt<48||bt>102||bt>57&&bt<65||bt>70&&bt<97););return Au(n,$s()+(i<6&&ti()==32&&Vn()==32))}function Xd(n){for(;Vn();)switch(bt){case n:return Dn;case 34:case 39:n!==34&&n!==39&&Xd(bt);break;case 40:n===41&&Xd(n);break;case 92:Vn();break}return Dn}function Yw(n,i){for(;Vn()&&n+bt!==57;)if(n+bt===84&&ti()===47)break;return"/*"+Au(i,Dn-1)+"*"+Mh(n===47?n:Vn())}function Gw(n){for(;!Zl(ti());)Vn();return Au(n,Dn)}function Xw(n){return qw(Vs("",null,null,null,[""],n=Hw(n),0,[0],n))}function Vs(n,i,r,o,s,c,d,h,p){for(var y=0,g=0,b=d,A=0,M=0,z=0,C=1,S=1,T=1,_=0,O="",L=s,Y=c,P=o,q=O;S;)switch(z=_,_=Vn()){case 40:if(z!=108&&St(q,b-1)==58){qs(q+=je(bd(_),"&","&\f"),"&\f",Ev(y?h[y-1]:0))!=-1&&(T=-1);break}case 34:case 39:case 91:q+=bd(_);break;case 9:case 10:case 13:case 32:q+=$w(z);break;case 92:q+=Vw($s()-1,7);continue;case 47:switch(ti()){case 42:case 47:Ll(Fw(Yw(Vn(),$s()),i,r,p),p),(Zl(z||1)==5||Zl(ti()||1)==5)&&Ln(q)&&Ci(q,-1,void 0)!==" "&&(q+=" ");break;default:q+="/"}break;case 123*C:h[y++]=Ln(q)*T;case 125*C:case 59:case 0:switch(_){case 0:case 125:S=0;case 59+g:T==-1&&(q=je(q,/\f/g,"")),M>0&&(Ln(q)-b||C===0&&z===47)&&Ll(M>32?O0(q+";",o,r,b-1,p):O0(je(q," ","")+";",o,r,b-2,p),p);break;case 59:q+=";";default:if(Ll(P=A0(q,i,r,y,g,s,h,O,L=[],Y=[],b,c),c),_===123)if(g===0)Vs(q,i,P,P,L,c,b,h,Y);else{switch(A){case 99:if(St(q,3)===110)break;case 108:if(St(q,2)===97)break;default:g=0;case 100:case 109:case 115:}g?Vs(n,P,P,o&&Ll(A0(n,P,P,0,0,s,h,O,s,L=[],b,Y),Y),s,Y,b,h,o?L:Y):Vs(q,P,P,P,[""],Y,0,h,Y)}}y=g=M=0,C=T=1,O=q="",b=d;break;case 58:b=1+Ln(q),M=z;default:if(C<1){if(_==123)--C;else if(_==125&&C++==0&&Lw()==125)continue}switch(q+=Mh(_),_*C){case 38:T=g>0?1:(q+="\f",-1);break;case 44:h[y++]=(Ln(q)-1)*T,T=1;break;case 64:ti()===45&&(q+=bd(Vn())),A=ti(),g=b=Ln(O=q+=Gw($s())),_++;break;case 45:z===45&&Ln(q)==2&&(C=0)}}return c}function A0(n,i,r,o,s,c,d,h,p,y,g,b){for(var A=s-1,M=s===0?c:[""],z=Rv(M),C=0,S=0,T=0;C<o;++C)for(var _=0,O=Ci(n,A+1,A=Ev(S=d[C])),L=n;_<z;++_)(L=Tv(S>0?M[_]+" "+O:je(O,/&\f/g,M[_])))&&(p[T++]=L);return Ru(n,i,r,s===0?Eu:h,p,y,g,b)}function Fw(n,i,r,o){return Ru(n,i,r,_v,Mh(Bw()),Ci(n,2,-2),0,o)}function O0(n,i,r,o,s){return Ru(n,i,r,zh,Ci(n,0,o),Ci(n,o+1,-1),o,s)}function Ov(n,i,r){switch(Nw(n,i)){case 5103:return Ge+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return Ge+n+n;case 4855:return Ge+n.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+n;case 4789:return Vl+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Ge+n+Vl+n+tt+n+n;case 5936:switch(St(n,i+11)){case 114:return Ge+n+tt+je(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Ge+n+tt+je(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Ge+n+tt+je(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Ge+n+tt+n+n;case 6165:return Ge+n+tt+"flex-"+n+n;case 5187:return Ge+n+je(n,/(\w+).+(:[^]+)/,Ge+"box-$1$2"+tt+"flex-$1$2")+n;case 5443:return Ge+n+tt+"flex-item-"+je(n,/flex-|-self/g,"")+(_a(n,/flex-|baseline/)?"":tt+"grid-row-"+je(n,/flex-|-self/g,""))+n;case 4675:return Ge+n+tt+"flex-line-pack"+je(n,/align-content|flex-|-self/g,"")+n;case 5548:return Ge+n+tt+je(n,"shrink","negative")+n;case 5292:return Ge+n+tt+je(n,"basis","preferred-size")+n;case 6060:return Ge+"box-"+je(n,"-grow","")+Ge+n+tt+je(n,"grow","positive")+n;case 4554:return Ge+je(n,/([^-])(transform)/g,"$1"+Ge+"$2")+n;case 6187:return je(je(je(n,/(zoom-|grab)/,Ge+"$1"),/(image-set)/,Ge+"$1"),n,"")+n;case 5495:case 3959:return je(n,/(image-set\([^]*)/,Ge+"$1$`$1");case 4968:return je(je(n,/(.+:)(flex-)?(.*)/,Ge+"box-pack:$3"+tt+"flex-pack:$3"),/space-between/,"justify")+Ge+n+n;case 4200:if(!_a(n,/flex-|baseline/))return tt+"grid-column-align"+Ci(n,i)+n;break;case 2592:case 3360:return tt+je(n,"template-","")+n;case 4384:case 3616:return r&&r.some(function(o,s){return i=s,_a(o.props,/grid-\w+-end/)})?~qs(n+(r=r[i].value),"span",0)?n:tt+je(n,"-start","")+n+tt+"grid-row-span:"+(~qs(r,"span",0)?_a(r,/\d+/):+_a(r,/\d+/)-+_a(n,/\d+/))+";":tt+je(n,"-start","")+n;case 4896:case 4128:return r&&r.some(function(o){return _a(o.props,/grid-\w+-start/)})?n:tt+je(je(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return je(n,/(.+)-inline(.+)/,Ge+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Ln(n)-1-i>6)switch(St(n,i+1)){case 109:if(St(n,i+4)!==45)break;case 102:return je(n,/(.+:)(.+)-([^]+)/,"$1"+Ge+"$2-$3$1"+Vl+(St(n,i+3)==108?"$3":"$2-$3"))+n;case 115:return~qs(n,"stretch",0)?Ov(je(n,"stretch","fill-available"),i,r)+n:n}break;case 5152:case 5920:return je(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(o,s,c,d,h,p,y){return tt+s+":"+c+y+(d?tt+s+"-span:"+(h?p:+p-+c)+y:"")+n});case 4949:if(St(n,i+6)===121)return je(n,":",":"+Ge)+n;break;case 6444:switch(St(n,St(n,14)===45?18:11)){case 120:return je(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Ge+(St(n,14)===45?"inline-":"")+"box$3$1"+Ge+"$2$3$1"+tt+"$2box$3")+n;case 100:return je(n,":",":"+tt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return je(n,"scroll-","scroll-snap-")+n}return n}function iu(n,i){for(var r="",o=0;o<n.length;o++)r+=i(n[o],o,n,i)||"";return r}function Qw(n,i,r,o){switch(n.type){case kw:if(n.children.length)break;case Mw:case jw:case zh:return n.return=n.return||n.value;case _v:return"";case wv:return n.return=n.value+"{"+iu(n.children,o)+"}";case Eu:if(!Ln(n.value=n.props.join(",")))return""}return Ln(r=iu(n.children,o))?n.return=n.value+"{"+r+"}":""}function Zw(n){var i=Rv(n);return function(r,o,s,c){for(var d="",h=0;h<i;h++)d+=n[h](r,o,s,c)||"";return d}}function Kw(n){return function(i){i.root||(i=i.return)&&n(i)}}function Pw(n,i,r,o){if(n.length>-1&&!n.return)switch(n.type){case zh:n.return=Ov(n.value,n.length,r);return;case wv:return iu([ei(n,{value:je(n.value,"@","@"+Ge)})],o);case Eu:if(n.length)return Uw(r=n.props,function(s){switch(_a(s,o=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":xr(ei(n,{props:[je(s,/:(read-\w+)/,":"+Vl+"$1")]})),xr(ei(n,{props:[s]})),Gd(n,{props:R0(r,o)});break;case"::placeholder":xr(ei(n,{props:[je(s,/:(plac\w+)/,":"+Ge+"input-$1")]})),xr(ei(n,{props:[je(s,/:(plac\w+)/,":"+Vl+"$1")]})),xr(ei(n,{props:[je(s,/:(plac\w+)/,tt+"input-$1")]})),xr(ei(n,{props:[s]})),Gd(n,{props:R0(r,o)});break}return""})}}var Tr={},vd,xd;const Ar=typeof process<"u"&&Tr!==void 0&&(Tr.REACT_APP_SC_ATTR||Tr.SC_ATTR)||"data-styled",Cv="active",Dv="data-styled-version",Ou="6.4.3",jh=`/*!sc*/
`,Yl=typeof window<"u"&&typeof document<"u";function C0(n){if(typeof process<"u"&&Tr!==void 0){const i=Tr[n];if(i!==void 0&&i!=="")return i!=="false"}}const Jw=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:(xd=(vd=C0("REACT_APP_SC_DISABLE_SPEEDY"))!==null&&vd!==void 0?vd:C0("SC_DISABLE_SPEEDY"))!==null&&xd!==void 0?xd:typeof process<"u"&&Tr!==void 0&&!1),zv="sc-keyframes-";function ao(n,...i){return new Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${n} for more information.${i.length>0?` Args: ${i.join(", ")}`:""}`)}let Ys=new Map,ru=new Map,Gs=1;const Hl=n=>{if(Ys.has(n))return Ys.get(n);for(;ru.has(Gs);)Gs++;const i=Gs++;return Ys.set(n,i),ru.set(i,n),i},Iw=n=>ru.get(n),Ww=(n,i)=>{Gs=i+1,Ys.set(n,i),ru.set(i,n)},kh=Object.freeze([]),Or=Object.freeze({});function eE(n,i,r=Or){return n.theme!==r.theme&&n.theme||i||r.theme}const tE=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,nE=/(^-|-$)/g;function Mv(n){return n.replace(tE,"-").replace(nE,"")}const aE=/(a)(d)/gi,D0=n=>String.fromCharCode(n+(n>25?39:97));function Nh(n){let i,r="";for(i=Math.abs(n);i>52;i=i/52|0)r=D0(i%52)+r;return(D0(i%52)+r).replace(aE,"$1-$2")}const Fd=5381,Ti=(n,i)=>{let r=i.length;for(;r;)n=33*n^i.charCodeAt(--r);return n},jv=n=>Ti(Fd,n);function kv(n){return Nh(jv(n)>>>0)}function iE(n){return n.displayName||n.name||"Component"}function Qd(n){return typeof n=="string"&&!0}function rE(n){return Qd(n)?`styled.${n}`:`Styled(${iE(n)})`}const Nv=Symbol.for("react.memo"),lE=Symbol.for("react.forward_ref"),oE={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},sE={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Uv={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},uE={[lE]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[Nv]:Uv};function z0(n){return("type"in(i=n)&&i.type.$$typeof)===Nv?Uv:"$$typeof"in n?uE[n.$$typeof]:oE;var i}const cE=Object.defineProperty,fE=Object.getOwnPropertyNames,dE=Object.getOwnPropertySymbols,hE=Object.getOwnPropertyDescriptor,pE=Object.getPrototypeOf,mE=Object.prototype;function Bv(n,i,r){if(typeof i!="string"){const o=pE(i);o&&o!==mE&&Bv(n,o,r);const s=fE(i).concat(dE(i)),c=z0(n),d=z0(i);for(let h=0;h<s.length;++h){const p=s[h];if(!(p in sE||r&&r[p]||d&&p in d||c&&p in c)){const y=hE(i,p);try{cE(n,p,y)}catch{}}}}return n}function Cu(n){return typeof n=="function"}const yE=Symbol.for("react.forward_ref");function Lv(n){return n!=null&&(typeof n=="object"||typeof n=="function")&&n.$$typeof===yE&&"styledComponentId"in n}function ql(n,i){return n&&i?n+" "+i:n||i||""}function Zd(n,i){return n.join("")}function Kl(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function Kd(n,i,r=!1){if(!r&&!Kl(n)&&!Array.isArray(n))return i;if(Array.isArray(i))for(let o=0;o<i.length;o++)n[o]=Kd(n[o],i[o]);else if(Kl(i))for(const o in i)n[o]=Kd(n[o],i[o]);return n}function Uh(n,i){Object.defineProperty(n,"toString",{value:i})}const gE=class{constructor(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n,this._cGroup=0,this._cIndex=0}indexOfGroup(n){if(n===this._cGroup)return this._cIndex;let i=this._cIndex;if(n>this._cGroup)for(let r=this._cGroup;r<n;r++)i+=this.groupSizes[r];else for(let r=this._cGroup-1;r>=n;r--)i-=this.groupSizes[r];return this._cGroup=n,this._cIndex=i,i}insertRules(n,i){if(n>=this.groupSizes.length){const s=this.groupSizes,c=s.length;let d=c;for(;n>=d;)if(d<<=1,d<0)throw ao(16,`${n}`);this.groupSizes=new Uint32Array(d),this.groupSizes.set(s),this.length=d;for(let h=c;h<d;h++)this.groupSizes[h]=0}let r=this.indexOfGroup(n+1),o=0;for(let s=0,c=i.length;s<c;s++)this.tag.insertRule(r,i[s])&&(this.groupSizes[n]++,r++,o++);o>0&&this._cGroup>n&&(this._cIndex+=o)}clearGroup(n){if(n<this.length){const i=this.groupSizes[n],r=this.indexOfGroup(n),o=r+i;this.groupSizes[n]=0;for(let s=r;s<o;s++)this.tag.deleteRule(r);i>0&&this._cGroup>n&&(this._cIndex-=i)}}getGroup(n){let i="";if(n>=this.length||this.groupSizes[n]===0)return i;const r=this.groupSizes[n],o=this.indexOfGroup(n),s=o+r;for(let c=o;c<s;c++)i+=this.tag.getRule(c)+jh;return i}},bE=`style[${Ar}][${Dv}="${Ou}"]`,vE=new RegExp(`^${Ar}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),M0=n=>typeof ShadowRoot<"u"&&n instanceof ShadowRoot||"host"in n&&n.nodeType===11,Pd=n=>{if(!n)return document;if(M0(n))return n;if("getRootNode"in n){const i=n.getRootNode();if(M0(i))return i}return document},xE=(n,i,r)=>{const o=r.split(",");let s;for(let c=0,d=o.length;c<d;c++)(s=o[c])&&n.registerName(i,s)},SE=(n,i)=>{var r;const o=((r=i.textContent)!==null&&r!==void 0?r:"").split(jh),s=[];for(let c=0,d=o.length;c<d;c++){const h=o[c].trim();if(!h)continue;const p=h.match(vE);if(p){const y=0|parseInt(p[1],10),g=p[2];y!==0&&(Ww(g,y),xE(n,g,p[3]),n.getTag().insertRules(y,s)),s.length=0}else s.push(h)}},Sd=n=>{const i=Pd(n.options.target).querySelectorAll(bE);for(let r=0,o=i.length;r<o;r++){const s=i[r];s&&s.getAttribute(Ar)!==Cv&&(SE(n,s),s.parentNode&&s.parentNode.removeChild(s))}};let kl=!1;function _E(){if(kl!==!1)return kl;if(typeof document<"u"){const n=document.head.querySelector('meta[property="csp-nonce"]');if(n)return kl=n.nonce||n.getAttribute("content")||void 0;const i=document.head.querySelector('meta[name="sc-nonce"]');if(i)return kl=i.getAttribute("content")||void 0}return kl=typeof __webpack_nonce__<"u"?__webpack_nonce__:void 0}const Hv=(n,i)=>{const r=document.head,o=n||r,s=document.createElement("style"),c=(p=>{const y=Array.from(p.querySelectorAll(`style[${Ar}]`));return y[y.length-1]})(o),d=c!==void 0?c.nextSibling:null;s.setAttribute(Ar,Cv),s.setAttribute(Dv,Ou);const h=i||_E();return h&&s.setAttribute("nonce",h),o.insertBefore(s,d),s},wE=class{constructor(n,i){this.element=Hv(n,i),this.element.appendChild(document.createTextNode("")),this.sheet=(r=>{var o;if(r.sheet)return r.sheet;const s=(o=r.getRootNode().styleSheets)!==null&&o!==void 0?o:document.styleSheets;for(let c=0,d=s.length;c<d;c++){const h=s[c];if(h.ownerNode===r)return h}throw ao(17)})(this.element),this.length=0}insertRule(n,i){try{return this.sheet.insertRule(i,n),this.length++,!0}catch{return!1}}deleteRule(n){this.sheet.deleteRule(n),this.length--}getRule(n){const i=this.sheet.cssRules[n];return i&&i.cssText?i.cssText:""}},EE=class{constructor(n,i){this.element=Hv(n,i),this.nodes=this.element.childNodes,this.length=0}insertRule(n,i){if(n<=this.length&&n>=0){const r=document.createTextNode(i);return this.element.insertBefore(r,this.nodes[n]||null),this.length++,!0}return!1}deleteRule(n){this.element.removeChild(this.nodes[n]),this.length--}getRule(n){return n<this.length?this.nodes[n].textContent:""}};let j0=Yl;const TE={isServer:!Yl,useCSSOMInjection:!Jw};class Du{static registerId(i){return Hl(i)}constructor(i=Or,r={},o){this.options=Object.assign(Object.assign({},TE),i),this.gs=r,this.keyframeIds=new Set,this.names=new Map(o),this.server=!!i.isServer,!this.server&&Yl&&j0&&(j0=!1,Sd(this)),Uh(this,()=>(s=>{const c=s.getTag(),{length:d}=c;let h="";for(let p=0;p<d;p++){const y=Iw(p);if(y===void 0)continue;const g=s.names.get(y);if(g===void 0||!g.size)continue;const b=c.getGroup(p);if(b.length===0)continue;const A=Ar+".g"+p+'[id="'+y+'"]';let M="";for(const z of g)z.length>0&&(M+=z+",");h+=b+A+'{content:"'+M+'"}'+jh}return h})(this))}rehydrate(){!this.server&&Yl&&Sd(this)}reconstructWithOptions(i,r=!0){const o=new Du(Object.assign(Object.assign({},this.options),i),this.gs,r&&this.names||void 0);return o.keyframeIds=new Set(this.keyframeIds),!this.server&&Yl&&i.target!==this.options.target&&Pd(this.options.target)!==Pd(i.target)&&Sd(o),o}allocateGSInstance(i){return this.gs[i]=(this.gs[i]||0)+1}getTag(){return this.tag||(this.tag=(i=(({useCSSOMInjection:r,target:o,nonce:s})=>r?new wE(o,s):new EE(o,s))(this.options),new gE(i)));var i}hasNameForId(i,r){var o,s;return(s=(o=this.names.get(i))===null||o===void 0?void 0:o.has(r))!==null&&s!==void 0&&s}registerName(i,r){Hl(i),i.startsWith(zv)&&this.keyframeIds.add(i);const o=this.names.get(i);o?o.add(r):this.names.set(i,new Set([r]))}insertRules(i,r,o){this.registerName(i,r),this.getTag().insertRules(Hl(i),o)}clearNames(i){this.names.has(i)&&this.names.get(i).clear()}clearRules(i){this.getTag().clearGroup(Hl(i)),this.clearNames(i)}clearTag(){this.tag=void 0}}const qv=new WeakSet,RE={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function AE(n,i){return i==null||typeof i=="boolean"||i===""?"":typeof i!="number"||i===0||n in RE||n.startsWith("--")?String(i).trim():i+"px"}const _i=47;function k0(n){if(n.charCodeAt(0)===45&&n.charCodeAt(1)===45)return n;let i="";for(let r=0;r<n.length;r++){const o=n.charCodeAt(r);i+=o>=65&&o<=90?"-"+String.fromCharCode(o+32):n[r]}return i.startsWith("ms-")?"-"+i:i}const $v=Symbol.for("sc-keyframes");function OE(n){return typeof n=="object"&&n!==null&&$v in n}function Vv(n){return Cu(n)&&!(n.prototype&&n.prototype.isReactComponent)}const Yv=n=>n==null||n===!1||n==="",CE=Symbol.for("react.client.reference");function N0(n){return n.$$typeof===CE}function Gv(n,i){for(const r in n){const o=n[r];n.hasOwnProperty(r)&&!Yv(o)&&(Array.isArray(o)&&qv.has(o)||Cu(o)?i.push(k0(r)+":",o,";"):Kl(o)?(i.push(r+" {"),Gv(o,i),i.push("}")):i.push(k0(r)+": "+AE(r,o)+";"))}}function Ri(n,i,r,o,s=[]){if(Yv(n))return s;const c=typeof n;if(c==="string")return s.push(n),s;if(c==="function"){if(N0(n))return s;if(Vv(n)&&i){const d=n(i);return Ri(d,i,r,o,s)}return s.push(n),s}if(Array.isArray(n)){for(let d=0;d<n.length;d++)Ri(n[d],i,r,o,s);return s}return Lv(n)?(s.push(`.${n.styledComponentId}`),s):OE(n)?(r?(n.inject(r,o),s.push(n.getName(o))):s.push(n),s):N0(n)?s:Kl(n)?n.toString!==Object.prototype.toString?(s.push(n.toString()),s):(Gv(n,s),s):(s.push(n.toString()),s)}const DE=jv(Ou);class zE{constructor(i,r,o){this.rules=i,this.componentId=r,this.baseHash=Ti(DE,r),this.baseStyle=o,Du.registerId(r)}generateAndInjectStyles(i,r,o){let s=this.baseStyle?this.baseStyle.generateAndInjectStyles(i,r,o):"";{let c="";for(let d=0;d<this.rules.length;d++){const h=this.rules[d];if(typeof h=="string")c+=h;else if(h)if(Vv(h)){const p=h(i);typeof p=="string"?c+=p:p!=null&&p!==!1&&(c+=Zd(Ri(p,i,r,o)))}else c+=Zd(Ri(h,i,r,o))}if(c){this.dynamicNameCache||(this.dynamicNameCache=new Map);const d=o.hash?o.hash+c:c;let h=this.dynamicNameCache.get(d);if(!h){if(h=Nh(Ti(Ti(this.baseHash,o.hash),c)>>>0),this.dynamicNameCache.size>=200){const p=this.dynamicNameCache.keys().next().value;p!==void 0&&this.dynamicNameCache.delete(p)}this.dynamicNameCache.set(d,h)}if(!r.hasNameForId(this.componentId,h)){const p=o(c,"."+h,void 0,this.componentId);r.insertRules(this.componentId,h,p)}s=ql(s,h)}}return s}}const ME=/&/g;function Xv(n,i){let r=0;for(;--i>=0&&n.charCodeAt(i)===92;)r++;return!(1&~r)}function _d(n){const i=n.length;let r="",o=0,s=0,c=0,d=!1,h=!1;for(let p=0;p<i;p++){const y=n.charCodeAt(p);if(c!==0||d||y!==_i||n.charCodeAt(p+1)!==42)if(d)y===42&&n.charCodeAt(p+1)===_i&&(d=!1,p++);else if(y!==34&&y!==39||Xv(n,p)){if(c===0)if(y===123)s++;else if(y===125){if(s--,s<0){h=!0;let g=p+1;for(;g<i;){const b=n.charCodeAt(g);if(b===59||b===10)break;g++}g<i&&n.charCodeAt(g)===59&&g++,s=0,p=g-1,o=g;continue}s===0&&(r+=n.substring(o,p+1),o=p+1)}else y===59&&s===0&&(r+=n.substring(o,p+1),o=p+1)}else c===0?c=y:c===y&&(c=0);else d=!0,p++}return h||s!==0||c!==0?(o<i&&s===0&&c===0&&(r+=n.substring(o)),r):n}function Fv(n,i){const r=i+" ",o=","+r;for(let s=0;s<n.length;s++){const c=n[s];if(c.type==="rule"){c.value=(r+c.value).replaceAll(",",o);const d=c.props,h=[];for(let p=0;p<d.length;p++)h[p]=r+d[p];c.props=h}Array.isArray(c.children)&&c.type!=="@keyframes"&&Fv(c.children,i)}return n}function jE({options:n=Or,plugins:i=kh}=Or){let r,o,s;const c=(A,M,z)=>z.startsWith(o)&&z.endsWith(o)&&z.replaceAll(o,"").length>0?`.${r}`:A,d=i.slice();d.push(A=>{A.type===Eu&&A.value.includes("&")&&(s||(s=new RegExp(`\\${o}\\b`,"g")),A.props[0]=A.props[0].replace(ME,o).replace(s,c))}),n.prefix&&d.push(Pw),d.push(Qw);let h=[];const p=Zw(d.concat(Kw(A=>h.push(A)))),y=(A,M="",z="",C="&")=>{r=C,o=M,s=void 0;const S=(function(_){const O=_.indexOf("//")!==-1,L=_.indexOf("}")!==-1;if(!O&&!L)return _;if(!O)return _d(_);const Y=_.length;let P="",q=0,W=0,ge=0,Te=0,Se=0,me=!1;for(;W<Y;){const ue=_.charCodeAt(W);if(ue!==34&&ue!==39||Xv(_,W))if(ge===0)if(ue===_i&&W+1<Y&&_.charCodeAt(W+1)===42){for(W+=2;W+1<Y&&(_.charCodeAt(W)!==42||_.charCodeAt(W+1)!==_i);)W++;W+=2}else if(ue!==40)if(ue!==41)if(Te>0)W++;else if(ue===42&&W+1<Y&&_.charCodeAt(W+1)===_i)P+=_.substring(q,W),W+=2,q=W,me=!0;else if(ue===_i&&W+1<Y&&_.charCodeAt(W+1)===_i){for(P+=_.substring(q,W);W<Y&&_.charCodeAt(W)!==10;)W++;q=W,me=!0}else ue===123?Se++:ue===125&&Se--,W++;else Te>0&&Te--,W++;else Te++,W++;else W++;else ge===0?ge=ue:ge===ue&&(ge=0),W++}return me?(q<Y&&(P+=_.substring(q)),Se===0?P:_d(P)):Se===0?_:_d(_)})(A);let T=Xw(z||M?z+" "+M+" { "+S+" }":S);return n.namespace&&(T=Fv(T,n.namespace)),h=[],iu(T,p),h},g=n;let b=Fd;for(let A=0;A<i.length;A++)i[A].name||ao(15),b=Ti(b,i[A].name);return g?.namespace&&(b=Ti(b,g.namespace)),g?.prefix&&(b=Ti(b,"p")),y.hash=b!==Fd?b.toString():"",y}const kE=new Du,Jd=jE(),Qv=Ae.createContext({shouldForwardProp:void 0,styleSheet:kE,stylis:Jd,stylisPlugins:void 0});Qv.Consumer;function NE(){return Ae.useContext(Qv)}const Zv=Ae.createContext(void 0);Zv.Consumer;const U0=Object.prototype.hasOwnProperty,wd={};function UE(n,i){const r=typeof n!="string"?"sc":Mv(n);wd[r]=(wd[r]||0)+1;const o=r+"-"+kv(Ou+r+wd[r]);return i?i+"-"+o:o}function BE(n,i,r){const o=Lv(n),s=n,c=!Qd(n),{attrs:d=kh,componentId:h=UE(i.displayName,i.parentComponentId),displayName:p=rE(n)}=i,y=i.displayName&&i.componentId?Mv(i.displayName)+"-"+i.componentId:i.componentId||h,g=o&&s.attrs?s.attrs.concat(d).filter(Boolean):d;let{shouldForwardProp:b}=i;if(o&&s.shouldForwardProp){const C=s.shouldForwardProp;if(i.shouldForwardProp){const S=i.shouldForwardProp;b=(T,_)=>C(T,_)&&S(T,_)}else b=C}const A=new zE(r,y,o?s.componentStyle:void 0);function M(C,S){return(function(T,_,O){const{attrs:L,componentStyle:Y,defaultProps:P,foldedComponentIds:q,styledComponentId:W,target:ge}=T,Te=Ae.useContext(Zv),Se=NE(),me=T.shouldForwardProp||Se.shouldForwardProp,ue=eE(_,Te,P)||Or;let be,Ee;{const Oe=Ae.useRef(null),_e=Oe.current;if(_e!==null&&_e[1]===ue&&_e[2]===Se.styleSheet&&_e[3]===Se.stylis&&_e[7]===Y&&(function(R,Z,ne){const re=R,pe=Z;let oe=0;for(const xe in pe)if(U0.call(pe,xe)&&(oe++,re[xe]!==pe[xe]))return!1;return oe===ne})(_e[0],_,_e[4]))be=_e[5],Ee=_e[6];else{be=(function(Z,ne,re){const pe=Object.assign(Object.assign({},ne),{className:void 0,theme:re}),oe=Z.length>1;for(let xe=0;xe<Z.length;xe++){const Qe=Z[xe],Ve=Cu(Qe)?Qe(oe?Object.assign({},pe):pe):Qe;for(const vt in Ve)vt==="className"?pe.className=ql(pe.className,Ve[vt]):vt==="style"?pe.style=Object.assign(Object.assign({},pe.style),Ve[vt]):vt in ne&&ne[vt]===void 0||(pe[vt]=Ve[vt])}return"className"in ne&&typeof ne.className=="string"&&(pe.className=ql(pe.className,ne.className)),pe})(L,_,ue),Ee=(function(Z,ne,re,pe){return Z.generateAndInjectStyles(ne,re,pe)})(Y,be,Se.styleSheet,Se.stylis);let R=0;for(const Z in _)U0.call(_,Z)&&R++;Oe.current=[_,ue,Se.styleSheet,Se.stylis,R,be,Ee,Y]}}const G=be.as||ge,ae=(function(Oe,_e,R,Z){const ne={};for(const re in Oe)Oe[re]===void 0||re[0]==="$"||re==="as"||re==="theme"&&Oe.theme===R||(re==="forwardedAs"?ne.as=Oe.forwardedAs:Z&&!Z(re,_e)||(ne[re]=Oe[re]));return ne})(be,G,ue,me);let ce=ql(q,W);return Ee&&(ce+=" "+Ee),be.className&&(ce+=" "+be.className),ae[Qd(G)&&G.includes("-")?"class":"className"]=ce,O&&(ae.ref=O),k.createElement(G,ae)})(z,C,S)}M.displayName=p;let z=Ae.forwardRef(M);return z.attrs=g,z.componentStyle=A,z.displayName=p,z.shouldForwardProp=b,z.foldedComponentIds=o?ql(s.foldedComponentIds,s.styledComponentId):"",z.styledComponentId=y,z.target=o?s.target:n,Object.defineProperty(z,"defaultProps",{get(){return this._foldedDefaultProps},set(C){this._foldedDefaultProps=o?(function(S,...T){for(const _ of T)Kd(S,_,!0);return S})({},s.defaultProps,C):C}}),Uh(z,()=>`.${z.styledComponentId}`),c&&Bv(z,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),z}var LE=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function B0(n,i){const r=[n[0]];for(let o=0,s=i.length;o<s;o+=1)r.push(i[o],n[o+1]);return r}const L0=n=>(qv.add(n),n);function Kv(n,...i){if(Cu(n)||Kl(n))return L0(Ri(B0(kh,[n,...i])));const r=n;return i.length===0&&r.length===1&&typeof r[0]=="string"?Ri(r):L0(Ri(B0(r,i)))}function Id(n,i,r=Or){if(!i)throw ao(1,i);const o=(s,...c)=>n(i,r,Kv(s,...c));return o.attrs=s=>Id(n,i,Object.assign(Object.assign({},r),{attrs:Array.prototype.concat(r.attrs,s).filter(Boolean)})),o.withConfig=s=>Id(n,i,Object.assign(Object.assign({},r),s)),o}const Pv=n=>Id(BE,n),N=Pv;LE.forEach(n=>{N[n]=Pv(n)});var Jv;class HE{constructor(i,r){this[Jv]=!0,this.inject=(o,s=Jd)=>{const c=this.getName(s);if(!o.hasNameForId(this.id,c)){const d=s(this.rules,c,"@keyframes");o.insertRules(this.id,c,d)}},this.name=i,this.id=zv+i,this.rules=r,Hl(this.id),Uh(this,()=>{throw ao(12,String(this.name))})}getName(i=Jd){return i.hash?this.name+Nh(+i.hash>>>0):this.name}}function Bh(n,...i){const r=Zd(Kv(n,...i)),o=kv(r);return new HE(o,r)}Jv=$v;const F={tablet:"768px",desktop:"1440px"},qE=N.div`
/* base — від 320px (гумова) */
  // position: relative;
  // background-color: var(--body-background-color);
  `;console.log(F.desktop);const $E=N.main`
position: relative;
width: 100%;
max-width: 375px;
min-height: 100%;
margin: 0 auto;
padding: 20px;
background-color: var(--body-background-color);
    @media (min-width: ${F.tablet}) {
        max-width: 768px;
        padding: 32px;
    };
    @media (min-width: ${F.desktop}) {
        max-width: 1440px;
    };
`,VE=()=>x.jsx($E,{children:x.jsx(bv,{})}),YE=N.ul`
display:flex;
flex-direction: column;
gap: 20px;

@media (min-width: ${F.tablet}) {
    display:inline-flex;
    flex-direction: row;
    margin: 0;
    margin-left: 223px;
    gap: 32px;
}
@media (min-width: ${F.desktop}) {
    margin: 0;
    margin-left: 334px;
    gap: 40px;
}
`,H0=N(ki)`
font-family: Gilroy;
font-weight: 500;
font-style: Medium;
font-size: 16px;
line-height: 18px;
letter-spacing: -2%;
text-decoration: none;
color: var(--focus-word-color);

&:hover {
    color: var(--main-text-color);}
`,Iv=()=>x.jsxs(YE,{children:[x.jsx(H0,{to:"/recommended",children:"Home"}),x.jsx(H0,{to:"/library",children:"My library"})]}),GE="/read-journey-vite/assets/sprite-qQcbvmIR.svg",XE=N.svg`
    margin: 0 auto;
    width: 100%;
    height: 100%;
    display: block;
`,ea=({name:n,className:i,color:r,secondaryColor:o})=>{const s={color:r,...o&&{"--icon-secondary":o}};return x.jsx(XE,{className:i,style:s,children:x.jsx("use",{href:`${GE}#${n}`})})},FE=N.div`
display: inline-flex;
gap: 4px
`,QE=N(ea)`
  width: 42px;
  height:17px;
  
`,ZE=N.span`
display: none;
@media (min-width: ${F.tablet}) {
    display: ${({$tabletVisible:n})=>n?"inline-block":"none"};
    font-weight: 700;
    font-style: Bold;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 2%;
    text-transform: uppercase;
    color: var(--main-text-color);
  }
@media (min-width: ${F.desktop}) {
    display: inline-block;
    font-weight: 700;
    font-style: Bold;
    font-size: 18px;
    line-height: 18px;
    letter-spacing: 2%;
    text-transform: uppercase;
    color: var(--main-text-color);
  }
`,Lh=({tabletVisible:n=!1})=>x.jsxs(FE,{children:[x.jsx("span",{children:x.jsx(QE,{name:"icon-Logo",color:"rgba(249, 249, 249, 1)"})}),x.jsx(ZE,{$tabletVisible:n,children:"read journey"})]}),KE=N.div`
display:inline-flex;
margin-left: auto;
/* margin-left: 219px; */
gap: 8px;
`,PE=N.span`
display:block;
width: 35px;
height: 35px;
border-radius: 50%;
border: 1px solid var(--focus-word-color);
color: var(--main-text-color);
text-align: center;
line-height: 35px;
@media (min-width: ${F.tablet}) {
    width: 40px;
    height: 40px;
    line-height: 40px;
}
`,JE=N.span`
display:none;
@media (min-width: ${F.desktop}) {
    display:block;
    color: var(--main-text-color);
    font-family: var(--font-family);
    font-weight: 700;
    font-size: 16px;
    line-height: 250%;
    letter-spacing: -0.02em;
    text-align: center;
}

`;var Ed={exports:{}},Td={};var q0;function IE(){if(q0)return Td;q0=1;var n=vu();function i(p,y){return p===y&&(p!==0||1/p===1/y)||p!==p&&y!==y}var r=typeof Object.is=="function"?Object.is:i,o=n.useSyncExternalStore,s=n.useRef,c=n.useEffect,d=n.useMemo,h=n.useDebugValue;return Td.useSyncExternalStoreWithSelector=function(p,y,g,b,A){var M=s(null);if(M.current===null){var z={hasValue:!1,value:null};M.current=z}else z=M.current;M=d(function(){function S(Y){if(!T){if(T=!0,_=Y,Y=b(Y),A!==void 0&&z.hasValue){var P=z.value;if(A(P,Y))return O=P}return O=Y}if(P=O,r(_,Y))return P;var q=b(Y);return A!==void 0&&A(P,q)?(_=Y,P):(_=Y,O=q)}var T=!1,_,O,L=g===void 0?null:g;return[function(){return S(y())},L===null?void 0:function(){return S(L())}]},[y,g,b,A]);var C=o(p,M[0],M[1]);return c(function(){z.hasValue=!0,z.value=C},[C]),h(C),C},Td}var $0;function WE(){return $0||($0=1,Ed.exports=IE()),Ed.exports}var eT=WE();function tT(n){n()}function nT(){let n=null,i=null;return{clear(){n=null,i=null},notify(){tT(()=>{let r=n;for(;r;)r.callback(),r=r.next})},get(){const r=[];let o=n;for(;o;)r.push(o),o=o.next;return r},subscribe(r){let o=!0;const s=i={callback:r,next:null,prev:i};return s.prev?s.prev.next=s:n=s,function(){!o||n===null||(o=!1,s.next?s.next.prev=s.prev:i=s.prev,s.prev?s.prev.next=s.next:n=s.next)}}}}var V0={notify(){},get:()=>[]};function aT(n,i){let r,o=V0,s=0,c=!1;function d(C){g();const S=o.subscribe(C);let T=!1;return()=>{T||(T=!0,S(),b())}}function h(){o.notify()}function p(){z.onStateChange&&z.onStateChange()}function y(){return c}function g(){s++,r||(r=n.subscribe(p),o=nT())}function b(){s--,r&&s===0&&(r(),r=void 0,o.clear(),o=V0)}function A(){c||(c=!0,g())}function M(){c&&(c=!1,b())}const z={addNestedSub:d,notifyNestedSubs:h,handleChangeWrapper:p,isSubscribed:y,trySubscribe:A,tryUnsubscribe:M,getListeners:()=>o};return z}var iT=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rT=iT(),lT=()=>typeof navigator<"u"&&navigator.product==="ReactNative",oT=lT(),sT=()=>rT||oT?k.useLayoutEffect:k.useEffect,uT=sT(),cT=Symbol.for("react-redux-context"),fT=typeof globalThis<"u"?globalThis:{};function dT(){if(!k.createContext)return{};const n=fT[cT]??=new Map;let i=n.get(k.createContext);return i||(i=k.createContext(null),n.set(k.createContext,i)),i}var ni=dT();function hT(n){const{children:i,context:r,serverState:o,store:s}=n,c=k.useMemo(()=>{const p=aT(s);return{store:s,subscription:p,getServerState:o?()=>o:void 0}},[s,o]),d=k.useMemo(()=>s.getState(),[s]);uT(()=>{const{subscription:p}=c;return p.onStateChange=p.notifyNestedSubs,p.trySubscribe(),d!==s.getState()&&p.notifyNestedSubs(),()=>{p.tryUnsubscribe(),p.onStateChange=void 0}},[c,d]);const h=r||ni;return k.createElement(h.Provider,{value:c},i)}var pT=hT;function Hh(n=ni){return function(){return k.useContext(n)}}var Wv=Hh();function e1(n=ni){const i=n===ni?Wv:Hh(n),r=()=>{const{store:o}=i();return o};return Object.assign(r,{withTypes:()=>r}),r}var mT=e1();function yT(n=ni){const i=n===ni?mT:e1(n),r=()=>i().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var ln=yT(),gT=(n,i)=>n===i;function bT(n=ni){const i=n===ni?Wv:Hh(n),r=(o,s={})=>{const{equalityFn:c=gT}=typeof s=="function"?{equalityFn:s}:s,d=i(),{store:h,subscription:p,getServerState:y}=d;k.useRef(!0);const g=k.useCallback({[o.name](A){return o(A)}}[o.name],[o]),b=eT.useSyncExternalStoreWithSelector(p.addNestedSub,h.getState,y||h.getState,g,c);return k.useDebugValue(b),b};return Object.assign(r,{withTypes:()=>r}),r}var Ut=bT();function jt(n){return`Minified Redux error #${n}; visit https://redux.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}var vT=typeof Symbol=="function"&&Symbol.observable||"@@observable",Y0=vT,Rd=()=>Math.random().toString(36).substring(7).split("").join("."),xT={INIT:`@@redux/INIT${Rd()}`,REPLACE:`@@redux/REPLACE${Rd()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Rd()}`},lu=xT;function qh(n){if(typeof n!="object"||n===null)return!1;let i=n;for(;Object.getPrototypeOf(i)!==null;)i=Object.getPrototypeOf(i);return Object.getPrototypeOf(n)===i||Object.getPrototypeOf(n)===null}function $h(n,i,r){if(typeof n!="function")throw new Error(jt(2));if(typeof i=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(jt(0));if(typeof i=="function"&&typeof r>"u"&&(r=i,i=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(jt(1));return r($h)(n,i)}let o=n,s=i,c=new Map,d=c,h=0,p=!1;function y(){d===c&&(d=new Map,c.forEach((S,T)=>{d.set(T,S)}))}function g(){if(p)throw new Error(jt(3));return s}function b(S){if(typeof S!="function")throw new Error(jt(4));if(p)throw new Error(jt(5));let T=!0;y();const _=h++;return d.set(_,S),function(){if(T){if(p)throw new Error(jt(6));T=!1,y(),d.delete(_),c=null}}}function A(S){if(!qh(S))throw new Error(jt(7));if(typeof S.type>"u")throw new Error(jt(8));if(typeof S.type!="string")throw new Error(jt(17));if(p)throw new Error(jt(9));try{p=!0,s=o(s,S)}finally{p=!1}return(c=d).forEach(_=>{_()}),S}function M(S){if(typeof S!="function")throw new Error(jt(10));o=S,A({type:lu.REPLACE})}function z(){const S=b;return{subscribe(T){if(typeof T!="object"||T===null)throw new Error(jt(11));function _(){const L=T;L.next&&L.next(g())}return _(),{unsubscribe:S(_)}},[Y0](){return this}}}return A({type:lu.INIT}),{dispatch:A,subscribe:b,getState:g,replaceReducer:M,[Y0]:z}}function ST(n){Object.keys(n).forEach(i=>{const r=n[i];if(typeof r(void 0,{type:lu.INIT})>"u")throw new Error(jt(12));if(typeof r(void 0,{type:lu.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(jt(13))})}function _T(n){const i=Object.keys(n),r={};for(let c=0;c<i.length;c++){const d=i[c];typeof n[d]=="function"&&(r[d]=n[d])}const o=Object.keys(r);let s;try{ST(r)}catch(c){s=c}return function(d={},h){if(s)throw s;let p=!1;const y={};for(let g=0;g<o.length;g++){const b=o[g],A=r[b],M=d[b],z=A(M,h);if(typeof z>"u")throw h&&h.type,new Error(jt(14));y[b]=z,p=p||z!==M}return p=p||o.length!==Object.keys(d).length,p?y:d}}function ou(...n){return n.length===0?i=>i:n.length===1?n[0]:n.reduce((i,r)=>(...o)=>i(r(...o)))}function wT(...n){return i=>(r,o)=>{const s=i(r,o);let c=()=>{throw new Error(jt(15))};const d={getState:s.getState,dispatch:(p,...y)=>c(p,...y)},h=n.map(p=>p(d));return c=ou(...h)(s.dispatch),{...s,dispatch:c}}}function ET(n){return qh(n)&&"type"in n&&typeof n.type=="string"}var t1=Symbol.for("immer-nothing"),G0=Symbol.for("immer-draftable"),Qt=Symbol.for("immer-state");function Hn(n,...i){throw new Error(`[Immer] minified error nr: ${n}. Full error at: https://bit.ly/3cXEKWf`)}var mn=Object,Cr=mn.getPrototypeOf,su="constructor",zu="prototype",Wd="configurable",uu="enumerable",Xs="writable",Pl="value",Ta=n=>!!n&&!!n[Qt];function Yn(n){return n?n1(n)||ju(n)||!!n[G0]||!!n[su]?.[G0]||ku(n)||Nu(n):!1}var TT=mn[zu][su].toString(),X0=new WeakMap;function n1(n){if(!n||!Vh(n))return!1;const i=Cr(n);if(i===null||i===mn[zu])return!0;const r=mn.hasOwnProperty.call(i,su)&&i[su];if(r===Object)return!0;if(!Er(r))return!1;let o=X0.get(r);return o===void 0&&(o=Function.toString.call(r),X0.set(r,o)),o===TT}function Mu(n,i,r=!0){io(n)===0?(r?Reflect.ownKeys(n):mn.keys(n)).forEach(s=>{i(s,n[s],n)}):n.forEach((o,s)=>i(s,o,n))}function io(n){const i=n[Qt];return i?i.type_:ju(n)?1:ku(n)?2:Nu(n)?3:0}var F0=(n,i,r=io(n))=>r===2?n.has(i):mn[zu].hasOwnProperty.call(n,i),eh=(n,i,r=io(n))=>r===2?n.get(i):n[i],cu=(n,i,r,o=io(n))=>{o===2?n.set(i,r):o===3?n.add(r):n[i]=r};function RT(n,i){return n===i?n!==0||1/n===1/i:n!==n&&i!==i}var ju=Array.isArray,ku=n=>n instanceof Map,Nu=n=>n instanceof Set,Vh=n=>typeof n=="object",Er=n=>typeof n=="function",Ad=n=>typeof n=="boolean";function AT(n){const i=+n;return Number.isInteger(i)&&String(i)===n}var Jn=n=>n.copy_||n.base_,Yh=n=>n.modified_?n.copy_:n.base_;function th(n,i){if(ku(n))return new Map(n);if(Nu(n))return new Set(n);if(ju(n))return Array[zu].slice.call(n);const r=n1(n);if(i===!0||i==="class_only"&&!r){const o=mn.getOwnPropertyDescriptors(n);delete o[Qt];let s=Reflect.ownKeys(o);for(let c=0;c<s.length;c++){const d=s[c],h=o[d];h[Xs]===!1&&(h[Xs]=!0,h[Wd]=!0),(h.get||h.set)&&(o[d]={[Wd]:!0,[Xs]:!0,[uu]:h[uu],[Pl]:n[d]})}return mn.create(Cr(n),o)}else{const o=Cr(n);if(o!==null&&r)return{...n};const s=mn.create(o);return mn.assign(s,n)}}function Gh(n,i=!1){return Uu(n)||Ta(n)||!Yn(n)||(io(n)>1&&mn.defineProperties(n,{set:zs,add:zs,clear:zs,delete:zs}),mn.freeze(n),i&&Mu(n,(r,o)=>{Gh(o,!0)},!1)),n}function OT(){Hn(2)}var zs={[Pl]:OT};function Uu(n){return n===null||!Vh(n)?!0:mn.isFrozen(n)}var fu="MapSet",nh="Patches",Q0="ArrayMethods",a1={};function Di(n){const i=a1[n];return i||Hn(0,n),i}var Z0=n=>!!a1[n],Jl,i1=()=>Jl,CT=(n,i)=>({drafts_:[],parent_:n,immer_:i,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:Z0(fu)?Di(fu):void 0,arrayMethodsPlugin_:Z0(Q0)?Di(Q0):void 0});function K0(n,i){i&&(n.patchPlugin_=Di(nh),n.patches_=[],n.inversePatches_=[],n.patchListener_=i)}function ah(n){ih(n),n.drafts_.forEach(DT),n.drafts_=null}function ih(n){n===Jl&&(Jl=n.parent_)}var P0=n=>Jl=CT(Jl,n);function DT(n){const i=n[Qt];i.type_===0||i.type_===1?i.revoke_():i.revoked_=!0}function J0(n,i){i.unfinalizedDrafts_=i.drafts_.length;const r=i.drafts_[0];if(n!==void 0&&n!==r){r[Qt].modified_&&(ah(i),Hn(4)),Yn(n)&&(n=I0(i,n));const{patchPlugin_:s}=i;s&&s.generateReplacementPatches_(r[Qt].base_,n,i)}else n=I0(i,r);return zT(i,n,!0),ah(i),i.patches_&&i.patchListener_(i.patches_,i.inversePatches_),n!==t1?n:void 0}function I0(n,i){if(Uu(i))return i;const r=i[Qt];if(!r)return du(i,n.handledSet_,n);if(!Bu(r,n))return i;if(!r.modified_)return r.base_;if(!r.finalized_){const{callbacks_:o}=r;if(o)for(;o.length>0;)o.pop()(n);o1(r,n)}return r.copy_}function zT(n,i,r=!1){!n.parent_&&n.immer_.autoFreeze_&&n.canAutoFreeze_&&Gh(i,r)}function r1(n){n.finalized_=!0,n.scope_.unfinalizedDrafts_--}var Bu=(n,i)=>n.scope_===i,MT=[];function l1(n,i,r,o){const s=Jn(n),c=n.type_;if(o!==void 0&&eh(s,o,c)===i){cu(s,o,r,c);return}if(!n.draftLocations_){const h=n.draftLocations_=new Map;Mu(s,(p,y)=>{if(Ta(y)){const g=h.get(y)||[];g.push(p),h.set(y,g)}})}const d=n.draftLocations_.get(i)??MT;for(const h of d)cu(s,h,r,c)}function jT(n,i,r){n.callbacks_.push(function(s){const c=i;if(!c||!Bu(c,s))return;s.mapSetPlugin_?.fixSetContents(c);const d=Yh(c);l1(n,c.draft_??c,d,r),o1(c,s)})}function o1(n,i){if(n.modified_&&!n.finalized_&&(n.type_===3||n.type_===1&&n.allIndicesReassigned_||(n.assigned_?.size??0)>0)){const{patchPlugin_:o}=i;if(o){const s=o.getPath(n);s&&o.generatePatches_(n,s,i)}r1(n)}}function kT(n,i,r){const{scope_:o}=n;if(Ta(r)){const s=r[Qt];Bu(s,o)&&s.callbacks_.push(function(){Fs(n);const d=Yh(s);l1(n,r,d,i)})}else Yn(r)&&n.callbacks_.push(function(){const c=Jn(n);n.type_===3?c.has(r)&&du(r,o.handledSet_,o):eh(c,i,n.type_)===r&&o.drafts_.length>1&&(n.assigned_.get(i)??!1)===!0&&n.copy_&&du(eh(n.copy_,i,n.type_),o.handledSet_,o)})}function du(n,i,r){return!r.immer_.autoFreeze_&&r.unfinalizedDrafts_<1||Ta(n)||i.has(n)||!Yn(n)||Uu(n)||(i.add(n),Mu(n,(o,s)=>{if(Ta(s)){const c=s[Qt];if(Bu(c,r)){const d=Yh(c);cu(n,o,d,n.type_),r1(c)}}else Yn(s)&&du(s,i,r)})),n}function NT(n,i){const r=ju(n),o={type_:r?1:0,scope_:i?i.scope_:i1(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:i,base_:n,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let s=o,c=hu;r&&(s=[o],c=Il);const{revoke:d,proxy:h}=Proxy.revocable(s,c);return o.draft_=h,o.revoke_=d,[h,o]}var hu={get(n,i){if(i===Qt)return n;if(i==="constructor"||i==="__proto__"){const h=Jn(n)[i];return new Proxy(h||{},{get:(p,y)=>y==="__proto__"||y==="prototype"?Object.freeze(Object.create(null)):Reflect.get(p,y),set:()=>!0,apply:(p,y,g)=>Reflect.apply(p,y,g)})}let r=n.scope_.arrayMethodsPlugin_;const o=n.type_===1&&typeof i=="string";if(o&&r?.isArrayOperationMethod(i))return r.createMethodInterceptor(n,i);const s=Jn(n);if(!F0(s,i,n.type_))return UT(n,s,i);const c=s[i];if(n.finalized_||!Yn(c)||o&&n.operationMethod&&r?.isMutatingArrayMethod(n.operationMethod)&&AT(i))return c;if(c===Od(n.base_,i)){Fs(n);const d=n.type_===1?+i:i,h=lh(n.scope_,c,n,d);return n.copy_[d]=h}return c},has(n,i){return i==="constructor"||i==="__proto__"||i==="prototype"?!1:i in Jn(n)},ownKeys(n){return Reflect.ownKeys(Jn(n))},set(n,i,r){if(i==="constructor"||i==="__proto__"||i==="prototype")return!0;const o=s1(Jn(n),i);if(o?.set)return o.set.call(n.draft_,r),!0;if(!n.modified_){const s=Od(Jn(n),i),c=s?.[Qt];if(c&&c.base_===r)return n.copy_[i]=r,n.assigned_.set(i,!1),!0;if(RT(r,s)&&(r!==void 0||F0(n.base_,i,n.type_)))return!0;Fs(n),rh(n)}return n.copy_[i]===r&&(r!==void 0||i in n.copy_)||Number.isNaN(r)&&Number.isNaN(n.copy_[i])||(n.copy_[i]=r,n.assigned_.set(i,!0),kT(n,i,r)),!0},deleteProperty(n,i){return Fs(n),Od(n.base_,i)!==void 0||i in n.base_?(n.assigned_.set(i,!1),rh(n)):n.assigned_.delete(i),n.copy_&&delete n.copy_[i],!0},getOwnPropertyDescriptor(n,i){const r=Jn(n),o=Reflect.getOwnPropertyDescriptor(r,i);return o&&{[Xs]:!0,[Wd]:n.type_!==1||i!=="length",[uu]:o[uu],[Pl]:r[i]}},defineProperty(){Hn(11)},getPrototypeOf(n){return Cr(n.base_)},setPrototypeOf(){Hn(12)}},Il={};for(let n in hu){let i=hu[n];Il[n]=function(){const r=arguments;return r[0]=r[0][0],i.apply(this,r)}}Il.deleteProperty=function(n,i){return Il.set.call(this,n,i,void 0)};Il.set=function(n,i,r){return hu.set.call(this,n[0],i,r,n[0])};function Od(n,i){const r=n[Qt];return(r?Jn(r):n)[i]}function UT(n,i,r){const o=s1(i,r);return o?Pl in o?o[Pl]:o.get?.call(n.draft_):void 0}function s1(n,i){if(!(i in n))return;let r=Cr(n);for(;r;){const o=Object.getOwnPropertyDescriptor(r,i);if(o)return o;r=Cr(r)}}function rh(n){n.modified_||(n.modified_=!0,n.parent_&&rh(n.parent_))}function Fs(n){n.copy_||(n.assigned_=new Map,n.copy_=th(n.base_,n.scope_.immer_.useStrictShallowCopy_))}var BT=class{constructor(n){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(i,r,o)=>{if(Er(i)&&!Er(r)){const c=r;r=i;const d=this;return function(p=c,...y){return d.produce(p,g=>r.call(this,g,...y))}}Er(r)||Hn(6),o!==void 0&&!Er(o)&&Hn(7);let s;if(Yn(i)){const c=P0(this),d=lh(c,i,void 0);let h=!0;try{s=r(d),h=!1}finally{h?ah(c):ih(c)}return K0(c,o),J0(s,c)}else if(!i||!Vh(i)){if(s=r(i),s===void 0&&(s=i),s===t1&&(s=void 0),this.autoFreeze_&&Gh(s,!0),o){const c=[],d=[];Di(nh).generateReplacementPatches_(i,s,{patches_:c,inversePatches_:d}),o(c,d)}return s}else Hn(1,i)},this.produceWithPatches=(i,r)=>{if(Er(i))return(d,...h)=>this.produceWithPatches(d,p=>i(p,...h));let o,s;return[this.produce(i,r,(d,h)=>{o=d,s=h}),o,s]},Ad(n?.autoFreeze)&&this.setAutoFreeze(n.autoFreeze),Ad(n?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(n.useStrictShallowCopy),Ad(n?.useStrictIteration)&&this.setUseStrictIteration(n.useStrictIteration)}createDraft(n){Yn(n)||Hn(8),Ta(n)&&(n=LT(n));const i=P0(this),r=lh(i,n,void 0);return r[Qt].isManual_=!0,ih(i),r}finishDraft(n,i){const r=n&&n[Qt];(!r||!r.isManual_)&&Hn(9);const{scope_:o}=r;return K0(o,i),J0(void 0,o)}setAutoFreeze(n){this.autoFreeze_=n}setUseStrictShallowCopy(n){this.useStrictShallowCopy_=n}setUseStrictIteration(n){this.useStrictIteration_=n}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(n,i){let r;for(r=i.length-1;r>=0;r--){const s=i[r];if(s.path.length===0&&s.op==="replace"){n=s.value;break}}r>-1&&(i=i.slice(r+1));const o=Di(nh).applyPatches_;return Ta(n)?o(n,i):this.produce(n,s=>o(s,i))}};function lh(n,i,r,o){const[s,c]=ku(i)?Di(fu).proxyMap_(i,r):Nu(i)?Di(fu).proxySet_(i,r):NT(i,r);return(r?.scope_??i1()).drafts_.push(s),c.callbacks_=r?.callbacks_??[],c.key_=o,r&&o!==void 0?jT(r,c,o):c.callbacks_.push(function(p){p.mapSetPlugin_?.fixSetContents(c);const{patchPlugin_:y}=p;c.modified_&&y&&y.generatePatches_(c,[],p)}),s}function LT(n){return Ta(n)||Hn(10,n),u1(n)}function u1(n){if(!Yn(n)||Uu(n))return n;const i=n[Qt];let r,o=!0;if(i){if(!i.modified_)return i.base_;i.finalized_=!0,r=th(n,i.scope_.immer_.useStrictShallowCopy_),o=i.scope_.immer_.shouldUseStrictIteration()}else r=th(n,!0);return Mu(r,(s,c)=>{cu(r,s,u1(c))},o),i&&(i.finalized_=!1),r}var HT=new BT,c1=HT.produce;function f1(n){return({dispatch:r,getState:o})=>s=>c=>typeof c=="function"?c(r,o,n):s(c)}var qT=f1(),$T=f1,VT=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?ou:ou.apply(null,arguments)},YT=n=>n&&typeof n.match=="function";function Gl(n,i){function r(...o){if(i){let s=i(...o);if(!s)throw new Error(wa(0));return{type:n,payload:s.payload,..."meta"in s&&{meta:s.meta},..."error"in s&&{error:s.error}}}return{type:n,payload:o[0]}}return r.toString=()=>`${n}`,r.type=n,r.match=o=>ET(o)&&o.type===n,r}var d1=class $l extends Array{constructor(...i){super(...i),Object.setPrototypeOf(this,$l.prototype)}static get[Symbol.species](){return $l}concat(...i){return super.concat.apply(this,i)}prepend(...i){return i.length===1&&Array.isArray(i[0])?new $l(...i[0].concat(this)):new $l(...i.concat(this))}};function W0(n){return Yn(n)?c1(n,()=>{}):n}function Ms(n,i,r){return n.has(i)?n.get(i):n.set(i,r(i)).get(i)}function GT(n){return typeof n=="boolean"}var XT=()=>function(i){const{thunk:r=!0,immutableCheck:o=!0,serializableCheck:s=!0,actionCreatorCheck:c=!0}=i??{};let d=new d1;return r&&(GT(r)?d.push(qT):d.push($T(r.extraArgument))),d},FT="RTK_autoBatch",eb=n=>i=>{setTimeout(i,n)},QT=(n,i)=>r=>{let o=!1;const s=()=>{o||(o=!0,cancelAnimationFrame(c),clearTimeout(d),r())},c=n(s),d=setTimeout(s,i)},ZT=(n={type:"raf"})=>i=>(...r)=>{const o=i(...r);let s=!0,c=!1,d=!1;const h=new Set,p=n.type==="tick"?queueMicrotask:n.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?QT(window.requestAnimationFrame,100):eb(10):n.type==="callback"?n.queueNotification:eb(n.timeout),y=()=>{d=!1,c&&(c=!1,h.forEach(g=>g()))};return Object.assign({},o,{subscribe(g){const b=()=>s&&g(),A=o.subscribe(b);return h.add(g),()=>{A(),h.delete(g)}},dispatch(g){try{return s=!g?.meta?.[FT],c=!s,c&&(d||(d=!0,p(y))),o.dispatch(g)}finally{s=!0}}})},KT=n=>function(r){const{autoBatch:o=!0}=r??{};let s=new d1(n);return o&&s.push(ZT(typeof o=="object"?o:void 0)),s};function PT(n){const i=XT(),{reducer:r=void 0,middleware:o,devTools:s=!0,preloadedState:c=void 0,enhancers:d=void 0}=n||{};let h;if(typeof r=="function")h=r;else if(qh(r))h=_T(r);else throw new Error(wa(1));let p;typeof o=="function"?p=o(i):p=i();let y=ou;s&&(y=VT({trace:!1,...typeof s=="object"&&s}));const g=wT(...p),b=KT(g);let A=typeof d=="function"?d(b):b();const M=y(...A);return $h(h,c,M)}function h1(n){const i={},r=[];let o;const s={addCase(c,d){const h=typeof c=="string"?c:c.type;if(!h)throw new Error(wa(28));if(h in i)throw new Error(wa(29));return i[h]=d,s},addAsyncThunk(c,d){return d.pending&&(i[c.pending.type]=d.pending),d.rejected&&(i[c.rejected.type]=d.rejected),d.fulfilled&&(i[c.fulfilled.type]=d.fulfilled),d.settled&&r.push({matcher:c.settled,reducer:d.settled}),s},addMatcher(c,d){return r.push({matcher:c,reducer:d}),s},addDefaultCase(c){return o=c,s}};return n(s),[i,r,o]}function JT(n){return typeof n=="function"}function IT(n,i){let[r,o,s]=h1(i),c;if(JT(n))c=()=>W0(n());else{const h=W0(n);c=()=>h}function d(h=c(),p){let y=[r[p.type],...o.filter(({matcher:g})=>g(p)).map(({reducer:g})=>g)];return y.filter(g=>!!g).length===0&&(y=[s]),y.reduce((g,b)=>{if(b)if(Ta(g)){const M=b(g,p);return M===void 0?g:M}else{if(Yn(g))return c1(g,A=>b(A,p));{const A=b(g,p);if(A===void 0){if(g===null)return g;throw Error("A case reducer on a non-draftable value must not return undefined")}return A}}return g},h)}return d.getInitialState=c,d}var WT=(n,i)=>YT(n)?n.match(i):n(i);function e3(...n){return i=>n.some(r=>WT(r,i))}var t3="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW",n3=(n=21)=>{let i="",r=n;for(;r--;)i+=t3[Math.random()*64|0];return i},a3=["name","message","stack","code"],Cd=class{constructor(n,i){this.payload=n,this.meta=i}payload;meta;_type},tb=class{constructor(n,i){this.payload=n,this.meta=i}payload;meta;_type},i3=n=>{if(typeof n=="object"&&n!==null){const i={};for(const r of a3)typeof n[r]=="string"&&(i[r]=n[r]);return i}return{message:String(n)}},nb="External signal was aborted",gn=(()=>{function n(i,r,o){const s=Gl(i+"/fulfilled",(p,y,g,b)=>({payload:p,meta:{...b||{},arg:g,requestId:y,requestStatus:"fulfilled"}})),c=Gl(i+"/pending",(p,y,g)=>({payload:void 0,meta:{...g||{},arg:y,requestId:p,requestStatus:"pending"}})),d=Gl(i+"/rejected",(p,y,g,b,A)=>({payload:b,error:(o&&o.serializeError||i3)(p||"Rejected"),meta:{...A||{},arg:g,requestId:y,rejectedWithValue:!!b,requestStatus:"rejected",aborted:p?.name==="AbortError",condition:p?.name==="ConditionError"}}));function h(p,{signal:y}={}){return(g,b,A)=>{const M=o?.idGenerator?o.idGenerator(p):n3(),z=new AbortController;let C,S;function T(O){S=O,z.abort()}y&&(y.aborted?T(nb):y.addEventListener("abort",()=>T(nb),{once:!0}));const _=(async function(){let O;try{let Y=o?.condition?.(p,{getState:b,extra:A});if(l3(Y)&&(Y=await Y),Y===!1||z.signal.aborted)throw{name:"ConditionError",message:"Aborted due to condition callback returning false."};const P=new Promise((q,W)=>{C=()=>{W({name:"AbortError",message:S||"Aborted"})},z.signal.addEventListener("abort",C,{once:!0})});g(c(M,p,o?.getPendingMeta?.({requestId:M,arg:p},{getState:b,extra:A}))),O=await Promise.race([P,Promise.resolve(r(p,{dispatch:g,getState:b,extra:A,requestId:M,signal:z.signal,abort:T,rejectWithValue:((q,W)=>new Cd(q,W)),fulfillWithValue:((q,W)=>new tb(q,W))})).then(q=>{if(q instanceof Cd)throw q;return q instanceof tb?s(q.payload,M,p,q.meta):s(q,M,p)})])}catch(Y){O=Y instanceof Cd?d(null,M,p,Y.payload,Y.meta):d(Y,M,p)}finally{C&&z.signal.removeEventListener("abort",C)}return o&&!o.dispatchConditionRejection&&d.match(O)&&O.meta.condition||g(O),O})();return Object.assign(_,{abort:T,requestId:M,arg:p,unwrap(){return _.then(r3)}})}}return Object.assign(h,{pending:c,rejected:d,fulfilled:s,settled:e3(d,s),typePrefix:i})}return n.withTypes=()=>n,n})();function r3(n){if(n.meta&&n.meta.rejectedWithValue)throw n.payload;if(n.error)throw n.error;return n.payload}function l3(n){return n!==null&&typeof n=="object"&&typeof n.then=="function"}var o3=Symbol.for("rtk-slice-createasyncthunk");function s3(n,i){return`${n}/${i}`}function u3({creators:n}={}){const i=n?.asyncThunk?.[o3];return function(o){const{name:s,reducerPath:c=s}=o;if(!s)throw new Error(wa(11));const d=(typeof o.reducers=="function"?o.reducers(f3()):o.reducers)||{},h=Object.keys(d),p={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},y={addCase(O,L){const Y=typeof O=="string"?O:O.type;if(!Y)throw new Error(wa(12));if(Y in p.sliceCaseReducersByType)throw new Error(wa(13));return p.sliceCaseReducersByType[Y]=L,y},addMatcher(O,L){return p.sliceMatchers.push({matcher:O,reducer:L}),y},exposeAction(O,L){return p.actionCreators[O]=L,y},exposeCaseReducer(O,L){return p.sliceCaseReducersByName[O]=L,y}};h.forEach(O=>{const L=d[O],Y={reducerName:O,type:s3(s,O),createNotation:typeof o.reducers=="function"};h3(L)?m3(Y,L,y,i):d3(Y,L,y)});function g(){const[O={},L=[],Y=void 0]=typeof o.extraReducers=="function"?h1(o.extraReducers):[o.extraReducers],P={...O,...p.sliceCaseReducersByType};return IT(o.initialState,q=>{for(let W in P)q.addCase(W,P[W]);for(let W of p.sliceMatchers)q.addMatcher(W.matcher,W.reducer);for(let W of L)q.addMatcher(W.matcher,W.reducer);Y&&q.addDefaultCase(Y)})}const b=O=>O,A=new Map,M=new WeakMap;let z;function C(O,L){return z||(z=g()),z(O,L)}function S(){return z||(z=g()),z.getInitialState()}function T(O,L=!1){function Y(q){let W=q[O];return typeof W>"u"&&L&&(W=Ms(M,Y,S)),W}function P(q=b){const W=Ms(A,L,()=>new WeakMap);return Ms(W,q,()=>{const ge={};for(const[Te,Se]of Object.entries(o.selectors??{}))ge[Te]=c3(Se,q,()=>Ms(M,q,S),L);return ge})}return{reducerPath:O,getSelectors:P,get selectors(){return P(Y)},selectSlice:Y}}const _={name:s,reducer:C,actions:p.actionCreators,caseReducers:p.sliceCaseReducersByName,getInitialState:S,...T(c),injectInto(O,{reducerPath:L,...Y}={}){const P=L??c;return O.inject({reducerPath:P,reducer:C},Y),{..._,...T(P,!0)}}};return _}}function c3(n,i,r,o){function s(c,...d){let h=i(c);return typeof h>"u"&&o&&(h=r()),n(h,...d)}return s.unwrapped=n,s}var Xh=u3();function f3(){function n(i,r){return{_reducerDefinitionType:"asyncThunk",payloadCreator:i,...r}}return n.withTypes=()=>n,{reducer(i){return Object.assign({[i.name](...r){return i(...r)}}[i.name],{_reducerDefinitionType:"reducer"})},preparedReducer(i,r){return{_reducerDefinitionType:"reducerWithPrepare",prepare:i,reducer:r}},asyncThunk:n}}function d3({type:n,reducerName:i,createNotation:r},o,s){let c,d;if("reducer"in o){if(r&&!p3(o))throw new Error(wa(17));c=o.reducer,d=o.prepare}else c=o;s.addCase(n,c).exposeCaseReducer(i,c).exposeAction(i,d?Gl(n,d):Gl(n))}function h3(n){return n._reducerDefinitionType==="asyncThunk"}function p3(n){return n._reducerDefinitionType==="reducerWithPrepare"}function m3({type:n,reducerName:i},r,o,s){if(!s)throw new Error(wa(18));const{payloadCreator:c,fulfilled:d,pending:h,rejected:p,settled:y,options:g}=r,b=s(n,c,g);o.exposeAction(i,b),d&&o.addCase(b.fulfilled,d),h&&o.addCase(b.pending,h),p&&o.addCase(b.rejected,p),y&&o.addMatcher(b.settled,y),o.exposeCaseReducer(i,{fulfilled:d||js,pending:h||js,rejected:p||js,settled:y||js})}function js(){}function wa(n){return`Minified Redux Toolkit error #${n}; visit https://redux-toolkit.js.org/Errors?code=${n} for the full message or use the non-minified dev environment for full errors. `}function p1(n,i){return function(){return n.apply(i,arguments)}}const{toString:y3}=Object.prototype,{getPrototypeOf:Dr}=Object,{iterator:ro,toStringTag:m1}=Symbol,pu=(({hasOwnProperty:n})=>(i,r)=>n.call(i,r))(Object.prototype),Wl=(n,i)=>{let r=n;const o=[];for(;r!=null&&r!==Object.prototype;){if(o.indexOf(r)!==-1)return!1;if(o.push(r),pu(r,i))return!0;r=Dr(r)}return!1},g3=(n,i)=>n!=null&&Wl(n,i)?n[i]:void 0,Fh=(n=>i=>{const r=y3.call(i);return n[r]||(n[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),Xn=n=>(n=n.toLowerCase(),i=>Fh(i)===n),Lu=n=>i=>typeof i===n,{isArray:zi}=Array,zr=Lu("undefined");function Ur(n){return n!==null&&!zr(n)&&n.constructor!==null&&!zr(n.constructor)&&rn(n.constructor.isBuffer)&&n.constructor.isBuffer(n)}const y1=Xn("ArrayBuffer");function b3(n){let i;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?i=ArrayBuffer.isView(n):i=n&&n.buffer&&y1(n.buffer),i}const v3=Lu("string"),rn=Lu("function"),g1=Lu("number"),Br=n=>n!==null&&typeof n=="object",x3=n=>n===!0||n===!1,Qs=n=>{if(!Br(n))return!1;const i=Dr(n);return(i===null||i===Object.prototype||Dr(i)===null)&&!Wl(n,m1)&&!Wl(n,ro)},S3=n=>{if(!Br(n)||Ur(n))return!1;try{return Object.keys(n).length===0&&Object.getPrototypeOf(n)===Object.prototype}catch{return!1}},_3=Xn("Date"),w3=Xn("File"),E3=n=>!!(n&&typeof n.uri<"u"),T3=n=>n&&typeof n.getParts<"u",R3=Xn("Blob"),A3=Xn("FileList"),O3=n=>Br(n)&&rn(n.pipe);function C3(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const ab=C3(),ib=typeof ab.FormData<"u"?ab.FormData:void 0,D3=n=>{if(!n)return!1;if(ib&&n instanceof ib)return!0;const i=Dr(n);if(!i||i===Object.prototype||!rn(n.append))return!1;const r=Fh(n);return r==="formdata"||r==="object"&&rn(n.toString)&&n.toString()==="[object FormData]"},z3=Xn("URLSearchParams"),[M3,j3,k3,N3]=["ReadableStream","Request","Response","Headers"].map(Xn),U3=n=>n.trim?n.trim():n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function lo(n,i,{allOwnKeys:r=!1}={}){if(n===null||typeof n>"u")return;let o,s;if(typeof n!="object"&&(n=[n]),zi(n))for(o=0,s=n.length;o<s;o++)i.call(null,n[o],o,n);else{if(Ur(n))return;const c=r?Object.getOwnPropertyNames(n):Object.keys(n),d=c.length;let h;for(o=0;o<d;o++)h=c[o],i.call(null,n[h],h,n)}}function b1(n,i){if(Ur(n))return null;i=i.toLowerCase();const r=Object.keys(n);let o=r.length,s;for(;o-- >0;)if(s=r[o],i===s.toLowerCase())return s;return null}const wi=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,v1=n=>!zr(n)&&n!==wi;function oh(...n){const{caseless:i,skipUndefined:r}=v1(this)&&this||{},o={},s=(c,d)=>{if(d==="__proto__"||d==="constructor"||d==="prototype")return;const h=i&&typeof d=="string"&&b1(o,d)||d,p=pu(o,h)?o[h]:void 0;Qs(p)&&Qs(c)?o[h]=oh(p,c):Qs(c)?o[h]=oh({},c):zi(c)?o[h]=c.slice():(!r||!zr(c))&&(o[h]=c)};for(let c=0,d=n.length;c<d;c++){const h=n[c];if(!h||Ur(h)||(lo(h,s),typeof h!="object"||zi(h)))continue;const p=Object.getOwnPropertySymbols(h);for(let y=0;y<p.length;y++){const g=p[y];Z3.call(h,g)&&s(h[g],g)}}return o}const B3=(n,i,r,{allOwnKeys:o}={})=>(lo(i,(s,c)=>{r&&rn(s)?Object.defineProperty(n,c,{__proto__:null,value:p1(s,r),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(n,c,{__proto__:null,value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:o}),n),L3=n=>(n.charCodeAt(0)===65279&&(n=n.slice(1)),n),H3=(n,i,r,o)=>{n.prototype=Object.create(i.prototype,o),Object.defineProperty(n.prototype,"constructor",{__proto__:null,value:n,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(n,"super",{__proto__:null,value:i.prototype}),r&&Object.assign(n.prototype,r)},q3=(n,i,r,o)=>{let s,c,d;const h={};if(i=i||{},n==null)return i;do{for(s=Object.getOwnPropertyNames(n),c=s.length;c-- >0;)d=s[c],(!o||o(d,n,i))&&!h[d]&&(i[d]=n[d],h[d]=!0);n=r!==!1&&Dr(n)}while(n&&(!r||r(n,i))&&n!==Object.prototype);return i},$3=(n,i,r)=>{n=String(n),(r===void 0||r>n.length)&&(r=n.length),r-=i.length;const o=n.indexOf(i,r);return o!==-1&&o===r},V3=n=>{if(!n)return null;if(zi(n))return n;let i=n.length;if(!g1(i))return null;const r=new Array(i);for(;i-- >0;)r[i]=n[i];return r},Y3=(n=>i=>n&&i instanceof n)(typeof Uint8Array<"u"&&Dr(Uint8Array)),G3=(n,i)=>{const o=(n&&n[ro]).call(n);let s;for(;(s=o.next())&&!s.done;){const c=s.value;i.call(n,c[0],c[1])}},X3=(n,i)=>{let r;const o=[];for(;(r=n.exec(i))!==null;)o.push(r);return o},F3=Xn("HTMLFormElement"),Q3=n=>n.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,o,s){return o.toUpperCase()+s}),{propertyIsEnumerable:Z3}=Object.prototype,K3=Xn("RegExp"),x1=(n,i)=>{const r=Object.getOwnPropertyDescriptors(n),o={};lo(r,(s,c)=>{let d;(d=i(s,c,n))!==!1&&(o[c]=d||s)}),Object.defineProperties(n,o)},P3=n=>{x1(n,(i,r)=>{if(rn(n)&&["arguments","caller","callee"].includes(r))return!1;const o=n[r];if(rn(o)){if(i.enumerable=!1,"writable"in i){i.writable=!1;return}i.set||(i.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},J3=(n,i)=>{const r={},o=s=>{s.forEach(c=>{r[c]=!0})};return zi(n)?o(n):o(String(n).split(i)),r},I3=()=>{},W3=(n,i)=>n!=null&&Number.isFinite(n=+n)?n:i;function eR(n){return!!(n&&rn(n.append)&&n[m1]==="FormData"&&n[ro])}const tR=n=>{const i=new WeakSet,r=o=>{if(Br(o)){if(i.has(o))return;if(Ur(o))return o;if(!("toJSON"in o)){i.add(o);const s=zi(o)?[]:{};return lo(o,(c,d)=>{const h=r(c);!zr(h)&&(s[d]=h)}),i.delete(o),s}}return o};return r(n)},nR=Xn("AsyncFunction"),aR=n=>n&&(Br(n)||rn(n))&&rn(n.then)&&rn(n.catch),S1=((n,i)=>n?setImmediate:i?((r,o)=>(wi.addEventListener("message",({source:s,data:c})=>{s===wi&&c===r&&o.length&&o.shift()()},!1),s=>{o.push(s),wi.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",rn(wi.postMessage)),iR=typeof queueMicrotask<"u"?queueMicrotask.bind(wi):typeof process<"u"&&process.nextTick||S1,_1=n=>n!=null&&rn(n[ro]),rR=n=>n!=null&&Wl(n,ro)&&_1(n),j={isArray:zi,isArrayBuffer:y1,isBuffer:Ur,isFormData:D3,isArrayBufferView:b3,isString:v3,isNumber:g1,isBoolean:x3,isObject:Br,isPlainObject:Qs,isEmptyObject:S3,isReadableStream:M3,isRequest:j3,isResponse:k3,isHeaders:N3,isUndefined:zr,isDate:_3,isFile:w3,isReactNativeBlob:E3,isReactNative:T3,isBlob:R3,isRegExp:K3,isFunction:rn,isStream:O3,isURLSearchParams:z3,isTypedArray:Y3,isFileList:A3,forEach:lo,merge:oh,extend:B3,trim:U3,stripBOM:L3,inherits:H3,toFlatObject:q3,kindOf:Fh,kindOfTest:Xn,endsWith:$3,toArray:V3,forEachEntry:G3,matchAll:X3,isHTMLForm:F3,hasOwnProperty:pu,hasOwnProp:pu,hasOwnInPrototypeChain:Wl,getSafeProp:g3,reduceDescriptors:x1,freezeMethods:P3,toObjectSet:J3,toCamelCase:Q3,noop:I3,toFiniteNumber:W3,findKey:b1,global:wi,isContextDefined:v1,isSpecCompliantForm:eR,toJSONObject:tR,isAsyncFn:nR,isThenable:aR,setImmediate:S1,asap:iR,isIterable:_1,isSafeIterable:rR},lR=j.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),oR=n=>{const i={};let r,o,s;return n&&n.split(`
`).forEach(function(d){s=d.indexOf(":"),r=d.substring(0,s).trim().toLowerCase(),o=d.substring(s+1).trim(),!(!r||i[r]&&lR[r])&&(r==="set-cookie"?i[r]?i[r].push(o):i[r]=[o]:i[r]=i[r]?i[r]+", "+o:o)}),i};function sR(n){let i=0,r=n.length;for(;i<r;){const o=n.charCodeAt(i);if(o!==9&&o!==32)break;i+=1}for(;r>i;){const o=n.charCodeAt(r-1);if(o!==9&&o!==32)break;r-=1}return i===0&&r===n.length?n:n.slice(i,r)}const uR=new RegExp("[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+","g"),cR=new RegExp("[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+","g");function Qh(n,i){return j.isArray(n)?n.map(r=>Qh(r,i)):sR(String(n).replace(i,""))}const fR=n=>Qh(n,uR),dR=n=>Qh(n,cR);function w1(n){const i=Object.create(null);return j.forEach(n.toJSON(),(r,o)=>{i[o]=dR(r)}),i}const rb=Symbol("internals");function Nl(n){return n&&String(n).trim().toLowerCase()}function Zs(n){return n===!1||n==null?n:j.isArray(n)?n.map(Zs):fR(String(n))}function hR(n){const i=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let o;for(;o=r.exec(n);)i[o[1]]=o[2];return i}const pR=n=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(n.trim());function Dd(n,i,r,o,s){if(j.isFunction(o))return o.call(this,i,r);if(s&&(i=r),!!j.isString(i)){if(j.isString(o))return i.indexOf(o)!==-1;if(j.isRegExp(o))return o.test(i)}}function mR(n){return n.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(i,r,o)=>r.toUpperCase()+o)}function yR(n,i){const r=j.toCamelCase(" "+i);["get","set","has"].forEach(o=>{Object.defineProperty(n,o+r,{__proto__:null,value:function(s,c,d){return this[o].call(this,i,s,c,d)},configurable:!0})})}let $t=class{constructor(i){i&&this.set(i)}set(i,r,o){const s=this;function c(h,p,y){const g=Nl(p);if(!g)return;const b=j.findKey(s,g);(!b||s[b]===void 0||y===!0||y===void 0&&s[b]!==!1)&&(s[b||p]=Zs(h))}const d=(h,p)=>j.forEach(h,(y,g)=>c(y,g,p));if(j.isPlainObject(i)||i instanceof this.constructor)d(i,r);else if(j.isString(i)&&(i=i.trim())&&!pR(i))d(oR(i),r);else if(j.isObject(i)&&j.isSafeIterable(i)){let h=Object.create(null),p,y;for(const g of i){if(!j.isArray(g))throw new TypeError("Object iterator must return a key-value pair");y=g[0],j.hasOwnProp(h,y)?(p=h[y],h[y]=j.isArray(p)?[...p,g[1]]:[p,g[1]]):h[y]=g[1]}d(h,r)}else i!=null&&c(r,i,o);return this}get(i,r){if(i=Nl(i),i){const o=j.findKey(this,i);if(o){const s=this[o];if(!r)return s;if(r===!0)return hR(s);if(j.isFunction(r))return r.call(this,s,o);if(j.isRegExp(r))return r.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(i,r){if(i=Nl(i),i){const o=j.findKey(this,i);return!!(o&&this[o]!==void 0&&(!r||Dd(this,this[o],o,r)))}return!1}delete(i,r){const o=this;let s=!1;function c(d){if(d=Nl(d),d){const h=j.findKey(o,d);h&&(!r||Dd(o,o[h],h,r))&&(delete o[h],s=!0)}}return j.isArray(i)?i.forEach(c):c(i),s}clear(i){const r=Object.keys(this);let o=r.length,s=!1;for(;o--;){const c=r[o];(!i||Dd(this,this[c],c,i,!0))&&(delete this[c],s=!0)}return s}normalize(i){const r=this,o={};return j.forEach(this,(s,c)=>{const d=j.findKey(o,c);if(d){r[d]=Zs(s),delete r[c];return}const h=i?mR(c):String(c).trim();h!==c&&delete r[c],r[h]=Zs(s),o[h]=!0}),this}concat(...i){return this.constructor.concat(this,...i)}toJSON(i){const r=Object.create(null);return j.forEach(this,(o,s)=>{o!=null&&o!==!1&&(r[s]=i&&j.isArray(o)?o.join(", "):o)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([i,r])=>i+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(i){return i instanceof this?i:new this(i)}static concat(i,...r){const o=new this(i);return r.forEach(s=>o.set(s)),o}static accessor(i){const o=(this[rb]=this[rb]={accessors:{}}).accessors,s=this.prototype;function c(d){const h=Nl(d);o[h]||(yR(s,d),o[h]=!0)}return j.isArray(i)?i.forEach(c):c(i),this}};$t.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);j.reduceDescriptors($t.prototype,({value:n},i)=>{let r=i[0].toUpperCase()+i.slice(1);return{get:()=>n,set(o){this[r]=o}}});j.freezeMethods($t);const gR="[REDACTED ****]";function bR(n){if(j.hasOwnProp(n,"toJSON"))return!0;let i=Object.getPrototypeOf(n);for(;i&&i!==Object.prototype;){if(j.hasOwnProp(i,"toJSON"))return!0;i=Object.getPrototypeOf(i)}return!1}function vR(n,i){const r=new Set(i.map(c=>String(c).toLowerCase())),o=[],s=c=>{if(c===null||typeof c!="object"||j.isBuffer(c))return c;if(o.indexOf(c)!==-1)return;c instanceof $t&&(c=c.toJSON()),o.push(c);let d;if(j.isArray(c))d=[],c.forEach((h,p)=>{const y=s(h);j.isUndefined(y)||(d[p]=y)});else{if(!j.isPlainObject(c)&&bR(c))return o.pop(),c;d=Object.create(null);for(const[h,p]of Object.entries(c)){const y=r.has(h.toLowerCase())?gR:s(p);j.isUndefined(y)||(d[h]=y)}}return o.pop(),d};return s(n)}let se=class E1 extends Error{static from(i,r,o,s,c,d){const h=new E1(i.message,r||i.code,o,s,c);return Object.defineProperty(h,"cause",{__proto__:null,value:i,writable:!0,enumerable:!1,configurable:!0}),h.name=i.name,i.status!=null&&h.status==null&&(h.status=i.status),d&&Object.assign(h,d),h}constructor(i,r,o,s,c){super(i),Object.defineProperty(this,"message",{__proto__:null,value:i,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,r&&(this.code=r),o&&(this.config=o),s&&(this.request=s),c&&(this.response=c,this.status=c.status)}toJSON(){const i=this.config,r=i&&j.hasOwnProp(i,"redact")?i.redact:void 0,o=j.isArray(r)&&r.length>0?vR(i,r):j.toJSONObject(i);return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:o,code:this.code,status:this.status}}};se.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";se.ERR_BAD_OPTION="ERR_BAD_OPTION";se.ECONNABORTED="ECONNABORTED";se.ETIMEDOUT="ETIMEDOUT";se.ECONNREFUSED="ECONNREFUSED";se.ERR_NETWORK="ERR_NETWORK";se.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";se.ERR_DEPRECATED="ERR_DEPRECATED";se.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";se.ERR_BAD_REQUEST="ERR_BAD_REQUEST";se.ERR_CANCELED="ERR_CANCELED";se.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";se.ERR_INVALID_URL="ERR_INVALID_URL";se.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const xR=null,T1=100;function sh(n){return j.isPlainObject(n)||j.isArray(n)}function R1(n){return j.endsWith(n,"[]")?n.slice(0,-2):n}function zd(n,i,r){return n?n.concat(i).map(function(s,c){return s=R1(s),!r&&c?"["+s+"]":s}).join(r?".":""):i}function SR(n){return j.isArray(n)&&!n.some(sh)}const _R=j.toFlatObject(j,{},null,function(i){return/^is[A-Z]/.test(i)});function Hu(n,i,r){if(!j.isObject(n))throw new TypeError("target must be an object");i=i||new FormData,r=j.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,O){return!j.isUndefined(O[_])});const o=r.metaTokens,s=r.visitor||z,c=r.dots,d=r.indexes,h=r.Blob||typeof Blob<"u"&&Blob,p=r.maxDepth===void 0?T1:r.maxDepth,y=h&&j.isSpecCompliantForm(i),g=[];if(!j.isFunction(s))throw new TypeError("visitor must be a function");function b(T){if(T===null)return"";if(j.isDate(T))return T.toISOString();if(j.isBoolean(T))return T.toString();if(!y&&j.isBlob(T))throw new se("Blob is not supported. Use a Buffer instead.");if(j.isArrayBuffer(T)||j.isTypedArray(T)){if(y&&typeof h=="function")return new h([T]);if(typeof Buffer<"u")return Buffer.from(T);throw new se("Blob is not supported. Use a Buffer instead.",se.ERR_NOT_SUPPORT)}return T}function A(T){if(T>p)throw new se("Object is too deeply nested ("+T+" levels). Max depth: "+p,se.ERR_FORM_DATA_DEPTH_EXCEEDED)}function M(T,_){if(p===1/0)return JSON.stringify(T);const O=[];return JSON.stringify(T,function(Y,P){if(!j.isObject(P))return P;for(;O.length&&O[O.length-1]!==this;)O.pop();return O.push(P),A(_+O.length-1),P})}function z(T,_,O){let L=T;if(j.isReactNative(i)&&j.isReactNativeBlob(T))return i.append(zd(O,_,c),b(T)),!1;if(T&&!O&&typeof T=="object"){if(j.endsWith(_,"{}"))_=o?_:_.slice(0,-2),T=M(T,1);else if(j.isArray(T)&&SR(T)||(j.isFileList(T)||j.endsWith(_,"[]"))&&(L=j.toArray(T)))return _=R1(_),L.forEach(function(P,q){!(j.isUndefined(P)||P===null)&&i.append(d===!0?zd([_],q,c):d===null?_:_+"[]",b(P))}),!1}return sh(T)?!0:(i.append(zd(O,_,c),b(T)),!1)}const C=Object.assign(_R,{defaultVisitor:z,convertValue:b,isVisitable:sh});function S(T,_,O=0){if(!j.isUndefined(T)){if(A(O),g.indexOf(T)!==-1)throw new Error("Circular reference detected in "+_.join("."));g.push(T),j.forEach(T,function(Y,P){(!(j.isUndefined(Y)||Y===null)&&s.call(i,Y,j.isString(P)?P.trim():P,_,C))===!0&&S(Y,_?_.concat(P):[P],O+1)}),g.pop()}}if(!j.isObject(n))throw new TypeError("data must be an object");return S(n),i}function lb(n){const i={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(n).replace(/[!'()~]|%20/g,function(o){return i[o]})}function Zh(n,i){this._pairs=[],n&&Hu(n,this,i)}const A1=Zh.prototype;A1.append=function(i,r){this._pairs.push([i,r])};A1.toString=function(i){const r=i?o=>i.call(this,o,lb):lb;return this._pairs.map(function(s){return r(s[0])+"="+r(s[1])},"").join("&")};function wR(n){return encodeURIComponent(n).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function O1(n,i,r){if(!i)return n;n=n||"";const o=j.isFunction(r)?{serialize:r}:r,s=j.getSafeProp(o,"encode")||wR,c=j.getSafeProp(o,"serialize");let d;if(c?d=c(i,o):d=j.isURLSearchParams(i)?i.toString():new Zh(i,o).toString(s),d){const h=n.indexOf("#");h!==-1&&(n=n.slice(0,h)),n+=(n.indexOf("?")===-1?"?":"&")+d}return n}class ob{constructor(){this.handlers=[]}use(i,r,o){return this.handlers.push({fulfilled:i,rejected:r,synchronous:o?o.synchronous:!1,runWhen:o?o.runWhen:null}),this.handlers.length-1}eject(i){this.handlers[i]&&(this.handlers[i]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(i){j.forEach(this.handlers,function(o){o!==null&&i(o)})}}const Kh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0,advertiseZstdAcceptEncoding:!1,validateStatusUndefinedResolves:!0},ER=typeof URLSearchParams<"u"?URLSearchParams:Zh,TR=typeof FormData<"u"?FormData:null,RR=typeof Blob<"u"?Blob:null,AR={isBrowser:!0,classes:{URLSearchParams:ER,FormData:TR,Blob:RR},protocols:["http","https","file","blob","url","data"]},Ph=typeof window<"u"&&typeof document<"u",uh=typeof navigator=="object"&&navigator||void 0,OR=Ph&&(!uh||["ReactNative","NativeScript","NS"].indexOf(uh.product)<0),CR=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",DR=Ph&&window.location.href||"http://localhost",zR=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ph,hasStandardBrowserEnv:OR,hasStandardBrowserWebWorkerEnv:CR,navigator:uh,origin:DR},Symbol.toStringTag,{value:"Module"})),Nt={...zR,...AR};function MR(n,i){return Hu(n,new Nt.classes.URLSearchParams,{visitor:function(r,o,s,c){return Nt.isNode&&j.isBuffer(r)?(this.append(o,r.toString("base64")),!1):c.defaultVisitor.apply(this,arguments)},...i})}const sb=T1;function C1(n){if(n>sb)throw new se("FormData field is too deeply nested ("+n+" levels). Max depth: "+sb,se.ERR_FORM_DATA_DEPTH_EXCEEDED)}function jR(n){const i=[],r=/\w+|\[(\w*)]/g;let o;for(;(o=r.exec(n))!==null;)C1(i.length),i.push(o[0]==="[]"?"":o[1]||o[0]);return i}function kR(n){const i={},r=Object.keys(n);let o;const s=r.length;let c;for(o=0;o<s;o++)c=r[o],i[c]=n[c];return i}function D1(n){function i(r,o,s,c){C1(c);let d=r[c++];if(d==="__proto__")return!0;const h=Number.isFinite(+d),p=c>=r.length;return d=!d&&j.isArray(s)?s.length:d,p?(j.hasOwnProp(s,d)?s[d]=j.isArray(s[d])?s[d].concat(o):[s[d],o]:s[d]=o,!h):((!j.hasOwnProp(s,d)||!j.isObject(s[d]))&&(s[d]=[]),i(r,o,s[d],c)&&j.isArray(s[d])&&(s[d]=kR(s[d])),!h)}if(j.isFormData(n)&&j.isFunction(n.entries)){const r={};return j.forEachEntry(n,(o,s)=>{i(jR(o),s,r,0)}),r}return null}const Sr=(n,i)=>n!=null&&j.hasOwnProp(n,i)?n[i]:void 0;function NR(n,i,r){if(j.isString(n))try{return(i||JSON.parse)(n),j.trim(n)}catch(o){if(o.name!=="SyntaxError")throw o}return(r||JSON.stringify)(n)}const oo={transitional:Kh,adapter:["xhr","http","fetch"],transformRequest:[function(i,r){const o=r.getContentType()||"",s=o.indexOf("application/json")>-1,c=j.isObject(i);if(c&&j.isHTMLForm(i)&&(i=new FormData(i)),j.isFormData(i))return s?JSON.stringify(D1(i)):i;if(j.isArrayBuffer(i)||j.isBuffer(i)||j.isStream(i)||j.isFile(i)||j.isBlob(i)||j.isReadableStream(i))return i;if(j.isArrayBufferView(i))return i.buffer;if(j.isURLSearchParams(i))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),i.toString();let h;if(c){const p=Sr(this,"formSerializer");if(o.indexOf("application/x-www-form-urlencoded")>-1)return MR(i,p).toString();if((h=j.isFileList(i))||o.indexOf("multipart/form-data")>-1){const y=Sr(this,"env"),g=y&&y.FormData;return Hu(h?{"files[]":i}:i,g&&new g,p)}}return c||s?(r.setContentType("application/json",!1),NR(i)):i}],transformResponse:[function(i){const r=Sr(this,"transitional")||oo.transitional,o=r&&r.forcedJSONParsing,s=Sr(this,"responseType"),c=s==="json";if(j.isResponse(i)||j.isReadableStream(i))return i;if(i&&j.isString(i)&&(o&&!s||c)){const h=!(r&&r.silentJSONParsing)&&c;try{return JSON.parse(i,Sr(this,"parseReviver"))}catch(p){if(h)throw p.name==="SyntaxError"?se.from(p,se.ERR_BAD_RESPONSE,this,null,Sr(this,"response")):p}}return i}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Nt.classes.FormData,Blob:Nt.classes.Blob},validateStatus:function(i){return i>=200&&i<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};j.forEach(["delete","get","head","post","put","patch","query"],n=>{oo.headers[n]={}});function Md(n,i){const r=this||oo,o=i||r,s=$t.from(o.headers);let c=o.data;return j.forEach(n,function(h){c=h.call(r,c,s.normalize(),i?i.status:void 0)}),s.normalize(),c}function z1(n){return!!(n&&n.__CANCEL__)}let so=class extends se{constructor(i,r,o){super(i??"canceled",se.ERR_CANCELED,r,o),this.name="CanceledError",this.__CANCEL__=!0}};function M1(n,i,r){const o=r.config.validateStatus;!r.status||!o||o(r.status)?n(r):i(new se("Request failed with status code "+r.status,r.status>=400&&r.status<500?se.ERR_BAD_REQUEST:se.ERR_BAD_RESPONSE,r.config,r.request,r))}function UR(n){const i=/^([-+\w]{1,25}):(?:\/\/)?/.exec(n);return i&&i[1]||""}function BR(n,i){n=n||10;const r=new Array(n),o=new Array(n);let s=0,c=0,d;return i=i!==void 0?i:1e3,function(p){const y=Date.now(),g=o[c];d||(d=y),r[s]=p,o[s]=y;let b=c,A=0;for(;b!==s;)A+=r[b++],b=b%n;if(s=(s+1)%n,s===c&&(c=(c+1)%n),y-d<i)return;const M=g&&y-g;return M?Math.round(A*1e3/M):void 0}}function LR(n,i){let r=0,o=1e3/i,s,c;const d=(y,g=Date.now())=>{r=g,s=null,c&&(clearTimeout(c),c=null),n(...y)};return[(...y)=>{const g=Date.now(),b=g-r;b>=o?d(y,g):(s=y,c||(c=setTimeout(()=>{c=null,d(s)},o-b)))},()=>s&&d(s)]}const mu=(n,i,r=3)=>{let o=0;const s=BR(50,250);return LR(c=>{if(!c||typeof c.loaded!="number")return;const d=c.loaded,h=c.lengthComputable?c.total:void 0,p=h!=null?Math.min(d,h):d,y=Math.max(0,p-o),g=s(y);o=Math.max(o,p);const b={loaded:p,total:h,progress:h?p/h:void 0,bytes:y,rate:g||void 0,estimated:g&&h?(h-p)/g:void 0,event:c,lengthComputable:h!=null,[i?"download":"upload"]:!0};n(b)},r)},ub=(n,i)=>{const r=n!=null;return[o=>i[0]({lengthComputable:r,total:n,loaded:o}),i[1]]},cb=n=>(...i)=>j.asap(()=>n(...i)),HR=Nt.hasStandardBrowserEnv?((n,i)=>r=>(r=new URL(r,Nt.origin),n.protocol===r.protocol&&n.host===r.host&&(i||n.port===r.port)))(new URL(Nt.origin),Nt.navigator&&/(msie|trident)/i.test(Nt.navigator.userAgent)):()=>!0,qR=Nt.hasStandardBrowserEnv?{write(n,i,r,o,s,c,d){if(typeof document>"u")return;const h=[`${n}=${encodeURIComponent(i)}`];j.isNumber(r)&&h.push(`expires=${new Date(r).toUTCString()}`),j.isString(o)&&h.push(`path=${o}`),j.isString(s)&&h.push(`domain=${s}`),c===!0&&h.push("secure"),j.isString(d)&&h.push(`SameSite=${d}`),document.cookie=h.join("; ")},read(n){if(typeof document>"u")return null;const i=document.cookie.split(";");for(let r=0;r<i.length;r++){const o=i[r].replace(/^\s+/,""),s=o.indexOf("=");if(s!==-1&&o.slice(0,s)===n)try{return decodeURIComponent(o.slice(s+1))}catch{return o.slice(s+1)}}return null},remove(n){this.write(n,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function $R(n){return typeof n!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(n)}function VR(n,i){return i?n.replace(/\/?\/$/,"")+"/"+i.replace(/^\/+/,""):n}const YR=/^https?:(?!\/\/)/i,GR=/[\t\n\r]/g;function XR(n){let i=0;for(;i<n.length&&n.charCodeAt(i)<=32;)i++;return n.slice(i)}function FR(n){return XR(n).replace(GR,"")}function fb(n,i){if(typeof n=="string"&&YR.test(FR(n)))throw new se('Invalid URL: missing "//" after protocol',se.ERR_INVALID_URL,i)}function j1(n,i,r,o){fb(i,o);let s=!$R(i);return n&&(s||r===!1)?(fb(n,o),VR(n,i)):i}const db=n=>n instanceof $t?{...n}:n;function Mi(n,i){n=n||{},i=i||{};const r=Object.create(null);Object.defineProperty(r,"hasOwnProperty",{__proto__:null,value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function o(g,b,A,M){return j.isPlainObject(g)&&j.isPlainObject(b)?j.merge.call({caseless:M},g,b):j.isPlainObject(b)?j.merge({},b):j.isArray(b)?b.slice():b}function s(g,b,A,M){if(j.isUndefined(b)){if(!j.isUndefined(g))return o(void 0,g,A,M)}else return o(g,b,A,M)}function c(g,b){if(!j.isUndefined(b))return o(void 0,b)}function d(g,b){if(j.isUndefined(b)){if(!j.isUndefined(g))return o(void 0,g)}else return o(void 0,b)}function h(g){const b=j.hasOwnProp(i,"transitional")?i.transitional:void 0;if(!j.isUndefined(b))if(j.isPlainObject(b)){if(j.hasOwnProp(b,g))return b[g]}else return;const A=j.hasOwnProp(n,"transitional")?n.transitional:void 0;if(j.isPlainObject(A)&&j.hasOwnProp(A,g))return A[g]}function p(g,b,A){if(j.hasOwnProp(i,A))return o(g,b);if(j.hasOwnProp(n,A))return o(void 0,g)}const y={url:c,method:c,data:c,baseURL:d,transformRequest:d,transformResponse:d,paramsSerializer:d,timeout:d,timeoutMessage:d,withCredentials:d,withXSRFToken:d,adapter:d,responseType:d,xsrfCookieName:d,xsrfHeaderName:d,onUploadProgress:d,onDownloadProgress:d,decompress:d,maxContentLength:d,maxBodyLength:d,beforeRedirect:d,transport:d,httpAgent:d,httpsAgent:d,cancelToken:d,socketPath:d,allowedSocketPaths:d,responseEncoding:d,validateStatus:p,headers:(g,b,A)=>s(db(g),db(b),A,!0)};return j.forEach(Object.keys({...n,...i}),function(b){if(b==="__proto__"||b==="constructor"||b==="prototype")return;const A=j.hasOwnProp(y,b)?y[b]:s,M=j.hasOwnProp(n,b)?n[b]:void 0,z=j.hasOwnProp(i,b)?i[b]:void 0,C=A(M,z,b);j.isUndefined(C)&&A!==p||(r[b]=C)}),j.hasOwnProp(i,"validateStatus")&&j.isUndefined(i.validateStatus)&&h("validateStatusUndefinedResolves")===!1&&(j.hasOwnProp(n,"validateStatus")?r.validateStatus=o(void 0,n.validateStatus):delete r.validateStatus),r}const QR=["content-type","content-length"];function ZR(n,i,r){if(r!=="content-only"){n.set(i);return}Object.entries(i||{}).forEach(([o,s])=>{QR.includes(o.toLowerCase())&&n.set(o,s)})}const KR=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(i,r)=>String.fromCharCode(parseInt(r,16)));function k1(n){const i=Mi({},n),r=A=>j.hasOwnProp(i,A)?i[A]:void 0,o=r("data");let s=r("withXSRFToken");const c=r("xsrfHeaderName"),d=r("xsrfCookieName");let h=r("headers");const p=r("auth"),y=r("baseURL"),g=r("allowAbsoluteUrls"),b=r("url");if(i.headers=h=$t.from(h),i.url=O1(j1(y,b,g,i),r("params"),r("paramsSerializer")),p){const A=j.getSafeProp(p,"username")||"",M=j.getSafeProp(p,"password")||"";try{h.set("Authorization","Basic "+btoa(A+":"+(M?KR(M):"")))}catch(z){throw se.from(z,se.ERR_BAD_OPTION_VALUE,n)}}if(j.isFormData(o)&&(Nt.hasStandardBrowserEnv||Nt.hasStandardBrowserWebWorkerEnv||j.isReactNative(o)?h.setContentType(void 0):j.isFunction(o.getHeaders)&&ZR(h,o.getHeaders(),r("formDataHeaderPolicy"))),Nt.hasStandardBrowserEnv&&(j.isFunction(s)&&(s=s(i)),s===!0||s==null&&HR(i.url))){const M=c&&d&&qR.read(d);M&&h.set(c,M)}return i}const PR=typeof XMLHttpRequest<"u",JR=PR&&function(n){return new Promise(function(r,o){const s=k1(n);let c=s.data;const d=$t.from(s.headers).normalize();let{responseType:h,onUploadProgress:p,onDownloadProgress:y}=s,g,b,A,M,z;function C(){M&&M(),z&&z(),s.cancelToken&&s.cancelToken.unsubscribe(g),s.signal&&s.signal.removeEventListener("abort",g)}let S=new XMLHttpRequest;S.open(s.method.toUpperCase(),s.url,!0),S.timeout=s.timeout;function T(){if(!S)return;const O=$t.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),Y={data:!h||h==="text"||h==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:O,config:n,request:S};M1(function(q){r(q),C()},function(q){o(q),C()},Y),S=null}"onloadend"in S?S.onloadend=T:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.startsWith("file:"))||setTimeout(T)},S.onabort=function(){S&&(o(new se("Request aborted",se.ECONNABORTED,n,S)),C(),S=null)},S.onerror=function(L){const Y=L&&L.message?L.message:"Network Error",P=new se(Y,se.ERR_NETWORK,n,S);P.event=L||null,o(P),C(),S=null},S.ontimeout=function(){let L=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const Y=s.transitional||Kh;s.timeoutErrorMessage&&(L=s.timeoutErrorMessage),o(new se(L,Y.clarifyTimeoutError?se.ETIMEDOUT:se.ECONNABORTED,n,S)),C(),S=null},c===void 0&&d.setContentType(null),"setRequestHeader"in S&&j.forEach(w1(d),function(L,Y){S.setRequestHeader(Y,L)}),j.isUndefined(s.withCredentials)||(S.withCredentials=!!s.withCredentials),h&&h!=="json"&&(S.responseType=s.responseType),y&&([A,z]=mu(y,!0),S.addEventListener("progress",A)),p&&S.upload&&([b,M]=mu(p),S.upload.addEventListener("progress",b),S.upload.addEventListener("loadend",M)),(s.cancelToken||s.signal)&&(g=O=>{S&&(o(!O||O.type?new so(null,n,S):O),S.abort(),C(),S=null)},s.cancelToken&&s.cancelToken.subscribe(g),s.signal&&(s.signal.aborted?g():s.signal.addEventListener("abort",g)));const _=UR(s.url);if(_&&!Nt.protocols.includes(_)){o(new se("Unsupported protocol "+_+":",se.ERR_BAD_REQUEST,n)),C();return}S.send(c||null)})},IR=(n,i)=>{if(n=n?n.filter(Boolean):[],!i&&!n.length)return;const r=new AbortController;let o=!1;const s=function(p){if(!o){o=!0,d();const y=p instanceof Error?p:this.reason;r.abort(y instanceof se?y:new so(y instanceof Error?y.message:y))}};let c=i&&setTimeout(()=>{c=null,s(new se(`timeout of ${i}ms exceeded`,se.ETIMEDOUT))},i);const d=()=>{n&&(c&&clearTimeout(c),c=null,n.forEach(p=>{p.unsubscribe?p.unsubscribe(s):p.removeEventListener("abort",s)}),n=null)};n.forEach(p=>p.addEventListener("abort",s,{once:!0}));const{signal:h}=r;return h.unsubscribe=()=>j.asap(d),h},WR=function*(n,i){let r=n.byteLength;if(r<i){yield n;return}let o=0,s;for(;o<r;)s=o+i,yield n.slice(o,s),o=s},eA=async function*(n,i){for await(const r of tA(n))yield*WR(r,i)},tA=async function*(n){if(n[Symbol.asyncIterator]){yield*n;return}const i=n.getReader();try{for(;;){const{done:r,value:o}=await i.read();if(r)break;yield o}}finally{await i.cancel()}},hb=(n,i,r,o)=>{const s=eA(n,i);let c=0,d,h=p=>{d||(d=!0,o&&o(p))};return new ReadableStream({async pull(p){try{const{done:y,value:g}=await s.next();if(y){h(),p.close();return}let b=g.byteLength;if(r){let A=c+=b;r(A)}p.enqueue(new Uint8Array(g))}catch(y){throw h(y),y}},cancel(p){return h(p),s.return()}},{highWaterMark:2})},yu=n=>n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102,nA=(n,i,r)=>i+2<r&&yu(n.charCodeAt(i+1))&&yu(n.charCodeAt(i+2));function aA(n){if(!n||typeof n!="string"||!n.startsWith("data:"))return 0;const i=n.indexOf(",");if(i<0)return 0;const r=n.slice(5,i),o=n.slice(i+1);if(/;base64/i.test(r)){let d=o.length;const h=o.length;for(let M=0;M<h;M++)if(o.charCodeAt(M)===37&&M+2<h){const z=o.charCodeAt(M+1),C=o.charCodeAt(M+2);yu(z)&&yu(C)&&(d-=2,M+=2)}let p=0,y=h-1;const g=M=>M>=2&&o.charCodeAt(M-2)===37&&o.charCodeAt(M-1)===51&&(o.charCodeAt(M)===68||o.charCodeAt(M)===100);y>=0&&(o.charCodeAt(y)===61?(p++,y--):g(y)&&(p++,y-=3)),p===1&&y>=0&&(o.charCodeAt(y)===61||g(y))&&p++;const A=Math.floor(d/4)*3-(p||0);return A>0?A:0}let c=0;for(let d=0,h=o.length;d<h;d++){const p=o.charCodeAt(d);if(p===37&&nA(o,d,h))c+=1,d+=2;else if(p<128)c+=1;else if(p<2048)c+=2;else if(p>=55296&&p<=56319&&d+1<h){const y=o.charCodeAt(d+1);y>=56320&&y<=57343?(c+=4,d++):c+=3}else c+=3}return c}const Jh="1.18.1",pb=64*1024,{isFunction:ks}=j,iA=n=>encodeURIComponent(n).replace(/%([0-9A-F]{2})/gi,(i,r)=>String.fromCharCode(parseInt(r,16))),mb=n=>{if(!j.isString(n))return n;try{return decodeURIComponent(n)}catch{return n}},yb=(n,...i)=>{try{return!!n(...i)}catch{return!1}},rA=n=>{const i=n.indexOf("://");let r=n;return i!==-1&&(r=r.slice(i+3)),r.includes("@")||r.includes(":")},lA=n=>{const i=j.global!==void 0&&j.global!==null?j.global:globalThis,{ReadableStream:r,TextEncoder:o}=i;n=j.merge.call({skipUndefined:!0},{Request:i.Request,Response:i.Response},n);const{fetch:s,Request:c,Response:d}=n,h=s?ks(s):typeof fetch=="function",p=ks(c),y=ks(d);if(!h)return!1;const g=h&&ks(r),b=h&&(typeof o=="function"?(T=>_=>T.encode(_))(new o):async T=>new Uint8Array(await new c(T).arrayBuffer())),A=p&&g&&yb(()=>{let T=!1;const _=new c(Nt.origin,{body:new r,method:"POST",get duplex(){return T=!0,"half"}}),O=_.headers.has("Content-Type");return _.body!=null&&_.body.cancel(),T&&!O}),M=y&&g&&yb(()=>j.isReadableStream(new d("").body)),z={stream:M&&(T=>T.body)};h&&["text","arrayBuffer","blob","formData","stream"].forEach(T=>{!z[T]&&(z[T]=(_,O)=>{let L=_&&_[T];if(L)return L.call(_);throw new se(`Response type '${T}' is not supported`,se.ERR_NOT_SUPPORT,O)})});const C=async T=>{if(T==null)return 0;if(j.isBlob(T))return T.size;if(j.isSpecCompliantForm(T))return(await new c(Nt.origin,{method:"POST",body:T}).arrayBuffer()).byteLength;if(j.isArrayBufferView(T)||j.isArrayBuffer(T))return T.byteLength;if(j.isURLSearchParams(T)&&(T=T+""),j.isString(T))return(await b(T)).byteLength},S=async(T,_)=>{const O=j.toFiniteNumber(T.getContentLength());return O??C(_)};return async T=>{let{url:_,method:O,data:L,signal:Y,cancelToken:P,timeout:q,onDownloadProgress:W,onUploadProgress:ge,responseType:Te,headers:Se,withCredentials:me="same-origin",fetchOptions:ue,maxContentLength:be,maxBodyLength:Ee}=k1(T);const G=j.isNumber(be)&&be>-1,ae=j.isNumber(Ee)&&Ee>-1,ce=oe=>j.hasOwnProp(T,oe)?T[oe]:void 0;let Oe=s||fetch;Te=Te?(Te+"").toLowerCase():"text";let _e=IR([Y,P&&P.toAbortSignal()],q),R=null;const Z=_e&&_e.unsubscribe&&(()=>{_e.unsubscribe()});let ne,re=null;const pe=()=>new se("Request body larger than maxBodyLength limit",se.ERR_BAD_REQUEST,T,R);try{let oe;const xe=ce("auth");if(xe){const Re=j.getSafeProp(xe,"username")||"",wt=j.getSafeProp(xe,"password")||"";oe={username:Re,password:wt}}if(rA(_)){const Re=new URL(_,Nt.origin);if(!oe&&(Re.username||Re.password)){const wt=mb(Re.username),Yt=mb(Re.password);oe={username:wt,password:Yt}}(Re.username||Re.password)&&(Re.username="",Re.password="",_=Re.href)}if(oe&&(Se.delete("authorization"),Se.set("Authorization","Basic "+btoa(iA((oe.username||"")+":"+(oe.password||""))))),G&&typeof _=="string"&&_.startsWith("data:")&&aA(_)>be)throw new se("maxContentLength size of "+be+" exceeded",se.ERR_BAD_RESPONSE,T,R);if(ae&&O!=="get"&&O!=="head"){const Re=await C(L);if(typeof Re=="number"&&isFinite(Re)&&(ne=Re,Re>Ee))throw pe()}const Qe=ae&&(j.isReadableStream(L)||j.isStream(L)),Ve=(Re,wt,Yt)=>hb(Re,pb,Gt=>{if(ae&&Gt>Ee)throw re=pe();wt&&wt(Gt)},Yt);if(A&&O!=="get"&&O!=="head"&&(ge||Qe)){if(ne=ne??await S(Se,L),ne!==0||Qe){let Re=new c(_,{method:"POST",body:L,duplex:"half"}),wt;if(j.isFormData(L)&&(wt=Re.headers.get("content-type"))&&Se.setContentType(wt),Re.body){const[Yt,Gt]=ge&&ub(ne,mu(cb(ge)))||[];L=Ve(Re.body,Yt,Gt)}}}else if(Qe&&!p&&g&&O!=="get"&&O!=="head")L=Ve(L);else if(Qe&&p&&!A&&O!=="get"&&O!=="head")throw new se("Stream request bodies are not supported by the current fetch implementation",se.ERR_NOT_SUPPORT,T,R);j.isString(me)||(me=me?"include":"omit");const vt=p&&"credentials"in c.prototype;if(j.isFormData(L)){const Re=Se.getContentType();Re&&/^multipart\/form-data/i.test(Re)&&!/boundary=/i.test(Re)&&Se.delete("content-type")}Se.set("User-Agent","axios/"+Jh,!1);const Fn={...ue,signal:_e,method:O.toUpperCase(),headers:w1(Se.normalize()),body:L,duplex:"half",credentials:vt?me:void 0};R=p&&new c(_,Fn);let _t=await(p?Oe(R,ue):Oe(_,Fn));const ai=$t.from(_t.headers);if(G){const Re=j.toFiniteNumber(ai.getContentLength());if(Re!=null&&Re>be)throw new se("maxContentLength size of "+be+" exceeded",se.ERR_BAD_RESPONSE,T,R)}const Kt=M&&(Te==="stream"||Te==="response");if(M&&_t.body&&(W||G||Kt&&Z)){const Re={};["status","statusText","headers"].forEach(ta=>{Re[ta]=_t[ta]});const wt=j.toFiniteNumber(ai.getContentLength()),[Yt,Gt]=W&&ub(wt,mu(cb(W),!0))||[];let Aa=0;const Oa=ta=>{if(G&&(Aa=ta,Aa>be))throw new se("maxContentLength size of "+be+" exceeded",se.ERR_BAD_RESPONSE,T,R);Yt&&Yt(ta)};_t=new d(hb(_t.body,pb,Oa,()=>{Gt&&Gt(),Z&&Z()}),Re)}Te=Te||"text";let Vt=await z[j.findKey(z,Te)||"text"](_t,T);if(G&&!M&&!Kt){let Re;if(Vt!=null&&(typeof Vt.byteLength=="number"?Re=Vt.byteLength:typeof Vt.size=="number"?Re=Vt.size:typeof Vt=="string"&&(Re=typeof o=="function"?new o().encode(Vt).byteLength:Vt.length)),typeof Re=="number"&&Re>be)throw new se("maxContentLength size of "+be+" exceeded",se.ERR_BAD_RESPONSE,T,R)}return!Kt&&Z&&Z(),await new Promise((Re,wt)=>{M1(Re,wt,{data:Vt,headers:$t.from(_t.headers),status:_t.status,statusText:_t.statusText,config:T,request:R})})}catch(oe){if(Z&&Z(),_e&&_e.aborted&&_e.reason instanceof se){const xe=_e.reason;throw xe.config=T,R&&(xe.request=R),oe!==xe&&Object.defineProperty(xe,"cause",{__proto__:null,value:oe,writable:!0,enumerable:!1,configurable:!0}),xe}if(re)throw R&&!re.request&&(re.request=R),re;if(oe instanceof se)throw R&&!oe.request&&(oe.request=R),oe;if(oe&&oe.name==="TypeError"&&/Load failed|fetch/i.test(oe.message)){const xe=new se("Network Error",se.ERR_NETWORK,T,R,oe&&oe.response);throw Object.defineProperty(xe,"cause",{__proto__:null,value:oe.cause||oe,writable:!0,enumerable:!1,configurable:!0}),xe}throw se.from(oe,oe&&oe.code,T,R,oe&&oe.response)}}},oA=new Map,N1=n=>{let i=n&&n.env||{};const{fetch:r,Request:o,Response:s}=i,c=[o,s,r];let d=c.length,h=d,p,y,g=oA;for(;h--;)p=c[h],y=g.get(p),y===void 0&&g.set(p,y=h?new Map:lA(i)),g=y;return y};N1();const Ih={http:xR,xhr:JR,fetch:{get:N1}};j.forEach(Ih,(n,i)=>{if(n){try{Object.defineProperty(n,"name",{__proto__:null,value:i})}catch{}Object.defineProperty(n,"adapterName",{__proto__:null,value:i})}});const gb=n=>`- ${n}`,sA=n=>j.isFunction(n)||n===null||n===!1;function uA(n,i){n=j.isArray(n)?n:[n];const{length:r}=n;let o,s;const c={};for(let d=0;d<r;d++){o=n[d];let h;if(s=o,!sA(o)&&(s=Ih[(h=String(o)).toLowerCase()],s===void 0))throw new se(`Unknown adapter '${h}'`);if(s&&(j.isFunction(s)||(s=s.get(i))))break;c[h||"#"+d]=s}if(!s){const d=Object.entries(c).map(([p,y])=>`adapter ${p} `+(y===!1?"is not supported by the environment":"is not available in the build"));let h=r?d.length>1?`since :
`+d.map(gb).join(`
`):" "+gb(d[0]):"as no adapter specified";throw new se("There is no suitable adapter to dispatch the request "+h,se.ERR_NOT_SUPPORT)}return s}const U1={getAdapter:uA,adapters:Ih};function jd(n){if(n.cancelToken&&n.cancelToken.throwIfRequested(),n.signal&&n.signal.aborted)throw new so(null,n)}function bb(n){return jd(n),n.headers=$t.from(n.headers),n.data=Md.call(n,n.transformRequest),["post","put","patch"].indexOf(n.method)!==-1&&n.headers.setContentType("application/x-www-form-urlencoded",!1),U1.getAdapter(n.adapter||oo.adapter,n)(n).then(function(o){jd(n),n.response=o;try{o.data=Md.call(n,n.transformResponse,o)}finally{delete n.response}return o.headers=$t.from(o.headers),o},function(o){if(!z1(o)&&(jd(n),o&&o.response)){n.response=o.response;try{o.response.data=Md.call(n,n.transformResponse,o.response)}finally{delete n.response}o.response.headers=$t.from(o.response.headers)}return Promise.reject(o)})}const qu={};["object","boolean","number","function","string","symbol"].forEach((n,i)=>{qu[n]=function(o){return typeof o===n||"a"+(i<1?"n ":" ")+n}});const vb={};qu.transitional=function(i,r,o){function s(c,d){return"[Axios v"+Jh+"] Transitional option '"+c+"'"+d+(o?". "+o:"")}return(c,d,h)=>{if(i===!1)throw new se(s(d," has been removed"+(r?" in "+r:"")),se.ERR_DEPRECATED);return r&&!vb[d]&&(vb[d]=!0,console.warn(s(d," has been deprecated since v"+r+" and will be removed in the near future"))),i?i(c,d,h):!0}};qu.spelling=function(i){return(r,o)=>(console.warn(`${o} is likely a misspelling of ${i}`),!0)};function cA(n,i,r){if(typeof n!="object"||n===null)throw new se("options must be an object",se.ERR_BAD_OPTION_VALUE);const o=Object.keys(n);let s=o.length;for(;s-- >0;){const c=o[s],d=Object.prototype.hasOwnProperty.call(i,c)?i[c]:void 0;if(d){const h=n[c],p=h===void 0||d(h,c,n);if(p!==!0)throw new se("option "+c+" must be "+p,se.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new se("Unknown option "+c,se.ERR_BAD_OPTION)}}const Ks={assertOptions:cA,validators:qu},Ht=Ks.validators;let Ai=class{constructor(i){this.defaults=i||{},this.interceptors={request:new ob,response:new ob}}async request(i,r){try{return await this._request(i,r)}catch(o){if(o instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const c=(()=>{if(!s.stack)return"";const d=s.stack.indexOf(`
`);return d===-1?"":s.stack.slice(d+1)})();try{if(!o.stack)o.stack=c;else if(c){const d=c.indexOf(`
`),h=d===-1?-1:c.indexOf(`
`,d+1),p=h===-1?"":c.slice(h+1);String(o.stack).endsWith(p)||(o.stack+=`
`+c)}}catch{}}throw o}}_request(i,r){typeof i=="string"?(r=r||{},r.url=i):r=i||{},r=Mi(this.defaults,r);const{transitional:o,paramsSerializer:s,headers:c}=r;o!==void 0&&Ks.assertOptions(o,{silentJSONParsing:Ht.transitional(Ht.boolean),forcedJSONParsing:Ht.transitional(Ht.boolean),clarifyTimeoutError:Ht.transitional(Ht.boolean),legacyInterceptorReqResOrdering:Ht.transitional(Ht.boolean),advertiseZstdAcceptEncoding:Ht.transitional(Ht.boolean),validateStatusUndefinedResolves:Ht.transitional(Ht.boolean)},!1),s!=null&&(j.isFunction(s)?r.paramsSerializer={serialize:s}:Ks.assertOptions(s,{encode:Ht.function,serialize:Ht.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),Ks.assertOptions(r,{baseUrl:Ht.spelling("baseURL"),withXsrfToken:Ht.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let d=c&&j.merge(c.common,c[r.method]);c&&j.forEach(["delete","get","head","post","put","patch","query","common"],z=>{delete c[z]}),r.headers=$t.concat(d,c);const h=[];let p=!0;this.interceptors.request.forEach(function(C){if(typeof C.runWhen=="function"&&C.runWhen(r)===!1)return;p=p&&C.synchronous;const S=r.transitional||Kh;S&&S.legacyInterceptorReqResOrdering?h.unshift(C.fulfilled,C.rejected):h.push(C.fulfilled,C.rejected)});const y=[];this.interceptors.response.forEach(function(C){y.push(C.fulfilled,C.rejected)});let g,b=0,A;if(!p){const z=[bb.bind(this),void 0];for(z.unshift(...h),z.push(...y),A=z.length,g=Promise.resolve(r);b<A;)g=g.then(z[b++],z[b++]);return g}A=h.length;let M=r;for(;b<A;){const z=h[b++],C=h[b++];try{M=z(M)}catch(S){C.call(this,S);break}}try{g=bb.call(this,M)}catch(z){return Promise.reject(z)}for(b=0,A=y.length;b<A;)g=g.then(y[b++],y[b++]);return g}getUri(i){i=Mi(this.defaults,i);const r=j1(i.baseURL,i.url,i.allowAbsoluteUrls,i);return O1(r,i.params,i.paramsSerializer)}};j.forEach(["delete","get","head","options"],function(i){Ai.prototype[i]=function(r,o){return this.request(Mi(o||{},{method:i,url:r,data:o&&j.hasOwnProp(o,"data")?o.data:void 0}))}});j.forEach(["post","put","patch","query"],function(i){function r(o){return function(c,d,h){return this.request(Mi(h||{},{method:i,headers:o?{"Content-Type":"multipart/form-data"}:{},url:c,data:d}))}}Ai.prototype[i]=r(),i!=="query"&&(Ai.prototype[i+"Form"]=r(!0))});let fA=class B1{constructor(i){if(typeof i!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(c){r=c});const o=this;this.promise.then(s=>{if(!o._listeners)return;let c=o._listeners.length;for(;c-- >0;)o._listeners[c](s);o._listeners=null}),this.promise.then=s=>{let c;const d=new Promise(h=>{o.subscribe(h),c=h}).then(s);return d.cancel=function(){o.unsubscribe(c)},d},i(function(c,d,h){o.reason||(o.reason=new so(c,d,h),r(o.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]}unsubscribe(i){if(!this._listeners)return;const r=this._listeners.indexOf(i);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const i=new AbortController,r=o=>{i.abort(o)};return this.subscribe(r),i.signal.unsubscribe=()=>this.unsubscribe(r),i.signal}static source(){let i;return{token:new B1(function(s){i=s}),cancel:i}}};function dA(n){return function(r){return n.apply(null,r)}}function hA(n){return j.isObject(n)&&n.isAxiosError===!0}const ch={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(ch).forEach(([n,i])=>{ch[i]=n});function L1(n){const i=new Ai(n),r=p1(Ai.prototype.request,i);return j.extend(r,Ai.prototype,i,{allOwnKeys:!0}),j.extend(r,i,null,{allOwnKeys:!0}),r.create=function(s){return L1(Mi(n,s))},r}const dt=L1(oo);dt.Axios=Ai;dt.CanceledError=so;dt.CancelToken=fA;dt.isCancel=z1;dt.VERSION=Jh;dt.toFormData=Hu;dt.AxiosError=se;dt.Cancel=dt.CanceledError;dt.all=function(i){return Promise.all(i)};dt.spread=dA;dt.isAxiosError=hA;dt.mergeConfig=Mi;dt.AxiosHeaders=$t;dt.formToJSON=n=>D1(j.isHTMLForm(n)?new FormData(n):n);dt.getAdapter=U1.getAdapter;dt.HttpStatusCode=ch;dt.default=dt;const{Axios:tD,AxiosError:nD,CanceledError:aD,isCancel:iD,CancelToken:rD,VERSION:lD,all:oD,Cancel:sD,isAxiosError:uD,spread:cD,toFormData:fD,AxiosHeaders:dD,HttpStatusCode:hD,formToJSON:pD,getAdapter:mD,mergeConfig:yD,create:gD}=dt,Zt=dt.create({baseURL:"https://readjourney.b.goit.study/api/"}),Wh=n=>{Zt.defaults.headers.common.Authorization=`Bearer ${n}`},pA=()=>{Zt.defaults.headers.common.Authorization=""};function H1(n){var i,r,o="";if(typeof n=="string"||typeof n=="number")o+=n;else if(typeof n=="object")if(Array.isArray(n)){var s=n.length;for(i=0;i<s;i++)n[i]&&(r=H1(n[i]))&&(o&&(o+=" "),o+=r)}else for(r in n)n[r]&&(o&&(o+=" "),o+=r);return o}function Oi(){for(var n,i,r=0,o="",s=arguments.length;r<s;r++)(n=arguments[r])&&(i=H1(n))&&(o&&(o+=" "),o+=i);return o}var uo=n=>typeof n=="number"&&!isNaN(n),ji=n=>typeof n=="string",Ra=n=>typeof n=="function",mA=n=>ji(n)||uo(n),fh=n=>ji(n)||Ra(n)?n:null,yA=(n,i)=>n===!1||uo(n)&&n>0?n:i,dh=n=>k.isValidElement(n)||ji(n)||Ra(n)||uo(n);function gA(n,i,r=300){let{scrollHeight:o,style:s}=n;requestAnimationFrame(()=>{s.minHeight="initial",s.height=o+"px",s.transition=`all ${r}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(i,r)})})}function bA({enter:n,exit:i,appendPosition:r=!1,collapse:o=!0,collapseDuration:s=300}){return function({children:c,position:d,preventExitTransition:h,done:p,nodeRef:y,isIn:g,playToast:b}){let A=r?`${n}--${d}`:n,M=r?`${i}--${d}`:i,z=k.useRef(0);return k.useLayoutEffect(()=>{let C=y.current,S=A.split(" "),T=_=>{_.target===y.current&&(b(),C.removeEventListener("animationend",T),C.removeEventListener("animationcancel",T),z.current===0&&_.type!=="animationcancel"&&C.classList.remove(...S))};C.classList.add(...S),C.addEventListener("animationend",T),C.addEventListener("animationcancel",T)},[]),k.useEffect(()=>{let C=y.current,S=()=>{C.removeEventListener("animationend",S),o?gA(C,p,s):p()};g||(h?S():(z.current=1,C.className+=` ${M}`,C.addEventListener("animationend",S)))},[g]),Ae.createElement(Ae.Fragment,null,c)}}function xb(n,i){return{content:q1(n.content,n.props),containerId:n.props.containerId,id:n.props.toastId,theme:n.props.theme,type:n.props.type,data:n.props.data||{},isLoading:n.props.isLoading,icon:n.props.icon,reason:n.removalReason,status:i}}function q1(n,i,r=!1){return k.isValidElement(n)&&!ji(n.type)?k.cloneElement(n,{closeToast:i.closeToast,toastProps:i,data:i.data,isPaused:r}):Ra(n)?n({closeToast:i.closeToast,toastProps:i,data:i.data,isPaused:r}):n}function vA({closeToast:n,theme:i,ariaLabel:r="close"}){return Ae.createElement("button",{className:`Toastify__close-button Toastify__close-button--${i}`,type:"button",onClick:o=>{o.stopPropagation(),n(!0)},"aria-label":r},Ae.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},Ae.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function xA({delay:n,isRunning:i,closeToast:r,type:o="default",hide:s,className:c,controlledProgress:d,progress:h,rtl:p,isIn:y,theme:g}){let b=s||d&&h===0,A={animationDuration:`${n}ms`,animationPlayState:i?"running":"paused"};d&&(A.transform=`scaleX(${h})`);let M=Oi("Toastify__progress-bar",d?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${g}`,`Toastify__progress-bar--${o}`,{"Toastify__progress-bar--rtl":p}),z=Ra(c)?c({rtl:p,type:o,defaultClassName:M}):Oi(M,c),C={[d&&h>=1?"onTransitionEnd":"onAnimationEnd"]:d&&h<1?null:()=>{y&&r()}};return Ae.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":b},Ae.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${g} Toastify__progress-bar--${o}`}),Ae.createElement("div",{role:"progressbar","aria-hidden":b?"true":"false","aria-label":"notification timer","aria-valuenow":d?Math.round(h*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:z,style:A,...C}))}var SA=1,$1=()=>`${SA++}`;function _A(n,i,r){let o=1,s=0,c=[],d=[],h=i,p=new Map,y=new Set,g=_=>(y.add(_),()=>y.delete(_)),b=()=>{d=Array.from(p.values()),y.forEach(_=>_())},A=({containerId:_,toastId:O,updateId:L})=>{let Y=_?_!==n:n!==1,P=p.has(O)&&L==null;return Y||P},M=(_,O)=>{p.forEach(L=>{var Y;(O==null||O===L.props.toastId)&&((Y=L.toggle)==null||Y.call(L,_))})},z=_=>{var O,L;_.isActive&&((L=(O=_.props)==null?void 0:O.onClose)==null||L.call(O,_.removalReason),_.isActive=!1,r(xb(_,"removed")))},C=_=>{if(_==null)p.forEach(z);else{let O=p.get(_);O&&z(O)}b()},S=()=>{s-=c.length,c=[]},T=_=>{var O,L;let{toastId:Y,updateId:P}=_.props,q=P==null;_.staleId&&p.delete(_.staleId),_.isActive=!0,p.set(Y,_),b(),r(xb(_,q?"added":"updated")),q&&((L=(O=_.props).onOpen)==null||L.call(O))};return{id:n,props:h,observe:g,toggle:M,removeToast:C,toasts:p,clearQueue:S,buildToast:(_,O)=>{if(A(O))return;let{toastId:L,updateId:Y,data:P,staleId:q,delay:W}=O,ge=Y==null;ge&&s++;let Te={...h,style:h.toastStyle,key:o++,...Object.fromEntries(Object.entries(O).filter(([me,ue])=>ue!=null)),toastId:L,updateId:Y,data:P,isIn:!1,className:fh(O.className||h.toastClassName),progressClassName:fh(O.progressClassName||h.progressClassName),autoClose:O.isLoading?!1:yA(O.autoClose,h.autoClose),closeToast(me){let ue=p.get(L);ue&&(ue.removalReason=me,C(L))},deleteToast(){if(p.get(L)!=null){if(p.delete(L),s--,s<0&&(s=0),c.length>0){T(c.shift());return}b()}}};Te.closeButton=h.closeButton,O.closeButton===!1||dh(O.closeButton)?Te.closeButton=O.closeButton:O.closeButton===!0&&(Te.closeButton=dh(h.closeButton)?h.closeButton:!0);let Se={content:_,props:Te,staleId:q};h.limit&&h.limit>0&&s>h.limit&&ge?c.push(Se):uo(W)?setTimeout(()=>{T(Se)},W):T(Se)},setProps(_){h=_},setToggle:(_,O)=>{let L=p.get(_);L&&(L.toggle=O)},isToastActive:_=>{var O;return(O=p.get(_))==null?void 0:O.isActive},getSnapshot:()=>d}}var Ft=new Map,eo=[],hh=new Set,wA=n=>hh.forEach(i=>i(n)),V1=()=>Ft.size>0;function EA(){eo.forEach(n=>G1(n.content,n.options)),eo=[]}var TA=(n,{containerId:i})=>{var r;return(r=Ft.get(i||1))==null?void 0:r.toasts.get(n)};function Y1(n,i){var r;if(i)return!!((r=Ft.get(i))!=null&&r.isToastActive(n));let o=!1;return Ft.forEach(s=>{s.isToastActive(n)&&(o=!0)}),o}function RA(n){if(!V1()){eo=eo.filter(i=>n!=null&&i.options.toastId!==n);return}if(n==null||mA(n))Ft.forEach(i=>{i.removeToast(n)});else if(n&&("containerId"in n||"id"in n)){let i=Ft.get(n.containerId);i?i.removeToast(n.id):Ft.forEach(r=>{r.removeToast(n.id)})}}var AA=(n={})=>{Ft.forEach(i=>{i.props.limit&&(!n.containerId||i.id===n.containerId)&&i.clearQueue()})};function G1(n,i){dh(n)&&(V1()||eo.push({content:n,options:i}),Ft.forEach(r=>{r.buildToast(n,i)}))}function OA(n){var i;(i=Ft.get(n.containerId||1))==null||i.setToggle(n.id,n.fn)}function X1(n,i){Ft.forEach(r=>{(i==null||!(i!=null&&i.containerId)||i?.containerId===r.id)&&r.toggle(n,i?.id)})}function CA(n){let i=n.containerId||1;return{subscribe(r){let o=_A(i,n,wA);Ft.set(i,o);let s=o.observe(r);return EA(),()=>{s(),Ft.delete(i)}},setProps(r){var o;(o=Ft.get(i))==null||o.setProps(r)},getSnapshot(){var r;return(r=Ft.get(i))==null?void 0:r.getSnapshot()}}}function DA(n){return hh.add(n),()=>{hh.delete(n)}}function zA(n){return n&&(ji(n.toastId)||uo(n.toastId))?n.toastId:$1()}function co(n,i){return G1(n,i),i.toastId}function $u(n,i){return{...i,type:i&&i.type||n,toastId:zA(i)}}function Vu(n){return(i,r)=>co(i,$u(n,r))}function Ue(n,i){return co(n,$u("default",i))}Ue.loading=(n,i)=>co(n,$u("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...i}));function MA(n,{pending:i,error:r,success:o},s){let c;i&&(c=ji(i)?Ue.loading(i,s):Ue.loading(i.render,{...s,...i}));let d={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},h=(y,g,b)=>{if(g==null){Ue.dismiss(c);return}let A={type:y,...d,...s,data:b},M=ji(g)?{render:g}:g;return c?Ue.update(c,{...A,...M}):Ue(M.render,{...A,...M}),b},p=Ra(n)?n():n;return p.then(y=>h("success",o,y)).catch(y=>h("error",r,y)),p}Ue.promise=MA;Ue.success=Vu("success");Ue.info=Vu("info");Ue.error=Vu("error");Ue.warning=Vu("warning");Ue.warn=Ue.warning;Ue.dark=(n,i)=>co(n,$u("default",{theme:"dark",...i}));function jA(n){RA(n)}Ue.dismiss=jA;Ue.clearWaitingQueue=AA;Ue.isActive=Y1;Ue.update=(n,i={})=>{let r=TA(n,i);if(r){let{props:o,content:s}=r,c={delay:100,...o,...i,toastId:i.toastId||n,updateId:$1()};c.toastId!==n&&(c.staleId=n);let d=c.render||s;delete c.render,co(d,c)}};Ue.done=n=>{Ue.update(n,{progress:1})};Ue.onChange=DA;Ue.play=n=>X1(!0,n);Ue.pause=n=>X1(!1,n);function kA(n){var i;let{subscribe:r,getSnapshot:o,setProps:s}=k.useRef(CA(n)).current;s(n);let c=(i=k.useSyncExternalStore(r,o,o))==null?void 0:i.slice();function d(h){if(!c)return[];let p=new Map;return n.newestOnTop&&c.reverse(),c.forEach(y=>{let{position:g}=y.props;p.has(g)||p.set(g,[]),p.get(g).push(y)}),Array.from(p,y=>h(y[0],y[1]))}return{getToastToRender:d,isToastActive:Y1,count:c?.length}}function NA(n){let[i,r]=k.useState(!1),[o,s]=k.useState(!1),c=k.useRef(null),d=k.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:h,pauseOnHover:p,closeToast:y,onClick:g,closeOnClick:b}=n;OA({id:n.toastId,containerId:n.containerId,fn:r}),k.useEffect(()=>{if(n.pauseOnFocusLoss)return A(),()=>{M()}},[n.pauseOnFocusLoss]);function A(){document.hasFocus()||T(),window.addEventListener("focus",S),window.addEventListener("blur",T)}function M(){window.removeEventListener("focus",S),window.removeEventListener("blur",T)}function z(q){if(n.draggable===!0||n.draggable===q.pointerType){_();let W=c.current;d.canCloseOnClick=!0,d.canDrag=!0,W.style.transition="none",n.draggableDirection==="x"?(d.start=q.clientX,d.removalDistance=W.offsetWidth*(n.draggablePercent/100)):(d.start=q.clientY,d.removalDistance=W.offsetHeight*(n.draggablePercent===80?n.draggablePercent*1.5:n.draggablePercent)/100)}}function C(q){let{top:W,bottom:ge,left:Te,right:Se}=c.current.getBoundingClientRect();q.pointerType==="mouse"&&n.pauseOnHover&&q.clientX>=Te&&q.clientX<=Se&&q.clientY>=W&&q.clientY<=ge?T():S()}function S(){r(!0)}function T(){r(!1)}function _(){d.didMove=!1,document.addEventListener("pointermove",L),document.addEventListener("pointerup",Y)}function O(){document.removeEventListener("pointermove",L),document.removeEventListener("pointerup",Y)}function L(q){let W=c.current;if(d.canDrag&&W){d.didMove=!0,i&&T(),n.draggableDirection==="x"?d.delta=q.clientX-d.start:d.delta=q.clientY-d.start,d.start!==q.clientX&&(d.canCloseOnClick=!1);let ge=n.draggableDirection==="x"?`${d.delta}px, var(--y)`:`0, calc(${d.delta}px + var(--y))`;W.style.transform=`translate3d(${ge},0)`,W.style.opacity=`${1-Math.abs(d.delta/d.removalDistance)}`}}function Y(){O();let q=c.current;if(d.canDrag&&d.didMove&&q){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance){s(!0),n.closeToast(!0),n.collapseAll();return}q.style.transition="transform 0.2s, opacity 0.2s",q.style.removeProperty("transform"),q.style.removeProperty("opacity")}}let P={onPointerDown:z,onPointerUp:C};return h&&p&&(P.onMouseEnter=T,n.stacked||(P.onMouseLeave=S)),b&&(P.onClick=q=>{g&&g(q),d.canCloseOnClick&&y(!0)}),{playToast:S,pauseToast:T,isRunning:i,preventExitTransition:o,toastRef:c,eventHandlers:P}}var F1=typeof window<"u"?k.useLayoutEffect:k.useEffect,Yu=({theme:n,type:i,isLoading:r,...o})=>Ae.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:n==="colored"?"currentColor":`var(--toastify-icon-color-${i})`,...o});function UA(n){return Ae.createElement(Yu,{...n},Ae.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function BA(n){return Ae.createElement(Yu,{...n},Ae.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function LA(n){return Ae.createElement(Yu,{...n},Ae.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function HA(n){return Ae.createElement(Yu,{...n},Ae.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function qA(){return Ae.createElement("div",{className:"Toastify__spinner"})}var ph={info:BA,warning:UA,success:LA,error:HA,spinner:qA},$A=n=>n in ph;function VA({theme:n,type:i,isLoading:r,icon:o}){let s=null,c={theme:n,type:i};return o===!1||(Ra(o)?s=o({...c,isLoading:r}):k.isValidElement(o)?s=k.cloneElement(o,c):r?s=ph.spinner():$A(i)&&(s=ph[i](c))),s}var YA=n=>{let{isRunning:i,preventExitTransition:r,toastRef:o,eventHandlers:s,playToast:c}=NA(n),{closeButton:d,children:h,autoClose:p,onClick:y,type:g,hideProgressBar:b,closeToast:A,transition:M,position:z,className:C,style:S,progressClassName:T,updateId:_,role:O,progress:L,rtl:Y,toastId:P,deleteToast:q,isIn:W,isLoading:ge,closeOnClick:Te,theme:Se,ariaLabel:me}=n,ue=Oi("Toastify__toast",`Toastify__toast-theme--${Se}`,`Toastify__toast--${g}`,{"Toastify__toast--rtl":Y},{"Toastify__toast--close-on-click":Te}),be=Ra(C)?C({rtl:Y,position:z,type:g,defaultClassName:ue}):Oi(ue,C),Ee=VA(n),G=!!L||!p,ae={closeToast:A,type:g,theme:Se},ce=null;return d===!1||(Ra(d)?ce=d(ae):k.isValidElement(d)?ce=k.cloneElement(d,ae):ce=vA(ae)),Ae.createElement(M,{isIn:W,done:q,position:z,preventExitTransition:r,nodeRef:o,playToast:c},Ae.createElement("div",{id:P,tabIndex:0,onClick:y,"data-in":W,className:be,...s,style:S,ref:o,...W&&{role:O,"aria-label":me}},Ee!=null&&Ae.createElement("div",{className:Oi("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!ge})},Ee),q1(h,n,!i),ce,!n.customProgressBar&&Ae.createElement(xA,{..._&&!G?{key:`p-${_}`}:{},rtl:Y,theme:Se,delay:p,isRunning:i,isIn:W,closeToast:A,hide:b,type:g,className:T,controlledProgress:G,progress:L||0})))},GA=(n,i=!1)=>({enter:`Toastify--animate Toastify__${n}-enter`,exit:`Toastify--animate Toastify__${n}-exit`,appendPosition:i}),XA=bA(GA("bounce",!0)),FA={position:"top-right",transition:XA,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:n=>n.altKey&&n.code==="KeyT"};function QA(n){let i={...FA,...n},r=n.stacked,[o,s]=k.useState(!0),c=k.useRef(null),{getToastToRender:d,isToastActive:h,count:p}=kA(i),{className:y,style:g,rtl:b,containerId:A,hotKeys:M}=i;function z(S){let T=Oi("Toastify__toast-container",`Toastify__toast-container--${S}`,{"Toastify__toast-container--rtl":b});return Ra(y)?y({position:S,rtl:b,defaultClassName:T}):Oi(T,fh(y))}function C(){r&&(s(!0),Ue.play())}return F1(()=>{var S;if(r){let T=c.current.querySelectorAll('[data-in="true"]'),_=12,O=(S=i.position)==null?void 0:S.includes("top"),L=0,Y=0;Array.from(T).reverse().forEach((P,q)=>{let W=P;W.classList.add("Toastify__toast--stacked"),q>0&&(W.dataset.collapsed=`${o}`),W.dataset.pos||(W.dataset.pos=O?"top":"bot");let ge=L*(o?.2:1)+(o?0:_*q),Te=Math.max(.5,1-(o?Y:0));W.style.setProperty("--y",`${O?ge:ge*-1}px`),W.style.setProperty("--g",`${_}`),W.style.setProperty("--s",`${Te}`),L+=W.offsetHeight,Y+=.025})}},[o,p,r]),k.useEffect(()=>{function S(T){var _;let O=c.current;M(T)&&((_=O?.querySelector('[tabIndex="0"]'))==null||_.focus(),s(!1),Ue.pause()),T.key==="Escape"&&(document.activeElement===O||O!=null&&O.contains(document.activeElement))&&(s(!0),Ue.play())}return document.addEventListener("keydown",S),()=>{document.removeEventListener("keydown",S)}},[M]),Ae.createElement("section",{ref:c,className:"Toastify",id:A,onMouseEnter:()=>{r&&(s(!1),Ue.pause())},onMouseLeave:C,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":i["aria-label"]},d((S,T)=>{let _=T.length?{...g}:{...g,pointerEvents:"none"};return Ae.createElement("div",{tabIndex:-1,className:z(S),"data-stacked":r,style:_,key:`c-${S}`},T.map(({content:O,props:L})=>Ae.createElement(YA,{...L,stacked:r,collapseAll:C,isIn:h(L.toastId,L.containerId),key:`t-${L.key}`},O)))}))}var ZA=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,Sb=new Map,KA=(n,i)=>{F1(()=>{if(typeof document>"u")return;let r=document,o=Sb.get(r);if(o){i&&o.setAttribute("nonce",i);return}let s=r.createElement("style");s.textContent=n,i&&s.setAttribute("nonce",i),r.head.appendChild(s),Sb.set(r,s)},[i])};function PA(n){return KA(ZA,n.nonce),Ae.createElement(QA,{...n})}const Q1=gn("auth/register",async n=>{try{const{data:i}=await Zt.post("users/signup",n);return Wh(i.token),i}catch{Ue.error("Something went wrong.")}}),Z1=gn("auth/login",async n=>{try{const{data:i}=await Zt.post("users/signin",n);return Wh(i.token),i}catch{Ue.error("Something went wrong.")}}),ep=gn("auth/logout",async()=>{try{const{data:n}=await Zt.post("users/signout");return pA(),Ue.success("Sign out success"),n}catch{Ue.error("Something went wrong.")}}),Ps=gn("auth/refresh",async(n,i)=>{const r=i.getState().auth.token;if(!r)return i.rejectWithValue();try{Wh(r);const{data:o}=await Zt.get("users/current");return o}catch(o){return i.rejectWithValue(o.message)}}),_b={user:{name:"",email:""},token:null,refreshToken:null,isLoggedIn:!1,isLoading:!1},K1=Xh({name:"auth",initialState:_b,selectors:{selectIsLoggedIn:n=>n.isLoggedIn,selectIsLoading:n=>n.isLoading,selectUser:n=>n.user},extraReducers:n=>{n.addCase(Q1.fulfilled,(i,r)=>{i.user=r.payload.user,i.token=r.payload.token,i.isLoggedIn=!0}).addCase(Z1.fulfilled,(i,r)=>{i.user=r.payload,i.token=r.payload.token,i.refreshToken=r.payload.refreshToken,i.isLoggedIn=!0,i.isLoading=!1}).addCase(ep.fulfilled,()=>_b).addCase(Ps.pending,i=>{i.isLoading=!0}).addCase(Ps.fulfilled,(i,r)=>{i.user.name=r.payload.name,i.user.email=r.payload.email,i.refreshToken=r.payload.refreshToken,i.token=r.payload.token,i.isLoggedIn=!0,i.isLoading=!1}).addCase(Ps.rejected,i=>{i.token=null,i.isLoading=!1})}}),JA=K1.reducer,{selectIsLoggedIn:P1,selectIsLoading:IA,selectUser:WA}=K1.selectors,e4=()=>{const n=Ut(WA),i=n?.name?.charAt(0).toUpperCase()||"";return x.jsxs(KE,{children:[x.jsx(PE,{children:i}),x.jsx(JE,{children:n?.name})]})},t4=N.div`
display: flex;
align-items: center;
padding: 11px 20px 11px 20px;
border-radius: 15px;
background-color: var(--container-background-color);
@media (min-width: ${F.tablet}) {
    padding: 16px;
}
`,n4=N.div`
display:none;
@media (min-width: ${F.tablet}) {
    display:flex;
}
`,a4=N.button`
display: none;
@media (min-width: ${F.tablet}) {
    display:block;
    margin-left: 16px;
    padding: 12px 28px;
    border: 1px solid var(--border-color);
    border-radius: 30px;

    font-family: Gilroy;
    font-weight: 700;
    font-style: Bold;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 2%;
    color: var(--main-text-color);

    &:hover {
        background-color: var(--main-text-color);
        color: var(--body-background-color);
}
}
`,i4=N.button`
  margin-left: 10px;
  width: 28px;
  height: 20px;
  position: relative;
  background: transparent;
  border: none;
  cursor: pointer;

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: white;
    transition: 0.3s;
  }

  span:nth-child(1) {
    top: 0;
  }

  span:nth-child(2) {
    top: 9px;
  }

  span:nth-child(3) {
    bottom: 0;
  }
@media (min-width: ${F.tablet}) {
    display: none;
}
`,r4=N.div`
  // position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);

  opacity: ${({isOpen:n})=>n?1:0};
  pointer-events: ${({isOpen:n})=>n?"auto":"none"};
  transition: 300ms;
`,l4=N.div`
  // position: fixed;
  position: absolute;
  top: 0; 
  right: 0;  
  width: 53%;
  height: 100%;
  background: #1c1c1c;
  padding: 34px 40px;

  transform: ${({isOpen:n})=>n?"translateX(0)":"translateX(100%)"};
  transition: transform 300ms ease;
  z-index: 1000;
`,o4=N.div`
display: flex;
flex-direction: column;
gap: 300px;
height: 100%;
justify-content: center;
align-items: center; 
`,s4=N.button`
display: block;
// width: 28px;
// height: 28px;
margin-left: auto;
color: var(--main-text-color);
`,u4=N.button`
    display:block;
    padding: 12px 28px;
    border: 1px solid var(--border-color);
    border-radius: 30px;
    font-weight: 700;
    font-style: Bold;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: 2%;
    color: var(--main-text-color);

    &:hover {
        background-color: var(--main-text-color);
        color: var(--body-background-color);
}
@media (min-width: ${F.tablet}) {
   display: none;
}
`,J1=({isOpen:n,onClose:i})=>{const r=ln(),o=()=>{r(ep())};return x.jsx(r4,{isOpen:n,onClick:i,children:x.jsxs(l4,{isOpen:n,onClick:s=>s.stopPropagation(),children:[x.jsx(s4,{onClick:i,children:"✕"}),x.jsxs(o4,{children:[x.jsx(Iv,{}),x.jsx(u4,{onClick:o,children:"Log out"})]})]})})},c4=({onMenuClick:n})=>{const i=ln(),r=()=>{i(ep())};return x.jsxs(t4,{children:[x.jsx(Lh,{}),x.jsx(n4,{children:x.jsx(Iv,{})}),x.jsx(e4,{}),x.jsx(a4,{onClick:r,children:"Log out"}),x.jsxs(i4,{onClick:n,children:[x.jsx("span",{}),x.jsx("span",{}),x.jsx("span",{})]}),x.jsx(J1,{logOut:r})]})};var f4={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};d4(f4);function d4(n){var i={};for(var r in n)n.hasOwnProperty(r)&&(i[n[r]]=r);return i}var h4="#4fa94d",p4={"aria-busy":!0,role:"progressbar"};N.div`
  display: ${n=>n.$visible?"flex":"none"};
`;var m4="http://www.w3.org/2000/svg",Un=242.776657104492,y4=1.6,g4=Bh`
12.5% {
  stroke-dasharray: ${Un*.14}px, ${Un}px;
  stroke-dashoffset: -${Un*.11}px;
}
43.75% {
  stroke-dasharray: ${Un*.35}px, ${Un}px;
  stroke-dashoffset: -${Un*.35}px;
}
100% {
  stroke-dasharray: ${Un*.01}px, ${Un}px;
  stroke-dashoffset: -${Un*.99}px;
}
`;N.path`
  stroke-dasharray: ${Un*.01}px, ${Un};
  stroke-dashoffset: 0;
  animation: ${g4} ${y4}s linear infinite;
`;var b4=Bh`
to {
   transform: rotate(360deg);
 }
`;N.svg`
  animation: ${b4} ${n=>String(n.$animationDuration).endsWith("s")?String(n.$animationDuration):`${n.$animationDuration}s`} steps(12, end) infinite;
`;N.polyline`
  stroke-width: ${n=>`${n.$strokeWidth}px`};
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`;var v4=Bh`
to {
   stroke-dashoffset: 136;
 }
`;N.polygon`
  stroke-dasharray: 17;
  animation: ${v4} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;N.svg`
  transform-origin: 50% 65%;
`;var x4=({width:n="80",height:i="80",backgroundColor:r=h4,ballColors:o=["#fc636b","#6a67ce","#ffb900"],wrapperClass:s="",wrapperStyle:c={},ariaLabel:d="fidget-spinner-loader",visible:h=!0})=>h?x.jsx("svg",{width:n,height:i,xmlns:m4,viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:s,style:c,"aria-label":d,"data-testid":"fidget-spinner-svg",...p4,children:x.jsxs("g",{transform:"rotate(6 50 50)",children:[x.jsx("g",{transform:"translate(50 50)",children:x.jsx("g",{transform:"scale(0.9)",children:x.jsxs("g",{transform:"translate(-50 -58)",children:[x.jsx("path",{d:"M27.1,79.4c-1.1,0.6-2.4,1-3.7,1c-2.6,0-5.1-1.4-6.4-3.7c-2-3.5-0.8-8,2.7-10.1c1.1-0.6,2.4-1,3.7-1c2.6,0,5.1,1.4,6.4,3.7 C31.8,72.9,30.6,77.4,27.1,79.4z",fill:o[0]}),x.jsx("path",{d:"M72.9,79.4c1.1,0.6,2.4,1,3.7,1c2.6,0,5.1-1.4,6.4-3.7c2-3.5,0.8-8-2.7-10.1c-1.1-0.6-2.4-1-3.7-1c-2.6,0-5.1,1.4-6.4,3.7 C68.2,72.9,69.4,77.4,72.9,79.4z",fill:o[1]}),x.jsx("circle",{cx:"50",cy:"27",r:"7.4",fill:o[2]}),x.jsx("path",{d:"M86.5,57.5c-3.1-1.9-6.4-2.8-9.8-2.8c-0.5,0-0.9,0-1.4,0c-0.4,0-0.8,0-1.1,0c-2.1,0-4.2-0.4-6.2-1.2 c-0.8-3.6-2.8-6.9-5.4-9.3c0.4-2.5,1.3-4.8,2.7-6.9c2-2.9,3.2-6.5,3.2-10.4c0-10.2-8.2-18.4-18.4-18.4c-0.3,0-0.6,0-0.9,0 C39.7,9,32,16.8,31.6,26.2c-0.2,4.1,1,7.9,3.2,11c1.4,2.1,2.3,4.5,2.7,6.9c-2.6,2.5-4.6,5.7-5.4,9.3c-1.9,0.7-4,1.1-6.1,1.1 c-0.4,0-0.8,0-1.2,0c-0.5,0-0.9-0.1-1.4-0.1c-3.1,0-6.3,0.8-9.2,2.5c-9.1,5.2-12,17-6.3,25.9c3.5,5.4,9.5,8.4,15.6,8.4 c2.9,0,5.8-0.7,8.5-2.1c3.6-1.9,6.3-4.9,8-8.3c1.1-2.3,2.7-4.2,4.6-5.8c1.7,0.5,3.5,0.8,5.4,0.8c1.9,0,3.7-0.3,5.4-0.8 c1.9,1.6,3.5,3.5,4.6,5.7c1.5,3.2,4,6,7.4,8c2.9,1.7,6.1,2.5,9.2,2.5c6.6,0,13.1-3.6,16.4-10C97.3,73.1,94.4,62.5,86.5,57.5z M29.6,83.7c-1.9,1.1-4,1.6-6.1,1.6c-4.2,0-8.4-2.2-10.6-6.1c-3.4-5.9-1.4-13.4,4.5-16.8c1.9-1.1,4-1.6,6.1-1.6 c4.2,0,8.4,2.2,10.6,6.1C37.5,72.8,35.4,80.3,29.6,83.7z M50,39.3c-6.8,0-12.3-5.5-12.3-12.3S43.2,14.7,50,14.7 c6.8,0,12.3,5.5,12.3,12.3S56.8,39.3,50,39.3z M87.2,79.2c-2.3,3.9-6.4,6.1-10.6,6.1c-2.1,0-4.2-0.5-6.1-1.6 c-5.9-3.4-7.9-10.9-4.5-16.8c2.3-3.9,6.4-6.1,10.6-6.1c2.1,0,4.2,0.5,6.1,1.6C88.6,65.8,90.6,73.3,87.2,79.2z",fill:r})]})})}),x.jsx("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"1s",begin:"0s",repeatCount:"indefinite"})]})}):null;const I1=()=>x.jsx(x4,{visible:!0,height:"80",width:"80",ariaLabel:"fidget-spinner-loading",wrapperStyle:{},wrapperClass:"fidget-spinner-wrapper"}),S4=N.main`
position: relative;
width: 100%;
max-width: 375px;
margin: 0 auto;
padding: 20px;
background-color: var(--body-background-color);
    @media (min-width: ${F.tablet}) {
        max-width: 768px;
        padding: 32px;
    };
    @media (min-width: ${F.desktop}) {
        max-width: 1280px;
    };
`,_4=()=>{const[n,i]=k.useState(!1),r=()=>i(s=>!s),o=()=>i(!1);return x.jsxs(S4,{children:[x.jsx(k.Suspense,{fallback:x.jsx(I1,{})}),x.jsx(c4,{onMenuClick:r}),x.jsx(J1,{isOpen:n,onClose:o}),x.jsx("main",{children:x.jsx(bv,{})})]})},w4=N.div`
    padding: 20px 20px 40px 20px;
    border-radius: 30px;
    box-sizing: border-box;
    margin: 0 auto;
    flex:1;
    background-color: var(--container-background-color);
    @media (min-width: ${F.tablet}) {
        padding: 40px 64px 214px 64px;
    };
    @media (min-width: ${F.desktop}) {
        padding: 40px 64px 40px 64px;
    };
`,E4=N.h1`
display: block;
margin: 0 auto;
margin-top: 40px;

font-weight: 700;
font-size: 32px;
line-height: 100%;
letter-spacing: 0.02em;
color: var(--main-text-color);
span {
    color: var(--focus-word-color);
}

@media (min-width: ${F.tablet}) {
    margin-top: 157px;
    font-style: Bold;
    font-size: 64px;
    line-height: 60px;
    letter-spacing: 2%;
    color: var(--main-text-color);

    span {
        display:block;
        color: var(--focus-word-color);
    }
}
@media (min-width: ${F.desktop}) {
    margin-top: 107px;
}
`,T4=N.form`
width: 100%;
margin-top: 20px;
@media (min-width: ${F.tablet}) {
    margin-top: 40px;
}
`,R4=N.div`
display:flex;
flex-direction: column;
gap: 8px;
width: 100%;
@media (min-width: ${F.tablet}) {
    gap: 14px;
}
`,kd=N.input`
padding: 14px;
border-radius: 12px;
background-color: var(--select-background-color);
border: 1px solid transparent;
color: var(--main-text-color);

&:hover, &:focus-visible {
    border: 1px solid var(--container-background-color);
}
@media (min-width: ${F.tablet}) {
    padding: 16px 14px 16px 14px;
}
`,A4=N.div`
margin-top: 20px;
display:flex;
flex-direction: row;
align-items: center;
@media (min-width: ${F.tablet}) {
    margin-top: 82px;
}
`,O4=N.button`
width: 140px;
padding: 12px 29px;
border-radius: 30px;
border:1px solid var(--border-color);
background-color: var(--container-background-color);

font-weight: 700;
font-size: 14px;
line-height: 129%;
letter-spacing: 0.02em;
color: #1f1f1f;
color: var(--main-text-color);

&:hover {
    border: 1px solid transparent;
    background-color: var(--main-text-color);
    color: var(--select-background-color);
}
@media (min-width: ${F.tablet}) {
    width: 225px;
    padding: 16px 54px 16px 54px;

    font-style: Bold;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 2%;
}
`,C4=N(ki)`
display: inline-block;
margin-left: auto;
font-weight: 500;
font-size: 12px;
line-height: 117%;
letter-spacing: -0.02em;
text-decoration: underline;
text-decoration-skip-ink: none;
color: var(--grey-text-color);
&:hover {
    color: var(--main-text-color);
}
@media (min-width: ${F.tablet}) {
    font-size: 14px;
    line-height: 18px;
}
`;var fo=n=>n.type==="checkbox",Ei=n=>n instanceof Date,kt=n=>n==null;const W1=n=>typeof n=="object";var lt=n=>!kt(n)&&!Array.isArray(n)&&W1(n)&&!Ei(n),D4=n=>lt(n)&&n.target?fo(n.target)?n.target.checked:n.target.value:n,z4=(n,i)=>i.split(".").some((r,o,s)=>!isNaN(Number(r))&&n.has(s.slice(0,o).join("."))),ex=n=>{const i=n.constructor&&n.constructor.prototype;return lt(i)&&i.hasOwnProperty("isPrototypeOf")},Gu=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function ft(n){if(n instanceof Date)return new Date(n);const i=typeof FileList<"u"&&n instanceof FileList;if(Gu&&(n instanceof Blob||i))return n;const r=Array.isArray(n);if(!r&&!(lt(n)&&ex(n)))return n;const o=r?[]:Object.create(Object.getPrototypeOf(n));for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(o[s]=ft(n[s]));return o}const _r={BLUR:"blur",FOCUS_OUT:"focusout",SUBMIT:"submit",TRIGGER:"trigger",VALID:"valid"},qn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Bn={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"},tx="root",nx=["__proto__","constructor","prototype"],M4=/^\w*$/;var ho=n=>M4.test(n),at=n=>n===void 0;const j4=/[.[\]'"]/;var Xu=n=>n.split(j4).filter(Boolean),de=(n,i,r)=>{if(!i||!lt(n))return r;const o=ho(i)?[i]:Xu(i);if(o.some(c=>nx.includes(c)))return r;const s=o.reduce((c,d)=>kt(c)?void 0:c[d],n);return at(s)||s===n?at(n[i])?r:n[i]:s},In=n=>typeof n=="boolean",On=n=>typeof n=="function",nt=(n,i,r)=>{let o=-1;const s=ho(i)?[i]:Xu(i),c=s.length,d=c-1;for(;++o<c;){const h=s[o];let p=r;if(o!==d){const y=n[h];p=lt(y)||Array.isArray(y)?y:isNaN(+s[o+1])?{}:[]}if(nx.includes(h))return;n[h]=p,n=n[h]}};const k4=Ae.createContext(null);k4.displayName="HookFormControlContext";var N4=(n,i,r,o=!0)=>{const s={};for(const c in n)Object.defineProperty(s,c,{get:()=>{const d=c;return i._proxyFormState[d]!==qn.all&&(i._proxyFormState[d]=!o||qn.all),n[d]}});return s};const U4=Gu?Ae.useLayoutEffect:Ae.useEffect;var qt=n=>typeof n=="string",B4=(n,i,r,o,s)=>qt(n)?(o&&i.watch.add(n),de(r,n,s)):Array.isArray(n)?n.map(c=>(o&&i.watch.add(c),de(r,c))):(o&&(i.watchAll=!0),r),mh=n=>kt(n)||!W1(n);const wb=(n,i)=>i.length===0&&!Array.isArray(n)&&!ex(n);function Wn(n,i,r=new WeakMap){if(n===i)return!0;if(mh(n)||mh(i))return Object.is(n,i);if(Ei(n)&&Ei(i))return Object.is(n.getTime(),i.getTime());const o=Object.keys(n),s=Object.keys(i);if(o.length!==s.length)return!1;if(wb(n,o)||wb(i,s))return Object.is(n,i);if(!o.length&&Array.isArray(n)!==Array.isArray(i))return!1;const c=r.get(n);if(c&&c.has(i))return!0;if(c)c.add(i);else{const d=new WeakSet;d.add(i),r.set(n,d)}for(const d of o){const h=n[d];if(!(d in i))return!1;if(d!=="ref"){const p=i[d];if(Ei(h)&&Ei(p)||(lt(h)||Array.isArray(h))&&(lt(p)||Array.isArray(p))?!Wn(h,p,r):!Object.is(h,p))return!1}}return!0}const L4=Ae.createContext(null);L4.displayName="HookFormContext";var H4=(n,i,r,o,s)=>i?{...r[n],types:{...r[n]&&r[n].types?r[n].types:{},[o]:s||!0}}:{},ax=n=>Array.isArray(n)?n.filter(Boolean):[],Js=n=>Array.isArray(n)?n:[n],Eb=()=>{let n=[];return{get observers(){return n},next:s=>{for(const c of n)c.next&&c.next(s)},subscribe:s=>(n.push(s),{unsubscribe:()=>{n=n.filter(c=>c!==s)}}),unsubscribe:()=>{n=[]}}};function ix(n,i){const r={};for(const o in n)if(n.hasOwnProperty(o)){const s=n[o],c=i[o];if(s&&lt(s)&&c){const d=ix(s,c);lt(d)&&(r[o]=d)}else n[o]&&(r[o]=c)}return r}var Mt=n=>lt(n)&&!Object.keys(n).length,tp=n=>n.type==="file",gu=n=>{if(!Gu)return!1;const i=n?n.ownerDocument:0;return n instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},rx=n=>n.type==="select-multiple",np=n=>n.type==="radio",q4=n=>np(n)||fo(n),Nd=n=>gu(n)&&n.isConnected;function $4(n,i){const r=i.slice(0,-1).length;let o=0;for(;o<r;){if(kt(n)){n=void 0;break}n=n[i[o]],o++}return n}function V4(n){for(const i in n)if(n.hasOwnProperty(i)&&!at(n[i]))return!1;return!0}function gt(n,i){if(qt(i)&&Object.prototype.hasOwnProperty.call(n,i))return delete n[i],n;const r=Array.isArray(i)?i:ho(i)?[i]:Xu(i),o=r.length===1?n:$4(n,r),s=r.length-1,c=r[s];return o&&delete o[c],s!==0&&(lt(o)&&Mt(o)||Array.isArray(o)&&V4(o))&&gt(n,r.slice(0,-1)),n}var Y4=n=>{for(const i in n)if(On(n[i]))return!0;return!1};function lx(n){return Array.isArray(n)||lt(n)&&!Y4(n)}function yh(n,i={}){for(const r in n){const o=n[r];lx(o)?(i[r]=Array.isArray(o)?[]:{},yh(o,i[r])):at(o)||(i[r]=!0)}return i}function gh(n){if(n!==!1){if(n===!0)return!0;if(Array.isArray(n)){const i=n.map(r=>gh(r));return i.some(r=>r!==void 0)?i:void 0}if(lt(n)){const i={};for(const r in n){const o=gh(n[r]);at(o)||(i[r]=o)}return Object.keys(i).length?i:void 0}}}function Si(n,i,r){r||(r=yh(i));for(const o in n){const s=n[o];if(lx(s))at(i)||mh(r[o])?r[o]=yh(s,Array.isArray(s)?[]:{}):Si(s,kt(i)?{}:i[o],r[o]);else{const c=i[o];r[o]=!Wn(s,c)}}return gh(r)||{}}const Tb={value:!1,isValid:!1},Rb={value:!0,isValid:!0};var ox=n=>{if(Array.isArray(n)){if(n.length>1){const i=n.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:i,isValid:!!i.length}}return n[0].checked&&!n[0].disabled?n[0].attributes&&!at(n[0].attributes.value)?at(n[0].value)||n[0].value===""?Rb:{value:n[0].value,isValid:!0}:Rb:Tb}return Tb},sx=(n,{valueAsNumber:i,valueAsDate:r,setValueAs:o})=>at(n)?n:i?n===""?NaN:n&&+n:r&&qt(n)?new Date(n):o?o(n):n;const Ab={isValid:!1,value:null};var ux=n=>Array.isArray(n)?n.reduce((i,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:i,Ab):Ab;function Ob(n){const i=n.ref;return tp(i)?i.files:np(i)?ux(n.refs).value:rx(i)?[...i.selectedOptions].map(({value:r})=>r):fo(i)?ox(n.refs).value:sx(at(i.value)?n.ref.value:i.value,n)}var G4=(n,i,r,o)=>{const s={};for(const c of n){const d=de(i,c);d&&nt(s,c,d._f)}return{criteriaMode:r,names:[...n],fields:s,shouldUseNativeValidation:o}},bu=n=>n instanceof RegExp,Ul=n=>at(n)?n:bu(n)?n.source:lt(n)?bu(n.value)?n.value.source:n.value:n,Ns=n=>({isOnSubmit:!n||n===qn.onSubmit,isOnBlur:n===qn.onBlur,isOnChange:n===qn.onChange,isOnAll:n===qn.all,isOnTouch:n===qn.onTouched});const Cb="AsyncFunction";var X4=n=>{if(!n||!n.validate)return!1;if(On(n.validate))return n.validate.constructor.name===Cb;if(lt(n.validate)){for(const i in n.validate)if(n.validate[i].constructor.name===Cb)return!0}return!1},F4=n=>n.mount&&(n.required||n.min||n.max||n.maxLength||n.minLength||n.pattern||n.validate),Ud=(n,i,r)=>{if(r)return!1;if(i.watchAll||i.watch.has(n))return!0;for(const o of i.watch)if(n.startsWith(o)&&n.charAt(o.length)===".")return!0;return!1};const Xl=(n,i,r,o)=>{for(const s of r||Object.keys(n)){const c=de(n,s);if(c){const{_f:d,...h}=c;if(d){if(d.refs&&d.refs[0]&&i(d.refs[0],s)&&!o)return!0;if(d.ref&&i(d.ref,d.name)&&!o)return!0;if(Xl(h,i))break}else if(lt(h)&&Xl(h,i))break}}};function Db(n,i,r){const o=de(n,r);if(o||ho(r))return{error:o,name:r};const s=r.split(".");for(;s.length;){const c=s.join("."),d=de(i,c),h=de(n,c);if(d&&!Array.isArray(d)&&r!==c)return{name:r};if(h&&h.type)return{name:c,error:h};if(h&&h.root&&h.root.type)return{name:`${c}.root`,error:h.root};s.pop()}return{name:r}}var Q4=(n,i,r,o)=>{r(n);const{name:s,...c}=n,d=Object.keys(c);return!d.length||o&&d.length>=Object.keys(i).length||d.find(h=>i[h]===(!o||qn.all))},Z4=(n,i,r)=>!n||!i||n===i||Js(n).some(o=>o&&(r?o===i:o.startsWith(i)||i.startsWith(o))),K4=(n,i,r,o,s)=>s.isOnAll?!1:!r&&s.isOnTouch?!(i||n):(r?o.isOnBlur:s.isOnBlur)?!n:(r?o.isOnChange:s.isOnChange)?n:!0,P4=(n,i)=>!ax(de(n,i)).length&&gt(n,i),zb=(n,i,r)=>{const o=de(n,r),s=Array.isArray(o)?o:[];return nt(s,tx,i[r]),nt(n,r,s),n};function Mb(n,i,r="validate"){if(qt(n)||Array.isArray(n)&&n.every(qt)||In(n)&&!n)return{type:r,message:qt(n)?n:"",ref:i}}var wr=n=>lt(n)&&!bu(n)?n:{value:n,message:""},jb=async(n,i,r,o,s,c)=>{const{ref:d,refs:h,required:p,maxLength:y,minLength:g,min:b,max:A,pattern:M,validate:z,name:C,valueAsNumber:S,mount:T}=n._f,_=de(r,C);if(!T||i.has(C))return{};const O=h?h[0]:d,L=me=>{if(s&&O.reportValidity){const ue=In(me)?"":me||"";h?h.forEach(be=>be.setCustomValidity(ue)):O.setCustomValidity(ue),O.reportValidity()}},Y={},P=np(d),q=fo(d),W=P||q,ge=(S||tp(d))&&at(d.value)&&at(_)||gu(d)&&d.value===""||_===""||Array.isArray(_)&&!_.length,Te=H4.bind(null,C,o,Y),Se=(me,ue,be,Ee=Bn.maxLength,G=Bn.minLength)=>{const ae=me?ue:be;Y[C]={type:me?Ee:G,message:ae,ref:d,...Te(me?Ee:G,ae)}};if(c?!Array.isArray(_)||!_.length:p&&(!W&&(ge||kt(_))||In(_)&&!_||q&&!ox(h).isValid||P&&!ux(h).isValid)){const{value:me,message:ue}=qt(p)?{value:!!p,message:p}:wr(p);if(me&&(Y[C]={type:Bn.required,message:ue,ref:O,...Te(Bn.required,ue)},!o))return L(ue),Y}if(!ge&&(!kt(b)||!kt(A))){let me,ue;const be=wr(A),Ee=wr(b);if(!kt(_)&&!isNaN(_)){const G=d.valueAsNumber||_&&+_;kt(be.value)||(me=G>be.value),kt(Ee.value)||(ue=G<Ee.value)}else{const G=d.valueAsDate||new Date(_),ae=_e=>new Date(new Date().toDateString()+" "+_e),ce=d.type=="time",Oe=d.type=="week";qt(be.value)&&_&&(me=ce?ae(_)>ae(be.value):Oe?_>be.value:G>new Date(be.value)),qt(Ee.value)&&_&&(ue=ce?ae(_)<ae(Ee.value):Oe?_<Ee.value:G<new Date(Ee.value))}if((me||ue)&&(Se(!!me,be.message,Ee.message,Bn.max,Bn.min),!o))return L(Y[C].message),Y}if((y||g)&&!ge&&(qt(_)||c&&Array.isArray(_))){const me=wr(y),ue=wr(g),be=!kt(me.value)&&_.length>+me.value,Ee=!kt(ue.value)&&_.length<+ue.value;if((be||Ee)&&(Se(be,me.message,ue.message),!o))return L(Y[C].message),Y}if(M&&!ge&&qt(_)){const{value:me,message:ue}=wr(M);if(bu(me)&&!_.match(me)&&(Y[C]={type:Bn.pattern,message:ue,ref:d,...Te(Bn.pattern,ue)},!o))return L(ue),Y}if(z){if(On(z)){const me=await z(_,r),ue=Mb(me,O);if(ue&&(Y[C]={...ue,...Te(Bn.validate,ue.message)},!o))return L(ue.message),Y}else if(lt(z)){let me={};for(const ue in z){if(!Mt(me)&&!o)break;const be=Mb(await z[ue](_,r),O,ue);be&&(me={...be,...Te(ue,be.message)},L(be.message),o&&(Y[C]=me))}if(!Mt(me)&&(Y[C]={ref:O,...me},!o))return Y}}return L(!0),Y};const J4={mode:qn.onSubmit,reValidateMode:qn.onChange,shouldFocusError:!0},Bd="form",cx={submitCount:0,isDirty:!1,isReady:!1,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},validatingFields:{}};function I4(n={}){let i={...J4,...n},r={...ft(cx),isLoading:On(i.defaultValues),errors:i.errors||{},disabled:i.disabled||!1},o={},s=lt(i.defaultValues)||lt(i.values)?ft(i.defaultValues||i.values)||{}:{},c=i.shouldUnregister?{}:ft(s),d={action:!1,mount:!1,watch:!1,keepIsValid:!1},h={mount:new Set,disabled:new Set,unMount:new Set,array:new Set,watch:new Set,registerName:new Set},p,y=0,g=0,b=Ns(i.mode),A=Ns(i.reValidateMode);const M={isDirty:!1,dirtyFields:!1,validatingFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},z={...M};let C={...z};const S={array:Eb(),state:Eb()},T=i.criteriaMode===qn.all,_=w=>B=>{clearTimeout(y),y=setTimeout(w,B)},O=async w=>{if(!d.keepIsValid&&!i.disabled&&(z.isValid||C.isValid||w)){let B;i.resolver?(B=Mt((await ue()).errors),L()):B=await G({fields:o,onlyCheckValid:!0,eventType:_r.VALID}),B!==r.isValid&&S.state.next({isValid:B})}},L=(w,B)=>{!i.disabled&&(z.isValidating||z.validatingFields||C.isValidating||C.validatingFields)&&((w||Array.from(h.mount)).forEach(H=>{H&&(B?nt(r.validatingFields,H,B):gt(r.validatingFields,H))}),S.state.next({validatingFields:r.validatingFields,isValidating:!Mt(r.validatingFields)}))},Y=()=>{r.dirtyFields=Si(s,c)},P=(w,B=[],H,te,ee=!0,le=!0)=>{if(te&&H&&!i.disabled){if(d.action=!0,le&&Array.isArray(de(o,w))){const ie=H(de(o,w),te.argA,te.argB);ee&&nt(o,w,ie)}if(le&&Array.isArray(de(r.errors,w))){const ie=H(de(r.errors,w),te.argA,te.argB);ee&&nt(r.errors,w,ie),P4(r.errors,w)}if((z.touchedFields||C.touchedFields)&&le&&Array.isArray(de(r.touchedFields,w))){const ie=H(de(r.touchedFields,w),te.argA,te.argB);ee&&nt(r.touchedFields,w,ie)}(z.dirtyFields||C.dirtyFields)&&Y(),S.state.next({name:w,isDirty:ce(w,B),dirtyFields:r.dirtyFields,errors:r.errors,isValid:r.isValid})}else nt(c,w,B)},q=(w,B)=>{nt(r.errors,w,B),r.errors={...r.errors},S.state.next({errors:r.errors})},W=w=>{r.errors=w,S.state.next({errors:r.errors,isValid:!1})},ge=w=>{const B=ho(w)?[w]:Xu(w);let H=c,te=s;for(let ee=0;ee<B.length-1;ee++){const le=B[ee];if(H=kt(H)?H:H[le],te=kt(te)?te:te[le],H===null&&te!==null)return!0}return!1},Te=(w,B,H,te)=>{const ee=de(o,w);if(ee){if(ge(w))return;const le=at(de(c,w)),ie=de(c,w,at(H)?de(s,w):H);at(ie)||te&&te.defaultChecked||B?nt(c,w,B?ie:Ob(ee._f)):R(w,ie),d.mount&&!d.action&&(O(),le&&r.isDirty&&(z.isDirty||C.isDirty)&&(ce()||(r.isDirty=!1,S.state.next({...r}))),n.shouldUnregister&&le&&!at(de(c,w))&&Ud(w,h)&&(d.watch=!0))}},Se=(w,B,H,te,ee)=>{let le=!1,ie=!1;const fe={name:w};if(!i.disabled){if(!H||te){const Ce=Wn(de(s,w),B);(z.isDirty||C.isDirty)&&(ie=r.isDirty,r.isDirty=fe.isDirty=!Ce||ce(),le=ie!==fe.isDirty),ie=!!de(r.dirtyFields,w),Ce!==r.isDirty?r.dirtyFields=Si(s,c):Ce?gt(r.dirtyFields,w):nt(r.dirtyFields,w,!0),fe.dirtyFields=r.dirtyFields,le=le||(z.dirtyFields||C.dirtyFields)&&ie!==!Ce}if(H){const Ce=de(r.touchedFields,w);Ce||(nt(r.touchedFields,w,H),fe.touchedFields=r.touchedFields,le=le||(z.touchedFields||C.touchedFields)&&Ce!==H)}le&&ee&&S.state.next(fe)}return le?fe:{}},me=(w,B,H,te)=>{const ee=de(r.errors,w),le=(z.isValid||C.isValid)&&In(B)&&r.isValid!==B;if(i.delayError&&H?(p=_(()=>q(w,H)),p(i.delayError)):(clearTimeout(y),p=null,H?nt(r.errors,w,H):gt(r.errors,w),r.errors={...r.errors}),(H?!Wn(ee,H):ee)||!Mt(te)||le){const ie={...te,...le&&In(B)?{isValid:B}:{},errors:r.errors,name:w};r={...r,...ie},S.state.next(ie)}},ue=async w=>(L(w,!0),await i.resolver(c,i.context,G4(w||h.mount,o,i.criteriaMode,i.shouldUseNativeValidation))),be=async w=>{const{errors:B}=await ue(w);if(L(w),w){for(const H of w){const te=de(B,H);te?h.array.has(H)&&lt(te)&&!Object.keys(te).some(ee=>!Number.isNaN(Number(ee)))?zb(r.errors,{[H]:te},H):nt(r.errors,H,te):gt(r.errors,H)}r.errors={...r.errors}}else r.errors=B;return B},Ee=async({name:w,eventType:B})=>{if(n.validate){const H=await n.validate({formValues:c,formState:r,name:w,eventType:B});if(lt(H))for(const te in H){const ee=H[te];ee&&_t(`${Bd}.${te}`,{message:qt(ee.message)?ee.message:"",type:ee.type||Bn.validate})}else qt(H)||!H?_t(Bd,{message:H||"",type:Bn.validate}):Fn(Bd);return H}return!0},G=async({fields:w,onlyCheckValid:B,name:H,eventType:te,context:ee={valid:!0,runRootValidation:!1}})=>{if(n.validate&&(ee.runRootValidation=!0,!await Ee({name:H,eventType:te})&&(ee.valid=!1,B)))return ee.valid;for(const le in w){const ie=w[le];if(ie){const{_f:fe,...Ce}=ie;if(fe){const Ie=h.array.has(fe.name),Et=ie._f&&X4(ie._f),Mn=z.validatingFields||z.isValidating||C.validatingFields||C.isValidating;Et&&Mn&&L([fe.name],!0);const Pt=await jb(ie,h.disabled,c,T,i.shouldUseNativeValidation&&!B,Ie);if(Et&&Mn&&L([fe.name]),Pt[fe.name]&&(ee.valid=!1,B)||(!B&&(de(Pt,fe.name)?Ie?zb(r.errors,Pt,fe.name):nt(r.errors,fe.name,Pt[fe.name]):gt(r.errors,fe.name)),n.shouldUseNativeValidation&&Pt[fe.name]))break}!Mt(Ce)&&await G({context:ee,onlyCheckValid:B,fields:Ce,name:le,eventType:te})}}return ee.valid},ae=()=>{for(const w of h.unMount){const B=de(o,w);B&&(B._f.refs?B._f.refs.every(H=>!Nd(H)):!Nd(B._f.ref))&&Re(w)}h.unMount=new Set},ce=(w,B)=>!i.disabled&&(w&&B&&nt(c,w,B),!Wn(d.mount?c:s,s)),Oe=(w,B,H)=>B4(w,h,{...d.mount?c:at(B)?s:qt(w)?{[w]:B}:B},H,B),_e=w=>ax(de(d.mount?c:s,w,i.shouldUnregister?de(s,w,[]):[])),R=(w,B,H={},te=!1,ee=!1)=>{const le=de(o,w);let ie=B;if(le){const fe=le._f;fe&&(!fe.disabled&&nt(c,w,sx(B,fe)),ie=gu(fe.ref)&&kt(B)?"":B,rx(fe.ref)?[...fe.ref.options].forEach(Ce=>Ce.selected=ie.includes(Ce.value)):fe.refs?fo(fe.ref)?fe.refs.forEach(Ce=>{(!Ce.defaultChecked||!Ce.disabled)&&(Array.isArray(ie)?Ce.checked=!!ie.find(Ie=>Ie===Ce.value):Ce.checked=ie===Ce.value||!!ie)}):fe.refs.forEach(Ce=>Ce.checked=Ce.value===ie):tp(fe.ref)?fe.ref.value="":(fe.ref.value=ie,!fe.ref.type&&!ee&&S.state.next({name:w,values:te?c:ft(c)})))}(H.shouldDirty||H.shouldTouch)&&Se(w,ie,H.shouldTouch,H.shouldDirty,!ee),H.shouldValidate&&Qe(w)},Z=(w,B,H,te=!1,ee=!1)=>{for(const le in B){if(!B.hasOwnProperty(le))return;const ie=B[le],fe=w+"."+le,Ce=de(o,fe);(h.array.has(w)||lt(ie)||Ce&&!Ce._f)&&!Ei(ie)?Z(fe,ie,H,te,ee):R(fe,ie,H,te,ee)}},ne=(w,B,H,te,ee=!1)=>{const le=de(o,w),ie=h.array.has(w),fe=te?B:ft(B),Ce=de(c,w),Ie=Wn(Ce,fe);if(Ie||nt(c,w,fe),ie)S.array.next({name:w,values:te?c:ft(c)}),(z.isDirty||z.dirtyFields||C.isDirty||C.dirtyFields)&&H.shouldDirty&&(Y(),ee||S.state.next({name:w,dirtyFields:r.dirtyFields,isDirty:ce(w,fe)}));else{const Et=Array.isArray(fe)&&!fe.length||Mt(fe);!le||le._f||kt(fe)||Et?R(w,fe,H,te,ee):Z(w,fe,H,te,ee)}if(!Ie&&!ee){const Et=Ud(w,h),Mn=te?c:ft(c);S.state.next({...Et&&r,name:d.mount||Et?w:void 0,values:Mn})}},re=(w,B,H={})=>ne(w,B,H,!1),pe=(w,B={})=>{const H=On(w)?w(c):w;if(!Wn(c,H)){c={...c,...H};for(const te of h.mount)ne(te,de(H,te),B,!0,!0);S.state.next({...r,name:void 0,type:void 0,...g?{values:c}:{}}),B.shouldValidate&&O()}},oe=async w=>{d.mount=!0;const B=w.target;let H=B.name,te=!0;const ee=de(o,H),le=ie=>{te=Number.isNaN(ie)||Ei(ie)&&isNaN(ie.getTime())||Wn(ie,de(c,H,ie))};if(ee){let ie,fe;const Ce=B.type?Ob(ee._f):D4(w),Ie=w.type===_r.BLUR||w.type===_r.FOCUS_OUT,Et=!F4(ee._f)&&!n.validate&&!i.resolver&&!de(r.errors,H)&&!ee._f.deps,Mn=Et||K4(Ie,de(r.touchedFields,H),r.isSubmitted,A,b),Pt=Ud(H,h,Ie);nt(c,H,Ce),Ie?(!B||!B.readOnly)&&(ee._f.onBlur&&ee._f.onBlur(w),p&&p(0)):ee._f.onChange&&ee._f.onChange(w);const on=Se(H,Ce,Ie),Ni=!Mt(on)||Pt;if(!Ie&&S.state.next({name:H,type:w.type,...g?{values:ft(c)}:{}}),Mn)return(!Et||!r.isValid)&&(z.isValid||C.isValid)&&(i.mode==="onBlur"?Ie&&O():Ie||O()),Ni&&S.state.next({name:H,...Pt?{}:on});if(!i.resolver&&n.validate&&await Ee({name:H,eventType:w.type}),!Ie&&Pt&&S.state.next({...r}),i.resolver){const{errors:Ca}=await ue([H]);if(L([H]),le(Ce),!te){!Mt(on)&&S.state.next(on);return}const Ku=Db(r.errors,o,H),qr=Db(Ca,o,Ku.name||H);ie=qr.error,H=qr.name,fe=Mt(Ca)}else L([H],!0),ie=(await jb(ee,h.disabled,c,T,i.shouldUseNativeValidation))[H],L([H]),le(Ce),te&&(ie?fe=!1:(z.isValid||C.isValid)&&(fe=await G({fields:o,onlyCheckValid:!0,name:H,eventType:w.type})));te&&(ee._f.deps&&(!Array.isArray(ee._f.deps)||ee._f.deps.length>0)&&Qe(ee._f.deps),me(H,fe,ie,on))}},xe=(w,B)=>{if(de(r.errors,B)&&w.focus)return w.focus(),1},Qe=async(w,B={})=>{let H,te;const ee=Js(w);if(i.resolver){const le=await be(at(w)?w:ee);H=Mt(le),te=w?!ee.some(ie=>de(le,ie)):H}else w?(te=(await Promise.all(ee.map(async le=>{const ie=de(o,le);return await G({fields:ie&&ie._f?{[le]:ie}:ie,eventType:_r.TRIGGER})}))).every(Boolean),!(!te&&!r.isValid)&&O()):te=H=await G({fields:o,name:w,eventType:_r.TRIGGER});return S.state.next({...!qt(w)||(z.isValid||C.isValid)&&H!==r.isValid?{}:{name:w},...i.resolver||!w?{isValid:H}:{},errors:r.errors}),B.shouldFocus&&!te&&Xl(o,xe,w?ee:h.mount),te},Ve=(w,B)=>{let H={...d.mount?c:s};return B&&(H=ix(B.dirtyFields?r.dirtyFields:r.touchedFields,H)),at(w)?H:qt(w)?de(H,w):w.map(te=>de(H,te))},vt=(w,B)=>({invalid:!!de((B||r).errors,w),isDirty:!!de((B||r).dirtyFields,w),error:de((B||r).errors,w),isValidating:!!de(r.validatingFields,w),isTouched:!!de((B||r).touchedFields,w)}),Fn=w=>{const B=w?Js(w):void 0;B?.forEach(H=>gt(r.errors,H)),B?B.forEach(H=>{S.state.next({name:H,errors:r.errors})}):S.state.next({errors:{}})},_t=(w,B,H)=>{const te=(de(o,w,{_f:{}})._f||{}).ref,ee=de(r.errors,w)||{},{ref:le,message:ie,type:fe,...Ce}=ee;nt(r.errors,w,{...Ce,...B,ref:te}),S.state.next({name:w,errors:r.errors,isValid:!1}),H&&H.shouldFocus&&te&&te.focus&&te.focus()},ai=(w,B)=>{if(On(w)){g++;const{unsubscribe:H}=S.state.subscribe({next:ee=>"values"in ee&&w(ee.values||Oe(void 0,B),ee)});let te=!1;return{unsubscribe:()=>{te||(te=!0,g--,H())}}}return Oe(w,B,!0)},Kt=w=>{var B;const H=!!(!((B=w.formState)===null||B===void 0)&&B.values);H&&g++;const{unsubscribe:te}=S.state.subscribe({next:le=>{if(Z4(w.name,le.name,w.exact)&&Q4(le,w.formState||z,yo,w.reRenderRoot)){const ie={...c};w.callback({values:ie,...r,...le,defaultValues:s})}}});if(!H)return te;let ee=!1;return()=>{ee||(ee=!0,g--,te())}},Vt=w=>(d.mount=!0,C={...C,...w.formState},Kt({...w,formState:{...M,...w.formState}})),Re=(w,B={})=>{for(const H of w?Js(w):h.mount)h.mount.delete(H),h.array.delete(H),B.keepValue||(gt(o,H),gt(c,H)),!B.keepError&&gt(r.errors,H),!B.keepDirty&&gt(r.dirtyFields,H),!B.keepTouched&&gt(r.touchedFields,H),!B.keepIsValidating&&gt(r.validatingFields,H),!i.shouldUnregister&&!B.keepDefaultValue&&gt(s,H);S.state.next({values:ft(c)}),S.state.next({...r,...B.keepDirty?{isDirty:ce()}:{}}),!B.keepIsValid&&O()},wt=({disabled:w,name:B})=>{if(In(w)&&d.mount||w||h.disabled.has(B)){const ee=h.disabled.has(B)!==!!w;w?h.disabled.add(B):h.disabled.delete(B),ee&&d.mount&&!d.action&&O()}},Yt=(w,B={})=>{let H=de(o,w);const te=In(B.disabled)||In(i.disabled),ee=!h.registerName.has(w)&&H&&H._f&&!H._f.mount;return nt(o,w,{...H||{},_f:{...H&&H._f?H._f:{ref:{name:w}},name:w,mount:!0,...B}}),h.mount.add(w),H&&!ee?wt({disabled:In(B.disabled)?B.disabled:i.disabled,name:w}):Te(w,!0,B.value),{...te?{disabled:B.disabled||i.disabled}:{},...i.progressive?{required:!!B.required,min:Ul(B.min),max:Ul(B.max),minLength:Ul(B.minLength),maxLength:Ul(B.maxLength),pattern:Ul(B.pattern)}:{},name:w,onChange:oe,onBlur:oe,ref:le=>{if(le){h.registerName.add(w),Yt(w,B),h.registerName.delete(w),H=de(o,w);const ie=at(le.value)&&le.querySelectorAll&&le.querySelectorAll("input,select,textarea")[0]||le,fe=q4(ie),Ce=H._f.refs||[];if(fe?Ce.find(Ie=>Ie===ie):ie===H._f.ref)return;nt(o,w,{_f:{...H._f,...fe?{refs:[...Ce.filter(Nd),ie,...Array.isArray(de(s,w))?[{}]:[]],ref:{type:ie.type,name:w}}:{ref:ie}}}),Te(w,!1,void 0,ie)}else H=de(o,w,{}),H._f&&(H._f.mount=!1),(i.shouldUnregister||B.shouldUnregister)&&!(z4(h.array,w)&&d.action)&&h.unMount.add(w)}}},Gt=()=>i.shouldFocusError&&!i.shouldUseNativeValidation&&Xl(o,xe,h.mount),Aa=w=>{In(w)&&(S.state.next({disabled:w}),Xl(o,(B,H)=>{const te=de(o,H);te&&(B.disabled=te._f.disabled||w,Array.isArray(te._f.refs)&&te._f.refs.forEach(ee=>{ee.disabled=te._f.disabled||w}))},0,!1))},Oa=(w,B)=>async H=>{let te;H&&(H.preventDefault&&H.preventDefault(),H.persist&&H.persist());let ee=ft(c);if(S.state.next({isSubmitting:!0}),i.resolver){const{errors:le,values:ie}=await ue();L(),r.errors=le,ee=ft(ie)}else await G({fields:o,eventType:_r.SUBMIT});if(h.disabled.size)for(const le of h.disabled)gt(ee,le);if(gt(r.errors,tx),Mt(r.errors)){S.state.next({errors:{}});try{await w(ee,H)}catch(le){te=le}}else B&&await B({...r.errors},H),Gt(),setTimeout(Gt);if(S.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Mt(r.errors)&&!te,submitCount:r.submitCount+1,errors:r.errors}),te)throw te},ta=(w,B={})=>{de(o,w)&&(at(B.defaultValue)?re(w,ft(de(s,w))):(re(w,B.defaultValue),nt(s,w,ft(B.defaultValue))),B.keepTouched||gt(r.touchedFields,w),B.keepDirty||(gt(r.dirtyFields,w),r.isDirty=B.defaultValue?ce(w,ft(de(s,w))):ce()),B.keepError||(gt(r.errors,w),z.isValid&&O()),S.state.next({...r}))},mo=(w,B={})=>{const H=w?ft(w):s,te=ft(H),ee=Mt(w),le=te;if(B.keepDefaultValues||(s=H),!B.keepValues){if(B.keepDirtyValues){const ie=new Set([...h.mount,...Object.keys(Si(s,c))]);for(const fe of Array.from(ie)){const Ce=de(r.dirtyFields,fe),Ie=de(c,fe),Et=de(le,fe);Ce&&!at(Ie)?nt(le,fe,Ie):!Ce&&!at(Et)&&re(fe,Et)}}else{if(Gu&&at(w))for(const ie of h.mount){const fe=de(o,ie);if(fe&&fe._f){const Ce=Array.isArray(fe._f.refs)?fe._f.refs[0]:fe._f.ref;if(gu(Ce)){const Ie=Ce.closest("form");if(Ie){Ie.reset();break}}}}if(B.keepFieldsRef)for(const ie of h.mount)re(ie,de(le,ie));else o={}}if(i.shouldUnregister){if(c=B.keepDefaultValues?ft(s):{},B.keepFieldsRef)for(const ie of h.mount)nt(c,ie,de(le,ie))}else c=ft(le);S.array.next({values:{...le}}),S.state.next({values:{...le}})}h={mount:B.keepDirtyValues?h.mount:new Set,unMount:new Set,array:new Set,registerName:new Set,disabled:new Set,watch:new Set,watchAll:!1,focus:""},d.mount=!z.isValid||!!B.keepIsValid||!!B.keepDirtyValues||!i.shouldUnregister&&!Mt(le),d.watch=!!i.shouldUnregister,d.keepIsValid=!!B.keepIsValid,d.action=!1,B.keepErrors||(r.errors={}),S.state.next({submitCount:B.keepSubmitCount?r.submitCount:0,isDirty:ee?!1:B.keepDirty?r.isDirty:B.keepValues?ce():!!(B.keepDefaultValues&&!Wn(w,s)),isSubmitted:B.keepIsSubmitted?r.isSubmitted:!1,dirtyFields:ee?{}:B.keepDirtyValues?B.keepDefaultValues&&c?Si(s,c):r.dirtyFields:B.keepDefaultValues&&w?Si(s,w):B.keepDirty?r.dirtyFields:{},touchedFields:B.keepTouched?r.touchedFields:{},errors:B.keepErrors?r.errors:{},isSubmitSuccessful:B.keepIsSubmitSuccessful?r.isSubmitSuccessful:!1,isSubmitting:!1,defaultValues:s})},Bt=(w,B)=>mo(On(w)?w(c):w,{...i.resetOptions,...B}),Qu=(w,B={})=>{const H=de(o,w),te=H&&H._f;if(te){const ee=te.refs?te.refs[0]:te.ref;ee.focus&&setTimeout(()=>{ee.focus(),B.shouldSelect&&On(ee.select)&&ee.select()})}},yo=w=>{r={...r,...w}},go={control:{register:Yt,unregister:Re,getFieldState:vt,handleSubmit:Oa,setError:_t,_subscribe:Kt,_runSchema:ue,_updateIsValidating:L,_focusError:Gt,_getWatch:Oe,_getDirty:ce,_setValid:O,_setFieldArray:P,_setDisabledField:wt,_setErrors:W,_getFieldArray:_e,_reset:mo,_resetDefaultValues:()=>On(i.defaultValues)&&i.defaultValues().then(w=>{Bt(w,i.resetOptions),S.state.next({isLoading:!1})}),_removeUnmounted:ae,_disableForm:Aa,_subjects:S,_proxyFormState:z,get _fields(){return o},get _formValues(){return c},get _state(){return d},set _state(w){d=w},get _defaultValues(){return s},get _names(){return h},set _names(w){h=w},get _formState(){return r},get _options(){return i},set _options(w){i={...i,...w},b=Ns(i.mode),A=Ns(i.reValidateMode)}},subscribe:Vt,trigger:Qe,register:Yt,handleSubmit:Oa,watch:ai,setValue:re,setValues:pe,getValues:Ve,reset:Bt,resetField:ta,resetDefaultValues:(w,B={})=>{if(s=ft(w),!B.keepDirty){const H=Si(s,c);r.dirtyFields=H,r.isDirty=!Mt(H)}B.keepIsValid||O(),S.state.next({...r,defaultValues:s})},clearErrors:Fn,unregister:Re,setError:_t,setFocus:Qu,getFieldState:vt};return{...go,formControl:go}}function po(n={}){const i=Ae.useRef(void 0),r=Ae.useRef(void 0),o=Ae.useRef(n.formControl),[s,c]=Ae.useState(()=>({...ft(cx),isLoading:On(n.defaultValues),errors:n.errors||{},disabled:n.disabled||!1,defaultValues:On(n.defaultValues)?void 0:n.defaultValues}));if(!i.current||n.formControl&&o.current!==n.formControl)if(o.current=n.formControl,n.formControl)i.current={...n.formControl,formState:s},n.defaultValues&&!On(n.defaultValues)&&n.formControl.reset(n.defaultValues,n.resetOptions);else{const{formControl:h,...p}=I4(n);i.current={...p,formState:s}}const d=i.current.control;return d._options=n,U4(()=>{const h=d._subscribe({formState:d._proxyFormState,callback:()=>c({...d._formState,defaultValues:d._defaultValues}),reRenderRoot:!0});return c(p=>({...p,isReady:!0})),d._formState.isReady=!0,h},[d]),Ae.useEffect(()=>d._disableForm(n.disabled),[d,n.disabled]),Ae.useEffect(()=>{n.mode&&(d._options.mode=n.mode),n.reValidateMode&&(d._options.reValidateMode=n.reValidateMode)},[d,n.mode,n.reValidateMode]),Ae.useEffect(()=>{n.errors&&(d._setErrors(n.errors),d._focusError())},[d,n.errors]),Ae.useEffect(()=>{n.shouldUnregister&&d._subjects.state.next({values:d._getWatch()})},[d,n.shouldUnregister]),Ae.useEffect(()=>{if(d._proxyFormState.isDirty){const h=d._getDirty();h!==s.isDirty&&d._subjects.state.next({isDirty:h})}},[d,s.isDirty]),Ae.useEffect(()=>{var h;n.values&&!Wn(n.values,r.current)?(d._reset(n.values,{keepFieldsRef:!0,...d._options.resetOptions}),!((h=d._options.resetOptions)===null||h===void 0)&&h.keepIsValid||d._setValid(),r.current=n.values,c(p=>({...p}))):d._resetDefaultValues()},[d,n.values]),Ae.useEffect(()=>{d._state.mount||(d._setValid(),d._state.mount=!0),d._state.watch&&(d._state.watch=!1,d._subjects.state.next({...d._formState})),d._removeUnmounted()}),i.current.formState=Ae.useMemo(()=>N4(s,d),[d,s]),i.current}const W4=()=>{const{register:n,handleSubmit:i,reset:r}=po(),o=ln(),s=c=>{o(Q1(c)),r()};return x.jsxs(w4,{children:[x.jsx(Lh,{tabletVisible:!0}),x.jsxs(E4,{children:["Expand your mind, reading ",x.jsx("span",{children:"a book"})]}),x.jsxs(T4,{onSubmit:i(s),children:[x.jsxs(R4,{children:[x.jsx(kd,{type:"text",placeholder:"Name:",...n("name")}),x.jsx(kd,{type:"text",placeholder:"Mail:",...n("email")}),x.jsx(kd,{type:"text",placeholder:"Password:",...n("password")})]}),x.jsxs(A4,{children:[x.jsx(O4,{type:"submit",children:"Registration"}),x.jsx(C4,{to:"/login",children:"Already have an account?"})]})]})]})},eO="/read-journey-vite/assets/iPhone%2015%20Black-DhgizZl2.png",tO=N.div`
max-width: 375px;
margin: 0 auto;
padding: 20px 40px 0 40px;
background-color: var(--container-background-color);
border-radius: 30px;
display: flex;
height: 331px; 
overflow: hidden;
@media (min-width: ${F.tablet}) {
    display: none;
};
@media (min-width: ${F.desktop}) {
    max-width: 1440px;
    padding: 88px 98px 0 98px;
    background-color: var(--container-background-color);
    border-radius: 30px;
    flex:1;
    height: 100%;
    display: flex;
};
`,nO=N.img`
width: 100%;
height: 100%;
object-fit: cover;
@media (min-width: ${F.desktop}) {
    width: auto;
    object-fit: none;
};
`,fx=()=>x.jsx(tO,{children:x.jsx(nO,{src:eO,alt:"MobilePhone"})}),aO=N.div`
display: flex;
gap: 10px;
flex-direction: column;
@media (min-width: ${F.desktop}) {
    gap: 16px;
    flex-direction: row;
    margin: 32px;
  }
`,iO=()=>x.jsxs(aO,{children:[x.jsx("section",{children:x.jsx(W4,{})}),x.jsx("section",{children:x.jsx(fx,{})})]}),rO=N.div`
    padding: 20px 20px 40px 20px;
    border-radius: 30px;
    box-sizing: border-box;
    background-color: var(--container-background-color);
    margin: 0 auto;
    flex:1;
    @media (min-width: ${F.tablet}) {
        padding: 40px 64px 214px 64px;
    };
    @media (min-width: ${F.desktop}) {
        padding: 40px 64px 40px 64px;
    };
`,lO=N.h1`
display: block;
margin: 0 auto;
margin-top: 40px;

font-weight: 700;
font-size: 32px;
line-height: 100%;
letter-spacing: 0.02em;
color: var(--main-text-color);
span {
    color: var(--focus-word-color);
}

@media (min-width: ${F.tablet}) {
    margin-top: 157px;
    font-style: Bold;
    font-size: 64px;
    line-height: 60px;
    letter-spacing: 2%;
    color: var(--main-text-color);

    span {
        display:block;
        color: var(--focus-word-color);
    }
}
@media (min-width: ${F.desktop}) {
    margin-top: 107px;
}
`,oO=N.form`
width: 100%;
margin-top: 20px;
@media (min-width: ${F.tablet}) {
    margin-top: 40px;
}
`,sO=N.div`
display:flex;
flex-direction: column;
gap: 8px;
width: 100%;
@media (min-width: ${F.tablet}) {
    gap: 14px;
}
`,kb=N.input`
padding: 14px;
border-radius: 12px;
background-color: var(--select-background-color);
border: 1px solid transparent;
color: var(--main-text-color);

&:hover, &:focus-visible {
    border: 1px solid var(--container-background-color);
}
@media (min-width: ${F.tablet}) {
    padding: 16px 14px 16px 14px;
}
`,uO=N.div`
margin-top: 72px;
display:flex;
flex-direction: row;
align-items: center;
@media (min-width: ${F.tablet}) {
    margin-top: 146px;
}
`,cO=N.button`
width: 140px;
padding: 12px 29px;
border-radius: 30px;
border:1px solid var(--border-color);
background-color: var(--container-background-color);

font-weight: 700;
font-size: 14px;
line-height: 129%;
letter-spacing: 0.02em;
color: #1f1f1f;
color: var(--main-text-color);

&:hover {
    border: 1px solid transparent;
    background-color: var(--main-text-color);
    color: var(--select-background-color);
}
@media (min-width: ${F.tablet}) {
    width: 225px;
    padding: 16px 54px 16px 54px;

    font-style: Bold;
    font-size: 20px;
    line-height: 20px;
    letter-spacing: 2%;
}
`,fO=N(ki)`
display: inline-block;
margin-left: auto;
font-weight: 500;
font-size: 12px;
line-height: 117%;
letter-spacing: -0.02em;
text-decoration: underline;
text-decoration-skip-ink: none;
color: var(--grey-text-color);
&:hover {
    color: var(--main-text-color);
}
@media (min-width: ${F.tablet}) {
    font-size: 14px;
    line-height: 18px;
}
`,dO=()=>{const{register:n,handleSubmit:i,reset:r}=po(),o=ln(),s=c=>{o(Z1(c)),r()};return x.jsxs(rO,{children:[x.jsx(Lh,{tabletVisible:!0}),x.jsxs(lO,{children:["Expand your mind, reading ",x.jsx("span",{children:"a book"})]}),x.jsxs(oO,{action:"",onSubmit:i(s),children:[x.jsxs(sO,{children:[x.jsx(kb,{type:"text",placeholder:"Mail",...n("email")}),x.jsx(kb,{type:"text",placeholder:"Password",...n("password")})]}),x.jsxs(uO,{children:[x.jsx(cO,{type:"submit",children:"Log In"}),x.jsx(fO,{to:"/register",children:"Don’t have an account?"})]})]})]})},hO=N.div`
display: flex;
gap: 10px;
flex-direction: column;
@media (min-width: ${F.tablet}) {
    display: block;
  }
@media (min-width: ${F.desktop}) {
    display: flex;
    gap: 16px;
    flex-direction: row;
    margin: 32px;
  }
`,Nb=()=>x.jsxs(hO,{children:[x.jsx("section",{children:x.jsx(dO,{})}),x.jsx("section",{children:x.jsx(fx,{})})]}),pO=N.div`
display: flex;
padding: 20px;
flex-direction: column;
gap: 20px;
border-radius: 30px;
background-color: var(--container-background-color);
@media (min-width: ${F.tablet}) {
    padding: 32px;
    gap: 32px;
    flex-direction: row;
}
@media (min-width: ${F.desktop}) {
    padding: 40px 20px 20px 20px;
    flex-direction: column;
    gap: 20px;
}
`,ap=({children:n})=>x.jsx(pO,{children:n}),mO=N.div`
// position: relative;
padding: 40px 20px 40px 20px;
border-radius: 30px;
background-color: var(--container-background-color);
@media (min-width: ${F.tablet}) {
    padding: 40px;
    min-height: 518px;
}
@media (min-width: ${F.desktop}) {
    padding: 40px;
    min-width: 847px;
    min-height: 651px;
}
`,yO=N.div`
display: flex;
flex-direction: row;
margin-left: auto;
// @media (min-width: ${F.tablet}) {
//     padding: 40px;
// }
// @media (min-width: ${F.desktop}) {
//     padding: 40px;
// }
`,gO=N.h1`
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: 0.02em;
color: var(--main-text-color);
@media (min-width: ${F.tablet}) {
    font-size: 28px;
    line-height: 114%;
}`,bO=N.ul`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 21px;
margin-top: 22px;
@media (min-width: ${F.tablet}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-top: 28px;
}
@media (min-width: ${F.desktop}) {
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    // margin-top: 28px;
}`,vO=N.li`
width: 100%;
// height: 247px;

@media (min-width: ${F.tablet}) {
  width: 137px;
  height: 247px;
  &:hover {
    transform: scale(1.08);
  }
}
@media (min-width: ${F.desktop}) {
  &:hover {
    transform: scale(1.08);
  }
}     
`,xO=N.button`
width: 100%;
cursor: pointer;
border: none;
`,SO=N.img`
width: 100%;
// width: 137px;
height: 208px;
border-radius: 8px;`,_O=N.div`
width: 89px;
display: inline-block;`,wO=N.h2`
font-weight: 700;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--main-text-color);
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;`,EO=N.p`
font-weight: 500;
font-size: 10px;
line-height: 120%;
letter-spacing: -0.02em;
color: var(--grey-text-color)`,TO=N.button`
width: 28px;
height: 28px;
border-radius: 50%;
background-color: var(--red-bground-color);
border: 1px solid var(--red-boder-color);
margin-left: 20px;
`,RO=N(ea)`
  width: 14px;
  height: 14px;
`,AO=N.div`
  position: fixed;
  inset: 0;

  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1000;
  
`,OO=N.div`
  box-sizing: border-box;
  position: relative;
  overflow-y: auto;
  border: 1px solid var(--modal-background-color);
  background: var(--container-background-color);
  border-radius: 12px;
  // padding: 40px 98px;
  padding: 40px;
  width: calc(100% - 32px);   /* 🔥 важливо */
  max-width: 335px;
  
@media (min-width: ${F.tablet}) {
    padding: 50px;
    max-width: 500px;
}
`,CO=N.button`
  position: absolute;
  top: 16px;
  right: 16px;

  width: 22px;
  height: 22px;

  background: transparent;
  border: none;
  cursor: pointer;

  font-size: 22px;
  line-height: 1;
  color: var(--main-text-color);
`,DO=({isOpen:n,onClose:i,children:r})=>(k.useEffect(()=>{if(!n)return;const o=s=>{s.key==="Escape"&&i()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[n,i]),n?zw.createPortal(x.jsx(AO,{onClick:o=>{o.target===o.currentTarget&&i()},children:x.jsxs(OO,{onClick:o=>o.stopPropagation(),children:[x.jsx(CO,{onClick:i,children:"X"}),r]})}),document.body):null),dx=k.createContext(null),zO=({children:n})=>{const[i,r]=k.useState(!1),[o,s]=k.useState(null),c=h=>{s(h),r(!0)},d=()=>{r(!1),s(null)};return x.jsxs(dx.Provider,{value:{openModal:c,closeModal:d},children:[n,x.jsx(DO,{isOpen:i,onClose:d,children:o})]})},ip=()=>k.useContext(dx),MO=N.div`
display: flex;
flex-direction: column;
align-items: center;
// margin: 40 58px 40 58px;
@media (min-width: ${F.tablet}) {
    margin: 0 100px 0 100px;
}
`,jO=N.img`
width: 140px;
height: 213px;
border-radius: 8px;
@media (min-width: ${F.tablet}) {
    width: 153px;
    height: 233px;
}
`,kO=N.p`
width: 140px;
display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
margin-top: 16px;
font-weight: 700;
font-size: 18px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);
text-align: center;
@media (min-width: ${F.tablet}) {
    width: 153px;
    font-size: 20px;
}
`,NO=N.p`
margin-top: 2px;
font-weight: 500;
font-size: 12px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--grey-text-color)
@media (min-width: ${F.tablet}) {
    font-size: 14px;
}
`,UO=N.p`
margin-top: 4px;
font-weight: 500;
font-size: 10px;
line-height: 120%;
letter-spacing: -0.02em;
text-align: center;
color: var(--main-text-color)`,BO=N.button`
margin-top: 20px;
border: 1px solid var(--border-color);
border-radius: 30px;
padding: 12px 24px;
background-color: var(--container-background-color);
font-weight: 700;
font-size: 14px;
line-height: 129%;
letter-spacing: 0.02em;
color: var(--main-text-color);

&:hover {
    background-color: var(--main-text-color);
    color: var(--body-background-color);
}
@media (min-width: ${F.tablet}) {
    margin-top: 32px;
    padding: 14px 28px;
    font-size: 16px;
    line-height: 113%;
}    
`,LO=N(ki)`
margin-top: 32px;
border: 1px solid var(--border-color);
border-radius: 30px;
padding: 14px 28px;
background-color: var(--container-background-color);
text-decoration: none;
font-family: var(--font-family);
font-weight: 700;
font-size: 16px;
line-height: 113%;
letter-spacing: 0.02em;
color: var(--main-text-color);

&:hover {
    background-color: var(--main-text-color);
    color: var(--body-background-color);
}`,Fl=gn("books/getBooks",async({page:n=1,limit:i,title:r="",author:o=""},s)=>{try{const{data:c}=await Zt.get(`books/recommend?page=${n}&limit=${i}&title=${r}&author=${o}`);return c}catch(c){return s.rejectWithValue(c.message)}}),hx=gn("books/addNewBooks",async n=>{try{const{data:i}=await Zt.post("books/add",n);return i}catch{Ue.error("Something went wrong.")}}),HO=gn("books/addOwnBooks",async(n,i)=>{try{const{data:r}=await Zt.post(`books/add/${n}`);return Ue.success("Book added to library!"),r}catch(r){return i.rejectWithValue(r.message)}}),rp=gn("books/getOwnBook",async(n,i)=>{try{const{data:r}=await Zt.get("books/own",{params:n?{status:n}:{}});return r}catch(r){return i.rejectWithValue(r.message)}}),px=gn("books/removeOwnBooks",async(n,i)=>{try{const{data:r}=await Zt.delete(`books/remove/${n}`);return r}catch(r){return i.rejectWithValue(r.message)}}),mx=gn("books/getInfoBook",async n=>{try{const{data:i}=await Zt.get(`books/${n}`);return i}catch{Ue.error("Something went wrong.")}}),yx=gn("books/startBooksReading",async n=>{try{const{data:i}=await Zt.post("books/reading/start",n);return i}catch{Ue.error("Something went wrong.")}}),gx=gn("books/finishBooksReading",async n=>{try{const{data:i}=await Zt.post("books/reading/finish",n);return i}catch{Ue.error("Something went wrong.")}}),bx=gn("books/deleteReading",async({bookId:n,readingId:i})=>{try{const{data:r}=await Zt.delete("books/reading",{params:{bookId:n,readingId:i}});return r}catch{Ue.error("Something went wrong.")}}),lp="/read-journey-vite/assets/add-book-Dq6MM_oY.png",qO=({book:n})=>{const i=ln(),r=n.owner,o=()=>{i(HO(n._id))};return x.jsxs(MO,{children:[x.jsx(jO,{src:n.imageUrl||lp,alt:n.title}),x.jsx(kO,{children:n.title}),x.jsx(NO,{children:n.author}),x.jsxs(UO,{children:[n.totalPages," pages"]}),r?x.jsx(LO,{to:`/reading/${n._id}`,children:"Start reading"}):x.jsx(BO,{type:"button",onClick:o,children:"Add to library"})]})},vx=({book:n,onDelete:i})=>{const{openModal:r}=ip();return x.jsxs(vO,{children:[x.jsx(xO,{onClick:()=>r(x.jsx(qO,{book:n})),children:x.jsx(SO,{src:n.imageUrl||lp,alt:n.title,width:"100"})}),x.jsxs(_O,{children:[x.jsx(wO,{children:n.title}),x.jsx(EO,{children:n.author})]}),i&&x.jsx(TO,{type:"button",onClick:()=>i(n._id),children:x.jsx(RO,{name:"icon-trash-2",color:"var(--main-text-color)"})})]},n._id)},$O={recommend:{items:[],page:1,totalPages:1,isLoading:!1},ownBooks:{items:[],status:"All books",isLoading:!1},readingBook:{items:[],readingStatus:"idle"|"reading"|"finished"}},xx=Xh({name:"books",initialState:$O,selectors:{selectBooks:n=>n.recommend.items,selectPage:n=>n.recommend.page,selectTotalPages:n=>n.recommend.totalPages,selectIsLoading:n=>n.recommend.isLoading,selectOwnBooks:n=>n.ownBooks.items,selectReadingBook:n=>n.readingBook.items,selectReadingStatus:n=>n.readingBook.readingStatus,selectStatus:n=>n.ownBooks.status},extraReducers:n=>{n.addCase(Fl.fulfilled,(i,r)=>{i.recommend.items=r.payload.results,i.recommend.page=r.payload.page,i.recommend.totalPages=r.payload.totalPages,i.recommend.isLoading=!1}).addCase(Fl.pending,i=>{i.recommend.isLoading=!0}).addCase(Fl.rejected,i=>{i.recommend.isLoading=!1}).addCase(hx.fulfilled,(i,r)=>{i.ownBooks.items.push(r.payload)}).addCase(rp.fulfilled,(i,r)=>{i.ownBooks.items=r.payload,i.ownBooks.status=r.payload.status,i.ownBooks.isLoading=!1}).addCase(px.fulfilled,(i,r)=>{i.ownBooks.items=i.ownBooks.items.filter(o=>o._id!==r.payload.id)}).addCase(mx.fulfilled,(i,r)=>{i.readingBook.items=r.payload,i.readingBook.readingStatus="idle"}).addCase(yx.fulfilled,(i,r)=>{i.readingBook.items=r.payload,i.readingBook.readingStatus="reading"}).addCase(gx.fulfilled,(i,r)=>{i.readingBook.items=r.payload,i.readingBook.readingStatus="finished"}).addCase(bx.fulfilled,(i,r)=>{console.log(r),i.readingBook.items=r.payload})}}),VO=xx.reducer,{selectBooks:Sx,selectPage:bD,selectTotalPages:YO,selectIsLoading:vD,selectOwnBooks:GO,selectReadingBook:Lr,selectStatus:xD,selectReadingStatus:_x}=xx.selectors,XO=N.div`
// position: absolute;
// top: 6%;
// right: 40px;
margin-left: auto;
display: flex;
gap: 8px

`,Ub=N.button`
width: 32px;
height: 32px;
border-radius: 50%;
border: 1px solid var(--focus-word-color);
background-color: var(--container-background-color);
color: var(--focus-word-color);

&:hover {
    background-color: var(--main-text-color);
    color: var(--container-background-color);}
@media (min-width: ${F.tablet}) {
    width: 40px;
    height: 40px;
}
`,Bb=N(ea)`
  width: 16px;
  height: 16px;
  @media (min-width: ${F.tablet}) {
    width: 20px;
    height: 20px;
  }
`,FO={filter:{title:"",author:""}},op=Xh({name:"searchFilter",initialState:FO,selectors:{selectSearchFilter:n=>n.filter},reducers:{setFilter:(n,i)=>{n.filter=i.payload}}}),{setFilter:QO}=op.actions,{selectSearchFilter:ZO}=op.selectors,KO=op.reducer,PO=()=>{const n=()=>window.innerWidth>=1440?10:window.innerWidth>=768?8:2,[i,r]=k.useState(n);return k.useEffect(()=>{const o=()=>r(n());return window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)},[]),i},JO=()=>{const n=ln(),i=Ut(YO),[r,o]=Tw(),s=Number(r.get("page"))||1,c=Ut(ZO),d=PO();k.useEffect(()=>{n(Fl({page:s,limit:d,...c}))},[n,s,c,d]);const h=()=>{s>1&&o({page:s-1})},p=()=>{s<i&&o({page:s+1})};return x.jsxs(XO,{children:[x.jsx(Ub,{onClick:h,disabled:s===1,children:x.jsx(Bb,{name:"icon-left"})}),x.jsx(Ub,{onClick:p,disabled:s===i,children:x.jsx(Bb,{name:"icon-right"})})]})},IO=()=>{const n=Ut(Sx);return x.jsxs(mO,{children:[x.jsxs(yO,{children:[x.jsx(gO,{children:"Recommended"}),x.jsx(JO,{})]}),x.jsx(bO,{children:n.map(i=>x.jsx(vx,{book:i},i._id))})]})},WO=N.div`
display: flex;
flex-direction: column;
gap: 10px;
margin-top: 10px;
@media (min-width: ${F.tablet}) {
    gap: 16px;
    margin-top: 16px;
}
@media (min-width: ${F.desktop}) {
    flex-direction: row;
    // max-width: auto;
}
`,eC=N.div`
width: 100%;
@media (min-width: ${F.tablet}) {
    flex: 1.1;
}
@media (min-width: ${F.desktop}) {
    flex: initial;
    width: 100%;
}
`,tC=N.p`
margin-left: 14px;
margin-bottom: 8px;

font-weight: 500;
font-size: 10px;
line-height: 120%;
letter-spacing: -2%;
color: var(--main-text-color);
@media (min-width: ${F.tablet}) {
    font-size: 14px;
}
`,nC=N.form`
display: flex;
flex-direction: column;
gap: 8px;
width: 100%;
`,Lb=N.input`
box-sizing: border-box;
padding: 14px;
background-color: var(--select-background-color);
border-radius: 12px;
border: 1px solid transparent;
color: var(--main-text-color);
font-size: 12px;
&:hover, &:focus-visible {
    outline: none;
    border: 1px solid var(--border-color);
}
@media (min-width: ${F.tablet}) {
    padding: 16px 14px;
    font-size: 14px;
} 
`,aC=N.button`
padding: 10px 20px;
align-self: flex-start;
background-color: var(--container-background-color);
border-radius: 30px;
border: 1px solid var(--border-color);
margin-top: 12px;

font-weight: 700;
font-size: 14px;
line-height: 18px;
letter-spacing: 2%;
color: var(--main-text-color);
&:hover {
    background-color: var(--main-text-color);
    color: var(--body-background-color);
}
@media (min-width: ${F.tablet}) {
    padding: 12px 28px;
    font-size: 16px;
}
`,iC=()=>{const n=ln(),{register:i,handleSubmit:r,reset:o}=po({defaultValues:{title:"",author:""}}),s=c=>{n(QO(c)),n(Fl({page:1,limit:10,...c})),o()};return x.jsxs(eC,{children:[x.jsx(tC,{children:"Filters:"}),x.jsxs(nC,{action:"",onSubmit:r(s),children:[x.jsx(Lb,{type:"text",placeholder:"Book title:",...i("title")}),x.jsx(Lb,{type:"text",placeholder:"The author:",...i("author")}),x.jsx(aC,{type:"submit",children:"To apply"})]})]})},rC=N.div`
padding: 20px;
background-color: var(--select-background-color);
border-radius: 12px;
@media (min-width: ${F.tablet}) {
    flex: 1;
}
@media (min-width: ${F.desktop}) {
    flex: initial;
}
`,lC=N.p`
display: block;
font-weight: 700;
font-size: 18px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);
@media (min-width: ${F.tablet}) {
    font-size: 20px;
} 
`,oC=N.ul`
display: flex;
flex-direction: column;
gap: 20px;
margin: 20px 0 20px 0;
@media (min-width: ${F.tablet}) {
    margin: 40px 0 26px 0;
    padding-right: 20px;
} 
@media (min-width: ${F.desktop}) {
    padding-right: 0;
}
`,Hb=N.li`
display: flex;
gap: 12px;
flex-direction: row;`,qb=N.div`
flex-shrink: 0;
display: block;
width: 44px;
height: 44px;
border-radius: 50%;
background-color: var(--main-text-color);

font-weight: 700;
font-size: 18px;
line-height: 200%;
letter-spacing: -0.02em;
text-align: center;
@media (min-width: ${F.tablet}) {
    font-size: 20px;
} 
`,$b=N.p`
display: inline-block;
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--grey-text-color);
@media (min-width: ${F.tablet}) {
    font-size: 15px;
}
`,Vb=N.span`
color: var(--main-text-color);`,sC=N.div`
display: flex;
`,uC=N(ki)`
font-weight: 500;
font-size: 14px;
line-height: 200%;
letter-spacing: -0.02em;
text-decoration: underline;
text-decoration-skip-ink: none;
color: var(--grey-text-color);
&:hover {
    color: var(--main-text-color);}`,cC=N.span`
display: inline-block;
margin-left: auto;
`,fC=N(ea)`
  width: 20px;
  height: 20px;
  @media (min-width: ${F.tablet}) {
    width: 24px;
    height: 24px;
  }
`,dC=()=>x.jsxs(rC,{children:[x.jsx(lC,{children:"Start your workout"}),x.jsxs(oC,{children:[x.jsxs(Hb,{children:[x.jsx(qb,{children:"1"}),x.jsxs($b,{children:[x.jsx(Vb,{children:"Create a personal library:"}),"add the books you intend to read  to it."]})]}),x.jsxs(Hb,{children:[x.jsx(qb,{children:"2"}),x.jsxs($b,{children:[x.jsx(Vb,{children:"Create your first workout:"}),"define  a goal, choose a period, start training."]})]})]}),x.jsxs(sC,{children:[x.jsx(uC,{to:"/library",children:"My library"}),x.jsx(cC,{children:x.jsx(fC,{name:"icon-log-in",size:{width:24,height:24},color:"rgba(249, 249, 249, 1)"})})]})]}),hC=N.ul`
    display: none;
    @media (min-width: ${F.desktop}) {
        display: flex;
        flex-direction: row;
        gap: 14px;
        padding: 15px 20px 15px 20px;
        border-radius: 12px;
        background-color: var(--select-background-color);
    }
    `,pC=N.li`
    display: flex;
    align-items: center;
    `,mC=N.li`
    font-family: var(--font-family);
    font-weight: 500;
    font-size: 14px;
    line-height: 115%;
    letter-spacing: -0.02em;
    color: var(--grey-text-color);
    `,yC=N.span`
    color: var(--main-text-color);
    `,gC=()=>x.jsxs(hC,{children:[x.jsx(pC,{children:x.jsx("img",{src:"/src/assets/img/books.png",alt:"books"})}),x.jsxs(mC,{children:['"Books are ',x.jsx(yC,{children:"windows"})," to the world,"," ",x.jsx("br",{}),' and reading is a journey into the unknown."']})]}),bC=()=>x.jsxs(WO,{children:[x.jsxs(ap,{children:[x.jsx(iC,{}),x.jsx(dC,{}),x.jsx(gC,{})]}),x.jsx("section",{children:x.jsx(IO,{})})]}),vC=N.div`
display: flex;
flex-direction: column;
gap: 10px;
@media (min-width: ${F.tablet}) {
    gap: 16px;
    padding-top: 16px;
}
    @media (min-width: ${F.desktop}) {
    flex-direction: row;
    padding-top: 16px;

}
`,xC=N.div`
width: 100%;
@media (min-width: ${F.tablet}) {
    flex: 1.1;
} 
@media (min-width: ${F.desktop}) {
    flex: initial;
}    
`,SC=N.p`
margin-left: 14px;
margin-bottom: 8px;

font-weight: 500;
font-style: Medium;
font-size: 14px;
leading-trim: NONE;
line-height: 18px;
letter-spacing: -2%;
color: var(--main-text-color);`,_C=N.form`
display: flex;
flex-direction: column;
gap: 8px;
width: 100%;`,Ld=N.input`
// display: block;
// width: 100%;
box-sizing: border-box;
padding: 14px;
background-color: var(--select-background-color);
border-radius: 12px;
border: 1px solid transparent;
color: var(--main-text-color);

font-weight: 500;
font-size: 12px;
line-height: 120%;
letter-spacing: -0.02em;

&:hover, &:focus-visible {
    outline: none;
    border: 1px solid var(--border-color);
}
@media (min-width: ${F.tablet}) {
    padding: 16px 14px;
    font-size: 14px;
}     
`,wC=N.button`
padding: 10px 20px;
align-self: flex-start;
background-color: var(--container-background-color);
border-radius: 30px;
border: 1px solid var(--border-color);
margin-top: 12px;

font-weight: 700;
font-size: 14px;
line-height: 118%;
letter-spacing: 0.5%;
color: var(--main-text-color);

&:hover {
    background-color: var(--main-text-color);
    color: var(--body-background-color);
}
@media (min-width: ${F.tablet}) {
    padding: 12px 28px;
    font-size: 16px;
}
`,EC=N.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
// width: 342px;`,TC=N.img`
margin-bottom: 32px;`,RC=N.p`
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.02em;
text-align: center;
color: var(--main-text-color);`,AC=N.p`
margin-top: 14px;
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
text-align: center;
color: var(--grey-text-color);
`,OC=N.span`
color: var(--main-text-color);`,CC=()=>x.jsxs(EC,{children:[x.jsx(TC,{src:"/src/assets/img/cool.png",alt:"cool"}),x.jsx(RC,{children:"Good job"}),x.jsxs(AC,{children:["Your book is now in ",x.jsx(OC,{children:"the library!"})," The joy ",x.jsx("br",{})," knows no bounds and now you can ",x.jsx("br",{})," start your training"]})]}),DC=()=>{const n=ln(),{openModal:i}=ip(),{register:r,handleSubmit:o,reset:s}=po(),c=d=>{n(hx(d)),s()};return x.jsxs(xC,{children:[x.jsx(SC,{children:"Create your library:"}),x.jsxs(_C,{action:"",onSubmit:o(c),children:[x.jsx(Ld,{type:"text",placeholder:"Book title:",...r("title")}),x.jsx(Ld,{type:"text",placeholder:"The author:",...r("author")}),x.jsx(Ld,{type:"text",placeholder:"Number of pages:",...r("totalPages")}),x.jsx(wC,{type:"submit",onClick:()=>i(x.jsx(CC,{})),children:"Add book"})]})]})},zC=N.div`
display: flex;
flex-direction: column;
gap: 15px;
padding: 20px;
background-color: var(--select-background-color);
border-radius: 12px;
flex:1;
@media (min-width: ${F.tablet}) {
    gap: 20px;
    margin-top: 0;
}
@media (min-width: ${F.desktop}) {
    flex: initial;
    margin-top: 58px;
    padding: 20px 40px 20px 20px;
}  
`,MC=N.p`
font-weight: 700;
font-size: 18px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);
@media (min-width: ${F.tablet}) {
    font-size: 20px;
}
`,jC=N.ul`
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 20px;
@media (min-width: ${F.tablet}) {
    grid-template-columns: repeat(3, 71px);
}
@media (min-width: ${F.desktop}) {
    grid-template-columns: repeat(3, 1fr);
}
`,kC=N.li`
width: 71px;
height: 141px;
`,NC=N.img`
width: 100%;
height: 107px;
border-radius: 8px;
`,UC=N.p`
font-weight: 700;
font-size: 10px;
line-height: 120%;
letter-spacing: -0.02em;
color: var(--main-text-color);
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
`,BC=N.p`
margin-top: 2px;
font-weight: 500;
font-size: 10px;
line-height: 120%;
letter-spacing: -0.02em;
color: var(--grey-text-color);
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
`,LC=N.div`
display: flex;
`,HC=N(ki)`
font-weight: 500;
font-size: 12px;
line-height: 200%;
letter-spacing: -0.02em;
text-decoration: underline;
text-decoration-skip-ink: none;
color: var(--grey-text-color);

&:hover {
    color: var(--main-text-color);}
@media (min-width: ${F.tablet}) {
    font-size: 14px;
}
`,qC=N.span`
display: inline-block;
margin-left: auto;
`,$C=N(ea)`
  width: 20px;
  height: 20px;
  @media (min-width: ${F.tablet}) {
    width: 24px;
    height: 24px;
  }
`,VC=()=>{const n=Ut(Sx),i=k.useMemo(()=>[...n].sort(()=>.5-Math.random()).slice(0,3),[n]);return x.jsxs(zC,{children:[x.jsx(MC,{children:"Recommended books"}),x.jsx(jC,{children:i.map(r=>x.jsxs(kC,{children:[x.jsx(NC,{src:r.imageUrl,alt:r.title,width:"100"}),x.jsx(UC,{children:r.title}),x.jsx(BC,{children:r.author})]},r._id))}),x.jsxs(LC,{children:[x.jsx(HC,{to:"/recommended",children:"Home"}),x.jsx(qC,{children:x.jsx($C,{name:"icon-log-in",color:"rgba(249, 249, 249, 1)"})})]})]})},YC=N.div`
// position: relative;
display: flex;
flex-direction: column;
justify-content: space-between;
padding: 40px 20px;
border-radius: 30px;
background-color: var(--container-background-color);
@media (min-width: ${F.tablet}) {
  padding: 40px; 
  min-height: 518px; 
  justify-content: normal;
}
@media (min-width: ${F.desktop}) {
  min-height: 651px;
  min-width: 847px;

}
`,GC=N.div`
display: flex;
flex-direction: row;
justify-content: space-between; 
`,XC=N.p`
display: inline-block;
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: 0.02em;
color: var(--main-text-color);
@media (min-width: ${F.tablet}) {
    font-size: 28px;
    line-height: 114%;   
}
`,FC=N.ul`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 21px;
margin-top: 22px;
@media (min-width: ${F.tablet}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-top: 28px;
}
@media (min-width: ${F.desktop}) {
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
}`,QC=N.div`
width: 197px;
margin: auto;
margin-top: 63px;
margin-bottom: 60px;
@media (min-width: ${F.tablet}) {
    width: 274px;
    margin-top: 86px;
    margin-bottom: 120px;
    
}
@media (min-width: ${F.desctop}) {
    margin-top: 147px;
    margin-bottom: 192px;
}
`,ZC=N.div`
display:flex;
align-items: center;
justify-content: center;
width: 100px;
height: 100px;
border-radius: 50%;
background-color: var(--select-background-color);
margin: 0 auto;
@media (min-width: ${F.tablet}) {
    width: 130px;
    height: 130px;
}
`,KC=N.img`
width: 50px;
height: 50px;
@media (min-width: ${F.tablet}) {
    width: 70px;
    height: 70px;
}
`,PC=N.p`
margin-top: 10px;
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
text-align: center;
color: var(--main-text-color);
@media (min-width: ${F.tablet}) {
    margin-top: 20px;
}
`,JC=N.span`
color: var(--grey-text-color);
`,IC=()=>x.jsxs(QC,{children:[x.jsx(ZC,{children:x.jsx(KC,{src:"/src/assets/img/books70.png",alt:"books"})}),x.jsxs(PC,{children:["To start training, add ",x.jsx(JC,{children:"some of your books"})," or ",x.jsx("br",{})," from the recommended ones"]})]}),WC=N.div`
position: relative;
display: flex;
padding: 12px 14px;
border: 1px solid var(--border-color);
border-radius: 12px;
justify-content: space-between; 
gap: 28px;

font-weight: 500;
font-size: 12px;
line-height: 133%;
letter-spacing: -0.02em;
color: var(--main-text-color);
@media (min-width: ${F.tablet}) {
  padding: 14px;
  font-size: 14px;
  line-height: 129%;
  gap: 53px;  
}
`,e5=N.span`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,t5=N.span`
  margin-left: auto;
  transform: ${({$isOpen:n})=>n?"rotate(180deg)":"rotate(0deg)"};
  transition: transform 0.3s;
`,n5=N.ul`
  position: absolute;
  top: 110%;
  left: 0;
  width: 100%;
  padding: 14px;
  margin: 0;
  background: var(--select-background-color);
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  z-index: 10;
  list-style: none;
  color: var(--grey-text-color)
`,a5=N.li`
    margin-bottom: 7px;
    cursor: pointer;
    &:last-child { margin-bottom: 0; }

  &:hover {
    color: var(--main-text-color);
  }
`,i5=N(ea)`
  width: 16px;
  height: 16px;
  @media (min-width: ${F.tablet}) {
    width: 20px;
    height: 20px;
  }
`,r5=({options:n,placeholder:i="All books"})=>{const[r,o]=k.useState(!1),[s,c]=k.useState(null),d=ln();k.useEffect(()=>{d(rp(s?.value||void 0))},[s,d]);const h=()=>o(!r),p=y=>()=>{c(y),o(!1)};return x.jsxs(WC,{onClick:h,children:[x.jsx(e5,{children:s?.label||i}),x.jsx(t5,{$isOpen:r,children:x.jsx(i5,{name:"icon-chevron-down",color:"var(--main-text-color)"})}),r&&x.jsx(n5,{children:n.map(y=>x.jsx(a5,{onClick:p(y),children:y.label},y.value))})]})},l5=()=>{const n=[{label:"Unread",value:"unread"},{label:"In progress",value:"in-progress"},{label:"Done",value:"done"},{label:"All books",value:""}],i=ln(),r=Ut(GO);k.useEffect(()=>{i(rp())},[i]);const o=s=>{i(px(s))};return x.jsxs(YC,{children:[x.jsxs(GC,{children:[x.jsx(XC,{children:"My library"}),x.jsx(r5,{options:n})]}),r.length>0?x.jsx(FC,{children:r.map(s=>x.jsx(vx,{book:s,onDelete:o},s._id))}):x.jsx(IC,{})]})},o5=()=>x.jsxs(vC,{children:[x.jsxs(ap,{children:[x.jsx(DC,{}),x.jsx(VC,{})]}),x.jsx("section",{children:x.jsx(l5,{})})]}),s5=N.div`
display: flex;
flex-direction: column;
gap: 40px;
padding: 40px;
border-radius: 30px;
background-color: var(--container-background-color);
@media (min-width: ${F.tablet}) {
  gap: 32px;
  padding-bottom: 25px;
}
@media (min-width: ${F.desktop}) {
  gap: 44px;

}
`,u5=N.p`
display: inline-block;
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: 0.02em;
color: var(--main-text-color);
@media (min-width: ${F.tablet}) {
    font-size: 28px;
    line-height: 114%;
}
`,c5=N.div`
text-align: center;
@media (min-width: ${F.desktop}) {
    margin: 0 100px;
}
`,f5=N.img`
width: 137px;
height: 208px;
@media (min-width: ${F.tablet}) {
    width: 169px;
    height: 256px;
}
`,d5=N.p`
margin-top: 10px;
margin-bottom: 4px;
font-weight: 700;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--main-text-color);
@media (min-width: ${F.tablet}) {
    margin-top: 25px;
    font-size: 20px;
    line-height: 100%;
}
`,h5=N.p`
margin-bottom: 20px;
font-family: var(--font-family);
font-weight: 500;
font-size: 10px;
line-height: 120%;
letter-spacing: -0.02em;
color: var(--grey-text-color);
@media (min-width: ${F.tablet}) {
    margin-bottom: 16px;
    font-size: 14px;
    line-height: 129%;
}
@media (min-width: ${F.desktop}) {
    margin-bottom: 25px;
}
`,p5=N.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid #fff;
  background: #0f0f0f;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 0;
  transition: transform 200ms ease;

  &:hover {
    transform: scale(1.08);
  }

    ${({$active:n})=>n&&`
      ${wx} {
        width: 18px;
        height: 18px;
        border-radius: 4px;
        transform: scale(1.15) rotate(90deg);
      }
    `}
@media (min-width: ${F.tablet}) {
  width: 50px;
  height: 50px;
}
`,wx=N.div`
  width: 30px;
  height: 30px;
  background: #ff0000;
  border-radius: 50%;
  transition: transform 200ms ease;
  text-align: center;
@media (min-width: ${F.tablet}) {
  width: 40px;
  height: 40px;
}
`,m5=()=>{const n=Ut(Lr),r=Ut(_x)==="reading";return n?x.jsxs(s5,{children:[x.jsx(u5,{children:"My reading"}),x.jsxs(c5,{children:[x.jsx(f5,{src:n.imageUrl||lp,alt:"books-title"}),x.jsx(d5,{children:n.title}),x.jsx(h5,{children:n.author}),x.jsx("div",{children:x.jsx(p5,{$active:r,children:x.jsx(wx,{})})})]})]}):x.jsx("p",{children:"Loading..."})},y5=N.div`
// display: block;
flex: 1;
@media (min-width: ${F.desktop}) {
    flex: none;
}`,g5=N.p`
display: block;
margin-top: 20px;
font-weight: 700;
font-size: 18px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);
@media (min-width: ${F.tablet}) {
    font-size: 20px;
    margin-top: 0;
}
`,b5=N.p`
margin-top: 14px;
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--grey-text-color)`,v5=N.div`
display:flex;
align-items: center;
justify-content: center;
margin: 0 auto;
margin-top: 20px;
margin-bottom: 20px;
width: 80px;
height: 80px;
border-radius: 50%;
background-color: var(--select-background-color);
@media (min-width: ${F.tablet}) {
    margin-top: 50px;
    margin-bottom: 52px;
    width: 100px;
    height: 100px;
}
@media (min-width: ${F.desktop}) {
    margin-top: 60px;
    margin-bottom: 183px;
    width: 100px;
    height: 100px;
}
`,x5=N.img`
width: 32px;
height: 32px;
@media (min-width: ${F.tablet}) {
    width: 50px;
    height: 50px;
}
`,S5=()=>x.jsxs(y5,{children:[x.jsx(g5,{children:"Progress"}),x.jsxs(b5,{children:["Here you will see when and how much you read. ",x.jsx("br",{})," To record, click on the red button above."]}),x.jsx(v5,{children:x.jsx(x5,{src:"/src/assets/img/progress-star.png",alt:"star"})})]}),_5=N.div`
  display: flex;
  margin-top: 20px;
  flex: 1;
  flex-direction: column;
  overflow-y: auto;
  // max-height: 400px;
  @media (min-width: ${F.tablet}) {
      margin-top: 0;
  }
  // @media (min-width: ${F.desktop}) {
  //     max-height: 373px;
  // }
`,w5=N.div`
  display: flex;
`,E5=N.p`
display: inline-block;

font-weight: 700;
font-size: 18px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);
@media (min-width: ${F.tablet}) {
    font-size: 20px;
  }
`,T5=N.div`
  display: inline-flex;
  margin-left:auto;
  gap: 8px;
`,Yb=N(ea)`
  width: 16px;
  height:16px;
  @media (min-width: ${F.tablet}) {
    width: 20px;
    height:20px;
  }
`,R5=N.ul`
  display: flex;
  flex-direction: column;
  gap: 22px;
  border-radius: 12px;
  background-color: var(--select-background-color);
  padding: 20px;
  margin-top: 20px;
  overflow-y: auto;
  scrollbar-color: #686868 transparent;
   max-height: 211px;
  @media (min-width: ${F.tablet}) {
      max-height: 252px;
  }
  @media (min-width: ${F.desktop}) {
      max-height: 373px;
  }
`,A5="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAAZCAYAAABtnU33AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAAAZRJREFUeAHtlMtNw0AQhv+ZGIQQh3SAO2A7IBQQiSKQuNIJpXDgAEWAxDUuIC7AERJRdoexjYkjseRt2St/J7+03m9n5icEiHm5jSFfBswxHMVgXIEwxOfshtBhVsTAKiUGRPpM5f5ArLuP0AH8YlbF6gpaP/GvwyRZaypsnkZDnJ7n7Wd0a7EKXer+R/oqxvZkEEqJZaInkMBxSpFMaDF/b7zCK2LCWjWoGKnkbmJasUQICUGmlRisS/Ni/1abLGDLy6MJF2JnF6ZovzI4dhYjrRa0Wrr/lC0lPJDJgiRlJ1n5vvpwKeZjb+H1waFHPdhsLZ8YOZfl1SrmjwGn1yzYiY2FDxUcqM2XiIo5lTyRNycyO6SYjxXhsg2HKjAfLYNjf7F6cNTnqxLL25DRDJF5HT/o36+X85UPQb0H9xcrl1k/X00Q6aYef876X+rzlSei3ieOJSmCo4ViPlSYPiBiqgcbBUeBgB06R8Ri7+AG42MkYhuJSBZTYTyHJuajqXBsDb1w6PTCodMLh04vHDq9cOh8A3lI9dHeVVu6AAAAAElFTkSuQmCC",O5=N.li`
    display: flex;
`,C5=N(ea)`
  width: 16px;
  height: 16px;
  @media (min-width: ${F.tablet}) {
    width: 20px;
    height: 20px;
  }
`,D5=N(ea)`
  width: 14px;
  height: 14px;
//   @media (min-width: ${F.tablet}) {
//     width: 20px;
//     height:20px;
//   }
`,z5=N.div`
    display: inline-block;
    margin-right: 10px;
`,M5=N.div`
    display: inline-block;
    // margin-right: 86px;
`,j5=N.div`
    font-weight: 700;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: 0.02em;
    color: var(--main-text-color);
    margin-bottom: 16px;
@media (min-width: ${F.tablet}) {
    font-size: 16px;
    line-height: 113%;
    margin-bottom: 29px;
  }    
`,k5=N.div`
    font-weight: 500;
    font-size: 14px;
    line-height: 129%;
    letter-spacing: -0.02em;
    color: var(--main-text-color);
    margin-bottom: 4px;
    @media (min-width: ${F.tablet}) {
        font-size: 20px;
        line-height: 100%;
        margin-bottom: 8px;
    }
`,N5=N.div`
    font-weight: 500;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: var(--grey-text-color);
    @media (min-width: ${F.tablet}) {
        font-size: 12px;
        line-height: 117%;
    }
`,U5=N.div`
    display: inline-block;
    wirdth: 43px;
    margin-right: 8px;
    margin-left: auto;
    @media (min-width: ${F.tablet}) {
        wirdth: 59px;
    }
`,B5=N.div`
    font-weight: 500;
    font-size: 12px;
    line-height: 133%;
    letter-spacing: -0.02em;
    color: var(--grey-text-color);
    margin-bottom: 16px;
    @media (min-width: ${F.tablet}) {
        font-size: 14px;
        line-height: 129%;
        margin-bottom: 30px;
    }
`,L5=N.div`
    font-weight: 500;
    font-size: 10px;
    line-height: 120%;
    letter-spacing: -0.02em;
    color: var(--grey-text-color);
    margin-top: 7px;
    @media (min-width: ${F.tablet}) {
        font-size: 12px;
        line-height: 117%;
    }
`,H5=N.button`
    text-align: center;
`,q5=({progress:n,book:i})=>{const r=ln(),o=Ut(Lr),s=new Date(n.startReading),c=new Date(n.finishReading),d=s.toLocaleDateString("uk-UA"),h=c-s,p=Math.round(h/(1e3*60)),y=n.finishPage-n.startPage,g=Math.round(y/o.totalPages*100),b=A=>{r(bx({bookId:i._id,readingId:A}))};return x.jsxs(O5,{children:[x.jsx(z5,{children:x.jsx(C5,{name:"icon-block-diary",color:"var(--main-text-color)"})}),x.jsxs(M5,{children:[x.jsx(j5,{children:d}),x.jsxs(k5,{children:[g,"%"]}),x.jsxs(N5,{children:[p," minutes"]})]}),x.jsxs(U5,{children:[x.jsxs(B5,{children:[y," pages"]}),x.jsx("div",{children:x.jsx("img",{src:A5,alt:"progress"})}),x.jsxs(L5,{children:[n.speed," pages ",x.jsx("br",{})," per hour"]})]}),x.jsx(H5,{onClick:()=>b(n._id),children:x.jsx(D5,{name:"icon-trash-2",color:"var(--main-text-color)"})})]})},$5=()=>{const n=Ut(Lr),i=n?.progress||[];return x.jsxs(_5,{children:[x.jsxs(w5,{children:[x.jsx(E5,{children:"Diary"}),x.jsxs(T5,{children:[x.jsx(Yb,{name:"icon-hourglass",color:"var(--main-text-color)"}),x.jsx(Yb,{name:"icon-pie-chart",color:"var(--icon-diary-color)",secondaryColor:"var(--grey-text-color)"})]})]}),x.jsx(R5,{children:i?.map((r,o)=>x.jsx(q5,{progress:r,book:n},o))})]})},V5=N.div`
display: flex;
gap: 20px;
flex-direction: column;
margin-top: 20px;
flex: 1;
@media (min-width: ${F.tablet}) {
    margin-top: 0;
}
@media (min-width: ${F.desktop}) {
    flex: none;
}
`,Y5=N.div`
display: flex;
`,G5=N.p`
display: inline-block;
font-weight: 700;
font-size: 18px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);
@media (min-width: ${F.tablet}) {
    font-size: 20px;
  }
`,X5=N.ul`
display: inline-flex;
gap: 8px;
margin-left: auto;
`,Gb=N(ea)`
  width: 16px;
  height:16px;
  @media (min-width: ${F.tablet}) {
    width: 20px;
    height:20px;
  }
`,F5=N.p`
display: none;
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
color: var(--grey-text-color);
@media (min-width: ${F.desktop}) {
      display: block;
      width: 293px;
  }
`,Q5=N.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 20px;
border-radius: 12px;
background-color: var(--select-background-color);
padding: 31px 0 20px 0;
`,Z5=N.div`
position: relative;
`,K5=N.div`
display: flex;
flex-direction: row;
gap: 15px;
`,P5=N.div`
border-radius: 4px;
width: 14px;
height: 14px;
background-color: var(--green-color);
`,J5=N.span`
font-weight: 500;
font-size: 14px;
line-height: 0%;
letter-spacing: -0.02em;
color: var(--main-text-color);
@media (min-width: ${F.tablet}) {
    font-size: 20px;
  }
`,I5=N.p`
font-weight: 500;
font-size: 10px;
line-height: 117%;
letter-spacing: -0.02em;
text-align: center;
color: var(--grey-text-color);
margin-top: 8px;
@media (min-width: ${F.tablet}) {
    font-size: 12px;
  }
`,W5=N.span`
position: absolute;
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.02em;
color: var(--main-text-color);
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`,e6=()=>{const n=Ut(Lr),r=(n?.progress||[]).reduce((g,b)=>g+(b.finishPage-b.startPage),0),o=n?.totalPages,s=r/o*100,c=80,d=10,h=c-d*.5,p=h*2*Math.PI,y=p-s/100*p;return x.jsxs(V5,{children:[x.jsxs(Y5,{children:[x.jsx(G5,{children:"Statistics"}),x.jsxs(X5,{children:[x.jsx("li",{children:x.jsx(Gb,{name:"icon-hourglass",color:"var(--grey-text-color)"})}),x.jsx("li",{children:x.jsx(Gb,{name:"icon-pie-chart",color:"var(--pia-chart-color)",secondaryColor:"var(--main-text-color)"})})]})]}),x.jsx(F5,{children:"Each page, each chapter is a new round of knowledge, a new step towards understanding. By rewriting statistics, we create our own reading history."}),x.jsxs(Q5,{children:[x.jsxs(Z5,{children:[x.jsxs("svg",{height:c*2,width:c*2,children:[x.jsx("circle",{stroke:"#2a2a2a",fill:"transparent",strokeWidth:d,r:h,cx:c,cy:c}),x.jsx("circle",{stroke:"#30d158",fill:"transparent",strokeWidth:d,strokeDasharray:p,strokeDashoffset:y,strokeLinecap:"round",r:h,cx:c,cy:c,transform:`rotate(-90 ${c} ${c})`})]}),x.jsx(W5,{children:"100%"})]}),x.jsxs(K5,{children:[x.jsx(P5,{}),x.jsxs("div",{children:[x.jsxs(J5,{children:[s.toFixed(2),"%"]}),x.jsxs(I5,{children:[r," pages read"]})]})]})]})]})},t6=()=>{const n=Ut(_x),i=Ut(Lr);console.log(n);const r=i.progress?.[0];if(n==="idle"||!r||!r.finishPage)return x.jsx(S5,{});if(n==="reading")return x.jsx($5,{});if(n==="finished")return x.jsx(e6,{})},n6=N.div`
// display: block;
flex: 1;
@media (min-width: ${F.desktop}) {
    flex: none;
}`,a6=N.p`
margin-bottom: 8px;
font-family: var(--font-family);
font-weight: 500;
font-size: 10px;
line-height: 120%;
letter-spacing: -0.02em;
color: var(--main-text-color);
@media (min-width: ${F.tablet}) {
    font-size: 14px;
    line-height: 129%;
}
`,i6=N.form`
display: flex;
flex-direction: column;
gap: 20px;
`,r6=N.input`
box-sizing: border-box;
padding: 14px;
background-color: var(--select-background-color);
border-radius: 12px;
border: 1px solid transparent;
color: var(--main-text-color);
font-size: 12px;
line-height: 133%;

&:hover, &:focus-visible {
    outline: none;
    border: 1px solid var(--border-color);
}
 /* 🔥 прибрати стрілочки */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
@media (min-width: ${F.tablet}) {
    padding: 16px 14px;
    font-size: 14px;
    width: 313px;
}
`,l6=N.button`
padding: 10px 20px;
align-self: flex-start;
background-color: var(--container-background-color);
border-radius: 30px;
border: 1px solid var(--border-color);

font-weight: 700;
font-size: 14px;
line-height: 129%;
letter-spacing: 0.02em;
color: var(--main-text-color);

&:hover {
    background-color: var(--main-text-color);
    color: var(--body-background-color);
}
@media (min-width: ${F.tablet}) {
    padding: 12px 28px;
    font-size: 16px;
    line-height: 113%;
}
`,o6=N.div`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
`,s6=N.img`
margin-bottom: 32px;`,u6=N.p`
margin-bottom: 14px;
font-family: var(--font-family);
font-weight: 700;
font-size: 20px;
line-height: 100%;
letter-spacing: -0.02em;
text-align: center;
color: var(--main-text-color);`,c6=N.p`
font-family: var(--font-family);
font-weight: 500;
font-size: 14px;
line-height: 129%;
letter-spacing: -0.02em;
text-align: center;
color: var(--grey-text-color);`,f6=N.span`
color: var(--main-text-color);`,d6=()=>x.jsxs(o6,{children:[x.jsx(s6,{src:"/src/assets/img/books70.png",alt:"books70"}),x.jsx(u6,{children:"The book is read"}),x.jsxs(c6,{children:["It was an ",x.jsx(f6,{children:"exciting journey"}),", where each ",x.jsx("br",{})," page revealed new horizons, and the ",x.jsx("br",{})," characters became inseparable ",x.jsx("br",{})," friends."]})]}),h6=()=>{const{register:n,handleSubmit:i,setValue:r}=po(),{openModal:o}=ip(),s=Ut(Lr);console.log(s);const c=s.progress?.at(-1)?.status,d=s.progress?.at(-1)?.finishPage;console.log(d);const h=c==="active",p=ln(),y=b=>{p(h?gx({id:s._id,page:b.page}):yx({id:s._id,page:b.page})),r("page","")},g=()=>{if(d===s.totalPages)o(x.jsx(d6,{}));else return};return x.jsxs(n6,{children:[x.jsx(a6,{children:h?"Stop page:":"Start page:"}),x.jsxs(i6,{action:"",onSubmit:i(y),children:[x.jsx(r6,{type:"number",placeholder:"Page number:",...n("page",{valueAsNumber:!0})}),x.jsx(l6,{type:"submit",onClick:g(),children:h?"To stop":"To start"})]})]})},p6=N.div`
display: flex;
flex-direction: column;
gap: 10px;
padding-top: 10px;
@media (min-width: ${F.tablet}) {
    gap: 16px;
    padding-top: 16px;
}
@media (min-width: ${F.desktop}) {
    flex-direction: row;
}
`,m6=()=>{const{id:n}=N2(),i=ln();return k.useEffect(()=>{i(mx(n))},[n,i]),x.jsxs(p6,{children:[x.jsxs(ap,{children:[x.jsx(h6,{}),x.jsx(t6,{})]}),x.jsx(m5,{})]})},Hd=({children:n})=>Ut(P1)?x.jsx(gv,{to:"/recommended"}):n,qd=({children:n})=>Ut(P1)?n:x.jsx(gv,{to:"/login"});function y6(){const n=Ut(IA),i=ln();return k.useEffect(()=>{i(Ps())},[i]),n?x.jsx(I1,{}):x.jsxs(qE,{children:[x.jsxs(P2,{children:[x.jsxs(Sa,{element:x.jsx(VE,{}),children:[x.jsx(Sa,{path:"/",element:x.jsx(Hd,{children:x.jsx(Nb,{})})}),x.jsx(Sa,{path:"/register",element:x.jsx(Hd,{children:x.jsx(iO,{})})}),x.jsx(Sa,{path:"/login",element:x.jsx(Hd,{children:x.jsx(Nb,{})})})]}),x.jsxs(Sa,{element:x.jsx(_4,{}),children:[x.jsx(Sa,{path:"/recommended",element:x.jsx(qd,{children:x.jsx(bC,{})})}),x.jsx(Sa,{path:"/library",element:x.jsx(qd,{children:x.jsx(o5,{})})}),x.jsx(Sa,{path:"/reading/:id",element:x.jsx(qd,{children:x.jsx(m6,{})})})]})]}),x.jsx(PA,{})]})}var sp="persist:",up="persist/FLUSH",Fu="persist/REHYDRATE",cp="persist/PAUSE",fp="persist/PERSIST",dp="persist/PURGE",hp="persist/REGISTER",g6=-1;function Is(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Is=function(r){return typeof r}:Is=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Is(n)}function Xb(n,i){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);i&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),r.push.apply(r,o)}return r}function b6(n){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?Xb(r,!0).forEach(function(o){v6(n,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Xb(r).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(r,o))})}return n}function v6(n,i,r){return i in n?Object.defineProperty(n,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[i]=r,n}function x6(n,i,r,o){o.debug;var s=b6({},r);return n&&Is(n)==="object"&&Object.keys(n).forEach(function(c){c!=="_persist"&&i[c]===r[c]&&(s[c]=n[c])}),s}function S6(n){var i=n.blacklist||null,r=n.whitelist||null,o=n.transforms||[],s=n.throttle||0,c="".concat(n.keyPrefix!==void 0?n.keyPrefix:sp).concat(n.key),d=n.storage,h;n.serialize===!1?h=function(Y){return Y}:typeof n.serialize=="function"?h=n.serialize:h=_6;var p=n.writeFailHandler||null,y={},g={},b=[],A=null,M=null,z=function(Y){Object.keys(Y).forEach(function(P){T(P)&&y[P]!==Y[P]&&b.indexOf(P)===-1&&b.push(P)}),Object.keys(y).forEach(function(P){Y[P]===void 0&&T(P)&&b.indexOf(P)===-1&&y[P]!==void 0&&b.push(P)}),A===null&&(A=setInterval(C,s)),y=Y};function C(){if(b.length===0){A&&clearInterval(A),A=null;return}var L=b.shift(),Y=o.reduce(function(P,q){return q.in(P,L,y)},y[L]);if(Y!==void 0)try{g[L]=h(Y)}catch(P){console.error("redux-persist/createPersistoid: error serializing state",P)}else delete g[L];b.length===0&&S()}function S(){Object.keys(g).forEach(function(L){y[L]===void 0&&delete g[L]}),M=d.setItem(c,h(g)).catch(_)}function T(L){return!(r&&r.indexOf(L)===-1&&L!=="_persist"||i&&i.indexOf(L)!==-1)}function _(L){p&&p(L)}var O=function(){for(;b.length!==0;)C();return M||Promise.resolve()};return{update:z,flush:O}}function _6(n){return JSON.stringify(n)}function w6(n){var i=n.transforms||[],r="".concat(n.keyPrefix!==void 0?n.keyPrefix:sp).concat(n.key),o=n.storage;n.debug;var s;return n.deserialize===!1?s=function(d){return d}:typeof n.deserialize=="function"?s=n.deserialize:s=E6,o.getItem(r).then(function(c){if(c)try{var d={},h=s(c);return Object.keys(h).forEach(function(p){d[p]=i.reduceRight(function(y,g){return g.out(y,p,h)},s(h[p]))}),d}catch(p){throw p}else return})}function E6(n){return JSON.parse(n)}function T6(n){var i=n.storage,r="".concat(n.keyPrefix!==void 0?n.keyPrefix:sp).concat(n.key);return i.removeItem(r,R6)}function R6(n){}function Fb(n,i){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);i&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),r.push.apply(r,o)}return r}function xa(n){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?Fb(r,!0).forEach(function(o){A6(n,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Fb(r).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(r,o))})}return n}function A6(n,i,r){return i in n?Object.defineProperty(n,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[i]=r,n}function O6(n,i){if(n==null)return{};var r=C6(n,i),o,s;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(n);for(s=0;s<c.length;s++)o=c[s],!(i.indexOf(o)>=0)&&Object.prototype.propertyIsEnumerable.call(n,o)&&(r[o]=n[o])}return r}function C6(n,i){if(n==null)return{};var r={},o=Object.keys(n),s,c;for(c=0;c<o.length;c++)s=o[c],!(i.indexOf(s)>=0)&&(r[s]=n[s]);return r}var D6=5e3;function z6(n,i){var r=n.version!==void 0?n.version:g6;n.debug;var o=n.stateReconciler===void 0?x6:n.stateReconciler,s=n.getStoredState||w6,c=n.timeout!==void 0?n.timeout:D6,d=null,h=!1,p=!0,y=function(b){return b._persist.rehydrated&&d&&!p&&d.update(b),b};return function(g,b){var A=g||{},M=A._persist,z=O6(A,["_persist"]),C=z;if(b.type===fp){var S=!1,T=function(W,ge){S||(b.rehydrate(n.key,W,ge),S=!0)};if(c&&setTimeout(function(){!S&&T(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(n.key,'"')))},c),p=!1,d||(d=S6(n)),M)return xa({},i(C,b),{_persist:M});if(typeof b.rehydrate!="function"||typeof b.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return b.register(n.key),s(n).then(function(q){var W=n.migrate||function(ge,Te){return Promise.resolve(ge)};W(q,r).then(function(ge){T(ge)},function(ge){T(void 0,ge)})},function(q){T(void 0,q)}),xa({},i(C,b),{_persist:{version:r,rehydrated:!1}})}else{if(b.type===dp)return h=!0,b.result(T6(n)),xa({},i(C,b),{_persist:M});if(b.type===up)return b.result(d&&d.flush()),xa({},i(C,b),{_persist:M});if(b.type===cp)p=!0;else if(b.type===Fu){if(h)return xa({},C,{_persist:xa({},M,{rehydrated:!0})});if(b.key===n.key){var _=i(C,b),O=b.payload,L=o!==!1&&O!==void 0?o(O,g,_,n):_,Y=xa({},L,{_persist:xa({},M,{rehydrated:!0})});return y(Y)}}}if(!M)return i(g,b);var P=i(C,b);return P===C?g:y(xa({},P,{_persist:M}))}}function Qb(n){return k6(n)||j6(n)||M6()}function M6(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function j6(n){if(Symbol.iterator in Object(n)||Object.prototype.toString.call(n)==="[object Arguments]")return Array.from(n)}function k6(n){if(Array.isArray(n)){for(var i=0,r=new Array(n.length);i<n.length;i++)r[i]=n[i];return r}}function Zb(n,i){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);i&&(o=o.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),r.push.apply(r,o)}return r}function bh(n){for(var i=1;i<arguments.length;i++){var r=arguments[i]!=null?arguments[i]:{};i%2?Zb(r,!0).forEach(function(o){N6(n,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):Zb(r).forEach(function(o){Object.defineProperty(n,o,Object.getOwnPropertyDescriptor(r,o))})}return n}function N6(n,i,r){return i in n?Object.defineProperty(n,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[i]=r,n}var Ex={registry:[],bootstrapped:!1},U6=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Ex,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case hp:return bh({},i,{registry:[].concat(Qb(i.registry),[r.key])});case Fu:var o=i.registry.indexOf(r.key),s=Qb(i.registry);return s.splice(o,1),bh({},i,{registry:s,bootstrapped:s.length===0});default:return i}};function B6(n,i,r){var o=$h(U6,Ex,void 0),s=function(p){o.dispatch({type:hp,key:p})},c=function(p,y,g){var b={type:Fu,payload:y,err:g,key:p};n.dispatch(b),o.dispatch(b)},d=bh({},o,{purge:function(){var p=[];return n.dispatch({type:dp,result:function(g){p.push(g)}}),Promise.all(p)},flush:function(){var p=[];return n.dispatch({type:up,result:function(g){p.push(g)}}),Promise.all(p)},pause:function(){n.dispatch({type:cp})},persist:function(){n.dispatch({type:fp,register:s,rehydrate:c})}});return d.persist(),d}var Bl={},Us={},Bs={},Kb;function L6(){if(Kb)return Bs;Kb=1,Bs.__esModule=!0,Bs.default=s;function n(c){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?n=function(h){return typeof h}:n=function(h){return h&&typeof Symbol=="function"&&h.constructor===Symbol&&h!==Symbol.prototype?"symbol":typeof h},n(c)}function i(){}var r={getItem:i,setItem:i,removeItem:i};function o(c){if((typeof self>"u"?"undefined":n(self))!=="object"||!(c in self))return!1;try{var d=self[c],h="redux-persist ".concat(c," test");d.setItem(h,"test"),d.getItem(h),d.removeItem(h)}catch{return!1}return!0}function s(c){var d="".concat(c,"Storage");return o(d)?self[d]:r}return Bs}var Pb;function H6(){if(Pb)return Us;Pb=1,Us.__esModule=!0,Us.default=r;var n=i(L6());function i(o){return o&&o.__esModule?o:{default:o}}function r(o){var s=(0,n.default)(o);return{getItem:function(d){return new Promise(function(h,p){h(s.getItem(d))})},setItem:function(d,h){return new Promise(function(p,y){p(s.setItem(d,h))})},removeItem:function(d){return new Promise(function(h,p){h(s.removeItem(d))})}}}return Us}var Jb;function q6(){if(Jb)return Bl;Jb=1,Bl.__esModule=!0,Bl.default=void 0;var n=i(H6());function i(o){return o&&o.__esModule?o:{default:o}}var r=(0,n.default)("local");return Bl.default=r,Bl}var $6=q6();const V6=Sh($6),Y6={key:"auth",storage:V6,whitelist:["token"]},G6=z6(Y6,JA),Tx=PT({reducer:{auth:G6,books:VO,searchFilter:KO},middleware:n=>n({serializableCheck:{ignoredActions:[up,Fu,cp,fp,dp,hp]}})});let X6=B6(Tx);function Ws(n){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Ws=function(r){return typeof r}:Ws=function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},Ws(n)}function F6(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}function Q6(n,i){for(var r=0;r<i.length;r++){var o=i[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function Z6(n,i,r){return i&&Q6(n.prototype,i),n}function K6(n,i){return i&&(Ws(i)==="object"||typeof i=="function")?i:eu(n)}function vh(n){return vh=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},vh(n)}function eu(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function P6(n,i){if(typeof i!="function"&&i!==null)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(i&&i.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),i&&xh(n,i)}function xh(n,i){return xh=Object.setPrototypeOf||function(o,s){return o.__proto__=s,o},xh(n,i)}function tu(n,i,r){return i in n?Object.defineProperty(n,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[i]=r,n}var Rx=(function(n){P6(i,n);function i(){var r,o;F6(this,i);for(var s=arguments.length,c=new Array(s),d=0;d<s;d++)c[d]=arguments[d];return o=K6(this,(r=vh(i)).call.apply(r,[this].concat(c))),tu(eu(o),"state",{bootstrapped:!1}),tu(eu(o),"_unsubscribe",void 0),tu(eu(o),"handlePersistorState",function(){var h=o.props.persistor,p=h.getState(),y=p.bootstrapped;y&&(o.props.onBeforeLift?Promise.resolve(o.props.onBeforeLift()).finally(function(){return o.setState({bootstrapped:!0})}):o.setState({bootstrapped:!0}),o._unsubscribe&&o._unsubscribe())}),o}return Z6(i,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),i})(k.PureComponent);tu(Rx,"defaultProps",{children:null,loading:null});const J6=Z_.createRoot(document.getElementById("root"));J6.render(x.jsx(Ae.StrictMode,{children:x.jsx(pT,{store:Tx,children:x.jsx(Sw,{basename:"/read-journey-vite",children:x.jsx(zO,{children:x.jsx(Rx,{loading:null,persistor:X6,children:x.jsx(y6,{})})})})})}));
