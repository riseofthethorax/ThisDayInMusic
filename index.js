/* This code has been generated from your interaction model by skillinator.io

/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

// There are three sections, Text Strings, Skill Code, and Helper Function(s).
// You can copy and paste the contents as the code for a new Lambda function, using the alexa-skill-kit-sdk-factskill template.
// This code includes helper functions for compatibility with versions of the SDK prior to 1.0.9, which includes the dialog directives.



 // 1. Text strings =====================================================================================================
 //    Modify these strings and messages to change the behavior of your Lambda function



let reprompt;
let speechOutput = "n/a";
let repromptSpeech = "sample re-prompt text";
// 2. Skill Code =======================================================================================================
"use strict";
const Alexa = require('alexa-sdk');
const http = require('http');
const APP_ID = '__YOUR__APP_ID__HERE';  // TODO replace with your app ID (OPTIONAL).
   	
   	/*
function xfnv1a(k) {
    for(var i = 0, h = 2166136261 >>> 0; i < k.length; i++)
        h = Math.imul(h ^ k.charCodeAt(i), 16777619);
    return function() {
        h += h << 13; h ^= h >>> 7;
        h += h << 3;  h ^= h >>> 17;
        return (h += h << 5) >>> 0;
    };
	}

		var rand_date= new Date();
		var rand_date_seed = rand_date.getMilliseconds() + (rand_date.getSeconds() * 1000);
		var aRandomNumber = (xfnv1a(rand_date_seed))();
	*/	
		var a='',data='', el='';

var forWhatDate = '';
console.log('Starting out here.');

    	function forDayGetThis(timestamp) {
    		http.get('http://www.chann3lz.com/json_eh.php?qt_srt=songpos&b_year=1990&b_mon=09&b_day=17&e_year=1990' 
    		+ '&e_mon=09&e_day=24&qt_sng=first&song=&qt_art=first&artist=&mode=json', (resp) => {
				
				console.log("here 1");

    			// A chunk of data has been recieved.
    			resp.on('data', (chunk) => {
    				//this.emit(':say', 'whats going down honky');
        			data += chunk;
    			});
    		
    			console.log("here 2");
    			// The whole response has been received. Print out the result.
    			resp.on('end', () => {
        			//console.log(JSON.parse(data).explanation);
        			//console.log("response: %j", JSON.parse(data));
            		a = Object.values(JSON.parse(data));
            		return data;
            		//a.forEach(logArrayElements);
    			});

    		}).on("error", (err) => {
    			//console.log("Error: " + err.message);
    			return err.message;
    		});
   		}
  

function useData(data){
	console.log("response: %j", JSON.parse(data));
}

function belchError(errmessage) { 
	console.log("response: %j", errmessage);
}


function getMusicInfo(theParticularDate, callback){
	
		
	    //aRandomNumber = xfnv1a(seed);
	    var urlPath = '/json_eh.php?overide_with_date=' + theParticularDate + '&qt_srt=songpos&b_year=1990&b_mon=09&b_day=17&e_year=1990' 
    		+ '&e_mon=09&e_day=24&qt_sng=first&song=&qt_art=first&artist=&mode=json';
    	 var currentTime = new Date();
    	var hours = currentTime.getHours();
    	var minutes = currentTime.getMinutes();
    	var seconds = currentTime.getSeconds();
    	var milliseconds = currentTime.getMilliseconds();
		urlPath='/' + ((hours * 24 * 60 * 1000) + (minutes * 60 * 1000) + (seconds * 1000) + milliseconds).toString() + urlPath;
		/*
		'Cache-Control': 'private, no-cache, no-store, must-revalidate'
'Expires': '-1'
'Pragma': 'no-cache'

		*/
		
		var counter = 0;
		var options = {host:'www.chann3lz.com',path:urlPath,headers:{'Cache-Control':'private, no-cache, no-store, must-revalidate','Expires':'-1','Pragma':'no-cache'}};
		console.log('The url specified %j',options);
		http.get(options, (resp) => {
				
				console.log("here 1");

    			// A chunk of data has been recieved.
    			resp.on('data', (chunk) => {
    				if (counter == 0){ data = ''};
    				counter++;
    				//this.emit(':say', 'whats going down honky');
        			data += chunk;
    			});
    		
    			console.log("here 2");
    			// The whole response has been received. Print out the result.
    			resp.on('end', () => {
        			//console.log(JSON.parse(data).explanation);
        			console.log("BEFORE JSON PARSE: data=%j", data);
        			var hmm = data.replace(/\}\}(\{.*)/i, "$1"); // for some reason this appends the correct json on the end of the first.. 
        			data = hmm;
            		var a = JSON.parse(data);
            		console.log("AFTER JSON PARSE: a=%j", a);
            		
            		function traverse (obj, cback, trail) {
						trail = trail || [];
					  Object.keys(obj).forEach(function (key) {
    					var value = obj[key];
					    if (Object.getPrototypeOf(value) === Object.prototype) {
    					  traverse(value, cback, trail.concat(key));
    					} else {
    						cback.call(obj, key, value, trail);
    					}
					 });
					}

					var formonth = {Jan : 'January', Feb : 'February', Mar : 'March',
					Apr : 'April', May : 'May', Jun : 'June', Jul : 'July',
					Aug : 'August', Sep :'September', Oct:'October', Nov: 'November', Dec: 'December'};
					var band = '',month='',year='',rank = '', song = '', myresult = '';
					traverse(a, function (key, value, trail) {
						 console.log("output %s",key);
						 switch(key){
						 	case "year":
						 		year = value;
						 		break;
						 	case "month":
						 		month = value;
						 		break;
						 	case "band":
						 		band = value;
						 		break;
						 	case "song":
						 		song = value;
						 		myresult +=
						 		" <break time='250ms' /> on " + formonth[month] + " <break time='250ms' /> " + year + " <break time='250ms' /> " 
						 		+ " <emphasis level='moderate'> " + band + "'s song <break time='500ms'/> " + song 
        						+ " </emphasis><break time='500ms'/>  Hit number " + rank + ".<break time='250ms'/>"; 
        					    //myresult = myresult.replace(/\'/i, "");
        						myresult = myresult.replace(/\&/i, " and ");
						 		break;
						 	case "rank":
						 		rank = value;
						 		break;
						 	default:
						 	break;
						 } 
					});
    				
    				console.log("SpeechOutput: %s", myresult);	
            		return callback(myresult);
            		
            		//return callback(JSON.parse(data));
            		//a.forEach(logArrayElements);
    			});

    		}).on("error", (err) => {
    			//console.log("Error: " + err.message);
    			return err.message;
    		});
}
   

