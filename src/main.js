/**
 * Created by moyu on 2017/6/1.
 */
;(function (jQuery) {
    jQuery.moyuAlert = function (content, title) {
        var default_val = {
            content: 'default content',
            title: '提示'
        };
        var alert = $('#moyuAlert');
        // debugger;
        if (alert.length == 0) {
            var modal = '<div id="moyuAlert" class="modal fade in" tabindex="-1" role="dialog">' +
                '<div class="modal-dialog modal-sm "> ' +
                '<div class="modal-content vertical-grabber">' +
                '<div class="modal-header">' +
                '<button type="button" ' +
                'class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                '<h5 class="modal-title text-center">' + (title ? title : default_val.title) + '</h5>' +
                '</div>' +
                '<div class="modal-body"><p class="text-center text-info">' +
                (content ? content : default_val.content) +
                '</p></div>' +
                '<div class="modal-footer">' +
                '<button data-dismiss="modal" aria-label="Close" type="button" class="btn btn-primary btn-sm">' +
                '确认</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
            $('body').append(modal);
            $('#moyuAlert').modal({backdrop: 'static'});
        } else {
            alert.find('.modal-title').html((title ? title : default_val.title))
            alert.find('p').html((content ? content : default_val.content));
            alert.modal({backdrop: 'static'});
        }
        $(window).resize();
    };

    jQuery.moyuConfirm = function (content, onok, oncancel, title) {
        var default_val = {
            content: 'default content',
            title: '提示'
        };
        var confirm = $('#moyuConfirm');
        if (confirm.length == 0) {
            var modal = '<div id="moyuConfirm" class="modal fade in" tabindex="-1" role="dialog">' +
                '<div class="modal-dialog modal-sm "> ' +
                '<div class="modal-content vertical-grabber">' +
                '<div class="modal-header">' +
                '<button type="button"' +
                'role="moyu-cancel" ' +
                'class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>' +
                '<h5 class="modal-title text-center">' + (title ? title : default_val.title) + '</h5>' +
                '</div>' +
                '<div class="modal-body"><p class="text-center text-info">' +
                (content ? content : default_val.content) +
                '</p></div>' +
                '<div class="modal-footer">' +
                '<button role="moyu-ok" data-dismiss="modal" aria-label="Close" type="button" class="btn btn-success btn-sm">' +
                '确认</button>' +
                '<button role="moyu-cancel" data-dismiss="modal" aria-label="Close" type="button" class="btn btn-danger btn-sm">' +
                '取消</button>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
            $('body').append(modal);
            $('#moyuConfirm').modal({backdrop: 'static'})
        } else {
            confirm.find('.modal-title').html((title ? title : default_val.title))
            confirm.find('p').html((content ? content : default_val.content));
            confirm.modal({backdrop: 'static'});
        }
        $('[role=moyu-cancel]').click(function () {
            $(this).off('click');
            if (oncancel)
                oncancel();
        });
        $('[role=moyu-ok]').click(function () {
            $(this).off('click');
            if (onok)
                onok();
        });
        $(window).resize();
    };
})(jQuery)