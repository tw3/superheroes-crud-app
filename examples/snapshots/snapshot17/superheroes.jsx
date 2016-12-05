(function() {
	var SuperheroGrid = React.createClass({
		getInitialState: function() {
			return {
				superheroDataArrayUri: 'superheroes.json',
				superheroDataArray: []
			};
		},

		loadSuperheroData: function() {
			var xhr = new XMLHttpRequest();
			xhr.open('GET', this.state.superheroDataArrayUri, true);
			xhr.onload = function() {
				var data = JSON.parse(xhr.responseText);
				this.setState({
					superheroDataArray: data
				});
			}.bind(this);
			xhr.send();
		},

		componentDidMount: function() {
			this.loadSuperheroData();
		},

		render: function() {
			return (
				<div className="superhero-grid">
				{
					this.state.superheroDataArray.map(function(superheroData, idx) {
						return (<SuperheroCard key={idx} superheroName={superheroData.name} superheroPhotoUrl={superheroData.photo_url} />);
					})
				}
				</div>
			);
		}
	});

	var SuperheroCard = React.createClass({
		render: function() {
			var superheroName = isValidName(this.props.superheroName) ? this.props.superheroName : null;
			var style = isValidPhotoUrl(this.props.superheroPhotoUrl) ? {
				backgroundImage: "url('"+this.props.superheroPhotoUrl+"')"
			} : null;

			return (
				<div className="superhero-card">
					<div className="superhero-card-inner">
						<div className="superhero-avatar-area">
							<div className="superhero-avatar-thumb" style={style}></div>
						</div>
						<div className="superhero-info-area">
							<div className="superhero-info-name">
								{ superheroName }
							</div>
						</div>
					</div>
					<div className="superhero-card-close"></div>
				</div>
			);
		}
	});

	ReactDOM.render(<SuperheroGrid />, document.getElementById("superheroGridContainer"));

	// HELPER FUNCTIONS

	function isValidName(str) {
		// This would need improvement if we are doing form validation, e.g. strip tags
		return isNonEmptyStr(str);
	}

	function isValidPhotoUrl(str) {
		// This would need improvement if we are doing form validation, e.g. strip tags and validation url syntax
		return isNonEmptyStr(str);
	}

	function isNonEmptyStr(str) {
		return (str != null && typeof(str) === "string" && 0 !== str.length);
	}
})();