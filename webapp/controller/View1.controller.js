sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("demoapp.controller.View1", {
			onInit: function () {
				var that = this;
this.loadGoogleMaps("https://maps.googleapis.com/maps/api/js?key=AIzaSyDooZrRl374TUxelXL-OM85nu4tvBSOKS4", that.setMapData.bind(that));
			},
			// function for loading google maps

			loadGoogleMaps: function (scriptUrl, callbackFn) {

				var script = document.createElement('script');

				script.onload = function () {

							   callbackFn();

				}

				script.src = scriptUrl;

				document.body.appendChild(script);

  },

  // function to set map data

  setMapData: function () {

				var myLocaon = new google.maps.LatLng(15.128972928646137, 75.47027154248605);

				var mapProperties = {

							   center: myLocaon,

							   
							   zoom: 6,

							   scrollwheel: true,

							   draggable: true,

							   mapTypeId: google.maps.MapTypeId.ROADMAP

				};

				var map = new google.maps.Map(this.getView().byId("hid").getDomRef(), mapProperties);

				var marker = new google.maps.Marker({

							   position: myLocaon

				});

				marker.setMap(map);

  }
		});
	});
