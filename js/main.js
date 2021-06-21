$(document).ready(function () {

    SyntaxHighlighter.defaults['toolbar'] = false;
    SyntaxHighlighter.all();

    // click to copy

    let copyAlertMsg = function () {

        let alertMsg = `
            <div class="alert alert-success" role="alert" style="height:100px;">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <center><strong>Text Copied!</strong> </center>
            </div>
         `;
         $('#wrapper').append(alertMsg);

         window.setTimeout(function() {
            $(".alert").fadeTo(500, 0).slideUp(500, function(){
                $(this).remove(); 
            });
        }, 4000);
    };


    $('.copy-button').click( function() {
        console.log('copy')
        let elem = `#${$(this).data().target}`;
        var $temp = $("<input>");
        $("body").append($temp);
        console.log(`elem => ${elem}`)
        console.log(document.getElementById("spot-snippet").textContent)
        console.log(`${$(elem).textContent}`)
        $temp.val($(elem).text()).select();
        document.execCommand("copy");
        $temp.remove();
    });

    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        $temp.remove();
    }















    $('.click-to-copy').css('float', 'right');
    $('.click-to-copy').css('background', '#F0475A');
    $('.click-to-copy').css('font-weight', 'bolder');
    $('.click-to-copy').css('color', 'white');
    $('.click-to-copy').css('border-radius', '5px');
    $('.click-to-copy').css('margin-bottom', '5px');
    $('.click-to-copy').css('border', '2px solid #f0475a');

});