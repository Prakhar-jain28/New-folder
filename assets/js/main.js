! function() {
    var c = {},
        r = function() {
            var e = navigator.cookieEnabled;
            e || (document.cookie = "testcookie", e = -1 !== document.cookie.indexOf("testcookie"), document.cookie = "testcookie=1; expires=Thu, 01-Jan-1970 00:00:01 GMT");
            return e
        }();
    window.tpsLocalStorage = {
        set: function(t, o) {
            o = "" + o;
            try {
                localStorage.setItem(t, o)
            } catch (e) {
                r ? Cookies.set(t, o) : c[t] = o
            }
        },
        get: function(t) {
            try {
                return localStorage.getItem(t)
            } catch (e) {
                return r ? Cookies.get(t) : c[t]
            }
        },
        remove: function(t) {
            try {
                localStorage.removeItem(t)
            } catch (e) {
                r ? Cookies.remove(t) : delete c[t]
            }
        },
        has: function(t) {
            try {
                return Object.prototype.hasOwnProperty.call(localStorage, t)
            } catch (e) {
                return r ? Object.prototype.hasOwnProperty.call(Cookies.get(), t) : Object.prototype.hasOwnProperty.call(c, t)
            }
        }
    }
}();
! function() {
    document.querySelector("#menu-icon").addEventListener("click", function() {
        this.classList.contains("menu-open") ? (this.classList.remove("menu-open"), document.querySelector(".menu-mobile").classList.remove("menu-mobile--active"), document.querySelector(".site-header").classList.remove("site-header--active-menu")) : (this.classList.add("menu-open"), document.querySelector(".menu-mobile").classList.add("menu-mobile--active"), document.querySelector(".site-header").classList.add("site-header--active-menu"))
    });
    var e = document.querySelectorAll(".menu-service");

    function s(e) {
        var t = window.getComputedStyle(e),
            s = parseInt(t.marginTop, 10) || 0,
            i = parseInt(t.marginBottom, 10) || 0,
            n = parseInt(t.borderTopWidth, 10) || 0,
            t = parseInt(t.borderBottomWidth, 10) || 0;
        return e.clientHeight + s + i + n + t
    } [].forEach.call(e, function(e) {
        e.addEventListener("click", function() {
            this.classList.contains("menu-service--active") ? this.classList.remove("menu-service--active") : this.classList.add("menu-service--active");
            var e, t = this.querySelector(".menu-service__content");
            t.classList.contains("menu-service__slideup") ? (t.classList.remove("menu-service__slideup"), t.classList.add("menu-service__slidedown"), s(t.querySelector(".menu-service__button")), e = s(t.querySelector(".menu-service__items")), e = s(t.querySelector(".menu-service__button")) + e, t.style.maxHeight = e + "px") : (t.classList.remove("menu-service__slidedown"), t.classList.add("menu-service__slideup"), t.style.maxHeight = "0")
        })
    });
    e = document.querySelector("#state-flag");
    e && e.addEventListener("change", function() {
        document.querySelector("#state-flag-form").submit()
    })
}();