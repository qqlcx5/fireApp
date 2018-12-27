const hosturl = "http://223.247.144.84:81/bh/";

const token_key = "box999";
var token = null;
var pushlistapp=null;

export default {
	hosturl,
	pushlistapp,
	checklogin,
	setLocalData,
	token,
	getLocalData,
	getPush,
	checkJsonStatus
}

function checklogin() {
	uni.getStorage({
		key: "token",
		success: function(res) {
			console.log("success" + res.data);

		},
		fail: function(res) {
			console.log("checklogin:fail:" + res.data);
			try {
				uni.clearStorageSync();
				uni.reLaunch({
					url: '../login/login'
				})
			} catch (e) {
				// error
			}
		}
	})

}

function checkJsonStatus(status) {
	if (status == -999 || status == -444) {
		try {
			uni.clearStorageSync();
			uni.reLaunch({
				url: '/pages/login/login'
			})
		} catch (e) {
			// error
		}
		return;
	}
}

function setLocalData(key, value) {
	try {
		uni.setStorageSync(key, value);
	} catch (e) {
		// error
	}
}

function getLocalData(_key) {
	try {
		const value = uni.getStorageSync(_key);
		if (value) {
			return value;
		}
	} catch (e) {
		return null;
	}
}

function getLocalDataSync(_key) {
	try {
		const value = uni.getStorageSync(_key);
		if (value) {
			return value;
		}
	} catch (e) {
		return null;
	}
}

function getPush() {
	
	let user=uni.getStorageSync("USERS_KEY");
	if(user=="" || user==null)
	{
		pushlistapp==null;
		return
		
	}
	user=JSON.parse(user);

	let uuid=plus.device.uuid;
	let that=this;
	uni.request({
		url: hosturl+"push/getpush.html",
		method: "POST",
		data: {
			uuid:uuid,
			token:user.token
		},
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		success: function(res) {

			//console.log(JSON.stringify(res.data))
			if (res.data.code == 0) {

				that.pushlistapp=res.data.list ;

			} else {
				return;
			}
		},
		fail: function() {
			return;
		}
	})
}



function insertlist(pushid) {
	
	let uuid=plus.device.uuid;
	uni.request({
		url: hosturl+"push/insertlist.html",
		method: "POST",
		data: {
			uuid:uuid,
			pushid:pushid
		},
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		success: function(res) {

			//console.log(JSON.stringify(res.data))
			if (res.data.code == 0) {

				

			} else {
				return;
			}
		},
		fail: function() {
			return;
		}
	})
}
