let header = document.getElementById("header");
window.onscroll = function(e) {
    window.scrollY > 10 ? header.classList.add("bgOn") : header.classList.remove("bgOn")
};
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(e) {
    "touchstart" === e.type && e.preventDefault(), document.getElementById("nav").classList.toggle("active")
}
btnMobile.addEventListener("click", toggleMenu), btnMobile.addEventListener("touchstart", toggleMenu);
const subMenu = document.getElementById("menu");

function openMenu(e) {
    document.getElementById("drop-down").classList.toggle("open-menu")
}
subMenu.addEventListener("click", openMenu), AOS.init({
    duration: 1e3,
    once: !0
});
let enviar_dados1 = function() {
    let e = [{
        id: $("#email1").val(),
        name: $("#name1").val(),
        email: $("#email1").val(),
        company: $("#company1").val(),
        mobile_phone: $("#mobile1").val(),
        title: $("#onde1").val(),
        last_conversion: {
            source: $("#origin").val() ? $("#origin").val() : "Lead Landing Page"
        },
        tags: ["Lead Landing Page", ]
    }];
    $.each(e[0], function(t, n) {
        "string" == typeof n && "" == n && delete e[0][t]
    }), $.ajax({
        type: "post",
        data: JSON.stringify({
            rules: {
                update: !0,
                equal_pipeline: !0,
                filter_status_update: "open"
            },
            leads: e
        }),
        dataType: "json",
        url: "https://app.pipe.run/webservice/integradorJson?hash=1c5844dc-0991-4638-b73f-39cb486315ea"
    }).done(function(e) {
        window.location.assign("/obrigado.html");
        let t = $("#result1 .alert-success"),
            n = $("#result1 .alert-danger");
        if (t.hide(), n.hide(), e.success) {
            if (console.log(e), e.data.id && e.data.id[0]) {
                let a = e.data.id[0],
                    i = $("<a>", {
                        text: "#" + a,
                        target: "_blank",
                        href: "https://app.pipe.run/pipeline/gerenciador/visualizar/" + a
                    });
                t.children("span").html(i), t.show(), gtag("event", "conversion", {
                    send_to: "AW-415385581/Jj9eCJKg_vgBEO2PicYB"
                })
            }
        } else console.log(e.errors), n.show()
    }).fail(function(e) {
        let t = $("#result1 .alert-success"),
            n = $("#result1 .alert-danger");
        t.hide(), n.show()
    })
};
$(document).ready(function() {
    $("#lead1").on("submit", function() {
        return enviar_dados1(), !1
    });
}), $(document).ready(function() {
    $("#mobile1").mask("(99) 99999-9999")
}); 