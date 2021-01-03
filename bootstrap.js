/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + ".bootstrap.js"
/******/ 	}
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
/******/
/******/ 	function promiseResolve() { return Promise.resolve(); }
/******/
/******/ 	var wasmImportObjects = {
/******/ 		"../../pkg/allotize_bg.wasm": function() {
/******/ 			return {
/******/ 				"./allotize_bg.js": {
/******/ 					"__wbindgen_json_parse": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_json_parse"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_json_serialize": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_json_serialize"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_object_drop_ref": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_object_drop_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_app_new": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_app_new"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_object_clone_ref": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_object_clone_ref"](p0i32);
/******/ 					},
/******/ 					"__wbg_setInterval_064d54ad300c68e5": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_setInterval_064d54ad300c68e5"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_clearInterval_87b186c82564d272": function(p0f64) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_clearInterval_87b186c82564d272"](p0f64);
/******/ 					},
/******/ 					"__wbindgen_string_new": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_string_new"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_is_undefined": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_is_undefined"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_cb_drop": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_cb_drop"](p0i32);
/******/ 					},
/******/ 					"__wbindgen_jsval_eq": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_jsval_eq"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_3a746f2619705add": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_new_3a746f2619705add"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_f54d3a6dadb199ca": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_call_f54d3a6dadb199ca"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_self_ac379e780a0d8b94": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_self_ac379e780a0d8b94"](p0i32);
/******/ 					},
/******/ 					"__wbg_crypto_1e4302b85d4f64a2": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_crypto_1e4302b85d4f64a2"](p0i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_1b4ba144162a5c9e": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_getRandomValues_1b4ba144162a5c9e"](p0i32);
/******/ 					},
/******/ 					"__wbg_require_6461b1e9a0d7c34a": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_require_6461b1e9a0d7c34a"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getRandomValues_1ef11e888e5228e9": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_getRandomValues_1ef11e888e5228e9"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_randomFillSync_1b52c8482374c55b": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_randomFillSync_1b52c8482374c55b"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_log_b2c20b2aba5ff102": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_log_b2c20b2aba5ff102"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_instanceof_Window_747b56d25bab9510": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_instanceof_Window_747b56d25bab9510"](p0i32);
/******/ 					},
/******/ 					"__wbg_indexedDB_7cf65ef1f512aaa7": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_indexedDB_7cf65ef1f512aaa7"](p0i32);
/******/ 					},
/******/ 					"__wbg_open_1c0c887e5b23b879": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_open_1c0c887e5b23b879"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_candidate_ab35fbb7abf466ac": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_candidate_ab35fbb7abf466ac"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_a4b3dc2d1a799d3f": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_new_a4b3dc2d1a799d3f"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_initCustomEvent_83634df967d32f16": function(p0i32,p1i32,p2i32,p3i32,p4i32,p5i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_initCustomEvent_83634df967d32f16"](p0i32,p1i32,p2i32,p3i32,p4i32,p5i32);
/******/ 					},
/******/ 					"__wbg_instanceof_IdbRequest_2a4c4012cba50c94": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_instanceof_IdbRequest_2a4c4012cba50c94"](p0i32);
/******/ 					},
/******/ 					"__wbg_result_a0844c824c55f688": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_result_a0844c824c55f688"](p0i32);
/******/ 					},
/******/ 					"__wbg_readyState_9c81af4a6e226676": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_readyState_9c81af4a6e226676"](p0i32);
/******/ 					},
/******/ 					"__wbg_setonsuccess_b47441069cea719b": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_setonsuccess_b47441069cea719b"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setonerror_bbc2e57e95dd59a8": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_setonerror_bbc2e57e95dd59a8"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_candidate_a4853d00f6ad46fc": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_candidate_a4853d00f6ad46fc"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_sdpMid_d1bdbc3112307fe9": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_sdpMid_d1bdbc3112307fe9"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_target_198c16eb4b6da88a": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_target_198c16eb4b6da88a"](p0i32);
/******/ 					},
/******/ 					"__wbg_sdp_bda225054142ae55": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_sdp_bda225054142ae55"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newwithdescriptioninitdict_deff19131d3e90ee": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_newwithdescriptioninitdict_deff19131d3e90ee"](p0i32);
/******/ 					},
/******/ 					"__wbg_new_59c23ff6fec41491": function() {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_new_59c23ff6fec41491"]();
/******/ 					},
/******/ 					"__wbg_addEventListener_e5949bba9b1b8ba7": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_addEventListener_e5949bba9b1b8ba7"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_dispatchEvent_51acfae1448b5096": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_dispatchEvent_51acfae1448b5096"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setonicecandidate_4fea37cc62767ba6": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_setonicecandidate_4fea37cc62767ba6"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setondatachannel_a4e8ac74c7559189": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_setondatachannel_a4e8ac74c7559189"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newwithconfiguration_d0e58d3c28441e3d": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_newwithconfiguration_d0e58d3c28441e3d"](p0i32);
/******/ 					},
/******/ 					"__wbg_addIceCandidate_7887f7d5e4e13c89": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_addIceCandidate_7887f7d5e4e13c89"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createAnswer_714bec89d1ff9ddd": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_createAnswer_714bec89d1ff9ddd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_createDataChannel_a695861c421e7fce": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_createDataChannel_a695861c421e7fce"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_createOffer_93450c6142e69b8e": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_createOffer_93450c6142e69b8e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setLocalDescription_becf02f39d9ad41e": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_setLocalDescription_becf02f39d9ad41e"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setRemoteDescription_4f10d6f07ea1b6fb": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_setRemoteDescription_4f10d6f07ea1b6fb"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_data_7cc63d753ae87890": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_data_7cc63d753ae87890"](p0i32);
/******/ 					},
/******/ 					"__wbg_setonopen_3183d4bf7ea4ddba": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_setonopen_3183d4bf7ea4ddba"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setonerror_43ca647f0069a280": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_setonerror_43ca647f0069a280"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setonmessage_a97a47daf848b804": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_setonmessage_a97a47daf848b804"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_94cd0327e9048e8d": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_new_94cd0327e9048e8d"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_send_2b7dc9f0151388c6": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_send_2b7dc9f0151388c6"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_createObjectStore_263bfc197cd2839e": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_createObjectStore_263bfc197cd2839e"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_transaction_99e7ea2e5dc43ae9": function(p0i32,p1i32,p2i32,p3i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_transaction_99e7ea2e5dc43ae9"](p0i32,p1i32,p2i32,p3i32);
/******/ 					},
/******/ 					"__wbg_objectStore_dc4b15d7f8979094": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_objectStore_dc4b15d7f8979094"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_channel_b6ef936849c75171": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_channel_b6ef936849c75171"](p0i32);
/******/ 					},
/******/ 					"__wbg_setonupgradeneeded_d4bb9f4c3894e5fd": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_setonupgradeneeded_d4bb9f4c3894e5fd"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_readyState_d02c9446d7590160": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_readyState_d02c9446d7590160"](p0i32);
/******/ 					},
/******/ 					"__wbg_setonopen_3007cbea2645a5ba": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_setonopen_3007cbea2645a5ba"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setonclose_52fb6daaa64a6272": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_setonclose_52fb6daaa64a6272"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_setonmessage_bc9172eb26cdbd56": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_setonmessage_bc9172eb26cdbd56"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_send_d0e1ebfe5084a9b8": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_send_d0e1ebfe5084a9b8"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_createIndex_fe0b75ec116b8d87": function(p0i32,p1i32,p2i32,p3i32,p4i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_createIndex_fe0b75ec116b8d87"](p0i32,p1i32,p2i32,p3i32,p4i32);
/******/ 					},
/******/ 					"__wbg_delete_9c5723da3f13f180": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_delete_9c5723da3f13f180"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_get_cfcee34ca98a34ed": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_get_cfcee34ca98a34ed"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_getAllKeys_cb3224484805ae61": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_getAllKeys_cb3224484805ae61"](p0i32);
/******/ 					},
/******/ 					"__wbg_put_34d0b26820180a8e": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_put_34d0b26820180a8e"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_e13110f81ae347cf": function() {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_new_e13110f81ae347cf"]();
/******/ 					},
/******/ 					"__wbg_push_b46eeec52d2b03bb": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_push_b46eeec52d2b03bb"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_newnoargs_f3b8a801d5d4b079": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_newnoargs_f3b8a801d5d4b079"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_8e95613cc6524977": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_call_8e95613cc6524977"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_call_d713ea0274dfc6d2": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_call_d713ea0274dfc6d2"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_new_3e06d4f36713e4cb": function() {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_new_3e06d4f36713e4cb"]();
/******/ 					},
/******/ 					"__wbg_new_12143e33a1bd4faf": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_new_12143e33a1bd4faf"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_new_d0c63652ab4d825c": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_new_d0c63652ab4d825c"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_resolve_2529512c3bb73938": function(p0i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_resolve_2529512c3bb73938"](p0i32);
/******/ 					},
/******/ 					"__wbg_then_4a7a614abbbe6d81": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_then_4a7a614abbbe6d81"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbg_then_3b7ac098cfda2fa5": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_then_3b7ac098cfda2fa5"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbg_self_07b2f89e82ceb76d": function() {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_self_07b2f89e82ceb76d"]();
/******/ 					},
/******/ 					"__wbg_window_ba85d88572adc0dc": function() {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_window_ba85d88572adc0dc"]();
/******/ 					},
/******/ 					"__wbg_globalThis_b9277fc37e201fe5": function() {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_globalThis_b9277fc37e201fe5"]();
/******/ 					},
/******/ 					"__wbg_global_e16303fe83e1d57f": function() {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_global_e16303fe83e1d57f"]();
/******/ 					},
/******/ 					"__wbg_set_304f2ec1a3ab3b79": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbg_set_304f2ec1a3ab3b79"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_string_get": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_string_get"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_debug_string": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_debug_string"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_throw": function(p0i32,p1i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_throw"](p0i32,p1i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1214": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_closure_wrapper1214"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1216": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_closure_wrapper1216"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1218": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_closure_wrapper1218"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1220": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_closure_wrapper1220"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1703": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_closure_wrapper1703"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper1705": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_closure_wrapper1705"](p0i32,p1i32,p2i32);
/******/ 					},
/******/ 					"__wbindgen_closure_wrapper3108": function(p0i32,p1i32,p2i32) {
/******/ 						return installedModules["../../pkg/allotize_bg.js"].exports["__wbindgen_closure_wrapper3108"](p0i32,p1i32,p2i32);
/******/ 					}
/******/ 				}
/******/ 			};
/******/ 		},
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/
/******/ 		// Fetch + compile chunk loading for webassembly
/******/
/******/ 		var wasmModules = {"1":["../../pkg/allotize_bg.wasm"]}[chunkId] || [];
/******/
/******/ 		wasmModules.forEach(function(wasmModuleId) {
/******/ 			var installedWasmModuleData = installedWasmModules[wasmModuleId];
/******/
/******/ 			// a Promise means "currently loading" or "already loaded".
/******/ 			if(installedWasmModuleData)
/******/ 				promises.push(installedWasmModuleData);
/******/ 			else {
/******/ 				var importObject = wasmImportObjects[wasmModuleId]();
/******/ 				var req = fetch(__webpack_require__.p + "" + {"../../pkg/allotize_bg.wasm":"d518ff2b89c47c1a3552"}[wasmModuleId] + ".module.wasm");
/******/ 				var promise;
/******/ 				if(importObject instanceof Promise && typeof WebAssembly.compileStreaming === 'function') {
/******/ 					promise = Promise.all([WebAssembly.compileStreaming(req), importObject]).then(function(items) {
/******/ 						return WebAssembly.instantiate(items[0], items[1]);
/******/ 					});
/******/ 				} else if(typeof WebAssembly.instantiateStreaming === 'function') {
/******/ 					promise = WebAssembly.instantiateStreaming(req, importObject);
/******/ 				} else {
/******/ 					var bytesPromise = req.then(function(x) { return x.arrayBuffer(); });
/******/ 					promise = bytesPromise.then(function(bytes) {
/******/ 						return WebAssembly.instantiate(bytes, importObject);
/******/ 					});
/******/ 				}
/******/ 				promises.push(installedWasmModules[wasmModuleId] = promise.then(function(res) {
/******/ 					return __webpack_require__.w[wasmModuleId] = (res.instance || res).exports;
/******/ 				}));
/******/ 			}
/******/ 		});
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// object with all WebAssembly.instance exports
/******/ 	__webpack_require__.w = {};
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./bootstrap.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bootstrap.js":
/*!**********************!*\
  !*** ./bootstrap.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// A dependency graph that contains any wasm must all be imported\r\n// asynchronously. This `bootstrap.js` file does the single async import, so\r\n// that no one else needs to worry about it again.\r\nPromise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./src/index.jsx */ \"./src/index.jsx\"))\r\n  .catch(e => console.error(\"Error importing `index.js`:\", e));\r\n\n\n//# sourceURL=webpack:///./bootstrap.js?");

/***/ })

/******/ });