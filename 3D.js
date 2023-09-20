(function () {
    var d = {
        menu: document.createElement("div"),
        limit: document.createElement("input"),
        gap: document.createElement("input"),
        sag: document.createElement("input"),
        fov: document.createElement("input"),
        flo: document.createElement("input"),
        off: document.createElement("input"),
        non: document.createElement("input"),
        end: document.createElement("input"),
        tgl: document.createElement("input"),
        cssStatic: document.createElement("style"),
        cssDynamic: document.createElement("style"),
        orientation: { yaw: 0, pitch: 0, roll: 0 },
        mouseMove: function (e) {
            d.orientation.yaw = 180 * -Math.cos(Math.PI * e.clientX / innerWidth) * d.limit.value,
            d.orientation.pitch = 180 * Math.cos(Math.PI * e.clientY / innerHeight) * d.limit.value,
            d.updateBody();
        },
        gyroMove: function (e) {
            innerWidth > innerHeight ? (
                d.orientation.yaw = -(e.alpha + e.beta),
                d.orientation.pitch = e.gamma - 90 * Math.sign(90 - Math.abs(e.beta))
            ) : (
                d.orientation.yaw = -(e.alpha + e.gamma),
                d.orientation.pitch = e.beta - 90
            );
            d.updateBody();
        },
        updateOrigin: function (e) {
            document.body.style.transformOrigin = innerWidth / 2 + pageXOffset + "px " + (innerHeight / 2 + pageYOffset) + "px";
        },
        updateBody: function () {
            document.body.style.transform = "perspective(" + Math.pow(2, d.fov.value) + "px) translateZ(-" + d.gap.value + "px) rotateX(" + d.orientation.pitch + "deg) rotateY(" + d.orientation.yaw + "deg)";
        },
        updateCSS: function () {
            if (d.non.checked) {
                d.cssDynamic.innerHTML = "";
            } else if (d.off.checked) {
                d.cssDynamic.innerHTML = "* { transform-style: preserve-3d; }";
            } else {
                for (var e = 0; document.querySelector("body" + " > *".repeat(e)); e++);
                var t = d.gap.value / e,
                    n = -Math.PI * d.sag.value / e;
                d.cssDynamic.innerHTML = ` * { transform: translateZ(${t}px) rotateX(${n}rad); transform-style: preserve-3d; transition: transform 1s; outline: 1px solid rgba(0, 0, 0, 0.0625); ${d.flo.checked ? "overflow: visible !important;" : ""} } *:hover { transform: translateZ(${2 * t}px) rotateX(${2 * n}rad); ${d.flo.checked ? "" : "overflow: visible;"} } `;
            }
        },
        toggle: function () {
            "active" == d.menu.className ? d.menu.removeAttribute("class") : d.menu.className = "active";
        },
        quit: function () {
            window.removeEventListener("deviceorientation", d.gyroMove),
            window.removeEventListener("mousemove", d.mouseMove),
            window.removeEventListener("scroll", d.updateOrigin),
            window.addEventListener("resize", d.updateOrigin),
            d.menu.remove(),
            d.cssStatic.remove(),
            d.cssDynamic.remove(),
            document.body.removeAttribute("style");
        },
        newRange: function (e, t, n, o, i, a, r) {
            d.menu.appendChild(e),
            e.type = "range",
            e.min = n,
            e.max = i,
            e.step = o,
            e.value = a,
            e.addEventListener("input", r),
            d.menu.appendChild(document.createElement("span")).innerHTML = t,
            d.menu.appendChild(document.createElement("br"));
        },
        newCheckbox: function (e, t, n) {
            d.menu.appendChild(e),
            e.type = "checkbox",
            e.addEventListener("click", n),
            d.menu.appendChild(document.createElement("span")).innerHTML = t,
            d.menu.appendChild(document.createElement("br"));
        },
        newButton: function (e, t, n) {
            d.menu.appendChild(e),
            e.type = "button",
            e.value = t,
            e.addEventListener("click", n);
        },
        init: function () {
            document.body.parentNode.appendChild(d.menu).id = "tri-menu",
            d.newRange(d.limit, "limit", 0, .03125, 1, .125, d.updateBody),
            d.newRange(d.gap, "gap / distance", 0, 32, 512, 128, function () {
                d.updateCSS(),
                d.updateBody();
            }),
            d.newRange(d.sag, "sag", -.25, .03125, .25, 0, d.updateCSS),
            d.newRange(d.fov, "field of view", 7, 1, 13, 10, d.updateBody),
            d.newCheckbox(d.flo, "force overflow", d.updateCSS),
            d.flo.setAttribute("checked", ""),
            d.newCheckbox(d.off, "flatten layers", d.updateCSS),
            d.newCheckbox(d.non, "flatten everything", d.updateCSS),
            d.newButton(d.end, "Quit", d.quit),
            d.newButton(d.tgl, "≡", d.toggle),
            d.tgl.id = "tri-toggle",
            d.menu.appendChild(d.cssStatic).innerHTML = ` html, body { transition-property: none; height: 100%25; width: 100%25; } html, html:hover, #tri-menu, #tri-menu > *, #tri-menu > *:hover { transform: none; outline: none; overflow: auto !important; float: none; } #tri-menu { position: fixed; top: 0; left: 0; background: rgba(0, 0, 0, 0.5); color: white; border: 1px solid rgba(255, 255, 255, 0.5);; border-radius: 0 0 16px 0; padding: 8px; transform: translate(-100%25, -100%25) translate(32px, 32px); } #tri-menu.active { transform: none; } #tri-toggle { position: absolute; bottom: 0; right: 0; height: 32px; width: 32px; background: transparent; color: white; border: none; cursor: pointer; } #tri-menu.active > #tri-toggle { background: white; color: black; border-radius: 8px 0 0 0; } `;
            d.menu.appendChild(d.cssDynamic),
            d.updateCSS(),
            window.addEventListener("deviceorientation", d.gyroMove),
            window.addEventListener("mousemove", d.mouseMove),
            window.addEventListener("scroll", d.updateOrigin),
            window.addEventListener("resize", d.updateOrigin),
            window.scrollBy(0, 1);
        }
    };
    d.init();
})();
