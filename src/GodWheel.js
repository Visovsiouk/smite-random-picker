import React from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';

class GodWheel extends React.Component  {
	constructor(props) {
		super(props);
			this.state = { 
				gods: [],
                winningGod: ""
		    };
        this.componentDidUpdate = this.componentDidUpdate.bind(this);
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
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.width;
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        var outerRadius = (canvas.width / 2) - 1;
        var margin = 20 / 1.7;
        var pieAngle = 2 * Math.PI / segments;
        var segmentDepth = canvas.width / 2;
        var rotation = 360 / segments;
        
        //Setting text size depending on segments
        var text = "12px Trebuchet";
        if ( segments >= 80 ) {
            text = "12px Arial";
        } else if (segments < 80 && segments >= 60) {
            text = "14px Arial";
        } else if (segments < 60 && segments >= 30) {
            text = "20px Arial";
        } else if (segments < 30 && segments >= 10) {
            text = "20px Arial";
        } else if (segments < 10 && segments >= 2) {
            text = "20px Arial";
        } 

        //Creating an Array of Segment objects
        var segarray = new Array(null);
        for (var z = 0; z < gods.length; z++) {
            segarray[z] = new Segment(z);
        }

        //Creating a single Segment object
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
                var colorFill = '#21698c';
                var second = false;
                var third = false;
                for (var i = 0; i < segments; i++) {
                    context.beginPath();
                    context.moveTo(x, y);
                    context.arc(x, y, radius, i*pieAngle, (i+1)*pieAngle, false);
                    if (segments % 2 === 0) {
                        if (i % 2 === 0) {
                            context.fillStyle = '#3482a8';
                        } else {
                            context.fillStyle = '#f9b701';
                        } 
                    } else {
                        context.fillStyle = colorFill;
                        if (second !== true && third !== true) {
                            colorFill = '#3482a8';
                            second = true;
                        } else if (second === true) {
                            colorFill = '#f9b701';
                            second = false
                            third = true;
                        } else if (third === true) {
                            colorFill = '#fff';
                            third = false;
                        }
                        context.fillStyle = colorFill;
                    }
                    context.fill();
                }
                var flag = false;
                for (var j = 0; j < segments; j++) {
                    if (segments % 2 === 0) {
                        if (flag === false) {
                            context.save();
                            context.translate(x, y);
                            context.rotate((rotation / 3) * Math.PI / 180);
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
                        if (flag === false) {
                            context.save();
                            context.translate(x, y);
                            context.rotate((rotation - (rotation * 3)) / Math.PI / 180);
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
                    }
                }
            }   
        }

        init();    
        if (this.state.winningGod !== getIndicatedSegment()) {
            this.setState({winningGod: getIndicatedSegment()});
        }
    }
    
	render() {
		return (
            <Col className="Wheel-section" xs={12} >
                <h1>{this.state.winningGod}</h1>
                <canvas id='canvas' ref="canvas" height="800px">
                    Canvas not supported, use another browser.
                </canvas>
             </Col>
		)	
	}
}

export default GodWheel;