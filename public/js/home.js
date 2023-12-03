var manuBtn = document.getElementById("manuBtn")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right = "-250px"

manuBtn.onclick = function () {
    if (sideNav.style.right == "-250px") {
        sideNav.style.right = "0";
        menu.src = "https://cdn0.iconfinder.com/data/icons/action-1/24/61_-_Action_cancel_close_delete_exit_remove_x_icon-64.png"
    }
    else {
        sideNav.style.right = "-250px";
        menu.src = "https://t3.ftcdn.net/jpg/04/56/02/78/360_F_456027840_aOzePhpKuq4hIvr06NKBoJn9Mmo7lZV0.jpg"

    }


}