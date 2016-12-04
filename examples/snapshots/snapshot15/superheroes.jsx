(function() {
	var SuperheroCard = React.createClass({
		render: function() {
			return (
				<div className="superhero-card">
					<div className="superhero-card-inner">
						<div className="superhero-avatar-area">
							<div className="superhero-avatar-thumb" style={{ backgroundImage: "url('"+this.props.superheroPhotoUrl+"')" }}></div>
						</div>
						<div className="superhero-info-area">
							<div className="superhero-info-name">
								{ this.props.superheroName }
							</div>
						</div>
					</div>
					<div className="superhero-card-close"></div>
				</div>
			);
		}
	});

	ReactDOM.render(<SuperheroCard superheroName="Batman" superheroPhotoUrl="../../../images/avatars/batman.jpg" />, document.getElementById("superhero-grid"));
})();