new Vue({
	el: '#field-D-inputs',
	data: {
		refName: {
			id: ""
		}
	},
	methods: {
		changeValue: function(event) {

			var original = event.target.value;
			//
			function camelCase(val) {
  				return val.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    			if (+match === 0) return "";
    			return index == 0 ? match.toLowerCase() : match.toUpperCase();
  				});
			}
			
			camelCased = camelCase(original);


			this.refName.id = camelCased;
		}
	}
});