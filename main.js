(function(){
        self.Board = function(width,height) {
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bars = [];
        this.ball = null;
    };

    self.Board.prototype = {

        get elements(){
            var elements = this.bars;
            elements.push(this.ball);
            return elements;
        },
    };
})();

function main(){

}