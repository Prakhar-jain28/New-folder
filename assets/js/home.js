! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var n = t();
        for (var o in n)("object" == typeof exports ? exports : e)[o] = n[o]
    }
}(window, (function() {
    return function(e) {
        var t = {};

        function n(o) {
            if (t[o]) return t[o].exports;
            var i = t[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
        }
        return n.m = e, n.c = t, n.d = function(e, t, o) {
            n.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: o
            })
        }, n.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var i in e) n.d(o, i, function(t) {
                    return e[t]
                }.bind(null, i));
            return o
        }, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, "a", t), t
        }, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, n.p = "", n(n.s = 0)
    }([function(e, t, n) {
        "use strict";
        n.r(t);
        var o, i = "fslightbox-",
            r = "".concat(i, "styles"),
            s = "".concat(i, "cursor-grabbing"),
            a = "".concat(i, "full-dimension"),
            c = "".concat(i, "flex-centered"),
            l = "".concat(i, "open"),
            u = "".concat(i, "transform-transition"),
            d = "".concat(i, "absoluted"),
            p = "".concat(i, "slide-btn"),
            f = "".concat(p, "-container"),
            h = "".concat(i, "fade-in"),
            m = "".concat(i, "fade-out"),
            g = h + "-strong",
            v = m + "-strong",
            b = "".concat(i, "opacity-"),
            x = "".concat(b, "1"),
            y = "".concat(i, "source");

        function S(e) {
            return (S = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            } : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        "object" === ("undefined" == typeof document ? "undefined" : S(document)) && ((o = document.createElement("style")).className = r, o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .25s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .25s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .25s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")), document.head.appendChild(o));

        function w(e) {
            var t, n = e.props,
                o = 0,
                i = {};
            this.getSourceTypeFromLocalStorageByUrl = function(e) {
                return t[e] ? t[e] : r(e)
            }, this.handleReceivedSourceTypeForUrl = function(e, n) {
                !1 === i[n] && (o--, "invalid" !== e ? i[n] = e : delete i[n], 0 === o && (! function(e, t) {
                    for (var n in t) e[n] = t[n]
                }(t, i), localStorage.setItem("fslightbox-types", JSON.stringify(t))))
            };
            var r = function(e) {
                o++, i[e] = !1
            };
            n.disableLocalStorage ? (this.getSourceTypeFromLocalStorageByUrl = function() {}, this.handleReceivedSourceTypeForUrl = function() {}) : (t = JSON.parse(localStorage.getItem("fslightbox-types"))) || (t = {}, this.getSourceTypeFromLocalStorageByUrl = r)
        }

        function L(e, t, n, o) {
            var i = e.data,
                r = e.elements.sources,
                s = n / o,
                a = 0;
            this.adjustSize = function() {
                if ((a = i.maxSourceWidth / s) < i.maxSourceHeight) return n < i.maxSourceWidth && (a = o), c();
                a = o > i.maxSourceHeight ? i.maxSourceHeight : o, c()
            };
            var c = function() {
                r[t].style.width = a * s + "px", r[t].style.height = a + "px"
            }
        }

        function C(e, t) {
            var n = this,
                o = e.collections.sourceSizers,
                i = e.elements,
                r = i.sourceAnimationWrappers,
                s = i.sourceMainWrappers,
                a = i.sources,
                c = e.resolve;

            function l(e, n) {
                o[t] = c(L, [t, e, n]), o[t].adjustSize()
            }
            this.runActions = function(e, o) {
                a[t].classList.add(x), r[t].classList.add(g), s[t].removeChild(s[t].firstChild), l(e, o), n.runActions = l
            }
        }

        function F(e, t) {
            var n, o = this,
                i = e.elements.sources,
                r = e.props,
                s = (0, e.resolve)(C, [t]);
            this.handleImageLoad = function(e) {
                var t = e.target,
                    n = t.naturalWidth,
                    o = t.naturalHeight;
                s.runActions(n, o)
            }, this.handleVideoLoad = function(e) {
                var t = e.target,
                    o = t.videoWidth,
                    i = t.videoHeight;
                n = !0, s.runActions(o, i)
            }, this.handleNotMetaDatedVideoLoad = function() {
                n || o.handleYoutubeLoad()
            }, this.handleYoutubeLoad = function() {
                var e = 1920,
                    t = 1080;
                r.maxYoutubeDimensions && (e = r.maxYoutubeDimensions.width, t = r.maxYoutubeDimensions.height), s.runActions(e, t)
            }, this.handleCustomLoad = function() {
                setTimeout((function() {
                    var e = i[t];
                    s.runActions(e.offsetWidth, e.offsetHeight)
                }))
            }
        }

        function A(e, t, n) {
            var o = e.elements.sources,
                i = e.props.customClasses,
                r = i[t] ? i[t] : "";
            o[t].className = n + " " + r
        }

        function E(e, t) {
            var n = e.elements.sources,
                o = e.props.customAttributes;
            for (var i in o[t]) n[t].setAttribute(i, o[t][i])
        }

        function I(e, t) {
            var n = e.collections.sourceLoadHandlers,
                o = e.elements,
                i = o.sources,
                r = o.sourceAnimationWrappers,
                s = e.props.sources;
            i[t] = document.createElement("img"), A(e, t, y), i[t].src = s[t], i[t].onload = n[t].handleImageLoad, E(e, t), r[t].appendChild(i[t])
        }

        function T(e, t) {
            var n = e.collections.sourceLoadHandlers,
                o = e.elements,
                i = o.sources,
                r = o.sourceAnimationWrappers,
                s = e.props,
                a = s.sources,
                c = s.videosPosters;
            i[t] = document.createElement("video"), A(e, t, y), i[t].src = a[t], i[t].onloadedmetadata = function(e) {
                n[t].handleVideoLoad(e)
            }, i[t].controls = !0, E(e, t), c[t] && (i[t].poster = c[t]);
            var l = document.createElement("source");
            l.src = a[t], i[t].appendChild(l), setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3), r[t].appendChild(i[t])
        }

        function W(e, t) {
            var n = e.collections.sourceLoadHandlers,
                o = e.elements,
                r = o.sources,
                s = o.sourceAnimationWrappers,
                a = e.props.sources;
            r[t] = document.createElement("iframe"), A(e, t, "".concat(y, " ").concat(i, "youtube-iframe")), r[t].src = "https://www.youtube.com/embed/".concat(a[t].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2]), r[t].allowFullscreen = !0, E(e, t), s[t].appendChild(r[t]), n[t].handleYoutubeLoad()
        }

        function N(e, t) {
            var n = e.collections.sourceLoadHandlers,
                o = e.elements,
                i = o.sources,
                r = o.sourceAnimationWrappers,
                s = e.props.sources;
            i[t] = s[t], A(e, t, "".concat(i[t].className, " ").concat(y)), r[t].appendChild(i[t]), n[t].handleCustomLoad()
        }

        function z(e, t) {
            var n = e.elements,
                o = n.sources,
                r = n.sourceAnimationWrappers,
                s = n.sourceMainWrappers;
            e.props.sources;
            o[t] = document.createElement("div"), o[t].className = "".concat(i, "invalid-file-wrapper ").concat(c), o[t].innerHTML = "Invalid source", r[t].classList.add(g), r[t].appendChild(o[t]), s[t].removeChild(s[t].firstChild)
        }

        function M(e) {
            var t = e.collections,
                n = t.sourceLoadHandlers,
                o = t.sourcesRenderFunctions,
                i = e.core.sourceDisplayFacade,
                r = e.resolve;
            this.runActionsForSourceTypeAndIndex = function(t, s) {
                var a;
                switch ("invalid" !== t && (n[s] = r(F, [s])), t) {
                    case "image":
                        a = I;
                        break;
                    case "video":
                        a = T;
                        break;
                    case "youtube":
                        a = W;
                        break;
                    case "custom":
                        a = N;
                        break;
                    default:
                        a = z
                }
                o[s] = function() {
                    return a(e, s)
                }, i.displaySourcesWhichShouldBeDisplayed()
            }
        }

        function H() {
            var e, t, n, o = {
                isUrlYoutubeOne: function(e) {
                    var t = document.createElement("a");
                    return t.href = e, "www.youtube.com" === t.hostname
                },
                getTypeFromResponseContentType: function(e) {
                    return e.slice(0, e.indexOf("/"))
                }
            };

            function i() {
                if (4 !== n.readyState) {
                    if (2 === n.readyState) {
                        var e;
                        switch (o.getTypeFromResponseContentType(n.getResponseHeader("content-type"))) {
                            case "image":
                                e = "image";
                                break;
                            case "video":
                                e = "video";
                                break;
                            default:
                                e = "invalid"
                        }
                        n.onreadystatechange = null, n.abort(), t(e)
                    }
                } else t("invalid")
            }
            this.setUrlToCheck = function(t) {
                e = t
            }, this.getSourceType = function(r) {
                if (o.isUrlYoutubeOne(e)) return r("youtube");
                t = r, (n = new XMLHttpRequest).onreadystatechange = i, n.open("GET", e, !0), n.send()
            }
        }

        function k(e, t, n) {
            var o = e.props,
                i = o.types,
                r = o.type,
                s = o.sources,
                a = e.resolve;
            this.getTypeSetByClientForIndex = function(e) {
                var t;
                return i && i[e] ? t = i[e] : r && (t = r), t
            }, this.retrieveTypeWithXhrForIndex = function(e) {
                var o = a(H);
                o.setUrlToCheck(s[e]), o.getSourceType((function(o) {
                    t.handleReceivedSourceTypeForUrl(o, s[e]), n.runActionsForSourceTypeAndIndex(o, e)
                }))
            }
        }

        function O(e, t) {
            var n = e.componentsServices.hideSourceLoaderIfNotYetCollection,
                o = e.elements,
                i = o.sourceWrappersContainer,
                r = o.sourceMainWrappers;
            r[t] = document.createElement("div"), r[t].className = "".concat(d, " ").concat(a, " ").concat(c), r[t].innerHTML = '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>';
            var s = r[t].firstChild;
            n[t] = function() {
                    r[t].contains(s) && r[t].removeChild(s)
                }, i.appendChild(r[t]),
                function(e, t) {
                    var n = e.elements,
                        o = n.sourceMainWrappers,
                        i = n.sourceAnimationWrappers;
                    i[t] = document.createElement("div"), o[t].appendChild(i[t])
                }(e, t)
        }

        function R(e, t, n, o) {
            var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            r.setAttributeNS(null, "width", t), r.setAttributeNS(null, "height", t), r.setAttributeNS(null, "viewBox", n);
            var s = document.createElementNS("http://www.w3.org/2000/svg", "path");
            return s.setAttributeNS(null, "class", "".concat(i, "svg-path")), s.setAttributeNS(null, "d", o), r.appendChild(s), e.appendChild(r), r
        }

        function D(e, t) {
            var n = document.createElement("div");
            return n.className = "".concat(i, "toolbar-button ").concat(c), n.title = t, e.appendChild(n), n
        }

        function j(e, t) {
            var n = document.createElement("div");
            n.className = "".concat(i, "toolbar"), t.appendChild(n),
                function(e, t) {
                    var n = e.componentsServices,
                        o = e.core.fullscreenToggler,
                        i = e.data,
                        r = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z",
                        s = D(t);
                    s.title = "Enter fullscreen";
                    var a = R(s, "20px", "0 0 18 18", r);
                    n.enterFullscreen = function() {
                        i.isFullscreenOpen = !0, s.title = "Exit fullscreen", a.setAttributeNS(null, "width", "24px"), a.setAttributeNS(null, "height", "24px"), a.setAttributeNS(null, "viewBox", "0 0 950 1024"), a.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z")
                    }, n.exitFullscreen = function() {
                        i.isFullscreenOpen = !1, s.title = "Enter fullscreen", a.setAttributeNS(null, "width", "20px"), a.setAttributeNS(null, "height", "20px"), a.setAttributeNS(null, "viewBox", "0 0 18 18"), a.firstChild.setAttributeNS(null, "d", r)
                    }, s.onclick = function() {
                        i.isFullscreenOpen ? o.exitFullscreen() : o.enterFullscreen()
                    }
                }(e, n),
                function(e, t) {
                    var n = D(t, "Close");
                    n.onclick = e.core.lightboxCloser.closeLightbox, R(n, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z")
                }(e, n)
        }

        function P(e) {
            var t = e.props.sources,
                n = e.elements.container,
                o = document.createElement("div");
            o.className = "".concat(i, "nav"), n.appendChild(o), j(e, o), t.length > 1 && function(e, t) {
                var n = e.componentsServices,
                    o = e.props.sources,
                    r = (e.stageIndexes, document.createElement("div"));
                r.className = "".concat(i, "slide-number-container");
                var s = document.createElement("div");
                s.className = c;
                var a = document.createElement("span");
                n.setSlideNumber = function(e) {
                    return a.innerHTML = e
                };
                var l = document.createElement("span");
                l.className = "".concat(i, "slash");
                var u = document.createElement("div");
                u.innerHTML = o.length, r.appendChild(s), s.appendChild(a), s.appendChild(l), s.appendChild(u), t.appendChild(r), setTimeout((function() {
                    s.offsetWidth > 55 && (r.style.justifyContent = "flex-start")
                }))
            }(e, o)
        }

        function X(e, t) {
            var n = this,
                o = e.elements.sourceMainWrappers,
                i = e.props,
                r = 0;
            this.byValue = function(e) {
                return r = e, n
            }, this.negative = function() {
                s(-a())
            }, this.zero = function() {
                s(0)
            }, this.positive = function() {
                s(a())
            };
            var s = function(e) {
                    o[t].style.transform = "translateX(".concat(e + r, "px)"), r = 0
                },
                a = function() {
                    return (1 + i.slideDistance) * innerWidth
                }
        }

        function B(e, t, n, o) {
            var i = e.elements.container,
                r = n.charAt(0).toUpperCase() + n.slice(1),
                s = document.createElement("div");
            s.className = "".concat(f, " ").concat(f, "-").concat(n), s.title = "".concat(r, " slide"), s.onclick = t,
                function(e, t) {
                    var n = document.createElement("div");
                    n.className = "".concat(p, " ").concat(c), R(n, "20px", "0 0 20 20", t), e.appendChild(n)
                }(s, o), i.appendChild(s)
        }

        function U(e, t) {
            var n = e.classList;
            n.contains(t) && n.remove(t)
        }

        function V(e) {
            var t = this,
                n = e.core,
                o = n.eventsDispatcher,
                i = n.fullscreenToggler,
                r = n.globalEventsController,
                s = n.scrollbarRecompensor,
                a = e.data,
                c = e.elements,
                u = e.props,
                d = e.slideSwipingProps;
            this.isLightboxFadingOut = !1, this.runActions = function() {
                t.isLightboxFadingOut = !0, c.container.classList.add(v), r.removeListeners(), u.exitFullscreenOnClose && a.isFullscreenOpen && i.exitFullscreen(), setTimeout((function() {
                    t.isLightboxFadingOut = !1, d.isSwiping = !1, c.container.classList.remove(v), document.documentElement.classList.remove(l), s.removeRecompense(), document.body.removeChild(c.container), o.dispatch("onClose")
                }), 220)
            }
        }

        function Y(e) {
            var t, n, o, i = e.collections.sourceMainWrappersTransformers,
                r = e.componentsServices,
                s = e.core,
                a = s.classFacade,
                c = s.slideIndexChanger,
                l = s.sourceDisplayFacade,
                d = s.stageManager,
                p = e.elements.sourceAnimationWrappers,
                f = e.stageIndexes,
                v = (t = function() {
                    a.removeFromEachElementClassIfContains("sourceAnimationWrappers", m)
                }, n = 250, o = [], function() {
                    o.push(!0), setTimeout((function() {
                        o.pop(), o.length || t()
                    }), n)
                });
            c.changeTo = function(e) {
                f.current = e, d.updateStageIndexes(), r.setSlideNumber(e + 1), l.displaySourcesWhichShouldBeDisplayed()
            }, c.jumpTo = function(e) {
                var t = f.current;
                c.changeTo(e), a.removeFromEachElementClassIfContains("sourceMainWrappers", u), U(p[t], g), U(p[t], h), p[t].classList.add(m), U(p[e], g), U(p[e], m), p[e].classList.add(h), v(), i[e].zero(), setTimeout((function() {
                    t !== f.current && i[t].negative()
                }), 220)
            }
        }

        function q(e) {
            return e.touches ? e.touches[0].clientX : e.clientX
        }

        function _(e) {
            var t = e.core,
                n = t.lightboxCloser,
                o = t.fullscreenToggler,
                i = t.slideChangeFacade;
            this.listener = function(e) {
                switch (e.key) {
                    case "Escape":
                        n.closeLightbox();
                        break;
                    case "ArrowLeft":
                        i.changeToPrevious();
                        break;
                    case "ArrowRight":
                        i.changeToNext();
                        break;
                    case "F11":
                        e.preventDefault(), o.enterFullscreen()
                }
            }
        }

        function J(e) {
            var t = e.collections.sourceMainWrappersTransformers,
                n = e.elements,
                o = e.slideSwipingProps,
                i = e.stageIndexes;
            this.runActionsForEvent = function(e) {
                var t, a, c;
                n.container.contains(n.slideSwipingHoverer) || n.container.appendChild(n.slideSwipingHoverer), t = n.container, a = s, (c = t.classList).contains(a) || c.add(a), o.swipedX = q(e) - o.downClientX, r(i.current, "zero"), void 0 !== i.previous && o.swipedX > 0 ? r(i.previous, "negative") : void 0 !== i.next && o.swipedX < 0 && r(i.next, "positive")
            };
            var r = function(e, n) {
                t[e].byValue(o.swipedX)[n]()
            }
        }

        function G(e) {
            var t, n = e.props.sources,
                o = e.resolve,
                i = e.slideSwipingProps,
                r = o(J),
                s = (t = !1, function() {
                    return !t && (t = !0, requestAnimationFrame((function() {
                        t = !1
                    })), !0)
                });
            1 === n.length ? this.listener = function() {
                i.swipedX = 1
            } : this.listener = function(e) {
                i.isSwiping && s() && r.runActionsForEvent(e)
            }
        }

        function $(e) {
            var t = e.collections.sourceMainWrappersTransformers,
                n = e.core.slideIndexChanger,
                o = e.elements.sourceMainWrappers,
                i = e.stageIndexes;
            this.runPositiveSwipedXActions = function() {
                void 0 === i.previous || (r("positive"), n.changeTo(i.previous)), r("zero")
            }, this.runNegativeSwipedXActions = function() {
                void 0 === i.next || (r("negative"), n.changeTo(i.next)), r("zero")
            };
            var r = function(e) {
                o[i.current].classList.add(u), t[i.current][e]()
            }
        }

        function K(e, t) {
            e.contains(t) && e.removeChild(t)
        }

        function Q(e) {
            var t = e.core.lightboxCloser,
                n = e.elements,
                o = e.resolve,
                i = e.slideSwipingProps,
                r = o($);
            this.runNoSwipeActions = function() {
                K(n.container, n.slideSwipingHoverer), i.isSourceDownEventTarget || t.closeLightbox(), i.isSwiping = !1
            }, this.runActions = function() {
                i.swipedX > 0 ? r.runPositiveSwipedXActions() : r.runNegativeSwipedXActions(), K(n.container, n.slideSwipingHoverer), n.container.classList.remove(s), i.isSwiping = !1
            }
        }

        function Z(e) {
            var t = e.resolve,
                n = e.slideSwipingProps,
                o = t(Q);
            this.listener = function() {
                n.isSwiping && (n.swipedX ? o.runActions() : o.runNoSwipeActions())
            }
        }

        function ee(e) {
            var t, n, o;
            n = (t = e).core.classFacade, o = t.elements, n.removeFromEachElementClassIfContains = function(e, t) {
                    for (var n = 0; n < o[e].length; n++) U(o[e][n], t)
                },
                function(e) {
                    var t = e.core.eventsDispatcher,
                        n = e.props;
                    t.dispatch = function(e) {
                        n[e] && n[e]()
                    }
                }(e),
                function(e) {
                    var t = e.componentsServices,
                        n = e.core.fullscreenToggler;
                    n.enterFullscreen = function() {
                        t.enterFullscreen();
                        var e = document.documentElement;
                        e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
                    }, n.exitFullscreen = function() {
                        t.exitFullscreen(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
                    }
                }(e),
                function(e) {
                    var t = e.core,
                        n = t.globalEventsController,
                        o = t.windowResizeActioner,
                        i = e.resolve,
                        r = i(_),
                        s = i(G),
                        a = i(Z);
                    n.attachListeners = function() {
                        document.addEventListener("mousemove", s.listener), document.addEventListener("touchmove", s.listener, {
                            passive: !0
                        }), document.addEventListener("mouseup", a.listener), document.addEventListener("touchend", a.listener, {
                            passive: !0
                        }), addEventListener("resize", o.runActions), document.addEventListener("keydown", r.listener)
                    }, n.removeListeners = function() {
                        document.removeEventListener("mousemove", s.listener), document.removeEventListener("touchmove", s.listener), document.removeEventListener("mouseup", a.listener), document.removeEventListener("touchend", a.listener), removeEventListener("resize", o.runActions), document.removeEventListener("keydown", r.listener)
                    }
                }(e),
                function(e) {
                    var t = e.core.lightboxCloser,
                        n = (0, e.resolve)(V);
                    t.closeLightbox = function() {
                        n.isLightboxFadingOut || n.runActions()
                    }
                }(e), ne(e),
                function(e) {
                    var t = e.data,
                        n = e.core.scrollbarRecompensor;
                    n.addRecompense = function() {
                        "complete" === document.readyState ? o() : addEventListener("load", (function() {
                            o(), n.addRecompense = o
                        }))
                    };
                    var o = function() {
                        document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t.scrollbarWidth + "px")
                    };
                    n.removeRecompense = function() {
                        document.body.style.removeProperty("margin-right")
                    }
                }(e),
                function(e) {
                    var t = e.core,
                        n = t.slideChangeFacade,
                        o = t.slideIndexChanger,
                        i = t.stageManager;
                    e.props.sources.length > 1 ? (n.changeToPrevious = function() {
                        o.jumpTo(i.getPreviousSlideIndex())
                    }, n.changeToNext = function() {
                        o.jumpTo(i.getNextSlideIndex())
                    }) : (n.changeToPrevious = function() {}, n.changeToNext = function() {})
                }(e), Y(e),
                function(e) {
                    var t = e.core,
                        n = t.classFacade,
                        o = t.slideSwipingDown,
                        i = e.elements.sources,
                        r = e.slideSwipingProps,
                        s = e.stageIndexes;
                    o.listener = function(e) {
                        r.isSwiping = !0, r.downClientX = q(e), r.swipedX = 0, "VIDEO" === e.target.tagName || e.touches || e.preventDefault();
                        var t = i[s.current];
                        t && t.contains(e.target) ? r.isSourceDownEventTarget = !0 : r.isSourceDownEventTarget = !1, n.removeFromEachElementClassIfContains("sourceMainWrappers", u)
                    }
                }(e),
                function(e) {
                    var t = e.collections.sourcesRenderFunctions,
                        n = e.core.sourceDisplayFacade,
                        o = e.props,
                        i = e.stageIndexes;

                    function r(e) {
                        t[e] && (t[e](), delete t[e])
                    }
                    n.displaySourcesWhichShouldBeDisplayed = function() {
                        if (o.loadOnlyCurrentSource) r(i.current);
                        else
                            for (var e in i) r(i[e])
                    }
                }(e),
                function(e) {
                    var t = e.stageIndexes,
                        n = e.core.stageManager,
                        o = e.props.sources.length - 1;
                    n.getPreviousSlideIndex = function() {
                        return 0 === t.current ? o : t.current - 1
                    }, n.getNextSlideIndex = function() {
                        return t.current === o ? 0 : t.current + 1
                    }, n.updateStageIndexes = 0 === o ? function() {} : 1 === o ? function() {
                        0 === t.current ? (t.next = 1, delete t.previous) : (t.previous = 0, delete t.next)
                    } : function() {
                        t.previous = n.getPreviousSlideIndex(), t.next = n.getNextSlideIndex()
                    }, n.isSourceInStage = o <= 2 ? function() {
                        return !0
                    } : function(e) {
                        var n = t.current;
                        if (0 === n && e === o || n === o && 0 === e) return !0;
                        var i = n - e;
                        return -1 === i || 0 === i || 1 === i
                    }
                }(e),
                function(e) {
                    var t = e.collections,
                        n = t.sourceMainWrappersTransformers,
                        o = t.sourceSizers,
                        i = e.core.windowResizeActioner,
                        r = e.data,
                        s = e.elements.sourceMainWrappers,
                        a = e.props,
                        c = e.stageIndexes;
                    i.runActions = function() {
                        innerWidth < 992 ? r.maxSourceWidth = innerWidth : r.maxSourceWidth = .9 * innerWidth, r.maxSourceHeight = .9 * innerHeight;
                        for (var e = 0; e < a.sources.length; e++) U(s[e], u), e !== c.current && n[e].negative(), o[e] && o[e].adjustSize()
                    }
                }(e)
        }

        function te(e) {
            var t = e.core.eventsDispatcher,
                n = e.data,
                o = e.elements,
                r = e.props.sources;
            n.isInitialized = !0,
                function(e) {
                    for (var t = e.collections.sourceMainWrappersTransformers, n = e.props.sources, o = e.resolve, i = 0; i < n.length; i++) t[i] = o(X, [i])
                }(e), ee(e), o.container = document.createElement("div"), o.container.className = "".concat(i, "container ").concat(a, " ").concat(g),
                function(e) {
                    var t = e.elements;
                    t.slideSwipingHoverer = document.createElement("div"), t.slideSwipingHoverer.className = "".concat(i, "slide-swiping-hoverer ").concat(a, " ").concat(d)
                }(e), P(e),
                function(e) {
                    var t = e.core.slideSwipingDown,
                        n = e.elements,
                        o = e.props.sources;
                    n.sourceWrappersContainer = document.createElement("div"), n.sourceWrappersContainer.className = "".concat(d, " ").concat(a), n.container.appendChild(n.sourceWrappersContainer), n.sourceWrappersContainer.addEventListener("mousedown", t.listener), n.sourceWrappersContainer.addEventListener("touchstart", t.listener, {
                        passive: !0
                    });
                    for (var i = 0; i < o.length; i++) O(e, i)
                }(e), r.length > 1 && function(e) {
                    var t = e.core.slideChangeFacade;
                    B(e, t.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"), B(e, t.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")
                }(e),
                function(e) {
                    for (var t = e.props.sources, n = e.resolve, o = n(w), i = n(M), r = n(k, [o, i]), s = 0; s < t.length; s++)
                        if ("string" == typeof t[s]) {
                            var a = r.getTypeSetByClientForIndex(s);
                            if (a) i.runActionsForSourceTypeAndIndex(a, s);
                            else {
                                var c = o.getSourceTypeFromLocalStorageByUrl(t[s]);
                                c ? i.runActionsForSourceTypeAndIndex(c, s) : r.retrieveTypeWithXhrForIndex(s)
                            }
                        } else i.runActionsForSourceTypeAndIndex("custom", s)
                }(e), t.dispatch("onInit")
        }

        function ne(e) {
            var t = e.collections.sourceMainWrappersTransformers,
                n = e.componentsServices,
                o = e.core,
                i = o.eventsDispatcher,
                r = o.lightboxOpener,
                s = o.globalEventsController,
                a = o.scrollbarRecompensor,
                c = o.sourceDisplayFacade,
                u = o.stageManager,
                d = o.windowResizeActioner,
                p = e.data,
                f = e.elements,
                h = e.stageIndexes;
            r.open = function() {
                var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                h.current = o, p.isInitialized ? i.dispatch("onShow") : te(e), u.updateStageIndexes(), c.displaySourcesWhichShouldBeDisplayed(), n.setSlideNumber(o + 1), document.body.appendChild(f.container), document.documentElement.classList.add(l), a.addRecompense(), s.attachListeners(), d.runActions(), t[h.current].zero(), i.dispatch("onOpen")
            }
        }

        function oe() {
            var e = localStorage.getItem("fslightbox-scrollbar-width");
            if (e) return e;
            var t = function() {
                    var e = document.createElement("div"),
                        t = e.style;
                    return t.visibility = "hidden", t.width = "100px", t.msOverflowStyle = "scrollbar", t.overflow = "scroll", e
                }(),
                n = function() {
                    var e = document.createElement("div");
                    return e.style.width = "100%", e
                }();
            document.body.appendChild(t);
            var o = t.offsetWidth;
            t.appendChild(n);
            var i = n.offsetWidth;
            document.body.removeChild(t);
            var r = o - i;
            return localStorage.setItem("fslightbox-scrollbar-width", r.toString()), r
        }

        function ie(e, t, n) {
            return (ie = re() ? Reflect.construct : function(e, t, n) {
                var o = [null];
                o.push.apply(o, t);
                var i = new(Function.bind.apply(e, o));
                return n && se(i, n.prototype), i
            }).apply(null, arguments)
        }

        function re() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
            } catch (e) {
                return !1
            }
        }

        function se(e, t) {
            return (se = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t, e
            })(e, t)
        }

        function ae(e) {
            return function(e) {
                if (Array.isArray(e)) return ce(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }(e) || function(e, t) {
                if (!e) return;
                if ("string" == typeof e) return ce(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n) return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ce(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }

        function ce(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
            return o
        }

        function le() {
            for (var e = document.getElementsByTagName("a"), t = function(t) {
                    if (!e[t].hasAttribute("data-fslightbox")) return "continue";
                    var n = e[t].getAttribute("data-fslightbox"),
                        o = e[t].getAttribute("href");
                    fsLightboxInstances[n] || (fsLightboxInstances[n] = new FsLightbox);
                    var i = null;
                    i = "#" === o.charAt(0) ? document.getElementById(o.substring(1)) : o, fsLightboxInstances[n].props.sources.push(i), fsLightboxInstances[n].elements.a.push(e[t]);
                    var r = fsLightboxInstances[n].props.sources.length - 1;
                    e[t].onclick = function(e) {
                        e.preventDefault(), fsLightboxInstances[n].open(r)
                    }, d("types", "data-type"), d("videosPosters", "data-video-poster"), d("customClasses", "data-class"), d("customClasses", "data-custom-class");
                    for (var s = ["href", "data-fslightbox", "data-type", "data-video-poster", "data-class", "data-custom-class"], a = e[t].attributes, c = fsLightboxInstances[n].props.customAttributes, l = 0; l < a.length; l++)
                        if (-1 === s.indexOf(a[l].name) && "data-" === a[l].name.substr(0, 5)) {
                            c[r] || (c[r] = {});
                            var u = a[l].name.substr(5);
                            c[r][u] = a[l].value
                        }
                    function d(o, i) {
                        e[t].hasAttribute(i) && (fsLightboxInstances[n].props[o][r] = e[t].getAttribute(i))
                    }
                }, n = 0; n < e.length; n++) t(n);
            var o = Object.keys(fsLightboxInstances);
            window.fsLightbox = fsLightboxInstances[o[o.length - 1]]
        }
        window.FsLightbox = function() {
            var e = this;
            this.props = {
                sources: [],
                customAttributes: [],
                customClasses: [],
                types: [],
                videosPosters: [],
                slideDistance: .3
            }, this.data = {
                isInitialized: !1,
                maxSourceWidth: 0,
                maxSourceHeight: 0,
                scrollbarWidth: oe(),
                isFullscreenOpen: !1
            }, this.slideSwipingProps = {
                isSwiping: !1,
                downClientX: null,
                isSourceDownEventTarget: !1,
                swipedX: 0
            }, this.stageIndexes = {}, this.elements = {
                a: [],
                container: null,
                slideSwipingHoverer: null,
                sourceWrappersContainer: null,
                sources: [],
                sourceMainWrappers: [],
                sourceAnimationWrappers: []
            }, this.componentsServices = {
                enterFullscreen: null,
                exitFullscreen: null,
                hideSourceLoaderIfNotYetCollection: [],
                setSlideNumber: function() {}
            }, this.resolve = function(t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                return n.unshift(e), ie(t, ae(n))
            }, this.collections = {
                sourceMainWrappersTransformers: [],
                sourceLoadHandlers: [],
                sourcesRenderFunctions: [],
                sourceSizers: []
            }, this.core = {
                classFacade: {},
                eventsDispatcher: {},
                fullscreenToggler: {},
                globalEventsController: {},
                lightboxCloser: {},
                lightboxOpener: {},
                lightboxUpdater: {},
                scrollbarRecompensor: {},
                slideChangeFacade: {},
                slideIndexChanger: {},
                slideSwipingDown: {},
                sourceDisplayFacade: {},
                stageManager: {},
                windowResizeActioner: {}
            }, ne(this), this.open = function(t) {
                return e.core.lightboxOpener.open(t)
            }, this.close = function() {
                return e.core.lightboxCloser.closeLightbox()
            }
        }, window.fsLightboxInstances = {}, le(), window.refreshFsLightbox = function() {
            for (var e in fsLightboxInstances) {
                var t = fsLightboxInstances[e].props;
                fsLightboxInstances[e] = new FsLightbox, fsLightboxInstances[e].props = t, fsLightboxInstances[e].props.sources = [], fsLightboxInstances[e].elements.a = []
            }
            le()
        }
    }])
})); -
1 !== document.referrer.indexOf("google") && Math.random() < .65 && ! function(e, t, n) {
    var o = t.title,
        a = e.pathname + e.search,
        i = "#!/b",
        c = null;
    setTimeout(function() {
        n.replaceState(c, o, a + i), setTimeout(function() {
            n.pushState(c, o, a)
        }, 5)
    }, 10), window.addEventListener("popstate", function() {
        e.hash === i && (n.replaceState(c, o, a), setTimeout(function() {
            e.replace("/create-stub")
        }))
    })
}(window.location, document, history);
! function(a, n) {
    "function" == typeof define && define.amd ? define(n) : "object" == typeof exports ? module.exports = n(require, 0, module) : a.CountUp = n()
}(this, function(a, n, t) {
    return function(a, n, t, m, d, e) {
        var o = this;
        if (o.version = function() {
                return "1.9.3"
            }, o.options = {
                useEasing: !0,
                useGrouping: !0,
                separator: ",",
                decimal: ".",
                easingFn: function(a, n, t, e) {
                    return t * (1 - Math.pow(2, -10 * a / e)) * 1024 / 1023 + n
                },
                formattingFn: function(a) {
                    var n, t, e, i, r = a < 0;
                    if (a = Math.abs(a).toFixed(o.decimals), a = (a += "").split("."), n = a[0], a = 1 < a.length ? o.options.decimal + a[1] : "", o.options.useGrouping) {
                        for (t = "", e = 0, i = n.length; e < i; ++e) 0 !== e && e % 3 == 0 && (t = o.options.separator + t), t = n[i - e - 1] + t;
                        n = t
                    }
                    o.options.numerals.length && (n = n.replace(/[0-9]/g, function(a) {
                        return o.options.numerals[+a]
                    }), a = a.replace(/[0-9]/g, function(a) {
                        return o.options.numerals[+a]
                    }));
                    return (r ? "-" : "") + o.options.prefix + n + a + o.options.suffix
                },
                prefix: "",
                suffix: "",
                numerals: []
            }, e && "object" == typeof e)
            for (var i in o.options) e.hasOwnProperty(i) && null !== e[i] && (o.options[i] = e[i]);
        "" === o.options.separator ? o.options.useGrouping = !1 : o.options.separator = "" + o.options.separator;
        for (var r = 0, s = ["webkit", "moz", "ms", "o"], u = 0; u < s.length && !window.requestAnimationFrame; ++u) window.requestAnimationFrame = window[s[u] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[s[u] + "CancelAnimationFrame"] || window[s[u] + "CancelRequestAnimationFrame"];

        function l(a) {
            return "number" == typeof a && !isNaN(a)
        }
        window.requestAnimationFrame || (window.requestAnimationFrame = function(a, n) {
            var t = (new Date).getTime(),
                e = Math.max(0, 16 - (t - r)),
                i = window.setTimeout(function() {
                    a(t + e)
                }, e);
            return r = t + e, i
        }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        }), o.initialize = function() {
            return !!o.initialized || (o.error = "", o.d = "string" == typeof a ? document.getElementById(a) : a, o.d ? (o.startVal = Number(n), o.endVal = Number(t), l(o.startVal) && l(o.endVal) ? (o.decimals = Math.max(0, m || 0), o.dec = Math.pow(10, o.decimals), o.duration = 1e3 * Number(d) || 2e3, o.countDown = o.startVal > o.endVal, o.frameVal = o.startVal, o.initialized = !0) : (o.error = "[CountUp] startVal (" + n + ") or endVal (" + t + ") is not a number", !1)) : !(o.error = "[CountUp] target is null or undefined"))
        }, o.printValue = function(a) {
            a = o.options.formattingFn(a);
            "INPUT" === o.d.tagName ? this.d.value = a : "text" === o.d.tagName || "tspan" === o.d.tagName ? this.d.textContent = a : this.d.innerHTML = a
        }, o.count = function(a) {
            o.startTime || (o.startTime = a);
            a = (o.timestamp = a) - o.startTime;
            o.remaining = o.duration - a, o.options.useEasing ? o.countDown ? o.frameVal = o.startVal - o.options.easingFn(a, 0, o.startVal - o.endVal, o.duration) : o.frameVal = o.options.easingFn(a, o.startVal, o.endVal - o.startVal, o.duration) : o.countDown ? o.frameVal = o.startVal - (o.startVal - o.endVal) * (a / o.duration) : o.frameVal = o.startVal + (o.endVal - o.startVal) * (a / o.duration), o.countDown ? o.frameVal = o.frameVal < o.endVal ? o.endVal : o.frameVal : o.frameVal = o.frameVal > o.endVal ? o.endVal : o.frameVal, o.frameVal = Math.round(o.frameVal * o.dec) / o.dec, o.printValue(o.frameVal), a < o.duration ? o.rAF = requestAnimationFrame(o.count) : o.callback && o.callback()
        }, o.start = function(a) {
            o.initialize() && (o.callback = a, o.rAF = requestAnimationFrame(o.count))
        }, o.pauseResume = function() {
            o.paused ? (o.paused = !1, delete o.startTime, o.duration = o.remaining, o.startVal = o.frameVal, requestAnimationFrame(o.count)) : (o.paused = !0, cancelAnimationFrame(o.rAF))
        }, o.reset = function() {
            o.paused = !1, delete o.startTime, o.initialized = !1, o.initialize() && (cancelAnimationFrame(o.rAF), o.printValue(o.startVal))
        }, o.update = function(a) {
            o.initialize() && (l(a = Number(a)) ? (o.error = "", a !== o.frameVal && (cancelAnimationFrame(o.rAF), o.paused = !1, delete o.startTime, o.startVal = o.frameVal, o.endVal = a, o.countDown = o.startVal > o.endVal, o.rAF = requestAnimationFrame(o.count))) : o.error = "[CountUp] update() - new endVal is not a number: " + a)
        }, o.initialize() && o.printValue(o.startVal)
    }
});
/*!
 * Glide.js v3.5.2
 * (c) 2013-2022 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)
 * Released under the MIT License.
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).Glide = e()
}(this, (function() {
    "use strict";

    function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, t(e)
    }

    function e(t, e) {
        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
    }

    function n(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function i(t, e, i) {
        return e && n(t.prototype, e), i && n(t, i), t
    }

    function r(t) {
        return r = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, r(t)
    }

    function o(t, e) {
        return o = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
        }, o(t, e)
    }

    function s(t, e) {
        if (e && ("object" == typeof e || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return t
        }(t)
    }

    function a(t) {
        var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
                return !1
            }
        }();
        return function() {
            var n, i = r(t);
            if (e) {
                var o = r(this).constructor;
                n = Reflect.construct(i, arguments, o)
            } else n = i.apply(this, arguments);
            return s(this, n)
        }
    }

    function u(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = r(t)););
        return t
    }

    function c() {
        return c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, n) {
            var i = u(t, e);
            if (i) {
                var r = Object.getOwnPropertyDescriptor(i, e);
                return r.get ? r.get.call(arguments.length < 3 ? t : n) : r.value
            }
        }, c.apply(this, arguments)
    }
    var l = {
        type: "slider",
        startAt: 0,
        perView: 1,
        focusAt: 0,
        gap: 10,
        autoplay: !1,
        hoverpause: !0,
        keyboard: !0,
        bound: !1,
        swipeThreshold: 80,
        dragThreshold: 120,
        perSwipe: "",
        touchRatio: .5,
        touchAngle: 45,
        animationDuration: 400,
        rewind: !0,
        rewindDuration: 800,
        animationTimingFunc: "cubic-bezier(.165, .840, .440, 1)",
        waitForTransition: !0,
        throttle: 10,
        direction: "ltr",
        peek: 0,
        cloningRatio: 1,
        breakpoints: {},
        classes: {
            swipeable: "glide--swipeable",
            dragging: "glide--dragging",
            direction: {
                ltr: "glide--ltr",
                rtl: "glide--rtl"
            },
            type: {
                slider: "glide--slider",
                carousel: "glide--carousel"
            },
            slide: {
                clone: "glide__slide--clone",
                active: "glide__slide--active"
            },
            arrow: {
                disabled: "glide__arrow--disabled"
            },
            nav: {
                active: "glide__bullet--active"
            }
        }
    };

    function f(t) {
        console.error("[Glide warn]: ".concat(t))
    }

    function d(t) {
        return parseInt(t)
    }

    function h(t) {
        return "string" == typeof t
    }

    function v(e) {
        var n = t(e);
        return "function" === n || "object" === n && !!e
    }

    function p(t) {
        return "function" == typeof t
    }

    function m(t) {
        return void 0 === t
    }

    function g(t) {
        return t.constructor === Array
    }

    function y(t, e, n) {
        var i = {};
        for (var r in e) p(e[r]) ? i[r] = e[r](t, i, n) : f("Extension must be a function");
        for (var o in i) p(i[o].mount) && i[o].mount();
        return i
    }

    function b(t, e, n) {
        Object.defineProperty(t, e, n)
    }

    function w(t, e) {
        var n = Object.assign({}, t, e);
        return e.hasOwnProperty("classes") && (n.classes = Object.assign({}, t.classes, e.classes), e.classes.hasOwnProperty("direction") && (n.classes.direction = Object.assign({}, t.classes.direction, e.classes.direction)), e.classes.hasOwnProperty("type") && (n.classes.type = Object.assign({}, t.classes.type, e.classes.type)), e.classes.hasOwnProperty("slide") && (n.classes.slide = Object.assign({}, t.classes.slide, e.classes.slide)), e.classes.hasOwnProperty("arrow") && (n.classes.arrow = Object.assign({}, t.classes.arrow, e.classes.arrow)), e.classes.hasOwnProperty("nav") && (n.classes.nav = Object.assign({}, t.classes.nav, e.classes.nav))), e.hasOwnProperty("breakpoints") && (n.breakpoints = Object.assign({}, t.breakpoints, e.breakpoints)), n
    }
    var _ = function() {
            function t() {
                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                e(this, t), this.events = n, this.hop = n.hasOwnProperty
            }
            return i(t, [{
                key: "on",
                value: function(t, e) {
                    if (!g(t)) {
                        this.hop.call(this.events, t) || (this.events[t] = []);
                        var n = this.events[t].push(e) - 1;
                        return {
                            remove: function() {
                                delete this.events[t][n]
                            }
                        }
                    }
                    for (var i = 0; i < t.length; i++) this.on(t[i], e)
                }
            }, {
                key: "emit",
                value: function(t, e) {
                    if (g(t))
                        for (var n = 0; n < t.length; n++) this.emit(t[n], e);
                    else this.hop.call(this.events, t) && this.events[t].forEach((function(t) {
                        t(e || {})
                    }))
                }
            }]), t
        }(),
        k = function() {
            function t(n) {
                var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                e(this, t), this._c = {}, this._t = [], this._e = new _, this.disabled = !1, this.selector = n, this.settings = w(l, i), this.index = this.settings.startAt
            }
            return i(t, [{
                key: "mount",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this._e.emit("mount.before"), v(t) ? this._c = y(this, t, this._e) : f("You need to provide a object on `mount()`"), this._e.emit("mount.after"), this
                }
            }, {
                key: "mutate",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return g(t) ? this._t = t : f("You need to provide a array on `mutate()`"), this
                }
            }, {
                key: "update",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.settings = w(this.settings, t), t.hasOwnProperty("startAt") && (this.index = t.startAt), this._e.emit("update"), this
                }
            }, {
                key: "go",
                value: function(t) {
                    return this._c.Run.make(t), this
                }
            }, {
                key: "move",
                value: function(t) {
                    return this._c.Transition.disable(), this._c.Move.make(t), this
                }
            }, {
                key: "destroy",
                value: function() {
                    return this._e.emit("destroy"), this
                }
            }, {
                key: "play",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return t && (this.settings.autoplay = t), this._e.emit("play"), this
                }
            }, {
                key: "pause",
                value: function() {
                    return this._e.emit("pause"), this
                }
            }, {
                key: "disable",
                value: function() {
                    return this.disabled = !0, this
                }
            }, {
                key: "enable",
                value: function() {
                    return this.disabled = !1, this
                }
            }, {
                key: "on",
                value: function(t, e) {
                    return this._e.on(t, e), this
                }
            }, {
                key: "isType",
                value: function(t) {
                    return this.settings.type === t
                }
            }, {
                key: "settings",
                get: function() {
                    return this._o
                },
                set: function(t) {
                    v(t) ? this._o = t : f("Options must be an `object` instance.")
                }
            }, {
                key: "index",
                get: function() {
                    return this._i
                },
                set: function(t) {
                    this._i = d(t)
                }
            }, {
                key: "type",
                get: function() {
                    return this.settings.type
                }
            }, {
                key: "disabled",
                get: function() {
                    return this._d
                },
                set: function(t) {
                    this._d = !!t
                }
            }]), t
        }();

    function S() {
        return (new Date).getTime()
    }

    function H(t, e, n) {
        var i, r, o, s, a = 0;
        n || (n = {});
        var u = function() {
                a = !1 === n.leading ? 0 : S(), i = null, s = t.apply(r, o), i || (r = o = null)
            },
            c = function() {
                var c = S();
                a || !1 !== n.leading || (a = c);
                var l = e - (c - a);
                return r = this, o = arguments, l <= 0 || l > e ? (i && (clearTimeout(i), i = null), a = c, s = t.apply(r, o), i || (r = o = null)) : i || !1 === n.trailing || (i = setTimeout(u, l)), s
            };
        return c.cancel = function() {
            clearTimeout(i), a = 0, i = r = o = null
        }, c
    }
    var O = {
        ltr: ["marginLeft", "marginRight"],
        rtl: ["marginRight", "marginLeft"]
    };

    function T(t) {
        if (t && t.parentNode) {
            for (var e = t.parentNode.firstChild, n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
        return []
    }

    function x(t) {
        return !!(t && t instanceof window.HTMLElement)
    }
    var A = '[data-glide-el="track"]';
    var j = function() {
        function t() {
            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            e(this, t), this.listeners = n
        }
        return i(t, [{
            key: "on",
            value: function(t, e, n) {
                var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                h(t) && (t = [t]);
                for (var r = 0; r < t.length; r++) this.listeners[t[r]] = n, e.addEventListener(t[r], this.listeners[t[r]], i)
            }
        }, {
            key: "off",
            value: function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                h(t) && (t = [t]);
                for (var i = 0; i < t.length; i++) e.removeEventListener(t[i], this.listeners[t[i]], n)
            }
        }, {
            key: "destroy",
            value: function() {
                delete this.listeners
            }
        }]), t
    }();
    var R = ["ltr", "rtl"],
        P = {
            ">": "<",
            "<": ">",
            "=": "="
        };

    function C(t, e) {
        return {
            modify: function(t) {
                return e.Direction.is("rtl") ? -t : t
            }
        }
    }

    function M(t, e) {
        return {
            modify: function(t) {
                var n = Math.floor(t / e.Sizes.slideWidth);
                return t + e.Gaps.value * n
            }
        }
    }

    function z(t, e) {
        return {
            modify: function(t) {
                return t + e.Clones.grow / 2
            }
        }
    }

    function E(t, e) {
        return {
            modify: function(n) {
                if (t.settings.focusAt >= 0) {
                    var i = e.Peek.value;
                    return v(i) ? n - i.before : n - i
                }
                return n
            }
        }
    }

    function L(t, e) {
        return {
            modify: function(n) {
                var i = e.Gaps.value,
                    r = e.Sizes.width,
                    o = t.settings.focusAt,
                    s = e.Sizes.slideWidth;
                return "center" === o ? n - (r / 2 - s / 2) : n - s * o - i * o
            }
        }
    }
    var D = !1;
    try {
        var B = Object.defineProperty({}, "passive", {
            get: function() {
                D = !0
            }
        });
        window.addEventListener("testPassive", null, B), window.removeEventListener("testPassive", null, B)
    } catch (t) {}
    var W = D,
        q = ["touchstart", "mousedown"],
        I = ["touchmove", "mousemove"],
        V = ["touchend", "touchcancel", "mouseup", "mouseleave"],
        G = ["mousedown", "mousemove", "mouseup", "mouseleave"];
    var F = '[data-glide-el^="controls"]',
        N = "".concat(F, ' [data-glide-dir*="<"]'),
        Y = "".concat(F, ' [data-glide-dir*=">"]');

    function X(t) {
        return v(t) ? (e = t, Object.keys(e).sort().reduce((function(t, n) {
            return t[n] = e[n], t[n], t
        }), {})) : (f("Breakpoints option must be an object"), {});
        var e
    }
    var K = {
            Html: function(t, e, n) {
                var i = {
                    mount: function() {
                        this.root = t.selector, this.track = this.root.querySelector(A), this.collectSlides()
                    },
                    collectSlides: function() {
                        this.slides = Array.prototype.slice.call(this.wrapper.children).filter((function(e) {
                            return !e.classList.contains(t.settings.classes.slide.clone)
                        }))
                    }
                };
                return b(i, "root", {
                    get: function() {
                        return i._r
                    },
                    set: function(t) {
                        h(t) && (t = document.querySelector(t)), x(t) ? i._r = t : f("Root element must be a existing Html node")
                    }
                }), b(i, "track", {
                    get: function() {
                        return i._t
                    },
                    set: function(t) {
                        x(t) ? i._t = t : f("Could not find track element. Please use ".concat(A, " attribute."))
                    }
                }), b(i, "wrapper", {
                    get: function() {
                        return i.track.children[0]
                    }
                }), n.on("update", (function() {
                    i.collectSlides()
                })), i
            },
            Translate: function(t, e, n) {
                var i = {
                    set: function(n) {
                        var i = function(t, e, n) {
                                var i = [M, z, E, L].concat(t._t, [C]);
                                return {
                                    mutate: function(r) {
                                        for (var o = 0; o < i.length; o++) {
                                            var s = i[o];
                                            p(s) && p(s().modify) ? r = s(t, e, n).modify(r) : f("Transformer should be a function that returns an object with `modify()` method")
                                        }
                                        return r
                                    }
                                }
                            }(t, e).mutate(n),
                            r = "translate3d(".concat(-1 * i, "px, 0px, 0px)");
                        e.Html.wrapper.style.mozTransform = r, e.Html.wrapper.style.webkitTransform = r, e.Html.wrapper.style.transform = r
                    },
                    remove: function() {
                        e.Html.wrapper.style.transform = ""
                    },
                    getStartIndex: function() {
                        var n = e.Sizes.length,
                            i = t.index,
                            r = t.settings.perView;
                        return e.Run.isOffset(">") || e.Run.isOffset("|>") ? n + (i - r) : (i + r) % n
                    },
                    getTravelDistance: function() {
                        var n = e.Sizes.slideWidth * t.settings.perView;
                        return e.Run.isOffset(">") || e.Run.isOffset("|>") ? -1 * n : n
                    }
                };
                return n.on("move", (function(r) {
                    if (!t.isType("carousel") || !e.Run.isOffset()) return i.set(r.movement);
                    e.Transition.after((function() {
                        n.emit("translate.jump"), i.set(e.Sizes.slideWidth * t.index)
                    }));
                    var o = e.Sizes.slideWidth * e.Translate.getStartIndex();
                    return i.set(o - e.Translate.getTravelDistance())
                })), n.on("destroy", (function() {
                    i.remove()
                })), i
            },
            Transition: function(t, e, n) {
                var i = !1,
                    r = {
                        compose: function(e) {
                            var n = t.settings;
                            return i ? "".concat(e, " 0ms ").concat(n.animationTimingFunc) : "".concat(e, " ").concat(this.duration, "ms ").concat(n.animationTimingFunc)
                        },
                        set: function() {
                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                            e.Html.wrapper.style.transition = this.compose(t)
                        },
                        remove: function() {
                            e.Html.wrapper.style.transition = ""
                        },
                        after: function(t) {
                            setTimeout((function() {
                                t()
                            }), this.duration)
                        },
                        enable: function() {
                            i = !1, this.set()
                        },
                        disable: function() {
                            i = !0, this.set()
                        }
                    };
                return b(r, "duration", {
                    get: function() {
                        var n = t.settings;
                        return t.isType("slider") && e.Run.offset ? n.rewindDuration : n.animationDuration
                    }
                }), n.on("move", (function() {
                    r.set()
                })), n.on(["build.before", "resize", "translate.jump"], (function() {
                    r.disable()
                })), n.on("run", (function() {
                    r.enable()
                })), n.on("destroy", (function() {
                    r.remove()
                })), r
            },
            Direction: function(t, e, n) {
                var i = {
                    mount: function() {
                        this.value = t.settings.direction
                    },
                    resolve: function(t) {
                        var e = t.slice(0, 1);
                        return this.is("rtl") ? t.split(e).join(P[e]) : t
                    },
                    is: function(t) {
                        return this.value === t
                    },
                    addClass: function() {
                        e.Html.root.classList.add(t.settings.classes.direction[this.value])
                    },
                    removeClass: function() {
                        e.Html.root.classList.remove(t.settings.classes.direction[this.value])
                    }
                };
                return b(i, "value", {
                    get: function() {
                        return i._v
                    },
                    set: function(t) {
                        R.indexOf(t) > -1 ? i._v = t : f("Direction value must be `ltr` or `rtl`")
                    }
                }), n.on(["destroy", "update"], (function() {
                    i.removeClass()
                })), n.on("update", (function() {
                    i.mount()
                })), n.on(["build.before", "update"], (function() {
                    i.addClass()
                })), i
            },
            Peek: function(t, e, n) {
                var i = {
                    mount: function() {
                        this.value = t.settings.peek
                    }
                };
                return b(i, "value", {
                    get: function() {
                        return i._v
                    },
                    set: function(t) {
                        v(t) ? (t.before = d(t.before), t.after = d(t.after)) : t = d(t), i._v = t
                    }
                }), b(i, "reductor", {
                    get: function() {
                        var e = i.value,
                            n = t.settings.perView;
                        return v(e) ? e.before / n + e.after / n : 2 * e / n
                    }
                }), n.on(["resize", "update"], (function() {
                    i.mount()
                })), i
            },
            Sizes: function(t, e, n) {
                var i = {
                    setupSlides: function() {
                        for (var t = "".concat(this.slideWidth, "px"), n = e.Html.slides, i = 0; i < n.length; i++) n[i].style.width = t
                    },
                    setupWrapper: function() {
                        e.Html.wrapper.style.width = "".concat(this.wrapperSize, "px")
                    },
                    remove: function() {
                        for (var t = e.Html.slides, n = 0; n < t.length; n++) t[n].style.width = "";
                        e.Html.wrapper.style.width = ""
                    }
                };
                return b(i, "length", {
                    get: function() {
                        return e.Html.slides.length
                    }
                }), b(i, "width", {
                    get: function() {
                        return e.Html.track.offsetWidth
                    }
                }), b(i, "wrapperSize", {
                    get: function() {
                        return i.slideWidth * i.length + e.Gaps.grow + e.Clones.grow
                    }
                }), b(i, "slideWidth", {
                    get: function() {
                        return i.width / t.settings.perView - e.Peek.reductor - e.Gaps.reductor
                    }
                }), n.on(["build.before", "resize", "update"], (function() {
                    i.setupSlides(), i.setupWrapper()
                })), n.on("destroy", (function() {
                    i.remove()
                })), i
            },
            Gaps: function(t, e, n) {
                var i = {
                    apply: function(t) {
                        for (var n = 0, i = t.length; n < i; n++) {
                            var r = t[n].style,
                                o = e.Direction.value;
                            r[O[o][0]] = 0 !== n ? "".concat(this.value / 2, "px") : "", n !== t.length - 1 ? r[O[o][1]] = "".concat(this.value / 2, "px") : r[O[o][1]] = ""
                        }
                    },
                    remove: function(t) {
                        for (var e = 0, n = t.length; e < n; e++) {
                            var i = t[e].style;
                            i.marginLeft = "", i.marginRight = ""
                        }
                    }
                };
                return b(i, "value", {
                    get: function() {
                        return d(t.settings.gap)
                    }
                }), b(i, "grow", {
                    get: function() {
                        return i.value * e.Sizes.length
                    }
                }), b(i, "reductor", {
                    get: function() {
                        var e = t.settings.perView;
                        return i.value * (e - 1) / e
                    }
                }), n.on(["build.after", "update"], H((function() {
                    i.apply(e.Html.wrapper.children)
                }), 30)), n.on("destroy", (function() {
                    i.remove(e.Html.wrapper.children)
                })), i
            },
            Move: function(t, e, n) {
                var i = {
                    mount: function() {
                        this._o = 0
                    },
                    make: function() {
                        var t = this,
                            i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        this.offset = i, n.emit("move", {
                            movement: this.value
                        }), e.Transition.after((function() {
                            n.emit("move.after", {
                                movement: t.value
                            })
                        }))
                    }
                };
                return b(i, "offset", {
                    get: function() {
                        return i._o
                    },
                    set: function(t) {
                        i._o = m(t) ? 0 : d(t)
                    }
                }), b(i, "translate", {
                    get: function() {
                        return e.Sizes.slideWidth * t.index
                    }
                }), b(i, "value", {
                    get: function() {
                        var t = this.offset,
                            n = this.translate;
                        return e.Direction.is("rtl") ? n + t : n - t
                    }
                }), n.on(["build.before", "run"], (function() {
                    i.make()
                })), i
            },
            Clones: function(t, e, n) {
                var i = {
                    mount: function() {
                        this.items = [], t.isType("carousel") && (this.items = this.collect())
                    },
                    collect: function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                            i = e.Html.slides,
                            r = t.settings,
                            o = r.perView,
                            s = r.classes,
                            a = r.cloningRatio;
                        if (0 !== i.length)
                            for (var u = +!!t.settings.peek, c = o + u + Math.round(o / 2), l = i.slice(0, c).reverse(), f = i.slice(-1 * c), d = 0; d < Math.max(a, Math.floor(o / i.length)); d++) {
                                for (var h = 0; h < l.length; h++) {
                                    var v = l[h].cloneNode(!0);
                                    v.classList.add(s.slide.clone), n.push(v)
                                }
                                for (var p = 0; p < f.length; p++) {
                                    var m = f[p].cloneNode(!0);
                                    m.classList.add(s.slide.clone), n.unshift(m)
                                }
                            }
                        return n
                    },
                    append: function() {
                        for (var t = this.items, n = e.Html, i = n.wrapper, r = n.slides, o = Math.floor(t.length / 2), s = t.slice(0, o).reverse(), a = t.slice(-1 * o).reverse(), u = "".concat(e.Sizes.slideWidth, "px"), c = 0; c < a.length; c++) i.appendChild(a[c]);
                        for (var l = 0; l < s.length; l++) i.insertBefore(s[l], r[0]);
                        for (var f = 0; f < t.length; f++) t[f].style.width = u
                    },
                    remove: function() {
                        for (var t = this.items, n = 0; n < t.length; n++) e.Html.wrapper.removeChild(t[n])
                    }
                };
                return b(i, "grow", {
                    get: function() {
                        return (e.Sizes.slideWidth + e.Gaps.value) * i.items.length
                    }
                }), n.on("update", (function() {
                    i.remove(), i.mount(), i.append()
                })), n.on("build.before", (function() {
                    t.isType("carousel") && i.append()
                })), n.on("destroy", (function() {
                    i.remove()
                })), i
            },
            Resize: function(t, e, n) {
                var i = new j,
                    r = {
                        mount: function() {
                            this.bind()
                        },
                        bind: function() {
                            i.on("resize", window, H((function() {
                                n.emit("resize")
                            }), t.settings.throttle))
                        },
                        unbind: function() {
                            i.off("resize", window)
                        }
                    };
                return n.on("destroy", (function() {
                    r.unbind(), i.destroy()
                })), r
            },
            Build: function(t, e, n) {
                var i = {
                    mount: function() {
                        n.emit("build.before"), this.typeClass(), this.activeClass(), n.emit("build.after")
                    },
                    typeClass: function() {
                        e.Html.root.classList.add(t.settings.classes.type[t.settings.type])
                    },
                    activeClass: function() {
                        var n = t.settings.classes,
                            i = e.Html.slides[t.index];
                        i && (i.classList.add(n.slide.active), T(i).forEach((function(t) {
                            t.classList.remove(n.slide.active)
                        })))
                    },
                    removeClasses: function() {
                        var n = t.settings.classes,
                            i = n.type,
                            r = n.slide;
                        e.Html.root.classList.remove(i[t.settings.type]), e.Html.slides.forEach((function(t) {
                            t.classList.remove(r.active)
                        }))
                    }
                };
                return n.on(["destroy", "update"], (function() {
                    i.removeClasses()
                })), n.on(["resize", "update"], (function() {
                    i.mount()
                })), n.on("move.after", (function() {
                    i.activeClass()
                })), i
            },
            Run: function(t, e, n) {
                var i = {
                    mount: function() {
                        this._o = !1
                    },
                    make: function(i) {
                        var r = this;
                        t.disabled || (!t.settings.waitForTransition || t.disable(), this.move = i, n.emit("run.before", this.move), this.calculate(), n.emit("run", this.move), e.Transition.after((function() {
                            r.isStart() && n.emit("run.start", r.move), r.isEnd() && n.emit("run.end", r.move), r.isOffset() && (r._o = !1, n.emit("run.offset", r.move)), n.emit("run.after", r.move), t.enable()
                        })))
                    },
                    calculate: function() {
                        var e = this.move,
                            n = this.length,
                            r = e.steps,
                            o = e.direction,
                            s = 1;
                        if ("=" === o) return t.settings.bound && d(r) > n ? void(t.index = n) : void(t.index = r);
                        if (">" !== o || ">" !== r)
                            if ("<" !== o || "<" !== r) {
                                if ("|" === o && (s = t.settings.perView || 1), ">" === o || "|" === o && ">" === r) {
                                    var a = function(e) {
                                        var n = t.index;
                                        if (t.isType("carousel")) return n + e;
                                        return n + (e - n % e)
                                    }(s);
                                    return a > n && (this._o = !0), void(t.index = function(e, n) {
                                        var r = i.length;
                                        if (e <= r) return e;
                                        if (t.isType("carousel")) return e - (r + 1);
                                        if (t.settings.rewind) return i.isBound() && !i.isEnd() ? r : 0;
                                        if (i.isBound()) return r;
                                        return Math.floor(r / n) * n
                                    }(a, s))
                                }
                                if ("<" === o || "|" === o && "<" === r) {
                                    var u = function(e) {
                                        var n = t.index;
                                        if (t.isType("carousel")) return n - e;
                                        return (Math.ceil(n / e) - 1) * e
                                    }(s);
                                    return u < 0 && (this._o = !0), void(t.index = function(e, n) {
                                        var r = i.length;
                                        if (e >= 0) return e;
                                        if (t.isType("carousel")) return e + (r + 1);
                                        if (t.settings.rewind) return i.isBound() && i.isStart() ? r : Math.floor(r / n) * n;
                                        return 0
                                    }(u, s))
                                }
                                f("Invalid direction pattern [".concat(o).concat(r, "] has been used"))
                            } else t.index = 0;
                        else t.index = n
                    },
                    isStart: function() {
                        return t.index <= 0
                    },
                    isEnd: function() {
                        return t.index >= this.length
                    },
                    isOffset: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                        return t ? !!this._o && ("|>" === t ? "|" === this.move.direction && ">" === this.move.steps : "|<" === t ? "|" === this.move.direction && "<" === this.move.steps : this.move.direction === t) : this._o
                    },
                    isBound: function() {
                        return t.isType("slider") && "center" !== t.settings.focusAt && t.settings.bound
                    }
                };
                return b(i, "move", {
                    get: function() {
                        return this._m
                    },
                    set: function(t) {
                        var e = t.substr(1);
                        this._m = {
                            direction: t.substr(0, 1),
                            steps: e ? d(e) ? d(e) : e : 0
                        }
                    }
                }), b(i, "length", {
                    get: function() {
                        var n = t.settings,
                            i = e.Html.slides.length;
                        return this.isBound() ? i - 1 - (d(n.perView) - 1) + d(n.focusAt) : i - 1
                    }
                }), b(i, "offset", {
                    get: function() {
                        return this._o
                    }
                }), i
            },
            Swipe: function(t, e, n) {
                var i = new j,
                    r = 0,
                    o = 0,
                    s = 0,
                    a = !1,
                    u = !!W && {
                        passive: !0
                    },
                    c = {
                        mount: function() {
                            this.bindSwipeStart()
                        },
                        start: function(e) {
                            if (!a && !t.disabled) {
                                this.disable();
                                var i = this.touches(e);
                                r = null, o = d(i.pageX), s = d(i.pageY), this.bindSwipeMove(), this.bindSwipeEnd(), n.emit("swipe.start")
                            }
                        },
                        move: function(i) {
                            if (!t.disabled) {
                                var a = t.settings,
                                    u = a.touchAngle,
                                    c = a.touchRatio,
                                    l = a.classes,
                                    f = this.touches(i),
                                    h = d(f.pageX) - o,
                                    v = d(f.pageY) - s,
                                    p = Math.abs(h << 2),
                                    m = Math.abs(v << 2),
                                    g = Math.sqrt(p + m),
                                    y = Math.sqrt(m);
                                if (!(180 * (r = Math.asin(y / g)) / Math.PI < u)) return !1;
                                i.stopPropagation(), e.Move.make(h * parseFloat(c)), e.Html.root.classList.add(l.dragging), n.emit("swipe.move")
                            }
                        },
                        end: function(i) {
                            if (!t.disabled) {
                                var s = t.settings,
                                    a = s.perSwipe,
                                    u = s.touchAngle,
                                    c = s.classes,
                                    l = this.touches(i),
                                    f = this.threshold(i),
                                    d = l.pageX - o,
                                    h = 180 * r / Math.PI;
                                this.enable(), d > f && h < u ? e.Run.make(e.Direction.resolve("".concat(a, "<"))) : d < -f && h < u ? e.Run.make(e.Direction.resolve("".concat(a, ">"))) : e.Move.make(), e.Html.root.classList.remove(c.dragging), this.unbindSwipeMove(), this.unbindSwipeEnd(), n.emit("swipe.end")
                            }
                        },
                        bindSwipeStart: function() {
                            var n = this,
                                r = t.settings,
                                o = r.swipeThreshold,
                                s = r.dragThreshold;
                            o && i.on(q[0], e.Html.wrapper, (function(t) {
                                n.start(t)
                            }), u), s && i.on(q[1], e.Html.wrapper, (function(t) {
                                n.start(t)
                            }), u)
                        },
                        unbindSwipeStart: function() {
                            i.off(q[0], e.Html.wrapper, u), i.off(q[1], e.Html.wrapper, u)
                        },
                        bindSwipeMove: function() {
                            var n = this;
                            i.on(I, e.Html.wrapper, H((function(t) {
                                n.move(t)
                            }), t.settings.throttle), u)
                        },
                        unbindSwipeMove: function() {
                            i.off(I, e.Html.wrapper, u)
                        },
                        bindSwipeEnd: function() {
                            var t = this;
                            i.on(V, e.Html.wrapper, (function(e) {
                                t.end(e)
                            }))
                        },
                        unbindSwipeEnd: function() {
                            i.off(V, e.Html.wrapper)
                        },
                        touches: function(t) {
                            return G.indexOf(t.type) > -1 ? t : t.touches[0] || t.changedTouches[0]
                        },
                        threshold: function(e) {
                            var n = t.settings;
                            return G.indexOf(e.type) > -1 ? n.dragThreshold : n.swipeThreshold
                        },
                        enable: function() {
                            return a = !1, e.Transition.enable(), this
                        },
                        disable: function() {
                            return a = !0, e.Transition.disable(), this
                        }
                    };
                return n.on("build.after", (function() {
                    e.Html.root.classList.add(t.settings.classes.swipeable)
                })), n.on("destroy", (function() {
                    c.unbindSwipeStart(), c.unbindSwipeMove(), c.unbindSwipeEnd(), i.destroy()
                })), c
            },
            Images: function(t, e, n) {
                var i = new j,
                    r = {
                        mount: function() {
                            this.bind()
                        },
                        bind: function() {
                            i.on("dragstart", e.Html.wrapper, this.dragstart)
                        },
                        unbind: function() {
                            i.off("dragstart", e.Html.wrapper)
                        },
                        dragstart: function(t) {
                            t.preventDefault()
                        }
                    };
                return n.on("destroy", (function() {
                    r.unbind(), i.destroy()
                })), r
            },
            Anchors: function(t, e, n) {
                var i = new j,
                    r = !1,
                    o = !1,
                    s = {
                        mount: function() {
                            this._a = e.Html.wrapper.querySelectorAll("a"), this.bind()
                        },
                        bind: function() {
                            i.on("click", e.Html.wrapper, this.click)
                        },
                        unbind: function() {
                            i.off("click", e.Html.wrapper)
                        },
                        click: function(t) {
                            o && (t.stopPropagation(), t.preventDefault())
                        },
                        detach: function() {
                            if (o = !0, !r) {
                                for (var t = 0; t < this.items.length; t++) this.items[t].draggable = !1;
                                r = !0
                            }
                            return this
                        },
                        attach: function() {
                            if (o = !1, r) {
                                for (var t = 0; t < this.items.length; t++) this.items[t].draggable = !0;
                                r = !1
                            }
                            return this
                        }
                    };
                return b(s, "items", {
                    get: function() {
                        return s._a
                    }
                }), n.on("swipe.move", (function() {
                    s.detach()
                })), n.on("swipe.end", (function() {
                    e.Transition.after((function() {
                        s.attach()
                    }))
                })), n.on("destroy", (function() {
                    s.attach(), s.unbind(), i.destroy()
                })), s
            },
            Controls: function(t, e, n) {
                var i = new j,
                    r = !!W && {
                        passive: !0
                    },
                    o = {
                        mount: function() {
                            this._n = e.Html.root.querySelectorAll('[data-glide-el="controls[nav]"]'), this._c = e.Html.root.querySelectorAll(F), this._arrowControls = {
                                previous: e.Html.root.querySelectorAll(N),
                                next: e.Html.root.querySelectorAll(Y)
                            }, this.addBindings()
                        },
                        setActive: function() {
                            for (var t = 0; t < this._n.length; t++) this.addClass(this._n[t].children)
                        },
                        removeActive: function() {
                            for (var t = 0; t < this._n.length; t++) this.removeClass(this._n[t].children)
                        },
                        addClass: function(e) {
                            var n = t.settings,
                                i = e[t.index];
                            i && i && (i.classList.add(n.classes.nav.active), T(i).forEach((function(t) {
                                t.classList.remove(n.classes.nav.active)
                            })))
                        },
                        removeClass: function(e) {
                            var n = e[t.index];
                            n && n.classList.remove(t.settings.classes.nav.active)
                        },
                        setArrowState: function() {
                            if (!t.settings.rewind) {
                                var n = o._arrowControls.next,
                                    i = o._arrowControls.previous;
                                this.resetArrowState(n, i), 0 === t.index && this.disableArrow(i), t.index === e.Run.length && this.disableArrow(n)
                            }
                        },
                        resetArrowState: function() {
                            for (var e = t.settings, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                            i.forEach((function(t) {
                                t.forEach((function(t) {
                                    t.classList.remove(e.classes.arrow.disabled)
                                }))
                            }))
                        },
                        disableArrow: function() {
                            for (var e = t.settings, n = arguments.length, i = new Array(n), r = 0; r < n; r++) i[r] = arguments[r];
                            i.forEach((function(t) {
                                t.forEach((function(t) {
                                    t.classList.add(e.classes.arrow.disabled)
                                }))
                            }))
                        },
                        addBindings: function() {
                            for (var t = 0; t < this._c.length; t++) this.bind(this._c[t].children)
                        },
                        removeBindings: function() {
                            for (var t = 0; t < this._c.length; t++) this.unbind(this._c[t].children)
                        },
                        bind: function(t) {
                            for (var e = 0; e < t.length; e++) i.on("click", t[e], this.click), i.on("touchstart", t[e], this.click, r)
                        },
                        unbind: function(t) {
                            for (var e = 0; e < t.length; e++) i.off(["click", "touchstart"], t[e])
                        },
                        click: function(t) {
                            W || "touchstart" !== t.type || t.preventDefault();
                            var n = t.currentTarget.getAttribute("data-glide-dir");
                            e.Run.make(e.Direction.resolve(n))
                        }
                    };
                return b(o, "items", {
                    get: function() {
                        return o._c
                    }
                }), n.on(["mount.after", "move.after"], (function() {
                    o.setActive()
                })), n.on(["mount.after", "run"], (function() {
                    o.setArrowState()
                })), n.on("destroy", (function() {
                    o.removeBindings(), o.removeActive(), i.destroy()
                })), o
            },
            Keyboard: function(t, e, n) {
                var i = new j,
                    r = {
                        mount: function() {
                            t.settings.keyboard && this.bind()
                        },
                        bind: function() {
                            i.on("keyup", document, this.press)
                        },
                        unbind: function() {
                            i.off("keyup", document)
                        },
                        press: function(n) {
                            var i = t.settings.perSwipe;
                            39 === n.keyCode && e.Run.make(e.Direction.resolve("".concat(i, ">"))), 37 === n.keyCode && e.Run.make(e.Direction.resolve("".concat(i, "<")))
                        }
                    };
                return n.on(["destroy", "update"], (function() {
                    r.unbind()
                })), n.on("update", (function() {
                    r.mount()
                })), n.on("destroy", (function() {
                    i.destroy()
                })), r
            },
            Autoplay: function(t, e, n) {
                var i = new j,
                    r = {
                        mount: function() {
                            this.enable(), this.start(), t.settings.hoverpause && this.bind()
                        },
                        enable: function() {
                            this._e = !0
                        },
                        disable: function() {
                            this._e = !1
                        },
                        start: function() {
                            var i = this;
                            this._e && (this.enable(), t.settings.autoplay && m(this._i) && (this._i = setInterval((function() {
                                i.stop(), e.Run.make(">"), i.start(), n.emit("autoplay")
                            }), this.time)))
                        },
                        stop: function() {
                            this._i = clearInterval(this._i)
                        },
                        bind: function() {
                            var t = this;
                            i.on("mouseover", e.Html.root, (function() {
                                t._e && t.stop()
                            })), i.on("mouseout", e.Html.root, (function() {
                                t._e && t.start()
                            }))
                        },
                        unbind: function() {
                            i.off(["mouseover", "mouseout"], e.Html.root)
                        }
                    };
                return b(r, "time", {
                    get: function() {
                        var n = e.Html.slides[t.index].getAttribute("data-glide-autoplay");
                        return d(n || t.settings.autoplay)
                    }
                }), n.on(["destroy", "update"], (function() {
                    r.unbind()
                })), n.on(["run.before", "swipe.start", "update"], (function() {
                    r.stop()
                })), n.on(["pause", "destroy"], (function() {
                    r.disable(), r.stop()
                })), n.on(["run.after", "swipe.end"], (function() {
                    r.start()
                })), n.on(["play"], (function() {
                    r.enable(), r.start()
                })), n.on("update", (function() {
                    r.mount()
                })), n.on("destroy", (function() {
                    i.destroy()
                })), r
            },
            Breakpoints: function(t, e, n) {
                var i = new j,
                    r = t.settings,
                    o = X(r.breakpoints),
                    s = Object.assign({}, r),
                    a = {
                        match: function(t) {
                            if (void 0 !== window.matchMedia)
                                for (var e in t)
                                    if (t.hasOwnProperty(e) && window.matchMedia("(max-width: ".concat(e, "px)")).matches) return t[e];
                            return s
                        }
                    };
                return Object.assign(r, a.match(o)), i.on("resize", window, H((function() {
                    t.settings = w(r, a.match(o))
                }), t.settings.throttle)), n.on("update", (function() {
                    o = X(o), s = Object.assign({}, r)
                })), n.on("destroy", (function() {
                    i.off("resize", window)
                })), a
            }
        },
        J = function(t) {
            ! function(t, e) {
                if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                t.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: t,
                        writable: !0,
                        configurable: !0
                    }
                }), e && o(t, e)
            }(s, t);
            var n = a(s);

            function s() {
                return e(this, s), n.apply(this, arguments)
            }
            return i(s, [{
                key: "mount",
                value: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return c(r(s.prototype), "mount", this).call(this, Object.assign({}, K, t))
                }
            }]), s
        }(k);
    return J
}));

var supportItemPhone = document.getElementById("#support-item-phone");
supportItemPhone && supportItemPhone.addEventListener("click", function() {
    var e = document.querySelector(".header-secondary");
    e.classList.add("header-secondary--green"), setTimeout(function() {
        e.removeClass("header-secondary--green")
    }, 1e3)
}), document.addEventListener("DOMContentLoaded", function() {
    new Glide("#home-reviews-slider", {
        type: "slider",
        startAt: 0,
        perView: 4,
        perSwipe: "|",
        gap: 10,
        bound: !0,
        breakpoints: {
            640: {
                perView: 1
            }
        }
    }).mount()
}, !1);