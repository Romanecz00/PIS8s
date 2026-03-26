// подсветка поста при наведении
$('.one-post').hover(
    function(event) {
        $(event.currentTarget)
            .find('.one-post-shadow-box')
            .animate({ opacity: '1' }, 300);
    },
    function(event) {
        $(event.currentTarget)
            .find('.one-post-shadow-box')
            .animate({ opacity: '0.7' }, 300);
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
