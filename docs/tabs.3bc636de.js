var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},r=t.parcelRequire2f3a;null==r&&((r=function(t){if(t in e)return e[t].exports;if(t in n){var r=n[t];delete n[t];var o={id:t,exports:{}};return e[t]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){n[t]=e},t.parcelRequire2f3a=r);var o,i=r("gYflK"),a=r("aWLzl"),l=r("e09o0"),c=(a=r("aWLzl"),l=r("e09o0"),r("37dru")),s=r("hGjVk"),u=(a=r("aWLzl"),r("aSiHW")),d={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},f={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"},p=(a=r("aWLzl"),function(t){this.adapter=t}),h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a.__extends(e,t),e.prototype.getScrollPositionRTL=function(){var t=this.adapter.getScrollAreaScrollLeft(),e=this.calculateScrollEdges().right;return Math.round(e-t)},e.prototype.scrollToRTL=function(t){var e=this.calculateScrollEdges(),n=this.adapter.getScrollAreaScrollLeft(),r=this.clampScrollValue(e.right-t);return{finalScrollPosition:r,scrollDelta:r-n}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(e-t);return{finalScrollPosition:n,scrollDelta:n-e}},e.prototype.getAnimatingScrollPosition=function(t){return t},e.prototype.calculateScrollEdges=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},e.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.min(Math.max(e.left,t),e.right)},e}(p),S=(a=r("aWLzl"),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a.__extends(e,t),e.prototype.getScrollPositionRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();return Math.round(t-e)},e.prototype.scrollToRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(-t);return{finalScrollPosition:n,scrollDelta:n-e}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(e-t);return{finalScrollPosition:n,scrollDelta:n-e}},e.prototype.getAnimatingScrollPosition=function(t,e){return t-e},e.prototype.calculateScrollEdges=function(){var t=this.adapter.getScrollContentOffsetWidth();return{left:this.adapter.getScrollAreaOffsetWidth()-t,right:0}},e.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.max(Math.min(e.right,t),e.left)},e}(p)),g=(a=r("aWLzl"),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a.__extends(e,t),e.prototype.getScrollPositionRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft();return Math.round(e-t)},e.prototype.scrollToRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(t);return{finalScrollPosition:n,scrollDelta:e-n}},e.prototype.incrementScrollRTL=function(t){var e=this.adapter.getScrollAreaScrollLeft(),n=this.clampScrollValue(e+t);return{finalScrollPosition:n,scrollDelta:e-n}},e.prototype.getAnimatingScrollPosition=function(t,e){return t+e},e.prototype.calculateScrollEdges=function(){return{left:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth(),right:0}},e.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.min(Math.max(e.right,t),e.left)},e}(p)),T=function(t){function e(n){var r=t.call(this,a.__assign(a.__assign({},e.defaultAdapter),n))||this;return r.isAnimating=!1,r}return a.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return d},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return f},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),e.prototype.init=function(){var t=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-t+"px"),this.adapter.addScrollAreaClass(e.cssClasses.SCROLL_AREA_SCROLL)},e.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var t=this.calculateCurrentTranslateX();return this.adapter.getScrollAreaScrollLeft()-t},e.prototype.handleInteraction=function(){this.isAnimating&&this.stopScrollAnimation()},e.prototype.handleTransitionEnd=function(t){var n=t.target;this.isAnimating&&this.adapter.eventTargetMatchesSelector(n,e.strings.CONTENT_SELECTOR)&&(this.isAnimating=!1,this.adapter.removeClass(e.cssClasses.ANIMATING))},e.prototype.incrementScroll=function(t){0!==t&&this.animate(this.getIncrementScrollOperation(t))},e.prototype.incrementScrollImmediate=function(t){if(0!==t){var e=this.getIncrementScrollOperation(t);0!==e.scrollDelta&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition))}},e.prototype.scrollTo=function(t){this.isRTL()?this.scrollToImplRTL(t):this.scrollToImpl(t)},e.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},e.prototype.calculateCurrentTranslateX=function(){var t=this.adapter.getScrollContentStyleValue("transform");if("none"===t)return 0;var e=/\((.+?)\)/.exec(t);if(!e)return 0;var n=e[1],r=a.__read(n.split(","),6),o=(r[0],r[1],r[2],r[3],r[4]);r[5];return parseFloat(o)},e.prototype.clampScrollValue=function(t){var e=this.calculateScrollEdges();return Math.min(Math.max(e.left,t),e.right)},e.prototype.computeCurrentScrollPositionRTL=function(){var t=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(t)},e.prototype.calculateScrollEdges=function(){return{left:0,right:this.adapter.getScrollContentOffsetWidth()-this.adapter.getScrollAreaOffsetWidth()}},e.prototype.scrollToImpl=function(t){var e=this.getScrollPosition(),n=this.clampScrollValue(t),r=n-e;this.animate({finalScrollPosition:n,scrollDelta:r})},e.prototype.scrollToImplRTL=function(t){var e=this.getRTLScroller().scrollToRTL(t);this.animate(e)},e.prototype.getIncrementScrollOperation=function(t){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(t);var e=this.getScrollPosition(),n=t+e,r=this.clampScrollValue(n);return{finalScrollPosition:r,scrollDelta:r-e}},e.prototype.animate=function(t){var n=this;0!==t.scrollDelta&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(t.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+t.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame((function(){n.adapter.addClass(e.cssClasses.ANIMATING),n.adapter.setScrollContentStyleProperty("transform","none")})),this.isAnimating=!0)},e.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var t=this.getAnimatingScrollPosition();this.adapter.removeClass(e.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(t)},e.prototype.getAnimatingScrollPosition=function(){var t=this.calculateCurrentTranslateX(),e=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(e,t):e-t},e.prototype.rtlScrollerFactory=function(){var t=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(t-1);var e=this.adapter.getScrollAreaScrollLeft();if(e<0)return this.adapter.setScrollAreaScrollLeft(t),new S(this.adapter);var n=this.adapter.computeScrollAreaClientRect(),r=this.adapter.computeScrollContentClientRect(),o=Math.round(r.right-n.right);return this.adapter.setScrollAreaScrollLeft(t),o===e?new g(this.adapter):new h(this.adapter)},e.prototype.isRTL=function(){return"rtl"===this.adapter.getScrollContentStyleValue("direction")},e}(u.MDCFoundation);var y=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.area=this.root.querySelector(T.strings.AREA_SELECTOR),this.content=this.root.querySelector(T.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleInteraction=function(){t.foundation.handleInteraction()},this.handleTransitionEnd=function(e){t.foundation.handleTransitionEnd(e)},this.area.addEventListener("wheel",this.handleInteraction,c.applyPassive()),this.area.addEventListener("touchstart",this.handleInteraction,c.applyPassive()),this.area.addEventListener("pointerdown",this.handleInteraction,c.applyPassive()),this.area.addEventListener("mousedown",this.handleInteraction,c.applyPassive()),this.area.addEventListener("keydown",this.handleInteraction,c.applyPassive()),this.content.addEventListener("transitionend",this.handleTransitionEnd)},e.prototype.destroy=function(){t.prototype.destroy.call(this),this.area.removeEventListener("wheel",this.handleInteraction,c.applyPassive()),this.area.removeEventListener("touchstart",this.handleInteraction,c.applyPassive()),this.area.removeEventListener("pointerdown",this.handleInteraction,c.applyPassive()),this.area.removeEventListener("mousedown",this.handleInteraction,c.applyPassive()),this.area.removeEventListener("keydown",this.handleInteraction,c.applyPassive()),this.content.removeEventListener("transitionend",this.handleTransitionEnd)},e.prototype.getDefaultFoundation=function(){var t=this;return new T({eventTargetMatchesSelector:function(t,e){return s.matches(t,e)},addClass:function(e){t.root.classList.add(e)},removeClass:function(e){t.root.classList.remove(e)},addScrollAreaClass:function(e){t.area.classList.add(e)},setScrollAreaStyleProperty:function(e,n){t.area.style.setProperty(e,n)},setScrollContentStyleProperty:function(e,n){t.content.style.setProperty(e,n)},getScrollContentStyleValue:function(e){return window.getComputedStyle(t.content).getPropertyValue(e)},setScrollAreaScrollLeft:function(e){return t.area.scrollLeft=e},getScrollAreaScrollLeft:function(){return t.area.scrollLeft},getScrollContentOffsetWidth:function(){return t.content.offsetWidth},getScrollAreaOffsetWidth:function(){return t.area.offsetWidth},computeScrollAreaClientRect:function(){return t.area.getBoundingClientRect()},computeScrollContentClientRect:function(){return t.content.getBoundingClientRect()},computeHorizontalScrollbarHeight:function(){return function(t,e){if(void 0===e&&(e=!0),e&&void 0!==o)return o;var n=t.createElement("div");n.classList.add(d.SCROLL_TEST),t.body.appendChild(n);var r=n.offsetHeight-n.clientHeight;return t.body.removeChild(n),e&&(o=r),r}(document)}})},e.prototype.getScrollPosition=function(){return this.foundation.getScrollPosition()},e.prototype.getScrollContentWidth=function(){return this.content.offsetWidth},e.prototype.incrementScroll=function(t){this.foundation.incrementScroll(t)},e.prototype.scrollTo=function(t){this.foundation.scrollTo(t)},e}(l.MDCComponent),m=(a=r("aWLzl"),l=r("e09o0"),r("gd0lf")),A=r("ho57J"),C=(a=r("aWLzl"),l=r("e09o0"),a=r("aWLzl"),a=r("aWLzl"),u=r("aSiHW"),{ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"}),E={CONTENT_SELECTOR:".mdc-tab-indicator__content"},v=function(t){function e(n){return t.call(this,a.__assign(a.__assign({},e.defaultAdapter),n))||this}return a.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return C},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return E},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),e.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},e}(u.MDCFoundation),L=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a.__extends(e,t),e.prototype.activate=function(){this.adapter.addClass(v.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(v.cssClasses.ACTIVE)},e}(v),b=(a=r("aWLzl"),function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a.__extends(e,t),e.prototype.activate=function(t){if(t){var e=this.computeContentClientRect(),n=t.width/e.width,r=t.left-e.left;this.adapter.addClass(v.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+r+"px) scaleX("+n+")"),this.computeContentClientRect(),this.adapter.removeClass(v.cssClasses.NO_TRANSITION),this.adapter.addClass(v.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")}else this.adapter.addClass(v.cssClasses.ACTIVE)},e.prototype.deactivate=function(){this.adapter.removeClass(v.cssClasses.ACTIVE)},e}(v)),R=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(){this.content=this.root.querySelector(v.strings.CONTENT_SELECTOR)},e.prototype.computeContentClientRect=function(){return this.foundation.computeContentClientRect()},e.prototype.getDefaultFoundation=function(){var t=this,e={addClass:function(e){return t.root.classList.add(e)},removeClass:function(e){return t.root.classList.remove(e)},computeContentClientRect:function(){return t.content.getBoundingClientRect()},setContentStyleProperty:function(e,n){t.content.style.setProperty(e,n)}};return this.root.classList.contains(v.cssClasses.FADE)?new L(e):new b(e)},e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e}(l.MDCComponent),_=(a=r("aWLzl"),u=r("aSiHW"),{ACTIVE:"mdc-tab--active"}),I={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"},O=function(t){function e(n){var r=t.call(this,a.__assign(a.__assign({},e.defaultAdapter),n))||this;return r.focusOnActivate=!0,r}return a.__extends(e,t),Object.defineProperty(e,"cssClasses",{get:function(){return _},enumerable:!1,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return I},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),e.prototype.handleClick=function(){this.adapter.notifyInteracted()},e.prototype.isActive=function(){return this.adapter.hasClass(_.ACTIVE)},e.prototype.setFocusOnActivate=function(t){this.focusOnActivate=t},e.prototype.activate=function(t){this.adapter.addClass(_.ACTIVE),this.adapter.setAttr(I.ARIA_SELECTED,"true"),this.adapter.setAttr(I.TABINDEX,"0"),this.adapter.activateIndicator(t),this.focusOnActivate&&this.adapter.focus()},e.prototype.deactivate=function(){this.isActive()&&(this.adapter.removeClass(_.ACTIVE),this.adapter.setAttr(I.ARIA_SELECTED,"false"),this.adapter.setAttr(I.TABINDEX,"-1"),this.adapter.deactivateIndicator())},e.prototype.computeDimensions=function(){var t=this.adapter.getOffsetWidth(),e=this.adapter.getOffsetLeft(),n=this.adapter.getContentOffsetWidth(),r=this.adapter.getContentOffsetLeft();return{contentLeft:e+r,contentRight:e+r+n,rootLeft:e,rootRight:e+t}},e}(u.MDCFoundation),D=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a.__extends(e,t),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,e){void 0===t&&(t=function(t,e){return new m.MDCRipple(t,e)}),void 0===e&&(e=function(t){return new R(t)}),this.id=this.root.id;var n=new A.MDCRippleFoundation(m.MDCRipple.createAdapter(this));this.ripple=t(this.root,n);var r=this.root.querySelector(O.strings.TAB_INDICATOR_SELECTOR);this.tabIndicator=e(r),this.content=this.root.querySelector(O.strings.CONTENT_SELECTOR)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleClick=function(){t.foundation.handleClick()},this.listen("click",this.handleClick)},e.prototype.destroy=function(){this.unlisten("click",this.handleClick),this.ripple.destroy(),t.prototype.destroy.call(this)},e.prototype.getDefaultFoundation=function(){var t=this;return new O({setAttr:function(e,n){return t.root.setAttribute(e,n)},addClass:function(e){return t.root.classList.add(e)},removeClass:function(e){return t.root.classList.remove(e)},hasClass:function(e){return t.root.classList.contains(e)},activateIndicator:function(e){t.tabIndicator.activate(e)},deactivateIndicator:function(){t.tabIndicator.deactivate()},notifyInteracted:function(){return t.emit(O.strings.INTERACTED_EVENT,{tabId:t.id},!0)},getOffsetLeft:function(){return t.root.offsetLeft},getOffsetWidth:function(){return t.root.offsetWidth},getContentOffsetLeft:function(){return t.content.offsetLeft},getContentOffsetWidth:function(){return t.content.offsetWidth},focus:function(){return t.root.focus()}})},Object.defineProperty(e.prototype,"active",{get:function(){return this.foundation.isActive()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){this.foundation.setFocusOnActivate(t)},enumerable:!1,configurable:!0}),e.prototype.activate=function(t){this.foundation.activate(t)},e.prototype.deactivate=function(){this.foundation.deactivate()},e.prototype.computeIndicatorClientRect=function(){return this.tabIndicator.computeContentClientRect()},e.prototype.computeDimensions=function(){return this.foundation.computeDimensions()},e.prototype.focus=function(){this.root.focus()},e}(l.MDCComponent),P=(a=r("aWLzl"),u=r("aSiHW"),{ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"}),x={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32},w=new Set;w.add(P.ARROW_LEFT_KEY),w.add(P.ARROW_RIGHT_KEY),w.add(P.END_KEY),w.add(P.HOME_KEY),w.add(P.ENTER_KEY),w.add(P.SPACE_KEY);var W=new Map;W.set(x.ARROW_LEFT_KEYCODE,P.ARROW_LEFT_KEY),W.set(x.ARROW_RIGHT_KEYCODE,P.ARROW_RIGHT_KEY),W.set(x.END_KEYCODE,P.END_KEY),W.set(x.HOME_KEYCODE,P.HOME_KEY),W.set(x.ENTER_KEYCODE,P.ENTER_KEY),W.set(x.SPACE_KEYCODE,P.SPACE_KEY);var N=function(t){function e(n){var r=t.call(this,a.__assign(a.__assign({},e.defaultAdapter),n))||this;return r.useAutomaticActivation=!1,r}return a.__extends(e,t),Object.defineProperty(e,"strings",{get:function(){return P},enumerable:!1,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return x},enumerable:!1,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),e.prototype.setUseAutomaticActivation=function(t){this.useAutomaticActivation=t},e.prototype.activateTab=function(t){var e,n=this.adapter.getPreviousActiveTabIndex();this.indexIsInRange(t)&&t!==n&&(-1!==n&&(this.adapter.deactivateTabAtIndex(n),e=this.adapter.getTabIndicatorClientRectAtIndex(n)),this.adapter.activateTabAtIndex(t,e),this.scrollIntoView(t),this.adapter.notifyTabActivated(t))},e.prototype.handleKeyDown=function(t){var e=this.getKeyFromEvent(t);if(void 0!==e)if(this.isActivationKey(e)||t.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(e))return;var n=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),e);this.adapter.setActiveTab(n),this.scrollIntoView(n)}else{var r=this.adapter.getFocusedTabIndex();if(this.isActivationKey(e))this.adapter.setActiveTab(r);else{n=this.determineTargetFromKey(r,e);this.adapter.focusTabAtIndex(n),this.scrollIntoView(n)}}},e.prototype.handleTabInteraction=function(t){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(t.detail.tabId))},e.prototype.scrollIntoView=function(t){this.indexIsInRange(t)&&(0!==t?t!==this.adapter.getTabListLength()-1?this.isRTL()?this.scrollIntoViewImplRTL(t):this.scrollIntoViewImpl(t):this.adapter.scrollTo(this.adapter.getScrollContentWidth()):this.adapter.scrollTo(0))},e.prototype.determineTargetFromKey=function(t,e){var n=this.isRTL(),r=this.adapter.getTabListLength()-1,o=t;return e===P.END_KEY?o=r:e===P.ARROW_LEFT_KEY&&!n||e===P.ARROW_RIGHT_KEY&&n?o-=1:e===P.ARROW_RIGHT_KEY&&!n||e===P.ARROW_LEFT_KEY&&n?o+=1:o=0,o<0?o=r:o>r&&(o=0),o},e.prototype.calculateScrollIncrement=function(t,e,n,r){var o=this.adapter.getTabDimensionsAtIndex(e),i=o.contentLeft-n-r,a=o.contentRight-n-x.EXTRA_SCROLL_AMOUNT,l=i+x.EXTRA_SCROLL_AMOUNT;return e<t?Math.min(a,0):Math.max(l,0)},e.prototype.calculateScrollIncrementRTL=function(t,e,n,r,o){var i=this.adapter.getTabDimensionsAtIndex(e),a=o-i.contentLeft-n,l=o-i.contentRight-n-r+x.EXTRA_SCROLL_AMOUNT,c=a-x.EXTRA_SCROLL_AMOUNT;return e>t?Math.max(l,0):Math.min(c,0)},e.prototype.findAdjacentTabIndexClosestToEdge=function(t,e,n,r){var o=e.rootLeft-n,i=e.rootRight-n-r,a=o+i;return o<0||a<0?t-1:i>0||a>0?t+1:-1},e.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(t,e,n,r,o){var i=o-e.rootLeft-r-n,a=o-e.rootRight-n,l=i+a;return i>0||l>0?t+1:a<0||l<0?t-1:-1},e.prototype.getKeyFromEvent=function(t){return w.has(t.key)?t.key:W.get(t.keyCode)},e.prototype.isActivationKey=function(t){return t===P.SPACE_KEY||t===P.ENTER_KEY},e.prototype.indexIsInRange=function(t){return t>=0&&t<this.adapter.getTabListLength()},e.prototype.isRTL=function(){return this.adapter.isRTL()},e.prototype.scrollIntoViewImpl=function(t){var e=this.adapter.getScrollPosition(),n=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),o=this.findAdjacentTabIndexClosestToEdge(t,r,e,n);if(this.indexIsInRange(o)){var i=this.calculateScrollIncrement(t,o,e,n);this.adapter.incrementScroll(i)}},e.prototype.scrollIntoViewImplRTL=function(t){var e=this.adapter.getScrollPosition(),n=this.adapter.getOffsetWidth(),r=this.adapter.getTabDimensionsAtIndex(t),o=this.adapter.getScrollContentWidth(),i=this.findAdjacentTabIndexClosestToEdgeRTL(t,r,e,n,o);if(this.indexIsInRange(i)){var a=this.calculateScrollIncrementRTL(t,i,e,n,o);this.adapter.incrementScroll(a)}},e}(u.MDCFoundation),M=N.strings,K=0,V=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return a.__extends(e,t),e.attachTo=function(t){return new e(t)},Object.defineProperty(e.prototype,"focusOnActivate",{set:function(t){var e,n;try{for(var r=a.__values(this.tabList),o=r.next();!o.done;o=r.next()){o.value.focusOnActivate=t}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"useAutomaticActivation",{set:function(t){this.foundation.setUseAutomaticActivation(t)},enumerable:!1,configurable:!0}),e.prototype.initialize=function(t,e){void 0===t&&(t=function(t){return new D(t)}),void 0===e&&(e=function(t){return new y(t)}),this.tabList=this.instantiateTabs(t),this.tabScroller=this.instantiatetabScroller(e)},e.prototype.initialSyncWithDOM=function(){var t=this;this.handleTabInteraction=function(e){t.foundation.handleTabInteraction(e)},this.handleKeyDown=function(e){t.foundation.handleKeyDown(e)},this.listen(O.strings.INTERACTED_EVENT,this.handleTabInteraction),this.listen("keydown",this.handleKeyDown);for(var e=0;e<this.tabList.length;e++)if(this.tabList[e].active){this.scrollIntoView(e);break}},e.prototype.destroy=function(){var e,n;t.prototype.destroy.call(this),this.unlisten(O.strings.INTERACTED_EVENT,this.handleTabInteraction),this.unlisten("keydown",this.handleKeyDown);try{for(var r=a.__values(this.tabList),o=r.next();!o.done;o=r.next()){o.value.destroy()}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(e)throw e.error}}this.tabScroller&&this.tabScroller.destroy()},e.prototype.getDefaultFoundation=function(){var t=this;return new N({scrollTo:function(e){t.tabScroller.scrollTo(e)},incrementScroll:function(e){t.tabScroller.incrementScroll(e)},getScrollPosition:function(){return t.tabScroller.getScrollPosition()},getScrollContentWidth:function(){return t.tabScroller.getScrollContentWidth()},getOffsetWidth:function(){return t.root.offsetWidth},isRTL:function(){return"rtl"===window.getComputedStyle(t.root).getPropertyValue("direction")},setActiveTab:function(e){t.foundation.activateTab(e)},activateTabAtIndex:function(e,n){t.tabList[e].activate(n)},deactivateTabAtIndex:function(e){t.tabList[e].deactivate()},focusTabAtIndex:function(e){t.tabList[e].focus()},getTabIndicatorClientRectAtIndex:function(e){return t.tabList[e].computeIndicatorClientRect()},getTabDimensionsAtIndex:function(e){return t.tabList[e].computeDimensions()},getPreviousActiveTabIndex:function(){for(var e=0;e<t.tabList.length;e++)if(t.tabList[e].active)return e;return-1},getFocusedTabIndex:function(){var e=t.getTabElements(),n=document.activeElement;return e.indexOf(n)},getIndexOfTabById:function(e){for(var n=0;n<t.tabList.length;n++)if(t.tabList[n].id===e)return n;return-1},getTabListLength:function(){return t.tabList.length},notifyTabActivated:function(e){return t.emit(M.TAB_ACTIVATED_EVENT,{index:e},!0)}})},e.prototype.activateTab=function(t){this.foundation.activateTab(t)},e.prototype.scrollIntoView=function(t){this.foundation.scrollIntoView(t)},e.prototype.getTabElements=function(){return[].slice.call(this.root.querySelectorAll(M.TAB_SELECTOR))},e.prototype.instantiateTabs=function(t){return this.getTabElements().map((function(e){return e.id=e.id||"mdc-tab-"+ ++K,t(e)}))},e.prototype.instantiatetabScroller=function(t){var e=this.root.querySelector(M.TAB_SCROLLER_SELECTOR);return e?t(e):null},e}(l.MDCComponent),Y=r("9wcAF");const F=document.querySelector(".mdc-tab-bar"),H=Array.from(document.querySelectorAll(".mdc-tab")),j=document.querySelector(".mdc-top-app-bar"),B=(document.querySelector(".mdc-top-app-bar__navigation-icon"),document.querySelector(".mdc-drawer")),z=document.querySelector(".mdc-drawer .mdc-list"),q=(Array.from(document.querySelectorAll(".mdc-drawer .mdc-list-item")),document.querySelector(".main-content")),k=Array.from(document.querySelectorAll(".content-section")),X=new i.MDCTopAppBar(j),G=new Y.MDCDrawer(B);G.open=!1,X.setScrollTarget(q),X.listen("MDCTopAppBar:nav",(()=>{G.open=!G.open})),z.addEventListener("click",(t=>{G.open=!1}));const U=new V(F);F.addEventListener("MDCTabBar:activated",(t=>J(t.detail.index))),z.addEventListener("MDCList:action",(t=>J(t.detail)));const J=t=>{k.forEach((e=>{e.style.display=Q(e,"-content")==Q(H[t],"-tab")?"block":"none"})),G.list_.selectedIndex=t,U.activateTab(t)},Q=(t,e)=>t.id.slice(0,-1*e.length);