const handlers = {
	'LaunchRequest': function () {
		
		//gm.handler();
		//var promise = forDayGetThis(1);
		console.log("WHERE AM I");		
		//this.emit(':ask', welcomeOutput, welcomeReprompt);
		this.emit(':ask',"Welcome to this day in music history, specify any day between 1947 and 2010 inclusive.","just say the word for! and follow it with a date in a format such as january fifth 1984");
		//promise.then(null,null);
		
	},
    'Inspiration': function () {
        var speechOutput = 'n/a';
        var text = 'n/a';
        var self = this;
        getMusicInfo(forWhatDate, function (data){
        	
            if(data == ''){
            	speechOutput = "Please try again later";
            	console.log("error response: %j", data);
            }
            else{
            	speechOutput = 'For <say-as interpret-as="date"> ' + forWhatDate + ' </say-as> ';
            	console.log("correct response: %j", data);
            }
            //self.emit(':tellWithCard', (speechOutput + data), "This Day In Music", (forWhatDate + " " + data));
            self.emit(':ask', (speechOutput + data), "Specify a date");
            //speechOutput = "Specify another date.";
		    //self.emit('LaunchRequest');
		    
		    
        });
    },
	'Speak': function () {
		this.emit(':tell','what it is my main man!');
	},
	'AMAZON.HelpIntent': function () {
		speechOutput = 'Specify a date for Alexa to search the music charts at EveryHit.com. Use a phrase such as "for January ninth 1979" and I will search the charts. Or say stop to end this session. .';
		reprompt = '';
		this.emit(':ask', speechOutput, reprompt);
	},
   'AMAZON.CancelIntent': function () {
		speechOutput = 'Cancelling';
		this.emit(':tell', speechOutput);
	},
   'AMAZON.StopIntent': function () {
		speechOutput = 'Goodbye and thank you for using this day in music history';
		this.emit(':tell', speechOutput);
   },
   'SessionEndedRequest': function () {
		speechOutput = '';
		//this.emit(':saveState',true);//uncomment to save attributes to db on session end
		this.emit(':tell', speechOutput);
   },
	'AMAZON.FallbackIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "I didn't catch that, specify a date and I will search everyhit.com for chart information.";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'AMAZON.NavigateHomeIntent': function () {
		speechOutput = '';

		//any intent slot variables are listed here for convenience


		//Your custom intent handling goes here
		speechOutput = "Anymore dates?";
		this.emit(":ask", speechOutput, speechOutput);
    },
	'OnThisDay': function () {
		//delegate to Alexa to collect all the required slot values
       //let filledSlots = delegateSlotCollection.call(this);
        
		//speechOutput = 'crap out';
		//any intent slot variables are listed here for convenience

        //const onThisDateSlotRaw = (this.event.request.intent.slots.onThisDate.value ? this.event.request.intent.slots.onThisDate.value : "n/a");
		let onThisDateSlotRaw = this.event.request.intent.slots.onThisDate.value;
		forWhatDate = onThisDateSlotRaw;
		//if (onThisDateSlotRaw == 'undefined') {
			//this.emit(':ask', "please restate the date or try a different date", "please specify your date");
			//this.emit('LaunchRequest');
		//}
		
		//console.log(onThisDateSlotRaw);
		//console.log("Session: %j", this.event.request.intent.slots.onThisDate);
		//console.log("Session: %j", GetMusic);
	    //let onThisDateSlot = resolveCanonical(this.event.request.intent.slots.onThisDate);
		//console.log(onThisDateSlot);
		

		//Your custom intent handling goes here
		//speechOutput = "Specify another date.";
		//this.emit(':ask', speechOutput, speechOutput);
		this.emit('Inspiration');
	},	
	'Unhandled': function () {
        speechOutput = "The skill didn't quite understand what you wanted.  Do you want to try something else?";
        this.emit(':ask', speechOutput, speechOutput);
    }
};

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
	//alexa.dynamoDBTableName='DYNAMODB_TABLE_NAME';//uncomment this line to save attributes to DB
    alexa.execute();
};
