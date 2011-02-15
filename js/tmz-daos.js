snow.dm.registerDao("timeZone",(function(){

    var _timeZone = getTimeZone();
	
	function TimeZoneDao(){};
    
	// ------ DAO Generic CRUD Interface ------ //
	TimeZoneDao.prototype.get = function(objectType,city){
		var ret = null;
		if(getTimeZone()[city]){
			ret = JSON.parse(JSON.stringify(getTimeZone()[city]));
		}
		 
		return ret;
	};
	
	TimeZoneDao.prototype.find = function(objectType,opts){
		var ret = JSON.parse(JSON.stringify(getTimeZone()));
		return ret;
	};
	
	TimeZoneDao.prototype.save = function(objectType, data){
		var storeValue = getTimeZone()[data.city];
		if (!storeValue){
			storeValue = {};
			getTimeZone()[data.city] = storeValue;
		}
		
		var data = $.extend(storeValue,data);
		_timeZone.push(data);	
		localStorage.timeZone = JSON.stringify(_timeZone);
	};
	
	TimeZoneDao.prototype.remove = function(objectType,city){
		if (_TimeZone) {
			delete _TimeZone[city];
			saveTimeZone();
		}
	};
	// ------ /DAO Generic CRUD Interface ------ //
	
	function getTimeZone(){
		if (_timeZone == null){
			var timeZoneString = localStorage.getItem("timeZone");
			if (timeZoneString){
				_timeZone = JSON.parse(timeZoneString);
			}else{
				_timeZone = new Array();;
			}
		}
		return _timeZone;
		
	}
	
	return new TimeZoneDao();
	
})());
