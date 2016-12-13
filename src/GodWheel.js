import React from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';

class GodWheel extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 
				gods: []
		    };
	}
    componentDidUpdate() {
        var gods = this.props.gods.map((god, i) => {
           return god;
	    }); 
        var segments = gods.length;
        var text = "12px Trebuchet";
        let canvas = ReactDOM.findDOMNode(this.refs.canvas),
        context = canvas.getContext("2d");
        canvas.style.width ='100%';
        canvas.width  = canvas.offsetWidth;

        var x = canvas.width / 2;
        var y = canvas.height / 2;
        var outerRadius = (canvas.width / 2) - 1;
        var margin = 20 / 1.7;

        // size of a pie : it is an angle in radians
        var pieAngle = 2 * Math.PI / segments;

        // how thick you want a segment
        var segmentDepth = canvas.width / 2;
        

        if ( segments >= 80 ) {
            text = "12px Arial";
        } else if (segments < 80 && segments >= 60) {
            text = "14px Arial";
        } else {
            text = "20px Arial";
        }

        function init() {
            drawSegments(segmentDepth);
        }

        function drawSegments(radius) {
            if (segments > 1) {
                var rotation = 360 / segments;
                for (var i = 0; i < segments; i++) {
                    context.beginPath();
                    context.moveTo(x, y);
                    context.arc(x, y, radius, i*pieAngle, (i+1)*pieAngle, false);
                    context.lineWidth = segmentDepth;
                    var hueValue = i * 15;
                    context.fillStyle = 'hsl(' + hueValue + ',70%, 60%)';
                    context.fill();
                }
                var flag = false;
                for (var j = 0; j < segments; j++) {
                    if (segments % 2 === 0) {
                        if (flag === false) {
                            context.save();
                            context.translate(x, y);
                            context.rotate((rotation / 2 ) * Math.PI / 180);
                            context.translate(-x, -y);    
                            flag = true;
                        }
                        context.beginPath();
                        context.moveTo(x, y);
                        context.fillStyle = '#000000';
                        context.font = text;
                        context.fillText(gods[j], x - outerRadius + margin, y);
                        context.fill();
                        context.save();
                        context.translate(x, y);
                        context.rotate(rotation * Math.PI / 180);
                        context.translate(-x, -y);    
                    } else {
                        context.beginPath();
                        context.moveTo(x, y);
                        context.fillStyle = '#000000';
                        context.font = text;
                        context.fillText(gods[j], x - outerRadius + margin, y);
                        context.fill();
                        context.save();
                        context.translate(x, y);
                        context.rotate(rotation * Math.PI / 180);
                        context.translate(-x, -y);
                    }
                }
            }   
        }

        // start drawing our chart
        init();
    }
	render() {
        var gods = this.props.gods.map((god, i) => {
            return (
                <Col xs={3} key={i}>
                    <div className="Pushed-god">{god}</div>
                </Col>
            )
	    }); 
		return (
            <Col className="Wheel-section" xs={12} >
                <canvas id='canvas' ref="canvas" height="800px">
                    Canvas not supported, use another browser.
                </canvas>
                <div>
                    {gods}
                </div>
             </Col>
		)	
	}
}

export default GodWheel;