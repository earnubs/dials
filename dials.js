var ctx = document.querySelector('canvas').getContext('2d'),
width = ctx.canvas.width,
height = ctx.canvas.height;

ctx.translate(width/2 + 0.5, height / 2 + 0.5);
ctx.fillRect(0,0,3,3);



var Dial = function(options) {
    this.ctx = options.ctx;
    this.width = options.width;
    this.height = options.height || options.width;
};

Dial.prototype.markers = function(radius, theta, arc) {

    arc = arc || [1, 0, Math.PI * 2];

    this.ctx.save();
    for (var i = 0, extra, l = 360; i < l; i+=theta) {

        if (!(i % 10)) {
            extra = 30;
        } else if (!(i % 5)) {
            extra = 10;
        } else {
            extra = 5;
        }
        
        var rads = i * (Math.PI/180),
        

        x1 = Math.cos( rads ) * radius,
        y1 = Math.sin( rads ) * radius,
        x2 = Math.cos( rads ) * ( radius + extra ),
        y2 = Math.sin( rads ) * ( radius + extra );

        if (x1 < width || y1 < height) {
            //this.ctx.arc.apply(ctx, [x1, y1].concat(arc));
            this.ctx.moveTo(x1,y1);
            this.ctx.lineTo(x2,y2);
            this.ctx.stroke();
            this.ctx.beginPath();
        }
    }
    this.ctx.restore();
};

var foo = new Dial({ctx: ctx, width: 50});

foo.markers(170, 1);


//for (var i = 0, l = 360; i < l; i+=18) {
