(function() {
	var SuperheroAddForm = React.createClass({
		getInitialState: function() {
			return {
				newSuperheroName: '',
				newSuperheroPhotoUrl: ''
			};
		},

		handleNameChange: function(event) {
			this.setState({newSuperheroName: event.target.value});
		},

		handlePhotoUrlChange: function(event) {
			this.setState({newSuperheroPhotoUrl: event.target.value});
		},

		submitHandler: function(evt) {
			this.props.addSuperheroData(this.state.newSuperheroName, this.state.newSuperheroPhotoUrl);
			this.setState({newSuperheroName: ''});
			this.setState({newSuperheroPhotoUrl: ''});
			evt.preventDefault();
		},

		render: function() {
			return (
				<form onSubmit={this.submitHandler}>
					<div>
						<label>Name</label> <input name="name" type="text" value={this.state.newSuperheroName} onChange={this.handleNameChange}/>
					</div>
					<div>
						<label>Photo URL</label> <input name="photo_url" type="text" value={this.state.newSuperheroPhotoUrl} onChange={this.handlePhotoUrlChange}/>
					</div>
					<button type="submit">Create</button>
				</form>
			);
		}
	});

	var SuperheroGrid = React.createClass({
		onRemoveSuperheroData: function(superheroData) {
			this.props.onRemoveSuperheroData(superheroData);
		},

		render: function() {
			return (this.props.superheroDataArray.length > 0) ? (
				<div className="superhero-grid">
				{
					this.props.superheroDataArray.map(function(superheroData, idx) {
						return (
							<SuperheroCard
								key={idx}
								superheroName={superheroData.name}
								superheroPhotoUrl={superheroData.photo_url}
								onRemoveSuperheroData={this.onRemoveSuperheroData.bind(this, superheroData)} />
						);
					}, this)
				}
				</div>
			) :
			(
				<div className="emptySuperheroesMessage">
					<p>There are no superheroes. Please create a superhero using the form above.</p>
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
					<div className="superhero-card-close" onClick={this.props.onRemoveSuperheroData}></div>
				</div>
			);
		}
	});

	var SuperheroApp = React.createClass({
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

		addSuperheroData: function(superheroName, superheroPhotoUrl) {
			var arr = this.state.superheroDataArray;
			arr.push({
				name: superheroName,
				photo_url: superheroPhotoUrl
			});
			this.setState({superheroDataArray: arr});
		},

		removeSuperheroData: function(superheroData) {
			var arr = this.state.superheroDataArray;
			arr = arr.filter(function (candidate) {
				return candidate !== superheroData;
			});
			this.setState({superheroDataArray: arr});
		},

		componentDidMount: function() {
			this.loadSuperheroData();
		},

		render: function() {
			return (
				<div>
					<SuperheroAddForm addSuperheroData={this.addSuperheroData} />
					<hr />
					<SuperheroGrid superheroDataArray={this.state.superheroDataArray} onRemoveSuperheroData={this.removeSuperheroData} />
				</div>
			);
		}
	});

	ReactDOM.render(<SuperheroApp />, document.getElementById("superheroApp"));

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