<div id="app"></div>
<script type="text/javascript" src="public/js/Chess.js"></script>
<script type="text/javascript">
    window.addEventListener('load', function() {
        if (typeof chessInst === 'object') {
            chessInst.renderBoard();
        }
    });
</script>
<?php if($view->test === '1'): ?>
    <script type="text/javascript" src="public/js/ChessStepValidator.js"></script>
    <script type="text/javascript" src="public/js/Chess.test.js"></script>
<?php endif;