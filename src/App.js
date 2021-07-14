import React, { Component } from 'react';
import { Fade } from '@material-ui/core';
import { connect } from "react-redux";
import './App.css';
import { dataFetchStatus } from "./actions/sagaActions";
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import CallIcon from '@material-ui/icons/Call';
import MicIcon from '@material-ui/icons/Mic';
import MicOffIcon from '@material-ui/icons/MicOff';
import CallEndIcon from '@material-ui/icons/CallEnd';
import { Typography } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import Button from "@material-ui/core/Button";
import { sipStart, sipCall, callMuteUnmute,callUnmute, answerCall, recordCall, hangupCall } from "./utils/sipUtil"; 
import outgoingCallStatus from './reducers/outgoingCallReducer';
const styles = (theme) => ({
  mainBackground: {
    background: '#39495E',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
  root: {
    flexGrow: 1,
  },
  buttonstyle: {
    marginLeft:"80vh",
    marginBottom:"4vh",
    background: '#7EC0EE',
    fontSize: "1.5vw",
    fontStyle: "bold",
    color : '#fff',
    height:"10vh",
    width: "50vh",
  },
  iconstyle: {
    marginLeft:"-11vh",
    height:"5vh",
    width: "10vh",
    color : '#fff'
  },
  buttonstyle2: {
    marginLeft:"70vh",
    background: '#FF0000',
    fontSize: "1vw",
    fontStyle: "bold",
    height:"10vh",
    width: "34vh",
  },
  buttonstyleCall: {
    marginLeft:"26vh",
    marginTop:"20vh",
    marginBottom:"4vh",
    background: '#00FF00',
    fontSize: "1vw",
    fontStyle: "bold",
    height:"10vh",
    width: "34vh",
  },
  buttonstyleHangup: {
    marginLeft:"26vh",
    marginTop:"20vh",
    background: '#FF0000',
    fontSize: "1vw",
    fontStyle: "bold",
    height:"10vh",
    width: "34vh",
  },
  buttonstyleMute: {
    marginLeft:"10vh",
    marginTop:"6vh",
    marginBottom:"4vh",
    background: '#7EC0EE',
    fontSize: "1vw",
    fontStyle: "bold",
    height:"10vh",
    width: "34vh",
  },
  buttonstyleUnmute: {
    marginLeft:"36vh",
    marginTop:"6vh",
    background: '#FF0000',
    fontSize: "1vw",
    fontStyle: "bold",
    height:"10vh",
    width: "34vh",
  },
  buttonstyle3: {
    background: ' #7EC0EE',
    marginLeft:"30vh",
    fontSize: "1vw",
    fontStyle: "bold",
    height:"10vh",
    width: "34vh",
  },
  card2: {
    borderRadius: 12,
    width: '85vh',
    height: '70vh',
    textAlign: "center",
    backgroundColor: "#10274f",
    
  },
  record: {
    fontSize: "1vw",
    fontStyle: "bold",
    marginTop : "-24vh",
    marginLeft : '34vh',
    color : "#7EC0EE"
  },

  
  box : {
    position: 'relative',
    width: '85vh',
    margin: '0 auto',
    height: '70vh',
    marginTop: '-15vh',
    background: '#10274f',
    borderRadius: '4px',
    padding: '20px',
    border: '1px solid #999',
  }
 
  
  
});



class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showPopup: false , showDialer : false};
  
	
  } 
  toggleDialer =() => {  
    this.setState({  
      showDialer : !this.state.showDialer,
    });  
  }; 
  togglePopup =() => {  
    this.setState({  
         showPopup: !this.state.showPopup,
    });  
  };
     RejectCall = () => {
       this.props.toggleIncomingCallStatus();
       this.togglePopup();
       hangupCall();
     }  
     CancelCall = () => {
      this.toggleDialer();
      hangupCall();
    }  
     answerIncomingCall =() => {
    this.props.toggleIncomingCallStatus();
       this.togglePopup();
       answerCall();
     }
  componentDidMount() {
    this.getUIConfiguration(); 
    this.props.toggleIncomingCallStatus();
  
}
componentDidUpdate()
{
  if(this.props.status && !this.state.showPopup)  {
    console.log("status here"+this.props.status);
    this.togglePopup()  
}
}
  getUIConfiguration = () => {
    const temp=
    {"virtualNumber": {
      "virtualNumber": "12813051177",
      "fullName": "12813051177",
      "sipUser": "12813051177",
      "sipToken": "L461X6UFYVE5OJ4S",
      "incomingNumber": "12813051177",
      "textractiveAgentId": "d4c06aedb55e4b469371ec0d8123e111"
    },
    "asteriskConfig": {
      "asteriskIp": "call-test2.highradius.com",
      "iceServers": "[{\"urls\":\"stun:global.stun.twilio.com:3478?transport\u003dudp\",\"url\":\"stun:global.stun.twilio.com:3478?transport\u003dudp\"},{\"urls\":\"turn:global.turn.twilio.com:3478?transport\u003dudp\",\"credential\":\"+8kqk9jx+fvQIyhz6z6SoB+sPkQvt5tOBkbXt5WKA0M\u003d\",\"url\":\"turn:global.turn.twilio.com:3478?transport\u003dudp\",\"username\":\"078a8c4d31cf1efbbf86d5c310914f96dc402fd8b6dbc07000ce2a3787a05409\"},{\"urls\":\"turn:global.turn.twilio.com:3478?transport\u003dtcp\",\"credential\":\"+8kqk9jx+fvQIyhz6z6SoB+sPkQvt5tOBkbXt5WKA0M\u003d\",\"url\":\"turn:global.turn.twilio.com:3478?transport\u003dtcp\",\"username\":\"078a8c4d31cf1efbbf86d5c310914f96dc402fd8b6dbc07000ce2a3787a05409\"},{\"urls\":\"turn:global.turn.twilio.com:443?transport\u003dtcp\",\"credential\":\"+8kqk9jx+fvQIyhz6z6SoB+sPkQvt5tOBkbXt5WKA0M\u003d\",\"url\":\"turn:global.turn.twilio.com:443?transport\u003dtcp\",\"username\":\"078a8c4d31cf1efbbf86d5c310914f96dc402fd8b6dbc07000ce2a3787a05409\"}]",
    },
  }
    console.log(temp.asteriskIp)
    console.log(temp.iceServers)
    console.log("in mounting")
    sipStart(temp.virtualNumber,temp.asteriskConfig);
    
  }
  Popup = (
    {
      classes,
    }
  ) => (
    <div>  
  <div className={classes.box}> 
              <div className={classes.card2}>
           <Typography>{this.props.number}</Typography>
           <Grid container spacing={3}>
					<Grid item xs={2} md={2} lg={2} xl={2} className={classes.grid1}>
          <Button className={classes.buttonstyle} onClick={this.answerIncomingCall}>Answer Call</Button>
          </Grid>
          <Grid item xs={2} md={2} lg={2} xl={2} className={classes.grid1}>
          <Button className={classes.buttonstyle2} onClick={this.RejectCall}>Decline</Button>
          </Grid>
          </Grid>
  
  </div>
  
  
          
            
  </div>  
  </div> 
  );
  Dialer = (
    {
      classes,
      vals,
      callState
    }
  ) => (
     
    <div>  
    
  <div className={classes.box}> 
              <div className={classes.card2}>
           <Typography>{this.props.number}</Typography>
           <Grid container spacing={3}>
           { (this.props.callStatus === "DISCONNECTED" || this.props.callStatus=== "ENDED") &&
					<Grid item xs={2} md={2} lg={2} xl={2} className={classes.grid1}>
         
          <Button className={classes.buttonstyleCall} onClick={() => sipCall("+917488081153")}>
          <CallIcon className ={classes.iconstyle}></CallIcon>Call Aditi </Button>
          </Grid>
           }
          { (this.props.callStatus === "PROGRESS"  || this.props.callStatus === "CONNECTING")&&
          <Grid item xs={2} md={2} lg={2} xl={2} className={classes.grid1}>
          <Button className={classes.buttonstyleHangup} onClick={this.CancelCall}>
          <CallEndIcon className ={classes.iconstyle}></CallEndIcon>
         End Call</Button>
          </Grid>
          }
          { this.props.callStatus === "CONNECTING" &&
          <div className="container">
          <div className="slide-right">
          <h6>{this.props.callStatus} your call</h6>
          </div>
          </div>
          }
          { this.props.callStatus == "PROGRESS" &&
          <div className="container">
          <div className="slide-right">
          <h6>RINGING....</h6>
          </div>
          </div>
          }
          { callState.includes(this.props.callStatus) &&
          <div className="container">
          <div className="slide-right">
          <h5>CONNECTED to Aditi..</h5>
          </div>
          </div>
          }
          { this.props.callStatus == "NEW_DTMF" &&
          <div className="container">
          <div className="slide-right">
          <h5>RECORDING this call</h5>
          </div>
          </div>
          }
          { this.props.callStatus == "ENDED" &&
          <div className="container">
          <div className="slide-right">
          <h6>CALL ENDED</h6>
          </div>
          {this.toggleDialer}
          </div>
          }
          { 
          vals.includes(this.props.callStatus) &&
          <Grid container spacing={3}>
          <Grid item xs={2} md={2} lg={2} xl={2} className={classes.grid1}>
          {this.props.callStatus==="MUTED" ? (
          <Button className={classes.buttonstyleMute} onClick={callMuteUnmute}>
            <MicOffIcon className ={classes.iconstyle}></MicOffIcon>
            UN-MUTE
            </Button>
          )
          :(
            <Button className={classes.buttonstyleMute} onClick={callMuteUnmute}>
            <MicIcon className ={classes.iconstyle}></MicIcon>
            MUTE
            </Button>

          )
        }
         
          </Grid>


          <Grid item xs={2} md={2} lg={2} xl={2} className={classes.grid1}>
          <Button className={classes.buttonstyleUnmute} onClick={this.CancelCall}>
          <CallEndIcon className ={classes.iconstyle}></CallEndIcon>
          End Call</Button>
          </Grid>
          </Grid>
          }
    
          </Grid>
  
  </div>
  
  
          
            
  </div>  
  </div> 
  );


   render() {
    const { classes } = this.props;
    var val = ["CONFIRMED", "MUTED", "UNMUTED", "NEW_DTMF"];
    var callState = ["CONFIRMED", "MUTED", "UNMUTED", ];
    return (
     
      <div className="App">
      <header className="App-header">
      <Grid container spacing={3}>
					<Grid item xs={2} md={2} lg={2} xl={2} className={classes.grid1}>
         
          <Button className={classes.buttonstyle} onClick={this.toggleDialer}>
          <CallIcon className ={classes.iconstyle}></CallIcon>
          Make a VOIP Call
          </Button>
        
          </Grid>
          </Grid>
          {this.state.showPopup ?  
<this.Popup classes={classes} />  
: null  
}   {this.state.showDialer ?  
<this.Dialer classes={classes} vals={val} callState={callState} />  
: null  
}  
          
         
      </header>
     
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  status: state.incomingCallStatus.status,
  number : state.incomingCallStatus.number,
  callStatus : state.outgoingCallStatus.status
});

const mapDispatchToProps = (dispatch) => ({
  toggleIncomingCallStatus: () => dispatch(dataFetchStatus({status: false,number : null})),
 
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles, { withTheme: true })(App));
