<div id="app"></div>
<script type="text/javascript" src="public/js/Chess.js"></script>
<script type="text/javascript">
    window.addEventListener('load', function() {
        if (typeof chessInst === 'object') {
            chessInst.renderBoard();
        }
    });
</script>