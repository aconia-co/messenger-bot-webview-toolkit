$(function() {
    var winH = $(window).height();
    var categorySpace = 10;

/*    $('.js_item').on('click', function() {
        var id = $(this).data('id');
        window.pageManager.go(id);
    });*/
    $('.js_category').on('click', function() {
        var $this = $(this),
            $inner = $this.next('.js_categoryInner'),
            $page = $this.parents('.page'),
            $parent = $(this).parent('li');
        var innerH = $inner.data('height');
        bear = $page;

        if (!innerH) {
            $inner.css('height', 'auto');
            innerH = $inner.height();
            $inner.removeAttr('style');
            $inner.data('height', innerH);
        }

        if ($parent.hasClass('js_show')) {
            $parent.removeClass('js_show');
        } else {
            $parent.siblings().removeClass('js_show');

            $parent.addClass('js_show');
            if (this.offsetTop + this.offsetHeight + innerH > $page.scrollTop() + winH) {
                var scrollTop = this.offsetTop + this.offsetHeight + innerH - winH + categorySpace;

                if (scrollTop > this.offsetTop) {
                    scrollTop = this.offsetTop - categorySpace;
                }

                $page.scrollTop(scrollTop);
            }
        }
    });
});