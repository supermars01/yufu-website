! function(t) {
    function e(n) {
        if (r[n]) return r[n].exports;
        var i = r[n] = {
            exports: {},
            id: n,
            loaded: !1
        };
        return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
    }
    var r = {};
    return e.m = t, e.c = r, e.p = "", e(0)
}({
    0: function(t, e, r) {
        t.exports = r(30)
    },
    7: function(t, e) {
        t.exports = jQuery
    },
    30: function(t, e, r) {
        "use strict";

        function n(t) {
            var e = "prev" === t ? "next" : "prev";
            o("#year a." + t).addClass("cur"), o("#year a." + e).removeClass("cur")
        }

        function i() {
            y.css("-webkit-transform", "translate3d(" + (f - 2) * b * -1 + "px,0,0)"), y.css("-moz-transform", "translate3d(" + (f - 2) * b * -1 + "px,0,0)"), y.css("transform", "translate3d(" + (f - 2) * b * -1 + "px,0,0)"), k.removeClass("sibling2").removeClass("sibling").removeClass("cur");
            var t = k.eq(f);
            t.addClass("cur"), t.prev().addClass("sibling"), t.prev().prev().addClass("sibling2"), t.next().addClass("sibling"), t.next().next().addClass("sibling2")
        }

        function s() {
            m.children("div").removeClass("cur").eq(f).addClass("cur")
        }

        function a(t, e) {
            t.css("-webkit-transform", "translate3d(" + (e - 1) * g * -1 + "px,0,0)"), t.css("-moz-transform", "translate3d(" + (e - 1) * g * -1 + "px,0,0)"), t.css("transform", "translate3d(" + (e - 1) * g * -1 + "px,0,0)")
        }
        var o = r(7),
            l = o("#year"),
            c = l.find("ul"),
            u = c.find("li"),
            p = u.length,
            h = u.width(),
            f = 2,
            d = !0,
            m = o("#content"),
            g = m.find(".cur li").width(),
            v = o("#pic"),
            y = v.find("ul"),
            k = y.find("li"),
            mg= k.find("img"),
            b = k.width();
        m.children("div").each(function(t) {
            var e = o(this),
                r = e.find(".date li").length,
                n = parseInt(e.data("select")),
                i = n - 1,
                s = n + 1;
            e.find(".date li").removeClass("cur").removeClass("sibling"), e.find(".date li:eq(" + n + ")").addClass("cur");
            var l = e.find(".date");
            i >= 0 && (l.find("li:eq(" + i + ")"), a(l, n)), r - 1 >= s && (l.find("li:eq(" + i + ")"), a(l, n))
        }), l.on("click", "li", function(t) {
            t.preventDefault();
            var e = o(this);
            if (!e.hasClass("cur")) {
                f = parseInt(e.attr("rel")), c.css("-webkit-transform", "translate3d(" + (f - 2) * -h + "px,0,0)"), c.css("-moz-transform", "translate3d(" + (f - 2) * -h + "px,0,0)"), c.css("transform", "translate3d(" + (f - 2) * -h + "px,0,0)");
                var r = l.find(".cur");
                u.removeClass("sibling"), u.removeClass("cur"), e.addClass("cur"), e.prev().addClass("sibling"), e.next().addClass("sibling"), i(), s();
                var a = f > parseInt(r.attr("rel")) ? "next" : "prev";
                n(a)
            }
        }), l.on("click", ".prev", function(t) {
            if (d = !1, t.preventDefault(), f > 0) {
                f--, c.css("-webkit-transform", "translate3d(" + (f - 2) * h * -1 + "px,0,0)"), c.css("-moz-transform", "translate3d(" + (f - 2) * h * -1 + "px,0,0)"), c.css("transform", "translate3d(" + (f - 2) * h * -1 + "px,0,0)"), u.removeClass("sibling").removeClass("cur");
                var e = u.eq(f);
                e.addClass("cur"), e.prev().addClass("sibling"), e.next().addClass("sibling"), i(), s(), n("prev")
            }
            d = !0
        }), l.on("click", ".next", function(t) {
            if (t.preventDefault(), p - 1 > f) {
                f++, c.css("-webkit-transform", "translate3d(" + (f - 2) * h * -1 + "px,0,0)"), c.css("-moz-transform", "translate3d(" + (f - 2) * h * -1 + "px,0,0)"), c.css("transform", "translate3d(" + (f - 2) * h * -1 + "px,0,0)"), u.removeClass("sibling").removeClass("cur");
                var e = u.eq(f);
                e.addClass("cur"), e.prev().addClass("sibling"), e.next().addClass("sibling"), i(), s(), n("next")
            }
            // 添加图片点击轮播功能
        }),v.on("click", "img", function(t) {
            t.preventDefault();
            var e = o(this);
            var index = e.attr("rel");
            if (!u.eq(index).hasClass("cur")) {
                f = parseInt(e.attr("rel")), c.css("-webkit-transform", "translate3d(" + (f - 2) * -h + "px,0,0)"), c.css("-moz-transform", "translate3d(" + (f - 2) * -h + "px,0,0)"), c.css("transform", "translate3d(" + (f - 2) * -h + "px,0,0)");
                var r = l.find(".cur");
                u.removeClass("sibling"), u.removeClass("cur"), u.eq(index).addClass("cur"), u.eq(index).prev().addClass("sibling"), u.eq(index).next().addClass("sibling"), i(), s();
                var a = f > parseInt(r.attr("rel")) ? "next" : "prev";
                n(a)
            }
        });
        var v = o("#pic"),
            y = v.find("ul"),
            k = y.find("li"),
            mg= k.find("img"),
            b = k.width();
        m.on("click", ".date li", function() {
            var t = o(this),
                e = t.parent(),
                r = e.parent(),
                n = parseInt(t.attr("rel"));
            e.css("-webkit-transform", "translate3d(" + (n - 1) * g * -1 + "px,0,0)"), e.css("-moz-transform", "translate3d(" + (n - 1) * g * -1 + "px,0,0)"), e.css("transform", "translate3d(" + (n - 1) * g * -1 + "px,0,0)"), e.find(".cur").removeClass("cur"), t.addClass("cur"), r.find(".txt .cur").removeClass("cur"), r.find(".txt li").eq(n).addClass("cur")
        }),c.find("li:eq(0)").click(), o(".banner").unslider({
            arrows: !1,
            fluid: !0,
            dots: !0
        }), o(".history").hover(function() {
            d = !1
        }, function() {
            d = !0
        })
    }
});