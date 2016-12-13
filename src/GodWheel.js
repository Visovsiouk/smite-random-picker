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
        //Getting data passed from other ReactJS components
        var gods = this.props.gods.map((god, i) => {
           return god;
	    });

        //Counting the gods array length
        var segments = gods.length;
    
        //Setting the canvas
        let canvas = ReactDOM.findDOMNode(this.refs.canvas),
        context = canvas.getContext("2d");
        canvas.style.width ='100%';
        canvas.width  = canvas.offsetWidth;
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        var outerRadius = (canvas.width / 2) - 1;
        var margin = 20 / 1.7;
        var pieAngle = 2 * Math.PI / segments;
        var segmentDepth = canvas.width / 2;
        var rawAngle = 0;
        var rotation = 360 / segments;
        
        //Setting text size and place depending on segments
        var text = "12px Trebuchet";
        var correctionAngle = 90 / segments;
        if ( segments >= 80 ) {
            text = "12px Arial";
            correctionAngle = 90 / segments;
        } else if (segments < 80 && segments >= 60) {
            text = "14px Arial";
            correctionAngle = 60 / segments;
        } else if (segments < 60 && segments >= 30) {
            text = "20px Arial";
            correctionAngle = 30 / segments;
        } else if (segments < 30 && segments >= 10) {
            text = "20px Arial";
            correctionAngle = 14 / segments;
        } else if (segments < 10 && segments >= 2) {
            text = "20px Arial";
            correctionAngle = 0;
        } 

        //Creating an array of segments
        var segarray = new Array(null);
        for (var z = 0; z < gods.length; z++) {
            segarray[z] = new Segment(z);
        }

        function Segment(id) {
            var startAngle = id * rotation;
            var endAngle = ( id + 1 ) * rotation;

            return {
                    "id" : id,
                    "texts": gods[id],
                    "startAngle": startAngle,
                    "endAngle": endAngle,
            };
        }

        function getIndicatedSegment() {
            var prizeNumber = getIndicatedSegmentNumber();
            console.log(segarray[prizeNumber].texts);
            return segarray[prizeNumber].texts;
        }

        function getIndicatedSegmentNumber() {
            var indicatedPrize = 0;
            var relativeAngle = 0;
            for (var a = 1; a < segments; a ++) {
                if ((relativeAngle >= segarray[a].startAngle) && (relativeAngle <= segarray[a].endAngle)) {
                    indicatedPrize = a;
                    break;
                }
            }
            return indicatedPrize;
        }

        function init() {
            drawSegments(segmentDepth);
            getIndicatedSegment();
        }

        function drawSegments(radius) {
            if (segments > 1) {
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
                            context.rotate((rotation  - (rotation / 2)) * Math.PI / 180);
                            context.translate(-x, -y);    
                            flag = true;
                        }
                        context.beginPath();
                        context.moveTo(x, y);
                        context.fillStyle = '#000000';
                        context.font = text;
                        context.fillText(segarray[j].texts, x - outerRadius + margin, y);
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
                        context.fillText(segarray[j].texts, x - outerRadius + margin, y);
                        context.fill();
                        context.save();
                        context.translate(x, y);
                        context.rotate(rotation * Math.PI / 180);
                        context.translate(-x, -y);
                    }
                }
            }   
        }

        

        init();
    }
	render() {
		return (
            <Col className="Wheel-section" xs={12} >
                <canvas id='canvas' ref="canvas" height="800px">
                    Canvas not supported, use another browser.
                </canvas>
             </Col>
		)	
	}
}

export default GodWheel;