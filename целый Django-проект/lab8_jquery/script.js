// подсветка поста при наведении
$(".post").hover(
    function() {
        $(this).css("background", "#e0f0ff");
    },
    function() {
        $(this).css("background", "white");
    }
);

// покачивание логотипа при наведении
$("#logo").hover(
	function() {
        $(this).css("transform", "rotate(-20deg)");
    },
    function() {
        $(this).css("transform", "scale(0.8,0.8)");
    },
    function() {
        $(this).css("transform", "rotate(0deg)");
    }
);
